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
import { MoreHorizontal, FileText, Send } from "lucide-react"

export function PaymentsTable() {
  const payments = [
    {
      id: "INV-001",
      client: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      amount: "€29.99",
      status: "completed",
      date: "01/07/2023",
      method: "Tarjeta de crédito",
    },
    {
      id: "INV-002",
      client: "María García",
      avatar: "/placeholder-user.jpg",
      amount: "€29.99",
      status: "completed",
      date: "02/07/2023",
      method: "PayPal",
    },
    {
      id: "INV-003",
      client: "Carlos López",
      avatar: "/placeholder-user.jpg",
      amount: "€79.99",
      status: "pending",
      date: "03/07/2023",
      method: "Transferencia bancaria",
    },
    {
      id: "INV-004",
      client: "Ana Martínez",
      avatar: "/placeholder-user.jpg",
      amount: "€29.99",
      status: "completed",
      date: "05/07/2023",
      method: "Tarjeta de crédito",
    },
    {
      id: "INV-005",
      client: "Roberto Sánchez",
      avatar: "/placeholder-user.jpg",
      amount: "€49.99",
      status: "failed",
      date: "06/07/2023",
      method: "Tarjeta de crédito",
    },
  ]

  return (
    <div className="rounded-md border border-primary/10">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5 hover:bg-primary/5">
            <TableHead className="font-medium">ID</TableHead>
            <TableHead className="font-medium">Cliente</TableHead>
            <TableHead className="font-medium">Importe</TableHead>
            <TableHead className="font-medium">Estado</TableHead>
            <TableHead className="font-medium">Fecha</TableHead>
            <TableHead className="font-medium">Método</TableHead>
            <TableHead className="text-right font-medium">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow 
              key={payment.id}
              className="hover:bg-primary/5 transition-colors duration-200"
            >
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 border-2 border-primary/10">
                    <AvatarImage src={payment.avatar} alt={payment.client} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                      {payment.client.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{payment.client}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">{payment.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    payment.status === "completed"
                      ? "default"
                      : payment.status === "pending"
                        ? "secondary"
                        : "destructive"
                  }
                  className={
                    payment.status === "completed"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                      : payment.status === "pending"
                        ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary hover:bg-primary/20"
                        : "bg-gradient-to-r from-red-500 to-red-600"
                  }
                >
                  {payment.status === "completed"
                    ? "Completado"
                    : payment.status === "pending"
                      ? "Pendiente"
                      : "Fallido"}
                </Badge>
              </TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.method}</TableCell>
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
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Ver Factura</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
                      <Send className="mr-2 h-4 w-4" />
                      <span>Enviar Factura</span>
                    </DropdownMenuItem>
                    {payment.status === "pending" && (
                      <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
                        <Send className="mr-2 h-4 w-4" />
                        <span>Enviar Recordatorio</span>
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

