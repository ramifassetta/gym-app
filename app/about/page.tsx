import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, ArrowLeft, Award, Users, Clock } from "lucide-react"
import SiteFooter from "@/components/layout/site-footer"
import SiteHeader from "@/components/layout/site-header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>

            <div className="prose max-w-none mb-12">
              <p className="text-lg mb-6">
                En GymRoutine Pro, nos dedicamos a transformar la forma en que los gimnasios y entrenadores gestionan
                las rutinas de ejercicios y la comunicación con sus clientes. Nuestra plataforma nació de la necesidad
                de digitalizar y optimizar los procesos que tradicionalmente se realizaban en papel.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Nuestra Historia</h2>
              <p className="mb-6">
                Fundada en 2020 por un equipo de entrenadores personales y desarrolladores de software, GymRoutine Pro
                surgió como respuesta a los desafíos que enfrentaban los profesionales del fitness para gestionar
                eficientemente las rutinas de sus clientes y hacer seguimiento de su progreso.
              </p>
              <p className="mb-6">
                Lo que comenzó como una simple herramienta para crear rutinas digitales ha evolucionado hasta
                convertirse en una plataforma integral que conecta gimnasios, entrenadores y usuarios, facilitando la
                comunicación, el seguimiento del progreso y la gestión de pagos en un solo lugar.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Nuestra Misión</h2>
              <p className="mb-6">
                Nuestra misión es empoderar a gimnasios y entrenadores con herramientas digitales que les permitan
                ofrecer un servicio más personalizado y eficiente, mientras ayudamos a los usuarios a alcanzar sus
                objetivos de fitness de manera más efectiva a través de rutinas personalizadas y seguimiento constante.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Nuestros Valores</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar nuestra plataforma.
                </li>
                <li>
                  <strong>Personalización:</strong> Creemos en soluciones adaptadas a las necesidades específicas.
                </li>
                <li>
                  <strong>Accesibilidad:</strong> Hacemos que la tecnología fitness sea accesible para todos.
                </li>
                <li>
                  <strong>Comunidad:</strong> Fomentamos una comunidad de apoyo entre profesionales y usuarios.
                </li>
                <li>
                  <strong>Resultados:</strong> Nos enfocamos en ayudar a todos a alcanzar sus objetivos de fitness.
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Excelencia</h3>
                  <p className="text-muted-foreground">
                    Comprometidos con ofrecer la mejor plataforma de gestión de rutinas del mercado.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                  <p className="text-muted-foreground">
                    Más de 500 gimnasios y 2,000 entrenadores confían en nuestra plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Eficiencia</h3>
                  <p className="text-muted-foreground">
                    Ahorra hasta 10 horas semanales en la gestión de rutinas y clientes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Dumbbell className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Especialización</h3>
                  <p className="text-muted-foreground">
                    Diseñado específicamente para las necesidades del sector fitness.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">¿Listo para transformar tu gimnasio?</h2>
              <Link href="/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

