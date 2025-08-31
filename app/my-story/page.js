'use client';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-4 relative" style={{ zIndex: 1000 }}>
      {/* Main Content */}
      <main className="w-full px-8 relative" style={{ zIndex: 1001 }}>
        {/* Main Content Section */}
        <div className="w-full">

          {/* My Story Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
              My Story
            </h3>
            
            <div className="bg-[#f9f7f2] p-8 rounded-lg relative p-4 border-2 rounded-lg" style={{ borderColor: '#d92f35' }}>
               {/* Étoiles qui suivent le contour du cadre rouge */}
               <div className="absolute inset-0 pointer-events-none">
                 {/* Étoiles en haut - se déplacent de gauche à droite */}
                 <div className="absolute top-0 left-0 right-0 flex justify-between gap-1 px-2">
                   {Array.from({ length: 50 }).map((_, i) => (
                     <span key={`top-${i}`} className="star-move-right" style={{ 
                       color: '#16214a', 
                       fontSize: '7pt',
                       animationDelay: `${i * 0.4}s`
                     }}>★</span>
                   ))}
                 </div>
                 {/* Étoiles en bas - se déplacent de droite à gauche */}
                 <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-1 px-2">
                   {Array.from({ length: 50 }).map((_, i) => (
                     <span key={`bottom-${i}`} className="star-move-left" style={{ 
                       color: '#16214a', 
                       fontSize: '7pt',
                       animationDelay: `${i * 0.4}s`
                     }}>★</span>
                   ))}
                 </div>
                 {/* Étoiles à gauche - se déplacent de haut en bas */}
                 <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between gap-0.5 py-2">
                   {Array.from({ length: 70 }).map((_, i) => (
                     <span key={`left-${i}`} className="star-move-down" style={{ 
                       color: '#16214a', 
                       fontSize: '7pt',
                       animationDelay: `${i * 0.3}s`
                     }}>★</span>
                   ))}
                 </div>
                 {/* Étoiles à droite - se déplacent de bas en haut */}
                 <div className="absolute top-0 bottom-0 right-0 flex flex-col justify-between gap-0.5 py-2">
                   {Array.from({ length: 70 }).map((_, i) => (
                     <span key={`right-${i}`} className="star-move-up" style={{ 
                       color: '#16214a', 
                       fontSize: '7pt',
                       animationDelay: `${i * 0.3}s`
                     }}>★</span>
                   ))}
                 </div>
               </div>

                <div className="mb-6">
                <h4 className="text-xl font-bold mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  PROFIL PROFESSIONNEL
                </h4>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                  Développeur Full-Stack Senior avec 30+ ans d'expérience dans la mode et le digital. Ancien directeur artistique et créateur de marque, j'ai développé une expertise unique combinant créativité artistique et maîtrise technique. Spécialisé dans la création de sites e-commerce haut de gamme avec une approche design-driven.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Développeur Full-Stack Senior & Consultant Digital
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2023 - Présent
                  </p>
                </div>

                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Directeur Artistique & Créateur de Marque
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2015 - 2022 (7 ans)
                  </p>
                  <p className="text-base mb-3" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    <strong>Atelier Beaurepaire</strong> - Marque de vêtements premium - Direction complète
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Direction Artistique :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Conception des collections (design, couleurs, matières)</li>
                        <li>• Direction photo et stylisme</li>
                        <li>• Branding et identité visuelle</li>
                        <li>• Stratégie marketing et communication</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Développement Digital :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Direction technique du site e-commerce</li>
                        <li>• UX/UI Design et expérience utilisateur</li>
                        <li>• Gestion de la production web</li>
                        <li>• Optimisation conversion et performance</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Gestion Business :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Production et sourcing matières</li>
                        <li>• Montage et essayages</li>
                        <li>• Gestion équipe créative</li>
                        <li>• Développement commercial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Agent Commercial Senior
                  </h5>
                  <p className="text-base mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    1990 - 2018 (28 ans)
                  </p>
                  <p className="text-base mb-3" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    <strong>Grandes Marques de Jeans</strong> - Évolution de carrière exceptionnelle
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <strong>1990-1995 :</strong> Sentier (j'ai tout appris)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <strong>1995-2020 :</strong> Sales & Marketing Manager (25 ans), Agent Commercial Senior (18 ans)
                      </p>
                    </div>
                    <div>
                      <h6 className="font-bold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Expertise développée :</h6>
                      <ul className="text-sm space-y-1" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        <li>• Gestion de comptes majeurs (Bon Marché, Galeries Lafayette & Printemps)</li>
                        <li>• Négociation commerciale</li>
                        <li>• Développement réseau</li>
                        <li>• Analyse marché et tendances</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compétences Techniques */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  COMPÉTENCES TECHNIQUES
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                      Développement Web
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Frontend :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          React 18, Next.js 13, Tailwind CSS, JavaScript ES6+
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Backend :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Node.js, API Routes, Redis/Upstash
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>E-commerce :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Stripe, Apple Pay, systèmes de commande
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>DevOps :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Vercel, Git, déploiement continu
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                      Design & Créativité
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>UX/UI Design :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Interfaces utilisateur, expérience client
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Direction Artistique :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Branding, identité visuelle
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Photographie :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Direction photo, stylisme
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Design de Mode :</h6>
                        <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                          Collections, matières, couleurs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formation & Développement */}
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
                  FORMATION & DÉVELOPPEMENT
                </h4>
                
                <div className="border-l-4 pl-6" style={{ borderColor: '#d92f35' }}>
                  <h5 className="text-lg font-bold mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Formation Intensive en Développement Web
                  </h5>
                  <p className="text-base mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    2021-2023 (2 ans)
                  </p>
                  <p className="text-base mb-4" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                    Période post-COVID : Dédiée à l'apprentissage des technologies web modernes
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Frontend :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        React, Next.js, Tailwind CSS
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Backend :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        Node.js, API REST, bases de données
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>E-commerce :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        Stripe, systèmes de paiement
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold mb-2" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 20' }}>Design :</h6>
                      <p className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                        UX/UI, responsive design, animations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
