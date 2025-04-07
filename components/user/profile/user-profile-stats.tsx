import { Card, CardContent } from "@/components/ui/card"
import { Activity, Scale, Award, TrendingUp } from "lucide-react"

export function UserProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Activity className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">Sesiones Completadas</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Scale className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">-4.5 kg</div>
          <p className="text-xs text-muted-foreground">Pérdida de Peso</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <Award className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground">Logros Desbloqueados</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <TrendingUp className="h-8 w-8 text-primary mb-2" />
          <div className="text-2xl font-bold">68%</div>
          <p className="text-xs text-muted-foreground">Progreso General</p>
        </CardContent>
      </Card>
    </div>
  )
}

