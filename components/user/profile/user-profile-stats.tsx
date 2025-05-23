import { Card, CardContent } from "@/components/ui/card"
import { Activity, Scale, Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function UserProfileStats() {
  const stats = [
    {
      icon: Activity,
      value: "12",
      label: "Sesiones Completadas",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Scale,
      value: "-4.5 kg",
      label: "Pérdida de Peso",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Award,
      value: "5",
      label: "Logros Desbloqueados",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "68%",
      label: "Progreso General",
      gradient: "from-primary to-primary/80"
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white shadow-sm mb-2`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

