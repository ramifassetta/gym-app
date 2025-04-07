import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function UserRoutineProgress({ routineId }: { routineId: number }) {
  // Datos simulados de progreso
  const workouts = [
    { id: 1, date: "10/07", weight: 75, reps: 8, intensity: 7 },
    { id: 2, date: "12/07", weight: 77.5, reps: 8, intensity: 7 },
    { id: 3, date: "15/07", weight: 77.5, reps: 10, intensity: 8 },
    { id: 4, date: "17/07", weight: 80, reps: 8, intensity: 8 },
    { id: 5, date: "20/07", weight: 80, reps: 9, intensity: 7 },
    { id: 6, date: "22/07", weight: 82.5, reps: 8, intensity: 9 },
  ]

  // Datos para el gráfico
  const chartData = [
    { name: "10/07", peso: 75, repeticiones: 8 },
    { name: "12/07", peso: 77.5, repeticiones: 8 },
    { name: "15/07", peso: 77.5, repeticiones: 10 },
    { name: "17/07", peso: 80, repeticiones: 8 },
    { name: "20/07", peso: 80, repeticiones: 9 },
    { name: "22/07", peso: 82.5, repeticiones: 8 },
  ]

  // Datos de metas
  const goals = [
    { name: "Peso utilizado", current: 82.5, target: 100, progress: 82.5 },
    { name: "Repeticiones", current: 8, target: 12, progress: 66.7 },
    { name: "Resistencia", current: 8.5, target: 10, progress: 85 },
    { name: "Frecuencia semanal", current: 3, target: 4, progress: 75 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Historial de Entrenamientos</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="peso" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="repeticiones" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="font-medium mb-4">Historial de Sesiones</h3>
        <div className="space-y-4">
          {workouts.map((workout) => (
            <Card key={workout.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="font-medium">Sesión #{workout.id}</div>
                  <div className="text-sm">{workout.date}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Peso</div>
                    <div className="font-medium">{workout.weight} kg</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Repeticiones</div>
                    <div className="font-medium">{workout.reps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Intensidad</div>
                    <div className="font-medium">{workout.intensity}/10</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Mis Metas</h3>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">{goal.name}</span>
                <span className="text-sm font-medium">
                  {goal.current} de {goal.target}
                </span>
              </div>
              <Progress value={goal.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

