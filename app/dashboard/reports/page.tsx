"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  BarChart3, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar,
  AlertTriangle,
  Target,
  Download,
  Filter,
  Receipt,
  Plus,
  X
} from "lucide-react"
import { motion } from "framer-motion"

// Datos mock para demostración
const mockIncomeData = [
  { month: "Enero", income: 12500, expenses: 8500, net: 4000 },
  { month: "Febrero", income: 13800, expenses: 9200, net: 4600 },
  { month: "Marzo", income: 15200, expenses: 8800, net: 6400 },
  { month: "Abril", income: 16800, expenses: 9500, net: 7300 },
]

const mockClientStats = [
  { month: "Enero", newClients: 12, cancellations: 3, netGrowth: 9 },
  { month: "Febrero", newClients: 15, cancellations: 2, netGrowth: 13 },
  { month: "Marzo", newClients: 18, cancellations: 4, netGrowth: 14 },
  { month: "Abril", newClients: 22, cancellations: 1, netGrowth: 21 },
]

const mockDebts = [
  {
    id: 1,
    clientName: "Juan Pérez",
    amount: 15000,
    dueDate: "2024-01-20",
    daysOverdue: 5,
    status: "overdue"
  },
  {
    id: 2,
    clientName: "María García",
    amount: 12000,
    dueDate: "2024-01-25",
    daysOverdue: 0,
    status: "pending"
  },
  {
    id: 3,
    clientName: "Carlos López",
    amount: 18000,
    dueDate: "2024-01-15",
    daysOverdue: 10,
    status: "overdue"
  },
]

const mockExpenses = [
  {
    id: 1,
    category: "Alquiler",
    description: "Alquiler del local - Enero 2024",
    amount: 3500,
    date: "2024-01-01",
    status: "paid"
  },
  {
    id: 2,
    category: "Servicios",
    description: "Luz, agua, gas - Enero 2024",
    amount: 1200,
    date: "2024-01-05",
    status: "paid"
  },
  {
    id: 3,
    category: "Equipos",
    description: "Mantenimiento de máquinas",
    amount: 800,
    date: "2024-01-10",
    status: "paid"
  },
  {
    id: 4,
    category: "Marketing",
    description: "Publicidad en redes sociales",
    amount: 500,
    date: "2024-01-15",
    status: "paid"
  },
  {
    id: 5,
    category: "Personal",
    description: "Salarios del personal",
    amount: 2500,
    date: "2024-01-20",
    status: "paid"
  },
]

