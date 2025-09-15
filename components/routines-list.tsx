import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dumbbell, Clock, Calendar, Eye, FileEdit } from "lucide-react"
import { motion } from "framer-motion"
import { RoutineDetailsModal } from "./routine-details-modal"
import { EditRoutineModal } from "./edit-routine-modal"

export function RoutinesList() {
  const [selectedRoutine, setSelectedRoutine] = useState<any>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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


  const handleViewDetails = (routineId: number) => {
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
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
    }
  }

  const handleEditRoutine = (routineId: number) => {
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
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
    }
  }

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
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/20 hover:border-primary hover:bg-primary/5"
              onClick={() => handleViewDetails(routine.id)}
            >
              <Eye className="mr-2 h-4 w-4" />
              Ver Detalles
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary shadow-sm hover:shadow"
              onClick={() => handleEditRoutine(routine.id)}
            >
              <FileEdit className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </div>
        </motion.div>
      ))}
      
      {/* Modales */}
      <RoutineDetailsModal
        open={isDetailsModalOpen}
        onOpenChange={(open) => setIsDetailsModalOpen(open)}
        routine={selectedRoutine}
        onEdit={handleEditRoutine}
        onSend={() => {}}
        onDuplicate={() => {}}
        onDelete={() => {}}
      />

      <EditRoutineModal
        open={isEditModalOpen}
        onOpenChange={(open) => setIsEditModalOpen(open)}
        routine={selectedRoutine}
        onSave={(updatedRoutine) => {
          console.log("Rutina actualizada:", updatedRoutine);
          setIsEditModalOpen(false);
        }}
      />
    </div>
  )
}