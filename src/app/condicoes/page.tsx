"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AVERSOES, CONDICOES, TRAUMAS, VENENOS } from "@/constants/condicoes";
import { Aversoes } from "./components/aversoes";
import { Traumas } from "./components/traumas";
import { Venenos } from "./components/venenos";
import { Condicoes } from "./components/condicoes";

export default function CondicoesPage() {
  return (
    <div className="py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Condições</h1>
      <p>
        Condições e traumas são características adquiridas durante o jogo. Este
        capítulo não é relevante para a criação de ficha de personagem, mas deve
        ser usado para acompanhar o jogo e entender como cada item afeta seu
        personagem narrativamente e fisicamente.
      </p>

      {/* Condições */}
      <Condicoes />

      {/* Venenos */}
      <Venenos />

      {/* Traumas */}
      <Traumas />

      {/* Aversões */}
      <Aversoes />
    </div>
  );
}
