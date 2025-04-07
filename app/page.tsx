import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Users, Calendar, CreditCard } from "lucide-react"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforma la gestión de rutinas en tu gimnasio</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Diseña, modifica y envía rutinas personalizadas a tus clientes de forma digital, rápida y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register?role=gym">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Soy Gimnasio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register?role=user">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Soy Usuario <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rutinas Personalizadas</h3>
                <p className="text-muted-foreground">
                  Crea y modifica rutinas personalizadas para cada cliente con ejercicios, repeticiones, series y videos
                  demostrativos.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interacción Directa</h3>
                <p className="text-muted-foreground">
                  Comunicación directa entre gimnasios y usuarios para resolver dudas o solicitar ajustes en las
                  rutinas.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Seguimiento de Progreso</h3>
                <p className="text-muted-foreground">
                  Los usuarios pueden registrar su progreso y visualizar estadísticas de su rendimiento a lo largo del
                  tiempo.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-card rounded-lg p-6 shadow-md">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gestión de Pagos</h3>
                <p className="text-muted-foreground">
                  Sistema integrado para el pago de cuotas y gestión de membresías directamente desde la aplicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para digitalizar tu gimnasio?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a los gimnasios que ya han transformado la forma en que gestionan las rutinas de sus clientes.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Comenzar Ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

