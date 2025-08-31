'use client'

import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ElMelehPaellaProject() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2' }}>
      {/* Header */}
      <div className="bg-[#f9f7f2] border-b-2" style={{ borderColor: '#16214a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-normal tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a', lineHeight: '0.9' }}>
                Un site sur-mesure pour El Meleh de la Paella
              </h1>
              <p className="text-base mt-2" style={{ color: '#16214a' }}>Restaurant de paella authentique à Ibiza</p>
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
                El Meleh de la Paella est un restaurant authentique situé au cœur d'Ibiza, spécialisé dans la préparation traditionnelle de paella espagnole. Le site web reflète l'ambiance chaleureuse et méditerranéenne du restaurant, mettant en valeur les saveurs authentiques et l'expérience culinaire unique.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#16214a' }}>
                Le design s'inspire des couleurs chaudes de l'Espagne et de la Méditerranée, créant une expérience visuelle qui évoque immédiatement les saveurs et l'atmosphère conviviale du restaurant.
              </p>
            </div>

            {/* Key Features & Benefits */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Fonctionnalités clés
              </h3>
              <ul className="space-y-3">
                {[
                  "Menu interactif avec photos",
                  "Système de réservation en ligne",
                  "Carte interactive et localisation",
                  "Présentation des plats traditionnels",
                  "Informations pratiques",
                  "Design responsive méditerranéen"
                ].map((feature, index) => (
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
                {["Next.js", "React", "JavaScript", "Tailwind CSS"].map((tech, index) => (
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
                href="https://el-meleh-de-la-paella-d-ibiza.vercel.app/"
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
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Right Section - Mockups */}
          <div className="space-y-8">
            {/* Desktop Mockup */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Version Desktop
              </h3>
              <div className="bg-white p-4 border-2" style={{ borderColor: '#16214a' }}>
                <div className="flex items-center mb-4 space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#da2f35' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff6b35' }}></div>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f7931e' }}></div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#da2f35] via-[#ff6b35] to-[#f7931e] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🍚</div>
                    <div className="text-xl font-bold">El Meleh de la Paella</div>
                    <div className="text-sm">Restaurant Ibiza</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Version Mobile
              </h3>
              <div className="bg-white p-4 border-2 mx-auto" style={{ maxWidth: '280px', borderColor: '#16214a' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#da2f35' }}></div>
                </div>
                <div className="aspect-[9/16] bg-gradient-to-br from-[#da2f35] via-[#ff6b35] to-[#f7931e] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2">🍚</div>
                    <div className="text-lg font-bold">El Meleh</div>
                    <div className="text-sm">de la Paella</div>
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
