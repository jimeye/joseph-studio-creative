'use client'

import { Check, Plus, ShoppingBag, Star, Minus, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [openSections, setOpenSections] = useState({
    description1: false,
    offre1: false,
    description2: false,
    offre2: false,
    description3: false,
    offre3: false
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const plans = [
    {
      name: "Starter",
      price: "1 €",
      originalPrice: "500 €",
      description: "Site vitrine basique pour commencer",
      features: [
        "Design responsive",
        "5 pages incluses",
        "Formulaire de contact",
        "Optimisation SEO basique",
        "Hébergement 3 ans",
        "Maintenance 1 an",
        "Support email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "99 €",
      originalPrice: "1500 €",
      description: "Site complet avec fonctionnalités avancées",
      features: [
        "Tout du plan Starter",
        "10 pages incluses",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Analytics Google",
        "Maintenance 1 an",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "299 €",
      originalPrice: "3000 €",
      description: "Solution complète pour grandes entreprises",
      features: [
        "Tout du plan Professional",
        "Pages illimitées",
        "E-commerce intégré",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Maintenance 1 an",
        "Support 24/7"
      ],
      popular: false
    }
  ]

    return (
    <section id="services" className="bg-official" style={{ paddingTop: '4rem', paddingBottom: '3rem', paddingLeft: '1rem', paddingRight: '1rem', scrollMarginTop: '100px' }}>
      {/* Ligne de séparation */}
              <div className="border-t -my-8" style={{ borderColor: '#f9f9f9' }}></div>
        <div className="container-custom">
        <div className="text-left lg:text-center mb-6" style={{ marginTop: '2rem' }}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a' }}>
            Nous vous accompagnons dans<br className="hidden lg:block" /> la <span className="hero-title" style={{ fontSize: 'inherit', color: '#d92f35' }}>création</span> ou la <span className="hero-title" style={{ fontSize: 'inherit', color: '#0038b8' }}>refonte</span> de<br className="hidden lg:block" /> votre site web.
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl font-bold lg:mx-auto" style={{ color: '#16214a' }}>
            Des solutions web complètes adaptées à tous les besoins de votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-none mx-0 mb-6">
          {/* Carte 1: Votre site web express */}
          <div className="relative bg-blue-600 border-2 p-8 text-center" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-[#f9f7f2] mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site web express
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 1 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                Nous créons votre site web en 1 journée intensive exclusivement dédiée à la création de votre projet.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8">
              <div className="cursor-pointer" onClick={() => toggleSection('description2')}>
                <div className="flex items-center">
                  {openSections.description2 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg">Description</span>
                </div>
                {openSections.description2 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed text-left">
                    Vous avez un petit budget ou un site web assez simple à réaliser ? En une journée, nous créons la structure de votre site, nous intégrons votre design et vos contenus, et nous ajustons ensemble en fin de journée pour que le résultat soit à la hauteur de vos attentes.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre2')}>
                <div className="flex items-center">
                  {openSections.offre2 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg">Que comprend cette offre ?</span>
                </div>
                {openSections.offre2 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed space-y-2 text-left">
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
              <button className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a', backgroundColor: '#f9f7f2', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#16214a'; e.target.style.color = '#f9f7f2'; e.target.style.borderColor = '#f9f7f2'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#f9f7f2'; e.target.style.color = '#16214a'; e.target.style.borderColor = '#16214a'; }}>
                CRÉER MON SITE WEB
              </button>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>

          {/* Carte 2: Votre site web sur mesure */}
          <div className="relative bg-blue-600 border-2 p-8 text-center" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-[#f9f7f2] mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site web sur mesure
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 1800 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                Donnez vie à votre vision avec un site web vitrine ou marchand au design unique et entièrement sur mesure.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8">
              <div className="cursor-pointer" onClick={() => toggleSection('description1')}>
                <div className="flex items-center">
                  {openSections.description1 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg">Description</span>
                </div>
                {openSections.description1 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed text-left">
                    Nous démarrons d'une page blanche et non d'un template. Nous pouvons reproduire une maquette ou prendre en compte vos sites de références, votre identité, vos contenus, et vos envies pour créer pour vous un site web entièrement sur-mesure en intégrant du code à votre site.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre1')}>
                <div className="flex items-center">
                  {openSections.offre1 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg">Que comprend cette offre ?</span>
                </div>
                {openSections.offre1 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed space-y-2 text-left">
                    <div>◼︎ Tout du plan Starter <span style={{ color: '#d92f35', fontSize: '1.5em', fontWeight: 'bold' }}>+</span></div>
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
              <button className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a', backgroundColor: '#f9f7f2', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#16214a'; e.target.style.color = '#f9f7f2'; e.target.style.borderColor = '#f9f7f2'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#f9f7f2'; e.target.style.color = '#16214a'; e.target.style.borderColor = '#16214a'; }}>
                CRÉER MON SITE WEB
              </button>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>

          {/* Carte 3: Votre site Premium web sur mesure */}
          <div className="relative bg-blue-600  border-2 p-8 text-center" style={{ backgroundColor: '#0038b8', boxShadow: '4px 4px 0px #000000', borderColor: '#16214a' }}>
            
            <div className="text-[#f9f7f2] mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#f9f7f2' }}>
                Votre site web premium
              </h3>
              <p className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>À partir de 4800 € HT</p>
              <p className="text-lg mb-6 font-bold" style={{ color: '#f9f7f2' }}>
                L'excellence absolue pour votre présence web. Design unique, fonctionnalités avancées, suivi VIP.
              </p>
            </div>

            {/* Sections extensibles */}
            <div className="space-y-4 mb-8">
              <div className="cursor-pointer" onClick={() => toggleSection('description3')}>
                <div className="flex items-center">
                  {openSections.description3 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg font-bold">Description</span>
                </div>
                {openSections.description3 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed text-left">
                    Notre offre Premium combine design d'exception, développement sur-mesure et accompagnement VIP. Nous créons un site web qui dépasse vos attentes avec des fonctionnalités avancées et une expérience utilisateur exceptionnelle.
                  </div>
                )}
              </div>
              
              {/* Trait blanc de séparation */}
              <div className="border-t border-white opacity-50"></div>
              
              <div className="cursor-pointer" onClick={() => toggleSection('offre3')}>
                <div className="flex items-center">
                  {openSections.offre3 ? <Minus size={24} className="mr-3 icon-red font-bold" /> : <Plus size={24} className="mr-3 icon-red font-bold" />}
                  <span className="text-[#f9f7f2] text-lg font-bold">Que comprend cette offre ?</span>
                </div>
                {openSections.offre3 && (
                  <div className="mt-3 ml-8 text-[#f9f7f2] text-sm leading-relaxed space-y-2 text-left">
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
              <button className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a', borderColor: '#16214a', backgroundColor: '#f9f7f2', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.target.style.backgroundColor = '#16214a'; e.target.style.color = '#f9f7f2'; e.target.style.borderColor = '#f9f7f2'; }} onMouseLeave={(e) => { e.target.style.backgroundColor = '#f9f7f2'; e.target.style.color = '#16214a'; e.target.style.borderColor = '#16214a'; }}>
                CRÉER MON SITE WEB
              </button>
            </div>
            <p className="text-center mt-3 text-green-500 font-semibold">* Aides publiques à calculer</p>
          </div>
        </div>

        {/* Espace après les trois cadres */}
        <div className="mt-6"></div>


      </div>
    </section>
  )
} 