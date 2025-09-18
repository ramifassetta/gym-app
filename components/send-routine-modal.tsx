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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  X,
  Send,
  User,
  MessageSquare,
  Calendar,
  Clock,
  Dumbbell,
  Loader2,
  CheckCircle
} from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface Routine {
  id: number;
  name: string;
  client: string;
  exercises: number;
  duration: number;
}

interface SendRoutineModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  routine: Routine | null;
  onSend: (data: {
    routineId: number;
    clientId: number;
    message: string;
    sendEmail: boolean;
    sendSMS: boolean;
    scheduledDate?: string;
  }) => void;
}

export function SendRoutineModal({
  open,
  onOpenChange,
  routine,
  onSend
}: SendRoutineModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [sendEmail, setSendEmail] = useState(true);
  const [sendSMS, setSendSMS] = useState(false);
  const [scheduledDate, setScheduledDate] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  // Datos de ejemplo
  const clients: Client[] = [
    { id: 1, name: "Juan Pérez", email: "juan@email.com", phone: "+1234567890" },
    { id: 2, name: "María García", email: "maria@email.com", phone: "+1234567891" },
    { id: 3, name: "Carlos López", email: "carlos@email.com", phone: "+1234567892" },
    { id: 4, name: "Ana Martínez", email: "ana@email.com", phone: "+1234567893" },
  ];

  const selectedClientData = clients.find(c => c.id === selectedClient);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClient || !routine) return;

    setIsLoading(true);
    
    // Simular envío
    setTimeout(() => {
      onSend({
        routineId: routine.id,
        clientId: selectedClient,
        message,
        sendEmail,
        sendSMS,
        scheduledDate: isScheduled ? scheduledDate : undefined
      });
      setIsLoading(false);
      onOpenChange(false);
    }, 2000);
  };


  return (
    <AnimatePresence>
      {open && routine ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="max-w-2xl h-[85vh] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent">
                Enviar Rutina al Cliente
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto pr-2">
              {/* Información de la rutina */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Rutina a Enviar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">{routine.name}</h4>
                      <p className="text-sm text-muted-foreground">Cliente: {routine.client}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{routine.duration} min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dumbbell className="h-4 w-4 text-muted-foreground" />
                        <span>{routine.exercises} ejercicios</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Selección de cliente */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Seleccionar Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Select value={selectedClient?.toString()} onValueChange={(value) => setSelectedClient(parseInt(value))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id.toString()}>
                            <div className="flex items-center gap-2">
                              <span>{client.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedClientData && (
                      <div className="p-3 rounded-lg bg-muted/20 border border-muted/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{selectedClientData.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Email: {selectedClientData.email}</p>
                          {selectedClientData.phone && (
                            <p>Teléfono: {selectedClientData.phone}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Mensaje personalizado */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Mensaje Personalizado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hola! Te he preparado una nueva rutina personalizada para ti..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Opciones de envío */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Opciones de Envío</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sendEmail"
                        checked={sendEmail}
                        onCheckedChange={(checked) => setSendEmail(checked as boolean)}
                      />
                      <Label htmlFor="sendEmail">Enviar por email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sendSMS"
                        checked={sendSMS}
                        onCheckedChange={(checked) => setSendSMS(checked as boolean)}
                      />
                      <Label htmlFor="sendSMS">Enviar por SMS</Label>
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
                  disabled={isLoading || !selectedClient}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Rutina
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

