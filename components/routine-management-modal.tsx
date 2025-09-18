"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExerciseList } from "@/components/exercise-list"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Save, X, Trash2, Plus } from "lucide-react"

interface Exercise {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
  notes?: string
}

interface Routine {
  id: number
  name: string
  description: string
  duration: number
  exercises: Exercise[]
  createdAt: string
}

interface RoutineManagementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  clientId?: number
  clientName?: string
  mode: 'create' | 'edit' | 'delete'
  onRoutineCreated?: () => void
  onRoutineUpdated?: () => void
  onRoutineDeleted?: () => void
}

export function RoutineManagementModal({ 
  open, 
  onOpenChange, 
  clientId, 
  clientName,
  mode,
  onRoutineCreated,
  onRoutineUpdated,
  onRoutineDeleted
}: RoutineManagementModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])
  const [selectedRoutineId, setSelectedRoutineId] = useState<number | null>(null)
  const [routines, setRoutines] = useState<Routine[]>([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: 60
  })
  const [exerciseForm, setExerciseForm] = useState({
    name: '',
    sets: 3,
    reps: 12,
    rest: 60,
    notes: ''
  })

  // Datos mock de rutinas para el cliente
  const mockRoutines: Routine[] = [
    {
      id: 1,
      name: "Rutina de Fuerza",
      description: "Rutina enfocada en desarrollar fuerza muscular básica",
      duration: 45,
      exercises: [
        { id: 1, name: "Sentadillas", sets: 3, reps: 12, rest: 60, notes: "Mantener la espalda recta" },
        { id: 2, name: "Flexiones", sets: 3, reps: 10, rest: 45, notes: "Cuerpo alineado" },
        { id: 3, name: "Plancha", sets: 3, reps: 30, rest: 60, notes: "Mantener posición firme" }
      ],
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Rutina Cardio",
      description: "Rutina cardiovascular para mejorar resistencia",
      duration: 30,
      exercises: [
        { id: 4, name: "Burpees", sets: 4, reps: 8, rest: 90, notes: "Movimiento explosivo" },
        { id: 5, name: "Mountain Climbers", sets: 4, reps: 20, rest: 60, notes: "Ritmo constante" },
        { id: 6, name: "Jumping Jacks", sets: 3, reps: 30, rest: 45, notes: "Brazos y piernas coordinados" }
      ],
      createdAt: "2024-01-20"
    },
    {
      id: 3,
      name: "Rutina de Flexibilidad",
      description: "Rutina de estiramientos y movilidad",
      duration: 25,
      exercises: [
        { id: 7, name: "Estiramiento de espalda", sets: 2, reps: 60, rest: 30, notes: "Respirar profundamente" },
        { id: 8, name: "Estiramiento de piernas", sets: 2, reps: 60, rest: 30, notes: "Sin rebotes" }
      ],
      createdAt: "2024-01-25"
    }
  ]

  useEffect(() => {
    if (open && clientId) {
      // Simular carga de rutinas del cliente
      setRoutines(mockRoutines)
      
      if (mode === 'edit' && mockRoutines.length > 0) {
        setSelectedRoutineId(mockRoutines[0].id)
        const routine = mockRoutines[0]
        setFormData({
          name: routine.name,
          description: routine.description,
          duration: routine.duration
        })
        setSelectedExercises(routine.exercises)
      } else if (mode === 'create') {
        setFormData({
          name: '',
          description: '',
          duration: 60
        })
        setSelectedExercises([])
      }
    }
  }, [open, clientId, mode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de operación
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
      
      if (mode === 'create' && onRoutineCreated) {
        onRoutineCreated()
      } else if (mode === 'edit' && onRoutineUpdated) {
        onRoutineUpdated()
      }
    }, 1500)
  }

  const handleDeleteRoutine = async () => {
    if (!selectedRoutineId) return
    
    setIsLoading(true)
    
    // Simulación de eliminación
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
      if (onRoutineDeleted) {
        onRoutineDeleted()
      }
    }, 1000)
  }

  const handleAddExercise = () => {
    if (!exerciseForm.name.trim()) return
    
    const newExercise: Exercise = {
      id: Date.now(), // ID temporal
      name: exerciseForm.name.trim(),
      sets: exerciseForm.sets,
      reps: exerciseForm.reps,
      rest: exerciseForm.rest,
      notes: exerciseForm.notes.trim() || undefined
    }
    
    setSelectedExercises([...selectedExercises, newExercise])
    
    // Limpiar formulario
    setExerciseForm({
      name: '',
      sets: 3,
      reps: 12,
      rest: 60,
      notes: ''
    })
  }

  const handleRemoveExercise = (index: number) => {
    const updatedExercises = [...selectedExercises]
    updatedExercises.splice(index, 1)
    setSelectedExercises(updatedExercises)
  }

  const handleRoutineChange = (routineId: string) => {
    const id = parseInt(routineId)
    setSelectedRoutineId(id)
    const routine = routines.find(r => r.id === id)
    if (routine) {
      setFormData({
        name: routine.name,
        description: routine.description,
        duration: routine.duration
      })
      setSelectedExercises(routine.exercises)
    }
  }

  const getModalTitle = () => {
    switch (mode) {
      case 'create':
        return `Crear Rutina para ${clientName || "Cliente"}`
      case 'edit':
        return `Editar Rutina para ${clientName || "Cliente"}`
      case 'delete':
        return `Eliminar Rutina de ${clientName || "Cliente"}`
      default:
        return "Gestión de Rutina"
    }
  }

  const getModalDescription = () => {
    switch (mode) {
      case 'create':
        return "Completa la información para crear una nueva rutina de ejercicios"
      case 'edit':
        return "Modifica la información de la rutina seleccionada"
      case 'delete':
        return "Selecciona la rutina que deseas eliminar"
      default:
        return ""
    }
  }

  if (mode === 'delete') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-destructive">
              {getModalTitle()}
            </DialogTitle>
            <DialogDescription>
              {getModalDescription()}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="routine-select">Seleccionar Rutina a Eliminar</Label>
              <Select value={selectedRoutineId?.toString()} onValueChange={handleRoutineChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar rutina" />
                </SelectTrigger>
                <SelectContent>
                  {routines.map((routine) => (
                    <SelectItem key={routine.id} value={routine.id.toString()}>
                      {routine.name} ({routine.duration} min)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedRoutineId && (
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-destructive">Rutina Seleccionada</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Nombre:</strong> {routines.find(r => r.id === selectedRoutineId)?.name}</p>
                    <p><strong>Duración:</strong> {routines.find(r => r.id === selectedRoutineId)?.duration} minutos</p>
                    <p><strong>Ejercicios:</strong> {routines.find(r => r.id === selectedRoutineId)?.exercises.length} ejercicios</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-end gap-4 pt-4">
              <Button 
                variant="outline" 
                type="button" 
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                <X className="mr-2 h-4 w-4" />
                Cancelar
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteRoutine}
                disabled={isLoading || !selectedRoutineId}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {isLoading ? "Eliminando..." : "Eliminar Rutina"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {getModalTitle()}
          </DialogTitle>
          <DialogDescription>
            {getModalDescription()}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'edit' && routines.length > 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Seleccionar Rutina</CardTitle>
                <CardDescription>Elige qué rutina deseas editar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="routine-select">Rutina a Editar</Label>
                  <Select value={selectedRoutineId?.toString()} onValueChange={handleRoutineChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar rutina" />
                    </SelectTrigger>
                    <SelectContent>
                      {routines.map((routine) => (
                        <SelectItem key={routine.id} value={routine.id.toString()}>
                          {routine.name} ({routine.duration} min) - {routine.exercises.length} ejercicios
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Información de la Rutina</CardTitle>
              <CardDescription>Ingresa los detalles básicos de la rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Rutina</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Ej: Entrenamiento de Fuerza" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Cliente</Label>
                  <Input 
                    id="client" 
                    value={clientName || ""} 
                    disabled 
                    className="bg-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duración (minutos)</Label>
                  <Input 
                    id="duration" 
                    type="number" 
                    min="1" 
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})}
                    placeholder="60" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Describe el objetivo y características de esta rutina..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejercicios</CardTitle>
              <CardDescription>Añade los ejercicios que formarán parte de esta rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Formulario para agregar ejercicio */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Agregar Ejercicio</CardTitle>
                  <CardDescription>Completa los datos del ejercicio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="exercise-name">Nombre del Ejercicio</Label>
                    <Input 
                      id="exercise-name"
                      value={exerciseForm.name}
                      onChange={(e) => setExerciseForm({...exerciseForm, name: e.target.value})}
                      placeholder="Ej: Sentadillas, Flexiones, Plancha..."
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sets">Series</Label>
                      <Input 
                        id="sets"
                        type="number"
                        min="1"
                        value={exerciseForm.sets}
                        onChange={(e) => setExerciseForm({...exerciseForm, sets: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reps">Repeticiones</Label>
                      <Input 
                        id="reps"
                        type="number"
                        min="1"
                        value={exerciseForm.reps}
                        onChange={(e) => setExerciseForm({...exerciseForm, reps: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="rest">Descanso (segundos)</Label>
                      <Input 
                        id="rest"
                        type="number"
                        min="0"
                        value={exerciseForm.rest}
                        onChange={(e) => setExerciseForm({...exerciseForm, rest: parseInt(e.target.value)})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notas (opcional)</Label>
                    <Textarea 
                      id="notes"
                      value={exerciseForm.notes}
                      onChange={(e) => setExerciseForm({...exerciseForm, notes: e.target.value})}
                      placeholder="Ej: Mantener la espalda recta, respirar profundamente..."
                      className="min-h-[80px]"
                    />
                  </div>
                  
                  <Button 
                    type="button" 
                    onClick={handleAddExercise}
                    disabled={!exerciseForm.name.trim()}
                    className="w-full"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Ejercicio
                  </Button>
                </CardContent>
              </Card>

              {/* Lista de ejercicios agregados */}
              {selectedExercises.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Ejercicios de la Rutina ({selectedExercises.length})</h4>
                  <div className="border rounded-md">
                    <ExerciseList exercises={selectedExercises} onRemoveExercise={handleRemoveExercise} />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4 pt-6">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              <X className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Guardando..." : mode === 'create' ? "Crear Rutina" : "Actualizar Rutina"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
