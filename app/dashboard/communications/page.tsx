"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Settings,
  Bell,
  Calendar,
  Users,
  Zap,
  Smartphone,
  X,
  FileText
} from "lucide-react"
import { motion } from "framer-motion"

// Datos mock para demostración
const mockAutomations = [
  {
    id: 1,
    name: "Recordatorio de Vencimiento",
    type: "subscription_reminder",
    status: "active",
    description: "Envía recordatorio 3 días antes del vencimiento",
    lastSent: "2024-01-15",
    totalSent: 45,
    successRate: 95
  },
  {
    id: 2,
    name: "Confirmación de Pago",
    type: "payment_confirmation",
    status: "active",
    description: "Confirma automáticamente cuando se registra un pago",
    lastSent: "2024-01-15",
    totalSent: 28,
    successRate: 100
  },
  {
    id: 3,
    name: "Envío de Factura",
    type: "invoice_sending",
    status: "active",
    description: "Envía la factura automáticamente cuando se registra un pago",
    lastSent: "2024-01-15",
    totalSent: 28,
    successRate: 100
  },
  {
    id: 4,
    name: "Nueva Rutina Disponible",
    type: "new_routine",
    status: "inactive",
    description: "Notifica cuando se asigna una nueva rutina",
    lastSent: "2024-01-10",
    totalSent: 12,
    successRate: 88
  },
]

const mockMessages = [
  {
    id: 1,
    type: "subscription_reminder",
    clientName: "Juan Pérez",
    message: "Hola Juan! Tu suscripción vence en 3 días. Renueva ahora para mantener tu acceso al gimnasio.",
    status: "sent",
    timestamp: "2024-01-15 10:30:00",
    deliveryStatus: "delivered"
  },
  {
    id: 2,
    type: "payment_confirmation",
    clientName: "María García",
    message: "¡Pago confirmado! Tu suscripción está activa hasta el 15 de febrero. ¡Gracias!",
    status: "sent",
    timestamp: "2024-01-15 09:15:00",
    deliveryStatus: "delivered"
  },
  {
    id: 3,
    type: "new_routine",
    clientName: "Carlos López",
    message: "¡Nueva rutina disponible! Revisa tu nueva rutina de fuerza en la app.",
    status: "sent",
    timestamp: "2024-01-14 16:45:00",
    deliveryStatus: "read"
  },
]

const mockTemplates = [
  {
    id: 1,
    name: "Recordatorio de Vencimiento",
    type: "subscription_reminder",
    content: "Hola {{clientName}}! Tu suscripción vence en {{daysLeft}} días. Renueva ahora para mantener tu acceso al gimnasio. ¡Te esperamos!",
    variables: ["clientName", "daysLeft"]
  },
  {
    id: 2,
    name: "Confirmación de Pago",
    type: "payment_confirmation",
    content: "¡Pago confirmado! Tu suscripción está activa hasta el {{expirationDate}}. ¡Gracias por confiar en nosotros!",
    variables: ["expirationDate"]
  },
  {
    id: 3,
    name: "Envío de Factura",
    type: "invoice_sending",
    content: "¡Hola {{clientName}}! Tu factura por ${{amount}} ha sido generada. Puedes descargarla desde el siguiente enlace: {{invoiceLink}}. ¡Gracias por tu pago!",
    variables: ["clientName", "amount", "invoiceLink"]
  },
  {
    id: 4,
    name: "Nueva Rutina",
    type: "new_routine",
    content: "¡Nueva rutina disponible! Revisa tu nueva rutina de {{routineType}} en la app. ¡A entrenar!",
    variables: ["routineType"]
  },
]

