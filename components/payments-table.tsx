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
import { motion } from "framer-motion"
import { useState } from "react"
import { ViewInvoiceModal } from "./view-invoice-modal"
import { SendInvoiceModal } from "./send-invoice-modal"
import { CompactFilterDropdown } from "./filter-dropdown"

export function PaymentsTable() {
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [isViewInvoiceModalOpen, setIsViewInvoiceModalOpen] = useState(false);
  const [isSendInvoiceModalOpen, setIsSendInvoiceModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    method: ""
  });

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

  const handleViewInvoice = (paymentId: string) => {
    const payment = payments.find(p => p.id === paymentId);
    if (payment) {
      // Crear objeto de factura con datos de ejemplo
      const invoice = {
        id: payment.id,
        client: {
          name: payment.client,
          email: `${payment.client.toLowerCase().replace(' ', '.')}@email.com`,
          avatar: payment.avatar
        },
        amount: payment.amount,
        status: payment.status,
        date: payment.date,
        method: payment.method,
        invoiceNumber: payment.id,
        items: [
          { id: 1, description: "Suscripción GymRoutine Pro", quantity: 1, unitPrice: 29.99, total: 29.99 },
          { id: 2, description: "Servicios adicionales", quantity: 1, unitPrice: 10.00, total: 10.00 }
        ],
        subtotal: 39.99,
        tax: 8.40,
        total: 48.39,
        dueDate: payment.date
      };
      setSelectedPayment(invoice);
      setIsViewInvoiceModalOpen(true);
    }
  }

  const handleSendInvoice = (paymentId: string) => {
    const payment = payments.find(p => p.id === paymentId);
    if (payment) {
      const invoice = {
        id: payment.id,
        client: {
          name: payment.client,
          email: `${payment.client.toLowerCase().replace(' ', '.')}@email.com`,
          avatar: payment.avatar
        },
        amount: payment.amount,
        status: payment.status,
        date: payment.date,
        method: payment.method,
        invoiceNumber: payment.id
      };
      setSelectedPayment(invoice);
      setIsSendInvoiceModalOpen(true);
    }
  }

  const handleSendReminder = (paymentId: string) => {
    console.log("Enviar recordatorio:", paymentId)
    // Aquí podrías implementar la lógica de recordatorio
  }

  // Opciones de filtros
  const filterGroups = [
    {
      title: "Estado",
      key: "status",
      options: [
        { value: "completed", label: "Completados", count: payments.filter(p => p.status === "completed").length },
        { value: "pending", label: "Pendientes", count: payments.filter(p => p.status === "pending").length },
        { value: "failed", label: "Fallidos", count: payments.filter(p => p.status === "failed").length },
      ]
    },
    {
      title: "Método",
      key: "method",
      options: [
        { value: "Tarjeta de crédito", label: "Tarjeta de crédito", count: payments.filter(p => p.method === "Tarjeta de crédito").length },
        { value: "PayPal", label: "PayPal", count: payments.filter(p => p.method === "PayPal").length },
        { value: "Transferencia bancaria", label: "Transferencia bancaria", count: payments.filter(p => p.method === "Transferencia bancaria").length },
      ]
    }
  ]

  // Filtrar pagos
  const filteredPayments = payments.filter(payment => {
    const statusMatch = !filters.status || payment.status === filters.status
    const methodMatch = !filters.method || payment.method === filters.method
    return statusMatch && methodMatch
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearAllFilters = () => {
    setFilters({
      status: "",
      method: ""
    })
  }

  return (
    <>


      {/* Vista de tarjetas para móviles */}
      <div className="lg:hidden space-y-3">
        {filteredPayments.map((payment, index) => (
          <motion.div
            key={payment.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-xl border border-primary/10 bg-gradient-to-br from-card to-card/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="h-8 w-8 border-2 border-primary/10">
                    <AvatarImage src={payment.avatar} alt={payment.client} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                      {payment.client.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">{payment.client}</h3>
                    <p className="text-xs text-muted-foreground">ID: {payment.id}</p>
                  </div>
                </div>
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
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                        : "bg-gradient-to-r from-red-500 to-red-600"
                  }
                >
                  {payment.status === "completed"
                    ? "Completado"
                    : payment.status === "pending"
                      ? "Pendiente"
                      : "Fallido"}
                </Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:scale-105 transition-all duration-300"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl"
                >
                  <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary/20" />
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                    onClick={() => handleViewInvoice(payment.id)}
                  >
                    <FileText className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Ver Factura</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                    onClick={() => handleSendInvoice(payment.id)}
                  >
                    <Send className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Enviar Factura</span>
                  </DropdownMenuItem>
                  {payment.status === "pending" && (
                    <DropdownMenuItem 
                      className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      onClick={() => handleSendReminder(payment.id)}
                    >
                      <Send className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Enviar Recordatorio</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Importe:</span>
                <span className="text-sm font-medium">{payment.amount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Fecha:</span>
                <span className="text-sm text-muted-foreground">{payment.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Método:</span>
                <span className="text-sm text-muted-foreground">{payment.method}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vista de tabla para desktop */}
      <div className="hidden lg:block rounded-md border border-primary/10">
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
            {filteredPayments.map((payment) => (
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
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
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
                    <DropdownMenuContent align="end" className="w-[200px] bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl">
                      <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                        onClick={() => handleViewInvoice(payment.id)}
                      >
                        <FileText className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Ver Factura</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                        onClick={() => handleSendInvoice(payment.id)}
                      >
                        <Send className="mr-2 h-4 w-4 text-emerald-500" />
                        <span>Enviar Factura</span>
                      </DropdownMenuItem>
                      {payment.status === "pending" && (
                        <DropdownMenuItem 
                          className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                          onClick={() => handleSendReminder(payment.id)}
                        >
                          <Send className="mr-2 h-4 w-4 text-amber-500" />
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

      {/* Modales */}
      <ViewInvoiceModal
        open={isViewInvoiceModalOpen}
        onOpenChange={(open) => setIsViewInvoiceModalOpen(open)}
        invoice={selectedPayment}
        onDownload={(invoiceId) => {
          console.log("Descargando factura:", invoiceId);
          setIsViewInvoiceModalOpen(false);
        }}
        onPrint={(invoiceId) => {
          console.log("Imprimiendo factura:", invoiceId);
          setIsViewInvoiceModalOpen(false);
        }}
        onSend={(invoiceId) => {
          console.log("Enviando factura:", invoiceId);
          setIsViewInvoiceModalOpen(false);
        }}
      />

      <SendInvoiceModal
        open={isSendInvoiceModalOpen}
        onOpenChange={(open) => setIsSendInvoiceModalOpen(open)}
        invoice={selectedPayment}
        onSend={(data) => {
          console.log("Enviando factura:", data);
          setIsSendInvoiceModalOpen(false);
        }}
      />
    </>
  )
}

