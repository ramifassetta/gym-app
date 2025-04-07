import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, FileText, Download } from "lucide-react"

export function UserPaymentsTable() {
  const payments = [
    {
      id: "INV-001",
      description: "Suscripción Mensual",
      amount: "€29.99",
      status: "completed",
      date: "15/07/2023",
      method: "Tarjeta de crédito •••• 4242",
    },
    {
      id: "INV-002",
      description: "Suscripción Mensual",
      amount: "€29.99",
      status: "completed",
      date: "15/06/2023",
      method: "Tarjeta de crédito •••• 4242",
    },
    {
      id: "INV-003",
      description: "Sesión Personal Adicional",
      amount: "€45.00",
      status: "completed",
      date: "10/06/2023",
      method: "PayPal",
    },
    {
      id: "INV-004",
      description: "Suscripción Mensual",
      amount: "€29.99",
      status: "completed",
      date: "15/05/2023",
      method: "Tarjeta de crédito •••• 4242",
    },
    {
      id: "INV-005",
      description: "Evaluación Nutricional",
      amount: "€60.00",
      status: "completed",
      date: "05/05/2023",
      method: "Transferencia bancaria",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Importe</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Método</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>{payment.description}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    payment.status === "completed"
                      ? "default"
                      : payment.status === "pending"
                        ? "secondary"
                        : "destructive"
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
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Ver Factura</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Descargar Factura</span>
                    </DropdownMenuItem>
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

