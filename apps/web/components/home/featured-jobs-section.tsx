import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { JobCard } from "@/components/jobs/job-card"
import { companies } from "@/lib/marketplace/companies"
import { jobs } from "@/lib/marketplace/jobs"

const featuredJobs = jobs.filter((job) => job.featured)

export function FeaturedJobsSection() {
  return (
    <section
      id="featured-jobs"
      aria-labelledby="featured-jobs-title"
      className="relative z-10 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-[60px]">
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-label text-sm font-medium tracking-[0.16em] text-[#aaa4ff] uppercase">
              Handpicked for you
            </p>
            <h2
              id="featured-jobs-title"
              className="mt-3 font-display text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
            >
              Featured opportunities
            </h2>
            <p className="mt-3 max-w-xl font-display text-base leading-7 text-white/60 sm:text-lg">
              Find a role where your next big idea can make a difference.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex w-fit items-center gap-2 font-display text-sm font-semibold text-white transition-colors hover:text-[#aaa4ff] sm:text-base"
          >
            View all jobs
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featuredJobs.map((job) => {
            const company = companies.find((item) => item.id === job.companyId)
            if (!company) return null

            return <JobCard key={job.id} job={job} company={company} />
          })}
        </div>
      </div>
    </section>
  )
}
