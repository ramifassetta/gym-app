"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from 'next/link';

const benefits = [
  "Digitaliza tu gimnasio en minutos",
  "Mejora la experiencia de tus clientes",
  "Optimiza la gestión de rutinas y pagos",
  "Aumenta la fidelización y retención"
];

const CtaSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-gym text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para transformar tu gimnasio?</h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Únete a cientos de gimnasios que ya están aprovechando los beneficios de GymRoutine Pro.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Beneficios inmediatos</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-xl mb-8">
                Empieza a optimizar tu gimnasio hoy mismo con nuestra plataforma todo en uno. Regístrate gratis y descubre todas las funcionalidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10"
                  >
                    Contactar Ventas
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70">
              ¿Tienes preguntas? Llámanos al <span className="font-semibold text-white">900 123 456</span> o escríbenos a{" "}
              <a href="mailto:info@gymroutinepro.com" className="text-white underline">
                info@gymroutinepro.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;