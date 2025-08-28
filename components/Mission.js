"use client";

import React, { useRef, useEffect, useState } from 'react';

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
    <section ref={sectionRef} className="section-padding bg-official mt-0" style={{ marginTop: 0, paddingTop: 0 }}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cadre jaune avec la mission */}
          <div
            className={`bg-yellow-100 p-10 md:max-w-xl mx-auto border-2 mt-0 transition-transform duration-[1400ms] ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ boxShadow: '4px 4px 0px #16214a', marginTop: 0, paddingTop: 0, borderColor: '#16214a' }}
          >
            <div className="text-xl uppercase font-bold mb-4 mt-4" style={{ color: '#d92f35' }}>
              FORMATIONS
            </div>
            <div className="text-3xl font-bold mb-6" style={{ color: '#16214a', fontFamily: 'Newsreader', textAlign: 'justify' }}>
                              Notre mission est d'imaginer comment simplifier votre quotidien en choisissant les bons <span className="hero-title" style={{ fontSize: 'inherit', color: '#d92f35' }}>outils no code</span> que vous pourrez prendre en main facilement.
            </div>
            <button className="text-lg flex items-center gap-2 bg-[#f9f7f2] font-bold py-3 px-8 border-2 border-[#16214a] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:bg-[#ffff00]" style={{ boxShadow: '4px 4px 0px #16214a', color: '#16214a' }}>
              SE FORMER EN 1:1 AVEC UN EXPERT
            </button>
          </div>

          {/* Système solaire des outils no-code */}
          <div
            className={`relative w-full h-96 transition-transform duration-[1400ms] ease-out
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
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
                <img src="/images/notion-logo.svg" alt="Notion" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Notion</div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/zapier-logo.svg" alt="Zapier" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Zapier</div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/canva-logo.svg" alt="Canva" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Canva</div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/shopify-logo.svg" alt="Shopify" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Shopify</div>
              </div>
            </div>

            {/* Orbite 2 - 8 planètes (rotation plus rapide) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80" style={{ animationDuration: '20s', animation: 'flyOut 20s linear infinite' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/figma-logo.svg" alt="Figma" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Figma</div>
              </div>
              <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/framer-logo.svg" alt="Framer" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Framer</div>
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/livechat-logo.svg" alt="LiveChat" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>LiveChat</div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/acuity-logo.svg" alt="Acuity" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Acuity</div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/squarespace-logo.svg" alt="Squarespace" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>Squarespace</div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/beyable-logo.svg" alt="BEYABLE" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>BEYABLE</div>
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/wg-logo.svg" alt="WG" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>WG</div>
              </div>
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center" style={{ width: '80px', height: '80px' }}>
                <img src="/images/t-logo.svg" alt="T" className="w-8 h-8 mb-1" />
                <div className="text-xs font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk' }}>T</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 