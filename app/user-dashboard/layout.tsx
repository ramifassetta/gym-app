"use client"

import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import UserDashboardHeader from "@/components/layout/user-dashboard-header"
import UserDashboardSidebarWrapper from "@/components/layout/user-dashboard-sidebar-wrapper"
import { motion, AnimatePresence } from "framer-motion"

export default function UserDashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Cerrar sidebar en móvil al cambiar de ruta
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }, [isMobile])

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar para desktop */}
        <div className="hidden lg:block">
          <UserDashboardSidebarWrapper />
        </div>
        
        {/* Sidebar móvil overlay */}
        <AnimatePresence>
          {sidebarOpen && isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 z-40 lg:hidden"
                onClick={handleCloseSidebar}
              />
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 0.3, type: "spring", damping: 25 }}
                className="fixed left-0 top-0 h-full z-50 lg:hidden bg-background border-r border-border shadow-2xl"
              >
                <UserDashboardSidebarWrapper onClose={handleCloseSidebar} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="flex-1 flex flex-col overflow-hidden">
          <UserDashboardHeader onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

