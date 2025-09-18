"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Exercise {
  id: number
  name: string
  sets: number
  reps: number
  rest: number
  notes?: string
}

interface ExerciseListProps {
  exercises: Exercise[]
  onRemoveExercise: (index: number) => void
}

export function ExerciseList({ exercises = [], onRemoveExercise }: ExerciseListProps) {
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    if (expandedExercise === id) {
      setExpandedExercise(null)
    } else {
      setExpandedExercise(id)
    }
  }

  if (exercises.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No hay ejercicios añadidos. Usa el buscador para añadir ejercicios a la rutina.
      </div>
    )
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Ejercicio</TableHead>
            <TableHead className="w-[80px] text-center">Series</TableHead>
            <TableHead className="w-[80px] text-center">Reps</TableHead>
            <TableHead className="w-[80px] text-center">Descanso</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exercises.map((exercise, index) => (
            <>
              <TableRow key={`${exercise.id}-${index}`}>
                <TableCell>
                  <Button variant="ghost" size="icon" className="cursor-move">
                    <GripVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{exercise.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {exercise.muscle} • {exercise.equipment}
                  </div>
                </TableCell>
                <TableCell className="text-center">{exercise.sets}</TableCell>
                <TableCell className="text-center">{exercise.reps}</TableCell>
                <TableCell className="text-center">{exercise.rest}s</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" onClick={() => toggleExpand(index)}>
                      {expandedExercise === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onRemoveExercise(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              {expandedExercise === index && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <div className="p-4 bg-muted/50 rounded-md space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`sets-${index}`}>Series</Label>
                          <Input id={`sets-${index}`} type="number" min="1" defaultValue={exercise.sets} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`reps-${index}`}>Repeticiones</Label>
                          <Input id={`reps-${index}`} type="number" min="1" defaultValue={exercise.reps} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`rest-${index}`}>Descanso (seg)</Label>
                          <Input id={`rest-${index}`} type="number" min="0" defaultValue={exercise.rest} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`notes-${index}`}>Notas</Label>
                        <Input id={`notes-${index}`} placeholder="Añade instrucciones o notas para este ejercicio..." />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

