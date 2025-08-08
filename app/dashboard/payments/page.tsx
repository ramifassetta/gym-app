"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus } from "lucide-react"
import { CompactFilterDropdown } from "@/components/filter-dropdown"
import { PaymentsTable } from "@/components/payments-table"
import { SubscriptionsTable } from "@/components/subscriptions-table"
import { PaymentStats } from "@/components/payment-stats"
import { RegisterPaymentModal } from "@/components/register-payment-modal"
import { motion } from "framer-motion"

export default function PaymentsPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [filters, setFilters] = useState({
    status: "",
    method: ""
  })

  const handlePaymentRegistered = () => {
    console.log("Pago registrado exitosamente")
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Estado",
      key: "status",
      options: [
        { value: "completed", label: "Completados", count: 3 },
        { value: "pending", label: "Pendientes", count: 1 },
        { value: "failed", label: "Fallidos", count: 1 },
      ]
    },
    {
      title: "Método",
      key: "method",
      options: [
        { value: "Tarjeta de crédito", label: "Tarjeta de crédito", count: 3 },
        { value: "PayPal", label: "PayPal", count: 1 },
        { value: "Transferencia bancaria", label: "Transferencia bancaria", count: 1 },
      ]
    }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearAllFilters = () => {
    setFilters({
      status: "",
      method: ""
    })
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Pagos y Suscripciones
            </h1>
            <p className="text-muted-foreground mt-1">Gestiona los pagos y suscripciones de tus clientes</p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
            <Button 
              onClick={() => setIsRegisterModalOpen(true)}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Plus className="mr-2 h-4 w-4" /> Registrar Pago
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <PaymentStats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Tabs defaultValue="payments" className="space-y-4">
            <TabsList className="bg-primary/5">
              <TabsTrigger value="payments" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Pagos
              </TabsTrigger>
              <TabsTrigger value="subscriptions" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Suscripciones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="payments" className="space-y-4">
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                      <Search className="h-4 w-4" />
                    </div>
                    Historial de Pagos
                  </CardTitle>
                  <CardDescription>Visualiza y gestiona todos los pagos recibidos</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-6"
                  >
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="search" 
                        placeholder="Buscar pagos..." 
                        className="pl-10 h-11 bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                      />
                    </div>
                    <CompactFilterDropdown
                      filterGroups={filterGroups}
                      selectedFilters={filters}
                      onFilterChange={handleFilterChange}
                      onClearAll={handleClearAllFilters}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <PaymentsTable />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="subscriptions" className="space-y-4">
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                      <Search className="h-4 w-4" />
                    </div>
                    Suscripciones Activas
                  </CardTitle>
                  <CardDescription>Gestiona las suscripciones de tus clientes</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 mb-6"
                  >
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="search" 
                        placeholder="Buscar suscripciones..." 
                        className="pl-10 h-11 bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                      />
                    </div>
                    <CompactFilterDropdown
                      filterGroups={filterGroups}
                      selectedFilters={filters}
                      onFilterChange={handleFilterChange}
                      onClearAll={handleClearAllFilters}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <SubscriptionsTable />
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>

      <RegisterPaymentModal 
        open={isRegisterModalOpen}
        onOpenChange={setIsRegisterModalOpen}
        onPaymentRegistered={handlePaymentRegistered}
      />
    </>
  )
}

