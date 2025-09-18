"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Shield, 
  Users, 
  Clock, 
  TrendingUp, 
  QrCode, 
  Fingerprint, 
  CreditCard,
  Calendar,
  Search,
  Filter,
  X,
  Settings,
  Lock,
  Unlock
} from "lucide-react"
import { motion } from "framer-motion"

// Datos mock para demostración
const mockAccessLogs = [
  {
    id: 1,
    clientName: "Juan Pérez",
    accessType: "QR",
    timestamp: "2024-01-15 08:30:00",
    status: "success"
  },
  {
    id: 2,
    clientName: "María García",
    accessType: "Huella",
    timestamp: "2024-01-15 09:15:00",
    status: "success"
  },
  {
    id: 3,
    clientName: "Carlos López",
    accessType: "Tarjeta",
    timestamp: "2024-01-15 10:00:00",
    status: "success"
  },
  {
    id: 4,
    clientName: "Ana Martínez",
    accessType: "QR",
    timestamp: "2024-01-15 11:30:00",
    status: "success"
  },
]


const mockPeakHours = [
  { hour: "08:00-09:00", visits: 45, percentage: 25 },
  { hour: "09:00-10:00", visits: 38, percentage: 21 },
  { hour: "10:00-11:00", visits: 32, percentage: 18 },
  { hour: "11:00-12:00", visits: 28, percentage: 16 },
  { hour: "12:00-13:00", visits: 22, percentage: 12 },
  { hour: "13:00-14:00", visits: 15, percentage: 8 },
]

export default function AccessControlPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [accessTypeFilter, setAccessTypeFilter] = useState("all")
  const [showConfigModal, setShowConfigModal] = useState(false)
  const [barrierEnabled, setBarrierEnabled] = useState(false)
  const [accessConfig, setAccessConfig] = useState({
    qrEnabled: true,
    fingerprintEnabled: true,
    cardEnabled: true
  })

  const getAccessTypeIcon = (type: string) => {
    switch (type) {
      case "QR": return <QrCode className="h-4 w-4" />
      case "Huella": return <Fingerprint className="h-4 w-4" />
      case "Tarjeta": return <CreditCard className="h-4 w-4" />
      default: return <Shield className="h-4 w-4" />
    }
  }

  const handleBarrierToggle = () => {
    setBarrierEnabled(!barrierEnabled)
    console.log(`Barrera ${barrierEnabled ? 'deshabilitada' : 'habilitada'}`)
    // Aquí se enviaría la señal al sistema de barrera física
  }

  const filteredLogs = mockAccessLogs.filter(log => {
    const matchesSearch = log.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = accessTypeFilter === "all" || log.accessType === accessTypeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Control de Acceso
        </motion.h1>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            onClick={() => setShowConfigModal(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all"
          >
            <Settings className="mr-2 h-4 w-4" /> Configurar Acceso
          </Button>
        </motion.div>
      </div>

      {/* Estadísticas rápidas */}
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accesos Hoy</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+12% desde ayer</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">En el gimnasio ahora</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Promedio Diario</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">Últimos 7 días</p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hora Pico</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">08:00</div>
            <p className="text-xs text-muted-foreground">Mayor concurrencia</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Control de Barrera */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
          <CardHeader className="bg-gradient-to-r from-background to-muted">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Control de Barrera de Acceso
            </CardTitle>
            <CardDescription>Habilitar o bloquear la barrera física de entrada</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${barrierEnabled ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {barrierEnabled ? <Unlock className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Barrera de Acceso</h3>
                  <p className="text-sm text-muted-foreground">
                    {barrierEnabled ? 'Barrera habilitada - Acceso libre' : 'Barrera bloqueada - Solo con autorización'}
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleBarrierToggle}
                className={`${
                  barrierEnabled 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white' 
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {barrierEnabled ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Bloquear Barrera
                  </>
                ) : (
                  <>
                    <Unlock className="mr-2 h-4 w-4" />
                    Habilitar Barrera
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Tabs defaultValue="logs" className="space-y-6">
          <TabsList className="bg-background/80 backdrop-blur-sm border w-full justify-start p-1 rounded-xl">
            <TabsTrigger 
              value="logs"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Shield className="mr-2 h-4 w-4" />
              Registro de Accesos
            </TabsTrigger>
            <TabsTrigger 
              value="reports"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Reportes de Horarios
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="logs" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Registro de Ingresos</CardTitle>
                  <CardDescription>Historial de accesos por huella, QR y tarjeta</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar cliente..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                  <Select value={accessTypeFilter} onValueChange={setAccessTypeFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="QR">QR</SelectItem>
                      <SelectItem value="Huella">Huella</SelectItem>
                      <SelectItem value="Tarjeta">Tarjeta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {filteredLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        {getAccessTypeIcon(log.accessType)}
                        <div>
                          <p className="font-medium">{log.clientName}</p>
                          <p className="text-sm text-muted-foreground">{log.timestamp}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {log.accessType}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          
          <TabsContent value="reports" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Reportes de Horarios con Mayor Concurrencia</CardTitle>
                  <CardDescription>Análisis de los horarios más populares del gimnasio</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockPeakHours.map((hour, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-medium">{hour.hour}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">{hour.visits}</p>
                          <p className="text-sm text-muted-foreground">visitas</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{hour.percentage}%</p>
                          <p className="text-sm text-muted-foreground">del total</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Modal de configuración de acceso */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Configuración de Acceso</DialogTitle>
            <DialogDescription>
              Configura los métodos de acceso y límites del gimnasio
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-3 block">Métodos de Acceso Habilitados</label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <QrCode className="h-5 w-5 text-blue-600" />
                        <span>Acceso por QR</span>
                      </div>
                      <Switch 
                        checked={accessConfig.qrEnabled}
                        onCheckedChange={(checked) => setAccessConfig(prev => ({...prev, qrEnabled: checked}))}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Fingerprint className="h-5 w-5 text-green-600" />
                        <span>Acceso por Huella</span>
                      </div>
                      <Switch 
                        checked={accessConfig.fingerprintEnabled}
                        onCheckedChange={(checked) => setAccessConfig(prev => ({...prev, fingerprintEnabled: checked}))}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                        <span>Acceso por Tarjeta</span>
                      </div>
                      <Switch 
                        checked={accessConfig.cardEnabled}
                        onCheckedChange={(checked) => setAccessConfig(prev => ({...prev, cardEnabled: checked}))}
                      />
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={() => setShowConfigModal(false)}
                  variant="outline" 
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={() => {
                    console.log("Configuración guardada:", accessConfig)
                    setShowConfigModal(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  Guardar
                </Button>
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
