"use client"

import Image from "next/image"
import { useState, useRef, type KeyboardEvent } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

type TimelineLogo = {
  name: string
  src: string
  width: number
  height: number
}

type TimelineEventData = {
  year: number
  title: string
  skills: string[]
  details: string
  logos?: TimelineLogo[]
}

const timelineEvents: TimelineEventData[] = [
  {
    year: 2008,
    title: "Peace Corps Volunteer",
    skills: ["Excel"],
    details:
      "Learned how to organize and share data while I was teaching English in Mongolia at a middle school and then at an international mining company",
    logos: [
      {
        name: "Peace Corps",
        src: "/logos/timeline/peace-corps.svg",
        width: 720,
        height: 720,
      },
    ],
  },
  {
    year: 2012,
    title: "Graduate School",
    skills: ["Excel", "R", "VBA"],
    details:
      "Earned a Master's degree at Columbia University of New York with a focus on international finance and economics",
    logos: [
      {
        name: "Columbia University",
        src: "/logos/timeline/columbia.svg",
        width: 357,
        height: 55,
      },
    ],
  },
  {
    year: 2014,
    title: "Finance ",
    skills: ["Excel", "Python", "Pandas", "Javascript", "SQL"],
    details:
      "Sharpened financial analytical skills at a bank and hedge fund in New York",
    logos: [
      {
        name: "Morgan Stanley",
        src: "/logos/timeline/morgan-stanley.svg",
        width: 1000,
        height: 144,
      },
      {
        name: "Protégé Partners",
        src: "/logos/timeline/protege-partners.svg",
        width: 240,
        height: 48,
      },
    ],
  },
  {
    year: 2018,
    title: "Tech Companies",
    skills: ["SQL", "Python", "PyTorch", "Tableau"],
    details:
      "Worked at UberEats and Andela in NYC in operations and management roles",
    logos: [
      {
        name: "Uber",
        src: "/logos/timeline/uber.svg",
        width: 927,
        height: 322,
      },
      {
        name: "Andela",
        src: "/logos/timeline/andela.png",
        width: 366,
        height: 142,
      },
    ],
  },
  {
    year: 2020,
    title: "Blockchain",
    skills: ["Javascript", "React", "Solidity", "Python"],
    details:
      "Ran technical sales and then built out a Sales team in blockchain infrastructure at Pocket Network. Also contributed to the MakerDAO and Arbitrum communities.",
    logos: [
      {
        name: "Pocket Network",
        src: "/logos/timeline/pocket-network.svg",
        width: 690,
        height: 177,
      },
      {
        name: "Arbitrum",
        src: "/logos/timeline/arbitrum.svg",
        width: 1080,
        height: 1219,
      },
    ],
  },
  {
    year: 2023,
    title: "Founder",
    skills: ["Javascript", "React", "Next.js"],
    details:
      "Built a multi-client SaaS product for both Web2 and Web3 customers",
  },
]

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="timeline" ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Journey</h2>
          { <p className="mt-4 text-lg text-muted-foreground">My professional timeline</p>}
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute bottom-0 left-4 top-4 z-0 w-0.5 -translate-x-1/2 origin-top bg-primary/20 md:left-1/2"
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform text-primary md:block"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: TimelineEventData
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const detailsId = `timeline-event-details-${event.year}`

  const handleKeyDown = (keyboardEvent: KeyboardEvent<HTMLDivElement>) => {
    if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
      keyboardEvent.preventDefault()
      onToggle()
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative mb-8 flex w-full items-center pl-12 md:justify-between md:pl-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="hidden w-5/12 md:block" />
      <div className="absolute left-0 z-10 md:static">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-full cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background md:w-5/12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          {event.logos && event.logos.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2" aria-label="Organizations">
              {event.logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex min-h-14 min-w-[7.5rem] flex-1 items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 shadow-sm"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-h-8 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-2">
            {event.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            id={detailsId}
            aria-hidden={!isExpanded}
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
