import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-primary-foreground" />
          <Link href="/" className="text-xl font-bold text-primary-foreground">
            GymRoutine Pro
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Registrarse</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

