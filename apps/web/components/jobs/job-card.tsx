import Image from "next/image"
import Link from "next/link"
import { BriefcaseBusiness, MapPin } from "lucide-react"

import { formatSalary } from "@/lib/marketplace/jobs"
import type { Company, Job } from "@/lib/marketplace/types"

type JobCardProps = {
  job: Job
  company: Company
}

export function JobCard({ job, company }: JobCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#17171b_0%,#0d0d10_100%)] p-5 transition-colors hover:border-[#5c53fe]/50 sm:p-6">
      <div className="flex items-start gap-4">
        <Link
          href={`/companies/${company.id}`}
          aria-label={`View ${company.name} profile`}
          className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
        >
          <Image
            src={company.logo}
            alt=""
            width={128}
            height={128}
            className="size-full object-contain"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm text-white/55">{company.name}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
            <Link
              href={`/jobs/${job.id}`}
              className="rounded-sm hover:text-[#c5c0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
            >
              {job.title}
            </Link>
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-label text-xs text-white/65">
          {job.category}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-display text-sm text-white/60">
        <span className="inline-flex items-center gap-1.5">
          <MapPin aria-hidden="true" className="size-4 text-white/40" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BriefcaseBusiness
            aria-hidden="true"
            className="size-4 text-white/40"
          />
          {job.employmentType}
        </span>
      </div>

      <p className="mt-4 line-clamp-2 font-display text-sm leading-6 text-white/55">
        {job.description}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <p className="font-display text-sm font-semibold text-white">
          {formatSalary(job)}
          <span className="ml-1 font-normal text-white/45">/ year</span>
        </p>
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex h-9 items-center justify-center rounded-lg border border-white/15 px-3 font-display text-sm font-medium text-white/85 transition-colors hover:border-[#5c53fe] hover:bg-[#5c53fe] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
        >
          View job
        </Link>
      </div>
    </article>
  )
}
