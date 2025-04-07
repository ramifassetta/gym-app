import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function GymGallery() {
  // En un caso real, estas serían imágenes reales del gimnasio
  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Área de pesas", caption: "Área de pesas" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Zona de cardio", caption: "Zona de cardio" },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sala de clases grupales",
      caption: "Sala de clases grupales",
    },
    { src: "/placeholder.svg?height=300&width=400", alt: "Área funcional", caption: "Área funcional" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Vestuarios", caption: "Vestuarios" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Recepción", caption: "Recepción" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <AspectRatio ratio={4 / 3} className="bg-muted">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
            </AspectRatio>
            <div className="p-2 text-center text-sm font-medium">{image.caption}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

