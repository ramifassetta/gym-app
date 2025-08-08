"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle,
  User,
  Calendar,
  Dumbbell,
  Trash2,
  Loader2,
  X
} from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar: string;
  level: string;
  joinDate: string;
  activeRoutines: number;
  totalSessions: number;
  lastSession?: string;
}

interface DeleteClientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
  onDelete: (data: {
    clientId: number;
    deleteRoutines: boolean;
    deleteSessions: boolean;
    sendNotification: boolean;
  }) => void;
}

export function DeleteClientModal({
  open,
  onOpenChange,
  client,
  onDelete
}: DeleteClientModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [deleteRoutines, setDeleteRoutines] = useState(false);
  const [deleteSessions, setDeleteSessions] = useState(false);
  const [sendNotification, setSendNotification] = useState(true);
  const [confirmText, setConfirmText] = useState('');

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!client || confirmText !== client.name) return;

    setIsLoading(true);
    
    // Simular eliminación
    setTimeout(() => {
      onDelete({
        clientId: client.id,
        deleteRoutines,
        deleteSessions,
        sendNotification
      });
      setIsLoading(false);
      onOpenChange(false);
      // Resetear estado
      setDeleteRoutines(false);
      setDeleteSessions(false);
      setSendNotification(true);
      setConfirmText('');
    }, 2000);
  };

  const getLevelVariant = (level: string) => {
    switch (level) {
      case "Principiante":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "Intermedio":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      case "Avanzado":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      default:
        return "default"
    }
  };

  if (!client) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            Eliminar Cliente
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleDelete} className="space-y-6 flex-1 overflow-y-auto pr-2">
          {/* Información del cliente */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <User className="h-5 w-5" />
                Cliente a Eliminar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-red-200">
                    <AvatarImage src={client.avatar} alt={client.name} />
                    <AvatarFallback className="bg-red-100 text-red-700">
                      {client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg">{client.name}</h4>
                    <p className="text-sm text-muted-foreground">{client.email}</p>
                    {client.phone && (
                      <p className="text-sm text-muted-foreground">{client.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Miembro desde: {client.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4 text-muted-foreground" />
                    <span>Rutinas activas: {client.activeRoutines}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Total sesiones: {client.totalSessions}</span>
                  </div>
                  {client.lastSession && (
                    <div className="flex items-center gap-2">
                      <span>Última sesión: {client.lastSession}</span>
                    </div>
                  )}
                </div>
                
                <Badge className={getLevelVariant(client.level)}>
                  {client.level}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Advertencia */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">Advertencia</h4>
                  <p className="text-sm text-orange-700">
                    Esta acción eliminará permanentemente al cliente y todos sus datos asociados. 
                    Esta acción no se puede deshacer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opciones de eliminación */}
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Eliminación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="deleteRoutines"
                  checked={deleteRoutines}
                  onCheckedChange={(checked) => setDeleteRoutines(checked as boolean)}
                />
                <Label htmlFor="deleteRoutines" className="text-sm">
                  Eliminar todas las rutinas del cliente
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="deleteSessions"
                  checked={deleteSessions}
                  onCheckedChange={(checked) => setDeleteSessions(checked as boolean)}
                />
                <Label htmlFor="deleteSessions" className="text-sm">
                  Eliminar todas las sesiones del cliente
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sendNotification"
                  checked={sendNotification}
                  onCheckedChange={(checked) => setSendNotification(checked as boolean)}
                />
                <Label htmlFor="sendNotification" className="text-sm">
                  Enviar notificación de cancelación al cliente
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Confirmación */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">Confirmación Final</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Para confirmar la eliminación, escribe el nombre del cliente: <strong>{client.name}</strong>
              </p>
              <div className="space-y-2">
                <Label htmlFor="confirmText">Nombre del cliente</Label>
                <input
                  id="confirmText"
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Escribe el nombre del cliente"
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
              variant="destructive"
              disabled={isLoading || confirmText !== client.name}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Eliminando...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Eliminar Cliente
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
