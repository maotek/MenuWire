'use client'

import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { login } from '@/app/lib/api'
import { CurrentUser } from './Dashboard'

interface LoginProps {
  onLoginSuccess: (user: CurrentUser) => void
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const t = useTranslations('Auth')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const u = await login(username, password)
      onLoginSuccess(u)
    } catch {
      setError(t('invalidCredentials'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="
        relative w-full min-h-screen flex flex-col items-center justify-center
        before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
        before:bg-[url('/assets/bg-pattern.png')]
        before:bg-top before:bg-repeat
        before:opacity-100 dark:before:opacity-100
        before:invert dark:before:invert-0
        before:-z-10
        before:bg-origin-border before:bg-clip-border
      "
    >
      <div className="flex flex-col gap-2 max-w-sm w-full mx-auto z-10 p-4">
        <h1 className="text-2xl font-bold text-center">{t('loginTitle')}</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-1 p-6 rounded-lg border-[rgb(var(--border-1))] bg-body-1"
        >
          {error && <p className="text-red-500">{error}</p>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              {t('username')}
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.currentTarget.value)}
              required
              className="mt-1 block w-full border-1 rounded px-3 py-2 border-[rgb(var(--border-1))]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              required
              className="mt-1 block w-full border-1 rounded px-3 py-2 border-[rgb(var(--border-1))]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-body-3 text-heading-1 py-2 rounded hover:bg-blue-700 transition border-1 border-[rgb(var(--border-1))]"
          >
            {loading ? t('loggingIn') : t('logIn')}
          </button>
        </form>
      </div>
    </div>
  )
}
