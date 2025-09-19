"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { FichaState } from "../types/state";
import { Classes } from "@/constants/classes";

export const CalculateStatus = ({
  formData,
}: Readonly<{ formData: FichaState }>) => {
  const atributosPrimarios = formData.atributos;
  const classeEscolhida = formData.classe;

  const pv = 20 + atributosPrimarios["Constituição"] * 2;
  const pm =
    (atributosPrimarios["Inteligência"] + atributosPrimarios["Sabedoria"]) * 2;
  let pontosDeDominio = 0;
  if (classeEscolhida) {
    const classeInfo = Classes[classeEscolhida];
    if (typeof classeInfo.dominio === "string") {
      pontosDeDominio = atributosPrimarios[classeInfo.dominio];
    } else if (
      "tipo" in classeInfo.dominio &&
      classeInfo.dominio.tipo === "Maior entre"
    ) {
      const valores = classeInfo.dominio.atributos.map(
        (attr) => atributosPrimarios[attr]
      );
      pontosDeDominio = Math.max(...valores);
    }
  }
  return { pv, pm, pontosDeDominio };
};

export function AtributosSecundariosForm({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  const [atributosSecundarios, setAtributosSecundarios] = useState({
    pontosVida: 20,
    pontosMagia: 0,
    pontosDeDominio: 0,
  });
  useEffect(() => {
    const atributosPrimarios = formData.atributos;
    const classeEscolhida = formData.classe;

    const pv = 20 + atributosPrimarios["Constituição"] * 2;

    const pm =
      (atributosPrimarios["Inteligência"] + atributosPrimarios["Sabedoria"]) *
      2;

    let pontosDeDominio = 0;

    if (classeEscolhida) {
      const classeInfo = Classes[classeEscolhida];

      if (typeof classeInfo.dominio === "string") {
        pontosDeDominio = atributosPrimarios[classeInfo.dominio];
      } else if (
        "tipo" in classeInfo.dominio &&
        classeInfo.dominio.tipo === "Maior entre"
      ) {
        const valores = classeInfo.dominio.atributos.map(
          (attr) => atributosPrimarios[attr]
        );
        pontosDeDominio = Math.max(...valores);
      }
    }

    setAtributosSecundarios({
      pontosVida: pv,
      pontosMagia: pm,
      pontosDeDominio,
    });
  }, [formData.atributos, formData.classe, setAtributosSecundarios]);

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Atributos Secundários</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <Label>Pontos de Vida (PV)</Label>
          <Input value={atributosSecundarios.pontosVida} disabled />
        </div>

        <div className="flex flex-col">
          <Label>Pontos de Magia (PM)</Label>
          <Input value={atributosSecundarios.pontosMagia} disabled />
        </div>

        <div className="flex flex-col">
          <Label>Pontos de Domínio</Label>
          <Input value={atributosSecundarios.pontosDeDominio} disabled />
        </div>
      </CardContent>
    </Card>
  );
}
