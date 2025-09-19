"use client";

import { useParams } from "next/navigation";
import { Classes } from "@/constants/classes";
import { Habilidades } from "./components/habilidades";
import { ClasseDescricao } from "./components/classeDescricao";

export default function ClassePage() {
  const { nome: rawNome } = useParams();
  const nome = decodeURIComponent(rawNome as string);
  const classe = Classes[nome as keyof typeof Classes];

  if (!classe) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Classe não encontrada - {nome}</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <ClasseDescricao classeNome={nome} classe={classe} />

      <Habilidades habilidades={classe.habilidades} />
    </div>
  );
}
