"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  X,
  Calendar,
  Clock,
  User,
  AlertTriangle,
  MessageSquare,
  Loader2,
  Ban
} from "lucide-react";

interface Session {
  id: string;
  title: string;
  client: {
    id: number;
    name: string;
    email: string;
    phone?: string;
    avatar: string;
  };
  date: string;
  time: string;
  duration: number;
  type: string;
  status: string;
  location?: string;
}

interface CancelSessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  session: Session | null;
  onCancel: (data: {
    sessionId: string;
    reason: string;
    message: string;
    notifyClient: boolean;
    reschedule: boolean;
    newDate?: string;
    newTime?: string;
  }) => void;
}

export function CancelSessionModal({
  open,
  onOpenChange,
  session,
  onCancel
}: CancelSessionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [notifyClient, setNotifyClient] = useState(true);
  const [reschedule, setReschedule] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  React.useEffect(() => {
    if (session) {
      setMessage(`Hola ${session.client.name},

Lamentamos informarte que hemos tenido que cancelar tu sesión programada para el ${session.date} a las ${session.time}.

${reason ? `Motivo: ${reason}` : ''}

Te contactaremos pronto para reprogramar la sesión.

Disculpa las molestias.
El equipo de Optifit`);
    }
  }, [session, reason]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setIsLoading(true);
    
    // Simular cancelación
    setTimeout(() => {
      onCancel({
        sessionId: session.id,
        reason,
        message,
        notifyClient,
        reschedule,
        newDate: reschedule ? newDate : undefined,
        newTime: reschedule ? newTime : undefined
      });
      setIsLoading(false);
      onOpenChange(false);
      // Resetear estado
      setReason('');
      setMessage('');
      setNotifyClient(true);
      setReschedule(false);
      setNewDate('');
      setNewTime('');
    }, 2000);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "pending":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      case "cancelled":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      default:
        return "default"
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada"
      case "pending":
        return "Pendiente"
      case "cancelled":
        return "Cancelada"
      default:
        return status
    }
  };

  if (!session) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <Ban className="h-6 w-6" />
            Cancelar Sesión
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto pr-2">
          {/* Información de la sesión */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Calendar className="h-5 w-5" />
                Sesión a Cancelar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-red-200">
                    <AvatarImage src={session.client.avatar} alt={session.client.name} />
                    <AvatarFallback className="bg-red-100 text-red-700">
                      {session.client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{session.client.name}</h4>
                    <p className="text-sm text-muted-foreground">{session.client.email}</p>
                    {session.client.phone && (
                      <p className="text-sm text-muted-foreground">{session.client.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{session.time} ({session.duration} min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Tipo: {session.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusVariant(session.status)}>
                      {getStatusText(session.status)}
                    </Badge>
                  </div>
                  {session.location && (
                    <div className="flex items-center gap-2 col-span-2">
                      <span>📍 {session.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Motivo de cancelación */}
          <Card>
            <CardHeader>
              <CardTitle>Motivo de Cancelación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reason">Motivo</Label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergencia personal</SelectItem>
                    <SelectItem value="sick">Enfermedad</SelectItem>
                    <SelectItem value="travel">Viaje de trabajo</SelectItem>
                    <SelectItem value="facility">Problema en las instalaciones</SelectItem>
                    <SelectItem value="weather">Condiciones climáticas</SelectItem>
                    <SelectItem value="client_request">Solicitud del cliente</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje al cliente</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mensaje personalizado para el cliente..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Opciones de cancelación */}
          <Card>
            <CardHeader>
              <CardTitle>Opciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notifyClient"
                  checked={notifyClient}
                  onCheckedChange={(checked) => setNotifyClient(checked as boolean)}
                />
                <Label htmlFor="notifyClient" className="text-sm">
                  Notificar al cliente sobre la cancelación
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="reschedule"
                  checked={reschedule}
                  onCheckedChange={(checked) => setReschedule(checked as boolean)}
                />
                <Label htmlFor="reschedule" className="text-sm">
                  Ofrecer reprogramación inmediata
                </Label>
              </div>
              
              {reschedule && (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="newDate">Nueva fecha</Label>
                    <Input
                      id="newDate"
                      type="date"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newTime">Nueva hora</Label>
                    <Input
                      id="newTime"
                      type="time"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Advertencia */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">Confirmación</h4>
                  <p className="text-sm text-orange-700">
                    Esta acción cancelará la sesión y actualizará el estado en el calendario. 
                    Si seleccionaste notificar al cliente, se enviará un mensaje automáticamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isLoading}
            >
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="destructive"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Cancelando...
                </>
              ) : (
                <>
                  <Ban className="h-4 w-4 mr-2" />
                  Cancelar Sesión
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
