import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus } from "lucide-react"
import { PaymentsTable } from "@/components/payments-table"
import { SubscriptionsTable } from "@/components/subscriptions-table"
import { PaymentStats } from "@/components/payment-stats"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Pagos y Suscripciones</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Exportar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Registrar Pago
          </Button>
        </div>
      </div>

      <PaymentStats />

      <Tabs defaultValue="payments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payments">Pagos</TabsTrigger>
          <TabsTrigger value="subscriptions">Suscripciones</TabsTrigger>
        </TabsList>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Pagos</CardTitle>
              <CardDescription>Visualiza y gestiona todos los pagos recibidos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar pagos..." className="pl-8" />
                </div>
                <Button variant="outline" className="sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
              </div>

              <PaymentsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suscripciones Activas</CardTitle>
              <CardDescription>Gestiona las suscripciones de tus clientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar suscripciones..." className="pl-8" />
                </div>
                <Button variant="outline" className="sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
              </div>

              <SubscriptionsTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

