"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { FichaState } from "../types/state";
import { CalculateStatus } from "./atributos-secundarios";

interface CombateFormProps {
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}

export function CombateForm({
  formData,
  setFormData,
}: Readonly<CombateFormProps>) {
  const status = CalculateStatus({ formData });
  const { pv: pvMax } = status;

  const defesaFisicaBase = 10 + formData.atributos["Constituição"];
  const defesaMagicaBase = 10 + formData.atributos["Sabedoria"];

  // Inicializa combate se ainda não existir
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      combate: {
        pontosVida:
          prev.combate?.pontosVida > pvMax
            ? pvMax
            : prev.combate?.pontosVida ?? pvMax,
        defesaFisica:
          prev.combate?.defesaFisica < defesaFisicaBase
            ? defesaFisicaBase
            : prev.combate?.defesaFisica ?? defesaFisicaBase,
        defesaMagica:
          prev.combate?.defesaMagica < defesaMagicaBase
            ? defesaMagicaBase
            : prev.combate?.defesaMagica ?? defesaMagicaBase,
      },
    }));
  }, [pvMax, defesaFisicaBase, defesaMagicaBase, setFormData]);

  // Atualiza valores de combate no estado da ficha
  const handleChange = (
    field: "pontosVida" | "defesaFisica" | "defesaMagica",
    value: number
  ) => {
    let newValue: number;
    if (field === "pontosVida") {
      newValue = Math.min(Math.max(value, 0), pvMax);
    } else if (field === "defesaFisica") {
      newValue = Math.max(value, defesaFisicaBase);
    } else {
      newValue = Math.max(value, defesaMagicaBase);
    }

    setFormData((prev) => ({
      ...prev,
      combate: {
        ...prev.combate,
        [field]: newValue,
      },
    }));
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Combate</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <Label>Pontos de Vida Atuais</Label>
          <Input
            type="number"
            min={0}
            max={pvMax}
            value={formData.combate?.pontosVida ?? pvMax}
            onChange={(e) => handleChange("pontosVida", Number(e.target.value))}
          />
          <small>{`Máximo: ${pvMax}`}</small>
        </div>

        <div className="flex flex-col">
          <Label>Defesa Física</Label>
          <Input
            type="number"
            min={defesaFisicaBase}
            value={formData.combate?.defesaFisica ?? defesaFisicaBase}
            onChange={(e) =>
              handleChange("defesaFisica", Number(e.target.value))
            }
          />
          <small>{`Mínimo: ${defesaFisicaBase}`}</small>
        </div>

        <div className="flex flex-col">
          <Label>Defesa Mágica</Label>
          <Input
            type="number"
            min={defesaMagicaBase}
            value={formData.combate?.defesaMagica ?? defesaMagicaBase}
            onChange={(e) =>
              handleChange("defesaMagica", Number(e.target.value))
            }
          />
          <small>{`Mínimo: ${defesaMagicaBase}`}</small>
        </div>
      </CardContent>
    </Card>
  );
}
