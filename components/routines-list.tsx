import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Clock, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function RoutinesList() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza - Nivel Intermedio",
      client: "Juan Pérez",
      level: "Intermedio",
      exercises: 8,
      duration: 60,
      createdAt: "12/06/2023",
      color: "bg-amber-100 text-amber-700"
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      client: "María García",
      level: "Principiante",
      exercises: 6,
      duration: 45,
      createdAt: "15/06/2023",
      color: "bg-green-100 text-green-700"
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      client: "Carlos López",
      level: "Avanzado",
      exercises: 10,
      duration: 75,
      createdAt: "18/06/2023",
      color: "bg-red-100 text-red-700"
    },
  ]

  const getBadgeColor = (level: string) => {
    switch(level) {
      case "Principiante": return "bg-green-500/80 hover:bg-green-500";
      case "Intermedio": return "bg-amber-500/80 hover:bg-amber-500";
      case "Avanzado": return "bg-red-500/80 hover:bg-red-500";
      default: return "";
    }
  };

  return (
    <div className="space-y-4">
      {routines.map((routine, index) => (
        <motion.div 
          key={routine.id} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col p-5 rounded-lg border hover:shadow-md transition-all duration-300 hover:border-primary/20 bg-gradient-to-r from-background to-background/80"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium text-lg">{routine.name}</div>
              <div className="text-sm text-muted-foreground">Cliente: {routine.client}</div>
            </div>
            <Badge className={`${getBadgeColor(routine.level)}`}>
              {routine.level}
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
            <div className="flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Dumbbell className="mr-1.5 h-4 w-4" />
              {routine.exercises} ejercicios
            </div>
            <div className="flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Clock className="mr-1.5 h-4 w-4" />
              {routine.duration} min
            </div>
            <div className="flex items-center bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <Calendar className="mr-1.5 h-4 w-4" />
              {routine.createdAt}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-5">
            <Link href={`/dashboard/routines/${routine.id}`}>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                Ver Detalles
              </Button>
            </Link>
            <Link href={`/dashboard/routines/${routine.id}/edit`}>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary shadow-sm hover:shadow">Editar</Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}