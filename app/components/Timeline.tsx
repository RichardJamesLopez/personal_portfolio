"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
<<<<<<< HEAD
    year: 2018,
    title: "Flowers & Saints Founded",
    description: "Our journey began with a passion for minimal design and floral artistry.",
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },
  {
    year: 2019,
    title: "First Major Exhibition",
    description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
  },
  {
    year: 2020,
    title: "Launch of Online Store",
    description: "Expanded our reach by bringing our creations to the digital world.",
    details:
      "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
  },
  {
    year: 2021,
    title: "Collaboration with Top Brands",
    description: "Partnered with leading lifestyle brands to create exclusive collections.",
    details:
      "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
  },
  {
    year: 2022,
    title: "International Recognition",
    description: "Received the prestigious International Floral Design Award.",
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
  {
    year: 2023,
    title: "Expansion to Physical Stores",
    description: "Opened our first flagship store in the heart of Sydney.",
    details:
      "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
=======
    year: 2008,
    title: "Peace Corps Volunteer",
    skills: ["Excel"],
    details:
      "Learned how to organize and share data while I was teaching English in Mongolia at a middle school and then at an international mining company",
  },
  {
    year: 2012,
    title: "Graduate School",
    skills: ["Excel", "R", "VBA"],
    details:
      "Earned a Master's degree at Columbia University of New York with a focus on international finance and economics",
  },
  {
    year: 2014,
    title: "Finance ",
    skills: ["Excel", "Python", "Pandas", "Javascript", "SQL"],
    details:
      "Sharpened financial analytical skills at a bank and hedge fund in New York",
  },
  {
    year: 2018,
    title: "Tech Companies",
    skills: ["SQL", "Python", "PyTorch", "Tableau"],
    details:
      "Worked at UberEats and Andela in NYC in operations and management roles",
  },
  {
    year: 2020,
    title: "Blockchain",
    skills: ["Javascript", "React", "Solidity", "Python"],
    details:
      "Ran technical sales and then built out a Sales team in blockchain infrastructure at Pocket Network. Also contributed to the MakerDAO and Arbitrum communities.",
  },
  {
    year: 2023,
    title: "Founder",
    skills: ["Javascript", "React", "Next.js"],
    details:
      "Built a multi-client SaaS product for both Web2 and Web3 customers",
>>>>>>> master
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
<<<<<<< HEAD
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
=======
    <section id="timeline" ref={containerRef} className="py-20 bg-background overflow-hidden">
>>>>>>> master
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">The evolution of Flowers & Saints through the years</p>
=======
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Journey</h2>
          { <p className="mt-4 text-lg text-muted-foreground">My professional timeline</p>}
>>>>>>> master
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
<<<<<<< HEAD
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
=======
            className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-primary/20 z-0 origin-top"
>>>>>>> master
            style={{ scaleY: scaleX }}
          />

          {/* Flower icon */}
          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
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
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
<<<<<<< HEAD
      <div className="z-20">
=======
      <div className="z-10">
>>>>>>> master
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
<<<<<<< HEAD
          <p className="text-muted-foreground">{event.description}</p>
=======
          <div className="flex flex-wrap gap-2 mb-2">
            {event.skills && event.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
>>>>>>> master
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
