"use client"

import { ArrowRight, Check, Star, Shield, Rocket, Target } from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '../../components/AppointmentModal'

export default function SiteWebBasique() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="site-web-basique" className="bg-gray-50 hero-padding">
      <div className="fluid-container">
        <div className="text-left mb-6 w-full max-w-4xl">
          <h1 className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            <span className="hero-title" style={{ fontSize: 'inherit', color: '#16214a !important' }}>SITE WEB BASIQUE</span>
          </h1>
          
          <p className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Une solution simple et efficace pour démarrer votre présence en ligne avec un site web professionnel.
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Light 15', fontWeight: '900', lineHeight: '48px' }}>
              Parfait pour les entrepreneurs qui débutent et veulent un site web simple mais professionnel.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Nous créons pour vous une base solide pour présenter votre activité et vos services de base.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-6" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Un site web qui grandira avec votre entreprise.
            </span>
          </p>

          {/* Prix et CTA principal */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold" style={{ color: '#F20000' }}>Offre de lancement</p>
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
                CRÉER MON SITE WEB
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Description complète (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Description</h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a' }}>
              Parfait pour les entrepreneurs qui débutent. Un site web simple mais professionnel pour présenter votre activité et vos services de base.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
              Cette formule basique vous offre une présence en ligne de qualité professionnelle sans vous ruiner. Idéale pour tester le marché ou lancer votre activité avec un site web qui vous représente fidèlement.
            </p>
          </div>

          {/* Que comprend l'offre (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Que comprend l'offre ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Template pré-conçu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>3 pages incluses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Design responsive basique</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Formulaire de contact simple</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Hébergement 1 an</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Support email basique</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Délai : 7-14 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Installation et configuration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Formation à l'utilisation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Optimisation mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Certificat SSL inclus</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Sauvegarde automatique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu marketing supplémentaire */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Pourquoi commencer par notre formule Basique ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Rocket size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Démarrage rapide</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Site web en ligne en 7-14 jours pour lancer votre activité rapidement</p>
              </div>
              <div className="text-center">
                <Shield size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Qualité garantie</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Design professionnel et responsive, même avec un budget limité</p>
              </div>
              <div className="text-center">
                <Target size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Évolutif</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Base solide qui grandira avec votre entreprise</p>
              </div>
            </div>
          </div>

          {/* Témoignage */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <div className="flex items-start gap-4">
              <Star size={24} style={{ color: '#F20000' }} />
              <div>
                <p className="italic text-lg mb-2" style={{ color: '#16214a' }}>
                  "J'ai commencé avec cette formule basique et j'ai été agréablement surpris par la qualité ! Mon site est professionnel et j'ai pu lancer mon activité en toute sérénité."
                </p>
                <p className="font-semibold" style={{ color: '#16214a' }}>- Marie L., Consultante indépendante</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center" style={{ marginBottom: '200px' }}>
            <p className="text-lg mb-4" style={{ color: '#16214a' }}>Prêt à démarrer votre présence en ligne ?</p>
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
              CRÉER MON SITE WEB
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
