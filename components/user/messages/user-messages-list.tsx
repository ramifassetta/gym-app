"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function UserMessagesList({ onSelectChat, selectedChat }) {
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
            <div className="text-xs text-muted-foreground">{chat.role}</div>
            <div className="text-sm truncate text-muted-foreground">{chat.lastMessage}</div>
          </div>
          {chat.unread > 0 && <Badge className="ml-auto">{chat.unread}</Badge>}
        </div>
      ))}
    </div>
  )
}

