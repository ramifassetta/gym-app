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

interface CalendarEventsProps {
  date: Date | undefined
}

export function CalendarEvents({ date }: CalendarEventsProps) {
  // Datos de ejemplo para sesiones
  const events = [
    {
      id: 1,
      title: "Entrenamiento Personal",
      client: "Juan Pérez",
      avatar: null,
      time: "09:00 - 10:00",
      location: "Sala de Pesas",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Evaluación Física",
      client: "María García",
      avatar: null,
      time: "11:30 - 12:30",
      location: "Sala de Evaluación",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Entrenamiento Personal",
      client: "Carlos López",
      avatar: null,
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
        <div 
          key={event.id} 
          className="flex flex-col p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {event.title}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6 border-2 border-primary/20 shadow-sm">
                  {event.avatar ? (
                    <AvatarImage src={event.avatar} alt={event.client} />
                  ) : null}
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                    {event.client.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{event.client}</span>
              </div>
            </div>
            <Badge 
              className={event.status === "confirmed" 
                ? "bg-gradient-to-r from-primary to-primary/80 text-white" 
                : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
              }
            >
              {event.status === "confirmed" ? "Confirmada" : "Pendiente"}
            </Badge>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              {event.location}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                  Editar Sesión
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                  Enviar Recordatorio
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem className="text-destructive hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-200">
                  Cancelar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

