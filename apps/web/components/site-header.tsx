"use client"

import Image from "next/image"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

const navigation = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
] as const

function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HireLoop — home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="HireLoop"
        width={154}
        height={44}
        priority
        unoptimized
        className="h-11 w-auto"
      />
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto flex h-[74px] w-full max-w-[1320px] items-center justify-between gap-4 rounded-[16px] bg-[#222222] pr-2 pl-4 sm:pl-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center nav:flex">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-white transition-colors hover:text-white/70 focus-visible:ring-2 focus-visible:ring-[#5c53fe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222222] focus-visible:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span aria-hidden className="mx-6 h-6 w-px bg-white/40" />

          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-[58px] rounded-[12px] px-6 font-display text-lg font-semibold text-[#5c53fe] shadow-[inset_0_3px_10px_rgba(255,255,255,0.14)] transition-colors hover:bg-white/5 hover:text-[#5c53fe]"
              )}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-[52px] rounded-[12px] bg-[#5c53fe] px-[22px] font-brand text-lg font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.14)] transition-colors hover:bg-[#4c44e6] hover:text-white"
              )}
            >
              Get Started
            </Link>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 text-white hover:bg-white/10 hover:text-white nav:hidden"
              />
            }
          >
            <MenuIcon className="size-6" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="border-white/10 bg-[#181818] text-white data-[side=right]:w-[min(88vw,22rem)]"
          >
            <SheetHeader className="border-b border-white/10 p-5">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <Logo />
            </SheetHeader>

            <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-3">
              {navigation.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-xl px-4 py-3 text-base text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-4">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/sign-in"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-12 w-full rounded-[12px] font-display text-base font-semibold text-[#5c53fe] shadow-[inset_0_3px_10px_rgba(255,255,255,0.14)] hover:bg-white/5 hover:text-[#5c53fe]"
                    )}
                  />
                }
              >
                Sign In
              </SheetClose>
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/register"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "h-12 w-full rounded-[12px] bg-[#5c53fe] font-brand text-base font-medium text-white hover:bg-[#4c44e6] hover:text-white"
                    )}
                  />
                }
              >
                Get Started
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
