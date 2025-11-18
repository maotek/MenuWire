'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { QrCode, Zap, Lock, LayoutDashboard, Settings, Check } from 'lucide-react';
import { Options } from '@/components/Order/Options';
import { locales } from '@/i18n/config';

const reviews = [
  {
    name: 'Maria Santos',
    role: 'Owner, Café Lisboa',
    quote:
      'We went from lost paper tickets to fully digital orders in one weekend. My staff picked it up in minutes.',
  },
  {
    name: 'Jeroen de Vries',
    role: 'Manager, Stadskantine Noord',
    quote:
      'Finally a system that doesn’t feel like 1998. Clean dashboard, clear tickets, and no monthly headaches.',
  },
  {
    name: 'Sara Müller',
    role: 'Bar Manager, Hafenbar',
    quote:
      'Guests love scanning the QR and paying at the table. Tips went up and our team runs around a lot less.',
  },
  {
    name: 'Omar Khalid',
    role: 'Owner, Spice Route',
    quote:
      'Setup took less than an hour. We kept our existing workflow but removed miscommunication with the kitchen.',
  },
  {
    name: 'Luca Romano',
    role: 'Owner, Trattoria Roma',
    quote:
      'We handle Friday rush without shouting across the bar anymore. Tickets are clear and always in order.',
  },
  {
    name: 'Anouk Janssen',
    role: 'Floor Manager, Bar Buiten',
    quote:
      'I onboard new staff in ten minutes now. The system is simple enough that nobody is scared to touch it.',
  },
  {
    name: 'David Kim',
    role: 'Owner, Seoul Street Bites',
    quote:
      'We switched from pen and paper. Now I can finally see which tables are waiting too long in one glance.',
  },
  {
    name: 'Elena García',
    role: 'Operations Lead, Rooftop 21',
    quote:
      'Late-night edits to the menu are live instantly. No more reprinting menus every time we change cocktails.',
  },
  {
    name: 'Tomás Oliveira',
    role: 'Owner, Taproom Atlântico',
    quote:
      'QR ordering reduced queues at the bar. People stay longer because they don’t have to fight for attention.',
  },
];

