import { AuthForm } from "@/components/auth/auth-form"

const SignUpPage = () => {
  return (
    <main className="flex min-h-[calc(100svh-106px)] items-center justify-center bg-[#010102] px-6 py-12 sm:min-h-[calc(100svh-122px)] sm:px-10">
      <AuthForm mode="sign-up" />
    </main>
  )
}

export default SignUpPage
