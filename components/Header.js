'use client'
import { useState } from 'react'
import { Menu, X, Search, User, ShoppingCart, ChevronDown, Square } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Main Header */}
      <header className="bg-[#fafafa] shadow-lg sticky top-0 z-50" style={{ backgroundColor: '#fafafa', paddingBottom: '1px', borderTop: '2.5px dotted #16214a', borderBottom: '2.5px dotted #16214a' }}>
        <div className="fluid-container">
          <div className="flex items-center justify-center pt-1 pb-0 px-2 relative">
            {/* Logo - Center */}
            <a href="/" className="flex flex-col justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ width: '200px', gap: '2px', lineHeight: '0.9', alignItems: 'center' }}>
              <span className="text-lg font-bold text-center" style={{ fontFamily: 'Sharp Grotesk Bold 24', lineHeight: '0.9', color: '#16214a', fontSize: '16px', letterSpacing: '0.05em', display: 'block', width: '200px' }}>Jimmy Joseph Fellous</span>
              <span className="text-sm text-center" style={{ fontFamily: 'Sharp Grotesk Medium 20', lineHeight: '0.9', color: '#d92f35', fontSize: '12px', letterSpacing: '0.05em', display: 'block', width: '200px', marginTop: '2px' }}>Full Stack Dev</span>
            </a>

            {/* Navigation Desktop - Right */}
            <nav className="hidden md:flex items-center space-x-4 absolute right-4" style={{ lineHeight: '-0.2' }}>
                <a href="/" className="hover:text-accent transition-colors text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  Home
                </a>
                <a href="/my-story" className="hover:text-accent transition-colors text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  My Story
                </a>
                <a href="/my-works" className="hover:text-accent transition-colors text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  My Works
                </a>
                <a href="/contact" className="hover:text-accent transition-colors text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }}>
                  Contact
                </a>
                <div className="flex items-center cursor-pointer hover:text-accent text-sm" style={{ color: '#16214a' }}>
                  <span>Français</span>
                  <ChevronDown size={16} className="ml-1" />
                </div>
            </nav>

            {/* Mobile Menu Button - Right */}
            <div className="md:hidden absolute right-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger-btn focus:outline-none text-3xl transition-transform duration-300" style={{ color: '#16214a', transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                ➕
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-[#fafafa] py-4 px-6 space-y-4 text-sm">
              <a href="/" className="block hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="/my-story" className="block hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                My Story
              </a>
              <a href="/my-works" className="block hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                My Works
              </a>
              <a href="/contact" className="block hover:text-accent transition-colors" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Bold 24', fontWeight: '700' }} onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              {/* Add mobile versions of the remaining icons */}
              <div className="flex items-center space-x-4 mt-4 justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center cursor-pointer text-lg" style={{ color: '#16214a' }}>
                    <span>Français</span>
                    <ChevronDown size={20} className="ml-1" />
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
} 