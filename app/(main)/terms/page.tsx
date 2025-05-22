"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Terms: React.FC = () => {
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl"></div>
                <div className="relative bg-background/80 backdrop-blur-sm py-10 px-8 border border-border/30 rounded-xl">
                  <h1 className="text-4xl font-bold bg-gradient-gym bg-clip-text text-transparent">Términos de Servicio</h1>
                  <p className="text-muted-foreground mt-3">
                    Última actualización: 22 de mayo de 2025
                  </p>
                </div>
              </div>
              
              {/* Content sections */}
              <div className="prose prose-gray max-w-none space-y-12">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Introducción</h2>
                  <p className="text-muted-foreground">
                    Bienvenido a GymRoutine Pro. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web y servicios de GymRoutine Pro.
                  </p>
                  <p className="text-muted-foreground">
                    Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web si no aceptas todos los términos y condiciones establecidos en esta página.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">2. Licencia de uso</h2>
                  <p className="text-muted-foreground">
                    A menos que se indique lo contrario, GymRoutine Pro y/o sus licenciatarios poseen los derechos de propiedad intelectual de todo el material en GymRoutine Pro. Todos los derechos de propiedad intelectual están reservados.
                  </p>
                  <p className="text-muted-foreground">
                    Puedes ver y/o imprimir páginas desde el sitio para tu uso personal, sujeto a las restricciones establecidas en estos términos y condiciones.
                  </p>
                  
                  <div className="pl-5 border-l-2 border-primary/30 py-2">
                    <h3 className="text-xl font-medium">No debes:</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
                      <li>Republicar material de GymRoutine Pro</li>
                      <li>Vender, alquilar o sublicenciar material de GymRoutine Pro</li>
                      <li>Reproducir, duplicar o copiar material de GymRoutine Pro</li>
                      <li>Redistribuir contenido de GymRoutine Pro</li>
                    </ul>
                  </div>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">3. Uso de la plataforma</h2>
                  <p className="text-muted-foreground">
                    Al utilizar nuestra plataforma, aceptas utilizar GymRoutine Pro de manera responsable. Nos reservamos el derecho de suspender cuentas o rechazar servicios a cualquier usuario por violación de estos términos de uso.
                  </p>
                  <p className="text-muted-foreground">
                    Los usuarios son responsables de mantener la confidencialidad de sus cuentas y contraseñas. Deberás notificarnos inmediatamente si descubres o sospechas de cualquier uso no autorizado de tu cuenta.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Limitación de responsabilidades</h2>
                  <p className="text-muted-foreground">
                    En ningún caso GymRoutine Pro o sus proveedores serán responsables por cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) derivados del uso o la incapacidad de usar los materiales en GymRoutine Pro.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">5. Precisión de los materiales</h2>
                  <p className="text-muted-foreground">
                    Los materiales que aparecen en el sitio web de GymRoutine Pro podrían incluir errores técnicos, tipográficos o fotográficos. GymRoutine Pro no garantiza que cualquiera de los materiales en su sitio web sea preciso, completo o actual.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Modificaciones</h2>
                  <p className="text-muted-foreground">
                    GymRoutine Pro puede revisar estos términos de servicio del sitio web en cualquier momento sin previo aviso. Al usar este sitio web, aceptas estar sujeto a la versión actual de estos términos de servicio.
                  </p>
                </section>

                <Separator className="bg-border/50" />
                
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Ley aplicable</h2>
                  <p className="text-muted-foreground">
                    Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de España y te sometes irrevocablemente a la jurisdicción exclusiva de los tribunales de dicho estado o localidad.
                  </p>
                </section>
              </div>
              
              {/* Contact box */}
              <div className="mt-12 bg-muted/50 border border-border/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">¿Tienes preguntas sobre nuestros términos?</h3>
                <p className="text-muted-foreground mb-4">
                  Ponte en contacto con nosotros si necesitas más información o aclaraciones sobre nuestros términos de servicio.
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

export default Terms;