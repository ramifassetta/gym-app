"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Play } from "lucide-react"

export function UserRoutineExercises({ routineId }: { routineId: number }) {
  // Simulamos los ejercicios de la rutina seleccionada
  const exercises = [
    {
      id: 1,
      name: "Press de Banca",
      muscle: "Pecho",
      equipment: "Barra",
      sets: 4,
      reps: "10-12",
      rest: 90,
      completed: true,
      videoUrl: "#",
      instructions:
        "Acuéstate en el banco con los pies apoyados en el suelo. Agarra la barra con las manos un poco más separadas que el ancho de los hombros. Baja la barra hasta el pecho y empuja hacia arriba.",
    },
    {
      id: 2,
      name: "Sentadilla",
      muscle: "Piernas",
      equipment: "Barra",
      sets: 4,
      reps: "12-15",
      rest: 120,
      completed: true,
      videoUrl: "#",
      instructions:
        "Coloca la barra sobre los trapecios, con los pies separados al ancho de los hombros. Flexiona las rodillas y caderas para bajar, manteniendo la espalda recta. Empuja a través de los talones para subir.",
    },
    {
      id: 3,
      name: "Dominadas",
      muscle: "Espalda",
      equipment: "Barra de dominadas",
      sets: 3,
      reps: "8-10",
      rest: 90,
      completed: false,
      videoUrl: "#",
      instructions:
        "Agarra la barra con las palmas hacia adelante y las manos separadas al ancho de los hombros. Tira de tu cuerpo hacia arriba hasta que tu barbilla esté por encima de la barra.",
    },
    {
      id: 4,
      name: "Press Militar",
      muscle: "Hombros",
      equipment: "Barra",
      sets: 3,
      reps: "10-12",
      rest: 60,
      completed: false,
      videoUrl: "#",
      instructions:
        "De pie, con la barra apoyada en los deltoides anteriores, empuja la barra directamente sobre la cabeza hasta que los brazos estén completamente extendidos.",
    },
    {
      id: 5,
      name: "Curl de Bíceps",
      muscle: "Bíceps",
      equipment: "Mancuernas",
      sets: 3,
      reps: "12-15",
      rest: 60,
      completed: false,
      videoUrl: "#",
      instructions:
        "De pie con una mancuerna en cada mano, brazos extendidos. Flexiona los codos para levantar las mancuernas hacia los hombros, manteniendo los codos cerca del cuerpo.",
    },
    {
      id: 6,
      name: "Extensiones de Tríceps",
      muscle: "Tríceps",
      equipment: "Polea",
      sets: 3,
      reps: "12-15",
      rest: 60,
      completed: false,
      videoUrl: "#",
      instructions:
        "Sujeta la cuerda de la polea con ambas manos, codos flexionados. Extiende los brazos hacia abajo, manteniendo los codos cerca del cuerpo.",
    },
    {
      id: 7,
      name: "Plancha",
      muscle: "Core",
      equipment: "Ninguno",
      sets: 3,
      reps: "30-60 segundos",
      rest: 45,
      completed: false,
      videoUrl: "#",
      instructions:
        "Apóyate sobre los antebrazos y las puntas de los pies, manteniendo el cuerpo en línea recta desde los hombros hasta los tobillos. Mantén la posición durante el tiempo indicado.",
    },
    {
      id: 8,
      name: "Remo con Barra",
      muscle: "Espalda",
      equipment: "Barra",
      sets: 4,
      reps: "10-12",
      rest: 90,
      completed: false,
      videoUrl: "#",
      instructions:
        "Inclínate hacia adelante con las rodillas ligeramente flexionadas, sujetando la barra con los brazos extendidos. Tira de la barra hacia el abdomen, manteniendo la espalda recta.",
    },
  ]

  const [expandedExercise, setExpandedExercise] = useState<number | null>(null)

  const handleToggleExpand = (id: number) => {
    setExpandedExercise(expandedExercise === id ? null : id)
  }

  const handleToggleComplete = (id: number) => {
    // Aquí irá la lógica para marcar/desmarcar el ejercicio como completado
    console.log(`Ejercicio ${id} marcado como completado`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Ejercicios en esta rutina</h3>
        <div className="text-sm text-muted-foreground">
          {exercises.filter((e) => e.completed).length} de {exercises.length} completados
        </div>
      </div>

      {exercises.map((exercise) => (
        <Card
          key={exercise.id}
          className={exercise.completed ? "border-green-200 bg-green-50/50" : ""}
        >
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={`exercise-${exercise.id}`}
                  checked={exercise.completed}
                  onCheckedChange={() => handleToggleComplete(exercise.id)}
                />
                <div>
                  <div className="font-medium">{exercise.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {exercise.muscle} • {exercise.equipment}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {exercise.sets} series × {exercise.reps}
                </Badge>
                <Button variant="ghost" size="icon" onClick={() => handleToggleExpand(exercise.id)}>
                  {expandedExercise === exercise.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {expandedExercise === exercise.id && (
              <div className="border-t p-4 space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Instrucciones</h4>
                  <p className="text-sm text-muted-foreground">{exercise.instructions}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium">Series</h4>
                    <p className="text-sm">{exercise.sets}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Repeticiones</h4>
                    <p className="text-sm">{exercise.reps}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Descanso</h4>
                    <p className="text-sm">{exercise.rest} segundos</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Play className="mr-2 h-4 w-4" /> Ver demostración
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

