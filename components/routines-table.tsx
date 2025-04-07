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

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Nivel</TableHead>
            <TableHead>Ejercicios</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Creada</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routines.map((routine) => (
            <TableRow key={routine.id}>
              <TableCell className="font-medium">{routine.name}</TableCell>
              <TableCell>{routine.client}</TableCell>
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
              <TableCell>{routine.exercises}</TableCell>
              <TableCell>{routine.duration} min</TableCell>
              <TableCell>{routine.createdAt}</TableCell>
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
                      <Link href={`/dashboard/routines/${routine.id}`} className="flex items-center cursor-pointer">
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Ver Detalles</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/routines/${routine.id}/edit`}
                        className="flex items-center cursor-pointer"
                      >
                        <FileEdit className="mr-2 h-4 w-4" />
                        <span>Editar</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Send className="mr-2 h-4 w-4" />
                      <span>Enviar al Cliente</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Duplicar</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center text-destructive cursor-pointer">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Eliminar</span>
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

