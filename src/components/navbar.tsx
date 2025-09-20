"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as Toggle from "@/components/Toggle";
export function ClientNavbar() {
  const pathname = usePathname();

  const routes = [
    { name: "Ficha", href: "/ficha" },
    { name: "Condições", href: "/condicoes" },
    { name: "Classes", href: "/classes" },
    { name: "Perícias", href: "/pericias" },
    { name: "Atributos", href: "/atributos" },
    { name: "Teste de Dificuldade", href: "/teste-dificuldate" },
  ];

  return (
    <header className="border-b">
      <nav className="px-7 py-2 flex md:justify-between justify-center items-center w-full">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-col md:flex-row gap-2 w-full">
            {routes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={route.href}
                    className={`px-3 py-1 rounded ${
                      pathname === route.href ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    {route.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <Toggle.Color />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
