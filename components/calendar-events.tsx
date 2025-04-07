import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CalendarEvents({ date }) {
  // Datos de ejemplo para sesiones
  const events = [
    {
      id: 1,
      title: "Entrenamiento Personal",
      client: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      time: "09:00 - 10:00",
      location: "Sala de Pesas",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Evaluación Física",
      client: "María García",
      avatar: "/placeholder-user.jpg",
      time: "11:30 - 12:30",
      location: "Sala de Evaluación",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Entrenamiento Personal",
      client: "Carlos López",
      avatar: "/placeholder-user.jpg",
      time: "16:00 - 17:00",
      location: "Área de Cardio",
      status: "pending",
    },
  ]

  if (!date) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Selecciona una fecha para ver las sesiones programadas.
      </div>
    )
  }

  if (events.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No hay sesiones programadas para este día.</div>
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col p-4 rounded-lg border">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{event.title}</div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={event.avatar} alt={event.client} />
                  <AvatarFallback>{event.client.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{event.client}</span>
              </div>
            </div>
            <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>
              {event.status === "confirmed" ? "Confirmada" : "Pendiente"}
            </Badge>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {event.location}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar Sesión</DropdownMenuItem>
                <DropdownMenuItem>Enviar Recordatorio</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Cancelar Sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm">
              Ver Detalles
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

