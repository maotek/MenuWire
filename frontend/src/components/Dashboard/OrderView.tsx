'use client'

import { Order } from '@/app/lib/types'
import { useLocale, useTranslations } from 'next-intl'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

interface OrderViewProps {
  orders: Order[]
  onOrderStatusChange: (orderId: number, newStatus: Order['status']) => void
}

export default function OrderView({
  orders,
  onOrderStatusChange,
}: OrderViewProps) {
  const t = useTranslations('Dashboard')
  const locale = useLocale()

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'placed':
        return 'bg-yellow-200/80 dark:bg-yellow-200/80 text-yellow-900 dark:text-yellow-900 dark:hover:bg-yellow-200/80'
      case 'finished':
        return 'bg-green-200/80 dark:bg-green-200/80 text-green-900 dark:text-green-900 dark:hover:bg-green-200/80'
      case 'cancelled':
        return 'bg-red-300/80 dark:bg-red-300/80 text-red-900 dark:text-red-900 dark:hover:bg-red-300/80'
      default:
        return 'bg-gray-300/80 dark:bg-gray-300/80 text-gray-900 dark:text-gray-900 dark:hover:bg-gray-300/80'
    }
  }

  const renderOrderCard = (order: Order) => (
    <div
      key={order.id}
      className="bg-body-3 rounded-lg shadow-md p-4 flex flex-col"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">
          {t('order')} #{order.id}
        </h3>

        {/* Status dropdown */}
        <Select
          value={order.status}
          onValueChange={(value: string) =>
            onOrderStatusChange(order.id, value as Order['status'])
          }
        >
          <SelectTrigger
            className={`h-7 px-3 py-1 text-xs font-semibold rounded-full border-none ${getStatusColor(
              order.status
            )}`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-body-3 border-1 border-[rgb(var(--border-1))] text-heading-1">
            <SelectItem value="placed">{t('statusPlaced')}</SelectItem>
            <SelectItem value="finished">{t('statusFinished')}</SelectItem>
            <SelectItem value="cancelled">{t('statusCancelled')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {t('table')}: {order.table.table_number}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
        {new Date(order.date).toLocaleString(locale, {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}
      </p>

      <div className="border-t border-[rgb(var(--border-1))] pt-2 flex-grow">
        {order.items.map(item => (
          <div key={item.id} className="mb-1">
            <div className="flex justify-between">
              <span className="font-medium">
                {item.name[locale as keyof typeof item.name] || item.name.en}
              </span>
              <span>
                x{item.quantity} (€{item.unit_price})
              </span>
            </div>
            {item.options && item.options.length > 0 && (
              <div className="pl-4 text-sm text-gray-500 dark:text-gray-400">
                {item.options.map(option => (
                  <div key={option.id}>
                    +{' '}
                    {option.name[locale as keyof typeof option.name] ||
                      option.name.en}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-[rgb(var(--border-1))] mt-2 pt-2 font-semibold flex justify-between">
        <span>{t('total')}</span>
        <span>€{order.total}</span>
      </div>
    </div>
  )

  const placedOrders = orders.filter(order => order.status === 'placed')
  const finishedOrders = orders.filter(order => order.status === 'finished')
  const cancelledOrders = orders.filter(order => order.status === 'cancelled')

  return (
    <div className="p-4 relative">
      <h2 className="text-2xl font-bold text-center">
        {t('incomingOrders')}
      </h2>
      <Tabs defaultValue="placed" className="w-full">
        <div className="sticky top-14 z-10 w-full overflow-x-auto bg-body-1 py-2">
          <TabsList className="inline-flex text-xl w-auto gap-4 min-w-full justify-start bg-body-1">
            <TabsTrigger
              value="placed"
              className="border-0 !data-[state=active]:bg-body-3 !text-[rgb(var(--heading-1))] !dark:text-[rgb(var(--heading-1))]"
            >
              {t('statusPlaced')} ({placedOrders.length})
            </TabsTrigger>
            <TabsTrigger
              value="finished"
              className="border-0 bg-transparent !data-[state=active]:bg-body-3 !text-[rgb(var(--heading-1))] !dark:text-[rgb(var(--heading-1))]"
            >
              {t('statusFinished')} ({finishedOrders.length})
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="border-0 bg-transparent !data-[state=active]:bg-body-3 !text-[rgb(var(--heading-1))] !dark:text-[rgb(var(--heading-1))]"
            >
              {t('statusCancelled')} ({cancelledOrders.length})
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="placed">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {placedOrders.map(renderOrderCard)}
          </div>
        </TabsContent>
        <TabsContent value="finished">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {finishedOrders.map(renderOrderCard)}
          </div>
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cancelledOrders.map(renderOrderCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
