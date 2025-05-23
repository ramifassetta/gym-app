"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

interface AddSessionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddSessionDialog({ open, onOpenChange }: AddSessionDialogProps) {
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de creación de sesión
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/5 to-primary/5 rounded-lg" />
        
        <div className="relative">
          <DialogHeader className="space-y-4 pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Programar Nueva Sesión
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Crea una nueva sesión con un cliente. Completa todos los campos necesarios.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-6">
              <div className="space-y-3">
                <Label htmlFor="title" className="text-sm font-semibold">
                  Título de la Sesión
                </Label>
                <Input 
                  id="title" 
                  placeholder="Ej: Entrenamiento Personal" 
                  required 
                  className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="client" className="text-sm font-semibold">
                  Cliente
                </Label>
                <Select required>
                  <SelectTrigger 
                    id="client" 
                    className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 transition-all duration-300"
                  >
                    <SelectValue placeholder="Seleccionar cliente" />
                  </SelectTrigger>
                  <SelectContent className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                    <SelectItem value="client1" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                      Juan Pérez
                    </SelectItem>
                    <SelectItem value="client2" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                      María García
                    </SelectItem>
                    <SelectItem value="client3" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                      Carlos López
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-sm font-semibold">Fecha</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal bg-gradient-to-r from-background to-background/80 border-primary/20 hover:border-primary/40 transition-all duration-300",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: es }) : "Seleccionar fecha"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                      <Calendar 
                        mode="single" 
                        selected={date} 
                        onSelect={setDate} 
                        initialFocus 
                        className="bg-gradient-to-br from-background to-background/80 rounded-lg"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="time" className="text-sm font-semibold">
                    Hora
                  </Label>
                  <Select required>
                    <SelectTrigger 
                      id="time" 
                      className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 transition-all duration-300"
                    >
                      <SelectValue placeholder="Seleccionar hora" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                      <SelectItem value="09:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">09:00</SelectItem>
                      <SelectItem value="10:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">10:00</SelectItem>
                      <SelectItem value="11:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">11:00</SelectItem>
                      <SelectItem value="12:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">12:00</SelectItem>
                      <SelectItem value="16:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">16:00</SelectItem>
                      <SelectItem value="17:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">17:00</SelectItem>
                      <SelectItem value="18:00" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">18:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="duration" className="text-sm font-semibold">
                  Duración (minutos)
                </Label>
                <Select defaultValue="60">
                  <SelectTrigger 
                    id="duration" 
                    className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 transition-all duration-300"
                  >
                    <SelectValue placeholder="Seleccionar duración" />
                  </SelectTrigger>
                  <SelectContent className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                    <SelectItem value="30" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">30 minutos</SelectItem>
                    <SelectItem value="45" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">45 minutos</SelectItem>
                    <SelectItem value="60" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">60 minutos</SelectItem>
                    <SelectItem value="90" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">90 minutos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="location" className="text-sm font-semibold">
                  Ubicación
                </Label>
                <Select>
                  <SelectTrigger 
                    id="location" 
                    className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 transition-all duration-300"
                  >
                    <SelectValue placeholder="Seleccionar ubicación" />
                  </SelectTrigger>
                  <SelectContent className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
                    <SelectItem value="weights" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">Sala de Pesas</SelectItem>
                    <SelectItem value="cardio" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">Área de Cardio</SelectItem>
                    <SelectItem value="functional" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">Zona Funcional</SelectItem>
                    <SelectItem value="evaluation" className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">Sala de Evaluación</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="notes" className="text-sm font-semibold">
                  Notas
                </Label>
                <Input 
                  id="notes" 
                  placeholder="Notas adicionales sobre la sesión" 
                  className="h-12 bg-gradient-to-r from-background to-background/80 border-primary/20 focus:border-primary/40 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            <DialogFooter className="space-x-4 pt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Guardando..." : "Guardar Sesión"}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}