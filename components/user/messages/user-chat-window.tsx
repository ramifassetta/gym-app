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

export function UserChatWindow({ chat }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "trainer",
      text: "¡Hola Juan! ¿Cómo te va con la nueva rutina que te asigné la semana pasada?",
      time: "10:00",
    },
    {
      id: 2,
      sender: "user",
      text: "Hola Carlos, la verdad es que me está gustando mucho, sobre todo los ejercicios de pierna.",
      time: "10:02",
    },
    {
      id: 3,
      sender: "trainer",
      text: "¡Me alegra oírlo! ¿Has tenido alguna dificultad o molestia con algún ejercicio en particular?",
      time: "10:05",
    },
    {
      id: 4,
      sender: "user",
      text: "Con las dominadas me cuesta un poco, todavía no consigo hacer todas las repeticiones que indicas.",
      time: "10:10",
    },
    {
      id: 5,
      sender: "trainer",
      text: "No te preocupes, es normal. Las dominadas son un ejercicio exigente. ¿Te parece si para la próxima sesión trabajamos específicamente en eso y vemos algunas variantes que te pueden ayudar a progresar?",
      time: "10:15",
    },
    {
      id: 6,
      sender: "user",
      text: "¡Me parece genial! Gracias por la ayuda.",
      time: "10:20",
    },
    {
      id: 7,
      sender: "trainer",
      text: "Por cierto, ¿has estado registrando tu progreso en la aplicación? Es importante para poder hacer ajustes a tu rutina según avances.",
      time: "10:25",
    },
    {
      id: 8,
      sender: "user",
      text: "Sí, he estado registrando los pesos y las repeticiones después de cada sesión.",
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
      sender: "user",
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
            <div className="text-xs text-muted-foreground">
              {chat.role} {chat.online ? "• En línea" : ""}
            </div>
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
            <DropdownMenuItem>Silenciar conversación</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Limpiar conversación</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <div className="text-sm">{msg.text}</div>
              <div
                className={`text-xs mt-1 ${
                  msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
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

