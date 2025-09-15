"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, CreditCard, Calendar, Bell, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Gestión de Clientes",
    description: "Administra todos tus clientes desde una sola plataforma. Controla suscripciones, estado de pagos y acceso al gimnasio.",
    color: "bg-gradient-gym"
  },
  {
    icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Suscripciones y Pagos",
    description: "Sistema completo de gestión de membresías, pagos recurrentes y alertas automáticas de vencimiento.",
    color: "bg-gradient-feature"
  },
  {
    icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Control de Acceso",
    description: "Integración con sistemas de huella dactilar y control de entrada/salida para monitorear la asistencia.",
    color: "bg-gradient-gym"
  },
  {
    icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Dashboard Empresarial",
    description: "Vista completa de tu negocio: ingresos, clientes activos, tendencias y métricas de rendimiento.",
    color: "bg-gradient-feature"
  },
  {
    icon: <Bell className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Notificaciones Automáticas",
    description: "Alertas inteligentes para suscripciones que vencen, pagos pendientes y recordatorios importantes.",
    color: "bg-gradient-gym"
  },
  {
    icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Reportes y Analytics",
    description: "Genera reportes detallados de clientes, ingresos y tendencias para tomar decisiones informadas.",
    color: "bg-gradient-feature"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      className="feature-card group p-4 sm:p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={`p-2.5 sm:p-3 rounded-full w-fit mb-3 sm:mb-4 text-white ${feature.color}`}>
        {feature.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
        {feature.description}
      </p>
      <div className="flex items-center text-primary font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
        <span>Saber más</span>
        <Zap className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
      </div>
    </motion.div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Todo lo que necesitas para <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">gestionar tu gimnasio</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            GymRoutine Pro ofrece todas las herramientas necesarias para optimizar 
            la gestión de tu negocio fitness y maximizar la rentabilidad
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;