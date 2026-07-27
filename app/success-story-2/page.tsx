import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Buidling Khenti's Foreign Language Library | Richard Cuellar-Lopez",
  description:
    "A Peace Corps story from Mongolia about raising funds and working with local partners to build a foreign language library in Khenti.",
}

const storySections = [
  {
    title: "Building a library the community asked for",
    body:
      "After a series of meetings with local community stakeholders, the shared priority became clear: students wanted a dedicated foreign language library where they could become more comfortable with other languages and prepare for study abroad opportunities. I brought that goal to local government agencies and the United States Peace Corps, ultimately raising more than $10,000 to support the project. The library was built with local resources, local labor, and local staff, so the community could own both the space and its future.",
  },
]

const photos = [
  {
    src: "/success-story-2/mongolia-library-main.png",
    alt: "A log structure under construction for a library in Mongolia",
  },
  {
    src: "/success-story-2/mongolia-library-classroom-board.jpg",
    alt: "A student studies English lessons written on a chalkboard in a Mongolia classroom",
  },
  {
    src: "/success-story-2/mongolia-library-students-table.jpg",
    alt: "Students gather around a wooden table while working together in a classroom in Mongolia",
  },
]

const photoClassName =
  "object-cover saturate-[0.9] contrast-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.02]"

export default function SuccessStoryTwoPage() {
  return (
    <article className="overflow-hidden bg-background">
      <section className="relative isolate border-b border-border/60">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-primary/10 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Beyond the resume</p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Buidling Khenti&apos;s <span className="text-gradient">Foreign Language Library</span>
            </h1>
            <div className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              <p>In Mongolia, community meetings turned a broad education need into a concrete library project.</p>
              <div className="my-5 h-px w-full bg-border" aria-hidden="true" />
              <p>
                The goal was to create a dedicated place where students could practice foreign languages and build the
                confidence to pursue study abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="story-photos-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="story-photos-title" className="sr-only">
            Photographs from the Mongolia library project
          </h2>

          <div className="relative mx-auto max-w-6xl pb-4 lg:pb-16">
            <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[15rem_15rem]">
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className={photoClassName}
                />
              </figure>

              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:aspect-auto">
                <Image
                  src={photos[1].src}
                  alt={photos[1].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={photoClassName}
                />
              </figure>

              <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:aspect-auto">
                <Image
                  src={photos[2].src}
                  alt={photos[2].alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className={photoClassName}
                />
              </figure>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted-foreground lg:mt-0">
            Photos from the local library in rural Mongolia that I built with the community.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">The story</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From meetings to a staffed library
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
            building a library ... wood + will = wisdom
          </blockquote>
        </div>
      </section>
    </article>
  )
}
