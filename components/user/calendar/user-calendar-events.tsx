import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, MoreHorizontal, X, Check } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

export function UserCalendarEvents({ date }: { date?: Date }) {
  // Datos de ejemplo para sesiones
  const events = [
    {
      id: 1,
      title: "Entrenamiento Personal",
      trainer: "Carlos Martínez",
      avatar: "/placeholder-user.jpg",
      time: "09:00 - 10:00",
      location: "Sala de Pesas",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Evaluación Física",
      trainer: "Laura Sánchez",
      avatar: "/placeholder-user.jpg",
      time: "11:30 - 12:30",
      location: "Sala de Evaluación",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Entrenamiento Personal",
      trainer: "Miguel Ángel Ruiz",
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
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className="flex flex-col p-4 rounded-lg border border-primary/10 bg-gradient-to-br from-background to-background/80 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {event.title}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6 border border-primary/10 shadow-sm">
                  <AvatarImage src={event.avatar} alt={event.trainer} />
                  <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                    {event.trainer.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {event.trainer}
                </span>
              </div>
            </div>
            <Badge 
              variant={event.status === "confirmed" ? "default" : "secondary"}
              className={event.status === "confirmed" 
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white" 
                : "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              }
            >
              {event.status === "confirmed" ? "Confirmada" : "Pendiente"}
            </Badge>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center group-hover:text-foreground transition-colors duration-300">
              <Clock className="mr-2 h-4 w-4 text-primary" />
              {event.time}
            </div>
            <div className="flex items-center group-hover:text-foreground transition-colors duration-300">
              <MapPin className="mr-2 h-4 w-4 text-primary" />
              {event.location}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            {event.status === "pending" ? (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <X className="mr-1 h-4 w-4" /> Rechazar
                </Button>
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Check className="mr-1 h-4 w-4" /> Confirmar
                </Button>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <MoreHorizontal className="mr-1 h-4 w-4" /> Opciones
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end"
                  className="bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl"
                >
                  <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300">
                    Añadir a calendario
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300">
                    Contactar entrenador
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem className="text-destructive flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5 transition-all duration-300">
                    Cancelar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

