import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const footerGroups = [
  {
    title: "For job seekers",
    links: [
      { label: "Browse jobs", href: "/jobs" },
      { label: "Companies", href: "/companies" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "For employers",
    links: [
      { label: "Post a job", href: "/sign-up" },
      { label: "Explore companies", href: "/companies" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "HireLoop",
    links: [
      { label: "Home", href: "/" },
      { label: "Sign in", href: "/sign-in" },
      { label: "Get started", href: "/sign-up" },
    ],
  },
]

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#080809]">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-12 sm:px-10 sm:py-14 lg:px-[60px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="HireLoop home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="HireLoop"
                width={154}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 font-display text-sm leading-6 text-white/55">
              Connecting ambitious people with the teams shaping what&apos;s
              next.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-display text-sm font-semibold text-white">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 font-display text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 font-display text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>
          <p>Find your next opportunity.</p>
        </div>
      </div>
    </footer>
  )
}
