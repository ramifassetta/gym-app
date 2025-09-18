"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  Dumbbell, 
  Target, 
  User, 
  Calendar,
  X,
  FileEdit,
  Send,
  Copy,
  Trash2
} from "lucide-react";

interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes?: string;
}

interface Routine {
  id: number;
  name: string;
  client: string;
  level: string;
  exercises: Exercise[];
  duration: number;
  createdAt: string;
  description?: string;
  goals?: string[];
}

interface RoutineDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  routine: Routine | null;
  onEdit?: (routineId: number) => void;
  onSend?: (routineId: number) => void;
  onDuplicate?: (routineId: number) => void;
  onDelete?: (routineId: number) => void;
}

export function RoutineDetailsModal({
  open,
  onOpenChange,
  routine,
  onEdit,
  onSend,
  onDuplicate,
  onDelete
}: RoutineDetailsModalProps) {
  if (!routine || !open) return null;


  const handleAction = (action: 'edit' | 'send' | 'duplicate' | 'delete') => {
    onOpenChange(false);
    switch (action) {
      case 'edit':
        onEdit?.(routine.id);
        break;
      case 'send':
        onSend?.(routine.id);
        break;
      case 'duplicate':
        onDuplicate?.(routine.id);
        break;
      case 'delete':
        onDelete?.(routine.id);
        break;
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-8 w-8"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <DialogTitle className="text-2xl font-bold bg-gradient-gym bg-clip-text text-transparent pr-8">
                {routine.name}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Información general */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Información General
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Cliente</p>
                        <p className="font-medium">{routine.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duración</p>
                        <p className="font-medium">{routine.duration} minutos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Creada</p>
                        <p className="font-medium">{routine.createdAt}</p>
                      </div>
                    </div>
                  </div>
                  
                  {routine.description && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Descripción</p>
                      <p className="text-sm">{routine.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Ejercicios */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Ejercicios ({routine.exercises.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {routine.exercises.map((exercise, index) => (
                      <motion.div
                        key={exercise.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg border border-muted/50 bg-gradient-to-r from-muted/20 to-muted/10"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                              {index + 1}
                            </div>
                            <h4 className="font-medium">{exercise.name}</h4>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Series</p>
                            <p className="font-medium">{exercise.sets}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Repeticiones</p>
                            <p className="font-medium">{exercise.reps}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Descanso</p>
                            <p className="font-medium">{exercise.rest}</p>
                          </div>
                        </div>
                        
                        {exercise.notes && (
                          <div className="mt-3 pt-3 border-t border-muted/30">
                            <p className="text-sm text-muted-foreground">Notas</p>
                            <p className="text-sm">{exercise.notes}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Acciones */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Acciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAction('edit')}
                    >
                      <FileEdit className="h-4 w-4" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAction('send')}
                    >
                      <Send className="h-4 w-4" />
                      Enviar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => handleAction('duplicate')}
                    >
                      <Copy className="h-4 w-4" />
                      Duplicar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-destructive hover:text-destructive"
                      onClick={() => handleAction('delete')}
                    >
                      <Trash2 className="h-4 w-4" />
                      Eliminar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </AnimatePresence>
  );
}

