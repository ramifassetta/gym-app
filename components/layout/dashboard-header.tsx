"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, LogOut, Settings, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardHeader() {
  const router = useRouter()
  const [notifications, setNotifications] = useState(3)

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-primary/10 bg-gradient-to-r from-background to-background/80 backdrop-blur-sm px-4 sm:px-6">
      <div className="flex flex-1 items-center justify-end gap-2">
        <ThemeToggle />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-[10px] text-white shadow-sm">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[280px] bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <DropdownMenuLabel className="text-primary">Notificaciones</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-primary/20" />
            <div className="max-h-[300px] overflow-auto">
              <DropdownMenuItem className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Nueva solicitud de rutina</p>
                  <p className="text-xs text-muted-foreground">María García ha solicitado una nueva rutina</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Pago recibido</p>
                  <p className="text-xs text-muted-foreground">Has recibido un pago de Carlos López</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">Nuevo mensaje</p>
                  <p className="text-xs text-muted-foreground">Juan Pérez te ha enviado un mensaje</p>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator className="bg-primary/20" />
            <DropdownMenuItem className="cursor-pointer justify-center text-center hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              Ver todas las notificaciones
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative h-8 flex items-center gap-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 px-3"
            >
              <Avatar className="h-8 w-8 border-2 border-primary/20 shadow-md group-hover:border-primary/40 transition-all duration-300">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                  FZ
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex md:flex-col md:items-start md:leading-none">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  FitZone Gym
                </span>
                <span className="text-xs text-muted-foreground">admin@fitzonegym.com</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <DropdownMenuLabel className="text-primary">Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-primary/20" />
            <DropdownMenuItem asChild className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              <Link href="/dashboard/profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              <Link href="/dashboard/settings" className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-primary/20" />
            <DropdownMenuItem 
              onClick={handleLogout}
              className="hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-200"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

