import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

// Loading component for sections
function SectionLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Features Section with Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <section id="features" aria-labelledby="features-heading">
          <Features />
        </section>
      </Suspense>
      
      {/* Testimonials Section */}
      <Suspense fallback={<SectionLoader />}>
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>
      </Suspense>
      
      {/* Pricing Section */}
      <Suspense fallback={<SectionLoader />}>
        <section id="pricing" aria-labelledby="pricing-heading">
          <Pricing />
        </section>
      </Suspense>
      
      {/* FAQ Section */}
      <Suspense fallback={<SectionLoader />}>
        <section id="faq" aria-labelledby="faq-heading">
          <FAQ />
        </section>
      </Suspense>
      
      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </Suspense>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </main>
  )
}