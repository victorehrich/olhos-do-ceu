"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AttributosPrimarios } from "@/constants/atributos";
import { PERICIAS } from "@/constants/pericias";
import { AtributosPrimariosNomes } from "@/types/atributos";

export function PericiasPorAtributo({
  atributo,
}: Readonly<{ atributo: AtributosPrimariosNomes }>) {
  const lista = Object.entries(PERICIAS).filter(
    ([, p]) => p.atributo === atributo
  );

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">
          {atributo} ({AttributosPrimarios[atributo].abreviação})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc ml-5 space-y-2">
          {lista.map(([nome, p]) => (
            <li key={nome}>
              <strong>{nome}:</strong> {p.descricao}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
