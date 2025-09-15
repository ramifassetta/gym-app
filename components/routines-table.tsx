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
import { MoreHorizontal, FileEdit, Trash2, Send, Copy, Eye, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { RoutineDetailsModal } from "./routine-details-modal"
import { EditRoutineModal } from "./edit-routine-modal"
import { SendRoutineModal } from "./send-routine-modal"
import { DeleteRoutineModal } from "./delete-routine-modal"
import { CompactFilterDropdown } from "./filter-dropdown"

export function RoutinesTable() {
  const [selectedRoutine, setSelectedRoutine] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    client: ""
  });

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
    {
      id: 4,
      name: "Entrenamiento Funcional",
      client: "Ana Martínez",
      exercises: 7,
      duration: 50,
      createdAt: "20/06/2023",
    },
    {
      id: 5,
      name: "Rutina de Flexibilidad",
      client: "Roberto Sánchez",
      exercises: 5,
      duration: 30,
      createdAt: "22/06/2023",
    },
  ]


  const handleViewDetails = (routineId: number) => {
    console.log("handleViewDetails called with routineId:", routineId);
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
      console.log("Routine found:", routine);
      // Agregar ejercicios de ejemplo para el modal de detalles
      const routineWithExercises = {
        ...routine,
        exercises: [
          { id: 1, name: "Press de banca", sets: 4, reps: "8-10", rest: "90s", notes: "Mantener la espalda apoyada" },
          { id: 2, name: "Sentadillas", sets: 3, reps: "12-15", rest: "60s", notes: "Pies al ancho de hombros" },
          { id: 3, name: "Peso muerto", sets: 3, reps: "8-10", rest: "120s", notes: "Mantener la espalda recta" },
          { id: 4, name: "Press militar", sets: 3, reps: "10-12", rest: "90s", notes: "Controlar el movimiento" },
          { id: 5, name: "Remo con barra", sets: 4, reps: "10-12", rest: "60s", notes: "Apretar los omóplatos" },
          { id: 6, name: "Curl de bíceps", sets: 3, reps: "12-15", rest: "45s", notes: "Controlar el descenso" },
          { id: 7, name: "Extensiones de tríceps", sets: 3, reps: "12-15", rest: "45s", notes: "Mantener los codos fijos" },
          { id: 8, name: "Plancha", sets: 3, reps: "30s", rest: "30s", notes: "Mantener el cuerpo recto" }
        ].slice(0, routine.exercises)
      };
      setSelectedRoutine(routineWithExercises);
      setIsDetailsModalOpen(true);
      console.log("Modal should be opening now");
    }
  }

  const handleEditRoutine = (routineId: number) => {
    console.log("handleEditRoutine called with routineId:", routineId);
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
      console.log("Routine found for edit:", routine);
      // Agregar ejercicios de ejemplo para el modal de edición
      const routineWithExercises = {
        ...routine,
        exercises: [
          { id: 1, name: "Press de banca", sets: 4, reps: "8-10", rest: "90s", notes: "Mantener la espalda apoyada" },
          { id: 2, name: "Sentadillas", sets: 3, reps: "12-15", rest: "60s", notes: "Pies al ancho de hombros" },
          { id: 3, name: "Peso muerto", sets: 3, reps: "8-10", rest: "120s", notes: "Mantener la espalda recta" },
          { id: 4, name: "Press militar", sets: 3, reps: "10-12", rest: "90s", notes: "Controlar el movimiento" },
          { id: 5, name: "Remo con barra", sets: 4, reps: "10-12", rest: "60s", notes: "Apretar los omóplatos" },
          { id: 6, name: "Curl de bíceps", sets: 3, reps: "12-15", rest: "45s", notes: "Controlar el descenso" },
          { id: 7, name: "Extensiones de tríceps", sets: 3, reps: "12-15", rest: "45s", notes: "Mantener los codos fijos" },
          { id: 8, name: "Plancha", sets: 3, reps: "30s", rest: "30s", notes: "Mantener el cuerpo recto" }
        ].slice(0, routine.exercises)
      };
      setSelectedRoutine(routineWithExercises);
      setIsEditModalOpen(true);
      console.log("Edit modal should be opening now");
    }
  }

  const handleSendToClient = (routineId: number) => {
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
      setSelectedRoutine(routine);
      setIsSendModalOpen(true);
    }
  }

  const handleDuplicateRoutine = (routineId: number) => {
    console.log("Duplicar rutina:", routineId)
    // Aquí podrías implementar la lógica de duplicación
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Cliente",
      key: "client",
      options: [
        { value: "Juan Pérez", label: "Juan Pérez", count: routines.filter(r => r.client === "Juan Pérez").length },
        { value: "María García", label: "María García", count: routines.filter(r => r.client === "María García").length },
        { value: "Carlos López", label: "Carlos López", count: routines.filter(r => r.client === "Carlos López").length },
        { value: "Ana Martínez", label: "Ana Martínez", count: routines.filter(r => r.client === "Ana Martínez").length },
        { value: "Roberto Sánchez", label: "Roberto Sánchez", count: routines.filter(r => r.client === "Roberto Sánchez").length },
      ]
    }
  ]

  // Filtrar rutinas
  const filteredRoutines = routines.filter(routine => {
    const clientMatch = !filters.client || routine.client === filters.client
    return clientMatch
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearAllFilters = () => {
    setFilters({
      client: ""
    })
  }

  const handleDeleteRoutine = (routineId: number) => {
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
      setSelectedRoutine(routine);
      setIsDeleteModalOpen(true);
    }
  }

  return (
    <>


      {/* Vista de tarjetas para móviles */}
      <div className="lg:hidden space-y-3">
        {filteredRoutines.map((routine, index) => (
          <motion.div
            key={routine.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-xl border border-primary/10 bg-gradient-to-br from-card to-card/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">{routine.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <User className="h-3 w-3" />
                  <span>{routine.client}</span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:scale-105 transition-all duration-300"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl"
                >
                  <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                    onClick={() => handleViewDetails(routine.id)}
                  >
                    <Eye className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Ver Detalles</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                    onClick={() => handleEditRoutine(routine.id)}
                  >
                    <FileEdit className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Editar</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-emerald-500/5 transition-all duration-300"
                    onClick={() => handleSendToClient(routine.id)}
                  >
                    <Send className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Enviar al Cliente</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-500/5 transition-all duration-300"
                    onClick={() => handleDuplicateRoutine(routine.id)}
                  >
                    <Copy className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Duplicar</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem 
                    className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5 transition-all duration-300"
                    onClick={() => handleDeleteRoutine(routine.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Eliminar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Ejercicios:</span>
                <span className="text-sm font-medium">{routine.exercises} ejercicios</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Duración:</span>
                <span className="text-sm font-medium">{routine.duration} min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Creada:</span>
                <span className="text-sm text-muted-foreground">{routine.createdAt}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vista de tabla para desktop */}
      <div className="hidden lg:block rounded-xl border border-primary/10 overflow-hidden bg-gradient-to-br from-background to-muted/20 shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-muted/30 to-muted/10 border-primary/10 hover:bg-gradient-to-r hover:from-muted/40 hover:to-muted/20">
              <TableHead className="font-semibold text-foreground">Nombre</TableHead>
              <TableHead className="font-semibold text-foreground">Cliente</TableHead>
              <TableHead className="font-semibold text-foreground">Ejercicios</TableHead>
              <TableHead className="font-semibold text-foreground">Duración</TableHead>
              <TableHead className="font-semibold text-foreground">Creada</TableHead>
              <TableHead className="text-right font-semibold text-foreground">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoutines.map((routine, index) => (
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
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                        onClick={() => handleViewDetails(routine.id)}
                      >
                        <Eye className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Ver Detalles</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                        onClick={() => handleEditRoutine(routine.id)}
                      >
                        <FileEdit className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Editar</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-emerald-500/5 transition-all duration-300"
                        onClick={() => handleSendToClient(routine.id)}
                      >
                        <Send className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Enviar al Cliente</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-500/5 transition-all duration-300"
                        onClick={() => handleDuplicateRoutine(routine.id)}
                      >
                        <Copy className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Duplicar</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem 
                        className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5 transition-all duration-300"
                        onClick={() => handleDeleteRoutine(routine.id)}
                      >
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

      {/* Modales */}
      {console.log("Rendering modals - isDetailsModalOpen:", isDetailsModalOpen, "isEditModalOpen:", isEditModalOpen)}
      <RoutineDetailsModal
        open={isDetailsModalOpen}
        onOpenChange={(open) => {
          console.log("Closing details modal");
          setIsDetailsModalOpen(open);
        }}
        routine={selectedRoutine}
        onEdit={handleEditRoutine}
        onSend={handleSendToClient}
        onDuplicate={handleDuplicateRoutine}
        onDelete={handleDeleteRoutine}
      />

      <EditRoutineModal
        open={isEditModalOpen}
        onOpenChange={(open) => {
          console.log("Closing edit modal");
          setIsEditModalOpen(open);
        }}
        routine={selectedRoutine}
        onSave={(updatedRoutine) => {
          console.log("Rutina actualizada:", updatedRoutine);
          setIsEditModalOpen(false);
        }}
      />

      <SendRoutineModal
        open={isSendModalOpen}
        onOpenChange={(open) => setIsSendModalOpen(open)}
        routine={selectedRoutine}
        onSend={(data) => {
          console.log("Enviando rutina:", data);
          setIsSendModalOpen(false);
        }}
      />

      <DeleteRoutineModal
        open={isDeleteModalOpen}
        onOpenChange={(open) => setIsDeleteModalOpen(open)}
        routine={selectedRoutine}
        onDelete={(routineId) => {
          console.log("Eliminando rutina:", routineId);
          setIsDeleteModalOpen(false);
        }}
      />
    </>
  )
}