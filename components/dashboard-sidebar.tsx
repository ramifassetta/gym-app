"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Dumbbell,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  BarChart3,
  MessageSquare,
} from "lucide-react"

const navItems = [
  {
    title: "Panel",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Clientes",
    href: "/dashboard/clients",
    icon: Users,
  },
  {
    title: "Rutinas",
    href: "/dashboard/routines",
    icon: Dumbbell,
  },
  {
    title: "Pagos",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Control de Acceso",
    href: "/dashboard/access-control",
    icon: Shield,
  },
  {
    title: "Reportes",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Comunicaciones",
    href: "/dashboard/communications",
    icon: MessageSquare,
  },
  {
    title: "Configuración",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[240px]",
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          {!isCollapsed && <span className="font-bold">Optifit</span>}
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-2">
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto w-full h-8 justify-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

