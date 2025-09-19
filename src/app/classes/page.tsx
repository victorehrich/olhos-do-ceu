"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Classes } from "@/constants/classes";
import { Descricao } from "./components/descricao";

export default function ClassesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Classes</h1>
      <Descricao className="mb-8" />
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(Classes).map(([nome, classe]) => (
          <Link
            key={nome}
            href={`/classes/${nome}`}
            className="hover:scale-105 transition-transform"
          >
            <Card className="cursor-pointer h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{nome}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="font-semibold">Domínio: </span>
                  {typeof classe.dominio === "string" ? (
                    <Badge>{classe.dominio}</Badge>
                  ) : (
                    <Badge>
                      <span>
                        {classe.dominio.tipo}:{" "}
                        {classe.dominio.atributos.join(" / ")}
                      </span>
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {classe.descrição}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
