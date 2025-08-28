import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="text-[#f9f7f2]" style={{ backgroundColor: '#16214a' }}>
      <div className="container-custom py-4 px-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo et description */}
          <div className="pl-[5px]">
            <h3 className="text-sm mb-2 pl-[5px] whitespace-nowrap">
              joseph-studio-creative
            </h3>
            <p className="mb-4 max-w-md pl-[5px]" style={{ color: '#f9f9f9' }}>
              Création de sites web ultra modernes.<br />
              Performance, design et SEO optimisés.
            </p>
          </div>

          {/* Services */}
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2 pl-[5px]">Services</h4>
            <ul className="space-y-1 pl-[5px]" style={{ color: '#f9f9f9' }}>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#f9f9f9' }}>SEO & Marketing</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#f9f9f9' }}>Site web sur mesure</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#f9f9f9' }}>Site web express</a></li>
              <li><a href="#services" className="hover:!text-red-600 transition-colors" style={{ color: '#f9f9f9' }}>Booster un site web existant</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2">Nos Coordonnées</h4>
            <ul className="space-y-1 text-gray-300 pl-[5px]">
              <li>
                <a href="mailto:contact@studio-joseph-creative.com" className="block hover:!text-red-600" style={{ color: '#ffffff', cursor: 'pointer' }}>contact@studio-joseph-creative.com</a>
              </li>
              <li>
                <a href="tel:+330608251223" className="block hover:!text-red-600" style={{ color: '#ffffff', cursor: 'pointer' }}>+33 06 08 25 12 23</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=16+Boulevard+des+Filles+du+Calvaire+75011+Paris+France" target="_blank" rel="noopener noreferrer" className="block hover:!text-red-600" style={{ color: '#ffffff', cursor: 'pointer' }}>16 Bld des Filles du Calvaire<br />75011 Paris, France</a>
              </li>

            </ul>
          </div>

          {/* Réseaux sociaux et mentions légales */}
          <div className="pl-[5px] mb-8">
            <h4 className="text-xs mb-2">Réseaux sociaux</h4>
            <div className="flex space-x-4 mb-4 pl-[5px]">
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm pl-[5px]" style={{ color: '#f9f9f9' }}>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>Mentions légales</a>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>Politique de confidentialité</a>
              <a href="#" className="hover:text-[#f9f7f2] transition-colors" style={{ color: '#f9f9f9' }}>CGV</a>
            </div>
          </div>
        </div>

        {/* Copyright centré sur toute la largeur */}
        <div className="text-xs mt-4 text-center" style={{ color: '#f9f9f9', fontSize: '10px' }}>
          <a href="https://laboulette-ibiza.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f9f9f9' }}>©2025 <span style={{ fontFamily: 'Arial', fontWeight: 'normal' }}>JOSEPH-STUDIO-CREATIVE.COM</span><br className="md:hidden" /> | Powered by JOSEPH STUDIO creative | Tous droits réservés |</a>
        </div>

      </div>
    </footer>
    
    {/* Bandeau Aides Publiques */}
    <div className="bg-[#f9f7f2] py-8 border-t-2 border-b-2" style={{ borderColor: '#16214a' }}>
      <div className="container-custom">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
            💰 Financement Aides Publiques
          </h3>
          <p className="text-lg" style={{ color: '#16214a', textAlign: 'center' }}>
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