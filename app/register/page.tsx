"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = searchParams.get("role") || "gym"
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent, role: string) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de registro
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
              <CardTitle className="text-2xl text-center">Crear una cuenta</CardTitle>
              <CardDescription className="text-center">Regístrate para comenzar a usar GymRoutine Pro</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={defaultRole} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="gym">Gimnasio</TabsTrigger>
                  <TabsTrigger value="user">Usuario</TabsTrigger>
                </TabsList>
                <TabsContent value="gym">
                  <form onSubmit={(e) => handleSubmit(e, "gym")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gym-name">Nombre del Gimnasio</Label>
                      <Input id="gym-name" placeholder="Nombre de tu gimnasio" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-name">Nombre del Administrador</Label>
                      <Input id="admin-name" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gym-email">Correo electrónico</Label>
                      <Input id="gym-email" type="email" placeholder="gimnasio@ejemplo.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gym-phone">Teléfono</Label>
                      <Input id="gym-phone" type="tel" placeholder="+34 600 000 000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gym-address">Dirección</Label>
                      <Input id="gym-address" placeholder="Dirección del gimnasio" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gym-password">Contraseña</Label>
                      <Input id="gym-password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gym-confirm-password">Confirmar contraseña</Label>
                      <Input id="gym-confirm-password" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gym-terms" required />
                      <label
                        htmlFor="gym-terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto los{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          términos y condiciones
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Registrando..." : "Registrarse como Gimnasio"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="user">
                  <form onSubmit={(e) => handleSubmit(e, "user")} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-first-name">Nombre</Label>
                        <Input id="user-first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-last-name">Apellido</Label>
                        <Input id="user-last-name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Correo electrónico</Label>
                      <Input id="user-email" type="email" placeholder="usuario@ejemplo.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-phone">Teléfono</Label>
                      <Input id="user-phone" type="tel" placeholder="+34 600 000 000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-password">Contraseña</Label>
                      <Input id="user-password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-confirm-password">Confirmar contraseña</Label>
                      <Input id="user-confirm-password" type="password" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="user-terms" required />
                      <label
                        htmlFor="user-terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acepto los{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          términos y condiciones
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Registrando..." : "Registrarse como Usuario"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Inicia sesión aquí
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

