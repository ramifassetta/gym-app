import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Dumbbell, Calendar, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function StatsCards() {
  const stats = [
    {
      title: "Total Clientes",
      value: "24",
      change: "+2 desde el mes pasado",
      icon: Users,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Rutinas Activas",
      value: "18",
      change: "+3 desde el mes pasado",
      icon: Dumbbell,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Sesiones Programadas",
      value: "12",
      change: "Para esta semana",
      icon: Calendar,
      color: "bg-amber-500",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Ingresos Mensuales",
      value: "$2,450",
      change: "+15% desde el mes pasado",
      icon: TrendingUp,
      color: "bg-emerald-500",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-primary/10">
            <div className={`h-1 w-full bg-gradient-to-r ${stat.gradient}`}></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full bg-gradient-to-br ${stat.gradient} text-white shadow-sm`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center mt-1">
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}