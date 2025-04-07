import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Calendar, Plus } from "lucide-react"
import Link from "next/link"
import { ClientsList } from "@/components/clients-list"
import { RoutinesList } from "@/components/routines-list"
import { StatsCards } from "@/components/stats-cards"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/routines/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nueva Rutina
            </Button>
          </Link>
        </div>
      </div>

      <StatsCards />

      <Tabs defaultValue="clients" className="space-y-4">
        <TabsList>
          <TabsTrigger value="clients">
            <Users className="mr-2 h-4 w-4" />
            Clientes
          </TabsTrigger>
          <TabsTrigger value="routines">
            <Activity className="mr-2 h-4 w-4" />
            Rutinas
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="mr-2 h-4 w-4" />
            Calendario
          </TabsTrigger>
        </TabsList>
        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Mis Clientes</CardTitle>
                <CardDescription>Gestiona tus clientes y sus perfiles</CardDescription>
              </div>
              <Link href="/dashboard/clients">
                <Button variant="outline">Ver Todos</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <ClientsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="routines" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Rutinas Recientes</CardTitle>
                <CardDescription>Rutinas creadas o modificadas recientemente</CardDescription>
              </div>
              <Link href="/dashboard/routines">
                <Button variant="outline">Ver Todas</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <RoutinesList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Sesiones</CardTitle>
              <CardDescription>Programa y visualiza tus sesiones con clientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md bg-muted/50">
                <p className="text-muted-foreground">El calendario se mostrará aquí</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

