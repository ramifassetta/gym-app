import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Clock, Calendar } from "lucide-react"

export function RoutinesList() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza",
      client: "Juan Pérez",
      exercises: 8,
      duration: 60,
      createdAt: "12/06/2023",
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      client: "María García",
      exercises: 6,
      duration: 45,
      createdAt: "15/06/2023",
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      client: "Carlos López",
      exercises: 10,
      duration: 75,
      createdAt: "18/06/2023",
    },
  ]

  return (
    <div className="space-y-4">
      {routines.map((routine) => (
        <div key={routine.id} className="flex flex-col p-4 rounded-lg border">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{routine.name}</div>
              <div className="text-sm text-muted-foreground">Cliente: {routine.client}</div>
            </div>
            <Badge>{routine.level}</Badge>
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Dumbbell className="mr-1 h-4 w-4" />
              {routine.exercises} ejercicios
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {routine.duration} min
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {routine.createdAt}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Link href={`/dashboard/routines/${routine.id}`}>
              <Button variant="outline" size="sm">
                Ver Detalles
              </Button>
            </Link>
            <Link href={`/dashboard/routines/${routine.id}/edit`}>
              <Button size="sm">Editar</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

