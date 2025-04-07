import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter } from "lucide-react"
import Link from "next/link"
import { ClientsTable } from "@/components/clients-table"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Clientes</h1>
        <Link href="/dashboard/clients/add">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nuevo Cliente
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Todos los Clientes</CardTitle>
          <CardDescription>Gestiona los perfiles de tus clientes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar clientes..." className="pl-8" />
            </div>
            <Button variant="outline" className="sm:w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
          </div>

          <ClientsTable />
        </CardContent>
      </Card>
    </div>
  )
}

