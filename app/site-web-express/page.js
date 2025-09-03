"use client"

import { ArrowRight, Check, Clock, Users, Zap, Star } from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '../../components/AppointmentModal'

export default function SiteWebExpress() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="site-web-express" className="bg-gray-50 hero-padding">
      <div className="fluid-container">
        <div className="text-left mb-6 w-full max-w-4xl">
          <h1 className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            <span className="hero-title" style={{ fontSize: 'inherit', color: '#16214a !important' }}>SITE WEB EXPRESS</span>
          </h1>
          
          <p className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Nous créons votre site web en <span className="hero-title" style={{ fontSize: 'inherit', color: '#F20000 !important' }}>1 journée</span> intensive.
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Light 15', fontWeight: '900', lineHeight: '48px' }}>
              Experts : solutions rapides et efficaces pour votre site web professionnel.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Une journée dédiée à votre projet pour concevoir la structure de votre site web,
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-6" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              créer votre <span style={{ color: '#16214a', transition: 'color 2s ease-in-out' }}>webdesign</span> et intégrer vos contenus.
            </span>
          </p>

          {/* Prix et CTA principal */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold" style={{ color: '#F20000' }}>À partir de 2600 € HT</p>
              <p className="text-sm text-gray-600">* Aides publiques à calculer</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openModal}
                className="text-lg flex items-center gap-2 font-bold py-3 px-8 border transition-all duration-300 rounded-lg" 
                style={{ 
                  boxShadow: '4px 4px 0px #16214a', 
                  color: '#f9f3f3',
                  borderColor: '#f9f3f3', 
                  backgroundColor: '#16214a',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f9f3f3';
                  e.target.style.color = '#16214a';
                  e.target.style.borderColor = '#16214a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#16214a';
                  e.target.style.color = '#f9f3f3';
                  e.target.style.borderColor = '#f9f3f3';
                }}
              >
                RÉSERVER MA JOURNÉE DE CRÉATION
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Description complète (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Description</h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a' }}>
              Vous avez un petit budget ou un site web assez simple à réaliser ? En une journée, nous créons la structure de votre site, nous intégrons votre design et vos contenus, et nous ajustons ensemble en fin de journée pour que le résultat soit à la hauteur de vos attentes.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
              Cette formule express est parfaite pour les entrepreneurs qui ont besoin d'un site web professionnel rapidement, sans compromis sur la qualité. Notre équipe d'experts travaille intensivement pendant 6 heures pour livrer un résultat qui dépasse vos attentes.
            </p>
          </div>

          {/* Que comprend l'offre (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Que comprend l'offre ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Sélection d'un template</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>1 heure de rendez-vous de brief en visioconférence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>6h de design et d'intégration par un expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>1h30 d'ajustements en live et de formation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Le replay de la formation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Design responsive</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>5 pages incluses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Formulaire de contact</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Optimisation SEO basique</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Hébergement 3 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Maintenance 1 an</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Support email</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu marketing supplémentaire */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Pourquoi choisir notre formule Express ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Rapidité</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Site web livré en 1 journée intensive, sans compromis sur la qualité</p>
              </div>
              <div className="text-center">
                <Users size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Expertise</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Équipe d'experts dédiée à votre projet pendant toute la journée</p>
              </div>
              <div className="text-center">
                <Zap size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Efficacité</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Processus optimisé pour un résultat professionnel immédiat</p>
              </div>
            </div>
          </div>

          {/* Témoignage */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <div className="flex items-start gap-4">
              <Star size={24} style={{ color: '#F20000' }} />
              <div>
                <p className="italic text-lg mb-2" style={{ color: '#16214a' }}>
                  "J'ai été bluffé par la rapidité et la qualité ! Mon site était en ligne le soir même, exactement comme je l'avais imaginé. L'équipe est professionnelle et efficace."
                </p>
                <p className="font-semibold" style={{ color: '#16214a' }}>- Thomas M., Restaurant La Boulette Ibiza</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center" style={{ marginBottom: '200px' }}>
            <p className="text-lg mb-4" style={{ color: '#16214a' }}>Prêt à lancer votre projet web en 1 journée ?</p>
            <button 
              onClick={openModal}
              className="text-lg flex items-center gap-2 font-bold py-3 px-8 border transition-all duration-300 rounded-lg mx-auto" 
              style={{ 
                boxShadow: '4px 4px 0px #16214a', 
                color: '#f9f3f3',
                borderColor: '#f9f3f3', 
                backgroundColor: '#16214a',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f9f3f3';
                e.target.style.color = '#16214a';
                e.target.style.borderColor = '#16214a';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#16214a';
                e.target.style.color = '#f9f3f3';
                e.target.style.borderColor = '#f9f3f3';
              }}
            >
              RÉSERVER MA JOURNÉE DE CRÉATION
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation */}
      <div className="border-t -my-8" style={{ borderColor: '#f9f9f9' }}></div>
      
      {/* Modal de rendez-vous */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
