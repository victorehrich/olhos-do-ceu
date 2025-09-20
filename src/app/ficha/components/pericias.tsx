"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FichaState, PericiaState } from "../types/state";
import {
  PERICIAS,
  PROF_BONUS,
  PROF_LABELS,
  REQUIRED_MARKS,
} from "@/constants/pericias";
import { ProeficienciaNivel } from "@/types/pericias";

export function PericiasForm({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  const skillNames = Object.keys(PERICIAS) as Array<keyof typeof PERICIAS>;

  const changeMarks = (nome: keyof typeof PERICIAS, delta: number) => {
    setFormData((prev) => {
      const atual: PericiaState = prev.pericias?.[nome] ?? {
        nivel: 0,
        marcas: 0,
      };
      let { nivel, marcas } = atual;

      // Bloqueia remoção se nível 0
      if (nivel === 0 && delta < 0 && marcas === 0) return prev;

      // Bloqueia adição se nível máximo (3)
      if (nivel === 3 && delta > 0) return prev;

      marcas += delta;

      // sobe nível automaticamente
      while (nivel < 3 && marcas >= REQUIRED_MARKS[nivel]) {
        marcas -= REQUIRED_MARKS[nivel];
        nivel += 1 as ProeficienciaNivel;
      }

      // desce nível se marcas ficarem negativas
      while (nivel > 0 && marcas < 0) {
        nivel -= 1 as ProeficienciaNivel;
        marcas += REQUIRED_MARKS[nivel as ProeficienciaNivel];
      }

      // não permitir nível negativo
      if (nivel < 0) {
        nivel = 0;
        marcas = 0;
      }

      return {
        ...prev,
        pericias: {
          ...prev.pericias,
          [nome]: { nivel, marcas },
        },
      };
    });
  };

  return (
    <Card className="p-6 space-y-6">
      <CardHeader>
        <CardTitle className="text-2xl">Perícias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skillNames.map((nome, index) => {
            const { atributo, descricao } = PERICIAS[nome];
            const atual: PericiaState = formData.pericias?.[nome] ?? {
              nivel: 0,
              marcas: 0,
            };
            const atributoValor = formData.atributos?.[atributo] ?? 0;
            const bonusFinal = atributoValor + PROF_BONUS[atual.nivel];

            return (
              <div key={nome} className="w-full">
                {index > 0 && <hr className="my-2 w-full border-t" />}
                <div className="p-3 flex flex-col gap-3">
                  <div className="flex flex-col md:flex-row items-start justify-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row items-center gap-3">
                        <h3 className="font-semibold">{nome}</h3>
                        <span className="text-sm text-muted-foreground">
                          ({atributo})
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{descricao}</p>
                    </div>

                    <div className="flex flex-col md:items-end gap-2 w-48">
                      <div className="text-sm">
                        <strong>Nível:</strong> {PROF_LABELS[atual.nivel]}{" "}
                        {atual.nivel > 0 ? `(+${PROF_BONUS[atual.nivel]})` : ""}
                      </div>
                      <div className="text-sm">
                        <strong>Bônus total:</strong>{" "}
                        <span className="font-medium">
                          {bonusFinal >= 0 ? "+" : ""}
                          {bonusFinal}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Marcas */}
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <Label className="text-sm mb-0">Marcas</Label>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => changeMarks(nome, -1)}
                        >
                          -
                        </Button>
                        <div className="px-2 py-1 border rounded text-sm w-10 text-center">
                          {atual.marcas}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => changeMarks(nome, +1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Próximo nível visual */}
                    {atual.nivel < 3 ? (
                      <div className="text-sm text-gray-600">
                        Próx:{" "}
                        {PROF_LABELS[(atual.nivel + 1) as ProeficienciaNivel]} •
                        Necessário: {REQUIRED_MARKS[atual.nivel]}
                      </div>
                    ) : (
                      <div className="text-sm text-green-600">Máximo</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
