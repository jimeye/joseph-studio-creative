'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [currentMonth, setCurrentMonth] = useState(new Date())

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

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()
    
    const days = []
    
    // Ajouter les jours du mois précédent pour remplir la première semaine
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false, isAvailable: false })
    }
    
    // Ajouter les jours du mois actuel
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i)
      const dayOfWeek = currentDate.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6 // Dimanche ou samedi
      const isAvailable = !isWeekend && Math.random() > 0.3 // Pas de weekend + 70% des jours ouvrés
      days.push({ date: currentDate, isCurrentMonth: true, isAvailable })
    }
    
    // Ajouter les jours du mois suivant pour remplir la dernière semaine
    const remainingDays = 42 - days.length // 6 semaines * 7 jours
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i)
      days.push({ date: nextDate, isCurrentMonth: false, isAvailable: false })
    }
    
    return days
  }

  const formatMonth = (date) => {
    const months = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ]
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const formatDay = (date) => {
    const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    return days[date.getDay()]
  }

  const getAvailableTimes = (date) => {
    const dayOfWeek = new Date(date).getDay() // 0 = dimanche, 1 = lundi, 5 = vendredi
    
    // Samedi et dimanche : pas de rendez-vous
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return []
    }
    
    // Vendredi : pas de rendez-vous après 12h
    if (dayOfWeek === 5) {
      return ['10:00', '11:00', '12:00']
    }
    
    // Lundi à jeudi : horaires complets (comme la 1ère capture)
    return ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']
  }

  const isWeekend = (date) => {
    const dayOfWeek = new Date(date).getDay()
    return dayOfWeek === 0 || dayOfWeek === 6
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-50 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: '#16214a' }}>
          <h2 className="text-lg font-bold text-gray-800">
            Date et heure
          </h2>
                          <button
                  onClick={onClose}
                  className="text-3xl hover:opacity-70 transition-opacity"
                  style={{ color: '#16214a' }}
                >
                  ✕
                </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Section Détails du Rendez-vous */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              RENDEZ-VOUS
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 border" style={{ borderColor: '#16214a' }}>
                             <h4 className="text-lg font-semibold mb-2 text-gray-800">
                 Consultation préparatoire avec Jimmy Joseph
               </h4>
              <p className="text-gray-600 mb-3">30 minutes</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Un premier rendez-vous de 30 minutes pour comprendre votre projet, répondre à vos questions et collecter les informations utiles à la création de votre devis.
              </p>
            </div>
          </div>

          {/* Section Calendrier et Heure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendrier */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <h4 className="text-lg font-semibold text-gray-800">
                  {formatMonth(currentMonth)}
                </h4>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Jours de la semaine */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grille du calendrier */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day.isAvailable && setSelectedDate(day.date.toISOString().split('T')[0])}
                    disabled={!day.isAvailable}
                    className={`
                      p-3 text-sm rounded-lg transition-all duration-200
                      ${day.isCurrentMonth 
                        ? day.isAvailable 
                          ? 'hover:bg-blue-50 hover:text-blue-600 cursor-pointer' 
                          : 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-300 cursor-not-allowed'
                      }
                      ${selectedDate === day.date.toISOString().split('T')[0] 
                        ? 'text-white' 
                        : ''
                      }
                    `}
                    style={selectedDate === day.date.toISOString().split('T')[0] 
                      ? { backgroundColor: '#f20000' } 
                      : {}
                    }
                  >
                    {day.date.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélection de l'heure */}
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {selectedDate ? new Date(selectedDate).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  }) : 'Sélectionnez une date'}
                </h4>
                
              </div>

                                   {/* Heures disponibles */}
                     <div className="grid grid-cols-2 gap-3">
                       {getAvailableTimes(selectedDate).map((time) => (
                         <button
                           key={time}
                           onClick={() => setSelectedTime(time)}
                           className={`
                             p-4 text-center rounded-lg border transition-all duration-200 font-bold
                             ${selectedTime === time
                               ? 'border-blue-500 bg-blue-50 text-blue-700'
                               : 'text-black hover:bg-gray-50'
                             }
                           `}
                           style={{
                             borderColor: selectedTime === time ? '#3b82f6' : '#16214a',
                             borderWidth: '2px'
                           }}
                         >
                           {time}
                         </button>
                       ))}
                     </div>

              {/* Bouton de confirmation */}
              {selectedDate && selectedTime && (
                <button
                  onClick={handleSubmit}
                  className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirmer le rendez-vous
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
