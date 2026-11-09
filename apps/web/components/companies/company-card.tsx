import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BriefcaseBusiness, MapPin, Users } from "lucide-react"

import type { Company } from "@/lib/marketplace/types"

type CompanyCardProps = {
  company: Company
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#17171b_0%,#0d0d10_100%)] p-5 transition-colors hover:border-[#5c53fe]/50 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white p-2.5">
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={128}
            height={128}
            className="size-full object-contain"
          />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-label text-xs text-white/65">
          {company.industry}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        <Link
          href={`/companies/${company.id}`}
          className="rounded-sm hover:text-[#c5c0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
        >
          {company.name}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 font-display text-sm leading-6 text-white/55">
        {company.description}
      </p>

      <div className="mt-5 space-y-2 font-display text-sm text-white/60">
        <p className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4 text-white/40" />
          {company.location}
        </p>
        <p className="flex items-center gap-2">
          <Users aria-hidden="true" className="size-4 text-white/40" />
          {company.employeeCount} employees
        </p>
      </div>

      <Link
        href={`/companies/${company.id}`}
        className="mt-5 mt-auto inline-flex items-center gap-2 border-t border-white/10 pt-5 font-display text-sm font-semibold text-white/85 transition-colors hover:text-[#c5c0ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff]"
      >
        <BriefcaseBusiness aria-hidden="true" className="size-4" />
        {company.openJobs} open jobs
        <ArrowUpRight aria-hidden="true" className="ml-auto size-4" />
      </Link>
    </article>
  )
}
