export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JOSEPH STUDIO CREATIVE",
  "url": "https://joseph-creative-studio.com",
  "logo": "https://joseph-creative-studio.com/logo.png",
  "description": "Création de sites web Next.js/React ultra modernes avec financement d'aides publiques inclus. Performance, design et SEO optimisés.",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "16 Boulevard des Filles du Calvaire",
    "addressLocality": "Paris",
    "postalCode": "75011",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.linkedin.com/company/josephstudiocreative",
    "https://www.facebook.com/josephstudiocreative"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "France"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de création web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site web express",
          "description": "Création de site web en 1 journée intensive",
          "price": "1",
          "priceCurrency": "EUR"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site web sur mesure",
          "description": "Site web entièrement personnalisé",
          "price": "1800",
          "priceCurrency": "EUR"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
      "name": "JOSEPH STUDIO CREATIVE",
  "description": "Création de sites web Next.js/React ultra modernes",
  "url": "https://joseph-creative-studio.com",
  "telephone": "+33 06 08 25 12 23",
  "email": "contact@josephstudiocreative.com",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": "France",
  "serviceType": "Web Development, Web Design, SEO",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site web express à 1€ HT",
          "description": "Site web créé en 1 journée avec aides publiques"
        }
      }
    ]
  }
};

export const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionnent les aides publiques pour la création de site web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les aides publiques peuvent couvrir jusqu'à 2000€ de votre projet web. Nous vous accompagnons dans toutes les démarches administratives."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai de création d'un site web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour un site express : 1 journée intensive. Pour un site sur mesure : 2-4 semaines selon la complexité."
      }
    },
    {
      "@type": "Question",
      "name": "La maintenance est-elle incluse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, la maintenance est incluse pendant 1 an pour tous nos sites web."
      }
    }
  ]
};
