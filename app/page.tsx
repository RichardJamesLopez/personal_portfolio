import Hero from "./components/Hero"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
    </>
  )
}
