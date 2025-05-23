import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: 'FitZone Gym - Dashboard',
  description: 'Panel de control para administrar tu gimnasio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