const expenseCategories = [
  "Alquiler",
  "Servicios",
  "Equipos",
  "Marketing",
  "Personal",
  "Seguros",
  "Otros"
]

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedReport, setSelectedReport] = useState("income")
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const [expenseForm, setExpenseForm] = useState({
    category: "",
    description: "",
    amount: "",
    date: ""
  })

  const getDebtStatusColor = (status: string) => {
    switch (status) {
      case "overdue": return "text-red-600 border-red-200 bg-red-50"
      case "pending": return "text-yellow-600 border-yellow-200 bg-yellow-50"
      default: return "text-gray-600 border-gray-200 bg-gray-50"
    }
  }

  const totalDebts = mockDebts.reduce((sum, debt) => sum + debt.amount, 0)
  const overdueDebts = mockDebts.filter(debt => debt.status === "overdue").reduce((sum, debt) => sum + debt.amount, 0)

  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
        <motion.h1 
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Reportes y Estadísticas
        </motion.h1>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Semanal</SelectItem>
              <SelectItem value="monthly">Mensual</SelectItem>
              <SelectItem value="quarterly">Trimestral</SelectItem>
              <SelectItem value="yearly">Anual</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all">
            <Download className="mr-2 h-4 w-4" /> Exportar
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
            <CardTitle className="text-sm font-medium">Ingresos del Mes</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$168,000</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% vs mes anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nuevos Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +4 vs mes anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deudas Acumuladas</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalDebts.toLocaleString()}</div>
            <p className="text-xs text-red-600">
              ${overdueDebts.toLocaleString()} vencidas
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% vs mes anterior
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="income" className="space-y-6">
          <TabsList className="bg-background/80 backdrop-blur-sm border w-full justify-start p-1 rounded-xl">
            <TabsTrigger 
              value="income"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Ingresos por Período
            </TabsTrigger>
            <TabsTrigger 
              value="clients"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Users className="mr-2 h-4 w-4" />
              Nuevos Clientes
            </TabsTrigger>
            <TabsTrigger 
              value="debts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Deudas Acumuladas
            </TabsTrigger>
            <TabsTrigger 
              value="expenses"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-primary data-[state=active]:text-white rounded-lg"
            >
              <Receipt className="mr-2 h-4 w-4" />
              Gastos Operativos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="income" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Ingresos por Período</CardTitle>
                  <CardDescription>Análisis de ingresos, gastos y ganancias netas</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockIncomeData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{data.month}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-bold text-green-600">${data.income.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Ingresos</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-red-600">${data.expenses.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Gastos</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">${data.net.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Neto</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="clients" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Nuevos Clientes</CardTitle>
                  <CardDescription>Registro de nuevos clientes por período</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockClientStats.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{data.month}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="font-bold text-green-600">+{data.newClients}</p>
                          <p className="text-sm text-muted-foreground">Nuevos Clientes</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">{data.newClients * 15000}</p>
                          <p className="text-sm text-muted-foreground">Ingresos Potenciales</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="debts" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Deudas Acumuladas</CardTitle>
                  <CardDescription>Clientes con pagos pendientes y vencidos</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockDebts.map((debt) => (
                    <div key={debt.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{debt.clientName}</p>
                        <p className="text-sm text-muted-foreground">Vence: {debt.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">${debt.amount.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">Monto</p>
                        </div>
                        <Badge className={getDebtStatusColor(debt.status)}>
                          {debt.status === "overdue" ? `Vencido ${debt.daysOverdue}d` : "Pendiente"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="expenses" className="space-y-4">
            <Card className="border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-background to-muted">
                <div>
                  <CardTitle>Gastos Operativos</CardTitle>
                  <CardDescription>Registro de gastos del gimnasio (alquiler, servicios, equipos, etc.)</CardDescription>
                </div>
                <Button 
                  onClick={() => setShowExpenseForm(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all"
                >
                  <Plus className="mr-2 h-4 w-4" /> Registrar Gasto
                </Button>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {mockExpenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-100">
                          <Receipt className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium">{expense.description}</p>
                          <p className="text-sm text-muted-foreground">{expense.category} • {expense.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">-${expense.amount.toLocaleString()}</p>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          Pagado
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
        </Tabs>
      </motion.div>

      {/* Modal para registrar gastos */}
      <Dialog open={showExpenseForm} onOpenChange={setShowExpenseForm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Registrar Nuevo Gasto</DialogTitle>
            <DialogDescription>
              Agrega un gasto operativo del gimnasio
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 p-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Categoría</label>
                <Select value={expenseForm.category} onValueChange={(value) => setExpenseForm(prev => ({...prev, category: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {expenseCategories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Descripción</label>
                <Input
                  placeholder="Ej: Alquiler del local - Enero 2024"
                  value={expenseForm.description}
                  onChange={(e) => setExpenseForm(prev => ({...prev, description: e.target.value}))}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Monto</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={expenseForm.amount}
                  onChange={(e) => setExpenseForm(prev => ({...prev, amount: e.target.value}))}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Fecha</label>
                <Input
                  type="date"
                  value={expenseForm.date}
                  onChange={(e) => setExpenseForm(prev => ({...prev, date: e.target.value}))}
                />
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={() => {
                    setShowExpenseForm(false)
                    setExpenseForm({ category: "", description: "", amount: "", date: "" })
                  }}
                  variant="outline" 
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button 
                  onClick={() => {
                    // Aquí iría la lógica para guardar el gasto
                    console.log("Gasto registrado:", expenseForm)
                    setShowExpenseForm(false)
                    setExpenseForm({ category: "", description: "", amount: "", date: "" })
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  Registrar
                </Button>
              </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
