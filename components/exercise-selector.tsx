"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus } from "lucide-react"

export function ExerciseSelector({ onAddExercise }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Datos de ejemplo para ejercicios
  const exerciseCategories = [
    { id: "all", name: "Todos" },
    { id: "upper", name: "Tren Superior" },
    { id: "lower", name: "Tren Inferior" },
    { id: "core", name: "Core" },
    { id: "cardio", name: "Cardio" },
  ]

  const exercises = [
    { id: 1, name: "Press de Banca", category: "upper", muscle: "Pecho", equipment: "Barra" },
    { id: 2, name: "Sentadilla", category: "lower", muscle: "Piernas", equipment: "Barra" },
    { id: 3, name: "Peso Muerto", category: "lower", muscle: "Espalda/Piernas", equipment: "Barra" },
    { id: 4, name: "Dominadas", category: "upper", muscle: "Espalda", equipment: "Barra" },
    { id: 5, name: "Plancha", category: "core", muscle: "Abdominales", equipment: "Ninguno" },
    { id: 6, name: "Burpees", category: "cardio", muscle: "Full Body", equipment: "Ninguno" },
    { id: 7, name: "Press Militar", category: "upper", muscle: "Hombros", equipment: "Barra" },
    { id: 8, name: "Zancadas", category: "lower", muscle: "Piernas", equipment: "Mancuernas" },
  ]

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || exercise.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddExercise = (exercise) => {
    onAddExercise({
      ...exercise,
      sets: 3,
      reps: 12,
      rest: 60,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar ejercicios..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="sm:w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            {exerciseCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="flex justify-between items-center p-3 border rounded-md">
              <div>
                <div className="font-medium">{exercise.name}</div>
                <div className="text-sm text-muted-foreground">
                  {exercise.muscle} • {exercise.equipment}
                </div>
              </div>
              <Button size="sm" variant="ghost" onClick={() => handleAddExercise(exercise)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ))}

          {filteredExercises.length === 0 && (
            <div className="col-span-full text-center py-8 text-muted-foreground">
              No se encontraron ejercicios. Intenta con otra búsqueda.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

