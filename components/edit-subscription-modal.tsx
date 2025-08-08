"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X,
  Save,
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

interface EditSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: Subscription | null;
  onSave: (subscription: Subscription) => void;
}

export function EditSubscriptionModal({
  isOpen,
  onClose,
  subscription,
  onSave
}: EditSubscriptionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Subscription | null>(subscription);

  React.useEffect(() => {
    setFormData(subscription);
  }, [subscription]);

  if (!formData) return null;

  const handleInputChange = (field: keyof Subscription, value: any) => {
    setFormData(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular guardado
    setTimeout(() => {
      onSave(formData);
      setIsLoading(false);
      onClose();
    }, 1000);
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
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-2xl">
            <DialogHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-8 w-8"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent pr-8">
                Editar Suscripción
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información del cliente */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Información del Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage src={formData.client.avatar} alt={formData.client.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                        {formData.client.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{formData.client.name}</h4>
                      <p className="text-sm text-muted-foreground">{formData.client.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Configuración de la suscripción */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Configuración de la Suscripción
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="plan">Plan</Label>
                      <Select value={formData.plan} onValueChange={(value) => handleInputChange('plan', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Plan Mensual">Plan Mensual</SelectItem>
                          <SelectItem value="Plan Trimestral">Plan Trimestral</SelectItem>
                          <SelectItem value="Plan Semestral">Plan Semestral</SelectItem>
                          <SelectItem value="Plan Anual">Plan Anual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Importe</Label>
                      <Input
                        id="amount"
                        value={formData.amount}
                        onChange={(e) => handleInputChange('amount', e.target.value)}
                        placeholder="€29.99"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status">Estado</Label>
                      <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Activa</SelectItem>
                          <SelectItem value="inactive">Inactiva</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="method">Método de pago</Label>
                      <Select value={formData.method} onValueChange={(value) => handleInputChange('method', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Tarjeta de crédito">Tarjeta de crédito</SelectItem>
                          <SelectItem value="PayPal">PayPal</SelectItem>
                          <SelectItem value="Transferencia bancaria">Transferencia bancaria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nextPayment">Próximo pago</Label>
                    <Input
                      id="nextPayment"
                      type="date"
                      value={formData.nextPayment !== 'N/A' ? formData.nextPayment : ''}
                      onChange={(e) => handleInputChange('nextPayment', e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Estado actual */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Estado Actual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusVariant(formData.status)}>
                      {formData.status === "active" ? "Activa" : "Inactiva"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formData.status === "active" 
                        ? "La suscripción está activa y funcionando correctamente"
                        : "La suscripción está pausada o cancelada"
                      }
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-gym hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Guardar Cambios
                    </>
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

