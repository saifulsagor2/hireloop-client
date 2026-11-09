import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import ctaBackground from "../../app/images/cta-bg.png"

export function CtaSection() {
  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-[60px] lg:pb-28">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111116] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <Image
          src={ctaBackground}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="pointer-events-none object-cover opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#101014_0%,rgba(16,16,20,0.88)_48%,rgba(16,16,20,0.45)_100%)]"
        />
        <div className="relative z-10 max-w-2xl">
          <p className="font-label text-sm font-medium tracking-[0.16em] text-[#c5c0ff] uppercase">
            Your next chapter starts here
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Make your next move count.
          </h2>
          <p className="mt-4 max-w-xl font-display text-base leading-7 text-white/70 sm:text-lg">
            Find opportunities that fit your ambitions and connect with teams
            ready to meet you.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/jobs"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#5c53fe] px-5 font-display text-base font-semibold text-white transition-colors hover:bg-[#4c44e6]"
            >
              Browse jobs
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/companies"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore companies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
