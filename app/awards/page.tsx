import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Awards | Richard Cuellar-Lopez",
  description:
    "Awards recognizing campus impact, public service, civic engagement, and advanced global business studies.",
}

const awards = [
  {
    institution: "Lake Forest College",
    title: "Senior 25",
    year: "Campus impact",
    logo: "/awards/logos/lake-forest-college.png",
    logoAlt: "Lake Forest College logo",
    photo: "/awards/photos/lake-forest-college-award.jpg",
    photoAlt: "Aerial view of Lake Forest College campus",
    summary:
      "Selected for Senior 25, an honor for students who made the most meaningful impact on campus.",
    details:
      "The award recognizes the top 5% of impactful students at Lake Forest College, highlighting leadership, contribution, and sustained presence in campus life.",
  },
  {
    institution: "Peace Corps",
    title: "2012 Franklin H. Williams Award",
    year: "Public service",
    logo: "/awards/logos/peace-corps.svg",
    logoAlt: "Peace Corps logo",
    photo: "/awards/photos/franklin-williams-award.jpg",
    photoAlt: "Franklin H. Williams Award presentation ceremony",
    summary:
      "Recipient of the Franklin H. Williams Award for civic engagement and continued public service values after Peace Corps service.",
    details:
      "The award recognizes Returned Peace Corps Volunteers who continue to demonstrate the public service values of the Peace Corps through a steadfast commitment to civic engagement.",
  },
  {
    institution: "Columbia Business School",
    title: "Chazen Institute Award Recipient",
    year: "Advanced studies",
    logo: "/awards/logos/columbia-business-school.svg",
    logoAlt: "Columbia Business School logo",
    photo: "/awards/photos/chazen-institute-award.jpg",
    photoAlt: "Richard Cuellar-Lopez waving in winter clothing in Mongolia",
    summary:
      "Award recipient through the Chazen Institute at Columbia Business School for advanced studies.",
    details:
      "This recognition connects global business study with practical leadership development through Columbia Business School's Chazen Institute.",
  },
]

const photoClassName =
  "object-cover saturate-[0.9] contrast-[0.98] transition-transform duration-700 ease-out group-hover:scale-[1.02]"

export default function AwardsPage() {
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
              Awards <span className="text-gradient">and Honors</span>
            </h1>
            <div className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              <p>Three recognitions across campus leadership, civic engagement, and global business study.</p>
              <div className="my-5 h-px w-full bg-border" aria-hidden="true" />
              <p>
                Each award marks a different version of impact: showing up on campus, carrying public service values
                forward, and pursuing advanced study through a global business lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="award-photos-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="award-photos-title" className="sr-only">
            Award photographs and institutional logos
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {awards.map((award, index) => (
              <figure
                key={award.title}
                className={`group relative overflow-hidden rounded-3xl bg-secondary ${
                  index === 0 ? "lg:translate-y-8" : index === 1 ? "lg:-translate-y-2" : "lg:translate-y-14"
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={award.photo}
                    alt={award.photoAlt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={photoClassName}
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-5 pt-16">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {award.institution}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">{award.title}</p>
                  </div>
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-white p-2 shadow-sm">
                    <Image src={award.logo} alt={award.logoAlt} fill sizes="80px" className="object-contain p-2" />
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-6 text-muted-foreground lg:mt-24">
            Three recognitions spanning undergraduate leadership, public service, and international business study.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Recognition</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Impact in my work
            </h2>
          </div>

          <div className="space-y-10">
            {awards.map((award) => (
              <section key={award.title} className="grid gap-5 border-b border-border/60 pb-10 last:border-b-0 last:pb-0 sm:grid-cols-[8rem_1fr]">
                <div className="flex h-24 w-32 items-center justify-center rounded-2xl border border-border/60 bg-white p-4 shadow-sm">
                  <Image
                    src={award.logo}
                    alt={award.logoAlt}
                    width={160}
                    height={96}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{award.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{award.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-muted-foreground">{award.summary}</p>
                  <p className="mt-3 text-base leading-7 text-foreground">{award.details}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center sm:py-20 lg:px-8">
          <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl sm:leading-tight">
            A simple goal in life
          </p>
          <img
            src="/closing-giphy.gif"
            alt="Animated closing GIF"
            className="w-full max-w-2xl rounded-lg object-cover shadow-sm"
          />
        </div>
      </section>
    </article>
  )
}
