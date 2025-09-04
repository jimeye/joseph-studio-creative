import { Globe, Smartphone, Search, Zap, Shield, Palette } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Globe size={32} style={{ color: '#16214a' }} />,
      title: "Site Web Vitrine",
      description: "Site professionnel responsive avec design moderne et optimisé SEO",
      features: ["Design personnalisé", "Responsive mobile", "Optimisation SEO", "Formulaire de contact"]
    },
    {
      icon: <Smartphone size={32} style={{ color: '#16214a' }} />,
      title: "Application Mobile",
      description: "Application mobile native ou PWA pour votre entreprise",
      features: ["Interface native", "Notifications push", "Hors ligne", "Synchronisation"]
    },
    {
      icon: <Search size={32} style={{ color: '#16214a' }} />,
      title: "E-commerce",
      description: "Boutique en ligne complète avec système de paiement",
      features: ["Catalogue produits", "Paiement sécurisé", "Gestion stocks", "Suivi commandes"]
    },
    {
      icon: <Zap size={32} style={{ color: '#16214a' }} />,
      title: "Performance",
      description: "Optimisation des performances et de la vitesse de chargement",
      features: ["CDN intégré", "Compression images", "Cache optimisé", "Lazy loading"]
    },
    {
      icon: <Shield size={32} style={{ color: '#16214a' }} />,
      title: "Sécurité",
      description: "Protection complète contre les menaces cybernétiques",
      features: ["SSL/TLS", "Firewall", "Backup automatique", "Monitoring 24/7", "Maintenance 1 an"]
    },
    {
      icon: <Palette size={32} style={{ color: '#16214a' }} />,
      title: "Design UX/UI",
      description: "Interface utilisateur moderne et expérience optimale",
      features: ["Design system", "Prototypage", "Tests utilisateurs", "Accessibilité"]
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-official" style={{ scrollMarginTop: '100px' }}>
      <div id="pricing-anchor" style={{ position: 'absolute', top: '-100px' }}></div>
      <div className="w-full">
                <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-normal text-primary mb-4 tracking-tight" style={{ wordSpacing: '-0.1em' }}>
            Nos conseils d'<span className="hero-title" style={{ fontSize: 'inherit', color: '#0038b8' }}>experts</span> pour propulser votre <span className="hero-title" style={{ fontSize: 'inherit', color: '#d92f35' }}>business</span> en ligne
          </h2>
          <p className="text-xl max-w-3xl mb-2 font-bold" style={{ color: '#16214a' }}>
            Notre mission est d'imaginer comment simplifier votre quotidien
          </p>
        </div>

        <div className="fluid-grid">
          {services.map((service, index) => (
            <div key={index} className="fluid-card hover:-translate-y-2 border-2 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="mb-6" style={{ color: '#16214a' }}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm" style={{ color: '#16214a' }}>
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#F20000' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

                            <div className="text-left mt-12">
                      <button className="text-lg flex items-center gap-2 font-bold py-3 px-8 border rounded-lg transition-all duration-300" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a' }}>
                        DÉCOUVRIR TOUS NOS SERVICES
                      </button>
                    </div>
      </div>
    </section>
  )
} 