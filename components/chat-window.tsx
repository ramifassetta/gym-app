"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ChatWindow({ chat }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "client",
      text: "Hola, ¿cómo estás?",
      time: "10:00",
    },
    {
      id: 2,
      sender: "trainer",
      text: "¡Hola! Estoy bien, gracias. ¿En qué puedo ayudarte hoy?",
      time: "10:02",
    },
    {
      id: 3,
      sender: "client",
      text: "Quería preguntarte sobre mi progreso con la nueva rutina que me enviaste la semana pasada.",
      time: "10:05",
    },
    {
      id: 4,
      sender: "trainer",
      text: "Claro, he estado revisando tus registros y veo que has estado progresando muy bien. Has aumentado tu resistencia en los ejercicios cardiovasculares y has mejorado tu técnica en los ejercicios de fuerza.",
      time: "10:10",
    },
    {
      id: 5,
      sender: "client",
      text: "¡Genial! Me alegra escuchar eso. He estado esforzándome mucho.",
      time: "10:15",
    },
    {
      id: 6,
      sender: "trainer",
      text: "Se nota tu esfuerzo. ¿Has tenido alguna dificultad con algún ejercicio en particular?",
      time: "10:20",
    },
    {
      id: 7,
      sender: "client",
      text: "Sí, tengo algunas dudas sobre la técnica correcta para las sentadillas con barra. A veces siento molestia en la espalda baja.",
      time: "10:25",
    },
    {
      id: 8,
      sender: "trainer",
      text: "Entiendo. Es importante corregir eso para evitar lesiones. ¿Te parece si en nuestra próxima sesión revisamos detalladamente la técnica? Mientras tanto, te recomendaría reducir el peso y enfocarte en la forma correcta.",
      time: "10:30",
    },
  ])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (message.trim() === "") return

    const newMessage = {
      id: messages.length + 1,
      sender: "trainer",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, newMessage])
    setMessage("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={chat.avatar} alt={chat.name} />
            <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{chat.name}</div>
            <div className="text-xs text-muted-foreground">{chat.online ? "En línea" : "Desconectado"}</div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
            <DropdownMenuItem>Ver rutinas asignadas</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Silenciar conversación</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Eliminar conversación</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "trainer" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === "trainer" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <div className="text-sm">{msg.text}</div>
              <div
                className={`text-xs mt-1 ${
                  msg.sender === "trainer" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Escribe un mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage} disabled={!message.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}

