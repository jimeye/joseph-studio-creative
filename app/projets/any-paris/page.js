'use client'

import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function AnyParisProject() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f7f2' }}>
      {/* Header */}
      <div className="bg-[#f9f7f2] border-b-2" style={{ borderColor: '#16214a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base md:text-lg lg:text-xl font-normal tracking-tight hero-title" style={{ wordSpacing: '-0.1em', letterSpacing: '-0.05em', color: '#16214a', lineHeight: '0.9' }}>
                Un site sur-mesure pour A | N | Y
              </h1>
              <p className="text-base mt-2" style={{ color: '#16214a' }}>Agence créative design</p>
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
                Fondée par Johann Roux et Julie Elbaz en 2006, l'agence ANY déploie son savoir-faire dans les domaines du luxe, de la mode, de la beauté ou de la joaillerie. Basée à Paris et à Londres, l'agence ANY se plait à traduire une vision, enrichir et mettre à l'épreuve du réel, l'identité, les contenus et les valeurs d'une marque. Chaque projet est une réalisation sur-mesure et un défi pour l'agence.
              </p>
            </div>

            {/* Key Features & Benefits */}
            <div>
              <h3 className="text-base font-bold mb-4" style={{ color: '#16214a' }}>
                Fonctionnalités clés
              </h3>
              <ul className="space-y-3">
                {[
                  "Événements luxe sur-mesure",
                  "Design spatial et expérientiel",
                  "Production mondiale",
                  "Expériences exclusives",
                  "Identité de marque",
                  "Contenus créatifs"
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
                href="https://any.paris/"
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
                        <div className="text-sm font-bold" style={{ color: '#16214a' }}>A | N | Y</div>
                        <div className="flex items-center space-x-6 text-xs">
                          <span style={{ color: '#16214a' }}>MUSIC</span>
                          <span style={{ color: '#16214a' }}>EXPERIENCE</span>
                          <span style={{ color: '#16214a' }}>ABOUT</span>
                          <span style={{ color: '#16214a' }}>EVENTS</span>
                          <span style={{ color: '#16214a' }}>RETAIL</span>
                          <span style={{ color: '#16214a' }}>DIGITAL</span>
                        </div>
                      </div>
                      {/* Hero Section */}
                      <div className="flex-1 relative">
                        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center relative">
                          {/* Luxury Event Elements */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                          <div className="absolute top-4 left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-60"></div>
                          <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full opacity-40"></div>
                          <div className="absolute bottom-8 left-8 w-24 h-24 bg-orange-500 rounded-full opacity-30"></div>
                          <div className="absolute bottom-4 right-4 w-18 h-18 bg-orange-400 rounded-full opacity-50"></div>
                          
                          {/* Text Overlay */}
                          <div className="absolute bottom-6 left-6 text-[#f9f7f2] z-10">
                            <h2 className="text-3xl font-bold mb-2">A | N | Y</h2>
                            <p className="text-sm opacity-90">Creative design agency</p>
                            <p className="text-xs opacity-75">Luxury events & experiences</p>
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
                          <div className="text-xs font-bold" style={{ color: '#16214a' }}>A | N | Y</div>
                          <div className="w-6 h-6 flex flex-col justify-center">
                            <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-4 h-0.5 bg-gray-600 mb-1"></div>
                            <div className="w-4 h-0.5 bg-gray-600"></div>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 relative">
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                            {/* Luxury Elements */}
                            <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-50"></div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-400 rounded-full opacity-40"></div>
                            
                            {/* Text Center */}
                            <div className="absolute inset-0 flex items-center justify-center text-center">
                              <div>
                                <h3 className="text-sm font-bold mb-1 text-[#f9f7f2]">A | N | Y</h3>
                                <p className="text-xs opacity-90 text-[#f9f7f2]">Creative Agency</p>
                                <p className="text-xs opacity-75 text-[#f9f7f2]">Luxury Events</p>
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
