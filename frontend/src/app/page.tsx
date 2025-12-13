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
    <main className="relative min-h-screen text-white">
      {/* ====== BACKGROUND (kept) ====== */}
      {/* <div className="fixed left-0 top-0 w-dvw h-dvh bg-[url('/assets/bg-pattern.png')] bg-repeat bg-center z-0 invert dark:invert-0" /> */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.30)_100%)] z-[5]" />
      <div className="ambient-blob ambient-blob-1 animate-float-medium z-[6] fixed" />
      <div className="ambient-blob ambient-blob-2 ambient-blob-emph animate-float-strong z-[6]" />

      {/* ====== NAVBAR / BRAND HEADER ====== */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300 scroll-header">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/assets/logo.png"
                alt="menuwire Logo"
                width={48}
                height={48}
                className="rounded-lg sm:w-[64px] sm:h-[64px]"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-wide drop-shadow-md">
                  {c('brandName')}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-200/80">
                  {c('tagline')}
                </span>
              </div>
            </div>

            {/* Right: Nav actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm text-gray-200/80 pr-2">
                <a href="#features" className="hover:text-white transition-colors">
                  {c('preview')}
                </a>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {c('pricingTitle')}
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-green-300/80 pr-2">
                <a href="/dashboard" className="hover:text-white transition-colors">
                  Login
                </a>
              </div>  
              <div className="[&_button]:!bg-white/10 [&_button]:!border-1 [&_button]:!text-white hover:[&_button]:!bg-none">
                <Options supportedLocales={locales} />
              </div>
            </div>
        </nav>
      </header>

      {/* PAGE CONTENT WRAPPER */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12">

        {/* ====== HERO SECTION ====== */}
        <section
          id="hero"
          className="max-w-7xl mx-auto pt-10 sm:pt-14 lg:pt-20 grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-10 lg:gap-14 items-center"
        >
          {/* LEFT: Copy + CTAs */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-[0_18px_40px_rgba(0,0,0,0.75)]">
                {t('headline')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-100/95 max-w-xl">
                {t('subhead')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/order-demo"
                className="btn-shine inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 shadow-lg shadow-orange-700/30 hover:shadow-orange-500/50 transform transition hover:scale-[1.03] focus-visible:ring-4 focus-visible:ring-orange-300/30"
                aria-label={t('orderDemo')}
              >
                {t('orderDemo')}
              </Link>

              <Link
                href="/dashboard-demo"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white bg-emerald-500 shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/50 transition hover:brightness-105 focus-visible:ring-4 focus-visible:ring-emerald-300/40"
                aria-label={t('dashboardDemo')}
              >
                {t('dashboardDemo')}
              </Link>
            </div>

            {/* Trust row
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200/90">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{c('trustedByHospitality')}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-300/90">
                <span>• QR ordering</span>
                <span>• {c('simpleDashboardTitle')}</span>
                <span>• {c('fastSetup')}</span>
              </div>
            </div> */}
          </div>

          {/* RIGHT: Product Preview Card */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="glass-card rounded-2xl border border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)]">

              <div className="flex space-y-4 items-center justify-center">
                {/* Video Preview */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                   <video src="/assets/landing.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
                </div>

                {/* Email capture
                <form className="mt-4 flex flex-col sm:flex-row gap-3">
                  <label htmlFor="hero-email" className="sr-only">
                    {c('emailLabel')}
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    placeholder={c('emailPlaceholder')}
                    className="w-full sm:flex-1 rounded-xl bg-white/10 text-white placeholder-white/60 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400/50 border border-white/10 text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-xl px-4 sm:px-5 py-2.5 bg-emerald-500 text-white text-sm font-semibold hover:brightness-105 transition shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/40"
                  >
                    {c('emailSubmit')}
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </section>

        {/* ====== FEATURES SECTION ====== */}
        <section
          id="features"
          className="max-w-7xl mx-auto mt-14 sm:mt-16 lg:mt-20 space-y-6 scroll-mt-28"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
              {c('preview')}
            </h2>
            <p className="text-sm sm:text-base text-gray-200/90">
              {c('pricingSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="glass-card rounded-md p-3 border border-white/10 transition-colors text-center flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] mb-4 rounded-md overflow-hidden bg-white/5 hover:scale-102 transition-transform duration-300">
                 <Image src="/assets/contactless.png" alt={c('noContact')} fill className="object-cover" />
              </div>
              <QrCode className="w-6 h-6 mx-auto mb-2 text-emerald-400" aria-hidden />
              <p className="text-sm font-semibold">{c('noContact')}</p>
            </div>
            <div className="glass-card rounded-md p-3 border border-white/10 hover:border-white/30 transition-colors text-center flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] mb-4 rounded-md overflow-hidden bg-white/5">
                 <Image src="/assets/contactless.png" alt={c('fastSetup')} fill className="object-cover" />
              </div>
              <Zap className="w-6 h-6 mx-auto mb-2 text-orange-400" aria-hidden />
              <p className="text-sm font-semibold">{c('fastSetup')}</p>
            </div>
            <div className="glass-card rounded-md p-3 border border-white/10 hover:border-white/30 transition-colors text-center flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] mb-4 rounded-md overflow-hidden bg-white/5">
                 <Image src="/assets/secure.png" alt={c('secureLocal')} fill className="object-cover" />
              </div>
              <Lock className="w-6 h-6 mx-auto mb-2 text-blue-400" aria-hidden />
              <p className="text-sm font-semibold">{c('secureLocal')}</p>
            </div>
          </div>
        </section>

        {/* ====== REVIEWS SECTION ====== */}
        <section className="max-w-7xl mx-auto mt-14 sm:mt-16 lg:mt-20">
          <div className="glass-card rounded-2xl p-4 sm:p-5 md:p-6 border border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-3">
              {c('trustedByHospitality')}
            </p>

            {/* Mobile: horizontal scroll, Desktop: marquee-like row */}
            <div className="reviews-marquee-outer">
              <div className="reviews-marquee-track">
                {[...reviews, ...reviews].map((review, idx) => (
                  <figure
                    key={`${review.name}-${idx}`}
                    className="min-w-[230px] max-w-xs rounded-xl border border-white/10 p-4 shrink-0 mx-1"
                  >
                    <blockquote className="text-sm text-white/90 text-wrap">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-3 text-xs text-gray-300">
                      <span className="font-semibold text-white">
                        {review.name}
                      </span>
                      <span className="block text-[11px] dark:text-gray-400 text-gray-200">
                        {review.role}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== PRICING SECTION ====== */}
        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="max-w-7xl mx-auto mt-16 sm:mt-20 lg:mt-20 scroll-mt-28"
        >
          <div className="glass-card rounded-2xl p-5 sm:p-7 md:p-8 border border-white/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.2)]">
            <div className="text-center mb-8">
              <h2
                id="pricing-title"
                className="text-2xl md:text-3xl font-extrabold"
              >
                {c('pricingTitle')}
              </h2>
              <p className="mt-2 text-gray-200/90 text-[13px] sm:text-sm md:text-base max-w-2xl mx-auto">
                {c('pricingSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Regular Plan */}
              <div className="rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-center md:text-left">
                    {c('regularPlanName')}
                  </h3>
                  <p className="mt-1 text-gray-300 text-sm text-center md:text-left">
                    {c('regularPlanDesc')}
                  </p>
                  <div className="mt-4 text-center md:text-left">
                    <span className="text-3xl sm:text-4xl font-extrabold">
                      €9.99
                    </span>
                    <span className="ml-1.5 text-gray-300 font-semibold align-middle text-sm">
                      / month
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-gray-100">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureUnlimitedQr')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureBasicDashboard')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureMenuEditor')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureEmailSupport')}
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    href="/order-demo"
                    className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-600/30 hover:shadow-emerald-400/40 hover:brightness-105 transition text-sm"
                    aria-label={c('chooseRegular')}
                  >
                    {c('chooseRegular')}
                  </Link>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between relative">
                <div className="absolute right-4 top-4">
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-orange-500/90 text-white border border-white/10 shadow">
                    {c('mostPopular')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-center md:text-left">
                    {c('proPlanName')}
                  </h3>
                  <p className="mt-1 text-gray-300 text-sm text-center md:text-left">
                    {c('proPlanDesc')}
                  </p>
                  <div className="mt-4 text-center md:text-left">
                    <span className="text-3xl sm:text-4xl font-extrabold">
                      €29.99
                    </span>
                    <span className="ml-1.5 text-gray-300 font-semibold align-middle text-sm">
                      / month
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-gray-100">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureEverythingRegular')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureKitchenView')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featurePrioritySupport')}
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                      {c('featureExportReports')}
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    href="/dashboard-demo"
                    className="btn-shine w-full inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-500 text-white font-semibold shadow-lg shadow-orange-700/30 hover:shadow-orange-500/50 transform transition hover:scale-[1.02] text-sm [&::after]:!duration-[1.5s]"
                    aria-label={c('choosePro')}
                  >
                    {c('choosePro')}
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] sm:text-xs text-gray-300 text-center">
              {c('priceExclVat')}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
