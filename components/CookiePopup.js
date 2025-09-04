'use client'
import { useState, useEffect } from 'react'
import { X, Cookie, Check } from 'lucide-react'

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Afficher le popup après 2 secondes
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsAccepted(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible || isAccepted) {
    return null
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={handleDecline}
      />
      
      {/* Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-50 p-6 border-t-2" style={{ 
          borderColor: '#16214a', 
          boxShadow: '0 -4px 0px #16214a' 
        }}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full" style={{ backgroundColor: '#16214a' }}>
                <Cookie size={20} style={{ color: '#f9f3f3' }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: '#16214a' }}>
                Cookies
              </h3>
            </div>
            <button
              onClick={handleDecline}
              className="p-1 hover:opacity-70 transition-opacity"
              style={{ color: '#16214a' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6 max-w-4xl mx-auto">
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#16214a' }}>
              Nous utilisons des cookies pour améliorer votre expérience de navigation, 
              analyser le trafic du site et personnaliser le contenu.
            </p>
            <p className="text-xs" style={{ color: '#16214a', opacity: 0.8 }}>
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 max-w-md mx-auto">
            <button
              onClick={handleAccept}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 text-sm font-bold border transition-all duration-300 rounded-lg"
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
              }}
            >
              <Check size={16} />
              Accepter
            </button>
            
            <button
              onClick={handleDecline}
              className="flex-1 py-2 px-4 text-sm font-bold border transition-all duration-300 rounded-lg"
              style={{ 
                color: '#16214a', 
                borderColor: '#16214a', 
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#16214a';
                e.target.style.color = '#f9f3f3';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#16214a';
              }}
            >
              Refuser
            </button>
          </div>

          {/* Links */}
          <div className="mt-4 text-center space-x-4">
            <a 
              href="/gestion-cookies" 
              className="text-xs underline hover:no-underline transition-all"
              style={{ color: '#16214a', opacity: 0.8 }}
            >
              Gérer les cookies
            </a>
            <a 
              href="/politique-confidentialite" 
              className="text-xs underline hover:no-underline transition-all"
              style={{ color: '#16214a', opacity: 0.8 }}
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
