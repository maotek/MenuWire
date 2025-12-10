'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { logout, initAuth, fetchCurrentUser } from '@/app/lib/api'
import { Loader } from 'lucide-react'
import Login from './Login'
import OrderView from './OrderView'
import Settings from './Settings'
import { Order, StringItem } from '@/app/lib/types'
import DashboardNavbar from './DashboardNavbar'
import { useToast } from '@/hooks/useToast'

export interface CurrentUser {
  username: string
  first_name: string
  restaurant_name: StringItem
}

async function getOrders(): Promise<Order[]> {
  const token = localStorage.getItem('access_token')
  if (!token) {
    throw new Error('No token found')
  }

  const response = await fetch('/api/get-orders/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch orders')
  }

  return response.json()
}

export default function Dashboard() {
  const [user, setUser] = useState<CurrentUser | null>(null)
  const [initializing, setInitializing] = useState<boolean>(true)
  const [activeView, setActiveView] = useState<'orders' | 'settings'>('orders')
  const [orders, setOrders] = useState<Order[]>([])
  const ws = useRef<WebSocket | null>(null)
  const [wsStatus, setWsStatus] = useState<'online' | 'offline' | 'connecting'>('connecting')
  const reconnectAttempts = useRef(1)
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null)
  const { showToast, ToastComponent } = useToast()

  const [error, setError] = useState<string>('')
  const t = useTranslations('Dashboard')
  const locale = useLocale()

  const sortedOrders = useMemo(() => {
    const statusOrder: Record<Order['status'], number> = {
      placed: 1,
      finished: 2,
      cancelled: 3,
    }

    return [...orders].sort((a, b) => {
      const statusDiff = statusOrder[a.status] - statusOrder[b.status]
      if (statusDiff !== 0) {
        return statusDiff
      }
      // If statuses are the same, sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [orders])



  const connect = useCallback(async () => {
    try {
      console.log('Refreshing token before connecting...')
      await fetchCurrentUser() // Ensure token is fresh before connecting
    } catch (err) {
      console.error('Failed to refresh token, logging out.', err)
      logout()
      setUser(null)
      return // Stop the connection attempt
    }

    const token = localStorage.getItem('access_token')
    if (!token) {
      console.error('No token found for WebSocket connection')
      setWsStatus('offline')
      logout()
      setUser(null) // No token, so we are not logged in.
      return
    }

    console.log(`Attempting to connect (Attempt: ${reconnectAttempts.current})...`)
    setError(prev => {
      const msg = `[${new Date().toLocaleTimeString()}] Connecting to server...`
      return prev ? `${prev}\n${msg}` : msg
    })
    setWsStatus('connecting')

    const host =
      process.env.NODE_ENV === 'production'
        ? window.location.host
        : 'localhost:8000'

    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    const newWs = new WebSocket(
      `${wsProtocol}//${host}/ws/orders/?token=${token}`
    )

    setError(prev => {
      const msg = `[${new Date().toLocaleTimeString()}] WebSocket connecting to ${wsProtocol}//${host}/ws/orders/`
      return prev ? `${prev}\n${msg}` : msg
    })

    newWs.onopen = () => {
      console.log('WebSocket connected')
      setWsStatus('online')
      setError('') // Clear errors on successful connection
      if (reconnectAttempts.current > 0) {
        showToast(t('reconnected'))
      }
      reconnectAttempts.current = 0 // Reset attempts on successful connection
    }

    newWs.onmessage = event => {
      const data = JSON.parse(event.data)
      if (data.type === 'order_status_update') {
        setOrders(prevOrders =>
          prevOrders.map(order =>
            order.id === data.order_id
              ? { ...order, status: data.status }
              : order
          )
        )
      } else if (data.type === 'new_order' || data.type === 'send.order') {
        setOrders(prevOrders => [data.order, ...prevOrders])
      }
    }

    newWs.onclose = event => {
      console.log('WebSocket disconnected')
      setWsStatus('connecting')
      setError(prev => {
        const msg = `[${new Date().toLocaleTimeString()}] Connection closed: Code ${event.code}, Reason: ${event.reason || 'No reason given'}`
        return prev ? `${prev}\n${msg}` : msg
      })

      // Don't auto-reconnect on certain close codes (e.g., invalid token)
      if (event.code === 4000 || event.code === 4001) {
        console.log('Authentication error. Logging out.')
        logout()
        setUser(null)
        return
      }

      // Exponential backoff reconnect logic
      const delay = Math.min(
        1000 * 2 ** reconnectAttempts.current,
        30000
      ) // 1s, 2s, 4s, ..., max 30s
      console.log(`Will attempt to reconnect in ${delay / 1000}s`)
      setError(prev => {
        const msg = `[${new Date().toLocaleTimeString()}] Reconnecting in ${delay / 1000}s...`
        return prev ? `${prev}\n${msg}` : msg
      })
      reconnectAttempts.current++

      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current)
      }
      reconnectTimeout.current = setTimeout(connect, delay)
    }

    newWs.onerror = error => {
      console.error('WebSocket error')
      setError(prev => {
        const msg = `[${new Date().toLocaleTimeString()}] WebSocket error occurred: ${JSON.stringify(error)}`
        return prev ? `${prev}\n${msg}` : msg
      })
      newWs.close() // This will trigger onclose and the reconnect logic
    }

    ws.current = newWs
  }, [setUser, setWsStatus, setError])

  // Restore session via JWT on mount
  useEffect(() => {
    console.log('Restoring authentication...')
    initAuth()
      .then(user => {
        if (user) {
          console.log('User authenticated:', user.username)
          setUser(user)
        }
      })
      .catch(err => {
        console.error('Failed to restore authentication:')
        setError(prev => {
          const msg = `[${new Date().toLocaleTimeString()}] Failed to restore session: ${err.message}`
          return prev ? `${prev}\n${msg}` : msg
        })
      })
      .finally(() => setInitializing(false))
  }, [])

  // Effect to manage WebSocket connection based on user state
  useEffect(() => {
    if (user) {
      console.log('User is logged in, establishing WebSocket connection...')
      connect()
      getOrders().then(setOrders).catch(console.error)
    }

    // Cleanup function: This will be called when the user logs out (and user becomes null) or when the component is unmounted.
    return () => {
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current)
      }
      if (ws.current) {
        console.log('Closing WebSocket connection due to component unmount/user change.')
        // Prevent onclose from triggering reconnect
        ws.current.onclose = null
        ws.current.close()
        ws.current = null
        setWsStatus('offline')
      }
    }
  }, [user, connect])

  const handleLogoutClick = () => {
    logout();
    setUser(null);
    if (ws.current) {
      console.log('Closing WebSocket due to logout.')
      ws.current.onclose = null
      ws.current.close()
      ws.current = null
      setWsStatus('offline')
    }
  }

  const handleOrderStatusChange = (
    orderId: number,
    newStatus: Order['status']
  ) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(
        JSON.stringify({
          type: 'update_order_status',
          order_id: orderId,
          status: newStatus,
        })
      )
    } else {
      console.error('WebSocket is not connected.')
    }
  }

  if (initializing) {
    return (
      <div className="flex items-center justify-center h-screen bg-[rgb(var(--bg-3))]">
        <Loader className="ml-2 h-10 w-10 animate-spin justify-center items-center text-heading-1" />
      </div>
    )
  }

  if (user) {
    const restaurantName = user.restaurant_name[locale as keyof StringItem] || user.restaurant_name.en

    return (
      <div className="min-h-screen w-full bg-body-1">
        <ToastComponent />
        <DashboardNavbar
          activeView={activeView}
          onSelectView={setActiveView}
          onLogout={handleLogoutClick}
          userName={user.first_name}
          restaurantName={restaurantName}
          wsStatus={wsStatus}
        />

        {wsStatus === 'connecting' && (
          <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[rgb(var(--bg-3))] text-white">
            <Loader className="ml-2 h-10 w-10 animate-spin justify-center items-center" />
            {t('connectingToServer')}
            {error && (
              <>
                <p className="mt-4 text-sm">{t('reportIssue')}:</p>
                <pre className="text-xs text-red-400 px-2 bg-black/20 rounded mx-2 max-w-2xl h-1/2 overflow-y-auto whitespace-pre-wrap">
                  {error}
                </pre>
              </>
            )}
          </div>
        )}

        {wsStatus === 'online' && (
          <main className="p-4 sm:p-6">
            {activeView === 'orders' ? (
              <OrderView
                orders={sortedOrders}
                onOrderStatusChange={handleOrderStatusChange}
              />
            ) : (
              <Settings />
            )}
          </main>
        )}
      </div>
    )
  }

  return <Login onLoginSuccess={setUser} />
}
