"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Chat {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface MessagesListProps {
  onSelectChat: (chat: Chat) => void
  selectedChat: Chat | null
}

export function MessagesList({ onSelectChat, selectedChat }: MessagesListProps) {
  // Datos de ejemplo para conversaciones
  const conversations = [
    {
      id: 1,
      name: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      lastMessage: "¿Cómo va mi progreso con la nueva rutina?",
      time: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "María García",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Gracias por la sesión de hoy",
      time: "Ayer",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Carlos López",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Necesito reprogramar mi sesión del jueves",
      time: "Ayer",
      unread: 1,
      online: false,
    },
    {
      id: 4,
      name: "Ana Martínez",
      avatar: "/placeholder-user.jpg",
      lastMessage: "¿Puedes enviarme la nueva rutina?",
      time: "Lun",
      unread: 0,
      online: true,
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      avatar: "/placeholder-user.jpg",
      lastMessage: "Ya realicé el pago de este mes",
      time: "Dom",
      unread: 0,
      online: false,
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