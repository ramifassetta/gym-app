"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { UserMessagesList } from "@/components/user/messages/user-messages-list"
import { UserChatWindow } from "@/components/user/messages/user-chat-window"
import { motion } from "framer-motion"

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

export default function UserMessagesPage() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[calc(100vh-8rem)] flex flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-none flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Mensajes
          </h1>
          <p className="text-muted-foreground mt-1">Comunícate con tus entrenadores y especialistas</p>
        </div>
      </motion.div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="h-full"
        >
          <Card className="h-full overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 flex flex-col">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <CardHeader className="flex-none bg-gradient-to-r from-primary/5 to-primary/10">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                  <Search className="h-4 w-4" />
                </div>
                Conversaciones
              </CardTitle>
              <CardDescription>Gestiona tus conversaciones con los especialistas</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col min-h-0">
              <div className="flex-none relative mb-6">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search" 
                  placeholder="Buscar conversaciones..." 
                  className="pl-10 h-11 bg-gradient-to-r from-background to-muted/20 border-primary/20 focus:border-primary/40 transition-all duration-300" 
                />
              </div>
              <div className="flex-1 overflow-auto">
                <UserMessagesList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-2 h-full"
        >
          <Card className="h-full overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 flex flex-col">
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            {selectedChat ? (
              <div className="flex-1 flex flex-col min-h-0">
                <UserChatWindow chat={selectedChat} />
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 p-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-full p-8">
                  <div className="text-4xl">💬</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Selecciona una conversación
                  </div>
                  <div className="text-muted-foreground">
                    Elige un especialista de la lista para comenzar a chatear
                  </div>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}

