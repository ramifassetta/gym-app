"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CreateRoutineFromClientModal } from "@/components/create-routine-from-client-modal"

export function ClientsList() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<{ id: number; name: string } | null>(null)

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
  ]

  const handleCreateRoutine = (client: { id: number; name: string }) => {
    setSelectedClient(client)
    setModalOpen(true)
  }

  const handleRoutineCreated = () => {
    console.log("Rutina creada exitosamente para:", selectedClient?.name)
  }

  return (
    <>
      <div className="space-y-4">
        {clients.map((client) => (
          <div key={client.id} className="flex items-center justify-between p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{client.name}</div>
                <div className="text-sm text-muted-foreground">{client.email}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={client.status === "active" ? "default" : "secondary"}>
                    {client.status === "active" ? "Activo" : "Inactivo"}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{client.goal}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/dashboard/clients/${client.id}`}>
                <Button variant="outline" size="sm">
                  Ver Perfil
                </Button>
              </Link>
              <Button 
                size="sm"
                onClick={() => handleCreateRoutine(client)}
              >
                Crear Rutina
              </Button>
            </div>
          </div>
        ))}
      </div>

      <CreateRoutineFromClientModal 
        open={modalOpen}
        onOpenChange={setModalOpen}
        clientId={selectedClient?.id}
        clientName={selectedClient?.name}
        onRoutineCreated={handleRoutineCreated}
      />
    </>
  )
}

