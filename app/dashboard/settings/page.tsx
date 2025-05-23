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

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)

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
            <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Notificaciones
            </TabsTrigger>
            <TabsTrigger value="billing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Facturación
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
                        <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">ET</AvatarFallback>
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
                          <Label htmlFor="first-name">Nombre</Label>
                          <Input 
                            id="first-name" 
                            defaultValue="Entrenador"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Apellido</Label>
                          <Input 
                            id="last-name" 
                            defaultValue="Ejemplo"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          defaultValue="entrenador@ejemplo.com"
                          className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          defaultValue="+34 600 123 456"
                          className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografía</Label>
                        <Textarea
                          id="bio"
                          placeholder="Cuéntanos sobre ti y tu experiencia como entrenador..."
                          className="min-h-[100px] bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300"
                          defaultValue="Entrenador personal certificado con más de 5 años de experiencia en entrenamiento de fuerza y acondicionamiento físico."
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

            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Sesiones Activas
                </CardTitle>
                <CardDescription>Gestiona los dispositivos donde has iniciado sesión</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                    <div>
                      <div className="font-medium">Chrome en Windows</div>
                      <div className="text-sm text-muted-foreground">Madrid, España • Activo ahora</div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      Este Dispositivo
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                    <div>
                      <div className="font-medium">Safari en iPhone</div>
                      <div className="text-sm text-muted-foreground">Madrid, España • Hace 2 horas</div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      Cerrar Sesión
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Chrome en MacBook</div>
                      <div className="text-sm text-muted-foreground">Barcelona, España • Hace 5 días</div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      Cerrar Sesión
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                <Button 
                  variant="destructive" 
                  className="ml-auto bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Cerrar Todas las Sesiones
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Preferencias de Notificaciones
                </CardTitle>
                <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Notificaciones por Correo
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-new-client">Nuevos clientes</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo cuando un nuevo cliente se registre
                        </p>
                      </div>
                      <Switch id="email-new-client" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-messages">Mensajes</Label>
                        <p className="text-sm text-muted-foreground">Recibe un correo cuando recibas un nuevo mensaje</p>
                      </div>
                      <Switch id="email-messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-payments">Pagos</Label>
                        <p className="text-sm text-muted-foreground">Recibe un correo cuando recibas un nuevo pago</p>
                      </div>
                      <Switch id="email-payments" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Notificaciones en la Aplicación
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-new-client">Nuevos clientes</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe una notificación cuando un nuevo cliente se registre
                        </p>
                      </div>
                      <Switch id="app-new-client" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-messages">Mensajes</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe una notificación cuando recibas un nuevo mensaje
                        </p>
                      </div>
                      <Switch id="app-messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-payments">Pagos</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe una notificación cuando recibas un nuevo pago
                        </p>
                      </div>
                      <Switch id="app-payments" defaultChecked />
                    </div>
                  </div>
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
                  Guardar Preferencias
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
                      <h3 className="font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Plan Pro</h3>
                      <p className="text-sm text-muted-foreground">€29.99/mes • Renovación el 15/07/2023</p>
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
                      <span>Biblioteca completa de ejercicios</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-6 text-center text-emerald-500">✓</div>
                      <span>Soporte prioritario</span>
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
                >
                  Cancelar Suscripción
                </Button>
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Descargar Facturas
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

