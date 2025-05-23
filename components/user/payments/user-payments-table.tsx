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
    <div className="rounded-md border border-primary/10">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5 hover:bg-primary/5">
            <TableHead className="font-medium">ID</TableHead>
            <TableHead className="font-medium">Descripción</TableHead>
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
              <TableCell>{payment.description}</TableCell>
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
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Ver Factura</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-primary/5">
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

