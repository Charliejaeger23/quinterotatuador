import { Suspense } from 'react'
import Navigation from '@/app/components/layout/Navigation'
import Footer from '@/app/components/layout/Footer'
import HeroSection from '@/app/components/sections/HeroSection'
import ValueProposition from '@/app/components/sections/ValueProposition'
import PortfolioSection from '@/app/components/sections/PortfolioSection'
import ProcessSection from '@/app/components/sections/ProcessSection'
import TestimonialsSection from '@/app/components/sections/TestimonialsSection'
import FAQSection from '@/app/components/sections/FAQSection'
import FinalCTASection from '@/app/components/sections/FinalCTASection'

// Loading components for better UX
function SectionSkeleton() {
  return (
    <div className="section">
      <div className="container-custom">
        <div className="skeleton h-8 w-64 mx-auto mb-4"></div>
        <div className="skeleton h-4 w-96 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton h-64 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
        </Suspense>
        
        {/* Value Proposition */}
        <Suspense fallback={<SectionSkeleton />}>
          <ValueProposition />
        </Suspense>
        
        {/* Portfolio Gallery */}
        <Suspense fallback={<SectionSkeleton />}>
          <PortfolioSection />
        </Suspense>
        
        {/* Process Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection />
        </Suspense>
        
        {/* Testimonials */}
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        
        {/* FAQ Section */}
        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>
        
        {/* Final CTA */}
        <Suspense fallback={<SectionSkeleton />}>
          <FinalCTASection />
        </Suspense>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  )
}