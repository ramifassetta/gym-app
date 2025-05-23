import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Clock, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function UserRoutinesList() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza - Nivel Intermedio",
      trainer: "Carlos Martínez",
      level: "Intermedio",
      exercises: 8,
      duration: 60,
      progress: 75,
      lastUpdated: "Hace 2 días",
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      trainer: "Laura Sánchez",
      level: "Principiante",
      exercises: 6,
      duration: 45,
      progress: 30,
      lastUpdated: "Hoy",
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      trainer: "Miguel Ángel Ruiz",
      level: "Avanzado",
      exercises: 10,
      duration: 75,
      progress: 50,
      lastUpdated: "Ayer",
    },
  ]

  return (
    <div className="space-y-4">
      {routines.map((routine) => (
        <div 
          key={routine.id} 
          className="flex flex-col p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {routine.name}
              </div>
              <div className="text-sm text-muted-foreground">Entrenador: {routine.trainer}</div>
            </div>
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
              {routine.level}
            </Badge>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso</span>
              <span className="font-medium">{routine.progress}%</span>
            </div>
            <Progress 
              value={routine.progress} 
              className="h-2 bg-primary/20 [&>div]:bg-primary"
            />
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Dumbbell className="mr-1 h-4 w-4 text-primary" />
              {routine.exercises} ejercicios
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-primary" />
              {routine.duration} min
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-primary" />
              {routine.lastUpdated}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Link href={`/user-dashboard/routines/${routine.id}`}>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Ver Rutina
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

