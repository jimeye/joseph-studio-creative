'use client'

import { useState } from 'react'
import { X, Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
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
    alert('Merci pour votre demande de rendez-vous ! Nous vous recontacterons rapidement.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#f9f7f2] rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto border-2" style={{ borderColor: '#d92f35' }}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2" style={{ borderColor: '#16214a' }}>
          <h2 className="text-2xl font-bold" style={{ color: '#16214a' }}>
            Prendre Rendez-vous
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#16214a' }}>
              Consultation Gratuite
            </h3>
            <p className="text-gray-600 mb-4">
              Réservez votre créneau pour une consultation gratuite de 30 minutes avec un expert JOSEPH STUDIO CREATIVE.
            </p>
            
            {/* Informations de contact */}
            <div className="bg-white rounded-lg p-4 border-2" style={{ borderColor: '#16214a' }}>
              <div className="flex items-center mb-3">
                <MapPin size={20} className="mr-2" style={{ color: '#F20000' }} />
                <span className="text-sm" style={{ color: '#16214a' }}>
                  16 Bld des Filles du Calvaire, 75011 Paris
                </span>
              </div>
              <div className="flex items-center mb-3">
                <Phone size={20} className="mr-2" style={{ color: '#F20000' }} />
                <span className="text-sm" style={{ color: '#16214a' }}>
                  +33 06 08 25 12 23
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" style={{ color: '#F20000' }} />
                <span className="text-sm" style={{ color: '#16214a' }}>
                  jimmyfellous@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Date et heure */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  <Calendar size={16} className="inline mr-2" />
                  Date souhaitée
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  <Clock size={16} className="inline mr-2" />
                  Heure préférée
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                >
                  <option value="">Choisir</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  style={{ borderColor: '#16214a' }}
                  placeholder="Votre entreprise"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#16214a' }}>
                Message / Besoins spécifiques
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                style={{ borderColor: '#16214a' }}
                placeholder="Décrivez votre projet, vos besoins..."
              />
            </div>

            {/* Boutons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#16214a] text-white font-bold py-3 px-6 rounded-lg border-2 transition-all duration-300 hover:bg-[#F20000] hover:border-[#F20000]"
                style={{ borderColor: '#16214a' }}
              >
                Confirmer le Rendez-vous
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100"
                style={{ borderColor: '#16214a', color: '#16214a' }}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
