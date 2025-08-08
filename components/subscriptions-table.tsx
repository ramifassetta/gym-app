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
import { motion } from "framer-motion"
import { useState } from "react"
import { EditSubscriptionModal } from "./edit-subscription-modal"
import { CancelSubscriptionModal } from "./cancel-subscription-modal"

export function SubscriptionsTable() {
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

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

  const handleEditSubscription = (subscriptionId: number) => {
    const subscription = subscriptions.find(s => s.id === subscriptionId);
    if (subscription) {
      const subscriptionWithClient = {
        ...subscription,
        client: {
          name: subscription.client,
          email: `${subscription.client.toLowerCase().replace(' ', '.')}@email.com`,
          avatar: subscription.avatar
        }
      };
      setSelectedSubscription(subscriptionWithClient);
      setIsEditModalOpen(true);
    }
  }

  const handleCancelSubscription = (subscriptionId: number) => {
    const subscription = subscriptions.find(s => s.id === subscriptionId);
    if (subscription) {
      const subscriptionWithClient = {
        ...subscription,
        client: {
          name: subscription.client,
          email: `${subscription.client.toLowerCase().replace(' ', '.')}@email.com`,
          avatar: subscription.avatar
        }
      };
      setSelectedSubscription(subscriptionWithClient);
      setIsCancelModalOpen(true);
    }
  }

  const handleReactivateSubscription = (subscriptionId: number) => {
    console.log("Reactivar suscripción:", subscriptionId)
    // Aquí podrías implementar la lógica de reactivación
  }

  return (
    <>
      {/* Vista de tarjetas para móviles */}
      <div className="lg:hidden space-y-3">
        {subscriptions.map((subscription, index) => (
          <motion.div
            key={subscription.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-xl border border-primary/10 bg-gradient-to-br from-card to-card/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="h-8 w-8 border-2 border-primary/10">
                    <AvatarImage src={subscription.avatar} alt={subscription.client} />
                    <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                      {subscription.client.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-foreground">{subscription.client}</h3>
                    <p className="text-xs text-muted-foreground">{subscription.plan}</p>
                  </div>
                </div>
                <Badge 
                  variant={subscription.status === "active" ? "default" : "secondary"}
                  className={
                    subscription.status === "active"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                      : "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                  }
                >
                  {subscription.status === "active" ? "Activa" : "Inactiva"}
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
                    onClick={() => handleEditSubscription(subscription.id)}
                  >
                    <Edit className="mr-2 h-4 w-4 text-blue-500" />
                    <span>Editar Suscripción</span>
                  </DropdownMenuItem>
                  {subscription.status === "active" ? (
                    <DropdownMenuItem 
                      className="flex items-center cursor-pointer text-destructive hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-300"
                      onClick={() => handleCancelSubscription(subscription.id)}
                    >
                      <AlertCircle className="mr-2 h-4 w-4" />
                      <span>Cancelar Suscripción</span>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem 
                      className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      onClick={() => handleReactivateSubscription(subscription.id)}
                    >
                      <AlertCircle className="mr-2 h-4 w-4 text-emerald-500" />
                      <span>Reactivar Suscripción</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Importe:</span>
                <span className="text-sm font-medium">{subscription.amount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Próximo pago:</span>
                <span className="text-sm text-muted-foreground">{subscription.nextPayment}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Método:</span>
                <span className="text-sm text-muted-foreground">{subscription.method}</span>
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
                        : "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
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
                    <DropdownMenuContent align="end" className="w-[200px] bg-background/95 backdrop-blur-lg border-primary/20 shadow-xl">
                      <DropdownMenuLabel className="text-primary font-semibold">Acciones</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem 
                        className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                        onClick={() => handleEditSubscription(subscription.id)}
                      >
                        <Edit className="mr-2 h-4 w-4 text-blue-500" />
                        <span>Editar Suscripción</span>
                      </DropdownMenuItem>
                      {subscription.status === "active" ? (
                        <DropdownMenuItem 
                          className="flex items-center cursor-pointer text-destructive hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-300"
                          onClick={() => handleCancelSubscription(subscription.id)}
                        >
                          <AlertCircle className="mr-2 h-4 w-4" />
                          <span>Cancelar Suscripción</span>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem 
                          className="flex items-center cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                          onClick={() => handleReactivateSubscription(subscription.id)}
                        >
                          <AlertCircle className="mr-2 h-4 w-4 text-emerald-500" />
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

      {/* Modales */}
      <EditSubscriptionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        subscription={selectedSubscription}
        onSave={(updatedSubscription) => {
          console.log("Suscripción actualizada:", updatedSubscription);
          setIsEditModalOpen(false);
        }}
      />

      <CancelSubscriptionModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        subscription={selectedSubscription}
        onCancel={(subscriptionId) => {
          console.log("Cancelando suscripción:", subscriptionId);
          setIsCancelModalOpen(false);
        }}
      />
    </>
  )
}

