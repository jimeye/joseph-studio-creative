'use client';

import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-4 relative" style={{ zIndex: 1000 }}>
      {/* Main Content */}
      <main className="w-full px-8 relative" style={{ zIndex: 1001 }}>
        {/* Main Content Section */}
        <div className="w-full">

          {/* Nom et titre */}
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              Jimmy Joseph Fellous
            </h4>
            <p className="text-base mb-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              17/05/1969 - Paris 11
            </p>
            <p className="text-lg mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Directeur Artistique Digital & Développeur Full Stack
            </p>
          </div>

          {/* Lettre de motivation Section */}
          <div>
            
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Hello,
            </p>
            
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Alors, laissez-moi vous raconter ma petite histoire... Depuis plus de 30 ans, je jongle entre le marketing, les ventes et le design ! Mon super pouvoir ? Transformer vos idées folles en expériences web qui font dire "WOW" à vos utilisateurs (et peut-être même "F#CK" si on est entre nous).
            </p>
            
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Chaque projet, c'est comme une nouvelle aventure - imaginez Indiana Jones, mais avec un clavier au lieu d'un fouet ! Je ne code pas, je ne designe pas... Je crée de la magie digitale ! Et ma philosophie est simple : la tech doit être au service de l'humain, pas l'inverse (parce que franchement, qui a envie de parler à un robot ?).
            </p>
            
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Maintenant, attachez vos ceintures, voici mes trois super-valeurs qui font de moi le héros de vos projets :
            </p>
            
            <div className="mt-4">
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    L'Excellence (ou comment faire dire "F#CK" à vos clients)
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Le "suffisant" ? Connais pas ! Chaque projet, c'est l'occasion de repousser mes limites comme un vrai Hulk du code ! Mon objectif secret ? Vous faire dire "WOW" (et accessoirement "F#CK" si on est entre nous). Parce que franchement, qui a envie d'un site web "correct" quand on peut avoir un site web "ÉPIQUE" ?
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    La Collaboration (ou l'art de ne pas être un kabbaliste du code)
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Les plus belles créations naissent de la collaboration ! Votre vision + mon expertise = une bombe atomique de créativité ! Je ne suis pas un développeur qui code dans sa cave, je suis votre partenaire de crime digital ! On va construire ensemble quelque chose d'extraordinaire, et on va bien s'amuser en le faisant !
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    L'Innovation (ou comment rester plus frais qu'un iceberg)
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Le digital évolue plus vite que mes cheveux grisonnent ! Alors je reste à la pointe, j'expérimente, j'apprends, je teste... Parce que je veux vous offrir des solutions qui ne sont pas seulement modernes aujourd'hui, mais qui le resteront demain (et après-demain aussi, histoire d'être sûr !).
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mt-4 mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Alors, prêt à transformer vos idées en réalité digitale ? Je suis là, enthousiaste et déterminé, pour créer avec vous quelque chose d'extraordinaire.
            </p>
            
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Avec passion et détermination,<br/>
              <span style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Jimmy Joseph Fellous</span>
            </p>
          </div>

          {/* Separator Line */}
          <div className="text-center mb-8 mt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px" style={{ backgroundColor: '#16214a' }}></div>
              <span className="text-sm" style={{ color: '#16214a' }}>★★★★★</span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#16214a' }}></div>
            </div>
          </div>

          {/* Carousel Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              My works
            </h3>
            
            {/* Carousel Container */}
            <div className="relative">
              <div 
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
                {[
                  {
                    name: "ATN Soul",
                    description: "Music Producer",
                    image: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg",
                    url: "/projets/atn-soul",
                    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
                  },
                  {
                    name: "Blondie Paris",
                    description: "Relations presse",
                    image: "/images/blondie.paris.webp",
                    url: "/projets/blondie-paris",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Casa Azul Ibiza",
                    description: "Guest house booking",
                    image: "/images/casa-azul-ibiza.webp",
                    url: "/projets/casa-azul-ibiza",
                    technologies: ["Next.js", "React", "TypeScript", "Stripe"]
                  },
                  {
                    name: "A | N | Y",
                    description: "Agence créative design",
                    image: "/images/any-paris.webp",
                    url: "/projets/any-paris",
                    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
                  },
                  {
                    name: "Estellon",
                    description: "Boutique en ligne",
                    image: "/images/estellon.webp",
                    url: "/projets/estellon",
                    technologies: ["Next.js", "React", "JavaScript", "Shopify"]
                  },
                  {
                    name: "La Boulette Ibiza",
                    description: "Boulettes & Piments 🌶️",
                    image: "/images/la-boulette-ibiza.webp",
                    url: "/projets/la-boulette-ibiza",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "El Meleh Paella",
                    description: "Restaurant Ibiza",
                    image: "/images/el-meleh-de-la-paella.webp",
                    url: "/projets/el-meleh-paella-ibiza",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Nena Mala",
                    description: "Boutique mode",
                    image: "/images/nena-mala.webp",
                    url: "/projets/nena-mala",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Mandala Project",
                    description: "Projet artistique",
                    image: "/images/mandala-project.webp",
                    url: "/projets/mandala-project",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Mélanie Elbaz",
                    description: "Photographe",
                    image: "/images/melanie-elbaz-photographe.webp",
                    url: "/projets/melanie-elbaz",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Orphée Ritchie",
                    description: "Artiste",
                    image: "/images/orphee-ritchie.webp",
                    url: "/projets/orphee-ritchie",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  },
                  {
                    name: "Time 2 Win",
                    description: "Application gaming",
                    image: "/images/time-2-win.webp",
                    url: "/projets/time-2win",
                    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"]
                  }
                ].map((project, index) => (
                  <div key={index} className="bg-[#FAFAFA] p-6 border-2 transition-all duration-500 hover:transform hover:translate-x-1 hover:translate-y-1 flex-shrink-0 w-[calc(50vw-2rem)] md:w-[calc(33.333vw-2rem)] lg:w-[300px] min-w-[280px] max-w-[300px]" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', transform: 'rotateY(0deg)' }}>
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

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={project.url}
                        className="flex-1 text-center px-4 py-2 text-sm font-bold transition-all duration-300"
                        style={{
                          boxShadow: '4px 4px 0px #16214a',
                          color: '#FAFAFA',
                          borderColor: '#FAFAFA',
                          backgroundColor: '#16214a',
                          border: '2px solid #FAFAFA',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#FAFAFA';
                          e.target.style.color = '#16214a';
                          e.target.style.borderColor = '#16214a';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#16214a';
                          e.target.style.color = '#FAFAFA';
                          e.target.style.borderColor = '#FAFAFA';
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
                    const slider = document.querySelector('.flex.gap-8.overflow-x-auto');
                    if (slider) {
                      slider.scrollTo({
                        left: slider.scrollLeft - 320,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="p-2 transition-all duration-300 hover:bg-[#ffff00] hover:transform hover:translate-x-1 hover:translate-y-1"
                  style={{ color: '#16214a', backgroundColor: '#FAFAFA' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const slider = document.querySelector('.flex.gap-8.overflow-x-auto');
                    if (slider) {
                      slider.scrollTo({
                        left: slider.scrollLeft + 320,
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

          {/* Separator Line */}
          <div className="text-center mb-8 mt-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px" style={{ backgroundColor: '#16214a' }}></div>
              <span className="text-sm" style={{ color: '#16214a' }}>★★★★★</span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#16214a' }}></div>
            </div>
          </div>

          {/* My Story Section */}
          <div className="mb-16">
            
            <div className="bg-[#f9f7f2] p-8 rounded-lg relative p-4 border-2 rounded-lg" style={{ borderColor: '#d92f35' }}>
              {/* Cadre d'étoiles - 1 ligne continue */}
              <div className="absolute inset-2 pointer-events-none">
                {Array.from({ length: 160 }).map((_, i) => {
                  // Calculer le bon nombre d'étoiles pour chaque côté
                  const starsPerSide = 40; // 40 étoiles sur chaque côté
                  
                  let left, top;
                  
                  if (i < starsPerSide) {
                    // Côté haut - 40 étoiles
                    left = (i / (starsPerSide - 1)) * 100;
                    top = 0;
                  } else if (i < starsPerSide * 2) {
                    // Côté droit - 40 étoiles
                    left = 100;
                    top = ((i - starsPerSide) / (starsPerSide - 1)) * 100;
                  } else if (i < starsPerSide * 3) {
                    // Côté bas - 40 étoiles
                    left = 100 - (((i - starsPerSide * 2) / (starsPerSide - 1)) * 100);
                    top = 100;
                  } else {
                    // Côté gauche - 40 étoiles
                    left = 0;
                    top = 100 - (((i - starsPerSide * 3) / (starsPerSide - 1)) * 100);
                  }
                  
                  return (
                    <span 
                      key={`star-${i}`} 
                      className="text-xs absolute" 
                      style={{ 
                        color: '#16214a',
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1000
                      }}
                    >
                      ★
                    </span>
                  );
                })}
              </div>

                <div className="mb-6">
                <h4 className="text-xl font-bold mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  PROFIL PROFESSIONNEL
                </h4>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                  Développeur Full-Stack Senior avec 30+ ans d'expérience dans la mode et le digital. Ancien directeur artistique et créateur de marque, j'ai développé une expertise unique combinant créativité artistique et maîtrise technique. Spécialisé dans la création de sites e-commerce haut de gamme avec une approche design-driven.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Développeur Full-Stack Senior & Consultant Digital
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2023 - Présent
                  </p>
                </div>

                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Directeur Artistique & Créateur de Marque
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2015 - 2022 (7 ans)
                  </p>
                  <p className="text-base mb-3" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    <strong>Atelier Beaurepaire</strong> - Marque de vêtements premium - Direction complète
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Direction Artistique :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Conception des collections (design, couleurs, matières)</li>
                        <li>• Direction photo et stylisme</li>
                        <li>• Branding et identité visuelle</li>
                        <li>• Stratégie marketing et communication</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Développement Digital :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Direction technique du site e-commerce</li>
                        <li>• UX/UI Design et expérience utilisateur</li>
                        <li>• Gestion de la production web</li>
                        <li>• Optimisation conversion et performance</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Gestion Business :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Production et sourcing matières</li>
                        <li>• Montage et essayages</li>
                        <li>• Gestion équipe créative</li>
                        <li>• Développement commercial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Agent Commercial Senior
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    1990 - 2018 (28 ans)
                  </p>
                  <p className="text-base mb-3" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    <strong>Grandes Marques de Jeans</strong> - Évolution de carrière exceptionnelle
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <strong>1990-1995 :</strong> Sentier (j'ai tout appris)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <strong>1995-2020 :</strong> Sales & Marketing Manager (25 ans), Agent Commercial Senior (18 ans)
                      </p>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Expertise développée :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Gestion de comptes majeurs (Bon Marché, Galeries Lafayette & Printemps)</li>
                        <li>• Négociation commerciale</li>
                        <li>• Développement réseau</li>
                        <li>• Analyse marché et tendances</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compétences Techniques */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  COMPÉTENCES TECHNIQUES
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                      Développement Web
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Frontend :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          React 18, Next.js 13, Tailwind CSS, JavaScript ES6+
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Backend :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Node.js, API Routes, Redis/Upstash
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>E-commerce :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Stripe, Apple Pay, systèmes de commande
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>DevOps :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Vercel, Git, déploiement continu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                      Design & Créativité
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>UX/UI Design :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Interfaces utilisateur, expérience client
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Direction Artistique :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Branding, identité visuelle
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Photographie :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Direction photo, stylisme
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Design de Mode :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Collections, matières, couleurs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formation & Développement */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  FORMATION & DÉVELOPPEMENT
                </h4>
                
                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Formation Intensive en Développement Web
                  </h5>
                  <p className="text-base mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2021-2023 (2 ans)
                  </p>
                  <p className="text-base mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Période post-COVID : Dédiée à l'apprentissage des technologies web modernes
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Frontend :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        React, Next.js, Tailwind CSS
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Backend :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        Node.js, API REST, bases de données
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>E-commerce :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        Stripe, systèmes de paiement
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Design :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        UX/UI, responsive design, animations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
} 