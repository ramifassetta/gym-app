"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Package, Shield, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Premium",
    description: "Plan completo para gimnasios",
    price: "15.000",
    currency: "ARS",
    period: "mes",
    trialPeriod: "1 mes gratis",
    features: [
      "Clientes ilimitados",
      "Rutinas ilimitadas",
      "Control de acceso por DNI y huella",
      "Gestión completa de pagos",
      "Comunicación con clientes",
      "Panel de administración completo",
      "Soporte prioritario 24/7",
    ],
    icon: <Star className="h-10 w-10 text-primary" />,
    popular: true,
    ctaText: "Comenzar Prueba Gratuita"
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
            <div className="text-sm text-emerald-600 font-medium mb-2">{plan.trialPeriod}</div>
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-muted-foreground"> {plan.currency}/{plan.period}</span>
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
      <main className="flex-1">
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
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {pricingPlans.map((plan, index) => (
                  <PricingPlan key={index} plan={plan} index={index} />
                ))}
              </div>
            </div>
            
          </div>
        </section>
        
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
              
              <div className="space-y-6 text-left">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Qué incluye el período de prueba gratuito?</h3>
                  <p className="text-muted-foreground">
                    El período de prueba de 1 mes incluye acceso completo a todas las funcionalidades: gestión de clientes, rutinas, control de acceso por DNI y huella, gestión de pagos y comunicación.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Cómo funciona el control de acceso por DNI y huella?</h3>
                  <p className="text-muted-foreground">
                    Nuestro sistema permite registrar las huellas dactilares de tus clientes y controlar su acceso al gimnasio mediante lectores de huella y DNI, manteniendo un registro completo de asistencia.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Puedo gestionar los pagos y deudas de mis clientes?</h3>
                  <p className="text-muted-foreground">
                    Sí, el sistema calcula automáticamente las deudas de tus clientes, registra los pagos recibidos y te permite hacer seguimiento de todos los movimientos financieros de tu gimnasio.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Hay límite en la cantidad de clientes o rutinas?</h3>
                  <p className="text-muted-foreground">
                    No, puedes registrar clientes ilimitados y crear todas las rutinas que necesites. El plan incluye gestión completa sin restricciones de cantidad.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">¿Qué métodos de pago aceptan para la suscripción?</h3>
                  <p className="text-muted-foreground">
                    Aceptamos transferencias bancarias, tarjetas de crédito y débito, y Mercado Pago para facilitar el pago de tu suscripción mensual.
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