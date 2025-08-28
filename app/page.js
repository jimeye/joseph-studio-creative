import Hero from '../components/Hero'
import Services from '../components/Services'
import ExpertAdvice from '../components/ExpertAdvice'
import Pricing from '../components/Pricing'
import Features from '../components/Features'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* REPERE ROUGE - HERO */}
      <div className="w-full h-4 bg-red-500 text-white text-center font-bold">REPERE ROUGE - SECTION HERO</div>
      <Hero />
      
      {/* REPERE BLEU - SERVICES */}
      <div className="w-full h-4 bg-blue-500 text-white text-center font-bold">REPERE BLEU - SECTION SERVICES</div>
      <Services />
      
      {/* REPERE VERT - EXPERT ADVICE */}
      <div className="w-full h-4 bg-green-500 text-white text-center font-bold">REPERE VERT - SECTION EXPERT ADVICE</div>
      <ExpertAdvice />
      
      {/* REPERE ORANGE - PRICING */}
      <div className="w-full h-4 bg-orange-500 text-white text-center font-bold">REPERE ORANGE - SECTION PRICING</div>
      <Pricing />
      
      {/* REPERE VIOLET - FEATURES */}
      <div className="w-full h-4 bg-purple-500 text-white text-center font-bold">REPERE VIOLET - SECTION FEATURES</div>
      <Features />
      
      <Mission />
      {/* REPERE JAUNE - TESTIMONIALS */}
      <div className="w-full h-8 bg-white border-4 border-yellow-500 text-yellow-500 text-center font-bold text-lg">🚨 REPERE JAUNE - SECTION TESTIMONIALS 🚨</div>
      <Testimonials />
      
      {/* REPERE CYAN - CONTACT */}
      <div className="w-full h-4 bg-cyan-500 text-white text-center font-bold">REPERE CYAN - SECTION CONTACT</div>
      <Contact />
    </div>
  )
} 