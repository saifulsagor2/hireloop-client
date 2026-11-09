type PageHeadingProps = {
  eyebrow?: string
  title: string
  description: string
  headingLevel?: 1 | 2
  titleId?: string
}

export function PageHeading({
  eyebrow,
  title,
  description,
  headingLevel = 1,
  titleId,
}: PageHeadingProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2"

  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="font-label text-sm font-medium tracking-[0.16em] text-[#aaa4ff] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={titleId}
        className="mt-2 font-display text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </Heading>
      <p className="mt-4 font-display text-base leading-7 text-white/60 sm:text-lg">
        {description}
      </p>
    </header>
  )
}
