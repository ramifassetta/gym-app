"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Gradient background and decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/30 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-gym">Contacto</h1>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground">
              ¿Tienes preguntas sobre GymRoutine Pro? Estamos aquí para ayudarte. Completa el formulario a continuación
              o utiliza nuestros datos de contacto directo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="md:col-span-1 space-y-6"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-opacity-50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <p className="text-sm text-muted-foreground mt-1">info@gymroutinepro.com</p>
                        <p className="text-sm text-muted-foreground">soporte@gymroutinepro.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-opacity-50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Teléfono</h3>
                        <p className="text-sm text-muted-foreground mt-1">+34 912 345 678</p>
                        <p className="text-sm text-muted-foreground">Lun-Vie: 9:00-18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-opacity-50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Oficina</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Calle Tecnología 123
                          <br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:col-span-2"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-lg bg-card/90 backdrop-blur-sm border-opacity-50 overflow-hidden">
                <CardHeader className="bg-muted/30 border-b border-border/50">
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos lo antes posible.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <motion.div 
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Send className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Gracias por contactarnos. Responderemos a tu mensaje lo antes posible.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        size="lg"
                        className="bg-gradient-gym text-white shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 py-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Nombre</Label>
                          <Input 
                            id="name" 
                            required 
                            placeholder="Tu nombre"
                            className="border-border/50 focus-visible:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            required 
                            placeholder="tu@email.com"
                            className="border-border/50 focus-visible:ring-primary/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium">Asunto</Label>
                        <Input 
                          id="subject" 
                          required 
                          placeholder="¿Sobre qué quieres hablar?"
                          className="border-border/50 focus-visible:ring-primary/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">Mensaje</Label>
                        <Textarea 
                          id="message" 
                          rows={5} 
                          required 
                          placeholder="Escribe tu mensaje aquí..."
                          className="min-h-[120px] border-border/50 focus-visible:ring-primary/50"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full py-6 bg-gradient-gym text-white shadow-md hover:shadow-xl transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : "Enviar mensaje"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
