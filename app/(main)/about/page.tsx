"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* About Content Section */}
        <section className="bg-background">
          <div className="container mx-auto px-4 py-12 relative z-10">
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
                  Sobre <span className="whitespace-nowrap">Optifit</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Somos una aplicación especializada en la gestión integral de gimnasios, 
                  diseñada para simplificar el control de acceso, gestión de clientes, pagos y rutinas.
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
                    Simplificar la gestión diaria de gimnasios mediante una aplicación integral que 
                    permite automatizar el control de acceso, gestionar clientes, calcular deudas 
                    automáticamente y crear rutinas personalizadas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro objetivo es que los propietarios de gimnasios puedan enfocarse en lo que 
                    realmente importa: sus clientes. Por eso automatizamos tareas como el control de 
                    acceso, el registro de pagos y el cálculo de deudas pendientes.
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
                        <h3 className="font-semibold mb-1">100%</h3>
                        <p className="text-sm text-muted-foreground">Enfocado en gimnasios</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">5</h3>
                        <p className="text-sm text-muted-foreground">Tipos de pases</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">Control Automático</h3>
                        <p className="text-sm text-muted-foreground">Control de acceso</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-3">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-1">Auto</h3>
                        <p className="text-sm text-muted-foreground">Cálculo de deudas</p>
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
                <h2 className="text-3xl font-bold mb-6">¿Por qué elegir Optifit?</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Nuestra aplicación está diseñada específicamente para gimnasios argentinos, 
                  con funcionalidades que realmente necesitas: control de acceso, gestión de pagos y rutinas personalizadas.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Control de Acceso</h3>
                    <p className="text-muted-foreground">
                      Controla automáticamente la entrada y salida de tus clientes con tecnología moderna.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Gestión de Pagos</h3>
                    <p className="text-muted-foreground">
                      Calcula automáticamente las deudas de tus clientes y gestiona todos los pagos en pesos argentinos.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Rutinas Personalizadas</h3>
                    <p className="text-muted-foreground">
                      Crea rutinas específicas para cada cliente con ejercicios detallados y seguimiento de progreso.
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