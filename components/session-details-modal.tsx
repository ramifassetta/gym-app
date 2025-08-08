"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Activity, 
  Target, 
  MessageSquare, 
  Edit, 
  X,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon
} from "lucide-react"

interface SessionDetailsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  session?: {
    id: string
    title: string
    type: string
    client: {
      name: string
      avatar?: string
      goal: string
    }
    trainer: {
      name: string
      avatar?: string
    }
    date: string
    time: string
    duration: string
    location: string
    status: "confirmed" | "pending" | "completed" | "cancelled"
    description?: string
    notes?: string
    exercises?: Array<{
      name: string
      sets: number
      reps: string
      rest: string
    }>
  }
}

export function SessionDetailsModal({ open, onOpenChange, session }: SessionDetailsModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirmSession = () => {
    setIsLoading(true)
    // Simulación de confirmación
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
    }, 1000)
  }

  const handleCancelSession = () => {
    setIsLoading(true)
    // Simulación de cancelación
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
    }, 1000)
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case "confirmed":
        return {
          icon: CheckCircle,
          color: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
          text: "Confirmada"
        }
      case "pending":
        return {
          icon: ClockIcon,
          color: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white",
          text: "Pendiente"
        }
      case "completed":
        return {
          icon: CheckCircle,
          color: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
          text: "Completada"
        }
      case "cancelled":
        return {
          icon: AlertCircle,
          color: "bg-gradient-to-r from-red-500 to-red-600 text-white",
          text: "Cancelada"
        }
      default:
        return {
          icon: ClockIcon,
          color: "bg-gradient-to-r from-slate-400 to-slate-500 text-white",
          text: "Desconocido"
        }
    }
  }

  if (!session) return null

  const statusInfo = getStatusInfo(session.status)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Detalles de la Sesión
          </DialogTitle>
          <DialogDescription>
            Información completa de la sesión programada
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Información Principal */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{session.title}</CardTitle>
                  <CardDescription>{session.type}</CardDescription>
                </div>
                <Badge className={statusInfo.color}>
                  <statusInfo.icon className="mr-1 h-3 w-3" />
                  {statusInfo.text}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">{session.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">{session.time} ({session.duration})</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{session.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm">Entrenador: {session.trainer.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información del Cliente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  {session.client.avatar ? (
                    <AvatarImage src={session.client.avatar} alt={session.client.name} />
                  ) : null}
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                    {session.client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{session.client.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Target className="h-3 w-3" />
                    {session.client.goal}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Descripción */}
          {session.description && (
            <Card>
              <CardHeader>
                <CardTitle>Descripción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{session.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Ejercicios */}
          {session.exercises && session.exercises.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Ejercicios Programados</CardTitle>
                <CardDescription>Lista de ejercicios para esta sesión</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {session.exercises.map((exercise, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{exercise.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {exercise.sets} series • {exercise.reps} • Descanso: {exercise.rest}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notas */}
          {session.notes && (
            <Card>
              <CardHeader>
                <CardTitle>Notas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{session.notes}</p>
              </CardContent>
            </Card>
          )}

          {/* Acciones */}
          <div className="flex justify-end gap-4 pt-6">
            {session.status === "pending" && (
              <>
                <Button 
                  variant="outline" 
                  onClick={handleCancelSession}
                  disabled={isLoading}
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancelar
                </Button>
                <Button 
                  onClick={handleConfirmSession}
                  disabled={isLoading}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  {isLoading ? "Confirmando..." : "Confirmar"}
                </Button>
              </>
            )}
            {session.status === "confirmed" && (
              <>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Editar
                </Button>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar Recordatorio
                </Button>
              </>
            )}
            {session.status === "completed" && (
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Ver Reporte
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 