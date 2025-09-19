"use client";
import { useEffect, useState } from "react";
import { FichaState } from "./types/state";
import { FichaNavbar } from "./components/navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeaderForm } from "./components/header-form";
import { LOCALSTORAGE_KEY } from "@/constants/localstorage";
import useDebounce from "@/hooks/useDebounce";
import { AtributosPrimarios } from "./components/atributos-primarios";
import { initialState } from "./constants/state";
import { AtributosSecundariosForm } from "./components/atributos-secundarios";
import { CombateForm } from "./components/combate";
import { Foto } from "./components/foto";
import { CondicoesForm } from "./components/condicoes";

export default function Ficha() {
  const [formData, setFormData] = useState<FichaState>(initialState);
  const [history, setHistory] = useState<FichaState[]>([]);

  useEffect(() => {
    const mergeState = (saved: Partial<FichaState>): FichaState => {
      return {
        ...initialState,
        ...saved,
        atributos: {
          ...initialState.atributos,
          ...(saved.atributos || {}),
        },
      };
    };

    const saved = localStorage.getItem(LOCALSTORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const merged = mergeState(parsed);
      setFormData(merged);
      setHistory([merged]);
    } else {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(initialState));
    }
  }, []);

  const saveState = () => {
    setHistory((prev) => [...prev, formData]);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  };

  // Debounce: salva 500ms após última alteração
  useDebounce({ callback: saveState, delay: 500, dependencies: [formData] });

  return (
    <div className="mx-auto p-6 space-y-6">
      <Card className="p-6 space-y-6">
        <CardHeader>
          <FichaNavbar
            formData={formData}
            setFormData={setFormData}
            history={history}
            setHistory={setHistory}
            title={
              <CardTitle className="text-2xl">Ficha do Personagem</CardTitle>
            }
          />
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <HeaderForm formData={formData} setFormData={setFormData} />
          <AtributosPrimarios formData={formData} setFormData={setFormData} />
          <div className="flex flex-col gap-12">
            <AtributosSecundariosForm
              formData={formData}
              setFormData={setFormData}
            />
            <CombateForm formData={formData} setFormData={setFormData} />
          </div>
          <CondicoesForm formData={formData} setFormData={setFormData} />
        </CardContent>
      </Card>
    </div>
  );
}
