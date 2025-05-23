"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Chat {
  id: number
  name: string
  role: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface UserMessagesListProps {
  onSelectChat: (chat: Chat) => void
  selectedChat: Chat | null
}

export function UserMessagesList({ onSelectChat, selectedChat }: UserMessagesListProps) {
  // Datos de ejemplo para conversaciones
  const conversations = [
    {
      id: 1,
      name: "Carlos Martínez",
      role: "Entrenador Personal",
      avatar: "/placeholder-user.jpg",
      lastMessage: "¿Cómo te fue con la nueva rutina que te asigné?",
      time: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Laura Sánchez",
      role: "Nutricionista",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Aquí te envío tu nuevo plan alimenticio",
      time: "Ayer",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Miguel Ángel Ruiz",
      role: "Fisioterapeuta",
      avatar: "/placeholder-user.jpg",
      lastMessage: "No olvides hacer los ejercicios de recuperación",
      time: "Lun",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: "Ana Gómez",
      role: "Entrenadora de CrossFit",
      avatar: "/placeholder-user.jpg",
      lastMessage: "¡Gran trabajo en la clase de hoy!",
      time: "Dom",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Soporte FitZone",
      role: "Atención al cliente",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Hola, ¿en qué podemos ayudarte?",
      time: "26/06",
      unread: 0,
      online: true,
    },
  ]

  return (
    <div className="divide-y divide-primary/10">
      {conversations.map((chat) => (
        <div
          key={chat.id}
          className={cn(
            "group relative flex items-center gap-4 p-4 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10",
            selectedChat?.id === chat.id && "bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary"
          )}
          onClick={() => onSelectChat(chat)}
        >
          <div className="relative">
            <Avatar className="h-12 w-12 ring-2 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback className="bg-gradient-to-r from-primary to-primary/80 text-white font-bold">
                {chat.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {chat.online && (
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                {chat.name}
              </div>
              <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                {chat.time}
              </div>
            </div>
            <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {chat.role}
            </div>
            <div className="text-sm truncate text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {chat.lastMessage}
            </div>
          </div>
          
          {chat.unread > 0 && (
            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-sm">
              {chat.unread}
            </Badge>
          )}
        </div>
      ))}
    </div>
  )
}

