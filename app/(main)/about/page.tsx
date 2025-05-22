'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Clock, Dumbbell, ArrowRight } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* About Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </motion.div>

              <motion.div 
                className="prose max-w-none mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-6">
                  En GymRoutine Pro, nos dedicamos a transformar la forma en que los gimnasios y entrenadores gestionan
                  las rutinas de ejercicios y la comunicación con sus clientes. Nuestra plataforma nació de la necesidad
                  de digitalizar y optimizar los procesos que tradicionalmente se realizaban en papel.
                </p>

                <motion.h2 
                  className="text-3xl font-bold mt-12 mb-6 gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Nuestra Historia
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="mb-6">
                    Fundada en 2020 por un equipo de entrenadores personales y desarrolladores de software, GymRoutine Pro
                    surgió como respuesta a los desafíos que enfrentaban los profesionales del fitness para gestionar
                    eficientemente las rutinas de sus clientes y hacer seguimiento de su progreso.
                  </p>
                  <p className="mb-6">
                    Lo que comenzó como una simple herramienta para crear rutinas digitales ha evolucionado hasta
                    convertirse en una plataforma integral que conecta gimnasios, entrenadores y usuarios, facilitando la
                    comunicación, el seguimiento del progreso y la gestión de pagos en un solo lugar.
                  </p>
                </motion.div>

                <motion.h2 
                  className="text-3xl font-bold mt-12 mb-6 gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Nuestra Misión
                </motion.h2>
                <motion.p 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Nuestra misión es empoderar a gimnasios y entrenadores con herramientas digitales que les permitan
                  ofrecer un servicio más personalizado y eficiente, mientras ayudamos a los usuarios a alcanzar sus
                  objetivos de fitness de manera más efectiva a través de rutinas personalizadas y seguimiento constante.
                </motion.p>

                <motion.h2 
                  className="text-3xl font-bold mt-12 mb-6 gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Nuestros Valores
                </motion.h2>
                <motion.ul 
                  className="list-disc pl-6 mb-12 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <li className="pl-2">
                    <strong className="text-primary font-medium">Innovación:</strong> Buscamos constantemente nuevas formas de mejorar nuestra plataforma.
                  </li>
                  <li className="pl-2">
                    <strong className="text-primary font-medium">Personalización:</strong> Creemos en soluciones adaptadas a las necesidades específicas.
                  </li>
                  <li className="pl-2">
                    <strong className="text-primary font-medium">Accesibilidad:</strong> Hacemos que la tecnología fitness sea accesible para todos.
                  </li>
                  <li className="pl-2">
                    <strong className="text-primary font-medium">Comunidad:</strong> Fomentamos una comunidad de apoyo entre profesionales y usuarios.
                  </li>
                  <li className="pl-2">
                    <strong className="text-primary font-medium">Resultados:</strong> Nos enfocamos en ayudar a todos a alcanzar sus objetivos de fitness.
                  </li>
                </motion.ul>
              </motion.div>

              {/* Cards Section */}
              <div className="mb-16">
                <motion.h2 
                  className="text-3xl font-bold text-center mb-12 gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Lo que nos hace diferentes
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Award className="h-12 w-12 text-white mb-4" />,
                      title: "Excelencia",
                      description: "Comprometidos con ofrecer la mejor plataforma de gestión de rutinas del mercado."
                    },
                    {
                      icon: <Users className="h-12 w-12 text-white mb-4" />,
                      title: "Comunidad",
                      description: "Más de 500 gimnasios y 2,000 entrenadores confían en nuestra plataforma."
                    },
                    {
                      icon: <Clock className="h-12 w-12 text-white mb-4" />,
                      title: "Eficiencia",
                      description: "Ahorra hasta 10 horas semanales en la gestión de rutinas y clientes."
                    },
                    {
                      icon: <Dumbbell className="h-12 w-12 text-white mb-4" />,
                      title: "Especialización",
                      description: "Diseñado específicamente para las necesidades del sector fitness."
                    }
                  ].map((card, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gradient-gym border-none overflow-hidden h-full">
                        <CardContent className="p-6 flex flex-col items-center text-center text-white h-full">
                          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full mb-4">
                            {card.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                          <p className="text-white/80">
                            {card.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <motion.div 
                className="text-center mb-12 bg-white/5 backdrop-blur-sm p-10 rounded-xl border border-white/10 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text">¿Listo para transformar tu gimnasio?</h2>
                <p className="text-lg mb-8 text-muted-foreground max-w-xl mx-auto">
                  Únete a cientos de gimnasios que ya han mejorado la forma en que gestionan sus rutinas y clientes.
                </p>
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-gym text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;