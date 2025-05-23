import type { ReactNode } from "react"
import DashboardHeader from "@/components/layout/dashboard-header"
import DashboardSidebarWrapper from "@/components/layout/dashboard-sidebar-wrapper"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebarWrapper />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

