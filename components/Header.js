'use client'
import { useState } from 'react'
import { Menu, X, Search, User, ShoppingCart, ChevronDown, Square } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-gray-50" style={{ paddingBottom: '1px', borderTop: '1px solid #16214a', borderBottom: '1px solid #16214a' }}>
        <div className="fluid-container">
          <div className="flex items-center pt-1 pb-0 px-2">
                                    {/* Logo */}
                        <a href="/" className="flex flex-col justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ width: '120px', gap: '-25px', lineHeight: '0.8', alignItems: 'center' }}>
                          <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '18px', letterSpacing: '0.16em', display: 'block', width: '120px' }}>JOSEPH</span>
                          <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '2.0', color: '#ff0000', fontSize: '18px', letterSpacing: '0.21em', display: 'block', width: '180px', marginTop: '-10px' }}>STUDIO</span>
                          <span className="text-lg font-bold text-center" style={{ fontFamily: 'Arial', lineHeight: '0.8', color: '#16214a', fontSize: '18px', letterSpacing: '0.03em', display: 'block', width: '120px', marginTop: '-10px' }}>CREATIVE</span>
                        </a>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-4 ml-8" style={{ lineHeight: '-0.2' }}>
              <a href="#services" className="hover:text-accent transition-colors flex items-center text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                                  Services <ChevronDown size={20} className="ml-1" />
                </a>
                <a href="#pricing" className="hover:text-accent transition-colors flex items-center text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  Ressources <ChevronDown size={20} className="ml-1" />
                </a>
                <a href="/realisations" className="hover:text-accent transition-colors flex items-center text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  Réalisations <ChevronDown size={20} className="ml-1" />
                </a>
                <a href="/a-propos" className="hover:text-accent transition-colors flex items-center text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  À propos <ChevronDown size={20} className="ml-1" />
                </a>
                <a href="/contact" className="hover:text-accent transition-colors text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  Contact
                </a>
            </nav>

            {/* Right-side Icons/Elements */}
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              <span className="text-3xl cursor-pointer">🍅</span>
              <Search size={28} className="cursor-pointer hover:text-accent" style={{ color: '#16214a' }} />
              <User size={28} className="cursor-pointer hover:text-accent" style={{ color: '#16214a' }} />
              <div className="flex items-center cursor-pointer hover:text-accent text-lg" style={{ color: '#16214a' }}>
                <span>Français</span>
                <ChevronDown size={20} className="ml-1" />
              </div>
              <ShoppingCart size={28} className="cursor-pointer hover:text-accent" style={{ color: '#16214a' }} />
            </div>

            {/* Mobile Icons and Menu Button */}
            <div className="md:hidden flex items-center space-x-4 ml-auto">
              <span className="text-3xl cursor-pointer">🍅</span>
              <User size={28} className="cursor-pointer hover:text-accent" style={{ color: '#16214a' }} />
              <ShoppingCart size={28} className="cursor-pointer hover:text-accent" style={{ color: '#16214a' }} />
                                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger-btn focus:outline-none text-3xl transition-transform duration-300" style={{ color: '#16214a', transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                            ➕
                          </button>
            </div>
          </div>

          {/* Mobile Menu - Animation de gauche à droite */}
          <div 
            className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-50 transition-transform duration-500 ease-in-out transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ zIndex: 1000 }}
          >
            {/* Bouton fermer en haut à droite */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl hover:opacity-70 transition-opacity"
                style={{ color: '#16214a' }}
              >
                ✕
              </button>
            </div>
            
            {/* Contenu du menu */}
            <nav className="px-8 py-8 space-y-6">
              <a href="#services" className="block text-xl hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#pricing" className="block text-xl hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Ressources
              </a>
              <a href="/realisations" className="block text-xl hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Réalisations
              </a>
              <a href="/a-propos" className="block text-xl hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                À propos
              </a>
              <a href="/contact" className="block text-xl hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              
              {/* Icônes supplémentaires */}
              <div className="flex items-center space-x-6 mt-8 pt-8 border-t" style={{ borderColor: '#e5e7eb' }}>
                <Search size={28} className="cursor-pointer hover:opacity-70 transition-opacity" style={{ color: '#16214a' }} />
                <div className="flex items-center cursor-pointer text-lg hover:opacity-70 transition-opacity" style={{ color: '#16214a' }}>
                  <span>Français</span>
                  <ChevronDown size={20} className="ml-1" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
} 