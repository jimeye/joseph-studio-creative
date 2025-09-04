'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici on ajouterait la logique d'envoi du formulaire
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="bg-gray-50" style={{ paddingTop: '2rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="container-custom">
                <div className="text-left lg:text-center mb-12" style={{ marginTop: '0rem' }}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Contactez-Nous
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl lg:mx-auto" style={{ color: '#16214a' }}>
            Prêt à transformer votre entreprise ? Contactez-nous pour un devis gratuit !
          </p>
        </div>

        <div className="flex justify-center w-full max-w-none mx-0">
          {/* Formulaire */}
          <div className="bg-gray-50 p-8 rounded-lg w-full">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#16214a' }}>
              Demande de Devis Gratuit
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50"
                    style={{ borderColor: '#16214a' }}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50"
                    style={{ borderColor: '#16214a' }}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50"
                    style={{ borderColor: '#16214a' }}
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50"
                    style={{ borderColor: '#16214a' }}
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre projet *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-transparent"
                  style={{ borderColor: '#16214a' }}
                  placeholder="Décrivez votre projet, vos besoins, votre budget..."
                ></textarea>
              </div>
              
              <div className="mt-8">
                                        <button
                            type="submit"
                            className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300 rounded-lg"
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
                            <Send size={20} style={{ color: 'inherit' }} />
                            ENVOYER MA DEMANDE
                          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 