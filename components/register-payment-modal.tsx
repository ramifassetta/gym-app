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
import { Save, X, CreditCard, User, Calendar, DollarSign } from "lucide-react"

interface RegisterPaymentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onPaymentRegistered?: () => void
}

export function RegisterPaymentModal({ open, onOpenChange, onPaymentRegistered }: RegisterPaymentModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de registro de pago
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
      if (onPaymentRegistered) {
        onPaymentRegistered()
      }
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-primary" />
            Registrar Pago
          </DialogTitle>
          <DialogDescription>
            Registra un nuevo pago recibido de un cliente
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información del Cliente</CardTitle>
              <CardDescription>Selecciona el cliente que realizó el pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client">Cliente</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select>
                    <SelectTrigger id="client" className="pl-10">
                      <SelectValue placeholder="Seleccionar cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client1">Juan Pérez</SelectItem>
                      <SelectItem value="client2">María García</SelectItem>
                      <SelectItem value="client3">Carlos López</SelectItem>
                      <SelectItem value="client4">Ana Martínez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalles del Pago</CardTitle>
              <CardDescription>Información del pago recibido</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Monto</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="amount" type="number" step="0.01" placeholder="0.00" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moneda</Label>
                  <Select defaultValue="EUR">
                    <SelectTrigger id="currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentDate">Fecha del Pago</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="paymentDate" type="date" className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Método de Pago</Label>
                  <Select>
                    <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Seleccionar método" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Efectivo</SelectItem>
                      <SelectItem value="card">Tarjeta</SelectItem>
                      <SelectItem value="transfer">Transferencia</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="stripe">Stripe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentType">Tipo de Pago</Label>
                <Select>
                  <SelectTrigger id="paymentType">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subscription">Suscripción Mensual</SelectItem>
                    <SelectItem value="session">Sesión Individual</SelectItem>
                    <SelectItem value="package">Paquete de Sesiones</SelectItem>
                    <SelectItem value="personal-training">Entrenamiento Personal</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reference">Referencia/Número de Transacción</Label>
                <Input id="reference" placeholder="Número de referencia o transacción" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea
                  id="notes"
                  placeholder="Notas adicionales sobre el pago..."
                  className="min-h-[80px]"
                />
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
              {isLoading ? "Registrando..." : "Registrar Pago"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 