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
  Bell,
  Calendar,
  Clock,
  User,
  MessageSquare,
  Send,
  Loader2,
  X
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

interface SendReminderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  session: Session | null;
  onSend: (data: {
    sessionId: string;
    reminderType: string;
    message: string;
    sendEmail: boolean;
    sendSMS: boolean;
    sendPush: boolean;
    scheduledTime?: string;
  }) => void;
}

export function SendReminderModal({
  open,
  onOpenChange,
  session,
  onSend
}: SendReminderModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [reminderType, setReminderType] = useState('session');
  const [message, setMessage] = useState('');
  const [sendEmail, setSendEmail] = useState(true);
  const [sendSMS, setSendSMS] = useState(false);
  const [sendPush, setSendPush] = useState(true);
  const [scheduledTime, setScheduledTime] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  React.useEffect(() => {
    if (session) {
      setMessage(`Hola ${session.client.name},

Te recordamos que tienes una sesión programada:

📅 Fecha: ${session.date}
⏰ Hora: ${session.time}
⏱️ Duración: ${session.duration} minutos
🏋️ Tipo: ${session.type}
${session.location ? `📍 Ubicación: ${session.location}` : ''}

Por favor, confirma tu asistencia respondiendo a este mensaje.

¡Nos vemos pronto!
El equipo de Optifit`);
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setIsLoading(true);
    
    // Simular envío
    setTimeout(() => {
      onSend({
        sessionId: session.id,
        reminderType,
        message,
        sendEmail,
        sendSMS,
        sendPush,
        scheduledTime: isScheduled ? scheduledTime : undefined
      });
      setIsLoading(false);
      onOpenChange(false);
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
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Bell className="h-6 w-6" />
            Enviar Recordatorio
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto pr-2">
          {/* Información de la sesión */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Sesión Programada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={session.client.avatar} alt={session.client.name} />
                    <AvatarFallback>
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

          {/* Configuración del recordatorio */}
          <Card>
            <CardHeader>
              <CardTitle>Tipo de Recordatorio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reminderType">Tipo</Label>
                <Select value={reminderType} onValueChange={setReminderType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="session">Recordatorio de sesión</SelectItem>
                    <SelectItem value="preparation">Preparación para la sesión</SelectItem>
                    <SelectItem value="confirmation">Solicitud de confirmación</SelectItem>
                    <SelectItem value="reminder">Recordatorio general</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje personalizado</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje personalizado..."
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>

          {/* Canales de envío */}
          <Card>
            <CardHeader>
              <CardTitle>Canales de Envío</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sendEmail"
                  checked={sendEmail}
                  onCheckedChange={(checked) => setSendEmail(checked as boolean)}
                />
                <Label htmlFor="sendEmail" className="text-sm">
                  Enviar por email
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sendSMS"
                  checked={sendSMS}
                  onCheckedChange={(checked) => setSendSMS(checked as boolean)}
                />
                <Label htmlFor="sendSMS" className="text-sm">
                  Enviar por SMS
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sendPush"
                  checked={sendPush}
                  onCheckedChange={(checked) => setSendPush(checked as boolean)}
                />
                <Label htmlFor="sendPush" className="text-sm">
                  Enviar notificación push
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Programación */}
          <Card>
            <CardHeader>
              <CardTitle>Programación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isScheduled"
                  checked={isScheduled}
                  onCheckedChange={(checked) => setIsScheduled(checked as boolean)}
                />
                <Label htmlFor="isScheduled" className="text-sm">
                  Programar envío para más tarde
                </Label>
              </div>
              
              {isScheduled && (
                <div className="space-y-2">
                  <Label htmlFor="scheduledTime">Fecha y hora de envío</Label>
                  <Input
                    id="scheduledTime"
                    type="datetime-local"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                </div>
              )}
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
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Recordatorio
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
