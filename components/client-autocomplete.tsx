"use client"

import React, { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, User, Mail, Phone } from "lucide-react"

interface Client {
  id: number
  name: string
  email: string
  phone?: string
  dni: string
  status: "active" | "inactive"
}

interface ClientAutocompleteProps {
  label?: string
  placeholder?: string
  onClientSelect: (client: Client | null) => void
  selectedClient?: Client | null
  required?: boolean
}

// Datos mock de clientes
const mockClients: Client[] = [
  { id: 1, name: "Juan Pérez", email: "juan@ejemplo.com", phone: "+1234567890", dni: "43604733", status: "active" },
  { id: 2, name: "María García", email: "maria@ejemplo.com", phone: "+1234567891", dni: "12345678", status: "active" },
  { id: 3, name: "Carlos López", email: "carlos@ejemplo.com", phone: "+1234567892", dni: "87654321", status: "inactive" },
  { id: 4, name: "Ana Martínez", email: "ana@ejemplo.com", phone: "+1234567893", dni: "11223344", status: "active" },
  { id: 5, name: "Roberto Sánchez", email: "roberto@ejemplo.com", phone: "+1234567894", dni: "55667788", status: "active" },
  { id: 6, name: "Laura Fernández", email: "laura@ejemplo.com", phone: "+1234567895", dni: "99887766", status: "active" },
  { id: 7, name: "Diego Rodríguez", email: "diego@ejemplo.com", phone: "+1234567896", dni: "44332211", status: "active" },
  { id: 8, name: "Sofía González", email: "sofia@ejemplo.com", phone: "+1234567897", dni: "77889900", status: "inactive" },
  { id: 9, name: "Miguel Torres", email: "miguel@ejemplo.com", phone: "+1234567898", dni: "11223355", status: "active" },
  { id: 10, name: "Carmen Ruiz", email: "carmen@ejemplo.com", phone: "+1234567899", dni: "66778899", status: "active" },
]

export function ClientAutocomplete({ 
  label = "Cliente", 
  placeholder = "Buscar cliente por nombre...", 
  onClientSelect, 
  selectedClient,
  required = false 
}: ClientAutocompleteProps) {
  const [inputValue, setInputValue] = useState("")
  const [filteredClients, setFilteredClients] = useState<Client[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Inicializar con cliente seleccionado
  useEffect(() => {
    if (selectedClient) {
      setInputValue(selectedClient.name)
    } else {
      setInputValue("")
    }
  }, [selectedClient])

  // Filtrar clientes basado en el input
  useEffect(() => {
    if (inputValue.trim().length === 0) {
      setFilteredClients([])
      setShowDropdown(false)
      return
    }

    const filtered = mockClients.filter(client =>
      client.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      client.email.toLowerCase().includes(inputValue.toLowerCase()) ||
      client.dni.includes(inputValue)
    )

    setFilteredClients(filtered)
    setShowDropdown(filtered.length > 0)
    setHighlightedIndex(-1)
  }, [inputValue])

  // Manejar selección de cliente
  const handleClientSelect = (client: Client) => {
    setInputValue(client.name)
    setShowDropdown(false)
    setHighlightedIndex(-1)
    onClientSelect(client)
  }

  // Manejar cambio en el input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    
    // Si se borra el input, limpiar selección
    if (value.trim().length === 0) {
      onClientSelect(null)
    }
  }

  // Manejar teclas del teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < filteredClients.length - 1 ? prev + 1 : prev
        )
        break
      case "ArrowUp":
        e.preventDefault()
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case "Enter":
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < filteredClients.length) {
          handleClientSelect(filteredClients[highlightedIndex])
        }
        break
      case "Escape":
        setShowDropdown(false)
        setHighlightedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-2 relative">
      <Label htmlFor="client-search">{label}</Label>
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            id="client-search"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (filteredClients.length > 0) {
                setShowDropdown(true)
              }
            }}
            placeholder={placeholder}
            required={required}
            className="pl-10"
          />
        </div>

        {/* Dropdown de sugerencias */}
        {showDropdown && filteredClients.length > 0 && (
          <Card 
            ref={dropdownRef}
            className="absolute z-50 w-full mt-1 max-h-60 overflow-y-auto border shadow-lg"
          >
            <CardContent className="p-0">
              {filteredClients.map((client, index) => (
                <div
                  key={client.id}
                  className={`p-3 cursor-pointer border-b last:border-b-0 transition-colors ${
                    index === highlightedIndex
                      ? "bg-primary/10 border-primary/20"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleClientSelect(client)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{client.name}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {client.email}
                          </div>
                          {client.phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {client.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <Badge 
                        variant={client.status === "active" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {client.status === "active" ? "Activo" : "Inactivo"}
                      </Badge>
                      <div className="text-xs text-muted-foreground font-mono">
                        DNI: {client.dni}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Cliente seleccionado */}
      {selectedClient && (
        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-medium">{selectedClient.name}</div>
                <div className="text-sm text-muted-foreground">
                  {selectedClient.email} • DNI: {selectedClient.dni}
                </div>
              </div>
            </div>
            <Badge 
              variant={selectedClient.status === "active" ? "default" : "secondary"}
            >
              {selectedClient.status === "active" ? "Activo" : "Inactivo"}
            </Badge>
          </div>
        </div>
      )}
    </div>
  )
}
