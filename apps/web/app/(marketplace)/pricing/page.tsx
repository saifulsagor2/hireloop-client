import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingPlanSwitcher } from "@/components/pricing/pricing-plan-switcher"
import { PageHeading } from "@/components/marketplace/page-heading"

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-[1320px] px-6 pt-12 pb-20 sm:px-10 sm:pt-16 lg:px-[60px] lg:pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <PageHeading
          eyebrow="Plans for every next step"
          title="Simple plans, clear possibilities"
          description="Choose the tools that fit your job search or your team's hiring goals."
        />
        <PricingPlanSwitcher />
      </div>
      <PricingFaq />
      <p className="mx-auto mt-8 max-w-3xl text-center font-display text-xs leading-5 text-white/40">
        Plan details are presented for information only. Checkout, billing, and
        plan enforcement are not available in this frontend.
      </p>
    </main>
  )
}
