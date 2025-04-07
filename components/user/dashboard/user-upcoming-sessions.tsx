import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, MapPin } from "lucide-react"

export function UserUpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: "Entrenamiento Personal",
      trainer: "Carlos Martínez",
      avatar: "/placeholder-user.jpg",
      date: "Mañana",
      time: "10:00 - 11:00",
      location: "Sala de Pesas",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Evaluación Física",
      trainer: "Laura Sánchez",
      avatar: "/placeholder-user.jpg",
      date: "Jueves, 15 de Julio",
      time: "16:30 - 17:30",
      location: "Sala de Evaluación",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Entrenamiento Personal",
      trainer: "Miguel Ángel Ruiz",
      avatar: "/placeholder-user.jpg",
      date: "Lunes, 19 de Julio",
      time: "18:00 - 19:00",
      location: "Área Funcional",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="flex flex-col p-4 rounded-lg border">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium">{session.title}</div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={session.avatar} alt={session.trainer} />
                  <AvatarFallback>{session.trainer.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{session.trainer}</span>
              </div>
            </div>
            <Badge variant={session.status === "confirmed" ? "default" : "secondary"}>
              {session.status === "confirmed" ? "Confirmada" : "Pendiente"}
            </Badge>
          </div>

          <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">{session.date}</div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {session.time}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {session.location}
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            {session.status === "pending" && (
              <Button variant="outline" size="sm">
                Confirmar
              </Button>
            )}
            <Button variant={session.status === "confirmed" ? "default" : "outline"} size="sm">
              {session.status === "confirmed" ? "Añadir al Calendario" : "Reprogramar"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

