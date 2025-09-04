'use client'

import React, { useState } from 'react'
import { ShoppingCart, Mail, Calendar, ArrowRight, Search, ChevronUp, ChevronDown } from 'lucide-react'

export default function Pricelist() {
  const [cart, setCart] = useState([])
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous les services')
  const [sortBy, setSortBy] = useState('Prix croissants')
  const [categoriesExpanded, setCategoriesExpanded] = useState(false)
  const [sortExpanded, setSortExpanded] = useState(false)

  // Produits réels extraits du fichier Word - Classés par ordre exact des icônes
  const products = [
    {
      id: 1,
      title: "Besoin d'aide ? Réservez un accompagnement en visio avec un expert",
      price: "90,00 €",
      description: "Accompagnement personnalisé en visioconférence avec un expert",
      icon: "/images/produits-services/01-accompagnement-visio-expert-90e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 2,
      title: "Pack heure de maintenance",
      price: "À partir de 90,00 €",
      description: "Service de maintenance à la demande pour votre site web",
      icon: "/images/produits-services/02-pack-maintenance-90e.png",
      category: "Maintenance & options"
    },
    {
      id: 3,
      title: "Optimisation SEO pour remonter sur Google",
      price: "320,00 €",
      description: "Amélioration de votre référencement pour une meilleure visibilité sur Google",
      icon: "/images/produits-services/03-optimisation-seo-google-320e.png",
      category: "Communication & Marketing"
    },
    {
      id: 4,
      title: "Boostez le design de votre site web",
      price: "À partir de 300,00 €",
      description: "Refonte et amélioration du design de votre site web",
      icon: "/images/produits-services/04-boost-design-site-300e.png",
      category: "Création de contenus"
    },
    {
      id: 5,
      title: "Création de newsletter",
      price: "À partir de 210,00 €",
      description: "Conception et mise en place de votre newsletter professionnelle",
      icon: "/images/produits-services/05-creation-newsletter-210e.png",
      category: "Communication & Marketing"
    },
    {
      id: 6,
      title: "Pack : Passer à Squarespace 7.1 + refonte du web design",
      price: "À partir de 350,00 €",
      description: "Migration vers Squarespace 7.1 avec refonte complète du design",
      icon: "/images/produits-services/06-migration-squarespace-71-350e.png",
      category: "Création de contenus"
    },
    {
      id: 7,
      title: "Votre site devient multilingue avec Weglot",
      price: "120,00 €",
      description: "Traduction et adaptation de votre site en plusieurs langues",
      icon: "/images/produits-services/07-site-multilingue-weglot-120e.png",
      category: "Plug-in"
    },
    {
      id: 8,
      title: "Optimisation de vos images",
      price: "À partir de 80,00 €",
      description: "Compression et optimisation de vos images pour de meilleures performances",
      icon: "/images/produits-services/08-optimisation-images-80e.png",
      category: "Maintenance & options"
    },
    {
      id: 9,
      title: "Se former à la gestion de ses réseaux sociaux",
      price: "300,00 €",
      description: "Formation complète à la gestion de vos réseaux sociaux",
      icon: "/images/produits-services/09-formation-reseaux-sociaux-300e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 10,
      title: "Se former à Squarespace",
      price: "150,00 €",
      description: "Formation personnalisée à l'utilisation de Squarespace",
      icon: "/images/produits-services/10-formation-squarespace-150e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 11,
      title: "Campagne digitale",
      price: "430,00 €",
      description: "Conception et mise en place de votre campagne marketing digitale",
      icon: "/images/produits-services/11-campagne-digitale-430e.png",
      category: "Communication & Marketing"
    },
    {
      id: 12,
      title: "Mettre en place une opération spéciale sur mon site web",
      price: "370,00 €",
      description: "Configuration d'opérations spéciales et promotions sur votre site",
      icon: "/images/produits-services/12-operation-speciale-site-370e.png",
      category: "Communication & Marketing"
    },
    {
      id: 13,
      title: "Se former à Acuity Scheduling",
      price: "300,00 €",
      description: "Formation à l'utilisation d'Acuity Scheduling pour la prise de rendez-vous",
      icon: "/images/produits-services/13-formation-acuity-300e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 14,
      title: "Ajouter la prise de rdv sur mon site web",
      price: "720,00 €",
      description: "Intégration d'un système de prise de rendez-vous sur votre site",
      icon: "/images/produits-services/14-prise-rdv-site-720e.png",
      category: "Plug-in"
    },
    {
      id: 15,
      title: "Paramétrer Instagram Shopping",
      price: "490,00 €",
      description: "Configuration et optimisation d'Instagram Shopping pour votre business",
      icon: "/images/produits-services/15-instagram-shopping-490e.png",
      category: "Communication & Marketing"
    },
    {
      id: 16,
      title: "Se former à Shopify",
      price: "300,00 €",
      description: "Formation complète à l'utilisation de Shopify pour votre e-commerce",
      icon: "/images/produits-services/16-formation-shopify-300e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 17,
      title: "Rédaction de vos documents légaux par un avocat",
      price: "À partir de 280,00 €",
      description: "Rédaction de vos documents légaux par un professionnel du droit",
      icon: "/images/produits-services/17-documents-legaux-avocat-280e.png",
      category: "Création de contenus"
    },
    {
      id: 18,
      title: "Faire développer une demande sur mesure",
      price: "420,00 €",
      description: "Développement personnalisé selon vos besoins spécifiques",
      icon: "/images/produits-services/18-developpement-sur-mesure-420e.png",
      category: "Création de contenus"
    },
    {
      id: 19,
      title: "Montage vidéo pour dynamiser votre page d'accueil",
      price: "250,00 €",
      description: "Création de vidéos dynamiques pour votre page d'accueil",
      icon: "/images/produits-services/19-montage-video-accueil-250e.png",
      category: "Création de contenus"
    },
    {
      id: 20,
      title: "Se former à la création de newsletter",
      price: "250,00 €",
      description: "Formation à la création et gestion de newsletters professionnelles",
      icon: "/images/produits-services/20-formation-newsletter-250e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 21,
      title: "Intégrez un chat pour plus d'interaction avec vos clients",
      price: "350,00 €",
      description: "Intégration d'un système de chat pour améliorer l'interaction client",
      icon: "/images/produits-services/21-chat-interaction-clients-350e.png",
      category: "Plug-in"
    },
    {
      id: 22,
      title: "Réservez votre nom de domaine et créez votre adresse e-mail professionnelle",
      price: "90,00 €",
      description: "Réservation de nom de domaine et création d'adresse email professionnelle",
      icon: "/images/produits-services/21-nom-domaine-email-90e.png",
      type: "Visioconférence",
      category: "Formations"
    },
    {
      id: 23,
      title: "Ajoutez un espace membre à votre site web pour monétiser du contenu premium ou créer une communauté",
      price: "450,00 €",
      description: "Création d'un espace membre pour monétiser du contenu premium",
      icon: "/images/produits-services/22-espace-membre-premium-450e.png",
      category: "Plug-in"
    },
    {
      id: 24,
      title: "Fonctionnalité e-commerce",
      price: "900,00 €",
      description: "Ajout de fonctionnalités e-commerce à votre site web",
      icon: "/images/produits-services/23-fonctionnalite-ecommerce-900e.png",
      category: "Plug-in"
    },
    {
      id: 25,
      title: "Faites rédiger vos textes par une journaliste",
      price: "À partir de 250,00 €",
      description: "Rédaction professionnelle de vos textes par une journaliste",
      icon: "/images/produits-services/23-redaction-journaliste-250e.png",
      category: "Création de contenus"
    },
    {
      id: 26,
      title: "Template E-shop",
      price: "75,00 €",
      description: "Template e-commerce prêt à l'emploi pour votre boutique",
      icon: "/images/produits-services/24-template-eshop-75e.png",
      category: "Templates"
    },
    {
      id: 27,
      title: "Template Agence",
      price: "75,00 €",
      description: "Template professionnel pour agence avec design moderne",
      icon: "/images/produits-services/25-template-agence-75e.png",
      category: "Templates"
    },
    {
      id: 28,
      title: "Template Startup",
      price: "75,00 €",
      description: "Template dynamique et moderne pour startup",
      icon: "/images/produits-services/26-template-startup-75e.png",
      category: "Templates"
    },
    {
      id: 29,
      title: "Template Architecte",
      price: "75,00 €",
      description: "Template élégant et professionnel pour architectes",
      icon: "/images/produits-services/27-template-architecte-75e.png",
      category: "Templates"
    },
    {
      id: 30,
      title: "Couleur du menu de navigation au passage du curseur",
      price: "0,00 €",
      description: "Personnalisation de la couleur du menu au survol",
      icon: "/images/produits-services/28-couleur-menu-curseur-0e.png",
      category: "Ressources gratuites"
    },
    {
      id: 31,
      title: "Avantages Squarespace",
      price: "0,00 €",
      description: "Guide des avantages de la plateforme Squarespace",
      icon: "/images/produits-services/29-avantages-squarespace-0e.png",
      category: "Ressources gratuites"
    },
    {
      id: 32,
      title: "Check-list des éléments à réunir avant de créer un site web",
      price: "0,00 €",
      description: "Liste complète des éléments nécessaires avant création de site",
      icon: "/images/produits-services/30-checklist-creation-site-0e.png",
      category: "Ressources gratuites"
    }
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
    // Ici tu peux ajouter une notification ou redirection
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux ajouter la logique d'inscription
    setNewsletterEmail('')
  }

  // Filtrage et tri des produits
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Tous les services' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Prix croissants') {
      const priceA = parseFloat(a.price.replace(/[^0-9,]/g, '').replace(',', '.'))
      const priceB = parseFloat(b.price.replace(/[^0-9,]/g, '').replace(',', '.'))
      return priceA - priceB
    } else if (sortBy === 'Prix décroissants') {
      const priceA = parseFloat(a.price.replace(/[^0-9,]/g, '').replace(',', '.'))
      const priceB = parseFloat(b.price.replace(/[^0-9,]/g, '').replace(',', '.'))
      return priceB - priceA
    }
    return 0
  })

  const categories = [
    'Tous les services',
    'Ressources gratuites',
    'Maintenance & options',
    'Création de contenus',
    'Communication & Marketing',
    'Formations',
    'Plug-in',
    'Templates'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
              <div>
        <div className="w-full px-4 py-8">
                                <p className="text-xl text-left mb-4" style={{ color: '#F20000' }}>
             Booster mon site web
           </p>
           <h1 className="text-4xl text-left mb-4" style={{ color: '#16214a' }}>
             Des solutions simples pour faire évoluer<br />votre business en ligne.
           </h1>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - au-dessus sur mobile/tablette, à gauche sur desktop */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 lg:border-r" style={{ borderColor: '#16214a' }}>
            <div className="p-6">
              {/* Barre de recherche */}
              <div className="mb-6 pb-4 border-b border-black">
                <div className="flex items-center gap-3">
                  <span className="text-black font-medium">RECHERCHE</span>
                  <Search className="text-black w-4 h-4" />
                </div>
              </div>

              {/* Catégories */}
              <div className="mb-6 pb-4 border-b border-black">
                                                 <button
                  onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-black font-medium">CATÉGORIES</span>
                  {categoriesExpanded ? <ChevronUp className="w-4 h-4 text-black" /> : <ChevronDown className="w-4 h-4 text-black" />}
                </button>
                {categoriesExpanded && (
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 transition-colors text-[#16214a] hover:text-[#F20000]`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tri */}
              <div>
                                                 <button
                  onClick={() => setSortExpanded(!sortExpanded)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-black font-medium">TRIER</span>
                  {sortExpanded ? <ChevronUp className="w-4 h-4 text-black" /> : <ChevronDown className="w-4 h-4 text-black" />}
                </button>
                {sortExpanded && (
                  <div className="space-y-2">
                    {['Prix croissants', 'Prix décroissants'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={`block w-full text-left px-3 py-2 transition-colors text-[#16214a] hover:text-[#F20000]`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grille de produits */}
          <div className="w-full lg:flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sortedProducts.map((product) => (
                <div key={product.id} className="rounded-lg p-6 transition-all duration-300 hover:-translate-y-2">
                  {/* Icône du produit */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={product.icon}
                      alt={product.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  <h3 className="text-xs mb-0 text-left" style={{ color: '#16214a' }}>
                    {product.title}
                  </h3>
                  <p className="text-lg mb-2 text-left" style={{ color: '#16214a' }}>
                    {product.price}
                  </p>

                  {/* Type de service si applicable */}
                  {product.type && (
                    <div className="mb-4 text-left">
                      <span className="text-sm text-[#F20000]">
                        {product.type}
                      </span>
                    </div>
                  )}


                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
                         <h2 className="mb-4" style={{ color: '#16214a' }}>
               Restez informé de nos nouveautés
             </h2>
            <p className="text-lg mb-6" style={{ color: '#16214a' }}>
              Recevez nos conseils et astuces pour optimiser votre présence en ligne
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F20000]"
                style={{ borderColor: '#16214a' }}
              />
              <button
                type="submit"
                className="bg-[#16214a] text-white font-bold py-3 px-8 border-2 transition-all duration-300 hover:bg-[#F20000] hover:border-[#F20000] rounded-lg"
                style={{ borderColor: '#16214a' }}
              >
                <Mail size={20} className="inline mr-2" />
                S'inscrire
              </button>
            </form>
            <p className="text-sm mt-4" style={{ color: '#16214a' }}>
              Votre adresse e-mail est confidentielle.
            </p>
          </div>
        </div>

        {/* Section contact */}
        <div className="mt-16 rounded-lg p-8" style={{ boxShadow: '4px 4px 0px #16214a' }}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4" style={{ color: '#16214a' }}>
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-lg mb-6" style={{ color: '#16214a' }}>
              Réservez un créneau pour discuter de vos besoins avec Jimmy Joseph
            </p>
            <a
              href="https://acuityscheduling.com/schedule.php?owner=YOUR_ACUITY_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16214a] text-white font-bold py-4 px-8 border-2 transition-all duration-300 hover:bg-[#F20000] hover:border-[#F20000] rounded-lg"
              style={{ borderColor: '#16214a' }}
            >
              <Calendar size={24} />
              PRENDRE RENDEZ-VOUS
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
