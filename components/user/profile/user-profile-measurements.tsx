"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

export function UserProfileMeasurements() {
  // Datos simulados para las mediciones
  const measurementsData = [
    { date: "15/01", peso: 85, grasa: 24, musculo: 32 },
    { date: "01/02", peso: 84, grasa: 23.5, musculo: 32.2 },
    { date: "15/02", peso: 83.2, grasa: 23, musculo: 32.5 },
    { date: "01/03", peso: 82.5, grasa: 22.5, musculo: 32.8 },
    { date: "15/03", peso: 81.8, grasa: 22, musculo: 33 },
    { date: "01/04", peso: 81, grasa: 21.5, musculo: 33.2 },
    { date: "15/04", peso: 80.5, grasa: 21, musculo: 33.5 },
  ]

  // Datos de mediciones actuales
  const currentMeasurements = {
    peso: 80.5,
    altura: 178,
    imc: 25.4,
    grasaCorporal: 21,
    masaMuscular: 33.5,
    metabolismoBasal: 1850,
    perimetroAbdominal: 92,
    perimetroCadera: 98,
    perimetroPecho: 102,
    perimetroBrazo: 33,
    perimetroMuslo: 58,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Evolución de Mediciones
        </h3>
        <Button 
          size="sm"
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Plus className="mr-2 h-4 w-4" />
          Añadir Medición
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
          <CardContent className="pt-6">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={measurementsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-primary/10" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--primary)/0.1)',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="peso" 
                    stroke="hsl(var(--primary))" 
                    activeDot={{ r: 8, fill: 'hsl(var(--primary))' }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="grasa" 
                    stroke="hsl(var(--emerald))" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="musculo" 
                    stroke="hsl(var(--purple))" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div>
        <h3 className="font-medium mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Mediciones Actuales
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(currentMeasurements).slice(0, 6).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                <CardContent className="p-4 text-center">
                  <h4 className="text-sm text-muted-foreground">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  </h4>
                  <p className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {value} {key === 'peso' ? 'kg' : key === 'altura' ? 'cm' : key === 'imc' ? '' : key === 'metabolismoBasal' ? 'kcal' : '%'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h4 className="font-medium mt-6 mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Perímetros
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(currentMeasurements).slice(6).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                <CardContent className="p-4 text-center">
                  <h4 className="text-sm text-muted-foreground">
                    {key.replace('perimetro', '').charAt(0).toUpperCase() + key.replace('perimetro', '').slice(1)}
                  </h4>
                  <p className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {value} cm
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

