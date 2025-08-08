"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Calendar, Plus } from "lucide-react"
import Link from "next/link"
import { ClientsList } from "@/components/clients-list"
import { RoutinesList } from "@/components/routines-list"
import { StatsCards } from "@/components/stats-cards"
import { CreateRoutineModal } from "@/components/create-routine-modal"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleRoutineCreated = () => {
    console.log("Rutina creada exitosamente desde el panel de control")
  }

  return (
    <>
      <div className="space-y-8 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
          <motion.h1 
            className="text-2xl font-bold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Panel de Control
          </motion.h1>
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="mr-2 h-4 w-4" /> Nueva Rutina
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StatsCards />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="clients" className="space-y-6">
            <TabsList className="bg-background/80 backdrop-blur-sm border w-full justify-start p-1 rounded-xl">
              <TabsTrigger 
                value="clients"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <Users className="mr-2 h-4 w-4" />
                Clientes
              </TabsTrigger>
              <TabsTrigger 
                value="routines"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <Activity className="mr-2 h-4 w-4" />
                Rutinas
              </TabsTrigger>
              <TabsTrigger 
                value="calendar"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Calendario
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                  <div>
                    <CardTitle>Mis Clientes</CardTitle>
                    <CardDescription>Gestiona tus clientes y sus perfiles</CardDescription>
                  </div>
                  <Link href="/dashboard/clients">
                    <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">Ver Todos</Button>
                  </Link>
                </CardHeader>
                <CardContent className="pt-6">
                  <ClientsList />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="routines" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                  <div>
                    <CardTitle>Rutinas Recientes</CardTitle>
                    <CardDescription>Rutinas creadas o modificadas recientemente</CardDescription>
                  </div>
                  <Link href="/dashboard/routines">
                    <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">Ver Todas</Button>
                  </Link>
                </CardHeader>
                <CardContent className="pt-6">
                  <RoutinesList />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calendar" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="bg-gradient-to-r from-background to-muted">
                  <CardTitle>Calendario de Sesiones</CardTitle>
                  <CardDescription>Programa y visualiza tus sesiones con clientes</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[400px] flex items-center justify-center border rounded-md bg-muted/30 bg-gradient-to-b from-muted/10 to-muted/30">
                    <p className="text-muted-foreground">El calendario se mostrará aquí</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <CreateRoutineModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onRoutineCreated={handleRoutineCreated}
      />
    </>
  )
}