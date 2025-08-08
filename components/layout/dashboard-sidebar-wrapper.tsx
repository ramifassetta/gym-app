"use client"

import dynamic from 'next/dynamic'

const DashboardSidebar = dynamic(
  () => import("@/components/layout/dashboard-sidebar"),
  { ssr: false }
)

interface DashboardSidebarWrapperProps {
  onClose?: () => void
}

export default function DashboardSidebarWrapper({ onClose }: DashboardSidebarWrapperProps) {
  return <DashboardSidebar onClose={onClose} />
} 