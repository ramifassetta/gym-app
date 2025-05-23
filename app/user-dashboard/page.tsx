"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"
import { UserStatsCards } from "@/components/user/dashboard/user-stats-cards"
import { UserRoutinesList } from "@/components/user/dashboard/user-routines-list"
import { UserUpcomingSessions } from "@/components/user/dashboard/user-upcoming-sessions"
import { motion } from "framer-motion"

export default function UserDashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mi Panel
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <UserStatsCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="routines" className="space-y-6">
          <TabsList className="bg-background/80 backdrop-blur-sm border w-full justify-start p-1 rounded-xl">
            <TabsTrigger 
              value="routines"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Activity className="mr-2 h-4 w-4" />
              Mis Rutinas
            </TabsTrigger>
            <TabsTrigger 
              value="sessions"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Próximas Sesiones
            </TabsTrigger>
            <TabsTrigger 
              value="messages"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Mensajes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="routines" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Mis Rutinas Activas</CardTitle>
                  <CardDescription>Rutinas asignadas por tu gimnasio</CardDescription>
                </div>
                <Link href="/user-dashboard/routines">
                  <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                    Ver Todas
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="pt-6">
                <UserRoutinesList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Próximas Sesiones</CardTitle>
                  <CardDescription>Sesiones programadas con tus entrenadores</CardDescription>
                </div>
                <Link href="/user-dashboard/calendar">
                  <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                    Ver Calendario
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="pt-6">
                <UserUpcomingSessions />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="bg-gradient-to-r from-background to-muted">
                <CardTitle>Mensajes Recientes</CardTitle>
                <CardDescription>Comunicación con tu gimnasio y entrenadores</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tienes mensajes recientes</p>
                  <Link href="/user-dashboard/messages">
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      Ir a Mensajes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

