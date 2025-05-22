"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Lock, Shield, EyeOff, Key } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Header with decorative background */}
              <div className="relative rounded-xl overflow-hidden mb-10">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl"></div>
                <div className="relative bg-background/80 backdrop-blur-sm py-10 px-8 border border-border/30 rounded-xl">
                  <h1 className="text-4xl font-bold bg-gradient-gym bg-clip-text text-transparent">Política de Privacidad</h1>
                  <p className="text-muted-foreground mt-3">
                    Última actualización: 22 de mayo de 2025
                  </p>
                </div>
              </div>

              {/* Key principles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Protección de datos</h3>
                    <p className="text-sm text-muted-foreground">Tus datos personales están protegidos bajo las leyes GDPR.</p>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-secondary/10 p-3 rounded-full mb-4">
                      <EyeOff className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-medium mb-2">Sin seguimiento</h3>
                    <p className="text-sm text-muted-foreground">No vendemos ni compartimos tus datos con terceros.</p>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-accent/10 p-3 rounded-full mb-4">
                      <Lock className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-medium mb-2">Cifrado seguro</h3>
                    <p className="text-sm text-muted-foreground">Tu información está cifrada y protegida en todo momento.</p>
                  </CardContent>
                </Card>

                <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <Key className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Control de acceso</h3>
                    <p className="text-sm text-muted-foreground">Tú tienes el control sobre el acceso a tus datos personales.</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Content sections */}
              <div className="prose prose-gray max-w-none space-y-12">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Información que recopilamos</h2>
                  <p className="text-muted-foreground">
                    En GymRoutine Pro, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos tu información cuando utilizas nuestros servicios.
                  </p>
                  <p className="text-muted-foreground">
                    Podemos recopilar los siguientes tipos de información:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li><strong>Información personal</strong>: Nombre, dirección de correo electrónico, número de teléfono, y otra información de contacto.</li>
                    <li><strong>Información de perfil</strong>: Edad, género, altura, peso, objetivos de fitness y preferencias de entrenamiento.</li>
                    <li><strong>Datos de uso</strong>: Cómo interactúas con nuestra plataforma, frecuencia de uso, y patrones de entrenamiento.</li>
                    <li><strong>Información técnica</strong>: Dirección IP, tipo de dispositivo, sistema operativo y datos de cookies.</li>
                  </ul>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">2. Cómo usamos tu información</h2>
                  <p className="text-muted-foreground">
                    Utilizamos la información recopilada para los siguientes propósitos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                    <li>Personalizar tu experiencia y ofrecerte recomendaciones de entrenamiento adaptadas.</li>
                    <li>Comunicarnos contigo sobre actualizaciones, promociones y novedades de la plataforma.</li>
                    <li>Analizar el rendimiento y uso de nuestros servicios para mejorar la experiencia del usuario.</li>
                    <li>Proteger la seguridad y la integridad de nuestra plataforma.</li>
                  </ul>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">3. Compartir de información</h2>
                  <p className="text-muted-foreground">
                    No vendemos, alquilamos ni compartimos tu información personal con terceros con fines de marketing sin tu consentimiento. Podemos compartir tu información en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Con proveedores de servicios que trabajan en nuestro nombre para apoyar nuestras operaciones.</li>
                    <li>Para cumplir con obligaciones legales, como responder a una citación o una orden judicial.</li>
                    <li>Para proteger los derechos, la propiedad o la seguridad de GymRoutine Pro, nuestros usuarios o el público.</li>
                    <li>En caso de una fusión, adquisición o venta de activos, en cuyo caso tu información puede ser transferida como parte de esa transacción.</li>
                  </ul>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Cookies y tecnologías similares</h2>
                  <p className="text-muted-foreground">
                    Utilizamos cookies y tecnologías similares para recopilar información sobre cómo interactúas con nuestros servicios. Estas tecnologías nos ayudan a recordar tus preferencias, personalizar tu experiencia y mejorar nuestros servicios.
                  </p>
                  <p className="text-muted-foreground">
                    Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador. Sin embargo, ten en cuenta que la desactivación de algunas cookies puede afectar a la funcionalidad de nuestros servicios.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">5. Seguridad de datos</h2>
                  <p className="text-muted-foreground">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Tus derechos de privacidad</h2>
                  <p className="text-muted-foreground">
                    Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tus datos personales, que pueden incluir:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Acceder a los datos personales que tenemos sobre ti.</li>
                    <li>Corregir datos inexactos o incompletos.</li>
                    <li>Eliminar tus datos personales en determinadas circunstancias.</li>
                    <li>Retirar tu consentimiento para el procesamiento de datos.</li>
                    <li>Oponerte al procesamiento de tus datos para determinados propósitos.</li>
                  </ul>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Cambios en esta política</h2>
                  <p className="text-muted-foreground">
                    Podemos actualizar nuestra Política de Privacidad ocasionalmente. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "última actualización".
                  </p>
                  <p className="text-muted-foreground">
                    Te recomendamos que revises periódicamente esta Política de Privacidad para estar informado sobre cómo estamos protegiendo tu información.
                  </p>
                </section>
              </div>
              
              {/* Contact box */}
              <div className="mt-12 bg-muted/50 border border-border/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Preguntas o inquietudes?</h3>
                <p className="text-muted-foreground mb-4">
                  Si tienes alguna pregunta sobre esta Política de Privacidad o sobre cómo manejamos tus datos, no dudes en contactarnos.
                </p>
                <Link href="/contact">
                  <button className="bg-gradient-gym text-white px-6 py-2 rounded-md hover:opacity-90 transition-all">
                    Contáctanos
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;