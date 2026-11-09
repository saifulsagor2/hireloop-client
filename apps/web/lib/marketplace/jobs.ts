import { companies } from "./companies"
import type { Job, JobSearchFilters } from "./types"

export const jobs: Job[] = [
  {
    id: "senior-product-designer-airbnb",
    title: "Senior Product Designer",
    companyId: "airbnb",
    location: "San Francisco, CA",
    employmentType: "Full-time",
    remote: false,
    category: "Design",
    salaryMin: 140000,
    salaryMax: 180000,
    currency: "USD",
    description:
      "Help shape welcoming, intuitive experiences for hosts and guests around the world.",
    responsibilities: [
      "Lead product design from early discovery through polished delivery.",
      "Partner with product managers, researchers, and engineers.",
      "Use customer insights and product data to improve key journeys.",
    ],
    requirements: [
      "5+ years of experience designing digital products.",
      "A portfolio demonstrating strong interaction and visual design.",
      "Clear communication and collaborative problem-solving skills.",
    ],
    benefits: [
      "Health coverage",
      "Annual learning budget",
      "Flexible time off",
    ],
    skills: ["Product Design", "Figma", "Prototyping"],
    postedAt: "2026-11-07",
    featured: true,
  },
  {
    id: "frontend-engineer-google",
    title: "Frontend Engineer",
    companyId: "google",
    location: "Mountain View, CA",
    employmentType: "Full-time",
    remote: false,
    category: "Engineering",
    salaryMin: 150000,
    salaryMax: 210000,
    currency: "USD",
    description:
      "Build accessible, high-performance web experiences used by people around the world.",
    responsibilities: [
      "Develop and maintain responsive web interfaces.",
      "Collaborate with design and backend teams on product features.",
      "Improve performance, reliability, and frontend testing practices.",
    ],
    requirements: [
      "3+ years of professional frontend development experience.",
      "Experience with TypeScript and modern component-based UI.",
      "An interest in accessibility and web performance.",
    ],
    benefits: ["Health coverage", "Wellness programs", "Paid parental leave"],
    skills: ["TypeScript", "React", "Accessibility"],
    postedAt: "2026-11-05",
    featured: true,
  },
  {
    id: "product-marketing-manager-spotify",
    title: "Product Marketing Manager",
    companyId: "spotify",
    location: "New York, NY",
    employmentType: "Full-time",
    remote: false,
    category: "Marketing",
    salaryMin: 115000,
    salaryMax: 150000,
    currency: "USD",
    description:
      "Bring new audio experiences to listeners with clear positioning and thoughtful launches.",
    responsibilities: [
      "Develop go-to-market plans for new product capabilities.",
      "Translate audience insights into product positioning and messaging.",
      "Coordinate launches across product, creative, and marketing teams.",
    ],
    requirements: [
      "4+ years in product marketing or a related role.",
      "Experience developing positioning and launch materials.",
      "Strong writing, research, and communication skills.",
    ],
    benefits: ["Health coverage", "Learning support", "Flexible work options"],
    skills: ["Product Marketing", "Research", "Storytelling"],
    postedAt: "2026-11-03",
    featured: true,
  },
  {
    id: "experience-designer-adobe",
    title: "Experience Designer",
    companyId: "adobe",
    location: "San Jose, CA",
    employmentType: "Full-time",
    remote: false,
    category: "Design",
    salaryMin: 120000,
    salaryMax: 165000,
    currency: "USD",
    description:
      "Design clear, expressive workflows that help creative teams do their best work.",
    responsibilities: [
      "Create user flows, prototypes, and interface designs.",
      "Work with research and product partners to validate design choices.",
      "Contribute to shared interaction patterns and design systems.",
    ],
    requirements: [
      "3+ years of product or experience design work.",
      "Strong interaction design and prototyping skills.",
      "Ability to present and explain design decisions.",
    ],
    benefits: ["Health coverage", "Stock program", "Professional development"],
    skills: ["UX Design", "Prototyping", "Design Systems"],
    postedAt: "2026-11-01",
    featured: false,
  },
  {
    id: "cloud-software-engineer-microsoft",
    title: "Cloud Software Engineer",
    companyId: "microsoft",
    location: "Remote, United States",
    employmentType: "Full-time",
    remote: true,
    category: "Engineering",
    salaryMin: 135000,
    salaryMax: 190000,
    currency: "USD",
    description:
      "Help build dependable cloud services that make complex work easier for customers.",
    responsibilities: [
      "Design and deliver reliable cloud service features.",
      "Participate in code reviews, testing, and operational improvements.",
      "Work across teams to resolve customer and service issues.",
    ],
    requirements: [
      "Experience building and operating software services.",
      "Proficiency in at least one modern programming language.",
      "A focus on reliability, security, and maintainable code.",
    ],
    benefits: ["Health coverage", "Remote work support", "Paid time off"],
    skills: ["Cloud", "Distributed Systems", "TypeScript"],
    postedAt: "2026-10-29",
    featured: false,
  },
  {
    id: "ai-research-engineer-nvidia",
    title: "AI Research Engineer",
    companyId: "nvidia",
    location: "Santa Clara, CA",
    employmentType: "Contract",
    remote: false,
    category: "AI & Data",
    salaryMin: 145000,
    salaryMax: 205000,
    currency: "USD",
    description:
      "Prototype and evaluate applied machine learning systems with a multidisciplinary team.",
    responsibilities: [
      "Implement and evaluate machine learning experiments.",
      "Analyze results and communicate technical findings.",
      "Collaborate with research and engineering teams on prototypes.",
    ],
    requirements: [
      "Experience with applied machine learning or data science.",
      "Proficiency in Python and common model development workflows.",
      "Strong analytical and written communication skills.",
    ],
    benefits: ["Flexible schedule", "Learning resources", "Team equipment"],
    skills: ["Machine Learning", "Python", "Research"],
    postedAt: "2026-10-25",
    featured: false,
  },
]

export const jobCategories = [
  ...new Set(jobs.map((job) => job.category)),
].sort()

function parseSalary(value: string) {
  if (!value) return undefined

  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined
}

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id)
}

export function filterJobs(filters: JobSearchFilters) {
  const query = filters.q.trim().toLowerCase()
  const location = filters.location.trim().toLowerCase()
  const salaryMin = parseSalary(filters.salaryMin)
  const salaryMax = parseSalary(filters.salaryMax)

  return jobs
    .filter((job) => {
      const company = companies.find((item) => item.id === job.companyId)
      const searchableText = [
        job.title,
        job.category,
        job.description,
        ...job.skills,
        company?.name ?? "",
      ]
        .join(" ")
        .toLowerCase()

      if (query && !searchableText.includes(query)) return false
      if (
        location &&
        !job.location.toLowerCase().includes(location) &&
        !(location.includes("remote") && job.remote)
      ) {
        return false
      }
      if (filters.type && job.employmentType !== filters.type) return false
      if (filters.category && job.category !== filters.category) return false
      if (salaryMin !== undefined && job.salaryMax < salaryMin) return false
      if (salaryMax !== undefined && job.salaryMin > salaryMax) return false

      return true
    })
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt))
}

export function formatSalary(job: Job) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: job.currency,
    maximumFractionDigits: 0,
  })

  return `${formatter.format(job.salaryMin)} – ${formatter.format(job.salaryMax)}`
}
