import type { ReactNode } from "react"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 