import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./toogle-theme";
import UserAvatar from "./avatar/avatar";

import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="flex justify-center mx-auto pb-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/qrCodeGenerator" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              qrGenerator
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/qrCodeGenerator/favorites" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Favs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <UserAvatar />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
