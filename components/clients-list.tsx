import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function ClientsList() {
  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@ejemplo.com",
      status: "active",
      goal: "Pérdida de peso",
      lastActive: "Hace 2 días",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "María García",
      email: "maria@ejemplo.com",
      status: "active",
      goal: "Tonificación",
      lastActive: "Hoy",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@ejemplo.com",
      status: "inactive",
      goal: "Ganancia muscular",
      lastActive: "Hace 1 semana",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Ana Martínez",
      email: "ana@ejemplo.com",
      status: "active",
      goal: "Resistencia",
      lastActive: "Ayer",
      avatar: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-4">
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-lg border hover:shadow-md transition-all duration-300 hover:border-primary/20 bg-gradient-to-r from-background to-background/80"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-primary/10">
              <AvatarImage src={client.avatar} alt={client.name} />
              <AvatarFallback className="bg-primary/10 text-primary">{client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-lg">{client.name}</div>
              <div className="text-sm text-muted-foreground">{client.email}</div>
              <div className="flex items-center gap-2 mt-1.5">
                <Badge 
                  variant={client.status === "active" ? "default" : "secondary"}
                  className={client.status === "active" ? "bg-green-500/80 hover:bg-green-500" : ""}
                >
                  {client.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{client.goal}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <Link href={`/dashboard/clients/${client.id}`}>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                Ver Perfil
              </Button>
            </Link>
            <Link href={`/dashboard/routines/create?client=${client.id}`}>
              <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary shadow-sm hover:shadow">Crear Rutina</Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}