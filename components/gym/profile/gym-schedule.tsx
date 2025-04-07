import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GymSchedule() {
  const classes = {
    lunes: [
      { time: "08:00 - 09:00", name: "Spinning", trainer: "Laura S.", level: "Todos los niveles" },
      { time: "10:00 - 11:00", name: "Yoga", trainer: "Ana G.", level: "Principiante" },
      { time: "17:00 - 18:00", name: "Crossfit", trainer: "Miguel R.", level: "Intermedio" },
      { time: "19:00 - 20:00", name: "Body Pump", trainer: "Carlos M.", level: "Todos los niveles" },
    ],
    martes: [
      { time: "09:00 - 10:00", name: "Pilates", trainer: "Ana G.", level: "Todos los niveles" },
      { time: "11:00 - 12:00", name: "Funcional", trainer: "Miguel R.", level: "Avanzado" },
      { time: "18:00 - 19:00", name: "Zumba", trainer: "Laura S.", level: "Principiante" },
      { time: "20:00 - 21:00", name: "HIIT", trainer: "Carlos M.", level: "Intermedio" },
    ],
    miercoles: [
      { time: "08:00 - 09:00", name: "Spinning", trainer: "Laura S.", level: "Todos los niveles" },
      { time: "10:00 - 11:00", name: "Yoga", trainer: "Ana G.", level: "Intermedio" },
      { time: "17:00 - 18:00", name: "Crossfit", trainer: "Miguel R.", level: "Avanzado" },
      { time: "19:00 - 20:00", name: "Body Pump", trainer: "Carlos M.", level: "Todos los niveles" },
    ],
    jueves: [
      { time: "09:00 - 10:00", name: "Pilates", trainer: "Ana G.", level: "Todos los niveles" },
      { time: "11:00 - 12:00", name: "Funcional", trainer: "Miguel R.", level: "Intermedio" },
      { time: "18:00 - 19:00", name: "Zumba", trainer: "Laura S.", level: "Principiante" },
      { time: "20:00 - 21:00", name: "HIIT", trainer: "Carlos M.", level: "Avanzado" },
    ],
    viernes: [
      { time: "08:00 - 09:00", name: "Spinning", trainer: "Laura S.", level: "Todos los niveles" },
      { time: "10:00 - 11:00", name: "Yoga", trainer: "Ana G.", level: "Avanzado" },
      { time: "17:00 - 18:00", name: "Crossfit", trainer: "Miguel R.", level: "Intermedio" },
      { time: "19:00 - 20:00", name: "Body Combat", trainer: "Carlos M.", level: "Todos los niveles" },
    ],
    sabado: [
      { time: "10:00 - 11:00", name: "Yoga", trainer: "Ana G.", level: "Todos los niveles" },
      { time: "12:00 - 13:00", name: "Funcional", trainer: "Miguel R.", level: "Intermedio" },
      { time: "17:00 - 18:00", name: "Zumba", trainer: "Laura S.", level: "Principiante" },
    ],
    domingo: [
      { time: "10:00 - 11:00", name: "Pilates", trainer: "Ana G.", level: "Todos los niveles" },
      { time: "12:00 - 13:00", name: "Yoga", trainer: "Laura S.", level: "Principiante" },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Horario de Clases Grupales</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lunes">
          <TabsList className="grid grid-cols-7">
            <TabsTrigger value="lunes">Lun</TabsTrigger>
            <TabsTrigger value="martes">Mar</TabsTrigger>
            <TabsTrigger value="miercoles">Mié</TabsTrigger>
            <TabsTrigger value="jueves">Jue</TabsTrigger>
            <TabsTrigger value="viernes">Vie</TabsTrigger>
            <TabsTrigger value="sabado">Sáb</TabsTrigger>
            <TabsTrigger value="domingo">Dom</TabsTrigger>
          </TabsList>

          {Object.entries(classes).map(([day, dayClasses]) => (
            <TabsContent key={day} value={day} className="mt-4 space-y-3">
              {dayClasses.map((cls, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <div className="font-medium">{cls.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {cls.time} • {cls.trainer}
                    </div>
                  </div>
                  <Badge variant="outline">{cls.level}</Badge>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

