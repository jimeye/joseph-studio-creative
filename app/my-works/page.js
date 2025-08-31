'use client';

import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function JJFPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-2 relative" style={{ zIndex: 1000 }}>
      {/* Main Content */}
      <main className="w-full px-8 relative" style={{ zIndex: 1001 }}>
        {/* Main Content Section */}
        <div className="w-full">

          {/* Carousel Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              My Works
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
              <div className="flex justify-center mt-4 gap-4">
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
                  style={{ color: '#16214a', backgroundColor: '#FAFAFA' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
