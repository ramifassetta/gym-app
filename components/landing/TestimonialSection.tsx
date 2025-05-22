"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Desde que empezamos a usar GymRoutine Pro, la comunicación con nuestros clientes mejoró notablemente. Ahora pueden ver sus rutinas en cualquier momento y nosotros podemos actualizarlas al instante.",
    author: "Carlos Ruiz",
    role: "Dueño de GymFit Center",
    avatar: "https://placehold.co/100/3b82f6/FFFFFF?text=CR"
  },
  {
    content: "Como entrenadora, puedo crear rutinas personalizadas mucho más rápido. La posibilidad de incluir videos demostrativos ha reducido significativamente las dudas de mis clientes.",
    author: "Laura Martínez",
    role: "Entrenadora personal",
    avatar: "https://placehold.co/100/3b82f6/FFFFFF?text=LM"
  },
  {
    content: "La aplicación me permite seguir mi rutina desde cualquier lugar. Puedo marcar mis avances y ver mi progreso mes a mes, lo que me mantiene motivado para seguir entrenando.",
    author: "Miguel Ángel Pérez",
    role: "Usuario Premium",
    avatar: "https://placehold.co/100/3b82f6/FFFFFF?text=MP"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -top-4 -left-4 bg-primary rounded-full p-2 shadow-lg">
        <Quote className="h-5 w-5 text-white" />
      </div>
      <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
      <div className="flex items-center">
        <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros <span className="gradient-text">usuarios</span>
          </motion.h2>
          <motion.p 
            className="section-description text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubre cómo GymRoutine Pro está transformando la gestión de gimnasios 
            y la experiencia de entrenamiento en todo el país
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;