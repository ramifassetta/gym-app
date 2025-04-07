import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Dumbbell className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">GymRoutine Pro</span>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">
              Términos
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GymRoutine Pro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

