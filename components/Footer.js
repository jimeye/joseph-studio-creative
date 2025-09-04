import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* Footer Principal */}
      <footer className="text-[#16214a] bg-gray-50" style={{ borderTop: '1px solid #16214a', borderBottom: '1px solid #16214a', marginBottom: '1px' }}>


        <div className="container-custom py-4 px-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Logo et description */}
            <div className="text-left">
              <div className="flex flex-col justify-center cursor-pointer hover:opacity-80 transition-opacity mb-2" style={{ width: '120px', gap: '-25px', lineHeight: '0.8', alignItems: 'center' }}>
                <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '18px', letterSpacing: '0.16em', display: 'block', width: '120px' }}>JOSEPH</span>
                <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '2.0', color: '#ff0000', fontSize: '18px', letterSpacing: '0.21em', display: 'block', width: '180px', marginTop: '-10px' }}>STUDIO</span>
                <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '18px', letterSpacing: '0.03em', display: 'block', width: '120px', marginTop: '-10px' }}>CREATIVE</span>
              </div>
              <p className="mb-2 max-w-md" style={{ color: '#16214a' }}>
                Création de sites web ultra modernes.<br />
                Performance, design et SEO optimisés.
              </p>
            </div>

            {/* Services */}
            <div className="text-left mb-4">
              <ul className="space-y-1" style={{ color: '#16214a' }}>
                <li><a href="#services" className="hover:!text-red-600 transition-colors">SEO & Marketing</a></li>
                <li><a href="#services" className="hover:!text-red-600 transition-colors">Site web sur mesure</a></li>
                <li><a href="#services" className="hover:!text-red-600 transition-colors">Site web express</a></li>
                <li><a href="#services" className="hover:!text-red-600 transition-colors">Booster un site web existant</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-left mb-4">
              <ul className="space-y-1" style={{ color: '#16214a' }}>
                <li>
                  <a href="mailto:info@josephstudiocreative.com" className="block hover:!text-red-600 cursor-pointer">info@JScreative.com</a>
                </li>
                <li>
                  <a href="tel:+330608251223" className="block hover:!text-red-600 cursor-pointer">+33 06 08 25 12 23</a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=16+Boulevard+des+Filles+du+Calvaire+75011+Paris+France" target="_blank" rel="noopener noreferrer" className="block hover:!text-red-600 cursor-pointer">16 Bld des Filles du Calvaire<br />75011 Paris, France</a>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux et mentions légales */}
            <div className="text-left mb-4">
              <div className="flex space-x-4 mb-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors" style={{ color: '#16214a' }}>
                  <Facebook size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors" style={{ color: '#16214a' }}>
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/jimmyloveyou/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors" style={{ color: '#16214a' }}>
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/feed/?legoTrackingToken=30NfmlWqldVomNMsSBA9z0Kc3RBsCZzkTsCfn9xk6NBkDsCfmhLjmNBkDsCejAVejAZp6lQsSlRsmlirnlK9AVfilh9kQZgfnB2sClAsAZQpmtAqnsCt6VBt6VFnT9BqSlBsRZyrSFvcDpAon1EoSVRomMZp4BQpmtAqnsCc3RKrSBQqndLk7hBpShFtOoMbz0Zpn9LoRdOpOoZsC5gr6lisCsCfmhLjmNBkD9D9z0ZrCZFt6BPrR1MtmZOpOoVejAVejRApnhPpnlNpl9JtkVMtmZOpOpQr7lxpClAfmh9s7lLsCsCjAZ9l4BjjR0Zuk9OpmhOrOpQr7lxpClAfmh9t6VBrmtBsOpQrClQrCAZp4BQrSNP9DhItm5CpmgZp4BQtmZVomMCcDpAon1EoSVRomMZpmRxjClDon0Cq7hTrT9Dfmh9s71x9zcVdjAVczRAimVLqndOpnoCe3cSe38PdjgOfmh9tioScPlzdj0PozgTdPsJejAPoyQVdjsQbjoRcmcJdSdzcj8Re34Zp4BQu6lQrCZz" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors" style={{ color: '#16214a' }}>
                  <Linkedin size={20} />
                </a>
              </div>
              <ul className="space-y-1" style={{ color: '#16214a' }}>
                <li><a href="/mentions-legales" className="hover:!text-red-600 transition-colors">Mentions légales</a></li>
                <li><a href="/politique-confidentialite" className="hover:!text-red-600 transition-colors">Politique de confidentialité</a></li>
                <li><a href="/cgv" className="hover:!text-red-600 transition-colors">CGV</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright centré sur toute la largeur */}
          <div className="text-xs mt-2 text-center" style={{ color: '#16214a', fontSize: '18px' }}>
            ©2025 JOSEPH-STUDIO-CREATIVE | Powered by US | Tous droits réservés |
          </div>
        </div>
      </footer>

      {/* Bandeau Aides Publiques */}
      <div className="py-8 border-b-2 bg-gray-50" style={{ borderColor: '#16214a' }}>
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-3xl mr-3" style={{ color: '#fbbf24' }}>$</span>
              <h3 className="text-2xl font-bold" style={{ color: '#16214a' }}>
                Financement Aides Publiques
              </h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-2" style={{ color: '#16214a' }}>
              <p className="text-lg font-semibold">
                Bénéficiez d'aides publiques pouvant couvrir jusqu'à 2000 € de votre projet web.
              </p>
              <p className="text-base">
                Nous faisons toutes les démarches pour vous.
              </p>
              <p className="text-base font-semibold">
                Vous n'avez plus qu'à le partager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 