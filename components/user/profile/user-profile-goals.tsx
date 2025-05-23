import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Target } from "lucide-react"
import { motion } from "framer-motion"

export function UserProfileGoals() {
  const getCategoryVariant = (category: string) => {
    switch (category.toLowerCase()) {
      case 'peso':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
      case 'composición':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
      case 'resistencia':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
      case 'fuerza':
        return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
      case 'flexibilidad':
        return 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
      default:
        return 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary'
    }
  }

  // Datos simulados para los objetivos
  const goals = [
    {
      id: 1,
      title: "Perder 10kg de peso",
      description: "Reducir el peso corporal de 85kg a 75kg",
      category: "Peso",
      progress: 45,
      target: "75kg",
      current: "80.5kg",
      deadline: "15/12/2023",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Reducir porcentaje de grasa",
      description: "Disminuir el porcentaje de grasa corporal del 24% al 18%",
      category: "Composición",
      progress: 50,
      target: "18%",
      current: "21%",
      deadline: "15/12/2023",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Aumentar masa muscular",
      description: "Incrementar la masa muscular de 32% a 35%",
      category: "Composición",
      progress: 50,
      target: "35%",
      current: "33.5%",
      deadline: "31/12/2023",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Correr 5km sin parar",
      description: "Mejorar la resistencia cardiovascular para completar 5km de carrera continua",
      category: "Resistencia",
      progress: 80,
      target: "5km",
      current: "4km",
      deadline: "30/09/2023",
      status: "in-progress",
    },
    {
      id: 5,
      title: "Hacer 10 dominadas seguidas",
      description: "Aumentar la fuerza del tren superior para realizar 10 dominadas consecutivas",
      category: "Fuerza",
      progress: 60,
      target: "10 repeticiones",
      current: "6 repeticiones",
      deadline: "31/10/2023",
      status: "in-progress",
    },
    {
      id: 6,
      title: "Mejorar flexibilidad",
      description: "Lograr tocar los dedos de los pies con las manos sin doblar las rodillas",
      category: "Flexibilidad",
      progress: 30,
      target: "Tocar dedos de los pies",
      current: "A 10cm de los dedos",
      deadline: "31/12/2023",
      status: "in-progress",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-foreground">
          Mis Objetivos
        </h3>
        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          6 objetivos activos
        </Badge>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                  <Badge className={getCategoryVariant(goal.category)}>
                    {goal.category}
                  </Badge>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progreso</span>
                    <span className="font-medium text-primary">
                      {goal.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={goal.progress} 
                    className="h-2 bg-primary/10"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Objetivo</p>
                      <p className="font-medium text-foreground">{goal.target}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-sm">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Actual</p>
                      <p className="font-medium text-foreground">{goal.current}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Fecha límite</p>
                      <p className="font-medium text-foreground">{goal.deadline}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

