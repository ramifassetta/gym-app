"use client"

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  X,
  Download,
  Printer,
  Send,
  FileText,
  Calendar,
  Loader2
} from "lucide-react";

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface Invoice {
  id: string;
  client: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: string;
  status: string;
  date: string;
  method: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  dueDate: string;
  invoiceNumber: string;
}

interface ViewInvoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoice: Invoice | null;
  onDownload?: (invoiceId: string) => void;
  onPrint?: (invoiceId: string) => void;
  onSend?: (invoiceId: string) => void;
}

export function ViewInvoiceModal({
  open,
  onOpenChange,
  invoice,
  onDownload,
  onPrint,
  onSend
}: ViewInvoiceModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  if (!invoice) return null;

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
      case "pending":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
      case "failed":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      default:
        return "default"
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado"
      case "pending":
        return "Pendiente"
      case "failed":
        return "Fallido"
      default:
        return status
    }
  };

  const handleAction = async (action: 'download' | 'print' | 'send') => {
    setIsLoading(true);
    
    setTimeout(() => {
      switch (action) {
        case 'download':
          onDownload?.(invoice.id);
          break;
        case 'print':
          onPrint?.(invoice.id);
          break;
        case 'send':
          onSend?.(invoice.id);
          break;
      }
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Factura #{invoice.invoiceNumber}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 flex-1 overflow-y-auto pr-2">
          {/* Información básica */}
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={invoice.client.avatar} alt={invoice.client.name} />
                      <AvatarFallback>
                        {invoice.client.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{invoice.client.name}</h3>
                      <p className="text-sm text-muted-foreground">{invoice.client.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Estado:</span>
                    <Badge className={getStatusVariant(invoice.status)}>
                      {getStatusText(invoice.status)}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Fecha:</span>
                    <span className="text-sm font-medium">{invoice.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Método de pago:</span>
                    <span className="text-sm font-medium">{invoice.method}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detalles de la factura */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Detalles de la Factura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Tabla de items */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/20 px-4 py-3 grid grid-cols-12 gap-4 text-sm font-medium">
                    <div className="col-span-6">Descripción</div>
                    <div className="col-span-2 text-center">Cantidad</div>
                    <div className="col-span-2 text-right">Precio Unit.</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  {invoice.items && invoice.items.length > 0 ? (
                    invoice.items.map((item) => (
                      <div key={item.id} className="px-4 py-3 grid grid-cols-12 gap-4 text-sm border-t">
                        <div className="col-span-6">{item.description || 'Sin descripción'}</div>
                        <div className="col-span-2 text-center">{item.quantity || 0}</div>
                        <div className="col-span-2 text-right">€{(item.unitPrice || 0).toFixed(2)}</div>
                        <div className="col-span-2 text-right font-medium">€{(item.total || 0).toFixed(2)}</div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-muted-foreground">
                      No hay items en esta factura
                    </div>
                  )}
                </div>

                {/* Totales */}
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span>€{(invoice.subtotal || 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">IVA (21%):</span>
                      <span>€{(invoice.tax || 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>{invoice.amount || '€0.00'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acciones */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => handleAction('download')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                  Descargar PDF
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => handleAction('print')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Printer className="h-4 w-4" />
                  )}
                  Imprimir
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => handleAction('send')}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Enviar por Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