export default function HomePage() {
  const t = useTranslations('HomePage');
  const c = useTranslations('Common');

  return (
    <main>
      <div className="fixed left-0 top-0 w-dvw h-dvh bg-[url('/assets/landing-bg.png')] bg-center bg-cover z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.30)_100%)] z-[5]" />
      <div className="ambient-blob ambient-blob-1 animate-float-medium z-[6] fixed" />
      <div className="ambient-blob ambient-blob-2 ambient-blob-emph animate-float-strong z-[6]" />


      {/* ====== BRAND HEADER ====== */}
      <header className="absolute w-full top-6 left-0 right-0 z-20">
        <div className="w-full px-6">
          <div className="flex justify-center">
            <div className="flex max-w-7xl items-center justify-center gap-4 sm:gap-8 bg-black/30 glass-card px-2 w-full py-4 rounded-2xl border border-white/10 shadow-lg shadow-black/20">
              <Image
                src="/assets/logo.png"
                alt="menuwire Logo"
                width={75}
                height={75}
                className="rounded-lg"
              />
              <span className="text-xl sm:text-6xl font-extrabold text-white tracking-wide drop-shadow-md">
                {c('brandName')}
              </span>
              <Options supportedLocales={locales} />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 md:h-dvh flex items-stretch justify-center pb-8 px-6 pt-38 md:pt-40">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: Hero */}
          <section className="flex flex-col h-full gap-6">
            <div className="glass-card rounded-2xl p-7 md:p-10 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] border border-white/10 flex-1 flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.75)] text-center">
                {t('headline')}
              </h1>

              <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-100/95 drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] max-w-2xl">
                {t('subhead')}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/order-demo"
                  className="btn-shine inline-flex items-center justify-center px-6 py-3 rounded-2xl text-base md:text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 shadow-lg shadow-orange-700/30 hover:shadow-orange-500/50 transform transition hover:scale-[1.05] focus-visible:ring-4 focus-visible:ring-orange-300/30"
                  aria-label={t('orderDemo')}
                >
                  {t('orderDemo')}
                </Link>

                <Link
                  href="/dashboard-demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-base md:text-lg font-semibold text-white bg-emerald-500 shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/50 transition hover:brightness-105 focus-visible:ring-4 focus-visible:ring-emerald-300/40"
                  aria-label={t('dashboardDemo')}
                >
                  {t('dashboardDemo')}
                </Link>
              </div>

              <p className="mt-6 text-sm tracking-wide uppercase font-medium text-gray-200/80">
                {c('tagline')}
              </p>
            </div>

            {/* Quick info row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-5 text-center border border-white/10 hover:border-white/30 transition-colors">
                <QrCode className="w-6 h-6 text-white mx-auto mb-1" aria-hidden />
                <div className="mt-1 text-sm text-gray-100">{c('noContact')}</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center border border-white/10 hover:border-white/30 transition-colors">
                <Zap className="w-6 h-6 text-white mx-auto mb-1" aria-hidden />
                <div className="mt-1 text-sm text-gray-100">{c('fastSetup')}</div>
              </div>
              <div className="glass-card rounded-xl p-5 text-center border border-white/10 hover:border-white/30 transition-colors">
                <Lock className="w-6 h-6 text-white mx-auto mb-1" aria-hidden />
                <div className="mt-1 text-sm text-gray-100">{c('secureLocal')}</div>
              </div>
            </div>
          </section>

          {/* RIGHT: Preview + Reviews */}
          <aside className="flex flex-col h-full gap-6">
            <div className="glass-card justify-center border-white/10 rounded-2xl p-7 md:p-10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)] flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {c('preview')}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start gap-3 glass-card rounded-xl p-4 border border-white/10 hover:border-white/30 transition-colors">
                  <div className="w-12 h-12 rounded-md bg-orange-500/80 flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{c('scanOrderTitle')}</p>
                    <p className="text-xs text-gray-200/80">{c('scanOrderDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 glass-card rounded-xl p-4 border border-white/10 hover:border-white/30 transition-colors">
                  <div className="w-12 h-12 rounded-md bg-emerald-500/80 flex items-center justify-center">
                    <LayoutDashboard className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{c('simpleDashboardTitle')}</p>
                    <p className="text-xs text-gray-200/80">{c('simpleDashboardDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 glass-card rounded-xl p-4 border border-white/10 hover:border-white/30 transition-colors">
                  <div className="w-12 h-12 rounded-md bg-indigo-500/80 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{c('customizableTitle')}</p>
                    <p className="text-xs text-gray-200/80">{c('customizableDesc')}</p>
                  </div>
                </div>
              </div>

              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <label htmlFor="hero-email" className="sr-only">
                  {c('emailLabel')}
                </label>
                <input
                  id="hero-email"
                  type="email"
                  required
                  placeholder={c('emailPlaceholder')}
                  className="w-full sm:w-auto flex-1 rounded-xl bg-white/10 text-white placeholder-white/60 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/50 border border-white/10"
                />
                <button
                  type="submit"
                  className="rounded-xl px-5 py-2.5 bg-emerald-500 text-white text-sm font-semibold hover:brightness-105 transition shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/40"
                >
                  {c('emailSubmit')}
                </button>
              </form>
            </div>

            {/* AUTO-SCROLLING REVIEWS (CSS only) */}
            <div className="glass-card rounded-2xl p-4 md:p-5 text-gray-200 border border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-2">
                {c('trustedByHospitality')}
              </p>

              <div className="reviews-marquee-outer">
                <div className="reviews-marquee-track">
                  {[...reviews, ...reviews].map((review, idx) => (
                    <figure
                      key={`${review.name}-${idx}`}
                      className="min-w-[230px] max-w-xs glass-card rounded-xl border border-white/10 p-4 shrink-0"
                    >
                      <blockquote className="text-sm text-white/90 text-wrap">
                        “{review.quote}”
                      </blockquote>
                      <figcaption className="mt-3 text-xs text-gray-300">
                        <span className="font-semibold text-white">{review.name}</span>
                        <span className="block text-[11px] text-gray-400">{review.role}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ====== PRICING SECTION ====== */}
      <section id="pricing" aria-labelledby="pricing-title" className="relative flex justify-center pb-6 px-6 md:pt-6">
        {/* Dimmed backdrop for pricing section */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden />
        <div className="relative z-10 w-full max-w-7xl flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-5 sm:p-7 md:p-10 border border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6)]">
            <h2 id="pricing-title" className="text-2xl md:text-3xl font-extrabold text-center text-white">
              {c('pricingTitle')}
            </h2>
            <p className="mt-2 text-center text-gray-200/90 text-[13px] sm:text-sm md:text-base">
              {c('pricingSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Regular Plan */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 md:p-10 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white text-center md:text-left">{c('regularPlanName')}</h3>
                <p className="mt-1 text-gray-300 text-sm text-center md:text-left">{c('regularPlanDesc')}</p>
                <div className="mt-4 text-center md:text-left">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">€8.99</span>
                  <span className="ml-2 text-gray-300 font-semibold align-middle">/ month</span>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureUnlimitedQr')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureBasicDashboard')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureMenuEditor')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureEmailSupport')}
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/order-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/40 hover:brightness-105 transition"
                  aria-label={c('chooseRegular')}
                >
                  {c('chooseRegular')}
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 md:p-10 border border-white/10 flex flex-col justify-between relative">
              <div className="absolute right-4 top-4">
                <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-orange-500/90 text-white border border-white/10 shadow">
                  {c('mostPopular')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white text-center md:text-left">{c('proPlanName')}</h3>
                <p className="mt-1 text-gray-300 text-sm text-center md:text-left">{c('proPlanDesc')}</p>
                <div className="mt-4 text-center md:text-left">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">€29.99</span>
                  <span className="ml-2 text-gray-300 font-semibold align-middle">/ month</span>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureEverythingRegular')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureKitchenView')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featurePrioritySupport')}
                  </li>
                  <li className="flex items-start gap-2 text-gray-100 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    {c('featureExportReports')}
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/dashboard-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 text-white font-semibold shadow-lg shadow-orange-700/30 hover:shadow-orange-500/50 transform transition hover:scale-[1.03]"
                  aria-label={c('choosePro')}
                >
                  {c('choosePro')}
                </Link>
              </div>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-gray-300 text-center">
            {c('priceExclVat')}
          </p>
        </div>
      </section>
    </main>
  );
}
