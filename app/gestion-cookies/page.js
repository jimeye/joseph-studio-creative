'use client'
import { useState } from 'react'
import { Cookie, Check, X, Settings, BarChart3, Target, Shield } from 'lucide-react'

export default function GestionCookiesPage() {
  const [cookies, setCookies] = useState({
    necessary: true, // Toujours activés
    analytics: false,
    marketing: false,
    preferences: false
  })

  const handleCookieChange = (type) => {
    if (type === 'necessary') return // Ne peut pas être désactivé
    setCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookies))
    localStorage.setItem('cookieConsent', 'customized')
    alert('Vos préférences de cookies ont été sauvegardées.')
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    setCookies(allAccepted)
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted))
    localStorage.setItem('cookieConsent', 'accepted')
    alert('Tous les cookies ont été acceptés.')
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    setCookies(onlyNecessary)
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary))
    localStorage.setItem('cookieConsent', 'declined')
    alert('Seuls les cookies nécessaires ont été conservés.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full" style={{ backgroundColor: '#16214a' }}>
              <Cookie size={24} style={{ color: '#f9f3f3' }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
              Gestion des Cookies
            </h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#16214a' }}>
            Contrôlez votre expérience en personnalisant vos préférences de cookies
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
            Qu'est-ce que les cookies ?
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a' }}>
            Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez notre site web. 
            Ils nous aident à améliorer votre expérience de navigation et à comprendre comment vous utilisez notre site.
          </p>
          <p className="text-sm" style={{ color: '#16214a', opacity: 0.8 }}>
            Conformément au RGPD, vous avez le droit de contrôler quels cookies sont utilisés.
          </p>
        </div>

        {/* Types de cookies */}
        <div className="space-y-6 mb-8">
          {/* Cookies nécessaires */}
          <div className="bg-gray-50 p-6 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#16214a' }}>
                  <Shield size={20} style={{ color: '#f9f3f3' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#16214a' }}>Cookies Nécessaires</h3>
                  <p className="text-sm" style={{ color: '#16214a', opacity: 0.8 }}>Toujours activés</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold" style={{ color: '#16214a' }}>Activé</span>
                <div className="w-12 h-6 rounded-full" style={{ backgroundColor: '#16214a' }}>
                  <div className="w-5 h-5 bg-white rounded-full ml-1 mt-0.5"></div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#16214a' }}>
              Ces cookies sont essentiels au fonctionnement du site web. Ils incluent les cookies de session, 
              de sécurité et de préférences de base. Ils ne peuvent pas être désactivés.
            </p>
          </div>

          {/* Cookies analytiques */}
          <div className="bg-gray-50 p-6 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#16214a' }}>
                  <BarChart3 size={20} style={{ color: '#f9f3f3' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#16214a' }}>Cookies Analytiques</h3>
                  <p className="text-sm" style={{ color: '#16214a', opacity: 0.8 }}>Google Analytics, statistiques</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieChange('analytics')}
                className="flex items-center gap-2"
              >
                <span className="text-sm font-semibold" style={{ color: '#16214a' }}>
                  {cookies.analytics ? 'Activé' : 'Désactivé'}
                </span>
                <div 
                  className={`w-12 h-6 rounded-full transition-colors ${cookies.analytics ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${cookies.analytics ? 'ml-7' : 'ml-1'} mt-0.5`}></div>
                </div>
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#16214a' }}>
              Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web 
              en collectant et rapportant des informations de manière anonyme.
            </p>
          </div>

          {/* Cookies marketing */}
          <div className="bg-gray-50 p-6 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#16214a' }}>
                  <Target size={20} style={{ color: '#f9f3f3' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#16214a' }}>Cookies Marketing</h3>
                  <p className="text-sm" style={{ color: '#16214a', opacity: 0.8 }}>Publicité ciblée, réseaux sociaux</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieChange('marketing')}
                className="flex items-center gap-2"
              >
                <span className="text-sm font-semibold" style={{ color: '#16214a' }}>
                  {cookies.marketing ? 'Activé' : 'Désactivé'}
                </span>
                <div 
                  className={`w-12 h-6 rounded-full transition-colors ${cookies.marketing ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${cookies.marketing ? 'ml-7' : 'ml-1'} mt-0.5`}></div>
                </div>
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#16214a' }}>
              Ces cookies sont utilisés pour afficher des publicités plus pertinentes pour vous et vos intérêts. 
              Ils peuvent également être utilisés pour limiter le nombre de fois que vous voyez une publicité.
            </p>
          </div>

          {/* Cookies de préférences */}
          <div className="bg-gray-50 p-6 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#16214a' }}>
                  <Settings size={20} style={{ color: '#f9f3f3' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#16214a' }}>Cookies de Préférences</h3>
                  <p className="text-sm" style={{ color: '#16214a', opacity: 0.8 }}>Langue, thème, paramètres</p>
                </div>
              </div>
              <button
                onClick={() => handleCookieChange('preferences')}
                className="flex items-center gap-2"
              >
                <span className="text-sm font-semibold" style={{ color: '#16214a' }}>
                  {cookies.preferences ? 'Activé' : 'Désactivé'}
                </span>
                <div 
                  className={`w-12 h-6 rounded-full transition-colors ${cookies.preferences ? 'bg-blue-600' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${cookies.preferences ? 'ml-7' : 'ml-1'} mt-0.5`}></div>
                </div>
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#16214a' }}>
              Ces cookies permettent au site web de se souvenir des choix que vous faites (comme votre nom d'utilisateur, 
              langue ou région) et fournissent des fonctionnalités améliorées et plus personnelles.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAcceptAll}
            className="flex items-center justify-center gap-2 py-3 px-6 text-lg font-bold border transition-all duration-300 rounded-lg"
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
            <Check size={20} />
            Accepter Tout
          </button>

          <button
            onClick={handleSavePreferences}
            className="flex items-center justify-center gap-2 py-3 px-6 text-lg font-bold border transition-all duration-300 rounded-lg"
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
            <Settings size={20} />
            Sauvegarder les Préférences
          </button>

          <button
            onClick={handleRejectAll}
            className="flex items-center justify-center gap-2 py-3 px-6 text-lg font-bold border transition-all duration-300 rounded-lg"
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
            <X size={20} />
            Rejeter Tout
          </button>
        </div>

        {/* Informations légales */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a', border: '2px solid #16214a' }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#16214a' }}>
            Vos Droits
          </h3>
          <div className="space-y-2 text-sm" style={{ color: '#16214a' }}>
            <p>• Vous avez le droit de retirer votre consentement à tout moment</p>
            <p>• Vous pouvez modifier vos préférences de cookies à tout moment</p>
            <p>• Vous avez le droit d'accès, de rectification et de suppression de vos données</p>
            <p>• Vous pouvez nous contacter à : <a href="mailto:info@josephstudiocreative.com" className="underline hover:no-underline">info@josephstudiocreative.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
