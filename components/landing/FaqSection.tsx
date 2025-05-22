"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cómo funciona GymRoutine Pro para gimnasios?",
    answer: "Los gimnasios pueden crear perfiles de usuarios, diseñar rutinas personalizadas, incluir videos demostrativos, programar actualizaciones y recibir feedback directamente en la plataforma. Todo esto mientras gestionan pagos, membresías y comunicaciones."
  },
  {
    question: "¿Qué beneficios obtienen los usuarios con la aplicación?",
    answer: "Los usuarios pueden acceder a sus rutinas desde cualquier dispositivo, ver videos demostrativos, marcar su progreso, comunicarse con sus entrenadores, recibir notificaciones de actualizaciones y gestionar pagos de membresías desde la app."
  },
  {
    question: "¿Es necesario tener conocimientos técnicos para utilizar la plataforma?",
    answer: "No, GymRoutine Pro está diseñada con una interfaz intuitiva y fácil de usar. Ofrecemos tutoriales, soporte técnico y capacitación para que cualquier gimnasio pueda implementarla sin dificultad."
  },
  {
    question: "¿Cómo se gestionan los pagos en la plataforma?",
    answer: "La plataforma incluye un sistema integrado de pagos que permite a los gimnasios gestionar membresías, cuotas recurrentes y pagos únicos. Los usuarios pueden realizar pagos seguros directamente desde la app."
  },
  {
    question: "¿Cuánto cuesta implementar GymRoutine Pro en mi gimnasio?",
    answer: "Ofrecemos diferentes planes según las necesidades de cada gimnasio, desde planes básicos hasta soluciones enterprise. Contáctanos para recibir una cotización personalizada."
  }
];

const FaqItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="border-b border-gray-200 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-72 opacity-100 mb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700">{faq.answer}</p>
      </div>
    </motion.div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Preguntas <span className="gradient-text">frecuentes</span>
          </motion.h2>
          <motion.p 
            className="section-description text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Respuestas a las dudas más comunes sobre GymRoutine Pro
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;