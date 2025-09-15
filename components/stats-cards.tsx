import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Dumbbell, Calendar, TrendingUp, Shield, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export function StatsCards() {
  const stats = [
    {
      title: "Total Clientes",
      value: "24",
      change: "+2 desde el mes pasado",
      icon: Users,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Accesos Hoy",
      value: "24",
      change: "",
      icon: Shield,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Deudas Pendientes",
      value: "$1,200",
      change: "3 clientes con pagos vencidos",
      icon: DollarSign,
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Ingresos Mensuales",
      value: "$2,450",
      change: "+15% desde el mes pasado",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white shadow-sm`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change || " "}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}