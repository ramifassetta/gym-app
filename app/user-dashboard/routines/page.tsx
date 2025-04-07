import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { UserRoutinesTable } from "@/components/user/routines/user-routines-table"

export default function UserRoutinesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Mis Rutinas</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todas mis Rutinas</CardTitle>
          <CardDescription>Visualiza todas las rutinas que te han sido asignadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar rutinas..." className="pl-8" />
            </div>
            <Button variant="outline" className="sm:w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </div>

          <UserRoutinesTable />
        </CardContent>
      </Card>
    </div>
  )
}

