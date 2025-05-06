"use client";

import { useState } from "react";
import { QRForm } from "@/components/form/formComponent";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { QRCodeProps } from "@/types/qrProps";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import QrDataComponent from "@/components/qrData/qrDataComponent";

export default function QRGenerator() {
  const [qrData, setQrData] = useState<QRCodeProps>({
    url: "https://ejemplo.com",
    title: "Mi código QR",
    size: 128,
    bgColor: "#ffffff",
    fgColor: "#000000",
    level: "L",
  });

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <QRForm onSubmit={setQrData} defaultValues={qrData} />
        </SidebarContent>
      </Sidebar>
      <div className="flex items-center justify-center flex-col gap-4 p-2 mx-auto max-w-sm w-full ">
        <QRCodeDisplay {...qrData} />
        <QrDataComponent qrData={qrData} />
        <div className="flex gap-6">
          <Button
            onClick={() => {
              localStorage.setItem("qrData", JSON.stringify(qrData));
            }}
          >
            <Link href="/qrCodeGenerator/downloader">Descargar</Link>
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("qrData", JSON.stringify(qrData));
            }}
          >
            <Link href="/qrCodeGenerator/save">Guardar</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
