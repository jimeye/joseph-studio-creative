import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="text-[#16214a]" style={{ backgroundColor: '#f9f7f2', borderTop: '2.5px dotted #16214a', borderBottom: '2.5px dotted #16214a', marginBottom: '1px' }}>
      <div className="container-custom py-4 px-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo et description */}
          <div className="pl-[5px]">
            <h3 className="text-sm mb-2 pl-[5px] whitespace-nowrap">
              joseph-creative-studio
            </h3>
            <p className="mb-4 max-w-md pl-[5px]" style={{ color: '#16214a' }}>
              Création de sites web ultra modernes.<br />
              Performance, design et SEO optimisés.
            </p>
          </div>

          {/* Services */}
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2 pl-[5px]">Services</h4>
            <ul className="space-y-1 pl-[5px]" style={{ color: '#16214a' }}>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>SEO & Marketing</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>Site web sur mesure</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>Site web express</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#16214a' }}>Booster un site web existant</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2">Nos Coordonnées</h4>
            <ul className="space-y-1 pl-[5px]" style={{ color: '#16214a' }}>
              <li>
                <a href="mailto:contact@josephstudiocreative.com" className="block hover:!text-red-600" style={{ color: '#16214a', cursor: 'pointer' }}>contact@josephstudiocreative.com</a>
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
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2">Réseaux sociaux</h4>
            <div className="flex space-x-4 mb-4 pl-[5px]">
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm pl-[5px]" style={{ color: '#16214a' }}>
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>Mentions légales</a>
              <a href="#" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>Politique de confidentialité</a>
              <a href="/cgv" className="hover:text-[#16214a] transition-colors" style={{ color: '#16214a' }}>CGV</a>
            </div>
          </div>
        </div>

        {/* Copyright centré sur toute la largeur */}
        <div className="text-xs mt-4 text-center" style={{ color: '#16214a', fontSize: '10px' }}>
          <a href="https://laboulette-ibiza.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#16214a' }}>©2025 <span style={{ fontFamily: 'Arial', fontWeight: 'normal' }}>JOSEPH-CREATIVE-STUDIO.COM</span><br className="md:hidden" /> | Powered by JOSEPH STUDIO creative | Tous droits réservés |</a>
        </div>

      </div>
    </footer>
    
    {/* Bandeau Aides Publiques */}
    <div className="py-8" style={{ backgroundColor: '#16214a' }}>
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#f9f7f2' }}>
            💰 Financement Aides Publiques
          </h3>
          <p className="text-lg" style={{ color: '#f9f7f2', textAlign: 'center' }}>
            Bénéficiez d'aides publiques pouvant couvrir jusqu'à<br className="md:hidden" /> 2000 € de votre projet web.<br />
            Nous faisons toutes les démarches pour vous.<br />
            Vous n'avez plus qu'à le partager.
          </p>
        </div>
      </div>
    </div>
    </>
  )
} 