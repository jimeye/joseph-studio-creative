'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { getTranslation } from '../utils/i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr')
  const [translation, setTranslation] = useState(getTranslation('fr'))

  useEffect(() => {
    // Récupérer la langue depuis localStorage si disponible
    const savedLocale = localStorage.getItem('locale')
    if (savedLocale) {
      setLocale(savedLocale)
      setTranslation(getTranslation(savedLocale))
    }
  }, [])

  const changeLanguage = (newLocale) => {
    setLocale(newLocale)
    setTranslation(getTranslation(newLocale))
    localStorage.setItem('locale', newLocale)
  }

  const value = {
    locale,
    translation,
    changeLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 