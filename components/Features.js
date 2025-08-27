import { Zap, Shield, Smartphone, Globe, Search, Clock } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap size={40} style={{ color: '#f9f9f9' }} />,
      title: "Performance Ultra-Rapide",
      description: "Sites optimisés avec Next.js pour des temps de chargement inférieurs à 2 secondes",
      stats: "2s de chargement"
    },
    {
      icon: <Shield size={40} style={{ color: '#f9f9f9' }} />,
      title: "Sécurité Maximale",
      description: "Protection SSL/TLS, firewall et sauvegardes automatiques quotidiennes",
      stats: "99.9% de sécurité"
    },
    {
      icon: <Smartphone size={40} style={{ color: '#f9f9f9' }} />,
      title: "Design Responsive",
      description: "Adaptation parfaite sur tous les appareils : mobile, tablette, desktop",
      stats: "100% responsive"
    },
    {
      icon: <Globe size={40} style={{ color: '#f9f9f9' }} />,
      title: "Hébergement Cloud",
      description: "Infrastructure cloud haute disponibilité avec CDN mondial",
      stats: "99.9% de disponibilité"
    },
    {
      icon: <Search size={40} style={{ color: '#f9f9f9' }} />,
      title: "SEO Optimisé",
      description: "Optimisation pour les moteurs Google, Bing, Yahoo",
      stats: "+300% de visibilité"
    },
    {
      icon: <Clock size={40} style={{ color: '#f9f9f9' }} />,
              title: "Maintenance 1 An",
              description: "Maintenance complète 1 an avec mises à jour et support",
        stats: "1 an inclus"
    }
  ]

  return (
    <section id="a-propos" className="section-padding bg-official" style={{ marginTop: 0, paddingTop: 0, scrollMarginTop: '100px' }}>
      <div className="container-custom">
                <div className="text-left mb-4">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
                          Pourquoi choisir Joseph Studio creative ?
          </h2>
          <div className="w-64 h-1 mb-6" style={{ backgroundColor: '#16214a' }}></div>
          <p className="text-xl max-w-3xl font-bold" style={{ color: '#16214a' }}>
            Des technologies de pointe au service de votre réussite digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 transition-all duration-300" style={{ backgroundColor: '#d92f35', boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
                <div style={{ color: '#16214a' }}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#16214a' }}>
                {feature.title}
              </h3>
              <p className="mb-4" style={{ color: '#16214a' }}>
                {feature.description}
              </p>
              <div className="text-2xl font-bold" style={{ color: '#16214a', fontSize: '1.2em' }}>
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-8 border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
              Technologies de Pointe
            </h3>
            <p className="mb-8 font-bold" style={{ color: '#16214a' }}>
              Nous utilisons les dernières technologies pour garantir performance et modernité
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-2 text-center border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
                <div className="text-xl font-bold mb-1" style={{ color: '#16214a' }}>Next.js</div>
                <div className="text-xs" style={{ color: '#16214a' }}>Framework React</div>
              </div>
              <div className="bg-white  p-2 text-center border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
                <div className="text-xl font-bold mb-1" style={{ color: '#16214a' }}>Tailwind</div>
                <div className="text-xs" style={{ color: '#16214a' }}>CSS Framework</div>
              </div>
              <div className="bg-white  p-2 text-center border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
                <div className="text-xl font-bold mb-1" style={{ color: '#16214a' }}>Vercel</div>
                <div className="text-xs" style={{ color: '#16214a' }}>Hébergement Cloud</div>
              </div>
              <div className="bg-white  p-2 text-center border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
                <div className="text-xl font-bold mb-1" style={{ color: '#16214a' }}>TypeScript</div>
                <div className="text-xs" style={{ color: '#16214a' }}>Typage statique</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
} 