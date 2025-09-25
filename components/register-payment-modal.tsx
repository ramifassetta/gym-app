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
import { Save, X, CreditCard, User, Calendar, Banknote } from "lucide-react"

interface RegisterPaymentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onPaymentRegistered?: () => void
}

export function RegisterPaymentModal({ open, onOpenChange, onPaymentRegistered }: RegisterPaymentModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPaymentType, setSelectedPaymentType] = useState("")
  const [amountPaid, setAmountPaid] = useState("")
  const [debt, setDebt] = useState(0)

  // Configuración de precios de pases
  const passPrices = {
    "pase-libre": 45000,
    "pase-libre-3-meses": 120000,
    "pase-libre-anual": 400000,
    "pase-mensual-3-dias": 15000,
    "pase-dia": 2000
  }

  // Calcular deuda cuando cambie el tipo de pase o el monto pagado
  const calculateDebt = (paymentType: string, paidAmount: string) => {
    if (!paymentType || !paidAmount) {
      setDebt(0)
      return
    }
    
    const price = passPrices[paymentType as keyof typeof passPrices] || 0
    const paid = parseFloat(paidAmount) || 0
    const calculatedDebt = price - paid
    
    setDebt(calculatedDebt)
  }

  const handlePaymentTypeChange = (value: string) => {
    setSelectedPaymentType(value)
    calculateDebt(value, amountPaid)
  }

  const handleAmountChange = (value: string) => {
    setAmountPaid(value)
    calculateDebt(selectedPaymentType, value)
  }

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
              <div className="space-y-2">
                <Label htmlFor="amount">Monto Pagado (Pesos Argentinos)</Label>
                <div className="relative">
                  <Banknote className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="amount" 
                    type="number" 
                    step="0.01" 
                    placeholder="0.00" 
                    className="pl-10" 
                    value={amountPaid}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    required 
                  />
                </div>
                {selectedPaymentType && (
                  <p className="text-sm text-muted-foreground">
                    Precio del pase: ${passPrices[selectedPaymentType as keyof typeof passPrices]?.toLocaleString()}
                  </p>
                )}
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
                      <SelectItem value="transfer">Transferencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentType">Tipo de Pago</Label>
                <Select value={selectedPaymentType} onValueChange={handlePaymentTypeChange}>
                  <SelectTrigger id="paymentType">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pase-libre">Pase Libre - $45.000</SelectItem>
                    <SelectItem value="pase-libre-3-meses">Pase Libre 3 meses - $120.000</SelectItem>
                    <SelectItem value="pase-libre-anual">Pase Libre anual - $400.000</SelectItem>
                    <SelectItem value="pase-mensual-3-dias">Pase mensual 3 días - $15.000</SelectItem>
                    <SelectItem value="pase-dia">Pase día - $2.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mostrar deuda si existe */}
              {debt !== 0 && (
                <div className={`p-4 rounded-lg border ${
                  debt > 0 
                    ? 'bg-red-50 border-red-200 text-red-800' 
                    : 'bg-green-50 border-green-200 text-green-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {debt > 0 ? 'Deuda pendiente:' : 'Pago en exceso:'}
                    </span>
                    <span className="font-bold">
                      ${Math.abs(debt).toLocaleString()}
                    </span>
                  </div>
                  {debt > 0 && (
                    <p className="text-sm mt-1 opacity-80">
                      El cliente debe ${debt.toLocaleString()} pesos argentinos
                    </p>
                  )}
                </div>
              )}

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