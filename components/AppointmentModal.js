'use client';

import { useState } from 'react';
import { X, Calendar, Clock, Mail } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // URL Acuity Scheduling (à remplacer par votre vraie URL)
  const acuityUrl = "https://app.acuityscheduling.com/schedule.php?owner=YOUR_OWNER_ID&appointmentType=YOUR_APPOINTMENT_TYPE_ID";

  const handleScheduleAppointment = () => {
    // Ouvrir Acuity Scheduling dans un nouvel onglet
    window.open(acuityUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#f9f7f2] rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto border-2" style={{ borderColor: '#d92f35' }}>
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-2" style={{ borderColor: '#d92f35' }}>
          <h2 className="text-xl font-bold" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 24' }}>
            RENDEZ-VOUS
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            style={{ color: '#d92f35' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Consultation Info */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3" style={{ color: '#d92f35', fontFamily: 'Sharp Grotesk Medium 24' }}>
              Consultation préparatoire avec Salomé
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} style={{ color: '#d92f35' }} />
              <span className="text-sm" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
                30 minutes
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Un premier rendez-vous de 30 minutes pour comprendre votre projet, 
              répondre à vos questions et collecter les informations utiles à la 
              création de votre devis.
            </p>
          </div>

          {/* Acuity Scheduling Button */}
          <div className="mb-6">
            <button
              onClick={handleScheduleAppointment}
              className="w-full text-lg flex items-center justify-center gap-2 font-bold py-3 px-8 border transition-all duration-300"
              style={{ 
                boxShadow: '4px 4px 0px #16214a', 
                color: '#f9f7f2', 
                borderColor: '#16214a', 
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
                e.target.style.borderColor = '#16214a';
              }}
            >
              <Calendar size={20} />
              Prendre rendez-vous
            </button>
          </div>

          {/* Direct Calendar Embed */}
          <div className="text-center">
            <p className="text-xs mb-3" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              Ou utilisez directement notre calendrier
            </p>
            <div className="bg-white rounded-lg p-4 border-2" style={{ borderColor: '#16214a' }}>
              <iframe
                src={acuityUrl}
                width="100%"
                height="400"
                frameBorder="0"
                title="Calendrier de rendez-vous"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t-2" style={{ borderColor: '#d92f35' }}>
          <div className="text-center">
            <p className="text-xs mb-2" style={{ color: '#16214a', fontFamily: 'Sharp Grotesk Medium 20' }}>
              En cas de problème, contactez-nous directement
            </p>
            <a 
              href="mailto:contact@josephstudiocreative.com"
              className="flex items-center justify-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: '#d92f35' }}
            >
              <Mail size={16} />
              contact@josephstudiocreative.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
