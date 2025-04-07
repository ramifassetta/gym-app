"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { CalendarEvents } from "@/components/calendar-events"
import { AddSessionDialog } from "@/components/add-session-dialog"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handlePreviousMonth = () => {
    if (date) {
      const previousMonth = new Date(date)
      previousMonth.setMonth(previousMonth.getMonth() - 1)
      setDate(previousMonth)
    }
  }

  const handleNextMonth = () => {
    if (date) {
      const nextMonth = new Date(date)
      nextMonth.setMonth(nextMonth.getMonth() + 1)
      setDate(nextMonth)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Calendario</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nueva Sesión
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Calendario de Sesiones</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>Programa y visualiza tus sesiones con clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sesiones del Día</CardTitle>
            <CardDescription>
              {date
                ? date.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Selecciona una fecha"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CalendarEvents date={date} />
          </CardContent>
        </Card>
      </div>

      <AddSessionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

