"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { UserCalendarEvents } from "@/components/user/calendar/user-calendar-events"

export default function UserCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

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
        <h1 className="text-2xl font-bold tracking-tight">Mi Calendario</h1>
        <Button variant="outline">Solicitar Nueva Sesión</Button>
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
            <CardDescription>Visualiza y gestiona tus sesiones con entrenadores</CardDescription>
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
            <UserCalendarEvents date={date} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

