"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";

import { FichaState } from "../types/state";
import { Arma } from "@/types/arma";
import { ARMAS } from "@/constants/arma";
import { AtributosPrimariosNomes } from "@/types/atributos";
import { AttributosPrimarios } from "@/constants/atributos";

export function ArmasForm({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  const [open, setOpen] = useState(false);
  const [dialogItem, setDialogItem] = useState<Arma | null>(null);

  const addArma = (nome: string) => {
    const [armaNome, atributo] = nome.split("%");
    if (
      !nome ||
      formData.armas?.some(
        (a) => a.nome === armaNome && a.atributo === atributo
      )
    )
      return;
    const arma = ARMAS.find(
      (a) => a.nome === armaNome && a.atributo === atributo
    );
    if (!arma) return;
    setFormData((prev) => ({
      ...prev,
      armas: [...(prev.armas || []), { ...arma }],
    }));
  };

  const removeArma = (arma: Arma) => {
    setFormData((prev) => ({
      ...prev,
      armas: (prev.armas || []).filter((a) => a !== arma),
    }));
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader
        className="flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Armas
        </CardTitle>
        {open ? <ChevronUp /> : <ChevronDown />}
      </CardHeader>

      {open && (
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Select onValueChange={(value) => addArma(value)}>
              <SelectTrigger className="w-64 truncate">
                <SelectValue placeholder="Selecione uma arma" />
              </SelectTrigger>
              <SelectContent>
                {ARMAS.map((arma) => (
                  <SelectItem
                    key={arma.nome + "%" + arma.atributo}
                    value={arma.nome + "%" + arma.atributo}
                  >
                    {arma.nome} - (
                    {AttributosPrimarios[arma.atributo].abreviação})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-2">
            {(formData.armas || []).map((arma) => (
              <Badge
                key={arma.nome + "%" + arma.atributo}
                variant="secondary"
                className="flex items-center gap-2 px-3 py-1 cursor-pointer max-w-[200px] truncate"
              >
                <span
                  onClick={() => setDialogItem(arma)}
                  className="flex-1 truncate"
                  title={arma.nome}
                >
                  {arma.nome}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeArma(arma);
                  }}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>

          {/* Dialog para detalhes da arma */}
          {dialogItem && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white rounded-md p-6 max-w-md w-full relative">
                <h2 className="text-xl font-semibold mb-2">
                  {dialogItem.nome}
                </h2>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Dano 1 mão:</strong> {dialogItem.dano1m}
                  </p>
                  <p>
                    <strong>Dano 2 mãos:</strong> {dialogItem.dano2m}
                  </p>
                  <p>
                    <strong>Sangramento:</strong> {dialogItem.sangramento}
                  </p>
                  <p>
                    <strong>Postura 2 mãos:</strong> {dialogItem.postura2m}
                  </p>
                </div>
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setDialogItem(null)}
                >
                  <X />
                </button>
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
