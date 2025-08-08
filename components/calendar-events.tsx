import { useState } from "react"
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
import { SessionDetailsModal } from "@/components/session-details-modal"

interface CalendarEventsProps {
  date: Date | undefined
  onEditSession?: (session: any) => void
  onSendReminder?: (session: any) => void
  onCancelSession?: (session: any) => void
}

export function CalendarEvents({ 
  date, 
  onEditSession, 
  onSendReminder, 
  onCancelSession 
}: CalendarEventsProps) {
  const [selectedSession, setSelectedSession] = useState<any>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

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

  const handleViewDetails = (event: any) => {
    // Convertir el evento del calendario al formato del modal
    const sessionData = {
      id: event.id.toString(),
      title: event.title,
      type: event.title,
      client: {
        name: event.client,
        avatar: event.avatar,
        goal: "Pérdida de peso" // Datos simulados
      },
      trainer: {
        name: "Carlos Martínez", // Datos simulados
        avatar: null
      },
      date: date?.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) || "",
      time: event.time,
      duration: "60 min",
      location: event.location,
      status: event.status,
      description: "Sesión personalizada diseñada específicamente para los objetivos del cliente.",
      notes: "Cliente prefiere ejercicios de bajo impacto. Evitar ejercicios que afecten la rodilla derecha.",
      exercises: [
        { name: "Sentadillas con peso corporal", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Press de banca", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Remo con mancuernas", sets: 3, reps: "10-12", rest: "60s" },
        { name: "Plancha", sets: 3, reps: "30s", rest: "45s" }
      ]
    }
    
    setSelectedSession(sessionData)
    setIsDetailsModalOpen(true)
  }

  const handleEditSession = (event: any) => {
    const sessionData = {
      id: event.id.toString(),
      title: event.title,
      client: {
        id: 1,
        name: event.client,
        email: "cliente@ejemplo.com",
        avatar: event.avatar || "/placeholder-user.jpg"
      },
      date: date?.toISOString().split('T')[0] || "",
      time: event.time.split(' - ')[0],
      duration: 60,
      type: event.title,
      status: event.status,
      location: event.location
    }
    
    onEditSession?.(sessionData)
  }

  const handleSendReminder = (event: any) => {
    const sessionData = {
      id: event.id.toString(),
      title: event.title,
      client: {
        id: 1,
        name: event.client,
        email: "cliente@ejemplo.com",
        phone: "+1234567890",
        avatar: event.avatar || "/placeholder-user.jpg"
      },
      date: date?.toISOString().split('T')[0] || "",
      time: event.time.split(' - ')[0],
      duration: 60,
      type: event.title,
      status: event.status,
      location: event.location
    }
    
    onSendReminder?.(sessionData)
  }

  const handleCancelSession = (event: any) => {
    const sessionData = {
      id: event.id.toString(),
      title: event.title,
      client: {
        id: 1,
        name: event.client,
        email: "cliente@ejemplo.com",
        phone: "+1234567890",
        avatar: event.avatar || "/placeholder-user.jpg"
      },
      date: date?.toISOString().split('T')[0] || "",
      time: event.time.split(' - ')[0],
      duration: 60,
      type: event.title,
      status: event.status,
      location: event.location
    }
    
    onCancelSession?.(sessionData)
  }

  if (!date) {
    return (
      <div className="text-center py-6 sm:py-8 text-muted-foreground text-sm sm:text-base">
        Selecciona una fecha para ver las sesiones programadas.
      </div>
    )
  }

  if (events.length === 0) {
    return <div className="text-center py-6 sm:py-8 text-muted-foreground text-sm sm:text-base">No hay sesiones programadas para este día.</div>
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {events.map((event) => (
        <div 
          key={event.id} 
          className="flex flex-col p-3 sm:p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
            <div className="flex-1">
              <div className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent text-sm sm:text-base">
                {event.title}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-5 w-5 sm:h-6 sm:w-6 border-2 border-primary/20 shadow-sm">
                  {event.avatar ? (
                    <AvatarImage src={event.avatar} alt={event.client} />
                  ) : null}
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold text-xs">
                    {event.client.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs sm:text-sm">{event.client}</span>
              </div>
            </div>
            <Badge 
              className={`text-xs sm:text-sm ${
                event.status === "confirmed" 
                  ? "bg-gradient-to-r from-primary to-primary/80 text-white" 
                  : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"
              }`}
            >
              {event.status === "confirmed" ? "Confirmada" : "Pendiente"}
            </Badge>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              {event.location}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-3 sm:mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-all duration-300 h-8 w-8 sm:h-9 sm:w-9"
                >
                  <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                <DropdownMenuItem 
                  className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-sm"
                  onClick={() => handleEditSession(event)}
                >
                  Editar Sesión
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200 text-sm"
                  onClick={() => handleSendReminder(event)}
                >
                  Enviar Recordatorio
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem 
                  className="text-destructive hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200 text-sm"
                  onClick={() => handleCancelSession(event)}
                >
                  Cancelar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleViewDetails(event)}
              className="border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 text-xs sm:text-sm h-8 sm:h-9"
            >
              Ver Detalles
            </Button>
          </div>
        </div>
      ))}
      
      <SessionDetailsModal 
        open={isDetailsModalOpen}
        onOpenChange={setIsDetailsModalOpen}
        session={selectedSession}
      />
    </div>
  )
}

