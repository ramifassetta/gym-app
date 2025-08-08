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
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Gestión de Rutinas",
    description: "Crea y personaliza rutinas de ejercicios específicas para cada cliente con nuestra herramienta intuitiva.",
    benefits: ["Editor visual de ejercicios", "Plantillas personalizables", "Progresión automática", "Historial completo"]
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestión de Clientes",
    description: "Administra toda la información de tus clientes, objetivos y progreso en una sola plataforma.",
    benefits: ["Perfiles detallados", "Seguimiento de objetivos", "Historial médico", "Fotos de progreso"]
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Comunicación Integrada",
    description: "Mantén una comunicación constante con tus clientes a través de mensajes y notificaciones.",
    benefits: ["Chat en tiempo real", "Notificaciones automáticas", "Recordatorios personalizados", "Compartir rutinas"]
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Análisis y Reportes",
    description: "Obtén insights detallados sobre el rendimiento de tus clientes y el crecimiento de tu negocio.",
    benefits: ["Métricas de progreso", "Reportes personalizados", "Análisis de tendencias", "Exportación de datos"]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Seguridad y Privacidad",
    description: "Protege la información sensible de tus clientes con las mejores prácticas de seguridad.",
    benefits: ["Encriptación de datos", "Cumplimiento GDPR", "Copias de seguridad", "Acceso controlado"]
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización",
    description: "Automatiza tareas repetitivas y enfócate en lo que realmente importa: tus clientes.",
    benefits: ["Recordatorios automáticos", "Rutinas programadas", "Reportes automáticos", "Integraciones"]
  }
];

const compareFeatures = [
  { feature: "Usuarios activos", basic: "Hasta 50", pro: "Hasta 200", enterprise: "Ilimitados" },
  { feature: "Rutinas personalizadas", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Comunicación con clientes", basic: "Básica", pro: "Avanzada", enterprise: "Premium" },
  { feature: "Análisis y reportes", basic: "Básicos", pro: "Detallados", enterprise: "Avanzados" },
  { feature: "Soporte técnico", basic: "Email", pro: "24/7", enterprise: "Dedicado" },
  { feature: "Integraciones", basic: "Limitadas", pro: "Estándar", enterprise: "Personalizadas" },
  { feature: "API", basic: "✗", pro: "✗", enterprise: "✓" },
  { feature: "Configuración personalizada", basic: "✗", pro: "✗", enterprise: "✓" }
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
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-gym text-white py-16 rounded-md">
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
        <section className="py-16 md:py-24">
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
                GymRoutine Pro combina todas las herramientas esenciales para la gestión de gimnasios 
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
        
        {/* Comparison Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comparativa de planes
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Encuentra el plan que mejor se adapte a las necesidades de tu gimnasio
              </p>
            </motion.div>
            
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-[800px] sm:min-w-0">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[180px]">Característica</TableHead>
                      <TableHead>Plan Básico</TableHead>
                      <TableHead>Plan Profesional</TableHead>
                      <TableHead>Plan Enterprise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {compareFeatures.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.feature}</TableCell>
                        <TableCell>{item.basic}</TableCell>
                        <TableCell>{item.pro}</TableCell>
                        <TableCell>{item.enterprise}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/pricing">
                <Button size="lg">
                  Ver todos los planes
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-16 md:py-24 bg-muted/30">
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
                Descubre cómo GymRoutine Pro se adapta a diferentes tipos de negocios
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="gyms" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="gyms">Gimnasios</TabsTrigger>
                    <TabsTrigger value="trainers">Entrenadores</TabsTrigger>
                    <TabsTrigger value="studios">Estudios</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="gyms">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Para gimnasios</h3>
                          <p className="text-muted-foreground mb-6">
                            GymRoutine Pro permite a los gimnasios gestionar fácilmente cientos de clientes, 
                            asignar entrenadores específicos, crear rutinas personalizadas y hacer seguimiento 
                            de los pagos de membresías en una sola plataforma.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión centralizada de clientes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Asignación de entrenadores a clientes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Control de acceso y asistencia</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de membresías y pagos</span>
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
                            Los entrenadores pueden crear rutinas personalizadas, hacer seguimiento del progreso 
                            de sus clientes y mantener una comunicación constante para maximizar los resultados.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Creación de rutinas personalizadas</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Seguimiento del progreso</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Comunicación directa con clientes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Análisis de rendimiento</span>
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
                
                <TabsContent value="studios">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Para estudios especializados</h3>
                          <p className="text-muted-foreground mb-6">
                            Estudios de yoga, pilates, crossfit y otros deportes pueden gestionar sus clases, 
                            reservas y clientes de manera eficiente con herramientas adaptadas a sus necesidades.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de clases y horarios</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Sistema de reservas</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Control de capacidad</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de instructores</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="bg-primary/10 p-8 rounded-2xl">
                            <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Organización</h4>
                            <p className="text-muted-foreground">
                              Mantén tu estudio organizado y tus clientes satisfechos
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
        <section className="py-16 md:py-24">
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
                Únete a cientos de profesionales del fitness que ya están usando GymRoutine Pro 
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