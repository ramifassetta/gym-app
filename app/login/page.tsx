"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent, role: string) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de inicio de sesión
    setTimeout(() => {
      setIsLoading(false)
      // Redirigir según el rol
      if (role === "gym") {
        router.push("/dashboard")
      } else {
        router.push("/user-dashboard")
      }
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center bg-muted/40 p-4">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
              <CardDescription className="text-center">
                Ingresa tus credenciales para acceder a tu cuenta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="gym" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="gym">Gimnasio</TabsTrigger>
                  <TabsTrigger value="user">Usuario</TabsTrigger>
                </TabsList>
                <TabsContent value="gym">
                  <form onSubmit={(e) => handleSubmit(e, "gym")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gym-email">Correo electrónico</Label>
                      <Input id="gym-email" type="email" placeholder="gimnasio@ejemplo.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="gym-password">Contraseña</Label>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <Input id="gym-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="user">
                  <form onSubmit={(e) => handleSubmit(e, "user")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Correo electrónico</Label>
                      <Input id="user-email" type="email" placeholder="usuario@ejemplo.com" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="user-password">Contraseña</Label>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <Input id="user-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Regístrate aquí
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

