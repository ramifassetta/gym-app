"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter } from "lucide-react"
import { CompactFilterDropdown } from "@/components/filter-dropdown"
import { ClientsTable } from "@/components/clients-table"
import { CreateClientModal } from "@/components/create-client-modal"
import { motion } from "framer-motion"

export default function ClientsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [filters, setFilters] = useState({
    status: "",
    paymentStatus: ""
  })

  const handleClientCreated = () => {
    console.log("Cliente creado exitosamente")
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Estado",
      key: "status",
      options: [
        { value: "active", label: "Activos", count: 4 },
        { value: "inactive", label: "Inactivos", count: 1 },
      ]
    },
    {
      title: "Pago",
      key: "paymentStatus",
      options: [
        { value: "al día", label: "Al día", count: 4 },
        { value: "vencido", label: "Vencido", count: 1 },
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
      status: "",
      paymentStatus: ""
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
              Clientes
            </h1>
            <p className="text-muted-foreground mt-1">Gestiona y supervisa a todos tus clientes</p>
          </div>
          <Button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
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
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                  <Search className="h-4 w-4" />
                </div>
                Todos los Clientes
              </CardTitle>
              <CardDescription>Gestiona los perfiles de tus clientes y supervisa su progreso</CardDescription>
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
                    placeholder="Buscar clientes por nombre o email..." 
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
                <ClientsTable />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <CreateClientModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onClientCreated={handleClientCreated}
      />
    </>
  )
}