export default function CommunicationsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [messageContent, setMessageContent] = useState("")
  const [selectedClients, setSelectedClients] = useState<string[]>([])
  const [showSendModal, setShowSendModal] = useState(false)
  const [sendMessageForm, setSendMessageForm] = useState({
    client: "",
    messageType: "custom",
    customMessage: "",
    template: ""
  })
  const [automationSettings, setAutomationSettings] = useState({
    subscriptionReminder: true,
    paymentConfirmation: true,
    invoiceSending: true,
    newRoutine: false,
    customMessages: false
  })

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case "subscription_reminder": return <Clock className="h-4 w-4" />
      case "payment_confirmation": return <CheckCircle className="h-4 w-4" />
      case "invoice_sending": return <FileText className="h-4 w-4" />
      case "new_routine": return <Zap className="h-4 w-4" />
      default: return <MessageSquare className="h-4 w-4" />
    }
  }

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "text-green-600 border-green-200 bg-green-50"
      case "read": return "text-blue-600 border-blue-200 bg-blue-50"
      case "failed": return "text-red-600 border-red-200 bg-red-50"
      default: return "text-gray-600 border-gray-200 bg-gray-50"
    }
  }

  const getAutomationStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 border-green-200 bg-green-50"
      case "inactive": return "text-gray-600 border-gray-200 bg-gray-50"
      default: return "text-gray-600 border-gray-200 bg-gray-50"
    }
  }

  const totalMessagesSent = mockMessages.length
  const successRate = Math.round((mockMessages.filter(m => m.deliveryStatus !== "failed").length / totalMessagesSent) * 100)

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Automatizaciones y Comunicaciones
        </motion.h1>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            onClick={() => setShowSendModal(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all"
          >
            <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
          </Button>
        </motion.div>
      </div>

      {/* Estadísticas principales */}
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensajes Enviados</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMessagesSent}</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasa de Éxito</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{successRate}%</div>
            <p className="text-xs text-green-600">Entregados correctamente</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automatizaciones</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAutomations.filter(a => a.status === "active").length}</div>
            <p className="text-xs text-muted-foreground">Activas</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">WhatsApp Business</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Conectado</div>
            <p className="text-xs text-green-600">API activa</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="automations" className="space-y-6">
          <TabsList className="bg-background/80 backdrop-blur-sm border w-full justify-start p-1 rounded-xl">
            <TabsTrigger 
              value="automations"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Zap className="mr-2 h-4 w-4" />
              Automatizaciones
            </TabsTrigger>
            <TabsTrigger 
              value="messages"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Historial de Mensajes
            </TabsTrigger>
            <TabsTrigger 
              value="templates"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Settings className="mr-2 h-4 w-4" />
              Plantillas
            </TabsTrigger>
            <TabsTrigger 
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Bell className="mr-2 h-4 w-4" />
              Configuración
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="automations" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Automatizaciones Activas</CardTitle>
                  <CardDescription>Configuración de mensajes automáticos vía WhatsApp</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockAutomations.map((automation) => (
                    <div key={automation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getMessageTypeIcon(automation.type)}
                        <div>
                          <p className="font-medium">{automation.name}</p>
                          <p className="text-sm text-muted-foreground">{automation.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">{automation.totalSent}</p>
                          <p className="text-sm text-muted-foreground">enviados</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{automation.successRate}%</p>
                          <p className="text-sm text-muted-foreground">éxito</p>
                        </div>
                        <Badge className={getAutomationStatusColor(automation.status)}>
                          {automation.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Historial de Mensajes</CardTitle>
                  <CardDescription>Últimos mensajes enviados vía WhatsApp</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <div key={message.id} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex items-start gap-3">
                        {getMessageTypeIcon(message.type)}
                        <div className="flex-1">
                          <p className="font-medium">{message.clientName}</p>
                          <p className="text-sm text-muted-foreground mt-1">{message.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">{message.timestamp}</p>
                        </div>
                      </div>
                      <Badge className={getDeliveryStatusColor(message.deliveryStatus)}>
                        {message.deliveryStatus === "delivered" ? "Entregado" : 
                         message.deliveryStatus === "read" ? "Leído" : "Fallido"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="templates" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Plantillas de Mensajes</CardTitle>
                  <CardDescription>Personaliza los mensajes automáticos</CardDescription>
                </div>
                <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                  Nueva Plantilla
                </Button>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockTemplates.map((template) => (
                    <div key={template.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium">{template.name}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button variant="outline" size="sm">Probar</Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{template.content}</p>
                      <div className="flex gap-2">
                        {template.variables.map((variable, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {`{{${variable}}}`}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Configuración de Automatizaciones</CardTitle>
                  <CardDescription>Activa o desactiva las automatizaciones</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Recordatorios de Vencimiento</p>
                      <p className="text-sm text-muted-foreground">Envía recordatorio 3 días antes del vencimiento</p>
                    </div>
                    <Switch 
                      checked={automationSettings.subscriptionReminder}
                      onCheckedChange={(checked) => setAutomationSettings(prev => ({...prev, subscriptionReminder: checked}))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Confirmación de Pago</p>
                      <p className="text-sm text-muted-foreground">Confirma automáticamente cuando se registra un pago</p>
                    </div>
                    <Switch 
                      checked={automationSettings.paymentConfirmation}
                      onCheckedChange={(checked) => setAutomationSettings(prev => ({...prev, paymentConfirmation: checked}))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Envío de Factura</p>
                      <p className="text-sm text-muted-foreground">Envía la factura automáticamente cuando se registra un pago</p>
                    </div>
                    <Switch 
                      checked={automationSettings.invoiceSending}
                      onCheckedChange={(checked) => setAutomationSettings(prev => ({...prev, invoiceSending: checked}))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Nuevas Rutinas</p>
                      <p className="text-sm text-muted-foreground">Notifica cuando se asigna una nueva rutina</p>
                    </div>
                    <Switch 
                      checked={automationSettings.newRoutine}
                      onCheckedChange={(checked) => setAutomationSettings(prev => ({...prev, newRoutine: checked}))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Mensajes Personalizados</p>
                      <p className="text-sm text-muted-foreground">Permite enviar mensajes personalizados</p>
                    </div>
                    <Switch 
                      checked={automationSettings.customMessages}
                      onCheckedChange={(checked) => setAutomationSettings(prev => ({...prev, customMessages: checked}))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Modal para enviar mensaje manual */}
      <Dialog open={showSendModal} onOpenChange={setShowSendModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Enviar Mensaje Manual</DialogTitle>
            <DialogDescription>
              Envía un mensaje personalizado o predefinido a un cliente
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Seleccionar Cliente</label>
                  <Select value={sendMessageForm.client} onValueChange={(value) => setSendMessageForm(prev => ({...prev, client: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Juan Pérez">Juan Pérez</SelectItem>
                      <SelectItem value="María García">María García</SelectItem>
                      <SelectItem value="Carlos López">Carlos López</SelectItem>
                      <SelectItem value="Ana Martínez">Ana Martínez</SelectItem>
                      <SelectItem value="Roberto Sánchez">Roberto Sánchez</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Mensaje</label>
                  <Select value={sendMessageForm.messageType} onValueChange={(value) => setSendMessageForm(prev => ({...prev, messageType: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Mensaje Personalizado</SelectItem>
                      <SelectItem value="payment_confirmation">Confirmación de Pago</SelectItem>
                      <SelectItem value="invoice_sending">Envío de Factura</SelectItem>
                      <SelectItem value="subscription_reminder">Recordatorio de Vencimiento</SelectItem>
                      <SelectItem value="new_routine">Nueva Rutina Disponible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {sendMessageForm.messageType === "custom" ? (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje Personalizado</label>
                    <Textarea
                      placeholder="Escribe tu mensaje aquí..."
                      value={sendMessageForm.customMessage}
                      onChange={(e) => setSendMessageForm(prev => ({...prev, customMessage: e.target.value}))}
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground mt-1">Ejemplo: "Hola Juan! Tu pago fue procesado correctamente. ¡Gracias!"</p>
                  </div>
                ) : (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Plantilla Seleccionada</label>
                    <div className="p-3 border rounded-lg bg-muted/50">
                      <p className="text-sm">
                        {sendMessageForm.messageType === "payment_confirmation" && "¡Pago confirmado! Tu suscripción está activa hasta el {{expirationDate}}. ¡Gracias por confiar en nosotros!"}
                        {sendMessageForm.messageType === "invoice_sending" && "¡Hola {{clientName}}! Tu factura por ${{amount}} ha sido generada. Puedes descargarla desde el siguiente enlace: {{invoiceLink}}. ¡Gracias por tu pago!"}
                        {sendMessageForm.messageType === "subscription_reminder" && "Hola {{clientName}}! Tu suscripción vence en {{daysLeft}} días. Renueva ahora para mantener tu acceso al gimnasio. ¡Te esperamos!"}
                        {sendMessageForm.messageType === "new_routine" && "¡Nueva rutina disponible! Revisa tu nueva rutina de {{routineType}} en la app. ¡A entrenar!"}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Este mensaje se enviará automáticamente con los datos del cliente</p>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={() => setShowSendModal(false)}
                  variant="outline" 
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={() => {
                    console.log("Mensaje enviado:", sendMessageForm)
                    setShowSendModal(false)
                    setSendMessageForm({ client: "", messageType: "custom", customMessage: "", template: "" })
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
