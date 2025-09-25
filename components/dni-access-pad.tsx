"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Clock, 
  User,
  Hash,
  ArrowLeft,
  Trash2
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface DNIAccessPadProps {
  onAccessGranted?: (clientData: any) => void
  onAccessDenied?: (reason: string) => void
}

export function DNIAccessPad({ onAccessGranted, onAccessDenied }: DNIAccessPadProps) {
  const [dniInput, setDniInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [accessResult, setAccessResult] = useState<{
    type: 'success' | 'error' | 'warning' | null
    message: string
    clientData?: any
  }>({ type: null, message: "" })

  // Datos mock de clientes para simular la búsqueda
  const mockClients = [
    { id: 1, name: "Juan Pérez", dni: "12345678A", status: "active", subscriptionExpires: "15/02/2024" },
    { id: 2, name: "María García", dni: "87654321B", status: "active", subscriptionExpires: "20/03/2024" },
    { id: 3, name: "Carlos López", dni: "11223344C", status: "inactive", subscriptionExpires: "10/01/2024" },
    { id: 4, name: "Ana Martínez", dni: "55667788D", status: "active", subscriptionExpires: "05/04/2024" },
    { id: 5, name: "Roberto Sánchez", dni: "99887766E", status: "active", subscriptionExpires: "25/02/2024" },
  ]

  const handleNumberClick = (number: string) => {
    if (dniInput.length < 9) {
      setDniInput(prev => prev + number)
    }
  }

  const handleClear = () => {
    setDniInput("")
    setAccessResult({ type: null, message: "" })
  }

  const handleBackspace = () => {
    setDniInput(prev => prev.slice(0, -1))
    setAccessResult({ type: null, message: "" })
  }

  const handleAccess = async () => {
    if (dniInput.length < 8) {
      setAccessResult({
        type: 'warning',
        message: 'El DNI debe tener al menos 8 dígitos'
      })
      return
    }

    setIsProcessing(true)
    
    // Simular búsqueda de cliente
    setTimeout(() => {
      const client = mockClients.find(c => c.dni.startsWith(dniInput))
      
      if (!client) {
        setAccessResult({
          type: 'error',
          message: 'Cliente no encontrado'
        })
        setIsProcessing(false)
        onAccessDenied?.('Cliente no encontrado')
        return
      }

      if (client.status === 'inactive') {
        setAccessResult({
          type: 'error',
          message: 'Cliente inactivo - Suscripción vencida'
        })
        setIsProcessing(false)
        onAccessDenied?.('Cliente inactivo')
        return
      }

      // Simular verificación de suscripción
      const today = new Date()
      const expireDate = new Date(client.subscriptionExpires.split('/').reverse().join('-'))
      
      if (expireDate < today) {
        setAccessResult({
          type: 'error',
          message: 'Suscripción vencida'
        })
        setIsProcessing(false)
        onAccessDenied?.('Suscripción vencida')
        return
      }

      setAccessResult({
        type: 'success',
        message: `Acceso autorizado para ${client.name}`,
        clientData: client
      })
      setIsProcessing(false)
      onAccessGranted?.(client)
      
      // Limpiar después de 3 segundos
      setTimeout(() => {
        setDniInput("")
        setAccessResult({ type: null, message: "" })
      }, 3000)
      
    }, 1500)
  }

  const getResultIcon = () => {
    switch (accessResult.type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'error': return <XCircle className="h-5 w-5 text-red-600" />
      case 'warning': return <Clock className="h-5 w-5 text-yellow-600" />
      default: return null
    }
  }

  const getResultColor = () => {
    switch (accessResult.type) {
      case 'success': return 'border-green-200 bg-green-50'
      case 'error': return 'border-red-200 bg-red-50'
      case 'warning': return 'border-yellow-200 bg-yellow-50'
      default: return ''
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto border-primary/20 shadow-lg">
      <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-primary/10">
        <CardTitle className="flex items-center justify-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Control de Acceso por DNI
        </CardTitle>
        <CardDescription>
          Ingrese el DNI del cliente para verificar acceso
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 p-6">
        {/* Display del DNI */}
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">DNI ingresado:</div>
          <div className="text-2xl font-mono font-bold text-primary bg-muted/50 p-3 rounded-lg border-2 border-primary/20 min-h-[3rem] flex items-center justify-center">
            {dniInput || "________"}
          </div>
        </div>

        {/* Resultado del acceso */}
        <AnimatePresence>
          {accessResult.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Alert className={getResultColor()}>
                <div className="flex items-center gap-2">
                  {getResultIcon()}
                  <AlertDescription className="font-medium">
                    {accessResult.message}
                  </AlertDescription>
                </div>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pad numérico */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <Button
              key={number}
              variant="outline"
              size="lg"
              className="h-16 text-xl font-bold hover:bg-primary hover:text-white transition-all duration-200"
              onClick={() => handleNumberClick(number.toString())}
              disabled={isProcessing}
            >
              {number}
            </Button>
          ))}
          
          {/* Botones especiales */}
          <Button
            variant="outline"
            size="lg"
            className="h-16 hover:bg-muted transition-all duration-200"
            onClick={handleClear}
            disabled={isProcessing}
          >
            <Trash2 className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="h-16 text-xl font-bold hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => handleNumberClick("0")}
            disabled={isProcessing}
          >
            0
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="h-16 hover:bg-muted transition-all duration-200"
            onClick={handleBackspace}
            disabled={isProcessing}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Botón de acceso */}
        <Button
          onClick={handleAccess}
          disabled={dniInput.length < 8 || isProcessing}
          className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isProcessing ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-spin" />
              Verificando...
            </>
          ) : (
            <>
              <Shield className="mr-2 h-4 w-4" />
              Verificar Acceso
            </>
          )}
        </Button>

        {/* Información adicional */}
        <div className="text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <User className="h-4 w-4" />
            <span>Clientes registrados: {mockClients.length}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Hash className="h-4 w-4" />
            <span>Formato: 8 dígitos + letra</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
