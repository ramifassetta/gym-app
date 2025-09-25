import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: 'Optifit - Gestión de Gimnasios',
  description: 'Sistema integral para la gestión de gimnasios con control de acceso, pagos y rutinas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
