import type { Company } from "./types"

export const companies: Company[] = [
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "/images/companies/airbnb.png",
    industry: "Travel & Hospitality",
    location: "San Francisco, CA",
    employeeCount: "5,000+",
    openJobs: 1,
    website: "https://www.airbnb.com",
    description:
      "Airbnb creates a world where anyone can belong anywhere through unique homes and experiences.",
    founded: 2008,
    about: [
      "We build products that make it easier for people to share their homes, experiences, and local knowledge.",
      "Our teams bring together design, engineering, and hospitality to help people feel at home wherever they go.",
    ],
  },
  {
    id: "google",
    name: "Google",
    logo: "/images/companies/google.png",
    industry: "Technology",
    location: "Mountain View, CA",
    employeeCount: "180,000+",
    openJobs: 1,
    website: "https://about.google",
    description:
      "Google builds products and services that help people find information and get things done.",
    founded: 1998,
    about: [
      "Our teams work across products, infrastructure, and research to make useful technology accessible to everyone.",
      "We believe the best ideas come from curious people working together on meaningful problems.",
    ],
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "/images/companies/spotify.png",
    industry: "Media & Entertainment",
    location: "New York, NY",
    employeeCount: "9,000+",
    openJobs: 1,
    website: "https://www.spotify.com",
    description:
      "Spotify connects creators and listeners through audio experiences enjoyed around the world.",
    founded: 2006,
    about: [
      "We bring music, podcasts, and creators closer to listeners through thoughtful product experiences.",
      "Our teams combine technology and creativity to shape how people discover and enjoy audio.",
    ],
  },
  {
    id: "adobe",
    name: "Adobe",
    logo: "/images/companies/adobe.png",
    industry: "Design & Software",
    location: "San Jose, CA",
    employeeCount: "30,000+",
    openJobs: 1,
    website: "https://www.adobe.com",
    description:
      "Adobe gives everyone the tools to create, communicate, and deliver digital experiences.",
    founded: 1982,
    about: [
      "Our products help people and businesses create and share their best work.",
      "We build creative and document tools used by individuals, teams, and organizations worldwide.",
    ],
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/companies/microsoft.png",
    industry: "Technology",
    location: "Redmond, WA",
    employeeCount: "220,000+",
    openJobs: 1,
    website: "https://www.microsoft.com",
    description:
      "Microsoft empowers people and organizations to achieve more with technology.",
    founded: 1975,
    about: [
      "We create platforms and services that help people and organizations be more productive.",
      "Our teams work across cloud, productivity, devices, and AI to solve complex challenges.",
    ],
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logo: "/images/companies/nvidia.png",
    industry: "AI & Computing",
    location: "Santa Clara, CA",
    employeeCount: "30,000+",
    openJobs: 1,
    website: "https://www.nvidia.com",
    description:
      "NVIDIA advances accelerated computing to help solve challenges across industries.",
    founded: 1993,
    about: [
      "Our work spans accelerated computing, graphics, and AI platforms.",
      "We bring together engineers and researchers to build technology for demanding real-world problems.",
    ],
  },
]

export const companyIndustries = [
  ...new Set(companies.map((company) => company.industry)),
].sort()

export function getCompanyById(id: string) {
  return companies.find((company) => company.id === id)
}
