'use client'

import { ArrowLeft, Check } from 'lucide-react'

export default function CarolineGoldmanProject() {
  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      {/* Caroline Goldman Project Page */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour aux projets
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne de gauche - Description du projet */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#16214a' }}>
                Caroline Goldman
              </h1>
              <h2 className="text-xl text-gray-600">
                Création d'un site web sur mesure avec Squarespace
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
                Nous avons accompagné Caroline Goldman, psychologue pour enfants, dans la création de son site web professionnel. L'objectif était de centraliser toutes ses activités : ses livres, podcasts, formations et actualités.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
                Le design sobre et raffiné reflète parfaitement l'approche professionnelle de Caroline. Le site met en avant son expertise en psychologie de l'enfant tout en restant accessible aux parents.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#16214a' }}>
                Notre savoir-faire a permis de créer une plateforme complète qui valorise son travail et facilite la prise de contact avec ses patients et lecteurs.
              </p>
            </div>

            {/* Liste des caractéristiques */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#16214a' }}>
                Caractéristiques du projet
              </h3>
              <div className="space-y-2">
                {[
                  "Site responsive",
                  "Architecture claire et pensée pour le référencement naturel",
                  "Intégration des podcasts et publications",
                  "Réalisé 100% avec Squarespace"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={20} style={{ color: '#10b981' }} />
                    <span style={{ color: '#16214a' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton d'action */}
            <div className="pt-6">
              <button 
                className="px-8 py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-[#f9f7f2] transition-all duration-300"
                onClick={() => window.open('https://carolinegoldman.com', '_blank')}
              >
                VOIR LE SITE WEB
              </button>
            </div>
          </div>

          {/* Colonne de droite - Aperçu du site */}
          <div className="space-y-8">
            {/* Vue Desktop */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold" style={{ color: '#16214a' }}>
                Vue Desktop
              </h3>
              <div className="bg-gray-100 p-4 border-2" style={{ borderColor: '#16214a' }}>
                <div className="bg-[#f9f7f2] p-6 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center border-b pb-4">
                    <div className="text-xl font-bold">Caroline Goldman</div>
                    <nav className="flex gap-6 text-sm">
                      <a href="#" className="hover:underline">LIVRES</a>
                      <a href="#" className="hover:underline">PODCAST</a>
                      <a href="#" className="hover:underline">FORMATIONS</a>
                      <a href="#" className="hover:underline">ACTUALITÉS</a>
                      <a href="#" className="hover:underline">A PROPOS</a>
                      <a href="#" className="hover:underline">CONTACT</a>
                    </nav>
                  </div>

                  {/* Hero Section */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Psychologue pour enfants</h2>
                      <p className="text-sm leading-relaxed">
                        Docteure en psychopathologie clinique, enseignante, formatrice et auteure. 
                        Spécialisée dans l'accompagnement des enfants et de leurs parents.
                      </p>
                      <button className="px-4 py-2 border border-black text-black text-sm hover:bg-black hover:text-[#f9f7f2] transition-colors">
                        EN SAVOIR PLUS
                      </button>
                    </div>
                    <div className="bg-gray-200 h-32 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Photo Caroline Goldman</span>
                    </div>
                  </div>

                  {/* Section Podcast */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-gray-200 h-24 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Image Podcast</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">POURQUOI</h3>
                      <p className="text-sm">
                        Le nouveau Podcast de Caroline Goldman. Petites leçons de psychologie pour 4-7 ans. 
                        8 podcasts de 10 minutes, téléchargeable à vie.
                      </p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 border border-black text-black text-xs hover:bg-black hover:text-[#f9f7f2] transition-colors">
                          ACHETER
                        </button>
                        <button className="px-3 py-1 border border-black text-black text-xs hover:bg-black hover:text-[#f9f7f2] transition-colors">
                          EN SAVOIR PLUS
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Section Actualités */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">ACTUALITÉS</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-[#f9f7f2] border border-gray-300 p-3 space-y-2">
                          <div className="bg-gray-200 h-16 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">Image</span>
                          </div>
                          <p className="text-xs leading-tight">
                            Dernier livre en date Pourquoi? Pour les ados de 12 à 15 ans
                          </p>
                          <button className="text-xs underline">EN SAVOIR PLUS</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vue Mobile */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold" style={{ color: '#16214a' }}>
                Vue Mobile
              </h3>
              <div className="flex justify-center">
                <div className="w-64 bg-gray-100 p-4 border-2" style={{ borderColor: '#16214a' }}>
                  <div className="bg-[#f9f7f2] p-4 space-y-4">
                    <div className="text-center border-b pb-2">
                      <div className="text-lg font-bold">Caroline Goldman</div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-200 h-20 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">Photo</span>
                      </div>
                      <h2 className="text-sm font-semibold">Psychologue pour enfants</h2>
                      <p className="text-xs">
                        Docteure en psychopathologie clinique, enseignante, formatrice et auteure.
                      </p>
                      <button className="w-full px-3 py-1 border border-black text-black text-xs hover:bg-black hover:text-[#f9f7f2] transition-colors">
                        EN SAVOIR PLUS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
