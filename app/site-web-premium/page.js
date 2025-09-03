"use client"

import { ArrowRight, Check, Star, Crown, Zap, Users, Target, Award, Shield } from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '../../components/AppointmentModal'

export default function SiteWebPremium() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="site-web-premium" className="bg-gray-50 hero-padding">
      <div className="fluid-container">
        <div className="text-left mb-6 w-full max-w-4xl">
          <h1 className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            <span className="hero-title" style={{ fontSize: 'inherit', color: '#16214a !important' }}>SITE WEB PREMIUM</span>
          </h1>
          
          <p className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            La solution ultime pour les entreprises qui exigent l'excellence et veulent se démarquer de la concurrence.
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Light 15', fontWeight: '900', lineHeight: '48px' }}>
              Notre offre premium combine design d'exception, fonctionnalités avancées et accompagnement personnalisé.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Nous créons pour vous un site web qui devient un véritable atout concurrentiel et un levier de croissance.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-6" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Une expérience utilisateur exceptionnelle qui convertit vos visiteurs en clients fidèles.
            </span>
          </p>

          {/* Prix et CTA principal */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold" style={{ color: '#F20000' }}>À partir de 8500 € HT</p>
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
                RÉSERVER MA CONSULTATION PREMIUM
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Description complète (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Description</h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a' }}>
              Notre offre premium est conçue pour les entreprises qui veulent se démarquer et exiger l'excellence. Nous créons un site web qui devient un véritable atout concurrentiel, avec un design d'exception, des fonctionnalités avancées et une expérience utilisateur exceptionnelle.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
              Cette solution haut de gamme inclut un accompagnement personnalisé, des technologies de pointe et une stratégie de conversion optimisée pour maximiser votre retour sur investissement.
            </p>
          </div>

          {/* Que comprend l'offre (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Que comprend l'offre ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Tout du plan Sur Mesure +</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>15+ pages incluses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>E-commerce complet</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Système de réservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Blog avancé avec CMS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Intégration API tierces</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Optimisation SEO expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Analytics avancés</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Hébergement haute performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Maintenance 3 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Support 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Accompagnement stratégique</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu marketing supplémentaire */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Pourquoi choisir notre formule Premium ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <Crown size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Excellence</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Design et fonctionnalités d'exception pour vous démarquer</p>
              </div>
              <div className="text-center">
                <Zap size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Performance</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Technologies de pointe pour des performances optimales</p>
              </div>
              <div className="text-center">
                <Users size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Accompagnement</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Support et conseils stratégiques personnalisés</p>
              </div>
              <div className="text-center">
                <Target size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>ROI optimisé</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Stratégie de conversion pour maximiser vos résultats</p>
              </div>
            </div>
          </div>

          {/* Fonctionnalités avancées */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Fonctionnalités avancées incluses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg" style={{ borderColor: '#16214a' }}>
                <Award size={32} className="mx-auto mb-2" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>E-commerce</h4>
                <p className="text-xs" style={{ color: '#16214a' }}>Boutique en ligne complète avec gestion des stocks et paiements sécurisés</p>
              </div>
              <div className="text-center p-4 border rounded-lg" style={{ borderColor: '#16214a' }}>
                <Shield size={32} className="mx-auto mb-2" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Sécurité</h4>
                <p className="text-xs" style={{ color: '#16214a' }}>Protection avancée, certificats SSL et sauvegardes automatisées</p>
              </div>
              <div className="text-center p-4 border rounded-lg" style={{ borderColor: '#16214a' }}>
                <Zap size={32} className="mx-auto mb-2" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Performance</h4>
                <p className="text-xs" style={{ color: '#16214a' }}>Optimisation vitesse, CDN et hébergement haute performance</p>
              </div>
            </div>
          </div>

          {/* Processus premium */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Notre processus premium</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Audit stratégique</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Analyse approfondie de votre marché, concurrence et objectifs business</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Conception stratégique</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Architecture UX/UI optimisée pour la conversion et l'engagement</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Développement expert</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Codage avec les meilleures pratiques et technologies modernes</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Optimisation et lancement</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Tests complets, optimisations et accompagnement au lancement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Témoignage */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <div className="flex items-start gap-4">
              <Star size={24} style={{ color: '#F20000' }} />
              <div>
                <p className="italic text-lg mb-2" style={{ color: '#16214a' }}>
                  "Le site premium a transformé notre business ! L'expérience utilisateur est exceptionnelle et nos conversions ont augmenté de 40%. Un investissement qui se rentabilise rapidement."
                </p>
                <p className="font-semibold" style={{ color: '#16214a' }}>- Marc P., Directeur Estellon</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center" style={{ marginBottom: '200px' }}>
            <p className="text-lg mb-4" style={{ color: '#16214a' }}>Prêt à investir dans l'excellence ?</p>
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
              RÉSERVER MA CONSULTATION PREMIUM
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
