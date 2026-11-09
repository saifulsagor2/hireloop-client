export const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
] as const

export type JobType = (typeof jobTypes)[number]

export type Job = {
  id: string
  title: string
  companyId: string
  location: string
  employmentType: JobType
  remote: boolean
  category: string
  salaryMin: number
  salaryMax: number
  currency: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  skills: string[]
  postedAt: string
  featured: boolean
}

export type Company = {
  id: string
  name: string
  logo: string
  industry: string
  location: string
  employeeCount: string
  openJobs: number
  website: string
  description: string
  founded: number
  about: string[]
}

export type PlanFeature = {
  label: string
  included: boolean
}

export type PricingPlan = {
  name: string
  price: number
  description: string
  features: PlanFeature[]
  highlighted?: boolean
  cta: string
}

export type JobSearchFilters = {
  q: string
  location: string
  type: string
  category: string
  salaryMin: string
  salaryMax: string
}
