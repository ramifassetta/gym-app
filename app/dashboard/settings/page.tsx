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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Cuenta</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
          <TabsTrigger value="billing">Facturación</TabsTrigger>
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
                      <AvatarFallback>ET</AvatarFallback>
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
                        <Input id="first-name" defaultValue="Entrenador" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Apellido</Label>
                        <Input id="last-name" defaultValue="Ejemplo" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue="entrenador@ejemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="+34 600 123 456" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía</Label>
                      <Textarea
                        id="bio"
                        placeholder="Cuéntanos sobre ti y tu experiencia como entrenador..."
                        className="min-h-[100px]"
                        defaultValue="Entrenador personal certificado con más de 5 años de experiencia en entrenamiento de fuerza y acondicionamiento físico."
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
                <h3 className="text-lg font-medium">Notificaciones en la Aplicación</h3>
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
            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Guardar Preferencias</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Plan de Suscripción</CardTitle>
              <CardDescription>Gestiona tu plan de suscripción y método de pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Plan Pro</h3>
                    <p className="text-sm text-muted-foreground">€29.99/mes • Renovación el 15/07/2023</p>
                  </div>
                  <Button variant="outline">Cambiar Plan</Button>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center text-sm">
                    <div className="w-6 text-center">✓</div>
                    <span>Clientes ilimitados</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-6 text-center">✓</div>
                    <span>Rutinas ilimitadas</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-6 text-center">✓</div>
                    <span>Biblioteca completa de ejercicios</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-6 text-center">✓</div>
                    <span>Soporte prioritario</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Método de Pago</h3>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-muted p-2">
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
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </div>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Añadir Método de Pago
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-destructive">
                Cancelar Suscripción
              </Button>
              <Button>Descargar Facturas</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

