"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Calendar, CreditCard, ChevronRight, Award, Bell } from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Rutinas Personalizadas",
    description: "Crea y modifica rutinas específicas para cada cliente con ejercicios, repeticiones, series y videos demostrativos.",
    color: "bg-gradient-gym"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Interacción Directa",
    description: "Comunicación fluida entre gimnasios y usuarios para resolver dudas o solicitar ajustes en las rutinas.",
    color: "bg-gradient-feature"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Seguimiento de Progreso",
    description: "Los usuarios registran su progreso y visualizan estadísticas de rendimiento a lo largo del tiempo.",
    color: "bg-gradient-gym"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Gestión de Pagos",
    description: "Sistema integrado para el pago de cuotas y gestión de membresías directamente desde la aplicación.",
    color: "bg-gradient-feature"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Logros y Recompensas",
    description: "Sistema de metas, logros y recompensas para mantener a los usuarios motivados y comprometidos.",
    color: "bg-gradient-gym"
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Notificaciones",
    description: "Recordatorios personalizados para entrenamientos, pagos pendientes y actualizaciones de rutinas.",
    color: "bg-gradient-feature"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      className="feature-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`p-3 rounded-full w-fit mb-4 text-white ${feature.color}`}>
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
      <p className="text-muted-foreground mb-4">
        {feature.description}
      </p>
      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
        <span>Saber más</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </div>
    </motion.div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Todo lo que necesitas para tu <span className="gradient-text">gimnasio digital</span>
          </motion.h2>
          <motion.p 
            className="section-description text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GymRoutine Pro ofrece todas las herramientas necesarias para optimizar 
            la gestión de rutinas y la experiencia de tus clientes
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;