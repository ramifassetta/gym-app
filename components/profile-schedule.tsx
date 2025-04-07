import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProfileSchedule() {
  const schedule = [
    {
      day: "Lunes",
      slots: [
        { time: "09:00 - 10:00", status: "occupied", client: "Juan Pérez" },
        { time: "10:30 - 11:30", status: "occupied", client: "María García" },
        { time: "12:00 - 13:00", status: "available" },
        { time: "16:00 - 17:00", status: "occupied", client: "Carlos López" },
        { time: "17:30 - 18:30", status: "occupied", client: "Ana Martínez" },
      ],
    },
    {
      day: "Martes",
      slots: [
        { time: "09:00 - 10:00", status: "occupied", client: "Roberto Sánchez" },
        { time: "10:30 - 11:30", status: "available" },
        { time: "12:00 - 13:00", status: "occupied", client: "Laura Gómez" },
        { time: "16:00 - 17:00", status: "available" },
        { time: "17:30 - 18:30", status: "occupied", client: "Pedro Rodríguez" },
      ],
    },
    {
      day: "Miércoles",
      slots: [
        { time: "09:00 - 10:00", status: "occupied", client: "Juan Pérez" },
        { time: "10:30 - 11:30", status: "occupied", client: "María García" },
        { time: "12:00 - 13:00", status: "available" },
        { time: "16:00 - 17:00", status: "occupied", client: "Carlos López" },
        { time: "17:30 - 18:30", status: "available" },
      ],
    },
    {
      day: "Jueves",
      slots: [
        { time: "09:00 - 10:00", status: "available" },
        { time: "10:30 - 11:30", status: "occupied", client: "Roberto Sánchez" },
        { time: "12:00 - 13:00", status: "occupied", client: "Laura Gómez" },
        { time: "16:00 - 17:00", status: "occupied", client: "Ana Martínez" },
        { time: "17:30 - 18:30", status: "occupied", client: "Pedro Rodríguez" },
      ],
    },
    {
      day: "Viernes",
      slots: [
        { time: "09:00 - 10:00", status: "occupied", client: "Juan Pérez" },
        { time: "10:30 - 11:30", status: "available" },
        { time: "12:00 - 13:00", status: "occupied", client: "María García" },
        { time: "16:00 - 17:00", status: "occupied", client: "Carlos López" },
        { time: "17:30 - 18:30", status: "available" },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      {schedule.map((day) => (
        <Card key={day.day}>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">{day.day}</h3>
            <div className="space-y-2">
              {day.slots.map((slot, index) => (
                <div key={index} className="flex items-center justify-between text-sm p-2 rounded-md bg-muted/50">
                  <span>{slot.time}</span>
                  {slot.status === "occupied" ? (
                    <div className="flex items-center gap-2">
                      <span>{slot.client}</span>
                      <Badge>Ocupado</Badge>
                    </div>
                  ) : (
                    <Badge variant="outline">Disponible</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

