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
    <div className="rounded-md border border-primary/10">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5 hover:bg-primary/5">
            <TableHead className="font-medium">Cliente</TableHead>
            <TableHead className="font-medium">Plan</TableHead>
            <TableHead className="font-medium">Importe</TableHead>
            <TableHead className="font-medium">Estado</TableHead>
            <TableHead className="font-medium">Próximo Pago</TableHead>
            <TableHead className="font-medium">Método</TableHead>
            <TableHead className="text-right font-medium">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow 
              key={subscription.id}
              className="hover:bg-primary/5 transition-colors duration-200"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 border-2 border-primary/10">
                    <AvatarImage src={subscription.avatar} alt={subscription.client} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                      {subscription.client.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{subscription.client}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">{subscription.plan}</TableCell>
              <TableCell className="font-medium">{subscription.amount}</TableCell>
              <TableCell>
                <Badge 
                  variant={subscription.status === "active" ? "default" : "secondary"}
                  className={
                    subscription.status === "active"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                      : "bg-gradient-to-r from-primary/10 to-primary/5 text-primary hover:bg-primary/20"
                  }
                >
                  {subscription.status === "active" ? "Activa" : "Inactiva"}
                </Badge>
              </TableCell>
              <TableCell>{subscription.nextPayment}</TableCell>
              <TableCell>{subscription.method}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Editar Suscripción</span>
                    </DropdownMenuItem>
                    {subscription.status === "active" ? (
                      <DropdownMenuItem className="flex items-center cursor-pointer text-destructive hover:bg-destructive/10">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span>Cancelar Suscripción</span>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
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

