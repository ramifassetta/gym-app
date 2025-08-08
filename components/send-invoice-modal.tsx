"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X,
  Send,
  Mail,
  FileText,
  Calendar,
  User,
  Loader2,
  CheckCircle
} from "lucide-react";

interface Invoice {
  id: string;
  client: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: string;
  status: string;
  date: string;
  method: string;
  invoiceNumber: string;
}

interface SendInvoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice | null;
  onSend: (data: {
    invoiceId: string;
    email: string;
    subject: string;
    message: string;
    sendCopy: boolean;
    scheduledDate?: string;
  }) => void;
}

export function SendInvoiceModal({
  open,
  onOpenChange,
  invoice,
  onSend
}: SendInvoiceModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  React.useEffect(() => {
    if (invoice) {
      setEmail(invoice.client.email);
      setSubject(`Factura #${invoice.invoiceNumber} - GymRoutine Pro`);
      setMessage(`Hola ${invoice.client.name},

Adjunto la factura #${invoice.invoiceNumber} por un importe de ${invoice.amount}.

Detalles de la factura:
- Fecha: ${invoice.date}
- Estado: ${invoice.status === 'completed' ? 'Completado' : invoice.status === 'pending' ? 'Pendiente' : 'Fallido'}
- Método de pago: ${invoice.method}

Si tienes alguna pregunta, no dudes en contactarnos.

Saludos,
El equipo de GymRoutine Pro`);
    }
  }, [invoice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invoice) return;

    setIsLoading(true);
    
    // Simular envío
    setTimeout(() => {
      onSend({
        invoiceId: invoice.id,
        email,
        subject,
        message,
        sendCopy,
        scheduledDate: isScheduled ? scheduledDate : undefined
      });
      setIsLoading(false);
      onOpenChange(false);
    }, 2000);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "pending":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      case "failed":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      default:
        return "default"
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado"
      case "pending":
        return "Pendiente"
      case "failed":
        return "Fallido"
      default:
        return status
    }
  };

  return (
    <AnimatePresence>
      {open && invoice ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="max-w-2xl h-[85vh] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent">
                Enviar Factura
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto pr-2">
              {/* Información de la factura */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Factura a Enviar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-primary/10">
                        <AvatarImage src={invoice.client.avatar} alt={invoice.client.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/5">
                          {invoice.client.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{invoice.client.name}</h4>
                        <p className="text-sm text-muted-foreground">#{invoice.invoiceNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{invoice.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{invoice.amount}</span>
                      </div>
                      <Badge className={getStatusVariant(invoice.status)}>
                        {getStatusText(invoice.status)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Configuración del email */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Configuración del Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email del destinatario</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cliente@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Asunto del email"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mensaje personalizado..."
                      rows={6}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Opciones adicionales */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Opciones Adicionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sendCopy"
                        checked={sendCopy}
                        onCheckedChange={(checked) => setSendCopy(checked as boolean)}
                      />
                      <Label htmlFor="sendCopy">Enviar copia a mi email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="scheduled"
                        checked={isScheduled}
                        onCheckedChange={(checked) => setIsScheduled(checked as boolean)}
                      />
                      <Label htmlFor="scheduled">Programar envío</Label>
                    </div>
                    
                    {isScheduled && (
                      <div className="space-y-2">
                        <Label htmlFor="scheduledDate">Fecha y hora de envío</Label>
                        <Input
                          id="scheduledDate"
                          type="datetime-local"
                          value={scheduledDate}
                          onChange={(e) => setScheduledDate(e.target.value)}
                          required={isScheduled}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Factura
                    </>
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}

