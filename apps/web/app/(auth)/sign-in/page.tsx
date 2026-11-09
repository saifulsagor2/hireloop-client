import { AuthForm } from "@/components/auth/auth-form"

const SignInPage = async ({ searchParams }: PageProps<"/sign-in">) => {
  const params = await searchParams
  const requestedDestination = Array.isArray(params.next)
    ? params.next[0]
    : params.next
  const callbackURL =
    requestedDestination?.startsWith("/jobs/") &&
    !requestedDestination.startsWith("//") &&
    !requestedDestination.includes("\\")
      ? requestedDestination
      : "/"

  return (
    <main className="flex min-h-[calc(100svh-106px)] items-center justify-center bg-[#010102] px-6 py-12 sm:min-h-[calc(100svh-122px)] sm:px-10">
      <AuthForm mode="sign-in" callbackURL={callbackURL} />
    </main>
  )
}

export default SignInPage
