import type { ReactNode } from "react"
import UserDashboardHeader from "@/components/layout/user-dashboard-header"
import UserDashboardSidebarWrapper from "@/components/layout/user-dashboard-sidebar-wrapper"

export default function UserDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="flex h-screen overflow-hidden">
        <UserDashboardSidebarWrapper />
        <div className="flex-1 flex flex-col overflow-hidden">
          <UserDashboardHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

