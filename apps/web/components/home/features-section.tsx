import {
  BookmarkCheck,
  Building2,
  ChartColumnIncreasing,
  SearchCheck,
} from "lucide-react"

const features = [
  {
    title: "Smart job search",
    description:
      "Find relevant opportunities faster with focused search and useful filters.",
    icon: SearchCheck,
  },
  {
    title: "Salary insights",
    description:
      "Compare compensation ranges and make your next career move with confidence.",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Top companies",
    description:
      "Explore trusted teams and discover the people and culture behind each role.",
    icon: Building2,
  },
  {
    title: "Saved jobs",
    description:
      "Keep promising roles close and return to them when you are ready to apply.",
    icon: BookmarkCheck,
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-[60px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-label text-sm font-medium tracking-[0.16em] text-[#aaa4ff] uppercase">
            Built for your next move
          </p>
          <h2
            id="features-title"
            className="mt-3 font-display text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
          >
            Your job search, made simpler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-display text-base leading-7 text-white/60 sm:text-lg">
            Everything you need to discover the right role and keep your search
            moving forward.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-[22px] border border-white/10 bg-[#111113] p-5 sm:p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[#5c53fe]/25 bg-[#5c53fe]/10">
                <Icon
                  aria-hidden="true"
                  className="size-5 text-[#aaa4ff]"
                  strokeWidth={1.8}
                />
              </div>
              <p className="mt-7 font-label text-xs font-medium tracking-[0.14em] text-white/40 uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 font-display text-sm leading-6 text-white/60">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
