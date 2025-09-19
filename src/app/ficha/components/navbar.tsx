"use client";

import { JSX, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FichaState } from "../types/state";
import { LOCALSTORAGE_KEY } from "@/constants/localstorage";
import { initialState } from "../constants/state";
import { Foto } from "./foto";

interface NavbarProps {
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
  history: FichaState[];
  setHistory: React.Dispatch<React.SetStateAction<FichaState[]>>;
  title?: JSX.Element | string;
}

export function FichaNavbar({
  formData,
  setFormData,
  history,
  setHistory,
  title,
}: Readonly<NavbarProps>) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUndo = () => {
    if (history.length <= 1) return; // nada para desfazer

    // Remove o último estado (o atual) e pega o anterior
    const newHistory = [...history];
    newHistory.pop();
    const previous = newHistory[newHistory.length - 1];

    // Atualiza o formulário e o histórico
    setFormData(previous);
    setHistory(newHistory);

    // Atualiza localStorage
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(previous));
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.nomePersonagem || "ficha_personagem"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);

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

        setFormData(mergeState(json));
        setHistory([mergeState(json)]);
        localStorage.setItem(
          LOCALSTORAGE_KEY,
          JSON.stringify(mergeState(json))
        );
      } catch (error) {
        console.error("Arquivo JSON inválido", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 mb-4">
      <div className="flex items-center gap-4">
        <Foto formData={formData} setFormData={setFormData} />

        {title}
      </div>
      <div className="flex gap-2">
        <Button className="cursor-pointer" onClick={handleExport}>
          📤 Exportar JSON
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          📥 Importar JSON
        </Button>
        <Button className="cursor-pointer" onClick={handleUndo}>
          ↺ Voltar última alteração
        </Button>
      </div>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImport}
      />
    </div>
  );
}
