"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Save, X, User, Mail, Phone, Fingerprint, CheckCircle, AlertCircle } from "lucide-react"

interface CreateClientModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClientCreated?: () => void
}

export function CreateClientModal({ open, onOpenChange, onClientCreated }: CreateClientModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [fingerprintStatus, setFingerprintStatus] = useState<'none' | 'scanning' | 'success' | 'error'>('none')
  const [fingerprintTemplate, setFingerprintTemplate] = useState<string | null>(null)

  const handleFingerprintScan = async () => {
    setFingerprintStatus('scanning')
    
    // Simular escaneo de huella dactilar
    setTimeout(() => {
      // Simular éxito/error aleatorio para demo
      const success = Math.random() > 0.3 // 70% de éxito
      
      if (success) {
        setFingerprintStatus('success')
        setFingerprintTemplate('mock_fingerprint_template_' + Date.now())
      } else {
        setFingerprintStatus('error')
      }
    }, 2000)
  }

  const handleRemoveFingerprint = () => {
    setFingerprintStatus('none')
    setFingerprintTemplate(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de creación de cliente
    setTimeout(() => {
      console.log("Cliente creado con huella:", fingerprintTemplate ? "Sí" : "No")
      setIsLoading(false)
      onOpenChange(false)
      if (onClientCreated) {
        onClientCreated()
      }
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <User className="h-6 w-6 text-primary" />
            Agregar Nuevo Cliente
          </DialogTitle>
          <DialogDescription>
            Completa la información para registrar un nuevo cliente en tu gimnasio
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>Datos básicos del cliente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Juan" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Pérez" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="juan@ejemplo.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" type="tel" placeholder="+34 600 123 456" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dni">DNI</Label>
                <Input id="dni" placeholder="12345678A" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                <Input id="birthDate" type="date" />
              </div>
            </CardContent>
          </Card>

          {/* Sección de Registro de Huella Dactilar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fingerprint className="h-5 w-5 text-primary" />
                Registro de Huella Dactilar
              </CardTitle>
              <CardDescription>
                Registra la huella dactilar del cliente para acceso rápido al gimnasio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {fingerprintStatus === 'none' && (
                <div className="text-center p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <Fingerprint className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Registrar Huella Dactilar</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Coloca el dedo en el lector de huellas para registrar la huella del cliente
                  </p>
                  <Button 
                    type="button"
                    onClick={handleFingerprintScan}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    <Fingerprint className="mr-2 h-4 w-4" />
                    Registrar Huella
                  </Button>
                </div>
              )}

              {fingerprintStatus === 'scanning' && (
                <div className="text-center p-6 border-2 border-primary/50 rounded-lg bg-primary/5">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Escaneando Huella...</h3>
                  <p className="text-sm text-muted-foreground">
                    Coloca el dedo en el lector y manténlo hasta que se complete el escaneo
                  </p>
                </div>
              )}

              {fingerprintStatus === 'success' && (
                <div className="text-center p-6 border-2 border-green-200 rounded-lg bg-green-50">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-semibold mb-2 text-green-800">¡Huella Registrada!</h3>
                  <p className="text-sm text-green-600 mb-4">
                    La huella dactilar se ha registrado exitosamente
                  </p>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handleRemoveFingerprint}
                    className="border-red-200 text-red-600 hover:bg-red-50"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Eliminar Huella
                  </Button>
                </div>
              )}

              {fingerprintStatus === 'error' && (
                <div className="text-center p-6 border-2 border-red-200 rounded-lg bg-red-50">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-lg font-semibold mb-2 text-red-800">Error al Registrar</h3>
                  <p className="text-sm text-red-600 mb-4">
                    No se pudo registrar la huella. Intenta nuevamente.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button 
                      type="button"
                      onClick={handleFingerprintScan}
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Fingerprint className="mr-2 h-4 w-4" />
                      Intentar Nuevamente
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={handleRemoveFingerprint}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="text-xs text-muted-foreground text-center">
                <p>💡 <strong>Opcional:</strong> La huella dactilar permite acceso rápido al gimnasio</p>
                <p>El cliente también puede acceder usando su DNI si no tiene huella registrada</p>
              </div>
            </CardContent>
          </Card>


          <div className="flex justify-end gap-4 pt-6">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              <X className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Guardando..." : "Guardar Cliente"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 