"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16 sm:pt-20">
        {/* About Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div>
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </div>
            
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Sobre GymRoutine Pro
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Somos una plataforma innovadora que transforma la gestión de gimnasios, 
                  conectando entrenadores y clientes de manera digital y eficiente.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Facilitar la gestión de gimnasios y mejorar la experiencia de entrenamiento 
                    mediante tecnología innovadora que conecta entrenadores y clientes de manera 
                    eficiente y personalizada.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Creemos que cada cliente es único y merece una atención personalizada. 
                    Nuestra plataforma permite a los entrenadores crear rutinas específicas, 
                    hacer seguimiento del progreso y mantener una comunicación constante con sus clientes.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">+1000</h3>
                        <p className="text-sm text-muted-foreground">Clientes activos</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">+50</h3>
                        <p className="text-sm text-muted-foreground">Gimnasios</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">98%</h3>
                        <p className="text-sm text-muted-foreground">Satisfacción</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">24/7</h3>
                        <p className="text-sm text-muted-foreground">Soporte</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">¿Por qué elegir GymRoutine Pro?</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Nuestra plataforma está diseñada pensando en las necesidades reales de los gimnasios 
                  y sus clientes, ofreciendo una solución completa y fácil de usar.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Gestión Simplificada</h3>
                    <p className="text-muted-foreground">
                      Administra clientes, rutinas y pagos desde una sola plataforma intuitiva.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
                    <p className="text-muted-foreground">
                      Crea rutinas únicas adaptadas a las necesidades específicas de cada cliente.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Resultados Medibles</h3>
                    <p className="text-muted-foreground">
                      Seguimiento detallado del progreso y análisis de rendimiento en tiempo real.
                    </p>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                    Contáctanos
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;