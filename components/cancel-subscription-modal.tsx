"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X,
  AlertTriangle,
  User,
  Calendar,
  CreditCard,
  Loader2
} from "lucide-react";

interface Subscription {
  id: number;
  client: {
    name: string;
    email: string;
    avatar: string;
  };
  plan: string;
  amount: string;
  status: string;
  nextPayment: string;
  method: string;
}

interface CancelSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: Subscription | null;
  onCancel: (subscriptionId: number) => void;
}

export function CancelSubscriptionModal({
  isOpen,
  onClose,
  subscription,
  onCancel
}: CancelSubscriptionModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = async () => {
    if (!subscription) return;
    
    setIsLoading(true);
    
    // Simular cancelación
    setTimeout(() => {
      onCancel(subscription.id);
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "inactive":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      default:
        return "default"
    }
  };

  return (
    <AnimatePresence>
      {isOpen && subscription && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-md">
            <DialogHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-8 w-8"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-xl font-bold text-destructive pr-8">
                Cancelar Suscripción
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Advertencia */}
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive/10">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-destructive">¿Estás seguro?</h4>
                      <p className="text-sm text-muted-foreground">
                        Esta acción cancelará la suscripción
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    El cliente perderá acceso a los servicios de GymRoutine Pro al final del período actual.
                  </p>
                </CardContent>
              </Card>

              {/* Información de la suscripción */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Suscripción a Cancelar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarImage src={subscription.client.avatar} alt={subscription.client.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                          {subscription.client.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{subscription.client.name}</h4>
                        <p className="text-sm text-muted-foreground">{subscription.client.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{subscription.plan}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{subscription.amount}</span>
                      </div>
                      <Badge className={getStatusVariant(subscription.status)}>
                        {subscription.status === "active" ? "Activa" : "Inactiva"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CreditCard className="h-4 w-4" />
                      <span>Próximo pago: {subscription.nextPayment}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Cancelando...
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Cancelar Suscripción
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

