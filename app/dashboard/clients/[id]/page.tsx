"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, MessageSquare, Calendar, Activity, Heart, Scale, TrendingUp, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ClientProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const [activeTab, setActiveTab] = useState("overview")
  
  // Usar React.use() para unwrap params
  const resolvedParams = React.use(params)

  // Datos simulados del cliente
  const client = {
    id: resolvedParams.id,
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    phone: "+34 600 123 456",
    avatar: null,
    status: "active",
    experience: "Intermedio",
    joinDate: "15 de Marzo, 2024",
    lastActive: "Hace 2 días",
    trainer: "Carlos Martínez",
    measurements: {
      weight: "75 kg",
      height: "175 cm",
      bmi: "24.5",
      bodyFat: "18%",
      muscleMass: "45%"
    },
    progress: [
      { date: "Marzo 2024", weight: "80 kg", bodyFat: "22%" },
      { date: "Abril 2024", weight: "78 kg", bodyFat: "20%" },
      { date: "Mayo 2024", weight: "75 kg", bodyFat: "18%" }
    ],
    routines: [
      {
        id: 1,
        name: "Entrenamiento de Fuerza - Nivel Intermedio",
        status: "active",
        exercises: 8,
        duration: 60,
        lastCompleted: "Ayer"
      },
      {
        id: 2,
        name: "Cardio y Tonificación",
        status: "completed",
        exercises: 6,
        duration: 45,
        lastCompleted: "Hace 3 días"
      }
    ],
    sessions: [
      {
        id: 1,
        date: "Mañana",
        time: "10:00 - 11:00",
        type: "Entrenamiento Personal",
        status: "confirmed",
        location: "Sala de Pesas"
      },
      {
        id: 2,
        date: "Jueves, 15 de Julio",
        time: "16:30 - 17:30",
        type: "Evaluación Física",
        status: "confirmed",
        location: "Sala de Evaluación"
      }
    ]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <Link href="/dashboard/clients">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Perfil del Cliente
          </h1>
          <p className="text-muted-foreground mt-1">Información detallada de {client.name}</p>
        </div>
      </motion.div>

      {/* Información Principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Perfil Principal */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24 border-4 border-primary/20 shadow-lg">
                {client.avatar ? (
                  <AvatarImage src={client.avatar} alt={client.name} />
                ) : null}
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary text-2xl font-bold">
                  {client.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{client.name}</CardTitle>
            <CardDescription>{client.email}</CardDescription>
            <div className="flex justify-center gap-2 mt-4">
              <Badge 
                variant={client.status === "active" ? "default" : "secondary"}
                className={client.status === "active" 
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white" 
                  : "bg-gradient-to-r from-slate-400 to-slate-500 text-white"
                }
              >
                {client.status === "active" ? "Activo" : "Inactivo"}
              </Badge>
              <Badge variant="outline" className="border-primary/20 text-primary">
                {client.experience}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm">Miembro desde: {client.joinDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm">Última actividad: {client.lastActive}</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm">Entrenador: {client.trainer}</span>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <Button className="flex-1" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Mensaje
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Medidas y Progreso */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Medidas y Progreso
            </CardTitle>
            <CardDescription>Evolución de las medidas del cliente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{client.measurements.weight}</div>
                <div className="text-sm text-blue-600">Peso</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{client.measurements.height}</div>
                <div className="text-sm text-green-600">Altura</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{client.measurements.bmi}</div>
                <div className="text-sm text-purple-600">IMC</div>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{client.measurements.bodyFat}</div>
                <div className="text-sm text-orange-600">Grasa</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Progreso Mensual</h4>
              {client.progress.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">{entry.date}</span>
                  <div className="flex gap-4 text-sm">
                    <span>Peso: {entry.weight}</span>
                    <span>Grasa: {entry.bodyFat}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs de Información Detallada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="routines">Rutinas</TabsTrigger>
            <TabsTrigger value="sessions">Sesiones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Rutinas Activas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {client.routines.filter(r => r.status === "active").map((routine) => (
                      <div key={routine.id} className="p-3 border rounded-lg">
                        <div className="font-medium">{routine.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {routine.exercises} ejercicios • {routine.duration} min
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Última vez: {routine.lastCompleted}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Próximas Sesiones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {client.sessions.slice(0, 3).map((session) => (
                      <div key={session.id} className="p-3 border rounded-lg">
                        <div className="font-medium">{session.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.date} • {session.time}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {session.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="routines" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Todas las Rutinas</CardTitle>
                <CardDescription>Historial completo de rutinas asignadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {client.routines.map((routine) => (
                    <div key={routine.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{routine.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {routine.exercises} ejercicios • {routine.duration} min
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Última vez: {routine.lastCompleted}
                        </div>
                      </div>
                      <Badge 
                        variant={routine.status === "active" ? "default" : "secondary"}
                        className={routine.status === "active" 
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white" 
                          : "bg-gradient-to-r from-slate-400 to-slate-500 text-white"
                        }
                      >
                        {routine.status === "active" ? "Activa" : "Completada"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Sesiones</CardTitle>
                <CardDescription>Todas las sesiones programadas y completadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {client.sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{session.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {session.date} • {session.time}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {session.location}
                        </div>
                      </div>
                      <Badge 
                        variant={session.status === "confirmed" ? "default" : "secondary"}
                        className={session.status === "confirmed" 
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white" 
                          : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
                        }
                      >
                        {session.status === "confirmed" ? "Confirmada" : "Pendiente"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
} 