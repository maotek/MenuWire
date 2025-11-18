'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart, Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Options } from '../Order/Options'
import { locales } from '@/i18n/config'

type WsStatus = 'online' | 'offline' | 'connecting'

interface DashboardNavbarProps {
    activeView: 'orders' | 'settings'
    onSelectView: (view: 'orders' | 'settings') => void
    onLogout: () => void
    userName: string
    restaurantName: string
    wsStatus: WsStatus
}

const StatusIndicator = ({ status }: { status: WsStatus }) => {
    const color = {
        online: 'bg-green-500',
        offline: 'bg-red-500',
        connecting: 'bg-yellow-500',
    }[status]

    return (
        <div className="flex items-center space-x-2">
            <span className={`h-3 w-3 rounded-full ${color} animate-pulse`}></span>
        </div>
    )
}

export default function DashboardNavbar({
    activeView,
    onSelectView,
    onLogout,
    userName,
    restaurantName,
    wsStatus,
}: DashboardNavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('Dashboard')
    const auth_t = useTranslations('Auth')

    const navItems = [
        {
            view: 'orders',
            label: t('incomingOrders'),
            icon: ShoppingCart,
        },
        {
            view: 'settings',
            label: t('restaurantSettings'),
            icon: Settings,
        },
    ] as const

    const NavLink = ({
        view,
        label,
        icon: Icon,
    }: {
        view: 'orders' | 'settings'
        label: string
        icon: React.ElementType
    }) => (
        <Button
            variant="ghost"
            onClick={() => {
                onSelectView(view)
                setIsMenuOpen(false)
            }}
            className={`justify-start gap-2  ${activeView === view ? 'bg-body-3' : ''}`}
        >
            <Icon className="h-4 w-4" />
            {label}
        </Button>
    )

    return (
        <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-[rgb(var(--border-1))] bg-background px-4 sm:px-4 bg-body-1">
            {/* Left side: Hamburger and Restaurant Name */}
            <div className="flex items-center gap-4">
                <Button
                    size="icon"
                    className="lg:hidden bg-body-3"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-4 w-4 text-heading-1" /> : <Menu className="h-4 w-4 text-heading-1" />}
                </Button>
                <h1 className="font-semibold text-xl text-heading-1 text-center">{restaurantName}</h1>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex lg:gap-4">
                {navItems.map(item => (
                    <NavLink key={item.view} {...item} />
                ))}
            </nav>

            {/* Right side: User info and Logout */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                    {userName}
                    {/* {auth_t('welcomeBack', { name: userName })} */}
                </span>
                <StatusIndicator status={wsStatus} />
                <div className="hidden lg:flex items-center gap-2">
                    <Options supportedLocales={locales} />
                     <Button className='border-[rgb(var(--border-1))] bg-body-3 text-white bg-red-500/80' onClick={onLogout}>
                        {auth_t('logout')}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute z-10 w-max top-14 left-0 right-0 border-b border-r rounded-br-md border-[rgb(var(--border-1))] bg-body-1 shadow-lg lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }`}
            >
                <nav className="flex flex-col p-4">
                    <h2 className="text-center text-lg font-semibold text-heading-1 pb-4">
                        Menu
                    </h2>
                    <div className="flex flex-col gap-2">
                        {navItems.map(item => (
                            <NavLink key={item.view} {...item} />
                        ))}
                    </div>
                    <div className="border-t border-[rgb(var(--border-1))] my-4" />
                    <div className="flex flex-row gap-2  items-center justify-between">
                        <Options supportedLocales={locales} />
                        <Button className='border-[rgb(var(--border-1))] bg-body-3 text-white flex-1 bg-red-500/80' onClick={onLogout}>
                            {auth_t('logout')}
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
