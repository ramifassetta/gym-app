"use client"

import dynamic from 'next/dynamic'

const DashboardSidebar = dynamic(
  () => import("@/components/layout/dashboard-sidebar"),
  { ssr: false }
)

export default function DashboardSidebarWrapper() {
  return <DashboardSidebar />
} 