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

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Mi Perfil</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancelar Edición" : "Editar Perfil"}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
            <CardDescription>Tu información básica y de contacto</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src="/placeholder-user.jpg" alt="Juan Pérez" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-bold">Juan Pérez</h2>
            <p className="text-sm text-muted-foreground mb-4">Miembro desde Enero 2023</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Pérdida de peso</Badge>
              <Badge variant="secondary">Tonificación</Badge>
              <Badge variant="secondary">Principiante</Badge>
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

            <div className="w-full border-t mt-6 pt-6">
              <h3 className="font-medium mb-3 text-left">Entrenadores asignados</h3>
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Carlos Martínez" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-sm font-medium">Carlos Martínez</p>
                  <p className="text-xs text-muted-foreground">Entrenador Principal</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Laura Sánchez" />
                  <AvatarFallback>LS</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-sm font-medium">Laura Sánchez</p>
                  <p className="text-xs text-muted-foreground">Nutricionista</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mí</CardTitle>
              <CardDescription>Información sobre tus objetivos y preferencias</CardDescription>
            </CardHeader>
            <CardContent>
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
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="routines">Mis Rutinas</TabsTrigger>
              <TabsTrigger value="measurements">Mediciones</TabsTrigger>
              <TabsTrigger value="goals">Objetivos</TabsTrigger>
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
        </div>
      </div>
    </div>
  )
}

