"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { UserMessagesList } from "@/components/user/messages/user-messages-list"
import { UserChatWindow } from "@/components/user/messages/user-chat-window"

export default function UserMessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Mensajes</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <Card className="lg:col-span-1 flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar conversaciones..." className="pl-8" />
            </div>
          </div>
          <CardContent className="flex-1 overflow-auto p-0">
            <UserMessagesList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col h-full">
          {selectedChat ? (
            <UserChatWindow chat={selectedChat} />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Selecciona una conversación para comenzar
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

