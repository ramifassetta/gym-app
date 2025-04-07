import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function GymTrainers() {
  const trainers = [
    {
      id: 1,
      name: "Carlos Martínez",
      avatar: "/placeholder-user.jpg",
      specialties: ["Musculación", "Hipertrofia"],
      experience: "8 años",
      availability: "Mañanas",
      bio: "Especialista en entrenamiento de fuerza y desarrollo muscular. Certificado en nutrición deportiva y biomecánica.",
    },
    {
      id: 2,
      name: "Laura Sánchez",
      avatar: "/placeholder-user.jpg",
      specialties: ["Pérdida de peso", "Funcional"],
      experience: "6 años",
      availability: "Tardes",
      bio: "Experta en transformaciones físicas y pérdida de peso. Enfoque holístico combinando entrenamiento y nutrición.",
    },
    {
      id: 3,
      name: "Miguel Ángel Ruiz",
      avatar: "/placeholder-user.jpg",
      specialties: ["Rehabilitación", "Senior Fitness"],
      experience: "10 años",
      availability: "Completa",
      bio: "Especializado en rehabilitación física y entrenamiento para adultos mayores. Fisioterapeuta certificado.",
    },
    {
      id: 4,
      name: "Ana Gómez",
      avatar: "/placeholder-user.jpg",
      specialties: ["Crossfit", "HIIT"],
      experience: "5 años",
      availability: "Tardes/Fines de semana",
      bio: "Entrenadora de alta intensidad especializada en CrossFit y entrenamiento funcional. Competidora activa.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {trainers.map((trainer) => (
        <Card key={trainer.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={trainer.avatar} alt={trainer.name} />
                <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{trainer.name}</h3>
                  <Badge variant="outline">{trainer.experience}</Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {trainer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-3">{trainer.bio}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs">Disponibilidad: {trainer.availability}</span>
                  <Button size="sm" variant="outline">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

