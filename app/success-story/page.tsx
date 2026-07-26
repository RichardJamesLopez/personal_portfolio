import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Success Story | Richard Cuellar-Lopez",
  description:
    "At age 20, I went on study abroad to write on unit economics of mining. While at university, I was bogged down with a series of permits, rural travel visas, and permissions that I needed to do primary research. I spent my spring break just skipping the red tape and traveling on site to learn for myself.",
}

const storyDetails = [
  { label: "Age", value: "20 years old" },
  { label: "Moment", value: "Spring break" },
  { label: "Place", value: "Merarani - rural Tanzania" },
]

const storySections = [
  {
    title: "Too much help just isn't that helpful",
    body:
      "Writing a paper on mining in Tanzania  taught me that sometimes it is easier to act than to keep asking for permission. I had planned to write paper about tanzanite mining for months but every professor/expert/contact directed me toward more permits, special travel visas, and additional people I supposedly needed to consult. Their advice made the project feel far more complicated than it needed to be. Honestly, if I had tried to write the paper in a conventional way, it would have over produced, sub-par, and not a memorable experience at all.",
  },
  {
    title: "All too often, choices are simple",
    body:
      "After reading an article that mentioned a specific mining town, I found it on a map and became resolute to just go there directly during spring break. I soon found out that foreigners seldom traveled to the site, but shortly after I arrived, several people noticed me and were excited to show me what the local economy around mining was about. In exchange for covering a few meals, I spent a week exploring the site, descending into a mine to see uncovered minearls, extracting the raw tanzanite, and learning firsthand how it was sourced and priced.",
  },
  {
    title: "Just start",
    body:
      "After taking the trip to where tanzanite was found, I had learned more in 3 days than the previous 3 months learning from books. The primary research strengthened my paper, but the more lasting lesson was clear - many seemingly difficult things become easier once you simply decide to begin.",
  },

]

const photoClassName =
  "object-cover saturate-[0.88] contrast-[0.96] transition-transform duration-700 ease-out group-hover:scale-[1.02]"

export default function SuccessStoryPage() {
  return (
    <article className="overflow-hidden bg-background">
      <section className="relative isolate border-b border-border/60">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Beyond the résumé</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Success <span className="text-gradient">Story</span>
            </h1>
            <div className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              <p>At age 20, I went on study abroad to write on unit economics of mining.</p>
              <div className="my-5 h-px w-full bg-border" aria-hidden="true" />
              <p>
                While at university, I became bogged down with a series of permits, rural travel visas, and permissions
                that I needed to do primary research. I spent my spring break just skipping the red tape and traveling
                on site to learn for myself.
              </p>
            </div>
          </div>

          <dl className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {storyDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-primary/10 bg-secondary/50 px-5 py-4 backdrop-blur-sm"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-base font-semibold text-foreground">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="story-photos-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="story-photos-title" className="sr-only">
            Photographs from the visit
          </h2>

          <div className="relative mx-auto max-w-6xl pb-4 lg:pb-16">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[14rem_14rem]">
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary sm:col-span-2 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto">
                <Image
                  src="/success-story/ore-examination.jpg"
                  alt="A mine worker examines a small piece of material beside a spread of loose rock"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className={photoClassName}
                />
              </figure>

              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary sm:col-span-1 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:aspect-auto">
                <Image
                  src="/success-story/mine-overlook.jpg"
                  alt="A wide view across the mine site and surrounding green hills in rural Tanzania"
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className={photoClassName}
                />
              </figure>

              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary sm:col-span-1 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:aspect-auto">
                <Image
                  src="/success-story/mine-shaft.jpg"
                  alt="A mine worker wearing a headlamp climbs wooden steps inside a mine shaft"
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className={photoClassName}
                />
              </figure>
            </div>

            <div className="relative z-10 mt-4 grid gap-4 sm:grid-cols-2 lg:mx-14 lg:-mt-12 lg:items-end">
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-background bg-secondary shadow-2xl shadow-black/15">
                <Image
                  src="/success-story/with-mine-workers.jpg"
                  alt="Richard sits with three mine workers inside a wooden building at the site"
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className={photoClassName}
                />
              </figure>

              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-background bg-secondary shadow-2xl shadow-black/15 lg:translate-y-8">
                <Image
                  src="/success-story/with-local-hosts.jpg"
                  alt="Richard smiles with three people inside a wooden shelter at the mine site"
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                  className={photoClassName}
                />
              </figure>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted-foreground lg:mt-0">
            Five frames from the visit: the landscape, the mine itself, and the people who shared their time and
            knowledge.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">The story</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Going to the source
            </h2>
          </div>

          <div className="space-y-10">
            {storySections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <blockquote className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            You don’t need to wait for permission to succeed
          </blockquote>
          - Ayn Rand
        </div>
      </section>
    </article>
  )
}
