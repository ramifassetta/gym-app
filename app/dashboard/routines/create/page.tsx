"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExerciseSelector } from "@/components/exercise-selector"
import { ExerciseList } from "@/components/exercise-list"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function CreateRoutinePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de creación de rutina
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/routines")
    }, 1500)
  }

  const handleAddExercise = (exercise) => {
    setSelectedExercises([...selectedExercises, exercise])
  }

  const handleRemoveExercise = (index) => {
    const updatedExercises = [...selectedExercises]
    updatedExercises.splice(index, 1)
    setSelectedExercises(updatedExercises)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/routines">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Crear Nueva Rutina</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Rutina</CardTitle>
              <CardDescription>Ingresa los detalles básicos de la rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Rutina</Label>
                <Input id="name" placeholder="Ej: Entrenamiento de Fuerza - Nivel Intermedio" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Select>
                    <SelectTrigger id="client">
                      <SelectValue placeholder="Seleccionar cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client1">Juan Pérez</SelectItem>
                      <SelectItem value="client2">María García</SelectItem>
                      <SelectItem value="client3">Carlos López</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Nivel de Dificultad</Label>
                  <Select>
                    <SelectTrigger id="level">
                      <SelectValue placeholder="Seleccionar nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Principiante</SelectItem>
                      <SelectItem value="intermediate">Intermedio</SelectItem>
                      <SelectItem value="advanced">Avanzado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe el objetivo y características de esta rutina..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duración (minutos)</Label>
                <Input id="duration" type="number" min="1" placeholder="60" required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejercicios</CardTitle>
              <CardDescription>Añade los ejercicios que formarán parte de esta rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ExerciseSelector onAddExercise={handleAddExercise} />

              <div className="border rounded-md">
                <ExerciseList exercises={selectedExercises} onRemoveExercise={handleRemoveExercise} />
              </div>
            </CardContent>
          </Card>

          <CardFooter className="flex justify-end gap-4 pt-6">
            <Button variant="outline" type="button" onClick={() => router.push("/dashboard/routines")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Guardando..." : "Guardar Rutina"}
            </Button>
          </CardFooter>
        </div>
      </form>
    </div>
  )
}

