import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Calendar, CheckCircle } from "lucide-react"

export function UserSubscriptionCard() {
  // Datos simulados de la suscripción actual
  const subscription = {
    name: "Plan Mensual",
    price: "€29.99",
    status: "active",
    nextPayment: "15/08/2023",
    paymentMethod: "Visa •••• 4242",
    features: [
      "Acceso a todas las rutinas personalizadas",
      "Comunicación directa con entrenadores",
      "Seguimiento de progreso",
      "3 sesiones presenciales al mes",
    ],
    startDate: "15/01/2023",
    autoRenew: true,
  }

  return (
    <Card className="col-span-3 md:col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Mi Suscripción</CardTitle>
            <CardDescription>Detalles de tu plan actual</CardDescription>
          </div>
          <Badge className="text-sm">{subscription.status === "active" ? "Activa" : "Inactiva"}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{subscription.name}</h3>
              <p className="text-2xl font-bold text-primary">
                {subscription.price}
                <span className="text-sm text-muted-foreground font-normal">/mes</span>
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>
                  Próximo pago: <span className="font-medium">{subscription.nextPayment}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span>
                  Método de pago: <span className="font-medium">{subscription.paymentMethod}</span>
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Cambiar Plan
              </Button>
              <Button variant="outline" className="w-full">
                Cambiar Método de Pago
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="font-medium mb-2">Tu plan incluye:</h4>
              <ul className="space-y-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Renovación automática</h4>
                  <p className="text-sm text-muted-foreground">
                    Tu suscripción se renovará automáticamente el {subscription.nextPayment}
                  </p>
                </div>
                <Badge variant={subscription.autoRenew ? "default" : "secondary"}>
                  {subscription.autoRenew ? "Activada" : "Desactivada"}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
          <Button variant="outline" className="sm:w-auto">
            Ver Historial de Pagos
          </Button>
          <Button variant="destructive">Cancelar Suscripción</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

