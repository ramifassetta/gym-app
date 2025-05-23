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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Upload } from "lucide-react"
import { motion } from "framer-motion"

export default function UserSettingsPage() {
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
            <TabsTrigger value="privacy" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Privacidad
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
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">JP</AvatarFallback>
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
                            defaultValue="Juan"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Apellido</Label>
                          <Input 
                            id="last-name" 
                            defaultValue="Pérez"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          defaultValue="juan@ejemplo.com"
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

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="birth-date">Fecha de nacimiento</Label>
                          <Input 
                            id="birth-date" 
                            type="date" 
                            defaultValue="1990-05-15"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Género</Label>
                          <Select defaultValue="male">
                            <SelectTrigger id="gender" className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300">
                              <SelectValue placeholder="Seleccionar género" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Masculino</SelectItem>
                              <SelectItem value="female">Femenino</SelectItem>
                              <SelectItem value="other">Otro</SelectItem>
                              <SelectItem value="prefer-not-to-say">Prefiero no decirlo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height">Altura (cm)</Label>
                          <Input 
                            id="height" 
                            type="number" 
                            defaultValue="178"
                            className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Sobre mí</Label>
                    <Textarea
                      id="bio"
                      placeholder="Cuéntanos sobre ti, tus objetivos y preferencias de entrenamiento..."
                      className="min-h-[100px] bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300"
                      defaultValue="Me interesa perder peso y mejorar mi condición física general. Tengo poca experiencia en entrenamiento pero estoy muy motivado para alcanzar mis objetivos."
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Objetivos y preferencias</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="main-goal">Objetivo principal</Label>
                        <Select defaultValue="weight-loss">
                          <SelectTrigger id="main-goal" className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300">
                            <SelectValue placeholder="Seleccionar objetivo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weight-loss">Pérdida de peso</SelectItem>
                            <SelectItem value="muscle-gain">Ganancia muscular</SelectItem>
                            <SelectItem value="toning">Tonificación</SelectItem>
                            <SelectItem value="endurance">Resistencia</SelectItem>
                            <SelectItem value="flexibility">Flexibilidad</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience-level">Nivel de experiencia</Label>
                        <Select defaultValue="beginner">
                          <SelectTrigger id="experience-level" className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300">
                            <SelectValue placeholder="Seleccionar nivel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Principiante</SelectItem>
                            <SelectItem value="intermediate">Intermedio</SelectItem>
                            <SelectItem value="advanced">Avanzado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="training-frequency">Frecuencia de entrenamiento</Label>
                        <Select defaultValue="3-4">
                          <SelectTrigger id="training-frequency" className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300">
                            <SelectValue placeholder="Seleccionar frecuencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 veces por semana</SelectItem>
                            <SelectItem value="3-4">3-4 veces por semana</SelectItem>
                            <SelectItem value="5+">5 o más veces por semana</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="limitations">Limitaciones físicas</Label>
                        <Input
                          id="limitations"
                          placeholder="Ej: Lesión de rodilla, problemas de espalda..."
                          defaultValue="Leve molestia en rodilla derecha"
                          className="bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300"
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
                        <Label htmlFor="email-routines">Nuevas rutinas</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo cuando te asignen una nueva rutina
                        </p>
                      </div>
                      <Switch id="email-routines" defaultChecked />
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
                        <Label htmlFor="email-sessions">Sesiones</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo con recordatorios de tus próximas sesiones
                        </p>
                      </div>
                      <Switch id="email-sessions" defaultChecked />
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
                        <Label htmlFor="app-routines">Nuevas rutinas</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibe una notificación cuando te asignen una nueva rutina
                        </p>
                      </div>
                      <Switch id="app-routines" defaultChecked />
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
                        <Label htmlFor="app-sessions">Sesiones</Label>
                        <p className="text-sm text-muted-foreground">Recibe recordatorios de tus próximas sesiones</p>
                      </div>
                      <Switch id="app-sessions" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="app-progress">Progreso</Label>
                        <p className="text-sm text-muted-foreground">Recibe notificaciones sobre tu progreso y logros</p>
                      </div>
                      <Switch id="app-progress" defaultChecked />
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

          <TabsContent value="privacy" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Configuración de Privacidad
                </CardTitle>
                <CardDescription>Controla quién puede ver tu información y actividad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Visibilidad del Perfil
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="profile-visibility">Perfil público</Label>
                        <p className="text-sm text-muted-foreground">
                          Permite que otros usuarios del gimnasio vean tu perfil
                        </p>
                      </div>
                      <Switch id="profile-visibility" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="progress-visibility">Progreso visible</Label>
                        <p className="text-sm text-muted-foreground">
                          Permite que otros usuarios vean tu progreso y logros
                        </p>
                      </div>
                      <Switch id="progress-visibility" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="measurements-visibility">Mediciones visibles</Label>
                        <p className="text-sm text-muted-foreground">Permite que tus entrenadores vean tus mediciones</p>
                      </div>
                      <Switch id="measurements-visibility" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Compartir Datos
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-analytics">Análisis y mejoras</Label>
                        <p className="text-sm text-muted-foreground">
                          Compartir datos anónimos para mejorar la plataforma
                        </p>
                      </div>
                      <Switch id="data-analytics" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="data-marketing">Marketing</Label>
                        <p className="text-sm text-muted-foreground">
                          Recibir ofertas personalizadas basadas en tus intereses
                        </p>
                      </div>
                      <Switch id="data-marketing" />
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

            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-white shadow-sm">
                    <Save className="h-4 w-4" />
                  </div>
                  Datos de la Cuenta
                </CardTitle>
                <CardDescription>Gestiona tus datos personales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Exportar Datos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Descarga una copia de todos tus datos personales, incluyendo perfil, rutinas y progreso.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    Solicitar Exportación
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t border-primary/10">
                  <h3 className="text-lg font-medium text-destructive">Eliminar Cuenta</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminar permanentemente tu cuenta y todos tus datos. Esta acción no se puede deshacer.
                  </p>
                  <Button 
                    variant="destructive"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Eliminar mi Cuenta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

