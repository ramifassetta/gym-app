import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function UserRoutinesTable() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza - Nivel Intermedio",
      trainer: "Carlos Martínez",
      level: "Intermedio",
      exercises: 8,
      duration: 60,
      progress: 75,
      lastUpdated: "15/07/2023",
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      trainer: "Laura Sánchez",
      level: "Principiante",
      exercises: 6,
      duration: 45,
      progress: 30,
      lastUpdated: "20/07/2023",
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      trainer: "Miguel Ángel Ruiz",
      level: "Avanzado",
      exercises: 10,
      duration: 75,
      progress: 50,
      lastUpdated: "18/07/2023",
    },
    {
      id: 4,
      name: "Core y Flexibilidad",
      trainer: "Ana Gómez",
      level: "Principiante",
      exercises: 8,
      duration: 40,
      progress: 100,
      lastUpdated: "10/07/2023",
    },
    {
      id: 5,
      name: "Entrenamiento HIIT",
      trainer: "Carlos Martínez",
      level: "Avanzado",
      exercises: 12,
      duration: 30,
      progress: 25,
      lastUpdated: "22/07/2023",
    },
  ]

  const getLevelVariant = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "Intermedio":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      case "Avanzado":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      default:
        return "default"
    }
  }

  return (
    <div className="rounded-xl border border-primary/10 overflow-hidden bg-gradient-to-br from-background to-muted/20 shadow-lg">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-muted/30 to-muted/10 border-primary/10 hover:bg-gradient-to-r hover:from-muted/40 hover:to-muted/20">
            <TableHead className="font-semibold text-foreground">Nombre</TableHead>
            <TableHead className="font-semibold text-foreground">Entrenador</TableHead>
            <TableHead className="font-semibold text-foreground">Nivel</TableHead>
            <TableHead className="font-semibold text-foreground">Progreso</TableHead>
            <TableHead className="font-semibold text-foreground">Último uso</TableHead>
            <TableHead className="text-right font-semibold text-foreground">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routines.map((routine, index) => (
            <motion.tr
              key={routine.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="border-primary/10 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/2 transition-all duration-300 group"
            >
              <TableCell className="font-medium group-hover:text-primary transition-colors duration-300">
                {routine.name}
              </TableCell>
              <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {routine.trainer}
              </TableCell>
              <TableCell>
                <Badge className={getLevelVariant(routine.level)}>
                  {routine.level}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="w-full max-w-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium group-hover:text-foreground transition-colors duration-300">
                      {routine.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={routine.progress} 
                    className="h-2 bg-primary/20 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/80"
                  />
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {routine.lastUpdated}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:scale-105 transition-all duration-300"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="end" 
                    className="bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl"
                  >
                    <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-primary/20" />
                    <DropdownMenuItem asChild>
                      <Link 
                        href={`/user-dashboard/routines/${routine.id}`} 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Ver Rutina</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Contactar Entrenador</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

