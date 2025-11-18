'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  PlusCircle,
  Trash2,
  Edit,
  Utensils,
  Bookmark,
  Tag,
  ListPlus,
} from 'lucide-react'

// Mock data - in a real app, this would come from an API
const mockData = {
  dishes: [
    { id: 1, name: 'Samgyeopsal', price: 15.99, category: 'Grilled Meats' },
    { id: 2, name: 'Bulgogi', price: 18.5, category: 'Grilled Meats' },
    { id: 3, name: 'Kimchi Jjigae', price: 14.0, category: 'Stews' },
  ],
  categories: [
    { id: 1, name: 'Grilled Meats', dishCount: 2 },
    { id: 2, name: 'Stews', dishCount: 1 },
    { id: 3, name: 'Noodles', dishCount: 0 },
  ],
  tags: [
    { id: 1, name: 'Spicy', dishCount: 1 },
    { id: 2, name: 'Pork', dishCount: 2 },
    { id: 3, name: 'Beef', dishCount: 1 },
  ],
  options: [
    { id: 1, name: 'Extra Kimchi', price: 1.5 },
    { id: 2, name: 'Add Cheese', price: 2.0 },
  ],
}

type EntityType = keyof typeof mockData

const entityConfig = {
  dishes: { icon: Utensils, title: 'dishes', description: 'manageDishes' },
  categories: {
    icon: Bookmark,
    title: 'categories',
    description: 'manageCategories',
  },
  tags: { icon: Tag, title: 'tags', description: 'manageTags' },
  options: { icon: ListPlus, title: 'options', description: 'manageOptions' },
}

export default function Settings() {
  const t = useTranslations('Dashboard')
  const [activeView, setActiveView] = useState<EntityType>('dishes')

  const NavItem = ({
    entity,
    icon: Icon,
  }: {
    entity: EntityType
    icon: React.ElementType
  }) => (
    <Button
      variant={activeView === entity ? 'secondary' : 'ghost'}
      onClick={() => setActiveView(entity)}
      className="w-full justify-start gap-2"
    >
      <Icon className="h-4 w-4" />
      {t(entityConfig[entity].title)}
    </Button>
  )

  const renderContent = () => {
    const items = mockData[activeView]
    const { title, description } = entityConfig[activeView]

    return (
      <Card className="flex-1 bg-body-3 border-0 text-heading-1">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1.5">
            <CardTitle>{t(title)}</CardTitle>
            <CardDescription>{t(description)}</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            {t(`add${title.charAt(0).toUpperCase() + title.slice(1, -1)}`)}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-[rgb(var(--border-1))]">
            {items.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  {'price' in item && (
                    <span className="text-sm text-gray-500">
                      €{item.price.toFixed(2)}
                    </span>
                  )}
                  {'dishCount' in item && (
                    <span className="text-sm text-gray-500">
                      {item.dishCount} {t('dishes').toLowerCase()}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">{t('restaurantSettings')}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <nav className="flex flex-row md:flex-col gap-2 md:w-1/5">
          {Object.keys(mockData).map(key => (
            <NavItem
              key={key}
              entity={key as EntityType}
              icon={entityConfig[key as EntityType].icon}
            />
          ))}
        </nav>

        {/* Main Content */}
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  )
}
