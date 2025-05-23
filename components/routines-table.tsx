import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, FileEdit, Trash2, Send, Copy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function RoutinesTable() {
  const routines = [
    {
      id: 1,
      name: "Entrenamiento de Fuerza - Nivel Intermedio",
      client: "Juan Pérez",
      level: "Intermedio",
      exercises: 8,
      duration: 60,
      createdAt: "12/06/2023",
    },
    {
      id: 2,
      name: "Cardio y Tonificación",
      client: "María García",
      level: "Principiante",
      exercises: 6,
      duration: 45,
      createdAt: "15/06/2023",
    },
    {
      id: 3,
      name: "Hipertrofia - Tren Superior",
      client: "Carlos López",
      level: "Avanzado",
      exercises: 10,
      duration: 75,
      createdAt: "18/06/2023",
    },
    {
      id: 4,
      name: "Entrenamiento Funcional",
      client: "Ana Martínez",
      level: "Intermedio",
      exercises: 7,
      duration: 50,
      createdAt: "20/06/2023",
    },
    {
      id: 5,
      name: "Rutina de Flexibilidad",
      client: "Roberto Sánchez",
      level: "Principiante",
      exercises: 5,
      duration: 30,
      createdAt: "22/06/2023",
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
            <TableHead className="font-semibold text-foreground">Cliente</TableHead>
            <TableHead className="font-semibold text-foreground">Nivel</TableHead>
            <TableHead className="font-semibold text-foreground">Ejercicios</TableHead>
            <TableHead className="font-semibold text-foreground">Duración</TableHead>
            <TableHead className="font-semibold text-foreground">Creada</TableHead>
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
                {routine.client}
              </TableCell>
              <TableCell>
                <Badge className={getLevelVariant(routine.level)}>
                  {routine.level}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span className="font-medium">{routine.exercises}</span> ejercicios
              </TableCell>
              <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span className="font-medium">{routine.duration}</span> min
              </TableCell>
              <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {routine.createdAt}
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
                        href={`/dashboard/routines/${routine.id}`} 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      >
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Ver Detalles</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/routines/${routine.id}/edit`}
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      >
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-emerald-500/5 transition-all duration-300">
                      <Send className="mr-2 h-4 w-4" />
                      <span>Enviar al Cliente</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-500/5 transition-all duration-300">
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Duplicar</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-primary/20" />
                    <DropdownMenuItem className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5 transition-all duration-300">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Eliminar</span>
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