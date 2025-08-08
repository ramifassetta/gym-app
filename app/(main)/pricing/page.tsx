"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Package, Shield, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Básico",
    description: "Para gimnasios pequeños que comienzan",
    price: "29",
    period: "mes",
    features: [
      "Hasta 50 usuarios activos",
      "Creación de rutinas ilimitadas",
      "Comunicación con clientes",
      "Panel de administración básico",
      "Soporte por email",
    ],
    icon: <Package className="h-10 w-10 text-primary" />,
    popular: false,
    ctaText: "Comenzar Prueba Gratuita"
  },
  {
    name: "Profesional",
    description: "Para gimnasios en crecimiento",
    price: "79",
    period: "mes",
    features: [
      "Hasta 200 usuarios activos",
      "Creación de rutinas ilimitadas",
      "Comunicación avanzada con clientes",
      "Seguimiento de progreso detallado",
      "Gestión de pagos integrada",
      "Soporte prioritario 24/7",
    ],
    icon: <Star className="h-10 w-10 text-primary" />,
    popular: true,
    ctaText: "Elegir Plan Profesional"
  },
  {
    name: "Enterprise",
    description: "Para grandes cadenas de gimnasios",
    price: "199",
    period: "mes",
    features: [
      "Usuarios ilimitados",
      "Todas las funcionalidades profesionales",
      "Integraciones personalizadas",
      "API completa para desarrolladores",
      "Análisis avanzados y reportes",
      "Soporte dedicado 24/7",
      "Configuración personalizada"
    ],
    icon: <Shield className="h-10 w-10 text-primary" />,
    popular: false,
    ctaText: "Contactar Ventas"
  }
];

const PricingPlan = ({ plan, index }: { plan: typeof pricingPlans[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      className="flex"
    >
      <Card className={`flex flex-col w-full ${plan.popular ? 'border-primary shadow-lg shadow-primary/20 relative' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-0 right-0 flex justify-center">
            <span className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
              Más Popular
            </span>
          </div>
        )}
        
        <CardHeader className="text-center pt-8">
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
            {plan.icon}
          </div>
          <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
          <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
        </CardHeader>
        
        <CardContent className="text-center pb-0">
          <div className="mb-6">
            <span className="text-4xl font-bold">{plan.price}€</span>
            <span className="text-muted-foreground">/{plan.period}</span>
          </div>
          
          <ul className="space-y-3 text-left mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
          >
            {plan.ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16 sm:pt-20">
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
                Planes de Precios
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Elige el plan perfecto para tu gimnasio
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingPlan key={index} plan={plan} index={index} />
              ))}
            </div>
            
            <motion.div
              className="text-center mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre qué plan elegir?</h2>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está listo para ayudarte a encontrar la mejor opción para tu negocio.
                Contacta con nosotros y te asesoraremos sin compromiso.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Contactar con Ventas
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
              
              <div className="space-y-6 text-left">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
                  <p className="text-muted-foreground">
                    Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente período de facturación.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Hay algún contrato de permanencia?</h3>
                  <p className="text-muted-foreground">
                    No, trabajamos con suscripciones mensuales sin compromisos a largo plazo. Puedes cancelar cuando quieras.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Ofrecéis descuentos para pagos anuales?</h3>
                  <p className="text-muted-foreground">
                    Sí, disfrutarás de un 20% de descuento si eliges la facturación anual en cualquiera de nuestros planes.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Qué métodos de pago aceptáis?</h3>
                  <p className="text-muted-foreground">
                    Aceptamos todas las principales tarjetas de crédito, PayPal, y transferencia bancaria para planes Enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;