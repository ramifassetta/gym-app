"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Clock, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserRoutineExercises } from "@/components/user/routines/user-routine-exercises"
import { UserRoutineProgress } from "@/components/user/routines/user-routine-progress"
import { UserRoutineFeedback } from "@/components/user/routines/user-routine-feedback"

export default function UserRoutineDetailsPage({ params }: { params: { id: string } }) {
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null)

  // Simulamos la obtención de datos de la rutina basada en el ID
  const routine = {
    id: Number.parseInt(params.id),
    name: "Entrenamiento de Fuerza - Nivel Intermedio",
    trainer: "Carlos Martínez",
    trainerAvatar: "/placeholder-user.jpg",
    level: "Intermedio",
    description:
      "Rutina diseñada para mejorar la fuerza general y tonificación muscular. Recomendada para personas con experiencia previa en entrenamiento de fuerza.",
    exercises: 8,
    duration: 60,
    progress: 75,
    lastUpdated: "15/07/2023",
    frequency: "3-4 veces por semana",
    notes:
      "Asegúrate de realizar un calentamiento adecuado antes de comenzar. Mantén una buena hidratación durante todo el entrenamiento.",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/user-dashboard/routines">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">{routine.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Detalles de la Rutina</CardTitle>
              <CardDescription>Información general sobre esta rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={routine.trainerAvatar} alt={routine.trainer} />
                  <AvatarFallback>{routine.trainer.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Entrenador</p>
                  <p className="text-sm text-muted-foreground">{routine.trainer}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Nivel</p>
                <Badge className="mt-1">{routine.level}</Badge>
              </div>

              <div>
                <p className="text-sm font-medium">Frecuencia recomendada</p>
                <p className="text-sm text-muted-foreground">{routine.frequency}</p>
              </div>

              <div>
                <p className="text-sm font-medium">Duración estimada</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{routine.duration} minutos</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Última actualización</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{routine.lastUpdated}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Progreso</p>
                <Progress value={routine.progress} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">{routine.progress}% completado</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <Button className="w-full" variant="default">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contactar Entrenador
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">¿Te gusta esta rutina?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <Button
                    variant={feedback === "like" ? "default" : "outline"}
                    className="flex-1 mr-2"
                    onClick={() => setFeedback("like")}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" /> Me gusta
                  </Button>
                  <Button
                    variant={feedback === "dislike" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setFeedback("dislike")}
                  >
                    <ThumbsDown className="mr-2 h-4 w-4" /> No me gusta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{routine.description}</p>
              {routine.notes && (
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Notas del entrenador:</p>
                  <p className="text-sm">{routine.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6">
            <Tabs defaultValue="exercises" className="w-full">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="exercises">Ejercicios</TabsTrigger>
                <TabsTrigger value="progress">Mi Progreso</TabsTrigger>
                <TabsTrigger value="feedback">Comentarios</TabsTrigger>
              </TabsList>
              <TabsContent value="exercises" className="mt-4">
                <UserRoutineExercises routineId={routine.id} />
              </TabsContent>
              <TabsContent value="progress" className="mt-4">
                <UserRoutineProgress routineId={routine.id} />
              </TabsContent>
              <TabsContent value="feedback" className="mt-4">
                <UserRoutineFeedback routineId={routine.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

