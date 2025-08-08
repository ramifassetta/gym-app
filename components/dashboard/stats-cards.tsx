import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Dumbbell, Calendar, TrendingUp } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 sm:px-6">
          <CardTitle className="text-xs sm:text-sm font-medium">Total Clientes</CardTitle>
          <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="text-xl sm:text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground mt-1">+2 desde el mes pasado</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 sm:px-6">
          <CardTitle className="text-xs sm:text-sm font-medium">Rutinas Activas</CardTitle>
          <Dumbbell className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="text-xl sm:text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground mt-1">+3 desde el mes pasado</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 sm:px-6">
          <CardTitle className="text-xs sm:text-sm font-medium">Sesiones Programadas</CardTitle>
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="text-xl sm:text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground mt-1">Para esta semana</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 sm:px-6">
          <CardTitle className="text-xs sm:text-sm font-medium">Ingresos Mensuales</CardTitle>
          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="text-xl sm:text-2xl font-bold">$2,450</div>
          <p className="text-xs text-muted-foreground mt-1">+15% desde el mes pasado</p>
        </CardContent>
      </Card>
    </div>
  )
}

