"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FichaState } from "../types/state";
import { AtributosPrimariosNomes } from "@/types/atributos";

const MAX_4 = 1; // máximo 1 atributo com valor 4
const MAX_3 = 2; // máximo 2 atributos com valor 3
const TOTAL_PONTOS = 6; // pontos adicionais para distribuir

export function AtributosPrimarios({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  // Função para atualizar atributo
  const updateAtributo = (nome: AtributosPrimariosNomes, valor: number) => {
    valor = Math.max(0, Math.min(valor, 4)); // limita entre 0 e 4
    const temp = { ...formData.atributos, [nome]: valor };

    // Valida regras
    const count4 = Object.values(temp).filter((v) => v === 4).length;
    const count3 = Object.values(temp).filter((v) => v === 3).length;
    const pontosDistribuidos = Object.values(temp).reduce(
      (acc, v) => acc + v - 1,
      0
    ); // subtraímos 1 ponto inicial

    if (count4 > MAX_4 || count3 > MAX_3 || pontosDistribuidos > TOTAL_PONTOS)
      return;

    setFormData((prev) => ({
      ...prev,
      atributos: temp,
    }));
  };

  return (
    <Card className="p-6 space-y-6">
      <CardHeader>
        <CardTitle className="text-2xl">Atributos Primários</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {Object.entries(formData.atributos).map(([nome, valor]) => (
          <div
            key={nome}
            className="flex flex-row justify-between items-center"
          >
            <Label className="w-full">{nome}</Label>
            <Input
              className="w-16"
              type="number"
              min={0}
              max={4}
              value={valor}
              onChange={(e) =>
                updateAtributo(
                  nome as AtributosPrimariosNomes,
                  Number(e.target.value)
                )
              }
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
