"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  CreditCard, 
  ChevronRight, 
  Award, 
  Bell, 
  BarChart, 
  MessageCircle, 
  VideoIcon,
  Clock,
  Smartphone,
  ShieldCheck,
  Check
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const mainFeatures = [
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

const additionalFeatures = [
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Análisis Detallados",
    description: "Visualiza el rendimiento de tus clientes con gráficos detallados y reportes personalizables."
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chat Integrado",
    description: "Comunícate en tiempo real con tus clientes directamente desde la plataforma."
  },
  {
    icon: <VideoIcon className="h-6 w-6" />,
    title: "Biblioteca de Videos",
    description: "Accede a una amplia colección de videos demostrativos para cada ejercicio."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Programación Avanzada",
    description: "Define horarios específicos para clases grupales y sesiones personales."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Aplicación Móvil",
    description: "Accede a todas las funcionalidades desde cualquier dispositivo con nuestra app."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Seguridad Avanzada",
    description: "Protección de datos con encriptación de nivel bancario para toda la información."
  }
];

const compareFeatures = [
  {
    feature: "Usuarios activos",
    basic: "Hasta 50",
    pro: "Hasta 200",
    enterprise: "Ilimitados"
  },
  {
    feature: "Rutinas personalizadas",
    basic: "✓",
    pro: "✓",
    enterprise: "✓"
  },
  {
    feature: "Comunicación con clientes",
    basic: "Básica",
    pro: "Avanzada",
    enterprise: "Completa"
  },
  {
    feature: "Gestión de pagos",
    basic: "✕",
    pro: "✓",
    enterprise: "✓"
  },
  {
    feature: "Análisis y reportes",
    basic: "Básicos",
    pro: "Avanzados",
    enterprise: "Personalizados"
  },
  {
    feature: "Integraciones",
    basic: "✕",
    pro: "Limitadas",
    enterprise: "Completas"
  },
  {
    feature: "API para desarrolladores",
    basic: "✕",
    pro: "✕",
    enterprise: "✓"
  },
  {
    feature: "Soporte técnico",
    basic: "Email",
    pro: "24/7 Prioritario",
    enterprise: "Dedicado"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof mainFeatures[0], index: number }) => {
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

const Features: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-gym text-white py-16 rounded-md">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
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
                Descubre todo lo que GymRoutine Pro puede hacer por tu gimnasio
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Todo lo que necesitas para tu <span className="gradient-text">gimnasio digital</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                GymRoutine Pro ofrece todas las herramientas necesarias para optimizar 
                la gestión de rutinas y la experiencia de tus clientes
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Funcionalidades adicionales
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Además de las características principales, GymRoutine Pro incluye estas potentes funcionalidades
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
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
            
            <div className="overflow-x-auto">
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
                        <div className="bg-muted/30 p-6 rounded-xl">
                          <img 
                            src="https://placehold.co/500x300/3b82f6/FFFFFF/png?text=Gimnasios" 
                            alt="Gimnasios usando GymRoutine" 
                            className="rounded-lg w-full shadow-md"
                          />
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
                          <h3 className="text-2xl font-bold mb-4">Para entrenadores personales</h3>
                          <p className="text-muted-foreground mb-6">
                            Los entrenadores personales pueden crear y gestionar rutinas para sus clientes, 
                            hacer seguimiento de su progreso, mantener una comunicación directa y organizar 
                            su agenda de sesiones de manera eficiente.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Creación rápida de rutinas personalizadas</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Seguimiento detallado del progreso</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de citas y disponibilidad</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Facturación de servicios</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-xl">
                          <img 
                            src="https://placehold.co/500x300/3b82f6/FFFFFF/png?text=Entrenadores" 
                            alt="Entrenadores usando GymRoutine" 
                            className="rounded-lg w-full shadow-md"
                          />
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
                            Estudios de yoga, pilates o entrenamiento funcional pueden gestionar clases grupales,
                            reservas, rutinas específicas para sus disciplinas y mantener el control de la evolución
                            de sus alumnos.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Gestión de clases grupales</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Sistema de reservas online</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Rutinas específicas para cada disciplina</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                              <span>Programación de horarios de clases</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-xl">
                          <img 
                            src="https://placehold.co/500x300/3b82f6/FFFFFF/png?text=Estudios" 
                            alt="Estudios usando GymRoutine" 
                            className="rounded-lg w-full shadow-md"
                          />
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
        <section className="py-16 md:py-24 bg-gradient-gym text-white rounded-t-md">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                ¿Listo para transformar tu gimnasio?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Únete a los cientos de gimnasios que ya han optimizado su gestión con GymRoutine Pro
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      Comenzar ahora
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="ml-4 bg-transparent border-2 border-white text-white hover:bg-white/10">
                      Contactar ventas
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Features;