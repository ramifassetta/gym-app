import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { motion } from "framer-motion"

export function UserProfileRoutines() {
  const getLevelVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case 'principiante':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
      case 'intermedio':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
      case 'avanzado':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
      default:
        return 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary'
    }
  }

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
      {routines.map((routine, index) => (
        <motion.div
          key={routine.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-medium text-foreground">
                    {routine.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-muted-foreground">Entrenador: {routine.trainer}</span>
                    <Badge className={getLevelVariant(routine.level)}>
                      {routine.level}
                    </Badge>
                  </div>
                </div>
                <Link href={`/user-dashboard/routines/${routine.id}`}>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Ver Rutina
                  </Button>
                </Link>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progreso</span>
                  <span className="font-medium text-primary">
                    {routine.progress}%
                  </span>
                </div>
                <Progress 
                  value={routine.progress} 
                  className="h-2 bg-primary/10"
                />
                <div className="text-xs text-right text-muted-foreground">Último uso: {routine.lastUsed}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

