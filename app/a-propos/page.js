'use client';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] pt-4 relative" style={{ zIndex: 1000 }}>
      {/* Main Content */}
      <main className="w-full px-4 relative" style={{ zIndex: 1001 }}>
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-base mb-3" style={{ color: '#da2f35', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>
            À PROPOS
          </div>
          <h1 className="text-base mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>
            Notre histoire
          </h1>

          <p className="text-base leading-relaxed max-w-2xl mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
            Découvrez notre expertise et notre passion pour la création web.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              Nous créons des sites web Shopify et<br />
              <span style={{ color: '#d92f35' }}>Squarespace depuis 2015.</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl leading-relaxed max-w-3xl" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Nous sommes partenaires certifiés Squarespace et Shopify. Nous aidons nos clients à atteindre de nouveaux objectifs en créant pour eux le site web moderne et performant dont ils ont besoin.
            </p>
          </div>

          {/* Separator Line */}
          <div className="border-t border-dotted mb-12" style={{ borderColor: '#16214a', borderWidth: '2px' }}></div>

          {/* La fondatrice Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
                La fondatrice
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                Passionnée par la création web et l'innovation digitale, notre fondatrice combine expertise technique et vision créative pour offrir des solutions web exceptionnelles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#d92f35' }}></div>
                  <span style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>Expertise Squarespace & Shopify</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#d92f35' }}></div>
                  <span style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>Plus de 8 ans d'expérience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#d92f35' }}></div>
                  <span style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>Accompagnement personnalisé</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#f9f7f2] p-8 border-2 rounded-lg" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#16214a' }}>
                  Joseph Studio Creative
                </h4>
                <p className="text-sm" style={{ color: '#16214a' }}>
                  Fondatrice & Directrice Créative
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              Nos valeurs
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d92f35' }}>
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#16214a' }}>Excellence</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>
                  Nous visons l'excellence dans chaque projet, en créant des sites web qui dépassent les attentes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#0038b8' }}>
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#16214a' }}>Collaboration</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>
                  Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#d92f35' }}>
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#16214a' }}>Innovation</h4>
                <p className="text-sm" style={{ color: '#16214a' }}>
                  Nous restons à la pointe de la technologie pour offrir des solutions modernes et performantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
