import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Features from '../components/Features'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import SectionSeparator from '../components/SectionSeparator'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* <SectionSeparator sectionName="Services" color="#0038b8" /> */}
      <Services />
      
      {/* <SectionSeparator sectionName="Expertise" color="#F20000" /> */}
      <Pricing />
      
      {/* <SectionSeparator sectionName="Réalisations" color="#0038b8" /> */}
      <Testimonials />
      
      {/* <SectionSeparator sectionName="Fonctionnalités" color="#0038b8" /> */}
      <Features />
      
      {/* <SectionSeparator sectionName="Mission" color="#F20000" /> */}
      <Mission />
      
      {/* <SectionSeparator sectionName="Contact" color="#F20000" /> */}
      <Contact />
    </div>
  )
} 