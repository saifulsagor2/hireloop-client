import Link from "next/link"

import { jobCategories } from "@/lib/marketplace/jobs"
import { jobTypes, type JobSearchFilters } from "@/lib/marketplace/types"

type JobFiltersProps = {
  filters: JobSearchFilters
}

export function JobFilters({ filters }: JobFiltersProps) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-[#111113] p-4 lg:sticky lg:top-28">
      <summary className="cursor-pointer list-none font-display text-base font-semibold text-white marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aaa4ff]">
        <span className="flex items-center justify-between">
          Filters
          <span className="text-sm font-normal text-white/45 group-open:hidden">
            Show
          </span>
          <span className="hidden text-sm font-normal text-white/45 group-open:inline">
            Hide
          </span>
        </span>
      </summary>

      <form action="/jobs" method="get" className="mt-5 space-y-5">
        <input type="hidden" name="q" value={filters.q} />
        <input type="hidden" name="location" value={filters.location} />

        <label className="block font-display text-sm font-medium text-white/80">
          Job type
          <select
            name="type"
            defaultValue={filters.type}
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
          >
            <option value="">All job types</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block font-display text-sm font-medium text-white/80">
          Category
          <select
            name="category"
            defaultValue={filters.category}
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-3 text-sm text-white outline-none focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
          >
            <option value="">All categories</option>
            {jobCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="font-display text-sm font-medium text-white/80">
            Annual salary (USD)
          </legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <label>
              <span className="sr-only">Minimum salary</span>
              <input
                type="number"
                name="salaryMin"
                min="0"
                step="5000"
                defaultValue={filters.salaryMin}
                placeholder="Min"
                className="h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-3 text-sm text-white outline-none placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
              />
            </label>
            <label>
              <span className="sr-only">Maximum salary</span>
              <input
                type="number"
                name="salaryMax"
                min="0"
                step="5000"
                defaultValue={filters.salaryMax}
                placeholder="Max"
                className="h-11 w-full rounded-xl border border-white/10 bg-[#0b0b0d] px-3 text-sm text-white outline-none placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
              />
            </label>
          </div>
        </fieldset>

        <div className="flex gap-2">
          <button
            type="submit"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-[#5c53fe] px-4 font-display text-sm font-semibold text-white transition-colors hover:bg-[#4c44e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
          >
            Apply filters
          </button>
          <Link
            href="/jobs"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 px-4 font-display text-sm text-white/75 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
          >
            Clear
          </Link>
        </div>
      </form>
    </details>
  )
}
