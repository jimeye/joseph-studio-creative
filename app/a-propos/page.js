'use client';

export default function AProposPage() {

  return (
    <div className="min-h-screen bg-[#f9f3f3] pt-4 relative" style={{ zIndex: 1000 }}>

      {/* Main Content */}
      <main className="w-full px-4 relative" style={{ zIndex: 1001 }}>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-base mb-3" style={{ color: '#F20000', fontFamily: 'Sharp Grotesk Medium 24', fontWeight: '400' }}>

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

              Nous créons des sites web sur-mesure depuis 2021
            </h2>
            
            {/* Description */}
            <p className="text-xl leading-relaxed max-w-3xl" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

              Nous aidons nos clients à atteindre de nouveaux objectifs en créant pour eux le site web moderne et performant dont ils ont besoin.

            </p>
          </div>

          {/* Separator Line */}

          <div className="border-t border-solid mb-12" style={{ borderColor: '#16214a', borderWidth: '2px' }}></div>


          {/* Le fondateur Section */}

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>

              Le fondateur
            </h3>
            
            <div className="mb-6">

              <h4 className="text-xl font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>

                Jimmy Joseph Fellous

              </h4>
              <p className="text-lg mb-4" style={{ color: '#F20000', fontFamily: 'Sharp Grotesk Medium 20' }}>

                Fondateur & Directeur Créatif

              </p>
            </div>
            
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Passionné par la création web, le design et l'innovation digitale, notre fondateur allie expertise technique et vision créative pour imaginer des solutions uniques.

            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Avec plus de 15 ans d'expérience en marketing, sales et design, il accompagne chaque projet comme une véritable aventure, en plaçant l'humain et la performance au cœur de la démarche.

            </p>
            
            <div className="mt-8">

              <h4 className="text-xl font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>

                Ses valeurs guident chacun de nos projets :

              </h4>
              <div className="space-y-4">

                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Excellence
                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Toujours viser plus haut et dépasser les attentes en créant des expériences digitales mémorables.

                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Collaboration

                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Croire en la force du collectif et avancer main dans la main avec chaque client.

                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Innovation

                  </h5>
                  <p className="text-lg leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>

                    Rester en mouvement, explorer, intégrer les technologies les plus récentes pour offrir des solutions modernes et agiles.

                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </main>
      
      {/* Espace en bas de page */}

      <div className="h-16"></div>

    </div>
  );
}
