"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FilterOption {
  value: string
  label: string
  count: number
}

interface FilterGroup {
  title: string
  key: string
  options: FilterOption[]
}

interface CompactFilterDropdownProps {
  filterGroups: FilterGroup[]
  selectedFilters: Record<string, string>
  onFilterChange: (key: string, value: string) => void
  onClearAll: () => void
}

export function CompactFilterDropdown({
  filterGroups,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: CompactFilterDropdownProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const hasActiveFilters = Object.values(selectedFilters).some(value => value !== "")
  const activeFiltersCount = Object.values(selectedFilters).filter(value => value !== "").length

  const handleFilterSelect = (key: string, value: string) => {
    onFilterChange(key, value)
    setOpenGroup(null)
  }

  const handleClearFilter = (key: string) => {
    onFilterChange(key, "")
  }

  const getFilterLabel = (key: string) => {
    const group = filterGroups.find(g => g.key === key)
    if (!group) return ""
    
    const selectedValue = selectedFilters[key]
    const option = group.options.find(opt => opt.value === selectedValue)
    return option?.label || ""
  }

  return (
    <div className="flex items-center gap-2">
      {/* Filtros activos */}
      {hasActiveFilters && (
        <div className="flex items-center gap-1">
          {Object.entries(selectedFilters).map(([key, value]) => {
            if (!value) return null
            return (
              <Badge
                key={key}
                variant="secondary"
                className="flex items-center gap-1 px-2 py-1 text-xs"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {filterGroups.find(g => g.key === key)?.title}:
                </span>
                {getFilterLabel(key)}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                  onClick={() => handleClearFilter(key)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )
          })}
          <Button
            variant="ghost"
            size="sm"
            className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
            onClick={onClearAll}
          >
            Limpiar todo
          </Button>
        </div>
      )}

      {/* Dropdown de filtros */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-9 px-3 border-primary/20 hover:border-primary/40 transition-all duration-300",
              hasActiveFilters && "border-primary/40 bg-primary/5"
            )}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtros
            {activeFiltersCount > 0 && (
              <Badge
                variant="secondary"
                className="ml-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Filtros</span>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs"
                onClick={onClearAll}
              >
                Limpiar todo
              </Button>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          {filterGroups.map((group) => (
            <DropdownMenuGroup key={group.key}>
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                {group.title}
              </DropdownMenuLabel>
              {group.options.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleFilterSelect(group.key, option.value)}
                >
                  <span className="flex-1">{option.label}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {option.count}
                    </Badge>
                    {selectedFilters[group.key] === option.value && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
              {group.options.length > 1 && (
                <DropdownMenuItem
                  className="text-xs text-muted-foreground cursor-pointer"
                  onClick={() => handleFilterSelect(group.key, "")}
                >
                  Mostrar todos
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
