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
    title: "Web Application",
    description: "Full multi-client SaaS platform for managing and tracking client projects",
    imageUrl: "/sample_ourmada.png",
    category: "Web Design",
    link: "https://ourmada.com",
  },
  {
    id: 2,
    title: "Sleek Web Experience",
    description: "Simple wallet explorer for blockchain data",
    imageUrl: "/sample_wallet.png",
    category: "Web Design",
    link: "https://www.sightlinescrypto.com/",
  },
  {
    id: 3,
    title: "ChatGPT prompt generator",
    description: "ChatGPT wrapper for generating specific AI conversations",
    imageUrl: "/sample_jargon.png",
    category: "Open Source",
    link: "https://broken-wood-4803.on.fleek.co/",
  },
]
