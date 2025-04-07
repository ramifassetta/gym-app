import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProfileClients() {
  const featuredClients = [
    {
      id: 1,
      name: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      goal: "Pérdida de peso",
      progress: 75,
      since: "6 meses",
      achievement: "- 12 kg",
    },
    {
      id: 2,
      name: "María García",
      avatar: "/placeholder-user.jpg",
      goal: "Tonificación",
      progress: 60,
      since: "3 meses",
      achievement: "+ 15% fuerza",
    },
    {
      id: 3,
      name: "Carlos López",
      avatar: "/placeholder-user.jpg",
      goal: "Ganancia muscular",
      progress: 85,
      since: "8 meses",
      achievement: "+ 8 kg músculo",
    },
  ]

  return (
    <div className="space-y-4">
      {featuredClients.map((client) => (
        <Card key={client.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{client.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{client.goal}</Badge>
                      <span className="text-xs text-muted-foreground">Cliente desde hace {client.since}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">{client.achievement}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progreso hacia el objetivo</span>
                    <span className="font-medium">{client.progress}%</span>
                  </div>
                  <Progress value={client.progress} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

