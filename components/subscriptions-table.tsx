import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Edit, AlertCircle } from "lucide-react"

export function SubscriptionsTable() {
  const subscriptions = [
    {
      id: 1,
      client: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      plan: "Plan Mensual",
      amount: "€29.99",
      status: "active",
      nextPayment: "01/08/2023",
      method: "Tarjeta de crédito",
    },
    {
      id: 2,
      client: "María García",
      avatar: "/placeholder-user.jpg",
      plan: "Plan Mensual",
      amount: "€29.99",
      status: "active",
      nextPayment: "02/08/2023",
      method: "PayPal",
    },
    {
      id: 3,
      client: "Carlos López",
      avatar: "/placeholder-user.jpg",
      plan: "Plan Trimestral",
      amount: "€79.99",
      status: "active",
      nextPayment: "03/09/2023",
      method: "Transferencia bancaria",
    },
    {
      id: 4,
      client: "Ana Martínez",
      avatar: "/placeholder-user.jpg",
      plan: "Plan Mensual",
      amount: "€29.99",
      status: "active",
      nextPayment: "05/08/2023",
      method: "Tarjeta de crédito",
    },
    {
      id: 5,
      client: "Roberto Sánchez",
      avatar: "/placeholder-user.jpg",
      plan: "Plan Semestral",
      amount: "€149.99",
      status: "inactive",
      nextPayment: "N/A",
      method: "Tarjeta de crédito",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Importe</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Próximo Pago</TableHead>
            <TableHead>Método</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={subscription.avatar} alt={subscription.client} />
                    <AvatarFallback>{subscription.client.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{subscription.client}</span>
                </div>
              </TableCell>
              <TableCell>{subscription.plan}</TableCell>
              <TableCell>{subscription.amount}</TableCell>
              <TableCell>
                <Badge variant={subscription.status === "active" ? "default" : "secondary"}>
                  {subscription.status === "active" ? "Activa" : "Inactiva"}
                </Badge>
              </TableCell>
              <TableCell>{subscription.nextPayment}</TableCell>
              <TableCell>{subscription.method}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Editar Suscripción</span>
                    </DropdownMenuItem>
                    {subscription.status === "active" ? (
                      <DropdownMenuItem className="flex items-center cursor-pointer text-destructive">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span>Cancelar Suscripción</span>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="flex items-center cursor-pointer">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span>Reactivar Suscripción</span>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

