"use client"

import { ArrowRight, Check, Star, Palette, Code, Zap, Users, Target } from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '../../components/AppointmentModal'

export default function SiteWebSurMesure() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="site-web-sur-mesure" className="bg-gray-50 hero-padding">
      <div className="fluid-container">
        <div className="text-left mb-6 w-full max-w-4xl">
          <h1 className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            <span className="hero-title" style={{ fontSize: 'inherit', color: '#16214a !important' }}>SITE WEB SUR MESURE</span>
          </h1>
          
          <p className="text-xl font-normal mb-6 tracking-tight hero-title text-left" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Donnez vie à votre vision avec un site web vitrine ou marchand au design unique et entièrement sur mesure.
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Light 15', fontWeight: '900', lineHeight: '48px' }}>
              Création sur mesure : votre site web unique et personnalisé selon vos besoins spécifiques.
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-0" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              Nous concevons ensemble la structure de votre site web, créons votre webdesign personnalisé
            </span>
          </p>
          
          <p className="text-xl max-w-3xl mb-6" style={{ color: '#16214a', textAlign: 'left' }}>
            <span style={{ fontSize: '40px', fontFamily: 'Sharp Grotesk Black 25', fontWeight: '900', lineHeight: '48px' }}>
              et intégrons vos contenus pour un résultat professionnel et sur mesure.
            </span>
          </p>

          {/* Prix et CTA principal */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold" style={{ color: '#F20000' }}>À partir de 3500 € HT</p>
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
                RÉSERVER MA CONSULTATION
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Description complète (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Description</h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a' }}>
              Nous démarrons d'une page blanche et non d'un template. Nous pouvons reproduire une maquette ou prendre en compte vos sites de références, votre identité, vos contenus, et vos envies pour créer pour vous un site web entièrement sur-mesure en intégrant du code à votre site.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
              Cette approche sur mesure vous garantit un site web unique qui reflète parfaitement votre identité de marque et répond exactement à vos besoins spécifiques. Chaque ligne de code est pensée et développée pour votre projet.
            </p>
          </div>

          {/* Que comprend l'offre (contenu de Services) */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Que comprend l'offre ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Tout du plan Starter +</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>10 pages incluses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Blog intégré</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Optimisation SEO avancée</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Analytics Google</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Design unique sur mesure</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Développement personnalisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Intégration de fonctionnalités</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Hébergement 3 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Maintenance 2 ans</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Support prioritaire</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} style={{ color: '#F20000' }} />
                  <span style={{ color: '#16214a' }}>Formation personnalisée</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu marketing supplémentaire */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Pourquoi choisir notre formule Sur Mesure ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Palette size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Design unique</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Création d'un design exclusif qui reflète parfaitement votre identité</p>
              </div>
              <div className="text-center">
                <Code size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Développement sur mesure</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Code personnalisé pour des fonctionnalités adaptées à vos besoins</p>
              </div>
              <div className="text-center">
                <Target size={40} className="mx-auto mb-3" style={{ color: '#F20000' }} />
                <h4 className="font-bold mb-2" style={{ color: '#16214a' }}>Solution adaptée</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>Site web conçu spécifiquement pour vos objectifs et votre audience</p>
              </div>
            </div>
          </div>

          {/* Processus de création */}
          <div className="bg-white p-6 rounded-lg border-2 mb-8" style={{ borderColor: '#16214a' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>Notre processus de création sur mesure</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Brief approfondi</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Analyse de vos besoins, de votre identité et de vos objectifs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Conception personnalisée</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Création d'un design unique et développement de fonctionnalités sur mesure</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#16214a' }}>Tests et ajustements</h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>Validation complète et optimisations jusqu'à la satisfaction totale</p>
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
                  "Le site sur mesure a parfaitement capturé l'esprit de notre marque. Chaque détail a été pensé pour notre activité et nos clients. Un résultat qui dépasse nos attentes !"
                </p>
                <p className="font-semibold" style={{ color: '#16214a' }}>- Sophie D., Agence Blondie Paris</p>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="text-center" style={{ marginBottom: '200px' }}>
            <p className="text-lg mb-4" style={{ color: '#16214a' }}>Prêt à créer votre site web unique ?</p>
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
              RÉSERVER MA CONSULTATION
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
