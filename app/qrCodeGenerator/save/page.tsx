"use client";

import SaveComponent from "@/components/save/saveComponent";
import { useEffect, useState } from "react";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { QRCodeProps } from "@/types/qrProps";
import { DrawerDemo } from "@/ui/drawer";

export default function Save() {
  const [qrData, setQrData] = useState<QRCodeProps | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("qrData");
    if (data) {
      setQrData(JSON.parse(data));
    }
  }, []);

  if (!qrData) return <p>No se encontró un código QR para descargar.</p>;

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 gap-4">
      <div className="w-full max-w-sm">
        <SaveComponent>
          <QRCodeDisplay {...qrData} />
        </SaveComponent>
      </div>
      <DrawerDemo />
    </div>
  );
}
