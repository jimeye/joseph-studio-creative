import fr from '../locales/fr.json'
import en from '../locales/en.json'

const translations = {
  fr,
  en
}

export function getTranslation(locale = 'fr') {
  return translations[locale] || translations.fr
}

export function getText(translation, path) {
  return path.split('.').reduce((obj, key) => obj?.[key], translation) || ''
}

export function switchLanguage(currentLocale) {
  return currentLocale === 'fr' ? 'en' : 'fr'
} 