import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-[#16214a]" style={{ backgroundColor: '#fafafa', borderTop: '2.5px dotted #16214a', borderBottom: '2.5px dotted #16214a', marginBottom: '1px' }}>
      <div className="pt-8"></div>

      <div className="container-custom py-2 px-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo et description */}
          <div className="pl-[5px]">
            <h3 className="text-sm mb-2 pl-[5px] whitespace-nowrap">
              Jimmy Joseph Fellous
            </h3>
            <p className="mb-2 max-w-md pl-[5px]" style={{ color: '#16214a' }}>
              Création de sites web ultra modernes.<br />
              Performance, design et SEO optimisés.
            </p>
          </div>

          {/* Services */}
          <div className="pl-[5px] mb-4">
            <h4 className="text-xs mb-2 pl-[5px]">Services</h4>
            <ul className="space-y-1 pl-[5px]" style={{ color: '#16214a' }}>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>SEO & Marketing</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>Site web sur mesure</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>Freelance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pl-[5px] mb-4">
            <h4 className="text-xs mb-2">Mes Coordonnées</h4>
            <ul className="space-y-1 pl-[5px]" style={{ color: '#16214a' }}>
              <li>
                <a href="mailto:jimmyfellous@gmail.com" className="block hover:!text-red-600" style={{ color: '#16214a', cursor: 'pointer' }}>jimmyfellous@gmail.com</a>
              </li>
              <li>
                <a href="tel:+330608251223" className="block hover:!text-red-600" style={{ color: '#16214a', cursor: 'pointer' }}>+33 06 08 25 12 23</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=16+Boulevard+des+Filles+du+Calvaire+75011+Paris+France" target="_blank" rel="noopener noreferrer" className="block hover:!text-red-600" style={{ color: '#16214a', cursor: 'pointer' }}>16 Bld des Filles du Calvaire<br />75011 Paris, France</a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux et mentions légales */}
          <div className="pl-[5px] mb-4">
            <h4 className="text-xs mb-2">Réseaux sociaux</h4>
            <div className="flex space-x-4 mb-2 pl-[5px]">
              <a href="https://www.instagram.com/jimmyloveyou/" target="_blank" rel="noopener noreferrer" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/feed/?legoTrackingToken=30NfmlWqldVomNMsSBA9z0Kc3RBsCZzkTsCfn9xk6NBkDsCfmhLjmNBkDsCejAVejAZp6lQsSlRsmlirnlK9AVfilh9kQZgfnB2sClAsAZQpmtAqnsCt6VBt6VFnT9BqSlBsRZyrSFvcDpAon1EoSVRomMZp4BQpmtAqnsCc3RKrSBQqndLk7hBpShFtOoMbz0Zpn9LoRdOpOoZsC5gr6lisCsCfmhLjmNBkD9D9z0ZrCZFt6BPrR1MtmZOpOoVejAVejRApnhPpnlNpl9JtkVMtmZOpOpQr7lxpClAfmh9s7lLsCsCjAZ9l4BjjR0Zuk9OpmhOrOpQr7lxpClAfmh9t6VBrmtBsOpQrClQrCAZp4BQrSNP9DhItm5CpmgZp4BQtmZVomMCcDpAon1EoSVRomMZpmRxjClDon0Cq7hTrT9Dfmh9s71x9zcVdjAVczRAimVLqndOpnoCe3cSe38PdjgOfmh9tioScPlzdj0PozgTdPsJejAPoyQVdjsQbjoRcmcJdSdzcj8Re34Zp4BQu6lQrCZz" target="_blank" rel="noopener noreferrer" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Linkedin size={20} />
              </a>
            </div>

          </div>
        </div>

        {/* Copyright centré sur toute la largeur */}
        <div className="text-xs mt-2 text-center" style={{ color: '#16214a', fontSize: '10px' }}>
          <a href="https://jjf-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#16214a' }}>©2025 <span style={{ fontFamily: 'Arial', fontWeight: 'normal' }}>JIMMY JOSEPH FELLOUS</span><br className="md:hidden" /> | Powered by Me | Tous droits réservés |</a>
        </div>

      </div>
    </footer>
  )
} 