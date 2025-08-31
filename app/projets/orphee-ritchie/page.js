'use client'

import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function OrpheeRitchieProject() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2' }}>
      {/* Header */}
      <div className="bg-[#f9f7f2] border-b-2" style={{ borderColor: '#16214a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-normal tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a', lineHeight: '0.9' }}>
                Un site sur-mesure pour Orphée Ritchie
              </h1>
              <p className="text-base mt-2" style={{ color: '#16214a' }}>Cabinet de psychologie & psychothérapie</p>
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
                Psychologue, psychothérapeute, diplômée de l'Université Paris X Nanterre, bilingue anglaise, Orphée Ritchie accueille les patients dans son cabinet de Saint Jean de Luz, afin de mettre en place une prise en charge ciblée et intégrative, adaptée à chaque demande et spécificité.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#16214a' }}>
                La psychothérapie se déroule en deux temps : l'évaluation dès le premier entretien pour définir la nature des difficultés psychologiques, puis le démarrage de la psychothérapie avec un nombre de séances adapté aux objectifs fixés.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#16214a' }}>
                Dans les thérapies cognitives et comportementales, le travail cible trois aspects : les pensées-cognitions, les émotions et les comportements, permettant une évolution objective de la situation du patient.
              </p>
            </div>

            {/* Key Features & Benefits */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Approche thérapeutique
              </h3>
              <ul className="space-y-3">
                {[
                  "Thérapies cognitives et comportementales",
                  "Prise en charge ciblée et intégrative",
                  "Évaluation personnalisée",
                  "Suivi adapté aux objectifs",
                  "Cabinet bilingue français/anglais",
                  "Saint Jean de Luz"
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
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech, index) => (
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
                href="https://orphee-ritchie-psychologue.vercel.app/"
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

          {/* Right Section - Visual Mockups */}
          <div className="space-y-8">
            {/* Desktop Mockup */}
            <div className="bg-[#f9f7f2] border-2 p-6" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#16214a' }}>Vue Desktop</h3>
              <div className="bg-gray-100 p-4">
                {/* Computer Frame */}
                <div className="bg-gray-800 p-2 rounded-t-lg">
                  <div className="bg-[#f9f7f2] border-2 border-gray-300 h-80 flex flex-col overflow-hidden">
                    <div className="w-full h-full flex flex-col">
                      {/* Header Navigation */}
                      <div className="w-full h-12 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-6">
                        <div className="text-sm font-bold" style={{ color: '#16214a' }}>ORPHÉE RITCHIE</div>
                        <div className="flex items-center space-x-6 text-xs">
                          <span style={{ color: '#16214a' }}>ACCUEIL</span>
                          <span style={{ color: '#16214a' }}>THÉRAPIE</span>
                          <span style={{ color: '#16214a' }}>RENDEZ-VOUS</span>
                          <span style={{ color: '#16214a' }}>CONTACT</span>
                        </div>
                      </div>
                      {/* Hero Section */}
                      <div className="flex-1 relative">
                        <div className="w-full h-full bg-gradient-to-br from-green-50 via-emerald-50 to-white flex items-center justify-center relative">
                          {/* Psychology Elements */}
                          <div className="absolute top-4 left-4 w-16 h-16 bg-green-200 rounded-full opacity-60"></div>
                          <div className="absolute top-8 right-8 w-12 h-12 bg-emerald-300 rounded-full opacity-40"></div>
                          <div className="absolute bottom-8 left-8 w-20 h-20 bg-green-100 rounded-full opacity-30"></div>
                          <div className="absolute bottom-4 right-4 w-14 h-14 bg-emerald-200 rounded-full opacity-50"></div>
                          
                          {/* Text Overlay */}
                          <div className="absolute bottom-6 left-6 text-[#16214a] z-10">
                            <h2 className="text-2xl font-bold mb-2">Orphée Ritchie</h2>
                            <p className="text-sm opacity-90">Psychologue</p>
                            <p className="text-xs opacity-75">Saint Jean de Luz</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <div className="w-full h-full flex flex-col">
                        {/* Header */}
                        <div className="w-full h-10 bg-[#f9f7f2] border-b border-gray-200 flex items-center justify-between px-3">
                          <div className="text-xs font-bold" style={{ color: '#16214a' }}>ORPHÉE</div>
                          <div className="w-6 h-6 flex flex-col justify-center">
                            <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-4 h-0.5 bg-gray-600"></div>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 relative">
                          <div className="w-full h-full bg-gradient-to-br from-green-50 to-white flex items-center justify-center relative">
                            {/* Psychology Elements */}
                            <div className="absolute top-4 left-4 w-10 h-10 bg-green-200 rounded-full opacity-50"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 bg-emerald-300 rounded-full opacity-40"></div>
                            
                            {/* Text Center */}
                            <div className="absolute inset-0 flex items-center justify-center text-center">
                              <div>
                                <h3 className="text-sm font-bold mb-1 text-[#16214a]">Orphée Ritchie</h3>
                                <p className="text-xs opacity-90 text-[#16214a]">Psychologue</p>
                                <p className="text-xs opacity-75 text-[#16214a]">Saint Jean de Luz</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
