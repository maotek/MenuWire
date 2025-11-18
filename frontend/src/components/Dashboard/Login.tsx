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
    <div className="flex flex-col gap-2 max-w-md mx-auto h-full items-center justify-center">
      <h1 className="text-2xl font-bold">{t('loginTitle')}</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border-1 p-6 rounded-lg border-[rgb(var(--border-1))]"
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
          className="w-full bg-body-1 text-heading-1 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? t('loggingIn') : t('logIn')}
        </button>
      </form>
    </div>
  )
}
