"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Mission() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-official" style={{ marginTop: 0, paddingTop: '1rem', paddingBottom: '3rem', marginBottom: '0' }}>
      <div className="fluid-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Cadre jaune avec la mission */}
                      <div
              className="p-8 md:max-w-xl mx-auto border-2 mt-0 transition-all duration-1000 ease-out rounded-lg"
              style={{ 
                backgroundColor: 'transparent', 
                boxShadow: '4px 4px 0px #16214a', 
                marginTop: 0, 
                paddingTop: '0.8rem', 
                paddingBottom: '4.4rem', 
                borderColor: '#16214a',
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                opacity: isVisible ? 1 : 0
              }}
            >
            <div className="text-xl uppercase font-bold mb-4 mt-4 text-left" style={{ color: '#F20000 !important' }}>
              FORMATIONS
            </div>
            <div className="text-xl lg:text-2xl font-light mb-6" style={{ color: '#16214a', fontFamily: 'Newsreader', textAlign: 'justify' }}>
                              Notre mission est d'imaginer comment simplifier votre quotidien en choisissant les bons outils no code que vous pourrez prendre en main facilement.
            </div>
            <button 
              onClick={() => window.location.href = '/pricelist'}
              className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300 rounded-lg" 
              style={{ 
                boxShadow: '4px 4px 0px #16214a', 
                color: '#f9f3f3',
                borderColor: '#f9f3f3', 
                backgroundColor: '#16214a',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f9fafb';
                e.target.style.color = '#16214a';
                e.target.style.borderColor = '#16214a';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#16214a';
                e.target.style.color = '#f9f3f3';
                e.target.style.borderColor = '#f9f3f3';
              }}>
              SE FORMER EN 1:1 AVEC UN EXPERT
            </button>
          </div>

          {/* Système solaire des outils no-code */}
          <div
            className="relative w-full h-96 transition-all duration-1000 ease-out"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
              opacity: isVisible ? 1 : 0
            }}
          >
            {/* Soleil central - Logo JOSEPH STUDIO */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="rounded-full p-4 flex items-center justify-center" style={{ width: '100px', height: '100px', backgroundColor: '#f9f9f9', boxShadow: '0 0 20px rgba(249,249,249,0.8)', animation: 'earthSpin 90s linear infinite' }}>
                <div className="flex flex-col justify-center text-center" style={{ width: '80px', gap: '0', lineHeight: '0.8' }}>
                  <span className="text-sm font-bold" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '14px', letterSpacing: '0.1em' }}>JOSEPH</span>
                  <span className="text-sm font-bold" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '14px', letterSpacing: '0.1em' }}>STUDIO</span>
                  <span className="text-sm" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '14px', letterSpacing: '0.05em' }}>creative</span>
                </div>
              </div>
            </div>

            {/* Planètes en orbite - Outils no-code */}
            {/* Orbite 1 - 4 planètes (rotation lente) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48" style={{ animationDuration: '25s', animation: 'flyOut 25s linear infinite' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/notion-logo.svg" alt="Notion" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Notion</div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/zapier-logo.svg" alt="Zapier" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Zapier</div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/canva-logo.svg" alt="Canva" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Canva</div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/shopify-logo.svg" alt="Shopify" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Shopify</div>
              </div>
            </div>

            {/* Orbite 2 - 8 planètes (rotation plus rapide) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80" style={{ animationDuration: '20s', animation: 'flyOut 20s linear infinite' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/figma-logo.svg" alt="Figma" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Figma</div>
              </div>
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/framer-logo.svg" alt="Framer" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Framer</div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/livechat-logo.svg" alt="LiveChat" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>LiveChat</div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/acuity-logo.svg" alt="Acuity" width={64} height={64} className="w-16 h-16 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Acuity</div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/squarespace-logo.svg" alt="Squarespace" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Squarespace</div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/beyable-logo.svg" alt="BEYABLE" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>BEYABLE</div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/wg-logo.svg" alt="WG" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>WG</div>
              </div>
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <Image src="/images/t-logo.svg" alt="T" width={32} height={32} className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>T</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 