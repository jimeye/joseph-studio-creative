'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProjectPage() {
  const params = useParams()
  const { slug } = params

  const projects = {
    'atnsoul': {
      name: "ATN Soul",
      description: "Music Producer",
      fullDescription: "Nous avons accompagné l'artiste Ethan Fellous aKa Atn $oul dans la création d'un site internet sur mesure, conçu pour mettre en valeur son univers musical. Réalisé sur-mesure, le site allie esthétique haut de gamme et simplicité de gestion. L'équipe d'Ethan peut désormais mettre à jour le contenu du site et gérer l'e-shop de manière autonome.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Boutique en ligne avec merchandising", "Présentation élégante du travail", "Design épuré et responsive", "Formation à l'autonomie"],
      image: "/images/atnsoul.jpg",
      url: "https://atnsoul-com.vercel.app"
    },
    'blondie-paris': {
      name: "Blondie Paris",
      description: "Relations presse",
      fullDescription: "Site web professionnel pour une agence de relations presse. Interface élégante pour présenter les services et les réalisations.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: ["Présentation des services", "Portfolio", "Blog", "Contact"],
      image: "/images/blondie-paris.jpg",
      url: "https://blondie.vercel.app"
    },
    'casa-azul-ibiza': {
      name: "Casa Azul Ibiza",
      description: "Guest house booking",
      fullDescription: "Site web de réservation pour une guest house à Ibiza. Système de réservation intégré avec calendrier et paiement.",
      technologies: ["Next.js", "React", "TypeScript", "Stripe"],
      features: ["Système de réservation", "Calendrier", "Paiement sécurisé", "Galerie photos"],
      image: "/images/casa-azul.jpg",
      url: "https://casa-azul-ibiza.vercel.app"
    },
    'estellon': {
      name: "Estellon",
      description: "Boutique en ligne",
      fullDescription: "Boutique en ligne avec design moderne. E-commerce complet avec gestion des produits et panier d'achat.",
      technologies: ["Next.js", "React", "JavaScript", "Shopify"],
      features: ["Catalogue produits", "Panier d'achat", "Paiement sécurisé", "Gestion des commandes"],
      image: "/images/estellon.jpg",
      url: "https://estellon.vercel.app"
    },
    'la-boulette-ibiza': {
      name: "La Boulette Ibiza",
      description: "Boulettes & Piments 🌶️",
      fullDescription: "Site web restaurant pour La Boulette Ibiza. Présentation du menu, réservations et informations pratiques.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: ["Menu interactif", "Système de réservation", "Localisation", "Horaires"],
      image: "/images/la-boulette-ibiza.jpg",
      url: "https://paris.vercel.app"
    },
    'nena-mala-upcycling': {
      name: "Nena Mala",
      description: "Upcycling",
      fullDescription: "Site web créatif pour une marque d'upcycling. Design unique pour présenter les créations éco-responsables.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Galerie produits", "Histoire de la marque", "Processus upcycling", "Contact"],
      image: "/images/nena-mala.jpg",
      url: "https://nena-mala-upcycling.vercel.app"
    },
    'orphee-ritchie-psychologue': {
      name: "Orphée Ritchie",
      description: "Cabinet de psychologie",
      fullDescription: "Site web professionnel pour un cabinet de psychologie. Interface rassurante et informative pour les patients.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Présentation du praticien", "Services proposés", "Prise de rendez-vous", "Informations pratiques"],
      image: "/images/orphee-ritchie.jpg",
      url: "https://orphee-ritchie-psychologue.vercel.app"
    },
    'time-2win': {
      name: "Time 2 Win",
      description: "Site web corporate",
      fullDescription: "Site web corporate pour une entreprise de performance. Design professionnel et moderne.",
      technologies: ["Next.js", "React", "CSS", "JavaScript"],
      features: ["Présentation entreprise", "Services", "Équipe", "Contact"],
      image: "/images/time-2win.jpg",
      url: "https://time-2win.vercel.app"
    }
  }

  const project = projects[slug]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Projet non trouvé
          </h2>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-[#f9f7f2] rounded hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2' }}>
      {/* Header */}
      <div className="bg-[#f9f7f2] border-b-2" style={{ borderColor: '#16214a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-normal tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a', lineHeight: '0.9' }}>
                Un site sur-mesure pour {project.name}
              </h1>
              <p className="text-base mt-2" style={{ color: '#16214a' }}>{project.description}</p>
            </div>
            <Link
              href="/"
              className="text-sm flex items-center gap-2 bg-[#f9f7f2] font-bold py-2 px-5 border transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
              style={{ color: '#16214a', borderColor: '#16214a' }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '4px 4px 0px #16214a';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}
            >
              ← Retour aux projets
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section - Text Description */}
          <div className="space-y-8">
            {/* Project Overview */}
            <div>
              <h2 className="text-lg font-bold mb-4" style={{ color: '#16214a' }}>
                Présentation du projet
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#16214a' }}>
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features & Benefits */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Fonctionnalités clés
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm" style={{ color: '#16214a' }}>
                    <div className="w-3 h-3 mr-4" style={{ backgroundColor: '#da2f35' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 border-2 text-xs font-medium"
                    style={{ borderColor: '#16214a', color: '#16214a', backgroundColor: '#f9f7f2' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 font-bold py-2 px-5 border transition-all duration-300 hover:transform hover:translate-x-1 hover:translate-y-1"
                style={{ backgroundColor: '#16214a', color: 'white', borderColor: '#16214a' }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '4px 4px 0px #000000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              >
                VOIR LE SITE WEB
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Visual Mockups */}
          <div className="space-y-8">
            {/* Desktop Mockup */}
            <div className="bg-[#f9f7f2] border-2 p-6" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#16214a' }}>Vue Desktop</h3>
              <div className="bg-gray-100 p-4">
                {/* Computer Frame */}
                <div className="bg-gray-800 p-2 rounded-t-lg">
                  <div className="bg-[#f9f7f2] border-2 border-gray-300 h-80 flex flex-col overflow-hidden">
                    {slug === 'atnsoul' ? (
                      <div className="w-full h-full flex flex-col">
                        {/* Header Navigation */}
                        <div className="w-full h-12 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-6">
                          <div className="text-sm font-bold" style={{ color: '#16214a' }}>ATN SOUL</div>
                          <div className="flex items-center space-x-6 text-xs">
                            <span style={{ color: '#16214a' }}>MUSIC</span>
                            <span style={{ color: '#16214a' }}>SHOP</span>
                            <span style={{ color: '#16214a' }}>ABOUT</span>
                            <span style={{ color: '#16214a' }}>CONTACT</span>
                            <button className="px-4 py-1 text-xs font-bold" style={{ backgroundColor: '#16214a', color: 'white' }}>SHOP</button>
                          </div>
                        </div>
                        {/* Hero Section with Restaurant Interior */}
                        <div className="flex-1 relative">
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center relative">
                            {/* Restaurant Interior Elements */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                            <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
                            <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 rounded-full opacity-40"></div>
                            <div className="absolute bottom-8 left-8 w-20 h-20 bg-orange-500 rounded-full opacity-30"></div>
                            <div className="absolute bottom-4 right-4 w-14 h-14 bg-orange-400 rounded-full opacity-50"></div>
                            
                            {/* Text Overlay */}
                            <div className="absolute bottom-6 left-6 text-[#f9f7f2] z-10">
                              <h2 className="text-3xl font-bold mb-2">ATN SOUL</h2>
                              <p className="text-sm opacity-90">Découvrez l'univers musical de l'artiste</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col">
                        {/* Header Navigation */}
                        <div className="w-full h-12 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-6">
                          <div className="text-sm font-bold" style={{ color: '#16214a' }}>{project.name.toUpperCase()}</div>
                          <div className="flex items-center space-x-6 text-xs">
                            <span style={{ color: '#16214a' }}>HOME</span>
                            <span style={{ color: '#16214a' }}>SERVICES</span>
                            <span style={{ color: '#16214a' }}>ABOUT</span>
                            <span style={{ color: '#16214a' }}>CONTACT</span>
                          </div>
                        </div>
                        {/* Hero Section */}
                        <div className="flex-1 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                          <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2" style={{ color: '#16214a' }}>{project.name}</h2>
                            <p className="text-sm" style={{ color: '#16214a' }}>{project.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Computer Stand */}
                <div className="bg-gray-800 h-4 w-32 mx-auto rounded-b-lg"></div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="bg-[#f9f7f2] border-2 p-6" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#16214a' }}>Vue Mobile</h3>
              <div className="flex justify-center">
                <div className="bg-gray-100 p-4">
                  {/* Phone Frame */}
                  <div className="bg-gray-800 p-2 rounded-3xl">
                    <div className="bg-[#f9f7f2] border-2 border-gray-300 w-40 h-80 flex flex-col overflow-hidden rounded-2xl">
                      {slug === 'atnsoul' ? (
                        <div className="w-full h-full flex flex-col">
                          {/* Header */}
                          <div className="w-full h-10 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-3">
                            <div className="text-xs font-bold" style={{ color: '#16214a' }}>ATN SOUL</div>
                            <div className="w-6 h-6 flex flex-col justify-center">
                              <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                              <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                              <div className="w-4 h-0.5 bg-gray-600"></div>
                            </div>
                          </div>
                          {/* Content - Portrait Photo */}
                          <div className="flex-1 relative">
                            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                              {/* Portrait Circle */}
                              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-gray-600 font-bold">ATN</span>
                                </div>
                              </div>
                              
                              {/* Text Below */}
                              <div className="absolute bottom-4 left-0 right-0 text-center">
                                <h3 className="text-sm font-bold mb-1 text-[#f9f7f2]">ATN SOUL</h3>
                                <p className="text-xs opacity-90 text-[#f9f7f2]">Music Producer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex flex-col">
                          {/* Header */}
                          <div className="w-full h-10 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-3">
                            <div className="text-xs font-bold" style={{ color: '#16214a' }}>{project.name.toUpperCase()}</div>
                            <div className="w-6 h-6 flex flex-col justify-center">
                              <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                              <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                              <div className="w-4 h-0.5 bg-gray-600"></div>
                            </div>
                          </div>
                          {/* Content */}
                          <div className="flex-1 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <div className="text-center px-2">
                              <h3 className="text-sm font-bold mb-1" style={{ color: '#16214a' }}>{project.name}</h3>
                              <p className="text-xs" style={{ color: '#16214a' }}>{project.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
