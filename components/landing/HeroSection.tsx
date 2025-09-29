"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Building2, Users, CreditCard, Calendar } from "lucide-react";
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-gym text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/20"
              initial={{ opacity:.9, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="flex items-center justify-center text-xs sm:text-sm">
                <Building2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Gestión integral para gimnasios
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Gestiona tu gimnasio de <span className="text-accent">forma inteligente</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/80 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Controla el acceso, gestiona pagos automáticamente y crea rutinas personalizadas. Todo desde una sola aplicación.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-sm sm:text-base">
                  Comenzar Gratis
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/features" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base"
                >
                  Ver Características
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Features preview */}
            <motion.div 
              className="mt-8 grid grid-cols-3 gap-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-white/80">Gestión de Clientes</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-white/80">Pagos y Deudas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-white/80">Rutinas</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent rounded-xl rotate-12 animate-float opacity-75"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.75, rotate: 12 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-secondary rounded-full animate-pulse-light opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              ></motion.div>
              
              <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 shadow-2xl overflow-hidden relative z-10">
                <div className="bg-white/5 rounded-xl p-1">
                  <img 
                    src="/istockphoto-952352556-612x612.jpg" 
                    alt="Dashboard del Gimnasio" 
                    className="rounded-lg w-full shadow-lg"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-secondary/10"></div>
              </div>
              
              <motion.div 
                className="absolute top-1/4 -right-8 sm:-right-12 glass-card p-2 sm:p-3 rounded-lg shadow-lg hidden sm:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-emerald-500 p-1.5 sm:p-2 rounded-full">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 -left-8 sm:-left-12 glass-card p-2 sm:p-3 rounded-lg shadow-lg hidden sm:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-primary p-1.5 sm:p-2 rounded-full">
                    <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium">Ingresos</p>
                    <p className="text-xs text-gray-600">$245.000 este mes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;