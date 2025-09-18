"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X,
  Trash2,
  AlertTriangle,
  Clock,
  Dumbbell,
  User,
  Loader2
} from "lucide-react";

interface Routine {
  id: number;
  name: string;
  client: string;
  level: string;
  exercises: number;
  duration: number;
  createdAt: string;
}

interface DeleteRoutineModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  routine: Routine | null;
  onDelete: (routineId: number) => void;
}

export function DeleteRoutineModal({
  open,
  onOpenChange,
  routine,
  onDelete
}: DeleteRoutineModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    if (!routine) return;
    
    setIsLoading(true);
    
    // Simular eliminación
    setTimeout(() => {
      onDelete(routine.id);
      setIsLoading(false);
      onOpenChange(false);
    }, 1500);
  };


  return (
    <AnimatePresence>
      {open && routine ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="max-w-md">
            <DialogHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-8 w-8"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-xl font-bold text-destructive pr-8">
                Eliminar Rutina
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
                        Esta acción no se puede deshacer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    La rutina será eliminada permanentemente y no podrás recuperarla.
                  </p>
                </CardContent>
              </Card>

              {/* Información de la rutina */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-base">Rutina a Eliminar</CardTitle>
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Creada: {routine.createdAt}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Eliminando...
                    </>
                  ) : (
                    <>
                      <Trash2 className="mr-2 h-4 w-4" />
                      Eliminar Rutina
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}

