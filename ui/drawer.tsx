"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Click me!</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Hola!</DrawerTitle>
            <DrawerDescription>
              Aqui puedes descargar o guardar el qrCode que has generado.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-sm font-medium leading-none">
                La descargar se realizará en formato Canvas y es de libre uso.
              </p>
            </div>
            <div className="mt-3 h-[120px]">
              <p className="text-sm font-medium leading-none">
                Si decides guardar el qrCode podrás encontrarlo en la pestaña
                favs. Siempre y cuando hayas iniciado sesión en la app.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
