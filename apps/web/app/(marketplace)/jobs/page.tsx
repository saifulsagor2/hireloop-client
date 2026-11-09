import Link from "next/link"

import { CompanyCard } from "@/components/companies/company-card"
import { JobFilters } from "@/components/jobs/job-filters"
import { JobCard } from "@/components/jobs/job-card"
import { JobSearchForm } from "@/components/jobs/job-search-form"
import { PageHeading } from "@/components/marketplace/page-heading"
import { companies } from "@/lib/marketplace/companies"
import { filterJobs } from "@/lib/marketplace/jobs"
import type { JobSearchFilters } from "@/lib/marketplace/types"

type JobsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "")
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams
  const filters: JobSearchFilters = {
    q: firstValue(params.q),
    location: firstValue(params.location),
    type: firstValue(params.type),
    category: firstValue(params.category),
    salaryMin: firstValue(params.salaryMin),
    salaryMax: firstValue(params.salaryMax),
  }
  const results = filterJobs(filters)

  return (
    <main className="mx-auto w-full max-w-[1320px] px-6 pt-12 pb-20 sm:px-10 sm:pt-16 lg:px-[60px] lg:pt-20">
      <PageHeading
        eyebrow="Find your next move"
        title="Explore open jobs"
        description="Search opportunities from teams building what comes next."
      />

      <div className="mt-8">
        <JobSearchForm query={filters.q} location={filters.location} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
        <JobFilters filters={filters} />

        <section aria-labelledby="job-results-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="job-results-title"
                className="font-display text-xl font-semibold text-white"
              >
                Job results
              </h2>
              <p className="mt-1 font-display text-sm text-white/55">
                {results.length} {results.length === 1 ? "role" : "roles"} found
              </p>
            </div>
          </div>

          {results.length ? (
            <div className="grid gap-4">
              {results.map((job) => {
                const company = companies.find(
                  (item) => item.id === job.companyId
                )
                if (!company) return null

                return <JobCard key={job.id} job={job} company={company} />
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/15 bg-[#111113] px-5 py-12 text-center">
              <h3 className="font-display text-lg font-semibold text-white">
                No jobs match those filters
              </h3>
              <p className="mt-2 font-display text-sm text-white/55">
                Try a different keyword, location, or salary range.
              </p>
              <Link
                href="/jobs"
                className="mt-5 inline-flex h-10 items-center rounded-xl bg-[#5c53fe] px-4 font-display text-sm font-semibold text-white hover:bg-[#4c44e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
              >
                Clear search
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
