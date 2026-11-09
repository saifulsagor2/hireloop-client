const questions = [
  {
    question: "Can I change plans later?",
    answer:
      "Plan changes are not processed on this pricing page yet. Choose the plan that fits your needs, and contact the HireLoop team if you have questions.",
  },
  {
    question: "Are payments or subscriptions active?",
    answer:
      "No. This page presents plan information only. Subscription checkout and payment processing are not part of this frontend phase.",
  },
  {
    question: "Can recruiters post jobs on the free plan?",
    answer:
      "The listed recruiter Free plan includes up to three active job posts. Job posting and plan limits are not enforced by this UI.",
  },
  {
    question: "What happens when I sign up?",
    answer:
      "Email and password registration uses the existing authentication service. Role assignment and paid-plan activation are not included here.",
  },
]

export function PricingFaq() {
  return (
    <section aria-labelledby="pricing-faq-title" className="mt-20 sm:mt-24">
      <div className="mx-auto max-w-3xl">
        <h2
          id="pricing-faq-title"
          className="text-center font-display text-2xl font-bold text-white sm:text-3xl"
        >
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-white marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#aaa4ff]">
                {question}
                <span
                  aria-hidden="true"
                  className="text-xl text-[#aaa4ff] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl font-display text-sm leading-6 text-white/60">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
