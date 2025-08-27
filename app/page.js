import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Features from '../components/Features'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Features />
      <Mission />
      <Testimonials />
      <Contact />
    </div>
  )
} 