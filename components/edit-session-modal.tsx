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
import { 
  Calendar,
  Clock,
  User,
  Dumbbell,
  FileText,
  Save,
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
    avatar: string;
  };
  date: string;
  time: string;
  duration: number;
  type: string;
  status: string;
  notes?: string;
  location?: string;
}

interface EditSessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  session: Session | null;
  onSave: (data: {
    sessionId: string;
    title: string;
    date: string;
    time: string;
    duration: number;
    type: string;
    notes: string;
    location: string;
  }) => void;
}

export function EditSessionModal({
  open,
  onOpenChange,
  session,
  onSave
}: EditSessionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState(60);
  const [type, setType] = useState('');
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  React.useEffect(() => {
    if (session) {
      setTitle(session.title);
      setDate(session.date);
      setTime(session.time);
      setDuration(session.duration);
      setType(session.type);
      setNotes(session.notes || '');
      setLocation(session.location || '');
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setIsLoading(true);
    
    // Simular guardado
    setTimeout(() => {
      onSave({
        sessionId: session.id,
        title,
        date,
        time,
        duration,
        type,
        notes,
        location
      });
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
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
            <Calendar className="h-6 w-6" />
            Editar Sesión
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 flex-1 overflow-y-auto pr-2">
          {/* Información actual de la sesión */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Sesión Actual
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulario de edición */}
          <Card>
            <CardHeader>
              <CardTitle>Editar Detalles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título de la sesión</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Entrenamiento de fuerza"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Hora</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duración (minutos)</Label>
                  <Select value={duration.toString()} onValueChange={(value) => setDuration(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="45">45 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                      <SelectItem value="90">1.5 horas</SelectItem>
                      <SelectItem value="120">2 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de sesión</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entrenamiento">Entrenamiento</SelectItem>
                      <SelectItem value="consulta">Consulta</SelectItem>
                      <SelectItem value="evaluacion">Evaluación</SelectItem>
                      <SelectItem value="seguimiento">Seguimiento</SelectItem>
                      <SelectItem value="nutricion">Nutrición</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: Gimnasio principal, Sala de pesas"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notas adicionales sobre la sesión..."
                  rows={3}
                />
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
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
