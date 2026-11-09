import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BriefcaseBusiness, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

import { JobCard } from "@/components/jobs/job-card"
import { PageHeading } from "@/components/marketplace/page-heading"
import { companies, getCompanyById } from "@/lib/marketplace/companies"
import { formatSalary, getJobById, jobs } from "@/lib/marketplace/jobs"

export default async function JobDetailsPage({
  params,
}: PageProps<"/jobs/[jobId]">) {
  const { jobId } = await params
  const job = getJobById(jobId)
  if (!job) notFound()

  const company = getCompanyById(job.companyId)
  if (!company) notFound()

  const similarJobs = jobs
    .filter((item) => item.id !== job.id && item.category === job.category)
    .slice(0, 2)

  return (
    <main className="mx-auto w-full max-w-[1320px] px-6 pt-10 pb-20 sm:px-10 sm:pt-14 lg:px-[60px] lg:pt-16">
      <Link
        href="/jobs"
        className="inline-flex items-center gap-2 rounded-sm font-display text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aaa4ff]"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to jobs
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="min-w-0">
          <div className="rounded-3xl border border-white/10 bg-[#111113] p-5 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-3">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={128}
                  height={128}
                  className="size-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-sm text-white/55">
                  <Link
                    href={`/companies/${company.id}`}
                    className="hover:text-[#c5c0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
                  >
                    {company.name}
                  </Link>
                </p>
                <h1 className="mt-1 font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
                  {job.title}
                </h1>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-display text-sm text-white/60">
                  <span className="inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="size-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseBusiness aria-hidden="true" className="size-4" />
                    {job.employmentType}
                  </span>
                  <span>{job.category}</span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-lg font-semibold text-white">
                {formatSalary(job)}
                <span className="ml-1 text-sm font-normal text-white/50">
                  / year
                </span>
              </p>
              <Link
                href={`/sign-in?next=${encodeURIComponent(`/jobs/${job.id}`)}`}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#5c53fe] px-5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#4c44e6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
              >
                Sign in to apply
              </Link>
            </div>
          </div>

          <section aria-labelledby="job-description" className="mt-8">
            <h2
              id="job-description"
              className="font-display text-2xl font-semibold text-white"
            >
              About the role
            </h2>
            <p className="mt-3 font-display leading-7 text-white/65">
              {job.description}
            </p>
          </section>

          <section aria-labelledby="job-responsibilities" className="mt-8">
            <h2
              id="job-responsibilities"
              className="font-display text-xl font-semibold text-white"
            >
              Responsibilities
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-display leading-7 text-white/65 marker:text-[#aaa4ff]">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="job-requirements" className="mt-8">
            <h2
              id="job-requirements"
              className="font-display text-xl font-semibold text-white"
            >
              What you&apos;ll bring
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-display leading-7 text-white/65 marker:text-[#aaa4ff]">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {job.benefits.length ? (
            <section aria-labelledby="job-benefits" className="mt-8">
              <h2
                id="job-benefits"
                className="font-display text-xl font-semibold text-white"
              >
                Benefits
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-display text-sm text-white/70"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>

        <aside className="rounded-2xl border border-white/10 bg-[#111113] p-5">
          <h2 className="font-display text-lg font-semibold text-white">
            About {company.name}
          </h2>
          <p className="mt-3 font-display text-sm leading-6 text-white/60">
            {company.description}
          </p>
          <p className="mt-4 font-display text-sm text-white/55">
            {company.location}
          </p>
          <Link
            href={`/companies/${company.id}`}
            className="mt-5 inline-flex font-display text-sm font-semibold text-[#c5c0ff] hover:text-white"
          >
            View company profile
          </Link>
        </aside>
      </div>

      {similarJobs.length ? (
        <section aria-labelledby="similar-jobs-title" className="mt-16">
          <PageHeading
            eyebrow="Keep exploring"
            title="Similar opportunities"
            description={`More roles in ${job.category}.`}
            headingLevel={2}
            titleId="similar-jobs-title"
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {similarJobs.map((similarJob) => {
              const similarCompany = companies.find(
                (item) => item.id === similarJob.companyId
              )
              if (!similarCompany) return null
              return (
                <JobCard
                  key={similarJob.id}
                  job={similarJob}
                  company={similarCompany}
                />
              )
            })}
          </div>
        </section>
      ) : null}
    </main>
  )
}
