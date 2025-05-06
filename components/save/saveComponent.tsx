"use client";

import { useState } from "react";
import { createQRCode } from "@/lib/createQrCode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import React, { useRef } from "react";
import { toast } from "sonner";

interface Message {
  text: string;
  type?: "error" | "success"; // determina el color del Alert
}

export default function SaveComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("");
  const [message, setMessage] = useState<Message | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const qr = await createQRCode({
        content,
        label,
        size: 256,
        bgColor: "#ffffff",
        fgColor: "#000000",
        level: "M",
      });

      setMessage({ text: "QR guardado con éxito", type: "success" });
      console.log("QR creado:", qr);
    } catch {
      setMessage({ text: "Error al guardar el QR", type: "error" });
    }
  };

  return (
    <>
      <div className="mx-auto mb-4" ref={qrRef}>
        {children}
      </div>
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Guardar QR</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Campo de contenido */}
            <div className="space-y-4">
              <Label htmlFor="content">Contenido del QR *</Label>
              <Input
                id="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Ej: https://google.com"
                required
              />
            </div>

            {/* Campo de etiqueta opcional */}
            <div className="space-y-4">
              <Label htmlFor="label">Nombre descriptivo (opcional)</Label>
              <Input
                id="label"
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Ej: Mi QR personal"
              />
            </div>

            {/* Mensaje de estado */}
            {message && (
              <Alert
                variant={message.type === "error" ? "destructive" : "default"}
              >
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
          </CardContent>

          <CardFooter>
            <Button
              onClick={() =>
                toast("Qr guardado con exito!", {
                  description: "Puedes ver tus qr guardados en la pestaña Favs",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
              type="submit"
              className="w-full cursor-pointer"
            >
              Guardar QR
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
