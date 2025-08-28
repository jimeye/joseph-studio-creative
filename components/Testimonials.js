'use client';

import { Star, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  const projects = [
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
      image: "/images/blondie-paris.jpg",
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
    }
  ];

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

                 <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#f9f7f2] p-6 border-2 transition-all duration-300 hover:transform hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>

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

        <div className="text-center mt-12">
          <div className="bg-[#f9f7f2] p-8 w-full border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
              📊 Statistiques de Satisfaction
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>98%</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>500+</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Sites livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>4.9/5</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>7j</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Délai moyen</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
} 