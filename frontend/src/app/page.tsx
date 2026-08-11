import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Sign in to your account',
}

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0E1A] px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-white">Sign in</h1>
          <p className="text-sm text-indigo-100/50">
            MuscialMoon
          </p>
        </div>

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm text-indigo-100/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-300/50 focus:bg-white/[0.07]"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm text-indigo-100/70">
                Password
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-xs text-indigo-300/70 hover:text-indigo-300"
              >
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-indigo-300/50 focus:bg-white/[0.07]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white py-2.5 text-sm font-medium text-[#0B0E1A] transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-indigo-100/50">
          Not a member?{' '}
          <Link href="/auth/signup" className="text-indigo-300 hover:text-indigo-200">
            Create account
          </Link>
        </p>
      </div>
    </main>
  )
}