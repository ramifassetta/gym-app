"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Plus, Shield, BarChart3, MessageSquare, Lock, Unlock, CheckCircle, XCircle, Clock, Hash, LogIn, Calendar, CreditCard, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { ClientsList } from "@/components/clients-list"
import { RoutinesList } from "@/components/routines-list"
import { StatsCards } from "@/components/stats-cards"
import { CreateClientModal } from "@/components/create-client-modal"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [barrierEnabled, setBarrierEnabled] = useState(false)
  
  // Estados para el input de DNI
  const [dniInput, setDniInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [clientData, setClientData] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Datos mock de clientes
  const mockClients = [
    { id: 1, name: "Juan Pérez", dni: "43604733", status: "active", subscriptionExpires: "15/02/2026", membershipType: "Mensual" },
    { id: 2, name: "María García", dni: "12345678", status: "active", subscriptionExpires: "20/03/2026", membershipType: "Mensual" },
    { id: 3, name: "Carlos López", dni: "87654321", status: "inactive", subscriptionExpires: "10/01/2024", membershipType: "Mensual" },
    { id: 4, name: "Ana Martínez", dni: "11223344", status: "active", subscriptionExpires: "05/04/2026", membershipType: "Mensual" },
    { id: 5, name: "Roberto Sánchez", dni: "55667788", status: "active", subscriptionExpires: "25/02/2026", membershipType: "Mensual" },
  ]

  // Mantener el input siempre enfocado
  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current && !showWelcomeModal && !showErrorModal) {
        inputRef.current.focus()
      }
    }

    // Enfocar inmediatamente
    focusInput()

    // Re-enfocar cuando se pierde el foco
    const handleClick = () => {
      setTimeout(focusInput, 100)
    }

    // Re-enfocar cuando se cierran los modales
    const handleModalClose = () => {
      setTimeout(focusInput, 200)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [showWelcomeModal, showErrorModal])

  // Manejar entrada de teclado
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setDniInput(prev => prev.slice(0, -1))
    } else if (/[0-9]/.test(e.key)) {
      if (dniInput.length < 8) {
        const newInput = dniInput + e.key
        setDniInput(newInput)
        
        // Si llegamos a 8 dígitos, procesar automáticamente
        if (newInput.length === 8) {
          setTimeout(() => {
            handleAccessWithInput(newInput)
          }, 100)
        }
      }
    }
  }

  const handleAccessWithInput = async (inputValue: string) => {
    setIsProcessing(true)
    
    // Simular búsqueda de cliente
    setTimeout(() => {
      const client = mockClients.find(c => c.dni.startsWith(inputValue))
      
      console.log("🔍 Buscando cliente con DNI:", inputValue)
      console.log("👤 Cliente encontrado:", client)
      
      if (!client) {
        console.log("❌ Cliente no encontrado")
        setErrorMessage("Cliente no encontrado. Verifique su DNI e intente nuevamente.")
        setShowErrorModal(true)
        setIsProcessing(false)
        // Limpiar input inmediatamente
        setDniInput("")
        // Re-enfocar el input después de mostrar el error
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
        return
      }

      if (client.status === 'inactive') {
        console.log("❌ Cliente inactivo")
        setErrorMessage("Su cuenta está inactiva. Contacte con recepción para reactivar su suscripción.")
        setShowErrorModal(true)
        setIsProcessing(false)
        // Limpiar input inmediatamente
        setDniInput("")
        // Re-enfocar el input después de mostrar el error
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
        return
      }

      // Simular verificación de suscripción
      const today = new Date()
      // Formato: "15/02/2025" -> crear fecha local sin problemas de timezone
      const [day, month, year] = client.subscriptionExpires.split('/')
      const expireDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      
      console.log("📅 Fecha de vencimiento:", client.subscriptionExpires)
      console.log("📅 Fecha parseada:", expireDate)
      console.log("📅 Fecha actual:", today)
      console.log("📅 ¿Está vencida?", expireDate < today)
      
      if (expireDate < today) {
        console.log("❌ Suscripción vencida")
        setErrorMessage("Su suscripción ha vencido. Renueve su membresía para continuar.")
        setShowErrorModal(true)
        setIsProcessing(false)
        // Limpiar input inmediatamente
        setDniInput("")
        // Re-enfocar el input después de mostrar el error
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
        return
      }

      console.log("✅ Acceso autorizado para:", client.name)
      setClientData(client)
      setShowWelcomeModal(true)
      setIsProcessing(false)
      
      // Limpiar después de mostrar el modal
      setTimeout(() => {
        setDniInput("")
        setShowWelcomeModal(false)
        setClientData(null)
        // Re-enfocar el input después de cerrar el modal
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
      }, 5000)
      
    }, 1500)
  }

  const handleAccess = async () => {
    if (dniInput.length < 8) {
      setErrorMessage("El DNI debe tener al menos 8 dígitos")
      setShowErrorModal(true)
      return
    }
    handleAccessWithInput(dniInput)
  }

  const calculateDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date()
    // Formato: "15/02/2025" -> crear fecha local sin problemas de timezone
    const [day, month, year] = expiryDate.split('/')
    const expiry = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const handleClientCreated = () => {
    console.log("Cliente creado exitosamente desde el panel de control")
  }

  const handleBarrierToggle = () => {
    setBarrierEnabled(!barrierEnabled)
    console.log(`Acceso ${barrierEnabled ? 'deshabilitado' : 'habilitado'}`)
    // Aquí se enviaría la señal al sistema de control de acceso
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

        {/* Input de Acceso por DNI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Card className="border border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/20">
              <CardTitle className="flex items-center gap-2">
                <Hash className="h-5 w-5 text-primary" />
                Acceso por DNI
              </CardTitle>
              <CardDescription>
                Ingrese el DNI del cliente para verificar acceso
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">DNI:</div>
                  <div className="flex justify-center">
                    <Input
                      ref={inputRef}
                      type="text"
                      value={dniInput}
                      onKeyDown={handleKeyPress}
                      placeholder="Ingrese DNI (8 dígitos)"
                      className="text-xl font-mono text-center h-12 w-96 border-2 border-primary/30 focus:border-primary/30 focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-lg"
                      autoFocus
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={handleAccess}
                    disabled={dniInput.length < 8 || isProcessing}
                    className="w-96 h-10 text-sm font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isProcessing ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Verificando...
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Verificar Acceso
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
                    <CardDescription>Registro de ingresos por huella dactilar y DNI</CardDescription>
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
                          <h3 className="font-semibold text-lg">Control de Acceso</h3>
                          <p className="text-sm text-muted-foreground">
                            {barrierEnabled ? 'Acceso habilitado - Entrada libre' : 'Acceso bloqueado - Solo con autorización'}
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
                            Bloquear Acceso
                          </>
                        ) : (
                          <>
                            <Unlock className="mr-2 h-4 w-4" />
                            Habilitar Acceso
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

      {/* Modal de Bienvenida */}
      <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-600 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              ¡Bienvenido!
            </DialogTitle>
            <DialogDescription>
              Acceso autorizado al gimnasio
            </DialogDescription>
          </DialogHeader>
          
          {clientData && (
            <div className="space-y-4 py-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-primary">{clientData.name}</div>
                <div className="text-sm text-muted-foreground font-mono">{clientData.dni}</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Membresía:</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {clientData.membershipType}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Vence en:</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-blue-600">
                      {calculateDaysUntilExpiry(clientData.subscriptionExpires)} días
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {clientData.subscriptionExpires}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                ¡Disfrute de su entrenamiento!
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Error */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
              <XCircle className="h-6 w-6" />
              Acceso Denegado
            </DialogTitle>
            <DialogDescription>
              No se pudo autorizar el acceso
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-medium text-red-800 mb-2">Motivo:</div>
                  <div className="text-red-700">{errorMessage}</div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              Verifique su DNI e intente nuevamente, o contacte con recepción si el problema persiste.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}