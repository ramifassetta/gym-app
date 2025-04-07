"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

export function UserRoutineFeedback({ routineId }: { routineId: number }) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Datos simulados de comentarios
  const comments = [
    {
      id: 1,
      author: "Carlos Martínez",
      role: "trainer",
      avatar: "/placeholder-user.jpg",
      content:
        "¡Buen trabajo con esta rutina! Recuerda mantener la técnica correcta en las dominadas y no dudes en preguntarme si necesitas modificar algún ejercicio.",
      date: "20/07/2023",
    },
    {
      id: 2,
      author: "Juan Pérez",
      role: "user",
      avatar: "/placeholder-user.jpg",
      content:
        "Gracias por la rutina. Me cuesta un poco la parte de las dominadas, ¿podríamos modificarlas o añadir alguna alternativa?",
      date: "21/07/2023",
    },
    {
      id: 3,
      author: "Carlos Martínez",
      role: "trainer",
      avatar: "/placeholder-user.jpg",
      content:
        "¡Claro! Puedes empezar con dominadas asistidas o hacer remo invertido en su lugar. Trabajaremos en ello en nuestra próxima sesión.",
      date: "21/07/2023",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setComment("")
      console.log("Comentario enviado:", comment)
      // Aquí iría la lógica para añadir el comentario a la lista
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {comments.map((item) => (
          <div key={item.id} className={`flex gap-4 ${item.role === "user" ? "flex-row-reverse" : ""}`}>
            <Avatar>
              <AvatarImage src={item.avatar} alt={item.author} />
              <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className={`flex-1 space-y-1 ${item.role === "user" ? "text-right" : ""}`}>
              <div className="flex items-center gap-2 justify-start">
                <p className={`text-sm font-medium ${item.role === "user" ? "ml-auto" : ""}`}>{item.author}</p>
                <span className={`text-xs text-muted-foreground ${item.role === "user" ? "order-first" : ""}`}>
                  {item.date}
                </span>
              </div>
              <div
                className={`rounded-lg p-3 ${
                  item.role === "trainer" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                <p className="text-sm">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Escribe un comentario o pregunta para tu entrenador..."
          className="flex-1"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" disabled={isSubmitting || !comment.trim()}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Enviar</span>
        </Button>
      </form>
    </div>
  )
}

