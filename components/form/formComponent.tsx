import { useForm } from "react-hook-form";
import { QRCodeProps } from "@/types/qrProps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QRFormProps {
  onSubmit: (data: QRCodeProps) => void;
  defaultValues?: Partial<QRCodeProps>;
}

export function QRForm({ onSubmit, defaultValues }: QRFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QRCodeProps>({ defaultValues });

  return (
    <Card style={{ width: "100%", border: "none" }}>
      <CardHeader>
        <CardTitle>Generador de Códigos QR</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* URL */}
          <div className="space-y-2">
            <Label htmlFor="url">URL*</Label>
            <Input
              id="url"
              {...register("url", { required: "Este campo es obligatorio" })}
              placeholder="https://ejemplo.com"
            />
            {errors.url && (
              <p className="text-sm font-medium text-destructive">
                {errors.url.message}
              </p>
            )}
          </div>

          {/* Título */}
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" {...register("title")} />
          </div>

          {/* Tamaño */}
          <div className="space-y-2">
            <Label htmlFor="size">Tamaño (px)</Label>
            <Input
              id="size"
              type="number"
              {...register("size", { valueAsNumber: true })}
            />
          </div>

          {/* Colores */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bgColor">Color de fondo</Label>
              <Input
                id="bgColor"
                type="color"
                className="h-10 w-full p-1"
                {...register("bgColor")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fgColor">Color del código</Label>
              <Input
                id="fgColor"
                type="color"
                className="h-10 w-full p-1"
                {...register("fgColor")}
              />
            </div>
          </div>

          {/* Nivel de corrección */}
          <div className="space-y-2">
            <Label htmlFor="level">Nivel de corrección</Label>
            <Select {...register("level")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L">Bajo (7%)</SelectItem>
                <SelectItem value="M">Medio (15%)</SelectItem>
                <SelectItem value="Q">Alto (25%)</SelectItem>
                <SelectItem value="H">Máximo (30%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Configuración de imagen */}
          <Card className="mt-6">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium">
                Imagen central (opcional)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imageSrc">URL de la imagen</Label>
                <Input
                  id="imageSrc"
                  {...register("imageSettings.src")}
                  placeholder="https://ejemplo.com/logo.png"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="imageWidth">Ancho (px)</Label>
                  <Input
                    id="imageWidth"
                    type="number"
                    {...register("imageSettings.width", {
                      valueAsNumber: true,
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageHeight">Alto (px)</Label>
                  <Input
                    id="imageHeight"
                    type="number"
                    {...register("imageSettings.height", {
                      valueAsNumber: true,
                    })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full mt-6">
            Generar QR
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
