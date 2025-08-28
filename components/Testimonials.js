'use client';

import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    
    const projects = [
    {
      slug: 'any-paris',
      name: "A | N | Y",
      description: "Agence créative design",
      fullDescription: "Fondée par Johann Roux et Julie Elbaz en 2006, l'agence ANY déploie son savoir-faire dans les domaines du luxe, de la mode, de la beauté ou de la joaillerie. Basée à Paris et à Londres, l'agence ANY se plait à traduire une vision, enrichir et mettre à l'épreuve du réel, l'identité, les contenus et les valeurs d'une marque.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Événements luxe", "Design spatial", "Production mondiale", "Expériences exclusives"],
      image: "/images/any-paris.jpg",
      url: "https://any.paris/",
      rating: 5
    },
    {
      slug: 'atnsoul',
      name: "ATN Soul",
      description: "Music Producer",
      fullDescription: "Nous avons accompagné l'artiste Ethan Fellous aKa Atn $oul dans la création d'un site internet sur mesure, conçu pour mettre en valeur son univers musical. Réalisé sur-mesure, le site allie esthétique haut de gamme et simplicité de gestion.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Boutique en ligne avec merchandising", "Présentation élégante du travail", "Design épuré et responsive", "Formation à l'autonomie"],
      image: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg",
      url: "https://atnsoul-com.vercel.app",
      rating: 5
    },
    {
      slug: 'blondie-paris',
      name: "Blondie Paris",
      description: "Relations presse",
      fullDescription: "Site web professionnel pour une agence de relations presse. Interface élégante pour présenter les services et les réalisations.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: ["Présentation des services", "Portfolio", "Blog", "Contact"],
      image: "/images/blondie.paris.webp",
      url: "https://blondie.vercel.app",
      rating: 5
    },
    {
      slug: 'casa-azul-ibiza',
      name: "Casa Azul Ibiza",
      description: "Guest house booking",
      fullDescription: "Site web de réservation pour une guest house à Ibiza. Système de réservation intégré avec calendrier et paiement.",
      technologies: ["Next.js", "React", "TypeScript", "Stripe"],
      features: ["Système de réservation", "Calendrier", "Paiement sécurisé", "Galerie photos"],
      image: "/images/casa-azul.jpg",
      url: "https://casa-azul-ibiza.vercel.app",
      rating: 5
    },
    {
      slug: 'estellon',
      name: "Estellon",
      description: "Boutique en ligne",
      fullDescription: "Boutique en ligne avec design moderne. E-commerce complet avec gestion des produits et panier d'achat.",
      technologies: ["Next.js", "React", "JavaScript", "Shopify"],
      features: ["Catalogue produits", "Panier d'achat", "Paiement sécurisé", "Gestion des commandes"],
      image: "/images/estellon.jpg",
      url: "https://estellon.vercel.app",
      rating: 5
    },
    {
      slug: 'la-boulette-ibiza',
      name: "La Boulette Ibiza",
      description: "Boulettes & Piments 🌶️",
      fullDescription: "Site web restaurant pour La Boulette Ibiza. Présentation du menu, réservations et informations pratiques.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: ["Menu interactif", "Système de réservation", "Localisation", "Horaires"],
      image: "/images/la-boulette-ibiza.jpg",
      url: "https://paris.vercel.app",
      rating: 5
    },
    {
      slug: 'nena-mala-upcycling',
      name: "Nena Mala",
      description: "Upcycling",
      fullDescription: "Site web créatif pour une marque d'upcycling. Design unique pour présenter les créations éco-responsables.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Galerie produits", "Histoire de la marque", "Processus upcycling", "Contact"],
      image: "/images/nena-mala.jpg",
      url: "https://nena-mala-upcycling.vercel.app",
      rating: 5
    },
    {
      slug: 'orphee-ritchie-psychologue',
      name: "Orphée Ritchie",
      description: "Cabinet de psychologie",
      fullDescription: "Site web professionnel pour un cabinet de psychologie. Interface rassurante et informative pour les patients.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Présentation du praticien", "Services proposés", "Prise de rendez-vous", "Informations pratiques"],
      image: "/images/orphee-ritchie.jpg",
      url: "https://orphee-ritchie-psychologue.vercel.app",
      rating: 5
    },
    {
      slug: 'time-2win',
      name: "Time 2 Win",
      description: "Site web corporate",
      fullDescription: "Site web corporate pour une entreprise de performance. Design professionnel et moderne.",
      technologies: ["Next.js", "React", "CSS", "JavaScript"],
      features: ["Présentation entreprise", "Services", "Équipe", "Contact"],
      image: "/images/time-2win.jpg",
      url: "https://time-2win.vercel.app",
      rating: 5
    },
    {
      slug: 'el-meleh-paella-ibiza',
      name: "El Meleh de la Paella",
      description: "Restaurant de paella",
      fullDescription: "Site web pour un restaurant de paella à Ibiza. Présentation du menu, réservations et informations pratiques.",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      features: ["Menu interactif", "Système de réservation", "Localisation", "Horaires"],
      image: "/images/el-meleh-paella.jpg",
      url: "https://el-meleh-de-la-paella-d-ibiza.vercel.app",
      rating: 5
    },
    {
      slug: 'melanie-elbaz',
      name: "Mélanie Elbaz",
      description: "Photographe",
      fullDescription: "Site web professionnel pour Mélanie Elbaz, photographe. Portfolio élégant pour présenter ses créations.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Portfolio photos", "Présentation artiste", "Contact", "Galerie"],
      image: "/images/melanie-elbaz.jpg",
      url: "https://www.melanieelbaz.com",
      rating: 5
    },
    {
      slug: 'mandala-project',
      name: "Mandala Project",
      description: "Retraite holistique et yoga",
      fullDescription: "Site web pour une retraite holistique et yoga. Présentation des programmes, réservations et informations sur les retraites.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Programmes retraites", "Système de réservation", "Galerie photos", "Informations pratiques"],
      image: "/images/mandala-project.jpg",
      url: "https://www.mandala-project.com/",
      rating: 5
    }
  ];

  // Auto-scroll effect - Continuous smooth rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Tiny increment for smooth continuous movement
        
        // Reset to beginning when reaching the end
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 50); // Very frequent updates for smooth continuous movement
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="realisations" className="section-padding bg-official mt-0" style={{ marginTop: 0, paddingTop: 0, scrollMarginTop: '100px', backgroundColor: '#f9f7f2' }}>

      <div className="container-custom">
        
        {/* Section Témoignages */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Nos réalisations
          </h2>
          <p className="text-xl max-w-3xl" style={{ color: '#16214a' }}>
            Découvrez nos sites web sur-mesure créés pour nos clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none', transition: 'scroll-left 0.5s ease-in-out' }}
          >
                        {projects.map((project, index) => (
              <div key={index} className="bg-[#f9f7f2] p-6 border-2 transition-all duration-500 hover:transform hover:translate-x-1 hover:translate-y-1 flex-shrink-0" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', width: '300px', transform: 'rotateY(0deg)' }}>

                             {/* Project Image */}
               <div className="mb-4 h-52 -mx-6 -mt-6 transition-all duration-300 hover:transform hover:scale-110 hover:z-10">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                  style={{ border: '0', outline: 'none', boxShadow: 'none' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                  <span className="text-4xl">📸</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-1" style={{ color: '#16214a' }}>
                  {project.name}
                </h4>
                <p className="text-xs mb-2" style={{ color: '#16214a' }}>
                  {project.description}
                </p>
              </div>
              
              

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 border text-xs font-medium"
                    style={{ borderColor: '#16214a', color: '#16214a', backgroundColor: '#f9f7f2' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link
                  href={`/projets/${project.slug}`}
                  className="flex-1 text-center px-4 py-2 bg-[#16214a] text-[#f9f7f2] text-sm font-semibold transition-all duration-300 hover:bg-[#ffff00] hover:text-[#16214a]"
                >
                  Voir le projet
                </Link>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#da2f35] text-[#f9f7f2] text-sm font-semibold transition-all duration-300 hover:bg-[#ffff00] hover:text-[#16214a] flex items-center"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                  carouselRef.current.scrollLeft -= 320;
                }
              }}
              className="p-2 border-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
              style={{ borderColor: '#16214a', color: '#16214a', backgroundColor: '#f9f7f2' }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => {
                if (currentIndex < projects.length - 5) {
                  setCurrentIndex(currentIndex + 1);
                  carouselRef.current.scrollLeft += 320;
                }
              }}
              className="p-2 border-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
              style={{ borderColor: '#16214a', color: '#16214a', backgroundColor: '#f9f7f2' }}
              disabled={currentIndex >= projects.length - 5}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}