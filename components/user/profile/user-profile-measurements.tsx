"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Plus } from "lucide-react"

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
        <h3 className="font-medium">Evolución de Mediciones</h3>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Añadir Medición
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={measurementsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="peso" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="grasa" stroke="#82ca9d" />
                <Line type="monotone" dataKey="musculo" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="font-medium mb-4">Mediciones Actuales</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Peso</h4>
              <p className="text-xl font-bold">{currentMeasurements.peso} kg</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Altura</h4>
              <p className="text-xl font-bold">{currentMeasurements.altura} cm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">IMC</h4>
              <p className="text-xl font-bold">{currentMeasurements.imc}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Grasa Corporal</h4>
              <p className="text-xl font-bold">{currentMeasurements.grasaCorporal}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Masa Muscular</h4>
              <p className="text-xl font-bold">{currentMeasurements.masaMuscular}%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Metabolismo Basal</h4>
              <p className="text-xl font-bold">{currentMeasurements.metabolismoBasal} kcal</p>
            </CardContent>
          </Card>
        </div>

        <h4 className="font-medium mt-6 mb-4">Perímetros</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Abdominal</h4>
              <p className="text-xl font-bold">{currentMeasurements.perimetroAbdominal} cm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Cadera</h4>
              <p className="text-xl font-bold">{currentMeasurements.perimetroCadera} cm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Pecho</h4>
              <p className="text-xl font-bold">{currentMeasurements.perimetroPecho} cm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Brazo</h4>
              <p className="text-xl font-bold">{currentMeasurements.perimetroBrazo} cm</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="text-sm text-muted-foreground">Muslo</h4>
              <p className="text-xl font-bold">{currentMeasurements.perimetroMuslo} cm</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

