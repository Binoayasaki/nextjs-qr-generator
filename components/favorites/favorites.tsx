"use client";

import useSWR from "swr";
import { QRCodeDisplay } from "@/components/qrCode/qrCodeComponent";
import { SavedQRCode } from "@/types/qrSaves";
import DeleteBtn from "../delete/deleteFavBtn";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function FavoritosQR() {
  const { data, error, isLoading } = useSWR<SavedQRCode[]>(
    "/api/qrcode",
    fetcher
  );

  if (isLoading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p>Error al cargar los códigos QR</p>;

  return (
    <>
      {data?.map((qr) => (
        <div
          className="flex flex-col justify-center items-center gap-4"
          key={qr.id}
        >
          <QRCodeDisplay
            key={qr.id}
            url={qr.content}
            title={qr.label}
            size={qr.size}
            bgColor={qr.bgColor}
            fgColor={qr.fgColor}
            level={qr.level}
          />
          <DeleteBtn
            qr={qr}
            onDelete={() => {
              console.log("Borrando");
            }}
          />
        </div>
      ))}
    </>
  );
}
