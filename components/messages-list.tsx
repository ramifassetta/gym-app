"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function MessagesList({ onSelectChat, selectedChat }) {
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
    <div className="divide-y">
      {conversations.map((chat) => (
        <div
          key={chat.id}
          className={cn(
            "flex items-center gap-4 p-4 cursor-pointer hover:bg-muted/50 transition-colors",
            selectedChat?.id === chat.id && "bg-muted",
          )}
          onClick={() => onSelectChat(chat)}
        >
          <div className="relative">
            <Avatar>
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="font-medium truncate">{chat.name}</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">{chat.time}</div>
            </div>
            <div className="text-sm truncate text-muted-foreground">{chat.lastMessage}</div>
          </div>
          {chat.unread > 0 && <Badge className="ml-auto">{chat.unread}</Badge>}
        </div>
      ))}
    </div>
  )
}

