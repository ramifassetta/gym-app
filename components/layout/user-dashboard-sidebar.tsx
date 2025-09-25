"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Dumbbell,
  Calendar,
  MessageSquare,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  User,
  X,
} from "lucide-react"

const navItems = [
  {
    title: "Panel",
    href: "/user-dashboard",
    icon: LayoutDashboard,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Mis Rutinas",
    href: "/user-dashboard/routines",
    icon: Dumbbell,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Calendario",
    href: "/user-dashboard/calendar",
    icon: Calendar,
    gradient: "from-amber-500 to-amber-600"
  },
  {
    title: "Mensajes",
    href: "/user-dashboard/messages",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Pagos",
    href: "/user-dashboard/payments",
    icon: CreditCard,
    gradient: "from-rose-500 to-rose-600"
  },
  {
    title: "Mi Perfil",
    href: "/user-dashboard/profile",
    icon: User,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Configuración",
    href: "/user-dashboard/settings",
    icon: Settings,
    gradient: "from-slate-500 to-slate-600"
  },
]

interface UserDashboardSidebarProps {
  onClose?: () => void
}

export default function UserDashboardSidebar({ onClose }: UserDashboardSidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300 shadow-lg h-full",
        isCollapsed ? "w-[70px]" : "w-[240px]",
      )}
    >
      <div className="flex h-16 items-center border-b border-border px-4 bg-background">
        <div className="flex items-center justify-between w-full">
          <Link href="/user-dashboard" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
              <Dumbbell className="h-5 w-5" />
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              >
                Optifit
              </motion.span>
            )}
          </Link>
          
          {/* Botón de cerrar para móviles */}
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-2 px-3">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 group relative overflow-hidden",
                    isActive
                      ? "bg-primary/10 text-primary font-medium shadow-sm border border-primary/20"
                      : "text-foreground hover:bg-muted hover:text-foreground hover:shadow-sm",
                  )}
                  onClick={onClose} // Cerrar sidebar en móvil al hacer clic
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/5 rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  <div className={cn(
                    "p-1.5 rounded-lg transition-all duration-300 relative z-10",
                    isActive 
                      ? `bg-gradient-to-br ${item.gradient} text-white shadow-sm`
                      : "group-hover:bg-muted-foreground/20"
                  )}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  
                  {!isCollapsed && (
                    <span className="relative z-10 transition-all duration-300">
                      {item.title}
                    </span>
                  )}
                  
                  {isActive && (
                    <div className="absolute right-2 w-1 h-6 bg-gradient-to-b from-primary to-primary/60 rounded-full" />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>
      </div>
      
      {/* Botón de contraer solo en desktop */}
      <div className="hidden lg:block mt-auto border-t border-border p-3 bg-muted/20">
        <Button
          variant="ghost"
          size="sm"
          className="w-full h-10 justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-xl"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </motion.div>
          {!isCollapsed && <span className="ml-2">Contraer</span>}
        </Button>
      </div>
    </motion.div>
  )
}

