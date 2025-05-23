"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, CreditCard } from "lucide-react"
import { UserPaymentsTable } from "@/components/user/payments/user-payments-table"
import { UserSubscriptionCard } from "@/components/user/payments/user-subscription-card"
import { motion } from "framer-motion"

export default function UserPaymentsPage() {
  return (
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
            Mis Pagos
          </h1>
          <p className="text-muted-foreground mt-1">Gestiona tus pagos y suscripciones</p>
        </div>
        <Button 
          variant="outline" 
          className="border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
        >
          <CreditCard className="mr-2 h-4 w-4" /> Gestionar Métodos de Pago
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <UserSubscriptionCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Tabs defaultValue="history" className="space-y-4">
          <TabsList className="bg-primary/5">
            <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Historial de Pagos
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Próximos Pagos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                    <Search className="h-4 w-4" />
                  </div>
                  Historial de Pagos
                </CardTitle>
                <CardDescription>Visualiza todos tus pagos realizados</CardDescription>
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
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="sm:w-[120px] h-11 border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      <Filter className="mr-2 h-4 w-4" />
                      Filtrar
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-11 border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <UserPaymentsTable />
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50">
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-sm">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  Próximos Pagos
                </CardTitle>
                <CardDescription>Visualiza tus pagos programados</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="py-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Tu próximo pago será procesado automáticamente el 15/08/2023 por un importe de €29.99
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button 
                      variant="outline"
                      className="border-primary/20 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:border-primary/40 transition-all duration-300"
                    >
                      Cambiar método de pago
                    </Button>
                    <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      Pagar ahora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

