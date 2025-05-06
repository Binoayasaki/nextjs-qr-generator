import { QRCodeCanvas } from "qrcode.react"; // 👈
import { QRCodeProps } from "@/types/qrProps";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export function QRCodeDisplay({
  url,
  title = "Mi código QR",
  size = 400,
  bgColor = "#ffffff",
  fgColor = "#000000",
  level = "L",
  imageSettings,
}: QRCodeProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="mx-auto">
        <QRCodeCanvas
          value={url || " "} // Evita error con valor vacío
          title={title}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
          level={level}
          imageSettings={
            imageSettings
              ? {
                  ...imageSettings,
                  x: undefined, // Valores por defecto
                  y: undefined,
                  excavate: imageSettings.excavate ?? false, // Asegura que excavate sea booleano
                }
              : undefined
          }
        />
      </CardContent>
    </Card>
  );
}
