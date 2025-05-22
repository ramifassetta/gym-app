"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Dumbbell, Building, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "10,000+",
    label: "Usuarios activos",
    description: "Entrenando con nuestra plataforma"
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    value: "50,000+",
    label: "Rutinas creadas",
    description: "Personalizadas y optimizadas"
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    value: "500+",
    label: "Gimnasios",
    description: "Confían en nosotros"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "98%",
    label: "Satisfacción",
    description: "Evaluaciones positivas"
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg font-medium text-gray-800">{stat.label}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;