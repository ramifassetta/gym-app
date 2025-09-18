"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Plus, Shield, BarChart3, MessageSquare, Lock, Unlock } from "lucide-react"
import Link from "next/link"
import { ClientsList } from "@/components/clients-list"
import { RoutinesList } from "@/components/routines-list"
import { StatsCards } from "@/components/stats-cards"
import { CreateClientModal } from "@/components/create-client-modal"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [barrierEnabled, setBarrierEnabled] = useState(false)

  const handleClientCreated = () => {
    console.log("Cliente creado exitosamente desde el panel de control")
  }

  const handleBarrierToggle = () => {
    setBarrierEnabled(!barrierEnabled)
    console.log(`Barrera ${barrierEnabled ? 'deshabilitada' : 'habilitada'}`)
    // Aquí se enviaría la señal al sistema de barrera física
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
              <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
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
                value="access-control"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <Shield className="mr-2 h-4 w-4" />
                Control de Acceso
              </TabsTrigger>
              <TabsTrigger 
                value="reports"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Reportes
              </TabsTrigger>
              <TabsTrigger 
                value="communications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Comunicaciones
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

            <TabsContent value="access-control" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                  <div>
                    <CardTitle>Control de Acceso</CardTitle>
                    <CardDescription>Registro de ingresos por huella, QR y tarjeta</CardDescription>
                  </div>
                  <Link href="/dashboard/access-control">
                    <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">Ver Completo</Button>
                  </Link>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <div className="text-center p-4 border rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-bold text-lg">24</p>
                      <p className="text-sm text-muted-foreground">Accesos Hoy</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-bold text-lg">18</p>
                      <p className="text-sm text-muted-foreground">Clientes Activos</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="font-bold text-lg">87%</p>
                      <p className="text-sm text-muted-foreground">Promedio Asistencia</p>
                    </div>
                  </div>
                  
                  {/* Control de Barrera */}
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${barrierEnabled ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {barrierEnabled ? <Unlock className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Barrera de Acceso</h3>
                          <p className="text-sm text-muted-foreground">
                            {barrierEnabled ? 'Barrera habilitada - Acceso libre' : 'Barrera bloqueada - Solo con autorización'}
                          </p>
                        </div>
                      </div>
                      <Button 
                        onClick={handleBarrierToggle}
                        className={`${
                          barrierEnabled 
                            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white' 
                            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                        } shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        {barrierEnabled ? (
                          <>
                            <Lock className="mr-2 h-4 w-4" />
                            Bloquear Barrera
                          </>
                        ) : (
                          <>
                            <Unlock className="mr-2 h-4 w-4" />
                            Habilitar Barrera
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                  <div>
                    <CardTitle>Reportes y Estadísticas</CardTitle>
                    <CardDescription>Ingresos, nuevos clientes y deudas acumuladas</CardDescription>
                  </div>
                  <Link href="/dashboard/reports">
                    <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">Ver Completo</Button>
                  </Link>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center p-4 border rounded-lg">
                      <BarChart3 className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="font-bold text-lg">$168K</p>
                      <p className="text-sm text-muted-foreground">Ingresos del Mes</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-bold text-lg">+22</p>
                      <p className="text-sm text-muted-foreground">Nuevos Clientes</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="h-8 w-8 mx-auto mb-2 text-red-600" />
                      <p className="font-bold text-lg">$45K</p>
                      <p className="text-sm text-muted-foreground">Deudas Acumuladas</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-bold text-lg">156</p>
                      <p className="text-sm text-muted-foreground">Clientes Activos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communications" className="space-y-4">
              <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                  <div>
                    <CardTitle>Automatizaciones y Comunicaciones</CardTitle>
                    <CardDescription>WhatsApp Business para recordatorios y confirmaciones</CardDescription>
                  </div>
                  <Link href="/dashboard/communications">
                    <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">Ver Completo</Button>
                  </Link>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center p-4 border rounded-lg">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="font-bold text-lg">85</p>
                      <p className="text-sm text-muted-foreground">Mensajes Enviados</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-bold text-lg">95%</p>
                      <p className="text-sm text-muted-foreground">Tasa de Éxito</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-bold text-lg">3</p>
                      <p className="text-sm text-muted-foreground">Automatizaciones</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <p className="font-bold text-lg">Conectado</p>
                      <p className="text-sm text-muted-foreground">WhatsApp Business</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <CreateClientModal 
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onClientCreated={handleClientCreated}
      />
    </>
  )
}