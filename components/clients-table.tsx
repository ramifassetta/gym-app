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

export function ClientsTable() {
  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@ejemplo.com",
      status: "active",
      goal: "Pérdida de peso",
      lastActive: "Hace 2 días",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "María García",
      email: "maria@ejemplo.com",
      status: "active",
      goal: "Tonificación",
      lastActive: "Hoy",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@ejemplo.com",
      status: "inactive",
      goal: "Ganancia muscular",
      lastActive: "Hace 1 semana",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana@ejemplo.com",
      status: "active",
      goal: "Resistencia",
      lastActive: "Ayer",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      email: "roberto@ejemplo.com",
      status: "active",
      goal: "Flexibilidad",
      lastActive: "Hace 3 días",
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <div className="rounded-xl border border-primary/10 overflow-hidden bg-gradient-to-br from-card to-card/50 shadow-lg">
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
          {clients.map((client, index) => (
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
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300">
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
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/dashboard/routines/create?client=${client.id}`}
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200"
                      >
                        <Dumbbell className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Crear Rutina</span>
                      </Link>
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
                    <DropdownMenuItem className="flex items-center text-destructive cursor-pointer hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-200">
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