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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="privacy">Privacidad</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Información del Perfil</CardTitle>
                <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Upload className="mr-2 h-4 w-4" />
                      Cambiar Foto
                    </Button>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nombre</Label>
                        <Input id="first-name" defaultValue="Juan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Apellido</Label>
                        <Input id="last-name" defaultValue="Pérez" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue="juan@ejemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="+34 600 123 456" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birth-date">Fecha de nacimiento</Label>
                        <Input id="birth-date" type="date" defaultValue="1990-05-15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Género</Label>
                        <Select defaultValue="male">
                          <SelectTrigger id="gender">
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
                        <Input id="height" type="number" defaultValue="178" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Sobre mí</Label>
                  <Textarea
                    id="bio"
                    placeholder="Cuéntanos sobre ti, tus objetivos y preferencias de entrenamiento..."
                    className="min-h-[100px]"
                    defaultValue="Me interesa perder peso y mejorar mi condición física general. Tengo poca experiencia en entrenamiento pero estoy muy motivado para alcanzar mis objetivos."
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Objetivos y preferencias</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="main-goal">Objetivo principal</Label>
                      <Select defaultValue="weight-loss">
                        <SelectTrigger id="main-goal">
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
                        <SelectTrigger id="experience-level">
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
                        <SelectTrigger id="training-frequency">
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
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" type="button">
                  Cancelar
                </Button>
                <Button type="submit" disabled={isLoading}>
                  <Save className="mr-2 h-4 w-4" />
                  {isLoading ? "Guardando..." : "Guardar Cambios"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seguridad de la Cuenta</CardTitle>
              <CardDescription>Actualiza tu contraseña y configura la seguridad de tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Contraseña Actual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva Contraseña</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Actualizar Contraseña</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sesiones Activas</CardTitle>
              <CardDescription>Gestiona los dispositivos donde has iniciado sesión</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="font-medium">Chrome en Windows</div>
                    <div className="text-sm text-muted-foreground">Madrid, España • Activo ahora</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Este Dispositivo
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="font-medium">Safari en iPhone</div>
                    <div className="text-sm text-muted-foreground">Madrid, España • Hace 2 horas</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Cerrar Sesión
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Chrome en MacBook</div>
                    <div className="text-sm text-muted-foreground">Barcelona, España • Hace 5 días</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="ml-auto">
                Cerrar Todas las Sesiones
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preferencias de Notificaciones</CardTitle>
              <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificaciones por Correo</h3>
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
                <h3 className="text-lg font-medium">Notificaciones en la Aplicación</h3>
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
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Preferencias</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Privacidad</CardTitle>
              <CardDescription>Controla quién puede ver tu información y actividad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visibilidad del Perfil</h3>
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
                <h3 className="text-lg font-medium">Compartir Datos</h3>
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
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Preferencias</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Datos de la Cuenta</CardTitle>
              <CardDescription>Gestiona tus datos personales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Exportar Datos</h3>
                <p className="text-sm text-muted-foreground">
                  Descarga una copia de todos tus datos personales, incluyendo perfil, rutinas y progreso.
                </p>
                <Button variant="outline">Solicitar Exportación</Button>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <h3 className="text-lg font-medium text-destructive">Eliminar Cuenta</h3>
                <p className="text-sm text-muted-foreground">
                  Eliminar permanentemente tu cuenta y todos tus datos. Esta acción no se puede deshacer.
                </p>
                <Button variant="destructive">Eliminar mi Cuenta</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

