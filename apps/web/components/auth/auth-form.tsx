"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LoaderCircle } from "lucide-react"

import { authClient } from "@/lib/auth-client"
import { Button } from "@workspace/ui/components/button"

type AuthFormProps = {
  mode: "sign-in" | "sign-up"
  callbackURL?: string
}

export function AuthForm({ mode, callbackURL = "/" }: AuthFormProps) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isSignUp = mode === "sign-up"

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const result = isSignUp
        ? await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL,
          })
        : await authClient.signIn.email({
            email,
            password,
            callbackURL,
          })

      if (result.error) {
        setError(result.error.message || "We couldn't complete your request.")
        return
      }

      router.push(callbackURL)
      router.refresh()
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn't reach the authentication service. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111113] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.35)] sm:p-8">
      <p className="font-label text-sm font-medium tracking-[0.14em] text-[#aaa4ff] uppercase">
        {isSignUp ? "Join HireLoop" : "Welcome back"}
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-white">
        {isSignUp ? "Create your account" : "Sign in to HireLoop"}
      </h1>
      <p className="mt-3 font-display text-sm leading-6 text-white/55">
        {isSignUp
          ? "Create an account to continue your job search."
          : "Enter your account details to continue."}
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        {isSignUp ? (
          <label className="block font-display text-sm font-medium text-white/80">
            Name
            <input
              autoComplete="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-black/20 px-4 text-base text-white outline-none placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
            />
          </label>
        ) : null}

        <label className="block font-display text-sm font-medium text-white/80">
          Email
          <input
            autoComplete="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-black/20 px-4 text-base text-white outline-none placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
          />
        </label>

        <label className="block font-display text-sm font-medium text-white/80">
          Password
          <input
            autoComplete={isSignUp ? "new-password" : "current-password"}
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={isSignUp ? 8 : undefined}
            required
            className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-black/20 px-4 text-base text-white outline-none placeholder:text-white/35 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
          />
        </label>

        {error ? (
          <p
            id="auth-error"
            role="alert"
            className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 font-display text-sm text-red-200"
          >
            {error}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting}
          aria-describedby={error ? "auth-error" : undefined}
          className="h-12 w-full rounded-xl bg-[#5c53fe] font-display text-base font-semibold text-white hover:bg-[#4c44e6]"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="size-4 animate-spin"
              />
              {isSignUp ? "Creating account..." : "Signing in..."}
            </>
          ) : isSignUp ? (
            "Create account"
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center font-display text-sm text-white/55">
        {isSignUp ? "Already have an account?" : "New to HireLoop?"}{" "}
        <Link
          href={isSignUp ? "/sign-in" : "/sign-up"}
          className="font-semibold text-[#c5c0ff] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
        >
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </section>
  )
}
