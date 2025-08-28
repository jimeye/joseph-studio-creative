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
      image: "/images/any-paris.webp",
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
      image: "/images/casa-azul-ibiza.webp",
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
      image: "/images/estellon.webp",
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
      image: "/images/la-boulette-ibiza.webp",
      url: "https://paris.vercel.app",
      rating: 5
    },
    {
      slug: 'nena-mala-upcycling',
      name: "Nena Mala",
      description: "Upcycling Clothing",
      fullDescription: "Site web créatif pour une marque d'upcycling. Design unique pour présenter les créations éco-responsables.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: ["Galerie produits", "Histoire de la marque", "Processus upcycling", "Contact"],
      image: "/images/nena-mala.webp",
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
      image: "/images/orphee-ritchie.webp",
      url: "https://orphee-ritchie-psychologue.vercel.app",
      rating: 5
    },
    {
      slug: 'time-2win',
      name: "Time 2 Win",
      description: "Site web de lotterie",
      fullDescription: "Site web de lotterie pour une entreprise de performance. Design professionnel et moderne.",
      technologies: ["Next.js", "React", "CSS", "JavaScript"],
      features: ["Présentation entreprise", "Services", "Équipe", "Contact"],
      image: "/images/time-2-win.webp",
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
      image: "/images/el-meleh-de-la-paella.webp",
      url: "https://el-meleh-de-la-paella-d-ibiza.vercel.app",
      rating: 5
    },
    {
      slug: 'melanie-elbaz',
      name: "Mélanie Elbaz",
      description: "Photographe",
      fullDescription: "Site web professionnel pour Mélanie Elbaz, photographe. Portfolio élégant pour présenter ses créations.",
      technologies: ["Squarespace", "Design System", "CMS", "Responsive"],
      features: ["Portfolio photos", "Présentation artiste", "Contact", "Galerie"],
      image: "/images/melanie-elbaz-photographe.webp",
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
      image: "/images/mandala-project.webp",
      url: "https://www.mandala-project.com/",
      rating: 5
    }
  ];





  return (
    <section id="realisations" className="bg-official mt-0" style={{ marginTop: 0, paddingTop: '2rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem', scrollMarginTop: '100px', backgroundColor: '#f9f7f2' }}>

      <div className="container-custom">
        
        {/* Section Témoignages */}
        <div className="text-left lg:text-center mb-12" style={{ marginTop: '0rem' }}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Nos réalisations.
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl lg:mx-auto" style={{ color: '#16214a' }}>
            Découvrez nos sites web sur-mesure créés pour nos clients.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto cursor-grab active:cursor-grabbing md:overflow-x-auto overflow-x-hidden"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none', transition: 'scroll-left 0.5s ease-in-out' }}
            onMouseDown={(e) => {
              // Désactiver le drag sur mobile
              if (window.innerWidth < 768) return;
              
              const slider = e.currentTarget;
              let isDown = false;
              let startX;
              let scrollLeft;

              isDown = true;
              slider.style.cursor = 'grabbing';
              startX = e.pageX - slider.offsetLeft;
              scrollLeft = slider.scrollLeft;

              const handleMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                isDown = false;
                slider.style.cursor = 'grab';
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
                        {projects.map((project, index) => (
              <div key={index} className="bg-[#f9f7f2] p-6 border-2 transition-all duration-500 hover:transform hover:translate-x-1 hover:translate-y-1 flex-shrink-0 w-[calc(50vw-2rem)] md:w-[calc(33.333vw-2rem)] lg:w-[300px] min-w-[280px] max-w-[300px]" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', transform: 'rotateY(0deg)' }}>

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
                  className="flex-1 text-center px-4 py-2 text-sm font-bold transition-all duration-300"
                  style={{
                    boxShadow: '4px 4px 0px #16214a',
                    color: '#ffffff',
                    borderColor: '#ffffff',
                    backgroundColor: '#16214a',
                    border: '2px solid #ffffff',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9f7f2';
                    e.target.style.color = '#16214a';
                    e.target.style.borderColor = '#16214a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#16214a';
                    e.target.style.color = '#ffffff';
                    e.target.style.borderColor = '#ffffff';
                  }}
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({
                    left: carouselRef.current.scrollLeft - 320,
                    behavior: 'smooth'
                  });
                }
              }}
              className="p-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
              style={{ color: '#16214a', backgroundColor: '#f9f7f2' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({
                    left: carouselRef.current.scrollLeft + 320,
                    behavior: 'smooth'
                  });
                }
              }}
              className="p-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
              style={{ color: '#16214a', backgroundColor: '#f9f7f2' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}