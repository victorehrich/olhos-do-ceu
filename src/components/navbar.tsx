"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function ClientNavbar() {
  const pathname = usePathname();

  const routes = [
    { name: "Ficha", href: "/ficha" },
    { name: "Condições", href: "/condicoes" },
    { name: "Classes", href: "/classes" },
    { name: "Perícias", href: "/pericias" },
    { name: "Atributos", href: "/atributos" },
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
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
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
