"use client"

import dynamic from 'next/dynamic'

const UserDashboardSidebar = dynamic(
  () => import("@/components/layout/user-dashboard-sidebar"),
  { ssr: false }
)

export default function UserDashboardSidebarWrapper() {
  return <UserDashboardSidebar />
} 