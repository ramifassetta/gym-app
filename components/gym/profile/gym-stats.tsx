import { Card, CardContent } from "@/components/ui/card"
import { Users, Dumbbell, Star, TrendingUp } from "lucide-react"

export function GymStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Users className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">250</div>
          <p className="text-xs text-muted-foreground">Miembros Activos</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Dumbbell className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">Entrenadores</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Star className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">4.8</div>
          <p className="text-xs text-muted-foreground">Valoración Media</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <TrendingUp className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">95%</div>
          <p className="text-xs text-muted-foreground">Tasa de Retención</p>
        </CardContent>
      </Card>
    </div>
  )
}

