"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Mail, Phone, Globe, Award, Users, Dumbbell } from "lucide-react"
import { GymStats } from "@/components/gym/profile/gym-stats"
import { GymTrainers } from "@/components/gym/profile/gym-trainers"
import { GymSchedule } from "@/components/gym/profile/gym-schedule"
import { GymGallery } from "@/components/gym/profile/gym-gallery"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Perfil del Gimnasio</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancelar Edición" : "Editar Perfil"}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Información del Gimnasio</CardTitle>
            <CardDescription>Información pública visible para clientes</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src="/placeholder-user.jpg" alt="Logo del Gimnasio" />
              <AvatarFallback>GYM</AvatarFallback>
            </Avatar>

            <h2 className="text-xl font-bold">FitZone Gym</h2>
            <p className="text-sm text-muted-foreground mb-4">Centro de Fitness y Entrenamiento Personal</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary">Musculación</Badge>
              <Badge variant="secondary">Cardio</Badge>
              <Badge variant="secondary">Clases Grupales</Badge>
              <Badge variant="secondary">Entrenamiento Personal</Badge>
            </div>

            <div className="space-y-3 w-full text-left">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contacto@fitzonegym.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+34 912 345 678</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Calle Fitness 123, Madrid, España</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>www.fitzonegym.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Lun-Vie: 7:00-22:00, Sáb-Dom: 9:00-20:00</span>
              </div>
            </div>

            <div className="w-full border-t mt-6 pt-6">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Award className="h-4 w-4" /> Certificaciones y Premios
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Mejor Gimnasio Local</span>
                  <span className="text-muted-foreground">2022</span>
                </li>
                <li className="flex justify-between">
                  <span>Certificado de Excelencia en Servicio</span>
                  <span className="text-muted-foreground">2021</span>
                </li>
                <li className="flex justify-between">
                  <span>Centro Oficial de Preparación Física</span>
                  <span className="text-muted-foreground">2020</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acerca de Nosotros</CardTitle>
              <CardDescription>Información sobre nuestro gimnasio y servicios</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                FitZone Gym es un centro de fitness completo dedicado a ayudar a nuestros miembros a alcanzar sus
                objetivos de salud y bienestar. Fundado en 2015, nos hemos convertido en un referente en la comunidad
                local por nuestras instalaciones modernas, equipo de última generación y entrenadores altamente
                cualificados.
              </p>
              <p className="text-sm mt-4">
                Ofrecemos una amplia gama de servicios que incluyen entrenamiento personal, clases grupales,
                asesoramiento nutricional y programas especializados para diferentes objetivos y niveles de condición
                física. Nuestro enfoque se basa en crear planes personalizados que se adapten a las necesidades
                específicas de cada miembro.
              </p>
              <p className="text-sm mt-4">
                En FitZone Gym creemos que el fitness debe ser accesible para todos, por lo que nos esforzamos en crear
                un ambiente acogedor y motivador donde cada persona se sienta cómoda y apoyada en su camino hacia una
                vida más saludable.
              </p>
            </CardContent>
          </Card>

          <GymStats />

          <Tabs defaultValue="trainers" className="w-full">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="trainers">
                <Users className="mr-2 h-4 w-4" />
                Entrenadores
              </TabsTrigger>
              <TabsTrigger value="schedule">
                <Clock className="mr-2 h-4 w-4" />
                Horarios
              </TabsTrigger>
              <TabsTrigger value="gallery">
                <Dumbbell className="mr-2 h-4 w-4" />
                Instalaciones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="trainers" className="mt-4">
              <GymTrainers />
            </TabsContent>
            <TabsContent value="schedule" className="mt-4">
              <GymSchedule />
            </TabsContent>
            <TabsContent value="gallery" className="mt-4">
              <GymGallery />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

