import { MapPin, Search } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

type JobSearchFormProps = {
  query?: string
  location?: string
}

export function JobSearchForm({
  query = "",
  location = "",
}: JobSearchFormProps) {
  return (
    <form
      action="/jobs"
      method="get"
      role="search"
      className="grid gap-3 rounded-2xl border border-white/10 bg-[#111113] p-3 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
    >
      <label className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">
        <Search aria-hidden="true" className="size-5 shrink-0 text-white/45" />
        <span className="sr-only">Job title, skill, or company</span>
        <input
          name="q"
          type="search"
          defaultValue={query}
          placeholder="Job title, skill, or company"
          className="min-w-0 flex-1 bg-transparent font-display text-sm text-white outline-none placeholder:text-white/40"
        />
      </label>

      <label className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">
        <MapPin aria-hidden="true" className="size-5 shrink-0 text-white/45" />
        <span className="sr-only">Location or remote</span>
        <input
          name="location"
          type="search"
          defaultValue={location}
          placeholder="City, state, or remote"
          className="min-w-0 flex-1 bg-transparent font-display text-sm text-white outline-none placeholder:text-white/40"
        />
      </label>

      <Button
        type="submit"
        className="h-12 rounded-xl bg-[#5c53fe] px-5 font-display text-sm font-semibold text-white hover:bg-[#4c44e6]"
      >
        <Search aria-hidden="true" className="size-4" />
        Search jobs
      </Button>
    </form>
  )
}
