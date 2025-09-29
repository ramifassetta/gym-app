"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Save, Upload, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { CancelSubscriptionModal } from "@/components/cancel-subscription-modal"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de guardado
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Configuración
          </h1>
          <p className="text-muted-foreground mt-1">Gestiona tu perfil y preferencias</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="bg-primary/5">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Perfil
            </TabsTrigger>
            <TabsTrigger value="account" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Cuenta
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Facturación
            </TabsTrigger>
            <TabsTrigger value="pricing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Precios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <form onSubmit={handleSubmit}>
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                      <Save className="h-4 w-4" />
                    </div>
                    Información del Perfil
                  </CardTitle>
                  <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24 border-2 border-primary/10">
                        <AvatarImage src="/placeholder-user.jpg" alt="@gimnasio" />
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">GYM</AvatarFallback>
                      </Avatar>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Cambiar Foto
                      </Button>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="full-name">Nombre completo</Label>
                          <Input 
                            id="full-name" 
                            defaultValue="Gimnasio"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          defaultValue="gimnasio@ejemplo.com"
                          className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          defaultValue="+54 11 1234-5678"
                          className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografía</Label>
                        <Textarea
                          id="bio"
                          placeholder="Cuéntanos sobre tu gimnasio y servicios..."
                          className="min-h-[100px] bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300"
                          defaultValue="Gimnasio moderno con equipamiento de última generación. Ofrecemos entrenamiento personalizado, clases grupales y un ambiente motivador para alcanzar tus objetivos fitness."
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                  <Button 
                    variant="outline" 
                    type="button"
                    className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Guardando..." : "Guardar Cambios"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Seguridad de la Cuenta
                </CardTitle>
                <CardDescription>Actualiza tu contraseña y configura la seguridad de tu cuenta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Contraseña Actual</Label>
                  <Input 
                    id="current-password" 
                    type="password"
                    className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nueva Contraseña</Label>
                  <Input 
                    id="new-password" 
                    type="password"
                    className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                  <Input 
                    id="confirm-password" 
                    type="password"
                    className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                <Button 
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                >
                  Cancelar
                </Button>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Actualizar Contraseña
                </Button>
              </CardFooter>
            </Card>

          </TabsContent>


          <TabsContent value="billing" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Plan de Suscripción
                </CardTitle>
                <CardDescription>Gestiona tu plan de suscripción y método de pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="rounded-lg border border-primary/10 p-4 bg-gradient-to-br from-card to-card/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Plan Premium</h3>
                      <p className="text-sm text-muted-foreground">$15.000 ARS/mes • Renovación el 15/01/2025</p>
                    </div>
                    <Button 
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      Cambiar Plan
                    </Button>
                  </div>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Clientes ilimitados</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Rutinas ilimitadas</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Control de acceso por DNI y huella</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Gestión completa de pagos</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Soporte prioritario 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Información del período de prueba */}
                <div className="rounded-lg border border-emerald-200 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500 text-white">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800">Período de Prueba Completado</h4>
                      <p className="text-sm text-emerald-600">
                        Tu período de prueba de 1 mes ha finalizado. Ahora estás en el plan Premium por $15.000 ARS/mes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Método de Pago
                  </h3>
                  <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-md bg-gradient-to-br from-primary/10 to-primary/5 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-sm text-muted-foreground">Expira 12/2025</div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      Editar
                    </Button>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir Método de Pago
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                <Button 
                  variant="outline" 
                  className="text-destructive border-destructive/20 hover:bg-destructive/10 hover:border-destructive/40 transition-all duration-300"
                  onClick={() => setIsCancelModalOpen(true)}
                >
                  Cancelar Suscripción
                </Button>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Descargar Facturas
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <form onSubmit={handleSubmit}>
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
                <CardHeader className="bg-gradient-to-r from-background to-muted">
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    Configuración de Precios de Pases
                  </CardTitle>
                  <CardDescription>
                    Establece los precios para cada tipo de pase en tu gimnasio
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pase-libre">Pase Libre</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                        <Input 
                          id="pase-libre" 
                          type="number" 
                          defaultValue="45000"
                          className="pl-8"
                          placeholder="45000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pase-libre-3-meses">Pase Libre 3 meses</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                        <Input 
                          id="pase-libre-3-meses" 
                          type="number" 
                          defaultValue="120000"
                          className="pl-8"
                          placeholder="120000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pase-libre-anual">Pase Libre anual</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                        <Input 
                          id="pase-libre-anual" 
                          type="number" 
                          defaultValue="400000"
                          className="pl-8"
                          placeholder="400000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pase-mensual-3-dias">Pase mensual 3 días</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                        <Input 
                          id="pase-mensual-3-dias" 
                          type="number" 
                          defaultValue="15000"
                          className="pl-8"
                          placeholder="15000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pase-dia">Pase día</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-muted-foreground">$</span>
                        <Input 
                          id="pase-dia" 
                          type="number" 
                          defaultValue="2000"
                          className="pl-8"
                          placeholder="2000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">💡 Información</h4>
                    <p className="text-sm text-blue-800">
                      Los precios que configures aquí se utilizarán automáticamente en el modal de registrar pagos 
                      para calcular las deudas de los clientes. Puedes modificar estos valores en cualquier momento.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-background to-muted">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Guardando..." : "Guardar Precios"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Modal de Cancelar Suscripción */}
      <CancelSubscriptionModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        subscription={{
          id: 1,
          client: {
            name: "Gimnasio",
            email: "gimnasio@ejemplo.com",
            avatar: "/placeholder-user.jpg"
          },
          plan: "Plan Premium",
          status: "active",
          startDate: "2024-01-01",
          endDate: "2024-12-31",
          amount: "50000",
          paymentMethod: "Transferencia"
        }}
        onCancel={(subscriptionId) => {
          console.log("Cancelando suscripción:", subscriptionId);
          setIsCancelModalOpen(false);
        }}
      />
    </motion.div>
  )
}

