"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Building2, User } from "lucide-react";

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<'gym' | 'user' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de registro
    setTimeout(() => {
      setIsLoading(false);
      // Redirigir según el tipo de usuario
      if (userType === 'gym') {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/user-dashboard';
      }
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!userType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-md px-4 py-16">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-12 w-36 h-36 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
          
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
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-background">
              <CardHeader className="space-y-1 pb-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent">Selecciona tu tipo de cuenta</CardTitle>
                </motion.div>
                <CardDescription className="text-muted-foreground">
                  Elige cómo quieres registrarte en GymRoutine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <Button
                    onClick={() => setUserType('gym')}
                    className="h-auto py-6 px-4 bg-gradient-gym hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-white"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Building2 className="h-8 w-8" />
                      <div className="text-center">
                        <div className="font-semibold text-base">Gimnasio</div>
                        <div className="text-xs sm:text-sm text-white/80 mt-1 px-1">Registra tu gimnasio y gestiona tus clientes</div>
                      </div>
                    </div>
                  </Button>

                  <Button
                    onClick={() => setUserType('user')}
                    className="h-auto py-6 px-4 bg-gradient-feature hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-white"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <User className="h-8 w-8" />
                      <div className="text-center">
                        <div className="font-semibold text-base">Usuario</div>
                        <div className="text-xs sm:text-sm text-white/80 mt-1 px-1">Únete a un gimnasio y sigue tus rutinas</div>
                      </div>
                    </div>
                  </Button>
                </div>

                <motion.div 
                  className="mt-6 text-center text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/login" className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors">
                    Inicia sesión
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-md px-4 py-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-12 w-36 h-36 bg-accent/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="mb-8">
          <button 
            onClick={() => setUserType(null)} 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-background">
            <CardHeader className="space-y-1 pb-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <CardTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent">
                  {userType === 'gym' ? 'Registrar Gimnasio' : 'Registrar Usuario'}
                </CardTitle>
              </motion.div>
              <CardDescription className="text-muted-foreground">
                Ingresa los datos de tu {userType === 'gym' ? 'gimnasio' : 'cuenta'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/90">
                    {userType === 'gym' ? 'Nombre del Gimnasio' : 'Nombre completo'}
                  </Label>
                  <Input 
                    id="name" 
                    placeholder={userType === 'gym' ? 'Nombre de tu gimnasio' : 'Tu nombre'} 
                    required 
                    className="border-input/50 focus-visible:ring-primary/70" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/90">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    required 
                    className="border-input/50 focus-visible:ring-primary/70" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground/90">Contraseña</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      required 
                      className="border-input/50 focus-visible:ring-primary/70 pr-10" 
                    />
                    <button 
                      type="button"
                      onClick={toggleShowPassword} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-foreground/90">Confirmar contraseña</Label>
                  <div className="relative">
                    <Input 
                      id="confirm-password" 
                      type={showConfirmPassword ? "text" : "password"} 
                      required 
                      className="border-input/50 focus-visible:ring-primary/70 pr-10" 
                    />
                    <button 
                      type="button"
                      onClick={toggleShowConfirmPassword} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6 bg-gradient-gym hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Creando cuenta...
                    </>
                  ) : (
                    "Crear Cuenta"
                  )}
                </Button>
              </motion.form>

              <motion.div 
                className="mt-6 text-center text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium hover:underline transition-colors">
                  Inicia sesión
                </Link>
              </motion.div>

              <motion.div 
                className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Al registrarte, aceptas nuestros{" "}
                <Link href="/terms" className="hover:text-foreground hover:underline transition-colors">
                  Términos y condiciones
                </Link>{" "}
                y{" "}
                <Link href="/privacy" className="hover:text-foreground hover:underline transition-colors">
                  Política de privacidad
                </Link>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;

