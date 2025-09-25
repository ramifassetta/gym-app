"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExerciseList } from "@/components/exercise-list"
import { ClientAutocomplete } from "@/components/client-autocomplete"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Save, X, Plus } from "lucide-react"

interface Exercise {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
  notes?: string
}

interface CreateRoutineModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onRoutineCreated?: () => void
}

interface Client {
  id: number
  name: string
  email: string
  phone?: string
  dni: string
  status: "active" | "inactive"
}

export function CreateRoutineModal({ open, onOpenChange, onRoutineCreated }: CreateRoutineModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [exerciseForm, setExerciseForm] = useState({
    name: '',
    sets: 3,
    reps: 12,
    rest: 60,
    notes: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar que se haya seleccionado un cliente
    if (!selectedClient) {
      alert("Por favor selecciona un cliente para la rutina")
      return
    }

    setIsLoading(true)

    // Simulación de creación de rutina
    setTimeout(() => {
      console.log("Rutina creada para:", selectedClient.name)
      setIsLoading(false)
      onOpenChange(false)
      if (onRoutineCreated) {
        onRoutineCreated()
      }
    }, 1500)
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Crear Nueva Rutina</DialogTitle>
          <DialogDescription>
            Completa la información para crear una nueva rutina de ejercicios
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Rutina</CardTitle>
              <CardDescription>Ingresa los detalles básicos de la rutina</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Rutina</Label>
                <Input id="name" placeholder="Ej: Entrenamiento de Fuerza" required />
              </div>

              <ClientAutocomplete
                label="Cliente"
                placeholder="Buscar cliente por nombre, email o DNI..."
                onClientSelect={setSelectedClient}
                selectedClient={selectedClient}
                required
              />

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
              {isLoading ? "Guardando..." : "Guardar Rutina"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 