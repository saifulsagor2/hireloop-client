"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Minus } from "lucide-react"

import { recruiterPlans, seekerPlans } from "@/lib/marketplace/plans"

type Audience = "seekers" | "recruiters"

export function PricingPlanSwitcher() {
  const [audience, setAudience] = useState<Audience>("seekers")
  const plans = audience === "seekers" ? seekerPlans : recruiterPlans

  return (
    <>
      <div
        role="group"
        aria-label="Choose plans for"
        className="mx-auto mt-8 inline-flex rounded-xl border border-white/10 bg-[#111113] p-1"
      >
        <button
          type="button"
          aria-pressed={audience === "seekers"}
          onClick={() => setAudience("seekers")}
          className={`rounded-lg px-4 py-2.5 font-display text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff] sm:px-6 ${
            audience === "seekers"
              ? "bg-[#5c53fe] text-white"
              : "text-white/65 hover:text-white"
          }`}
        >
          Job seekers
        </button>
        <button
          type="button"
          aria-pressed={audience === "recruiters"}
          onClick={() => setAudience("recruiters")}
          className={`rounded-lg px-4 py-2.5 font-display text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff] sm:px-6 ${
            audience === "recruiters"
              ? "bg-[#5c53fe] text-white"
              : "text-white/65 hover:text-white"
          }`}
        >
          Recruiters
        </button>
      </div>

      <section aria-labelledby="pricing-plans-title" className="mt-8">
        <h2 id="pricing-plans-title" className="sr-only">
          {audience === "seekers" ? "Job seeker plans" : "Recruiter plans"}
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={`${audience}-${plan.name}`}
              className={`flex flex-col rounded-2xl border p-5 sm:p-6 ${
                plan.highlighted
                  ? "border-[#7770ff] bg-[linear-gradient(160deg,rgba(92,83,254,0.2),#111113_54%)] shadow-[0_0_40px_rgba(92,83,254,0.12)]"
                  : "border-white/10 bg-[#111113]"
              }`}
            >
              {plan.highlighted ? (
                <p className="font-label text-xs font-semibold tracking-[0.12em] text-[#c5c0ff] uppercase">
                  Most popular
                </p>
              ) : null}
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 min-h-12 font-display text-sm leading-6 text-white/55">
                {plan.description}
              </p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-white">
                ${plan.price}
                <span className="ml-1 text-sm font-normal text-white/50">
                  {plan.price === 0 ? "/ forever" : "/ month"}
                </span>
              </p>
              <Link
                href="/sign-up"
                className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl font-display font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aaa4ff] ${
                  plan.highlighted
                    ? "bg-[#5c53fe] text-white hover:bg-[#4c44e6]"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={`flex items-start gap-2.5 font-display text-sm leading-5 ${
                      feature.included ? "text-white/75" : "text-white/40"
                    }`}
                  >
                    {feature.included ? (
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-[#aaa4ff]"
                      />
                    ) : (
                      <Minus
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0"
                      />
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
