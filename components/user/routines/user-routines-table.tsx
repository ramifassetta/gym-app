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

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Entrenador</TableHead>
            <TableHead>Nivel</TableHead>
            <TableHead>Progreso</TableHead>
            <TableHead>Último uso</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routines.map((routine) => (
            <TableRow key={routine.id}>
              <TableCell className="font-medium">{routine.name}</TableCell>
              <TableCell>{routine.trainer}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    routine.level === "Principiante"
                      ? "secondary"
                      : routine.level === "Intermedio"
                        ? "default"
                        : "outline"
                  }
                >
                  {routine.level}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="w-full max-w-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{routine.progress}%</span>
                  </div>
                  <Progress value={routine.progress} className="h-2" />
                </div>
              </TableCell>
              <TableCell>{routine.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/user-dashboard/routines/${routine.id}`}
                        className="flex items-center cursor-pointer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Ver Rutina</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Contactar Entrenador</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

