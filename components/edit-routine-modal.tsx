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
import { 
  X,
  Plus,
  Trash2,
  Dumbbell,
  Clock,
  User,
  Save,
  Loader2
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
  description?: string;
}

interface EditRoutineModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  routine: Routine | null;
  onSave: (routine: Routine) => void;
}

export function EditRoutineModal({
  open,
  onOpenChange,
  routine,
  onSave
}: EditRoutineModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Routine | null>(null);

  React.useEffect(() => {
    if (routine) {
      setFormData(routine);
    }
  }, [routine]);

  if (!formData || !routine) return null;

  const handleInputChange = (field: keyof Routine, value: any) => {
    setFormData(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleExerciseChange = (index: number, field: keyof Exercise, value: any) => {
    setFormData(prev => {
      if (!prev) return null;
      const newExercises = [...prev.exercises];
      newExercises[index] = { ...newExercises[index], [field]: value };
      return { ...prev, exercises: newExercises };
    });
  };

  const addExercise = () => {
    setFormData(prev => {
      if (!prev) return null;
      const newExercise: Exercise = {
        id: Date.now(),
        name: '',
        sets: 3,
        reps: '10',
        rest: '60s',
        notes: ''
      };
      return { ...prev, exercises: [...prev.exercises, newExercise] };
    });
  };

  const removeExercise = (index: number) => {
    setFormData(prev => {
      if (!prev) return null;
      const newExercises = prev.exercises.filter((_, i) => i !== index);
      return { ...prev, exercises: newExercises };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular guardado
    setTimeout(() => {
      onSave(formData);
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
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
                Editar Rutina
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información básica */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Información Básica
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre de la Rutina</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ej: Entrenamiento de Fuerza"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client">Cliente</Label>
                      <Input
                        id="client"
                        value={formData.client}
                        onChange={(e) => handleInputChange('client', e.target.value)}
                        placeholder="Nombre del cliente"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duración (minutos)</Label>
                      <Input
                        id="duration"
                        type="number"
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                        placeholder="60"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción (opcional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description || ''}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe la rutina..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Ejercicios */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Ejercicios ({formData.exercises.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formData.exercises.map((exercise, index) => (
                      <motion.div
                        key={exercise.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg border border-muted/50 bg-gradient-to-r from-muted/20 to-muted/10"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">
                              {index + 1}
                            </div>
                            <h4 className="font-medium">Ejercicio {index + 1}</h4>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeExercise(index)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Nombre del ejercicio</Label>
                            <Input
                              value={exercise.name}
                              onChange={(e) => handleExerciseChange(index, 'name', e.target.value)}
                              placeholder="Ej: Press de banca"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Series</Label>
                            <Input
                              type="number"
                              value={exercise.sets}
                              onChange={(e) => handleExerciseChange(index, 'sets', parseInt(e.target.value))}
                              placeholder="3"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Repeticiones</Label>
                            <Input
                              value={exercise.reps}
                              onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)}
                              placeholder="10"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Descanso</Label>
                            <Input
                              value={exercise.rest}
                              onChange={(e) => handleExerciseChange(index, 'rest', e.target.value)}
                              placeholder="60s"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <Label>Notas (opcional)</Label>
                          <Textarea
                            value={exercise.notes || ''}
                            onChange={(e) => handleExerciseChange(index, 'notes', e.target.value)}
                            placeholder="Notas adicionales sobre el ejercicio..."
                            rows={2}
                          />
                        </div>
                      </motion.div>
                    ))}
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center gap-2"
                      onClick={addExercise}
                    >
                      <Plus className="h-4 w-4" />
                      Agregar Ejercicio
                    </Button>
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
      ) : null}
    </AnimatePresence>
  );
}

