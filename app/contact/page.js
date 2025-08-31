'use client';

import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-4 relative" style={{ zIndex: 1000 }}>
      {/* Main Content */}
      <main className="w-full px-8 relative" style={{ zIndex: 1001 }}>
        {/* Main Content Section */}
        <div className="w-full">

          {/* Contact Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              Contact
            </h3>
            
            <div className="bg-[#fafafa] p-8 rounded-lg relative border-2" style={{ position: 'relative', borderColor: '#d92f35' }}>
              
              {/* Cadre d'étoiles - 1 ligne continue */}
              <div className="absolute inset-2 pointer-events-none">
                {Array.from({ length: 160 }).map((_, i) => {
                  // Calculer le bon nombre d'étoiles pour chaque côté
                  // Si on a 40 étoiles sur le haut (100% de largeur), 
                  // on doit avoir proportionnellement moins sur les côtés
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
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      ★
                    </span>
                  );
                })}
              </div>

              <div className="relative z-10">
                {/* Présentation */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                    Jimmy Joseph Fellous
                  </h4>
                  <p className="text-lg mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Création de sites web ultra modernes.<br />
                    Performance, design et SEO optimisés.
                  </p>
                </div>

                {/* Services */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold mb-4" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Services
                  </h5>
                  <ul className="space-y-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    <li>• SEO & Marketing</li>
                    <li>• Site web sur mesure</li>
                    <li>• Freelance</li>
                  </ul>
                </div>

                {/* Coordonnées */}
                <div className="mb-8">
                  <h5 className="text-lg font-bold mb-4" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Mes Coordonnées
                  </h5>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail size={20} style={{ color: '#d92f35' }} />
                      <a 
                        href="mailto:jimmyfellous@gmail.com" 
                        className="hover:!text-red-600 transition-colors" 
                        style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}
                      >
                        jimmyfellous@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={20} style={{ color: '#d92f35' }} />
                      <a 
                        href="tel:+330608251223" 
                        className="hover:!text-red-600 transition-colors" 
                        style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}
                      >
                        +33 06 08 25 12 23
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin size={20} style={{ color: '#d92f35' }} />
                      <a 
                        href="https://maps.google.com/?q=16+Boulevard+des+Filles+du+Calvaire+75011+Paris+France" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:!text-red-600 transition-colors" 
                        style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}
                      >
                        16 Bld des Filles du Calvaire<br />
                        75011 Paris, France
                      </a>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <h5 className="text-lg font-bold mb-4" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Réseaux sociaux
                  </h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/jimmyloveyou/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#d92f35] transition-colors p-2 border-2 rounded-lg" 
                      style={{ color: '#16214a', borderColor: '#16214a' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#16214a';
                        e.target.style.color = '#fafafa';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#16214a';
                      }}
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/feed/?legoTrackingToken=30NfmlWqldVomNMsSBA9z0Kc3RBsCZzkTsCfn9xk6NBkDsCfmhLjmNBkDsCejAVejAZp6lQsSlRsmlirnlK9AVfilh9kQZgfnB2sClAsAZQpmtAqnsCt6VBt6VFnT9BqSlBsRZyrSFvcDpAon1EoSVRomMZp4BQpmtAqnsCc3RKrSBQqndLk7hBpShFtOoMbz0Zpn9LoRdOpOoZsC5gr6lisCsCfmhLjmNBkD9D9z0ZrCZFt6BPrR1MtmZOpOoVejAVejRApnhPpnlNpl9JtkVMtmZOpOpQr7lxpClAfmh9s7lLsCsCjAZ9l4BjjR0Zuk9OpmhOrOpQr7lxpClAfmh9t6VBrmtBsOpQrClQrCAZp4BQrSNP9DhItm5CpmgZp4BQtmZVomMCcDpAon1EoSVRomMZpmRxjClDon0Cq7hTrT9Dfmh9s71x9zcVdjAVczRAimVLqndOpnoCe3cSe38PdjgOfmh9tioScPlzdj0PozgTdPsJejAPoyQVdjsQbjoRcmcJdSdzcj8Re34Zp4BQu6lQrCZz" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#d92f35] transition-colors p-2 border-2 rounded-lg" 
                      style={{ color: '#16214a', borderColor: '#16214a' }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#16214a';
                        e.target.style.color = '#fafafa';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#16214a';
                      }}
                    >
                      <Linkedin size={24} />
                    </a>
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
