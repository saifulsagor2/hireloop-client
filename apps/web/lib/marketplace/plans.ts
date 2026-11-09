import type { PricingPlan } from "./types"

export const seekerPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "A simple start to your job search.",
    cta: "Get started",
    features: [
      { label: "Browse and save up to 10 jobs", included: true },
      { label: "Apply to 3 jobs per month", included: true },
      { label: "Basic profile", included: true },
      { label: "Email alerts", included: true },
    ],
  },
  {
    name: "Pro",
    price: 19,
    description: "More tools to keep your search moving.",
    cta: "Choose Pro",
    highlighted: true,
    features: [
      { label: "Apply to 30 jobs per month", included: true },
      { label: "Unlimited saved jobs", included: true },
      { label: "Application tracking", included: true },
      { label: "Salary insights", included: true },
    ],
  },
  {
    name: "Premium",
    price: 39,
    description: "Extra support for your next big move.",
    cta: "Choose Premium",
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Unlimited applications", included: true },
      { label: "Profile boost to recruiters", included: true },
      { label: "Early access and priority support", included: true },
    ],
  },
]

export const recruiterPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "Start building your team.",
    cta: "Get started",
    features: [
      { label: "Up to 3 active job posts", included: true },
      { label: "Basic applicant management", included: true },
      { label: "Standard listing visibility", included: true },
      { label: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Growth",
    price: 49,
    description: "More reach for growing teams.",
    cta: "Choose Growth",
    highlighted: true,
    features: [
      { label: "Up to 10 active job posts", included: true },
      { label: "Applicant tracking", included: true },
      { label: "Basic analytics", included: true },
      { label: "Email support", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: 149,
    description: "Advanced tools for hiring at scale.",
    cta: "Choose Enterprise",
    features: [
      { label: "Up to 50 active job posts", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Team collaboration and branding", included: true },
      { label: "Featured listings and priority support", included: true },
    ],
  },
]
