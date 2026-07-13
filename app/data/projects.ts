export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Thought API",
    description: "Open-source API for agent-driven opinion and market research workflows",
    imageUrl: "/thought-api-github.png",
    category: "Agent Opinion Market",
    link: "https://github.com/RichardJamesLopez/thought-api",
  },
  {
    id: 2,
    title: "Ourmada",
    description: "Crowd-soucred CRM",
    imageUrl: "/sample_ourmada.png",
    category: "Web Design",
    link: "https://ourmada.com",
  },
  {
    id: 3,
    title: "Sleek Web Experience",
    description: "Fun wallet explorer",
    imageUrl: "/sample_wallet.png",
    category: "Web Design",
    link: "https://www.sightlinescrypto.com/",
  },
  {
    id: 4,
    title: "Warmup Pitches",
    description: "One-liner builder that helps founders describe their business",
    imageUrl: "/warmup-pitches-one-liner.png",
    category: "Web Design",
    link: "https://home.warmuppitches.com/activity",
  },
  {
    id: 5,
    title: "Polymarket Bot Analysis",
    description: "Polymarket analysis tool",
    imageUrl: "/poly-gold-analysis.png",
    category: "Web Design",
    link: "https://poly-gold.vercel.app/",
  },
  {
    id: 6,
    title: "Venture Jargon",
    description: "Foounder Prompt Generator",
    imageUrl: "/sample_jargon.png",
    category: "Open Source",
    link: "https://broken-wood-4803.on.fleek.co/",
  },
]
