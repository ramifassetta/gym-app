"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter } from "lucide-react"
import { CompactFilterDropdown } from "@/components/filter-dropdown"
import { RoutinesTable } from "@/components/routines-table"
import { CreateRoutineModal } from "@/components/create-routine-modal"
import { motion } from "framer-motion"

export default function RoutinesPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [filters, setFilters] = useState({
    level: "",
    client: ""
  })

  const handleRoutineCreated = () => {
    // Aquí podrías refrescar la lista de rutinas
    console.log("Rutina creada exitosamente")
  }

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsCreateModalOpen(true)
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Nivel",
      key: "level",
      options: [
        { value: "Principiante", label: "Principiante", count: 2 },
        { value: "Intermedio", label: "Intermedio", count: 2 },
        { value: "Avanzado", label: "Avanzado", count: 1 },
      ]
    },
    {
      title: "Cliente",
      key: "client",
      options: [
        { value: "Juan Pérez", label: "Juan Pérez", count: 1 },
        { value: "María García", label: "María García", count: 1 },
        { value: "Carlos López", label: "Carlos López", count: 1 },
        { value: "Ana Martínez", label: "Ana Martínez", count: 1 },
        { value: "Roberto Sánchez", label: "Roberto Sánchez", count: 1 },
      ]
    }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearAllFilters = () => {
    setFilters({
      level: "",
      client: ""
    })
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Rutinas
            </h1>
            <p className="text-muted-foreground mt-1">Gestiona y crea rutinas de ejercicios para tus clientes</p>
          </div>
          <Button 
            type="button"
            onClick={handleOpenModal}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Plus className="mr-2 h-4 w-4" /> Nueva Rutina
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-sm">
                  <Search className="h-4 w-4" />
                </div>
                Todas las Rutinas
              </CardTitle>
              <CardDescription>Gestiona las rutinas de ejercicios para tus clientes</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Buscar rutinas por nombre o cliente..." 
                    className="pl-10 h-11 bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                  />
                </div>
                <CompactFilterDropdown
                  filterGroups={filterGroups}
                  selectedFilters={filters}
                  onFilterChange={handleFilterChange}
                  onClearAll={handleClearAllFilters}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <RoutinesTable />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <CreateRoutineModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onRoutineCreated={handleRoutineCreated}
      />
    </>
  )
}