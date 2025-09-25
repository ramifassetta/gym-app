"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, ChevronRight, Dumbbell, Users, MessageSquare, BarChart3, Shield, Zap, Target, Calendar, FileText, Bell } from "lucide-react";

const mainFeatures = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestión de Clientes",
    description: "Administra toda la información de tus clientes, suscripciones y datos de contacto en una sola plataforma.",
    benefits: ["Registro completo de clientes", "Gestión de suscripciones", "Historial de pagos", "Datos de contacto organizados"]
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Gestión de Rutinas",
    description: "Crea y personaliza rutinas de ejercicios específicas para cada cliente con nuestra herramienta intuitiva.",
    benefits: ["Editor de rutinas personalizado", "Plantillas de ejercicios", "Asignación por cliente", "Seguimiento de progreso"]
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Control de Pagos",
    description: "Gestiona los pagos de tus clientes, calcula deudas automáticamente y mantén un registro detallado.",
    benefits: ["Registro de pagos", "Cálculo automático de deudas", "Múltiples métodos de pago", "Reportes de ingresos"]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Control de Acceso",
    description: "Sistema de acceso por DNI y huella dactilar para controlar la entrada de tus clientes al gimnasio.",
    benefits: ["Acceso por DNI", "Reconocimiento de huella", "Registro de asistencia", "Control de horarios"]
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Comunicación",
    description: "Mantén una comunicación efectiva con tus clientes a través de mensajes y notificaciones.",
    benefits: ["Mensajes directos", "Notificaciones automáticas", "Recordatorios de pago", "Comunicación masiva"]
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Reportes y Análisis",
    description: "Obtén insights detallados sobre el rendimiento de tu gimnasio y el comportamiento de tus clientes.",
    benefits: ["Reportes de asistencia", "Análisis de pagos", "Estadísticas de clientes", "Exportación de datos"]
  }
];


const FeatureCard = ({ feature, index }: { feature: typeof mainFeatures[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-primary/10 hover:border-primary/20 transition-colors duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              {feature.icon}
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            {feature.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-gym text-white py-12 rounded-md">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Características
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Descubre todas las herramientas que necesitas para gestionar tu gimnasio
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Features Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Todo lo que necesitas en una plataforma
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Optifit combina todas las herramientas esenciales para la gestión de gimnasios 
                en una interfaz intuitiva y fácil de usar.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        
        {/* Use Cases Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Casos de uso
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Descubre cómo Optifit se adapta a diferentes tipos de negocios
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="gyms" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="gyms">Gimnasios</TabsTrigger>
                    <TabsTrigger value="trainers">Entrenadores</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="gyms">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Para gimnasios</h3>
                          <p className="text-muted-foreground mb-6">
                            Nuestra aplicación permite a los gimnasios gestionar fácilmente todos sus clientes, 
                            controlar el acceso por DNI y huella, crear rutinas personalizadas y hacer seguimiento 
                            de los pagos y deudas en una sola plataforma.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Registro completo de clientes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Control de acceso por DNI y huella</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de pagos y cálculo de deudas</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Creación de rutinas personalizadas</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="bg-primary/10 p-8 rounded-2xl">
                            <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Gestión Integral</h4>
                            <p className="text-muted-foreground">
                              Todo lo que necesitas para administrar tu gimnasio en una sola plataforma
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="trainers">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Para entrenadores</h3>
                          <p className="text-muted-foreground mb-6">
                            Los entrenadores pueden crear rutinas personalizadas para cada cliente, hacer seguimiento 
                            de su progreso y mantener una comunicación efectiva para maximizar los resultados.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Editor de rutinas personalizado</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Asignación de rutinas por cliente</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Comunicación directa con clientes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Seguimiento de progreso detallado</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="bg-primary/10 p-8 rounded-2xl">
                            <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Personalización</h4>
                            <p className="text-muted-foreground">
                              Crea rutinas únicas para cada cliente y maximiza sus resultados
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Únete a cientos de profesionales del fitness que ya están usando Optifit 
                para mejorar la gestión de sus clientes y aumentar sus ingresos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary">
                    Comenzar Prueba Gratuita
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Hablar con Ventas
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;