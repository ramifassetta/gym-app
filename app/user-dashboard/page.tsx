import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"
import { UserStatsCards } from "@/components/user/dashboard/user-stats-cards"
import { UserRoutinesList } from "@/components/user/dashboard/user-routines-list"
import { UserUpcomingSessions } from "@/components/user/dashboard/user-upcoming-sessions"

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Mi Panel</h1>
      </div>

      <UserStatsCards />

      <Tabs defaultValue="routines" className="space-y-4">
        <TabsList>
          <TabsTrigger value="routines">
            <Activity className="mr-2 h-4 w-4" />
            Mis Rutinas
          </TabsTrigger>
          <TabsTrigger value="sessions">
            <Calendar className="mr-2 h-4 w-4" />
            Próximas Sesiones
          </TabsTrigger>
          <TabsTrigger value="messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensajes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="routines" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Mis Rutinas Activas</CardTitle>
                <CardDescription>Rutinas asignadas por tu gimnasio</CardDescription>
              </div>
              <Link href="/user-dashboard/routines">
                <Button variant="outline">Ver Todas</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <UserRoutinesList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Próximas Sesiones</CardTitle>
                <CardDescription>Sesiones programadas con tus entrenadores</CardDescription>
              </div>
              <Link href="/user-dashboard/calendar">
                <Button variant="outline">Ver Calendario</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <UserUpcomingSessions />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mensajes Recientes</CardTitle>
              <CardDescription>Comunicación con tu gimnasio y entrenadores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No tienes mensajes recientes</p>
                <Link href="/user-dashboard/messages">
                  <Button variant="outline" className="mt-4">
                    Ir a Mensajes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

