"use client"

import dynamic from 'next/dynamic'

const UserDashboardSidebar = dynamic(
  () => import("@/components/layout/user-dashboard-sidebar"),
  { ssr: false }
)

interface UserDashboardSidebarWrapperProps {
  onClose?: () => void
}

export default function UserDashboardSidebarWrapper({ onClose }: UserDashboardSidebarWrapperProps) {
  return <UserDashboardSidebar onClose={onClose} />
} 