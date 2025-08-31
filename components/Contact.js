'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

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
    <section id="contact" className="bg-official" style={{ paddingTop: '2rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="container-custom">
                <div className="text-left lg:text-center mb-12" style={{ marginTop: '0rem' }}>
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight" style={{ wordSpacing: '-0.1em', color: '#16214a' }}>
            Contactez-Nous.
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl lg:mx-auto" style={{ color: '#16214a' }}>
            Prêt à transformer votre entreprise ? Contactez-nous pour un devis gratuit !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-none mx-0">
          {/* Formulaire */}
          <div className="bg-[#f9f7f2]  p-8 border-2" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
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
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-[#f9f7f2]"
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
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-[#f9f7f2]"
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
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-[#f9f7f2]"
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
                    className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-[#f9f7f2]"
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
                  className="w-full px-4 py-3 border  focus:ring-2 focus:ring-accent focus:border-transparent bg-[#f9f7f2]"
                  style={{ borderColor: '#16214a' }}
                  placeholder="Décrivez votre projet, vos besoins, votre budget..."
                ></textarea>
              </div>
              
              <div className="mt-8">
                                        <button
                            type="submit"
                            className="text-lg flex items-center gap-2 font-bold py-2 px-8 border transition-all duration-300"
                            style={{ 
                              boxShadow: '4px 4px 0px #16214a', 
                              color: '#f9f7f2', 
                              borderColor: '#f9f7f2', 
                              backgroundColor: '#16214a',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#f9f7f2';
                              e.target.style.color = '#16214a';
                              e.target.style.borderColor = '#16214a';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = '#16214a';
                              e.target.style.color = '#f9f7f2';
                              e.target.style.borderColor = '#f9f7f2';
                            }}
                          >
                            <Send size={20} style={{ color: 'inherit' }} />
                            ENVOYER MA DEMANDE
                          </button>
              </div>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#16214a' }}>
                Nos Coordonnées
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <Mail size={20} className="mr-4" style={{ color: '#16214a' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#16214a' }}>Email</h4>
                    <a href="mailto:contact@josephstudiocreative.com" style={{ color: '#16214a', cursor: 'pointer' }} className="hover:!text-red-600">contact@josephstudiocreative.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-4" style={{ color: '#16214a' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#16214a' }}>Téléphone</h4>
                    <a href="tel:+330608251223" style={{ color: '#16214a', cursor: 'pointer' }} className="hover:!text-red-600">+33 06 08 25 12 23</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 mt-1" style={{ color: '#16214a' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#16214a' }}>Adresse</h4>
                    <a href="https://maps.google.com/?q=16+Boulevard+des+Filles+du+Calvaire+75011+Paris+France" target="_blank" rel="noopener noreferrer" style={{ color: '#16214a', cursor: 'pointer' }} className="hover:!text-red-600">16 Bld des Filles du Calvaire<br />75011 Paris, France</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="mr-4" style={{ color: '#16214a' }} />
                  <div>
                    <h4 className="font-semibold" style={{ color: '#16214a' }}>Horaires</h4>
                    <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f9f7f2]  p-8 border-2" style={{ borderColor: '#16214a', boxShadow: '4px 4px 0px #16214a' }}>
              <h4 className="text-lg font-bold mb-4" style={{ color: '#d92f35' }}>
                ⚡ Réponse Rapide
              </h4>
              <p style={{ color: '#d92f35' }}>
                Nous répondons à toutes les demandes sous 24h maximum !
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
} 