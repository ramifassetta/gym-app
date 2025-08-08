"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { CalendarEvents } from "@/components/calendar-events"
import { AddSessionDialog } from "@/components/add-session-dialog"
import { EditSessionModal } from "@/components/edit-session-modal"
import { SendReminderModal } from "@/components/send-reminder-modal"
import { CancelSessionModal } from "@/components/cancel-session-modal"
import { motion } from "framer-motion"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [reminderModalOpen, setReminderModalOpen] = useState(false)
  const [cancelModalOpen, setCancelModalOpen] = useState(false)
  const [selectedSession, setSelectedSession] = useState<any>(null)

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

  const handleEditSession = (session: any) => {
    setSelectedSession(session)
    setEditModalOpen(true)
  }

  const handleSendReminder = (session: any) => {
    setSelectedSession(session)
    setReminderModalOpen(true)
  }

  const handleCancelSession = (session: any) => {
    setSelectedSession(session)
    setCancelModalOpen(true)
  }

  const handleSessionEdited = (data: any) => {
    console.log("Sesión editada:", data)
    // Aquí puedes actualizar la sesión en el calendario
  }

  const handleReminderSent = (data: any) => {
    console.log("Recordatorio enviado:", data)
  }

  const handleSessionCancelled = (data: any) => {
    console.log("Sesión cancelada:", data)
    // Aquí puedes actualizar el estado de la sesión
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-8rem)] flex flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-none flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Calendario
          </h1>
          <p className="text-muted-foreground mt-1">Gestiona tus sesiones y citas con clientes</p>
        </div>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <Plus className="mr-2 h-4 w-4" /> 
          Nueva Sesión
        </Button>
      </motion.div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="h-full overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Calendario de Sesiones
                  </CardTitle>
                  <CardDescription className="text-base">
                    Programa y visualiza tus sesiones con clientes
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handlePreviousMonth}
                    className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleNextMonth}
                    className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Calendar 
                mode="single" 
                selected={date} 
                onSelect={setDate} 
                className="rounded-xl border border-primary/10 shadow-lg bg-gradient-to-br from-background to-background/80 hover:shadow-xl transition-shadow duration-300" 
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="h-full"
        >
          <Card className="h-full overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Sesiones del Día
              </CardTitle>
              <CardDescription className="text-sm">
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
            <CardContent className="p-6">
              <CalendarEvents 
                date={date}
                onEditSession={handleEditSession}
                onSendReminder={handleSendReminder}
                onCancelSession={handleCancelSession}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <AddSessionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      <EditSessionModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        session={selectedSession}
        onSave={handleSessionEdited}
      />

      <SendReminderModal
        open={reminderModalOpen}
        onOpenChange={setReminderModalOpen}
        session={selectedSession}
        onSend={handleReminderSent}
      />

      <CancelSessionModal
        open={cancelModalOpen}
        onOpenChange={setCancelModalOpen}
        session={selectedSession}
        onCancel={handleSessionCancelled}
      />
    </motion.div>
  )
}