import Link from "next/link"

import { CompanyCard } from "@/components/companies/company-card"
import { PageHeading } from "@/components/marketplace/page-heading"
import { companies, companyIndustries } from "@/lib/marketplace/companies"

type CompaniesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "")
}

export default async function CompaniesPage({
  searchParams,
}: CompaniesPageProps) {
  const params = await searchParams
  const selectedIndustry = firstValue(params.industry)
  const query = firstValue(params.q).trim().toLowerCase()
  const results = companies.filter((company) => {
    const matchesIndustry =
      !selectedIndustry || company.industry === selectedIndustry
    const matchesQuery =
      !query ||
      `${company.name} ${company.industry} ${company.location}`
        .toLowerCase()
        .includes(query)

    return matchesIndustry && matchesQuery
  })

  return (
    <main className="mx-auto w-full max-w-[1320px] px-6 pt-12 pb-20 sm:px-10 sm:pt-16 lg:px-[60px] lg:pt-20">
      <PageHeading
        eyebrow="Meet the teams"
        title="Explore companies"
        description="Discover organizations and the opportunities they are sharing."
      />

      <form
        action="/companies"
        method="get"
        role="search"
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="company-query">
          Search companies
        </label>
        <input
          id="company-query"
          type="search"
          name="q"
          defaultValue={firstValue(params.q)}
          placeholder="Company, industry, or location"
          className="h-12 min-w-0 flex-1 rounded-xl border border-white/10 bg-[#111113] px-4 font-display text-sm text-white outline-none placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-[#5c53fe]"
        />
        {selectedIndustry ? (
          <input type="hidden" name="industry" value={selectedIndustry} />
        ) : null}
        <button
          type="submit"
          className="h-12 rounded-xl bg-[#5c53fe] px-5 font-display text-sm font-semibold text-white hover:bg-[#4c44e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
        >
          Search companies
        </button>
      </form>

      <nav aria-label="Filter companies by industry" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href="/companies"
              aria-current={!selectedIndustry ? "page" : undefined}
              className={`inline-flex h-9 items-center rounded-full border px-3 font-display text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff] ${
                !selectedIndustry
                  ? "border-[#5c53fe] bg-[#5c53fe] text-white"
                  : "border-white/10 bg-white/[0.04] text-white/65 hover:text-white"
              }`}
            >
              All industries
            </Link>
          </li>
          {companyIndustries.map((industry) => (
            <li key={industry}>
              <Link
                href={`/companies?industry=${encodeURIComponent(industry)}`}
                aria-current={
                  selectedIndustry === industry ? "page" : undefined
                }
                className={`inline-flex h-9 items-center rounded-full border px-3 font-display text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff] ${
                  selectedIndustry === industry
                    ? "border-[#5c53fe] bg-[#5c53fe] text-white"
                    : "border-white/10 bg-white/[0.04] text-white/65 hover:text-white"
                }`}
              >
                {industry}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="company-results-title" className="mt-8">
        <div className="mb-4">
          <h2
            id="company-results-title"
            className="font-display text-lg font-semibold text-white"
          >
            {results.length} {results.length === 1 ? "company" : "companies"}
          </h2>
        </div>
        {results.length ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-[#111113] px-5 py-12 text-center">
            <h3 className="font-display text-lg font-semibold text-white">
              No companies match those filters
            </h3>
            <p className="mt-2 font-display text-sm text-white/55">
              Try a different company name or industry.
            </p>
            <Link
              href="/companies"
              className="mt-5 inline-flex h-10 items-center rounded-xl bg-[#5c53fe] px-4 font-display text-sm font-semibold text-white hover:bg-[#4c44e6]"
            >
              Clear filters
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
