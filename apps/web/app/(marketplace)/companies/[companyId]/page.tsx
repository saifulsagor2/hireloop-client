import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Users,
} from "lucide-react"
import { notFound } from "next/navigation"

import { JobCard } from "@/components/jobs/job-card"
import { PageHeading } from "@/components/marketplace/page-heading"
import { getCompanyById } from "@/lib/marketplace/companies"
import { jobs } from "@/lib/marketplace/jobs"

export default async function CompanyProfilePage({
  params,
}: PageProps<"/companies/[companyId]">) {
  const { companyId } = await params
  const company = getCompanyById(companyId)
  if (!company) notFound()

  const companyJobs = jobs.filter((job) => job.companyId === company.id)

  return (
    <main className="mx-auto w-full max-w-[1320px] px-6 pt-10 pb-20 sm:px-10 sm:pt-14 lg:px-[60px] lg:pt-16">
      <Link
        href="/companies"
        className="inline-flex items-center gap-2 rounded-sm font-display text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aaa4ff]"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        All companies
      </Link>

      <section className="mt-8 rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#17171b_0%,#0d0d10_100%)] p-5 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={128}
              height={128}
              className="size-full object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <PageHeading
              eyebrow={company.industry}
              title={company.name}
              description={company.description}
            />
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4" />
                {company.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users aria-hidden="true" className="size-4" />
                {company.employeeCount} employees
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness aria-hidden="true" className="size-4" />
                {company.openJobs} open roles
              </span>
            </div>
          </div>
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 font-display text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
          >
            Company website
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </section>

      <section aria-labelledby="about-company" className="mt-10 max-w-3xl">
        <h2
          id="about-company"
          className="font-display text-2xl font-semibold text-white"
        >
          About {company.name}
        </h2>
        <div className="mt-4 space-y-4 font-display leading-7 text-white/65">
          {company.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-5 font-display text-sm text-white/50">
          Founded {company.founded}
        </p>
      </section>

      <section aria-labelledby="company-jobs" className="mt-14">
        <PageHeading
          eyebrow="Join the team"
          title="Open positions"
          description={`Explore current opportunities at ${company.name}.`}
          headingLevel={2}
          titleId="company-jobs"
        />
        {companyJobs.length ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {companyJobs.map((job) => (
              <JobCard key={job.id} job={job} company={company} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-[#111113] px-5 py-10 text-center font-display text-white/60">
            There are no listed roles for this company right now.
          </div>
        )}
      </section>
    </main>
  )
}
