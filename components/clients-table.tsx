"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { MoreHorizontal, FileEdit, Trash2, Dumbbell, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CreateRoutineFromClientModal } from "@/components/create-routine-from-client-modal"
import { DeleteClientModal } from "@/components/delete-client-modal"
import { CompactFilterDropdown } from "./filter-dropdown"

export function ClientsTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<{ id: number; name: string } | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [clientToDelete, setClientToDelete] = useState<any>(null)
  const [filters, setFilters] = useState({
    status: "",
    goal: ""
  })

  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@ejemplo.com",
      phone: "+1234567890",
      status: "active",
      goal: "Pérdida de peso",
      lastActive: "Hace 2 días",
      avatar: "/placeholder-user.jpg",
      level: "Intermedio",
      joinDate: "15/01/2024",
      activeRoutines: 2,
      totalSessions: 45,
      lastSession: "Hace 2 días"
    },
    {
      id: 2,
      name: "María García",
      email: "maria@ejemplo.com",
      phone: "+1234567891",
      status: "active",
      goal: "Tonificación",
      lastActive: "Hoy",
      avatar: "/placeholder-user.jpg",
      level: "Principiante",
      joinDate: "20/02/2024",
      activeRoutines: 1,
      totalSessions: 23,
      lastSession: "Hoy"
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@ejemplo.com",
      phone: "+1234567892",
      status: "inactive",
      goal: "Ganancia muscular",
      lastActive: "Hace 1 semana",
      avatar: "/placeholder-user.jpg",
      level: "Avanzado",
      joinDate: "10/12/2023",
      activeRoutines: 0,
      totalSessions: 67,
      lastSession: "Hace 1 semana"
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana@ejemplo.com",
      phone: "+1234567893",
      status: "active",
      goal: "Resistencia",
      lastActive: "Ayer",
      avatar: "/placeholder-user.jpg",
      level: "Intermedio",
      joinDate: "05/03/2024",
      activeRoutines: 3,
      totalSessions: 34,
      lastSession: "Ayer"
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      email: "roberto@ejemplo.com",
      phone: "+1234567894",
      status: "active",
      goal: "Flexibilidad",
      lastActive: "Hace 3 días",
      avatar: "/placeholder-user.jpg",
      level: "Principiante",
      joinDate: "25/01/2024",
      activeRoutines: 1,
      totalSessions: 18,
      lastSession: "Hace 3 días"
    },
  ]

  const handleCreateRoutine = (client: { id: number; name: string }) => {
    setSelectedClient(client)
    setModalOpen(true)
  }

  const handleRoutineCreated = () => {
    console.log("Rutina creada exitosamente para:", selectedClient?.name)
  }

  const handleDeleteClient = (client: any) => {
    setClientToDelete(client)
    setDeleteModalOpen(true)
  }

  const handleClientDeleted = (data: any) => {
    console.log("Cliente eliminado:", data)
    // Aquí puedes actualizar la lista de clientes
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Estado",
      key: "status",
      options: [
        { value: "active", label: "Activos", count: clients.filter(c => c.status === "active").length },
        { value: "inactive", label: "Inactivos", count: clients.filter(c => c.status === "inactive").length },
      ]
    },
    {
      title: "Objetivo",
      key: "goal",
      options: [
        { value: "Pérdida de peso", label: "Pérdida de peso", count: clients.filter(c => c.goal === "Pérdida de peso").length },
        { value: "Tonificación", label: "Tonificación", count: clients.filter(c => c.goal === "Tonificación").length },
        { value: "Ganancia muscular", label: "Ganancia muscular", count: clients.filter(c => c.goal === "Ganancia muscular").length },
        { value: "Resistencia", label: "Resistencia", count: clients.filter(c => c.goal === "Resistencia").length },
        { value: "Flexibilidad", label: "Flexibilidad", count: clients.filter(c => c.goal === "Flexibilidad").length },
      ]
    }
  ]

  // Filtrar clientes
  const filteredClients = clients.filter(client => {
    const statusMatch = !filters.status || client.status === filters.status
    const goalMatch = !filters.goal || client.goal === filters.goal
    return statusMatch && goalMatch
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearAllFilters = () => {
    setFilters({
      status: "",
      goal: ""
    })
  }

  return (
    <>


      {/* Vista de tarjetas para móviles */}
      <div className="lg:hidden space-y-3">
        {filteredClients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-xl border border-primary/10 bg-gradient-to-br from-card to-card/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-primary/20 shadow-md">
                    <AvatarImage src={client.avatar} alt={client.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                      {client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full border-2 border-background shadow-sm"></div>
                </div>
                <div>
                  <div className="font-medium text-foreground">{client.name}</div>
                  <div className="text-sm text-muted-foreground">{client.email}</div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-48 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl"
                >
                  <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem asChild>
                    <Link 
                      href={`/dashboard/clients/${client.id}`} 
                      className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                    >
                      <FileEdit className="mr-2 h-4 w-4 text-blue-500" />
                      <span>Ver Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                    onClick={() => handleCreateRoutine(client)}
                  >
                    <Dumbbell className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Crear Rutina</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/dashboard/messages?client=${client.id}`}
                      className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                    >
                      <MessageSquare className="mr-2 h-4 w-4 text-cyan-500" />
                      <span>Enviar Mensaje</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Eliminar</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Objetivo:</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
                  {client.goal}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Estado:</span>
                <Badge 
                  variant={client.status === "active" ? "default" : "secondary"}
                  className={client.status === "active" 
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-sm" 
                    : "bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-white"
                  }
                >
                  {client.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Última actividad:</span>
                <span className="text-sm text-muted-foreground">{client.lastActive}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vista de tabla para desktop */}
      <div className="hidden lg:block rounded-xl border border-primary/10 overflow-hidden bg-gradient-to-br from-card to-card/50 shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-primary/10 bg-gradient-to-r from-muted/50 to-muted/30 hover:bg-muted/60">
              <TableHead className="font-semibold text-foreground">Cliente</TableHead>
              <TableHead className="font-semibold text-foreground">Objetivo</TableHead>
              <TableHead className="font-semibold text-foreground">Estado</TableHead>
              <TableHead className="font-semibold text-foreground">Última Actividad</TableHead>
              <TableHead className="text-right font-semibold text-foreground">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-primary/5 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300 group"
              >
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10 border-2 border-primary/20 shadow-md group-hover:border-primary/40 transition-all duration-300">
                        <AvatarImage src={client.avatar} alt={client.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                          {client.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full border-2 border-background shadow-sm"></div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {client.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{client.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800">
                    {client.goal}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={client.status === "active" ? "default" : "secondary"}
                    className={client.status === "active" 
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-sm" 
                      : "bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-white"
                    }
                  >
                    {client.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{client.lastActive}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="h-8 w-8 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menú</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="end" 
                      className="w-48 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl"
                    >
                      <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem asChild>
                        <Link 
                          href={`/dashboard/clients/${client.id}`} 
                          className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                        >
                          <FileEdit className="mr-2 h-4 w-4 text-blue-500" />
                          <span>Ver Perfil</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                        onClick={() => handleCreateRoutine(client)}
                      >
                        <Dumbbell className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Crear Rutina</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/dashboard/messages?client=${client.id}`}
                          className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                        >
                          <MessageSquare className="mr-2 h-4 w-4 text-cyan-500" />
                          <span>Enviar Mensaje</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem 
                        className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200"
                        onClick={() => handleDeleteClient(client)}
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

      <CreateRoutineFromClientModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        clientId={selectedClient?.id}
        clientName={selectedClient?.name}
        onRoutineCreated={handleRoutineCreated}
      />

      <DeleteClientModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        client={clientToDelete}
        onDelete={handleClientDeleted}
      />
    </>
  )
}