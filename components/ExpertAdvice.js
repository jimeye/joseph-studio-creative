import { TrendingUp, Target, Zap, Shield, Users, BarChart3 } from 'lucide-react'

export default function ExpertAdvice() {
  const adviceItems = [
    {
      icon: TrendingUp,
      title: "Stratégie de croissance",
      description: "Développez votre présence en ligne avec des stratégies personnalisées et des objectifs mesurables."
    },
    {
      icon: Target,
      title: "Optimisation SEO",
      description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de visiteurs qualifiés."
    },
    {
      icon: Zap,
      title: "Performance web",
      description: "Optimisez la vitesse et les performances de votre site pour une meilleure expérience utilisateur."
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "Protégez votre site et vos données avec les dernières technologies de sécurité."
    },
    {
      icon: Users,
      title: "Expérience utilisateur",
      description: "Concevez des interfaces intuitives qui convertissent vos visiteurs en clients fidèles."
    },
    {
      icon: BarChart3,
      title: "Analytics & ROI",
      description: "Suivez vos performances et optimisez vos investissements pour maximiser votre retour."
    }
  ]

  return (
    <section className="bg-[#f9f7f2]" style={{ paddingTop: '2rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="container-custom">
        <div className="text-left mb-6" style={{ marginTop: '0rem' }}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Stratégies de consultants et spécialistes pour <span className="hero-title" style={{ fontSize: 'inherit', color: '#0038b8' }}>réussir</span> votre web et propulser votre <span className="hero-title" style={{ fontSize: 'inherit', color: '#d92f35' }}>business</span>.
          </h2>
          <p className="text-xl max-w-3xl" style={{ color: '#666' }}>
            Découvrez nos stratégies éprouvées pour transformer votre présence digitale en véritable atout commercial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {adviceItems.map((item, index) => {
            const IconComponent = item.icon
            return (
                             <div 
                 key={index} 
                 className="bg-[#f9f7f2] p-4 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                 style={{ 
                   borderColor: '#f0f0f0',
                   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                   transition: 'all 0.3s ease'
                 }}
               >
                <div className="flex items-center mb-6">
                  <div 
                    className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mr-2 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                    style={{ backgroundColor: '#f8f9fa' }}
                  >
                    <IconComponent 
                      size={20} 
                      className="md:w-6 md:h-6 group-hover:text-[#d92f35] transition-colors duration-300"
                      style={{ color: '#16214a' }}
                    />
                  </div>
                  <h3 
                    className="text-sm md:text-xl font-semibold group-hover:text-[#d92f35] transition-colors duration-300 leading-tight"
                    style={{ color: '#16214a' }}
                  >
                    {item.title}
                  </h3>
                </div>
                
                <p 
                  className="text-xs md:text-base leading-relaxed"
                  style={{ color: '#666' }}
                >
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t" style={{ borderColor: '#f0f0f0' }}>
                  <button 
                    className="text-sm font-medium hover:text-[#d92f35] transition-colors duration-300 flex items-center"
                    style={{ color: '#16214a' }}
                  >
                    En savoir plus
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <button 
            className="text-lg flex items-center gap-2 bg-[#f9f7f2] font-bold py-3 px-8 border transition-all duration-300 hover:bg-[#ffff00] mx-auto"
            style={{ 
              boxShadow: '4px 4px 0px #16214a', 
              color: '#16214a', 
              borderColor: '#16214a' 
            }}
          >
            Découvrir tous nos conseils
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
