'use client'

import { useState } from 'react'
import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import OrderView from '@/components/Dashboard/OrderView'
import Settings from '@/components/Dashboard/Settings'
import { Order } from '@/app/lib/types'
import { useTranslations } from 'next-intl'
import { Loader } from 'lucide-react'

const mockOrders: Order[] = [
  {
    id: 1,
    table: {
      table_number: 5,
      restaurant: {
        name: { en: 'Demo Restaurant', nl: 'Demo Restaurant', zh: '演示餐厅' },
      },
    },
    status: 'placed',
    date: new Date().toISOString(),
    items: [
      {
        id: 1,
        name: { en: 'Pork Belly', nl: 'Varkensbuik', zh: '五花肉' },
        quantity: 2,
        unit_price: '16.62',
        options: [
          {
            id: 1,
            name: {
              en: 'Extra Garlic Sauce',
              nl: 'Extra knoflooksaus',
              zh: '额外蒜蓉蘸酱',
            },
            description: { en: '', nl: '', zh: '' },
            price: '1.50',
          },
        ],
      },
      {
        id: 2,
        name: {
          en: 'Kimchi Fried Rice',
          nl: 'Kimchi Gebakken Rijst',
          zh: '泡菜炒饭',
        },
        quantity: 1,
        unit_price: '12.50',
        options: [],
      },
    ],
    total: '47.74',
  },
  {
    id: 2,
    table: {
      table_number: 3,
      restaurant: {
        name: { en: 'Demo Restaurant', nl: 'Demo Restaurant', zh: '演示餐厅' },
      },
    },
    status: 'finished',
    date: new Date(new Date().getTime() - 30 * 60000).toISOString(), // 30 minutes ago
    items: [
      {
        id: 3,
        name: { en: 'Bibimbap', nl: 'Bibimbap', zh: '石锅拌饭' },
        quantity: 1,
        unit_price: '14.00',
        options: [],
      },
    ],
    total: '14.00',
  },
  {
    id: 3,
    table: {
      table_number: 8,
      restaurant: {
        name: { en: 'Demo Restaurant', nl: 'Demo Restaurant', zh: '演示餐厅' },
      },
    },
    status: 'cancelled',
    date: new Date(new Date().getTime() - 60 * 60000).toISOString(), // 1 hour ago
    items: [
      {
        id: 4,
        name: { en: 'Tteokbokki', nl: 'Tteokbokki', zh: '炒年糕' },
        quantity: 1,
        unit_price: '10.00',
        options: [],
      },
    ],
    total: '10.00',
  },
  {
    id: 4,
    table: {
      table_number: 2,
      restaurant: {
        name: { en: 'Demo Restaurant', nl: 'Demo Restaurant', zh: '演示餐厅' },
      },
    },
    status: 'placed',
    date: new Date(new Date().getTime() - 5 * 60000).toISOString(), // 5 minutes ago
    items: [
      {
        id: 5,
        name: { en: 'Bulgogi', nl: 'Bulgogi', zh: '韩式烤肉' },
        quantity: 1,
        unit_price: '18.00',
        options: [],
      },
      {
        id: 6,
        name: { en: 'Coke', nl: 'Cola', zh: '可乐' },
        quantity: 2,
        unit_price: '2.50',
        options: [],
      },
    ],
    total: '23.00',
  },
]

export default function Page() {
  const t = useTranslations('Dashboard')
  const [activeView, setActiveView] = useState<'orders' | 'settings'>('orders')
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [wsStatus] = useState<'online' | 'connecting' | 'offline'>('online')
  const [error] = useState<string | null>(null)

  const handleOrderStatusChange = (
    orderId: number,
    newStatus: Order['status']
  ) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  const handleLogoutClick = () => {
    alert('Logout functionality is not implemented in this demo.')
  }

  const sortedOrders = [...orders].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen w-full bg-body-1 text-heading-1">
      <DashboardNavbar
        activeView={activeView}
        onSelectView={setActiveView}
        onLogout={handleLogoutClick}
        userName="Demo User"
        restaurantName="Demo Restaurant"
        wsStatus={wsStatus}
      />

      {wsStatus === 'connecting' && (
        <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[rgb(var(--bg-3))] text-white">
          <Loader className="ml-2 h-10 w-10 animate-spin justify-center items-center" />
          {t('connectingToServer')}
          {error && (
            <>
              <p className="mt-4 text-sm">{t('reportIssue')}:</p>
              <pre className="text-xs text-red-400 mt-2 p-2 bg-black/20 rounded w-full max-w-2xl h-32 overflow-y-auto whitespace-pre-wrap">
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