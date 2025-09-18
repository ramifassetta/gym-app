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
import { RoutineManagementModal } from "@/components/routine-management-modal"
import { DeleteClientModal } from "@/components/delete-client-modal"
import { CompactFilterDropdown } from "./filter-dropdown"

export function ClientsTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'delete'>('create')
  const [selectedClient, setSelectedClient] = useState<{ id: number; name: string } | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [clientToDelete, setClientToDelete] = useState<any>(null)
  const [filters, setFilters] = useState({
    status: "",
    paymentStatus: ""
  })

  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@ejemplo.com",
      phone: "+1234567890",
      status: "active",
      lastActive: "Hace 2 días",
      avatar: "/placeholder-user.jpg",
      joinDate: "15/01/2024",
      activeRoutines: 2,
      subscriptionExpires: "15/02/2024",
      paymentStatus: "al día",
      membershipType: "Mensual"
    },
    {
      id: 2,
      name: "María García",
      email: "maria@ejemplo.com",
      phone: "+1234567891",
      status: "active",
      lastActive: "Hoy",
      avatar: "/placeholder-user.jpg",
      joinDate: "20/02/2024",
      activeRoutines: 1,
      subscriptionExpires: "20/03/2024",
      paymentStatus: "al día",
      membershipType: "Mensual"
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@ejemplo.com",
      phone: "+1234567892",
      status: "inactive",
      lastActive: "Hace 1 semana",
      avatar: "/placeholder-user.jpg",
      joinDate: "10/12/2023",
      activeRoutines: 0,
      subscriptionExpires: "10/01/2024",
      paymentStatus: "vencido",
      membershipType: "Mensual"
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana@ejemplo.com",
      phone: "+1234567893",
      status: "active",
      lastActive: "Ayer",
      avatar: "/placeholder-user.jpg",
      joinDate: "05/03/2024",
      activeRoutines: 3,
      subscriptionExpires: "05/04/2024",
      paymentStatus: "al día",
      membershipType: "Mensual"
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      email: "roberto@ejemplo.com",
      phone: "+1234567894",
      status: "active",
      lastActive: "Hace 3 días",
      avatar: "/placeholder-user.jpg",
      joinDate: "25/01/2024",
      activeRoutines: 1,
      subscriptionExpires: "25/02/2024",
      paymentStatus: "al día",
      membershipType: "Mensual"
    },
  ]

  const handleCreateRoutine = (client: { id: number; name: string }) => {
    setSelectedClient(client)
    setModalMode('create')
    setModalOpen(true)
  }

  const handleEditRoutine = (client: { id: number; name: string }) => {
    setSelectedClient(client)
    setModalMode('edit')
    setModalOpen(true)
  }

  const handleDeleteRoutine = (client: { id: number; name: string }) => {
    setSelectedClient(client)
    setModalMode('delete')
    setModalOpen(true)
  }

  const handleRoutineCreated = () => {
    console.log("Rutina creada exitosamente para:", selectedClient?.name)
  }

  const handleRoutineUpdated = () => {
    console.log("Rutina actualizada exitosamente para:", selectedClient?.name)
  }

  const handleRoutineDeleted = () => {
    console.log("Rutina eliminada exitosamente para:", selectedClient?.name)
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
      title: "Pago",
      key: "paymentStatus",
      options: [
        { value: "al día", label: "Al día", count: clients.filter(c => c.paymentStatus === "al día").length },
        { value: "vencido", label: "Vencido", count: clients.filter(c => c.paymentStatus === "vencido").length },
      ]
    }
  ]

  // Filtrar clientes
  const filteredClients = clients.filter(client => {
    const statusMatch = !filters.status || client.status === filters.status
    const paymentMatch = !filters.paymentStatus || client.paymentStatus === filters.paymentStatus
    return statusMatch && paymentMatch
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
      paymentStatus: ""
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
                  {client.activeRoutines > 0 && (
                    <>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                        onClick={() => handleEditRoutine(client)}
                      >
                        <Dumbbell className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Editar Rutina</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200"
                        onClick={() => handleDeleteRoutine(client)}
                      >
                        <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                        <span>Eliminar Rutina</span>
                      </DropdownMenuItem>
                    </>
                  )}
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
                <span className="text-sm text-muted-foreground">Pago:</span>
                <Badge 
                  variant={client.paymentStatus === "al día" ? "default" : "destructive"}
                  className={client.paymentStatus === "al día" 
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-sm" 
                    : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                  }
                >
                  {client.paymentStatus === "al día" ? "Al día" : "Vencido"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Vence:</span>
                <span className="text-sm text-muted-foreground">{client.subscriptionExpires}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rutinas:</span>
                <span className="text-sm text-muted-foreground">{client.activeRoutines} activas</span>
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
              <TableHead className="font-semibold text-foreground">Estado</TableHead>
              <TableHead className="font-semibold text-foreground">Pago</TableHead>
              <TableHead className="font-semibold text-foreground">Vence</TableHead>
              <TableHead className="font-semibold text-foreground">Rutinas</TableHead>
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
                <TableCell>
                  <Badge 
                    variant={client.paymentStatus === "al día" ? "default" : "destructive"}
                    className={client.paymentStatus === "al día" 
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-sm" 
                      : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                    }
                  >
                    {client.paymentStatus === "al día" ? "Al día" : "Vencido"}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{client.subscriptionExpires}</TableCell>
                <TableCell className="text-muted-foreground">{client.activeRoutines} activas</TableCell>
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
                      {client.activeRoutines > 0 && (
                        <>
                          <DropdownMenuItem 
                            className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                            onClick={() => handleEditRoutine(client)}
                          >
                            <Dumbbell className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Editar Rutina</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200"
                            onClick={() => handleDeleteRoutine(client)}
                          >
                            <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                            <span>Eliminar Rutina</span>
                          </DropdownMenuItem>
                        </>
                      )}
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

      <RoutineManagementModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        clientId={selectedClient?.id}
        clientName={selectedClient?.name}
        mode={modalMode}
        onRoutineCreated={handleRoutineCreated}
        onRoutineUpdated={handleRoutineUpdated}
        onRoutineDeleted={handleRoutineDeleted}
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