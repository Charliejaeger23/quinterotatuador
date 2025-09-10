import { HeroSection } from './components/sections/HeroSection'
import { ValueProposition } from './components/sections/ValueProposition'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { ProcessSection } from './components/sections/ProcessSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { FAQSection } from './components/sections/FAQSection'
import { FinalCTASection } from './components/sections/FinalCTASection'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Main Content */}
      <HeroSection />
      <ValueProposition />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      
      <Footer />
    </main>
  )
}