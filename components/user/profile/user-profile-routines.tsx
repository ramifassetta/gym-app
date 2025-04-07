import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function UserProfileRoutines() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza - Nivel Intermedio",
      trainer: "Carlos Martínez",
      level: "Intermedio",
      progress: 75,
      lastUsed: "Hace 2 días",
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      trainer: "Laura Sánchez",
      level: "Principiante",
      progress: 30,
      lastUsed: "Hoy",
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      trainer: "Miguel Ángel Ruiz",
      level: "Avanzado",
      progress: 50,
      lastUsed: "Ayer",
    },
  ]

  return (
    <div className="space-y-4">
      {routines.map((routine) => (
        <Card key={routine.id}>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-medium">{routine.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">Entrenador: {routine.trainer}</span>
                  <Badge variant="outline">{routine.level}</Badge>
                </div>
              </div>
              <Link href={`/user-dashboard/routines/${routine.id}`}>
                <Button size="sm">Ver Rutina</Button>
              </Link>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progreso</span>
                <span className="font-medium">{routine.progress}%</span>
              </div>
              <Progress value={routine.progress} className="h-2" />
              <div className="text-xs text-right text-muted-foreground">Último uso: {routine.lastUsed}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

