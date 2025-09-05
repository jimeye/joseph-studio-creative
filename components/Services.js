"use client"

import { Check, Plus, ShoppingBag, Star, Minus, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [openSections, setOpenSections] = useState({
    description1: false,
    offre1: false,
    description2: false,
    offre2: false,
    description3: false,
    offre3: false,
    description4: false,
    offre4: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <section id="services" className="bg-official" style={{ paddingTop: '1.5rem', paddingBottom: '3rem', scrollMarginTop: '100px' }}>
      <div className="fluid-container">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Nous vous accompagnons dans la <span className="hero-title" style={{ fontSize: 'inherit', color: '#F20000 !important' }}>création</span> ou la <span className="hero-title" style={{ fontSize: 'inherit', color: '#0038b8' }}>refonte</span> de votre site web.
          </h2>
          <p className="text-xl max-w-3xl font-bold" style={{ color: '#16214a' }}>
            Des solutions web complètes adaptées à tous les besoins de votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-none mx-0 mb-8">
          {/* Carte 1: Votre site web basique à 1 € */}
          <div className="relative bg-blue-600 border-2 p-8 text-center rounded-lg" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site basique
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 1 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                Une solution simple pour démarrer votre présence en ligne avec un site pro.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8" style={{ marginBottom: '50px' }}>
              <div className="cursor-pointer" onClick={() => toggleSection('description4')}>
                <div className="flex items-center">
                  {openSections.description4 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Description</span>
                </div>
                {openSections.description4 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed text-left">
                    Parfait pour les entrepreneurs qui débutent. Un site web mais professionnel pour présenter votre activité et vos services de base.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre4')}>
                <div className="flex items-center">
                  {openSections.offre4 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Que comprend l'offre</span>
                </div>
                {openSections.offre4 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed space-y-2 text-left">
                    <div>◼︎ Template pré-conçu</div>
                    <div>◼︎ 3 pages incluses</div>
                    <div>◼︎ Design responsive basique</div>
                    <div>◼︎ Formulaire de contact simple</div>
                    <div>◼︎ Hébergement 1 an</div>
                    <div>◼︎ Support email basique</div>
                    <div>◼︎ Délai : 7-14 jours</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/site-web-basique" className="text-lg flex items-center gap-2 bg-white font-bold py-3 px-8 rounded-lg border transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #000000', color: '#16214a', borderColor: '#16214a' }}>
                CRÉER MON SITE WEB
              </a>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>

          {/* Carte 2: Votre site web express */}
          <div className="relative bg-blue-600 border-2 p-8 text-center rounded-lg" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site express
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 2600 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                Nous créons votre site web en une journée intensive dédiée à la création de votre projet web.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8" style={{ marginBottom: '50px' }}>
              <div className="cursor-pointer" onClick={() => toggleSection('description2')}>
                <div className="flex items-center">
                  {openSections.description2 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Description</span>
                </div>
                {openSections.description2 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed text-left">
                    Vous avez un petit budget ou un site web assez simple à réaliser ? En une journée, nous créons la structure de votre site, nous intégrons votre design et vos contenus, et nous ajustons ensemble en fin de journée pour que le résultat soit à la hauteur de vos attentes.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre2')}>
                <div className="flex items-center">
                  {openSections.offre2 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Que comprend l'offre</span>
                </div>
                {openSections.offre2 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed space-y-2 text-left">
                    <div>◼︎ Sélection d'un template</div>
                    <div>◼︎ 1 heure de rendez-vous de brief en visioconférence</div>
                    <div>◼︎ 6h de design et d'intégration par un expert</div>
                    <div>◼︎ 1h30 d'ajustements en live et de formation</div>
                    <div>◼︎ Le replay de la formation</div>
                    <div>◼︎ Design responsive</div>
                    <div>◼︎ 5 pages incluses</div>
                    <div>◼︎ Formulaire de contact</div>
                    <div>◼︎ Optimisation SEO basique</div>
                    <div>◼︎ Hébergement 3 ans</div>
                    <div>◼︎ Maintenance 1 an</div>
                    <div>◼︎ Support email</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/site-web-express" className="text-lg flex items-center gap-2 bg-white font-bold py-3 px-8 rounded-lg border transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #000000', color: '#16214a', borderColor: '#16214a' }}>
                CRÉER MON SITE WEB
              </a>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>

          {/* Carte 3: Votre site web sur mesure */}
          <div className="relative bg-blue-600 border-2 p-8 text-center rounded-lg" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site sur mesure
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 3500 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                Donnez vie à votre vision avec un site web vitrine ou marchand au design unique et sur mesure.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8" style={{ marginBottom: '50px' }}>
              <div className="cursor-pointer" onClick={() => toggleSection('description1')}>
                <div className="flex items-center">
                  {openSections.description1 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Description</span>
                </div>
                {openSections.description1 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed text-left">
                    Nous démarrons d'une page blanche et non d'un template. Nous pouvons reproduire une maquette ou prendre en compte vos sites de références, votre identité, vos contenus, et vos envies pour créer pour vous un site web entièrement sur-mesure en intégrant du code à votre site.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre1')}>
                <div className="flex items-center">
                  {openSections.offre1 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg">Que comprend l'offre</span>
                </div>
                {openSections.offre1 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed space-y-2 text-left">
                    <div>◼︎ Tout du plan Starter <span style={{ color: '#F20000 !important', fontSize: '1.5em', fontWeight: 'bold' }}>+</span></div>
                    <div>◼︎ 10 pages incluses</div>
                    <div>◼︎ Blog intégré</div>
                    <div>◼︎ Optimisation SEO avancée</div>
                    <div>◼︎ Analytics Google</div>
                    <div>◼︎ Support prioritaire</div>
                    <div>◼︎ Web Design par un expert pensé de façon sur mesure en fonction de votre identité, de vos contenus et de vos besoins.</div>
                    <div>◼︎ Création de code custom (CSS, HTML et JS) pour créer un site web réellement unique</div>
                    <div>◼︎ Un chef de projet dédié</div>
                    <div>◼︎ Quatre rendez vous fondamentaux</div>
                    <div>◼︎ Un groupe Whatsapp projet</div>
                    <div>◼︎ Un tableau de bord Notion pour suivre l'avancée de votre projet</div>
                    <div>◼︎ Deux versions de votre site web</div>
                    <div>◼︎ Une formation complète pour prendre en main votre backoffice pour que vous puissiez mettre à jour votre site, gérer vos commandes, créer vos newsletters, et bien plus encore.</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/site-web-sur-mesure" className="text-lg flex items-center gap-2 bg-white font-bold py-3 px-8 rounded-lg border transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #000000', color: '#16214a', borderColor: '#16214a' }}>
                CRÉER MON SITE WEB
              </a>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>



          {/* Carte 4: Votre site web premium */}
          <div className="relative bg-blue-600 rounded-lg border-2 p-8 text-center" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site premium
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 8500 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                L'excellence présence web design unique, fonctionnalités avancées suivi personnalisé.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8" style={{ marginBottom: '50px' }}>
              <div className="cursor-pointer" onClick={() => toggleSection('description3')}>
                <div className="flex items-center">
                  {openSections.description3 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg font-bold">Description</span>
                </div>
                {openSections.description3 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed text-left">
                    Notre offre Premium combine design d'exception, développement sur-mesure et accompagnement VIP. Nous créons un site web qui dépasse vos attentes avec des fonctionnalités avancées et une expérience utilisateur exceptionnelle.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre3')}>
                <div className="flex items-center">
                  {openSections.offre3 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-white text-lg font-bold">Que comprend l'offre ?</span>
                </div>
                {openSections.offre3 && (
                  <div className="mt-3 ml-8 text-white text-sm leading-relaxed space-y-2 text-left">
                    <div>◼︎ Tout du plan sur mesure <span style={{ color: '#ff0000', fontSize: '1.5em', fontWeight: 'bold' }}>+</span></div>
                    <div>◼︎ Design d'exception par un expert senior</div>
                    <div>◼︎ Développement sur-mesure complet</div>
                    <div>◼︎ Fonctionnalités e-commerce avancées</div>
                    <div>◼︎ Intégration API tierces</div>
                    <div>◼︎ Optimisation performance maximale</div>
                    <div>◼︎ SEO technique avancé</div>
                    <div>◼︎ Support VIP 24/7</div>
                    <div>◼︎ Formation personnalisée</div>
                    <div>◼︎ Maintenance premium 5 ans</div>
                    <div>◼︎ Accompagnement stratégique</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <a href="/site-web-premium" className="text-lg flex items-center gap-2 bg-white font-bold py-3 px-8 rounded-lg border transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #000000', color: '#16214a', borderColor: '#16214a' }}>
                CRÉER MON SITE WEB
              </a>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>
        </div>

        {/* Espace après les quatre cadres */}
        <div className="mt-12"></div>

        {/* Espace avant le cadre rouge */}
        <div className="mt-12"></div>

        <div className="text-center w-full">
          <div className="border-2 border-b-2 w-full p-8 rounded-lg" style={{ backgroundColor: '#F20000', boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', borderBottomWidth: '2px', borderBottomColor: '#16214a' }}>
            <h2 className="text-4xl md:text-5xl font-normal mb-2 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#fff' }}>
              Votre site web évolue?
            </h2>
            <div className="text-6xl font-bold mb-4" style={{ color: '#16214a' }}>On vous accompagne.</div>
            <p className="text-xl font-semibold mb-4 font-bold" style={{ color: '#fff' }}>
              Vous avez déjà démarré la création de votre site web mais vous avez besoin de l'aide d'un expert ? C'est ici !
            </p>
            <div className="text-center">
              <button className="text-lg flex items-center justify-center gap-2 bg-white font-bold py-3 px-8 border-2 hover:transform hover:-translate-x-1 hover:-translate-y-1 mx-auto transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a' }}>
                AMÉLIOREZ VOTRE SITE WEB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 