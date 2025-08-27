import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'
import { structuredData, localBusinessData, faqData } from './structured-data'

export const metadata = {
  title: 'JOSEPH STUDIO CREATIVE - Site internet dernière génération à 1€ | Création Web Next.js/React',
  description: 'Création de sites web Next.js/React ultra modernes avec financement d\'aides publiques inclus. Performance, design et SEO optimisés. Maintenance 1 an incluse. Sites web à partir de 1€ HT.',
  keywords: 'création site web, Next.js, React, développement web, aides publiques, site internet 1€, SEO, performance, design moderne, maintenance site web, France',
  authors: [{ name: 'JOSEPH STUDIO CREATIVE' }],
  creator: 'JOSEPH STUDIO CREATIVE',
  publisher: 'JOSEPH STUDIO CREATIVE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studio-joseph-creative.com'),
  alternates: {
    canonical: '/',
  },
      openGraph: {
      title: 'JOSEPH STUDIO CREATIVE - Site internet dernière génération à 1€',
    description: 'Création de sites web Next.js/React ultra modernes avec financement d\'aides publiques inclus. Performance, design et SEO optimisés.',
    url: 'https://studio-joseph-creative.com',
          siteName: 'JOSEPH STUDIO CREATIVE',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JOSEPH STUDIO CREATIVE - Création de sites web modernes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
          title: 'JOSEPH STUDIO CREATIVE - Site internet dernière génération à 1€',
    description: 'Création de sites web Next.js/React ultra modernes avec financement d\'aides publiques inclus.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-verification-yandex',
    yahoo: 'votre-code-verification-yahoo',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
} 