import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, CreditCard } from "lucide-react"
import { UserPaymentsTable } from "@/components/user/payments/user-payments-table"
import { UserSubscriptionCard } from "@/components/user/payments/user-subscription-card"

export default function UserPaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Mis Pagos</h1>
        <Button variant="outline">
          <CreditCard className="mr-2 h-4 w-4" /> Gestionar Métodos de Pago
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UserSubscriptionCard />
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Historial de Pagos</TabsTrigger>
          <TabsTrigger value="upcoming">Próximos Pagos</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Pagos</CardTitle>
              <CardDescription>Visualiza todos tus pagos realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar pagos..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="sm:w-[120px]">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </div>

              <UserPaymentsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Pagos</CardTitle>
              <CardDescription>Visualiza tus pagos programados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="py-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Tu próximo pago será procesado automáticamente el 15/08/2023 por un importe de €29.99
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Cambiar método de pago</Button>
                  <Button>Pagar ahora</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

