import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  MapPin,
  Search,
  Star,
  UserSearch,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import globeImage from "../../app/images/globe.png"

const trendingPositions = [
  "Product Designer",
  "Frontend Engineer",
  "AI Research Engineer",
]

const stats = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: ChartColumnIncreasing },
  { value: "2M", label: "Job Seekers", icon: UserSearch },
  { value: "97%", label: "Satisfaction Rate", icon: Star },
]

function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Magenta haze behind the hero */}
      <div className="absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_62%_62%_at_50%_0%,rgba(220,2,206,0.22),rgba(92,83,254,0.12)_42%,transparent_74%)]" />

      {/* Starfield */}
      <Image
        src="/images/starfield.png"
        alt=""
        width={816}
        height={505}
        unoptimized
        className="absolute top-[440px] left-1/2 w-[150vw] max-w-none -translate-x-1/2 opacity-80 sm:top-[500px] sm:w-[112vw] lg:top-[538px] lg:w-[1180px]"
      />

      <Image
        src={globeImage}
        alt=""
        aria-hidden="true"
        className="absolute top-[360px] left-1/2 w-[min(1000px,130vw)] max-w-none -translate-x-1/2 sm:top-[420px] sm:w-[1100px] lg:top-[470px] lg:w-[1200px]"
      />

      {/* Blend the planet back into the page at the section boundary */}
      <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[linear-gradient(180deg,transparent_0%,#010102_100%)]" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative -mt-[106px] overflow-hidden bg-[#010102] pb-16 sm:-mt-[122px] lg:pb-[72px]">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[60px]">
        <div className="mx-auto max-w-[784px] pt-40 text-center sm:pt-52 lg:pt-[274px]">
          {/* Announcement badge */}
          <div className="relative mx-auto flex h-[46px] w-fit max-w-full items-center justify-center rounded-full bg-[linear-gradient(100deg,#c26bff,#6b6bff,#7ee7ff,#7dff9a,#ffe86b,#ffb86b,#ff7a7a)] p-px sm:h-[50px] sm:px-[65px]">
            <span
              aria-hidden
              className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]"
            />
            <div className="relative z-10 flex h-full items-center gap-2.5 rounded-full border border-white/20 bg-[linear-gradient(180deg,#474747_0%,#010102_100%)] px-3 shadow-[0_0_6px_rgba(255,255,255,0.08)] sm:gap-3 sm:px-6">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#ffb54d]/15">
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="size-5 text-[#ffb54d]"
                  strokeWidth={1.6}
                />
              </span>
              <span className="font-display text-sm whitespace-nowrap text-white sm:text-base">
                50,000+ new jobs this month
              </span>
            </div>
          </div>

          <h1 className="mt-8 font-display text-4xl leading-[1.15] font-bold tracking-[-0.02em] text-balance text-white sm:text-5xl lg:text-[56px]">
            Find Your Dream Job Today
          </h1>

          <p className="mx-auto mt-4 max-w-[784px] font-display text-base leading-[1.6] text-balance text-white/70 sm:text-lg lg:text-xl">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/jobs"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#5c53fe] px-5 font-display text-base font-semibold text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.14)] transition-colors hover:bg-[#4c44e6]"
            >
              Explore jobs
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/sign-up"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Building2 aria-hidden="true" className="size-4" />
              Post a job
            </Link>
          </div>

          {/* Search */}
          <form action="/jobs" role="search" className="mt-10 sm:mt-12">
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#101010] sm:h-16 sm:flex-row sm:items-center">
              <label className="flex h-14 cursor-text items-center gap-3 px-5 sm:h-full sm:flex-1 sm:px-6">
                <Search
                  aria-hidden="true"
                  className="size-5 shrink-0 text-white/50"
                  strokeWidth={1.6}
                />
                <span className="sr-only">Job title, skill or company</span>
                <input
                  name="q"
                  type="text"
                  placeholder="Job title, skill or company"
                  className="min-w-0 flex-1 bg-transparent font-display text-base text-white outline-none placeholder:text-white/50"
                />
              </label>

              <span
                aria-hidden
                className="mx-5 h-px shrink-0 bg-white/20 sm:mx-0 sm:h-6 sm:w-px"
              />

              <label className="flex h-14 cursor-text items-center gap-3 px-5 sm:h-full sm:flex-1 sm:px-6">
                <MapPin
                  aria-hidden="true"
                  className="size-5 shrink-0 text-white/50"
                  strokeWidth={1.6}
                />
                <span className="sr-only">Location or remote</span>
                <input
                  name="location"
                  type="text"
                  placeholder="Location or Remote"
                  className="min-w-0 flex-1 bg-transparent font-display text-base text-white outline-none placeholder:text-white/50"
                />
              </label>

              <div className="p-2 sm:p-0 sm:pr-2">
                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-[#5c53fe] px-4 text-base font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.14)] transition-colors hover:bg-[#4c44e6] sm:w-12 sm:px-0"
                >
                  <Search
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.8}
                  />
                  <span className="sm:sr-only">Search</span>
                </Button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6">
              <span className="mr-1 font-display text-sm text-white/70 sm:text-base">
                Trending Position
              </span>
              {trendingPositions.map((position) => (
                <Link
                  key={position}
                  href={`/jobs?q=${encodeURIComponent(position)}`}
                  className="rounded-full border border-white/10 bg-[#1a1a1b] px-3 py-[5px] font-display text-xs text-white transition-colors hover:border-white/25 hover:bg-white/5 sm:text-sm"
                >
                  {position}
                </Link>
              ))}
            </div>
          </form>
        </div>

        {/* Live stats */}
        <div className="mt-32 sm:mt-64 xl:mt-[358px]">
          <p className="mx-auto max-w-[720px] text-center font-display text-base text-balance text-white/70 sm:text-lg">
            Assisting over 15,000 job seekers find their dream positions.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-24 sm:gap-6 lg:mt-32 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex min-h-[200px] flex-col justify-between rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#010102_0%,#313131_100%)] p-5 sm:min-h-[220px] sm:p-6 lg:min-h-[254px]"
              >
                <Icon
                  aria-hidden="true"
                  className="size-6 text-white"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-stat text-5xl leading-[1.15] font-semibold tracking-[-0.02em] text-white lg:text-[56px]">
                    {value}
                  </p>
                  <p className="mt-4 font-label text-base text-white lg:text-lg">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
