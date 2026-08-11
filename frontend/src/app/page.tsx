import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the app',
}

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0E1A] px-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(122,140,255,0.18)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute right-16 top-16 h-2 w-2 rounded-full bg-white/40" />
      <div className="pointer-events-none absolute left-24 top-40 h-1 w-1 rounded-full bg-white/30" />
      <div className="pointer-events-none absolute bottom-32 right-1/3 h-1.5 w-1.5 rounded-full bg-white/20" />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-300/70">
            {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Where late nights
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
              find their sound
            </span>
          </h1>
          <p className="mx-auto max-w-sm text-base leading-relaxed text-indigo-100/50">
            Your app description goes here. Edit{' '}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[13px] text-indigo-200/80">
              src/app/page.tsx
            </code>{' '}
            to get started.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/auth/signup"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#0B0E1A] shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all hover:shadow-[0_0_32px_rgba(255,255,255,0.25)]"
          >
            Create account
          </Link>
          <Link
            href="/auth/signin"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/90 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  )
}