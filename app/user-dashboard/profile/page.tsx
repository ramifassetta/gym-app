"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserProfileStats } from "@/components/user/profile/user-profile-stats"
import { UserProfileRoutines } from "@/components/user/profile/user-profile-routines"
import { UserProfileMeasurements } from "@/components/user/profile/user-profile-measurements"
import { UserProfileGoals } from "@/components/user/profile/user-profile-goals"
import { motion } from "framer-motion"
import { User, Edit } from "lucide-react"

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground mt-1">Gestiona tu información personal y objetivos</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Edit className="mr-2 h-4 w-4" />
          {isEditing ? "Cancelar Edición" : "Editar Perfil"}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                  <User className="h-4 w-4" />
                </div>
                Información Personal
              </CardTitle>
              <CardDescription>Tu información básica y de contacto</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-32 w-32 mb-4 ring-4 ring-primary/10">
                <AvatarImage src="/placeholder-user.jpg" alt="Juan Pérez" />
                <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-white text-3xl">
                  JP
                </AvatarFallback>
              </Avatar>

              <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Juan Pérez</h2>
              <p className="text-sm text-muted-foreground mb-4">Miembro desde Enero 2023</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">Pérdida de peso</Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">Tonificación</Badge>
                <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">Principiante</Badge>
              </div>

              <div className="space-y-3 w-full text-left">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <span>juan@ejemplo.com</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Teléfono:</span>
                  <span>+34 600 123 456</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fecha de nacimiento:</span>
                  <span>15/05/1990</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Género:</span>
                  <span>Masculino</span>
                </div>
              </div>

              <div className="w-full border-t border-primary/10 mt-6 pt-6">
                <h3 className="font-medium mb-3 text-left">Entrenadores asignados</h3>
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-8 w-8 ring-2 ring-primary/10">
                    <AvatarImage src="/placeholder-user.jpg" alt="Carlos Martínez" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-white">CM</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">Carlos Martínez</p>
                    <p className="text-xs text-muted-foreground">Entrenador Principal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 ring-2 ring-primary/10">
                    <AvatarImage src="/placeholder-user.jpg" alt="Laura Sánchez" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-white">LS</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">Laura Sánchez</p>
                    <p className="text-xs text-muted-foreground">Nutricionista</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                  <User className="h-4 w-4" />
                </div>
                Sobre Mí
              </CardTitle>
              <CardDescription>Información sobre tus objetivos y preferencias</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Objetivo principal</h3>
                  <p className="text-sm">
                    Perder peso y mejorar mi condición física general. Me gustaría reducir un 10% de mi peso corporal y
                    aumentar mi resistencia cardiovascular.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Experiencia previa</h3>
                  <p className="text-sm">
                    Principiante con poca experiencia en entrenamiento. He realizado actividad física esporádica pero
                    nunca he seguido un plan estructurado.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Limitaciones físicas</h3>
                  <p className="text-sm">
                    Tengo una leve molestia en la rodilla derecha que debo tener en cuenta durante los ejercicios de
                    impacto.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Preferencias de entrenamiento</h3>
                  <p className="text-sm">
                    Prefiero entrenamientos variados que combinen cardio y fuerza. Me gustan especialmente los
                    ejercicios funcionales y los circuitos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <UserProfileStats />

          <Tabs defaultValue="routines" className="w-full">
            <TabsList className="bg-primary/5">
              <TabsTrigger value="routines" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Mis Rutinas
              </TabsTrigger>
              <TabsTrigger value="measurements" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Mediciones
              </TabsTrigger>
              <TabsTrigger value="goals" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Objetivos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="routines" className="mt-4">
              <UserProfileRoutines />
            </TabsContent>
            <TabsContent value="measurements" className="mt-4">
              <UserProfileMeasurements />
            </TabsContent>
            <TabsContent value="goals" className="mt-4">
              <UserProfileGoals />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  )
}

