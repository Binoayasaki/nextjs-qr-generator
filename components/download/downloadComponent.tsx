"use client";
import { toPng } from "html-to-image";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DownloadQR({ children }: { children: React.ReactNode }) {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (qrRef.current === null) return;

    try {
      const dataUrl = await toPng(qrRef.current, {
        skipFonts: true,
      });
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error al generar imagen:", error);
    }
  };

  return (
    <Card className="border-none justify-center items-center">
      <CardHeader className="text-center w-full">
        <CardTitle>Descargar Qr</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={qrRef}>{children}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="cursor-pointer" onClick={handleDownload}>
          Descargar
        </Button>
      </CardFooter>
    </Card>
  );
}
