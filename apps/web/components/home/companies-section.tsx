import Image from "next/image"

const companies = [
  { name: "Adobe", logo: "adobe" },
  { name: "Airbnb", logo: "airbnb" },
  { name: "Amazon", logo: "amazon" },
  { name: "Apple", logo: "apple" },
  { name: "Google", logo: "google" },
  { name: "Meta", logo: "meta" },
  { name: "Microsoft", logo: "microsoft" },
  { name: "Netflix", logo: "netflix" },
  { name: "NVIDIA", logo: "nvidia" },
  { name: "Spotify", logo: "spotify" },
  { name: "Tesla", logo: "tesla" },
  { name: "Uber", logo: "uber" },
]

export function CompaniesSection() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-title"
      className="border-y border-white/[0.07] bg-[#080809] py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-[60px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-label text-sm font-medium tracking-[0.16em] text-[#aaa4ff] uppercase">
            The world&apos;s best teams
          </p>
          <h2
            id="companies-title"
            className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl"
          >
            Great companies are hiring on HireLoop
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-3 items-center gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-10">
          {companies.map((company) => (
            <li
              key={company.name}
              className="flex min-h-14 items-center justify-center"
            >
              <Image
                src={`/images/companies/${company.logo}.png`}
                alt={company.name}
                width={128}
                height={128}
                className="h-10 w-24 object-contain opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-12 sm:w-28"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
