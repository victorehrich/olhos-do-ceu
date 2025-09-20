"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FichaState, HabilidadesState } from "../types/state";

export function HabilidadesForm({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  return (
    <div className="space-y-4">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg capitalize">Habilidades</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={formData.habilidades}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, habilidades: e.target.value }))
            }
            className="w-full border rounded p-2 text-sm min-h-[80px]"
          />
        </CardContent>
      </Card>
    </div>
  );
}
