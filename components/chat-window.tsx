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

interface Chat {
  name: string
  avatar: string | null
  online: boolean
}

interface ChatWindowProps {
  chat: Chat
}

export function ChatWindow({ chat }: ChatWindowProps) {
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

  const messagesEndRef = useRef<HTMLDivElement>(null)

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-none flex items-center justify-between p-6 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-12 w-12 border-2 border-primary/20 shadow-md group-hover:border-primary/40 transition-all duration-300">
              {chat.avatar ? (
                <AvatarImage src={chat.avatar} alt={chat.name} />
              ) : null}
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/30 text-primary font-semibold">
                {chat.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {chat.online && (
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-500 border-2 border-background rounded-full animate-pulse-light shadow-sm"></span>
            )}
          </div>
          <div>
            <div className="font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {chat.name}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${chat.online ? 'bg-emerald-500 animate-pulse' : 'bg-muted'}`}></div>
              {chat.online ? "En línea" : "Desconectado"}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              Ver perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              Ver rutinas asignadas
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-primary/20" />
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 transition-all duration-200">
              Silenciar conversación
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive hover:bg-gradient-to-r hover:from-red-100 hover:to-red-200 transition-all duration-200">
              Eliminar conversación
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-background to-background/80">
        {messages.map((msg, index) => (
          <div 
            key={msg.id} 
            className={`flex animate-fade-in ${msg.sender === "trainer" ? "justify-end" : "justify-start"}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                msg.sender === "trainer" 
                  ? "bg-gradient-to-r from-primary to-primary/80 text-white" 
                  : "bg-gradient-to-br from-card to-card/50 border border-primary/10 text-foreground"
              }`}
            >
              <div className="text-sm leading-relaxed">{msg.text}</div>
              <div
                className={`text-xs mt-2 ${
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

      <div className="flex-none border-t border-primary/10 bg-gradient-to-r from-primary/5 to-primary/10 p-6">
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon"
            className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <Paperclip className="h-4 w-4 text-primary" />
          </Button>
          <Input
            placeholder="Escribe un mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-gradient-to-r from-background to-background/80 border-primary/20 hover:border-primary/40 focus:border-primary/40 transition-all duration-300"
          />
          <Button 
            size="icon" 
            onClick={handleSendMessage} 
            disabled={!message.trim()}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}