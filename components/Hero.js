import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="bg-official section-padding">
      <div className="fluid-container">
                  <div className="text-left mb-12 w-full max-w-4xl" style={{ marginLeft: '-20px' }}>
          <h1 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Votre site web dernière <span className="hero-title" style={{ fontSize: 'inherit', color: '#d92f35' }}>génération</span>, développé sur-mesure, conçu par des <span className="hero-title" style={{ fontSize: 'inherit', color: '#0038b8' }}>experts</span> géré par <span className="hero-title bg-yellow-300" style={{ color: '#16214a', backgroundColor: '#ffff00', paddingTop: '0', paddingBottom: '0' }}>vous,</span> à partir de 1 €.
          </h1>
                      <p className="text-xl max-w-3xl mb-8" style={{ color: '#16214a' }}>
              Création de sites web Next.js/React ultra modernes avec financement d'aides publiques inclus.<br className="md:hidden" /> <span style={{ fontSize: '24px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900' }}><span className="color-transition" style={{ color: '#d92f35', transition: 'color 2s ease-in-out' }}>Performance,</span> <span className="color-transition" style={{ color: '#0038b8', transition: 'color 2s ease-in-out' }}>design</span> <span className="color-transition" style={{ backgroundColor: '#ffff00', color: '#16214a', transition: 'all 2s ease-in-out' }}>&</span> <span className="color-transition" style={{ color: '#d92f35', transition: 'color 2s ease-in-out' }}>SEO</span> <span className="color-transition" style={{ color: '#0038b8', transition: 'color 2s ease-in-out' }}>optimisés.</span></span> Maintenance 1 an incluse.
            </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8">
                      <button className="text-lg flex items-center gap-2 bg-white font-bold py-3 px-8 border transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a' }}>
                        LANCER MON PROJET
                        <ArrowRight size={20} />
                      </button>
                    </div>

                    {/* Section EXPERTS CERTIFIÉS */}
                    <div className="text-left mb-4">
                      <h2 className="text-base font-bold mb-3" style={{ color: '#16214a' }}>
                        EXPERTS CERTIFIÉS
                      </h2>
                      <div className="flex flex-row justify-center md:justify-start items-center gap-4 w-full">
                        {/* Squarespace Circle Platinum Partner */}
                        <div className="flex items-center gap-2 p-2 border border-gray-300" style={{ width: '180px' }}>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img src="/images/squarespace-logo.svg" alt="Squarespace" className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-[10px] md:text-xs">SQUARESPACE</div>
                            <div className="text-[10px] md:text-xs text-gray-600">2025</div>
                          </div>
                        </div>

                        {/* Notion Official Ambassador */}
                        <div className="flex items-center gap-2 p-2 border border-gray-300" style={{ width: '160px' }}>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img src="/images/notion-logo.svg" alt="Notion" className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-[10px] md:text-xs">Notion Ambassador</div>
                            <div className="text-[10px] md:text-xs text-gray-600"></div>
                          </div>
                        </div>

                        {/* Shopify Partner */}
                        <div className="flex items-center gap-2 p-2 border border-gray-300" style={{ width: '160px' }}>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <img src="/images/shopify-logo.svg" alt="Shopify" className="w-4 h-4" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-[10px] md:text-xs">shopify</div>
                            <div className="text-[10px] md:text-xs text-gray-600 italic">partner</div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs font-bold mt-6 text-left" style={{ color: '#16214a' }}>
                        PLUS DE 156 SITES WEB RÉALISÉS DEPUIS 2018
                      </p>
                    </div>
        </div>
      </div>
      {/* Ligne de séparation */}
      <div className="border-t -my-8" style={{ borderColor: '#f9f9f9' }}></div>
    </section>
  )
} 