import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { QRCodeProps } from "@/types/qrProps";

export default function QrDataComponent({ qrData }: { qrData: QRCodeProps }) {
  return (
    <>
      {qrData.url && (
        <Card>
          <CardHeader>
            <CardTitle>Datos actuales:</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>{JSON.stringify(qrData, null, 2)}</pre>
          </CardContent>
        </Card>
      )}
    </>
  );
}
