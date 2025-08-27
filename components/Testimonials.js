'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Boulangerie Artisanale",
      rating: 5,
      text: "Joseph Studio a transformé notre boulangerie en ligne ! Le site est magnifique et nous recevons 3x plus de commandes. L'aide publique a couvert 80% du coût !",
      avatar: "🍞"
    },
    {
      name: "Thomas Martin",
      company: "Garage Auto Pro",
      rating: 5,
      text: "Site ultra-rapide et professionnel. Les clients peuvent maintenant prendre rendez-vous en ligne. ROI immédiat avec les aides publiques et maintenance 3 ans incluse !",
      avatar: "🚗"
    },
    {
      name: "Sophie Laurent",
      company: "Coiffure Élégance",
      rating: 5,
      text: "Design moderne et fonctionnalités parfaites. Mes clients adorent la prise de rendez-vous en ligne. Service client exceptionnel !",
      avatar: "💇‍♀️"
    },
    {
      name: "Pierre Moreau",
      company: "Restaurant Le Gourmet",
      rating: 5,
      text: "Site e-commerce complet avec système de réservation. Les commandes en ligne ont explosé ! Aides publiques et maintenance 1 an très bien gérées.",
      avatar: "🍽️"
    },
    {
      name: "Julie Bernard",
      company: "Spa Zen",
      rating: 5,
      text: "Site magnifique qui reflète parfaitement notre univers zen. Les clients peuvent réserver leurs soins en ligne. Très satisfaite !",
      avatar: "🧘‍♀️"
    },
    {
      name: "Marc Petit",
      company: "Électricien Express",
      rating: 5,
      text: "Site professionnel qui inspire confiance. Les demandes de devis ont doublé depuis la mise en ligne. Excellent investissement !",
      avatar: "⚡"
    }
  ]

  return (
    <section id="realisations" className="section-padding bg-official mt-0" style={{ marginTop: 0, paddingTop: 0, scrollMarginTop: '100px' }}>
      <div className="container-custom">
        

        {/* Section Témoignages */}
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Ils nous font confiance
          </h2>
          <p className="text-xl max-w-3xl" style={{ color: '#16214a' }}>
            Découvrez ce que nos clients disent de nos services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 border-2 transition-all duration-300" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#16214a' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: '#16214a' }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#FFD700', fill: '#FFD700' }} />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2" size={24} style={{ color: '#16214a' }} />
                <p className="italic" style={{ color: '#16214a' }}>
                  "{testimonial.text}"
                </p>
              </div>

              {/* Badge "Découvrir le projet" */}
              <div className="flex justify-center">
                <span className="inline-block px-4 py-2 bg-[#d92f35] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#ffff00] hover:text-[#16214a] cursor-pointer">
                  Découvrir le projet
                </span>
              </div>
            </div>
          ))}
        </div>



        <div className="text-center mt-12">
          <div className="bg-white p-8 w-full border-2" style={{ boxShadow: '4px 4px 0px #16214a', borderColor: '#16214a' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
              📊 Statistiques de Satisfaction
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>98%</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>500+</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Sites livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>4.9/5</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Note moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#16214a' }}>7j</div>
                <div className="text-sm" style={{ color: '#16214a' }}>Délai moyen</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
} 