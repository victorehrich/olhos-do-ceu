"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AtributosSecundarios,
  AttributosPrimarios,
} from "@/constants/atributos";

export default function AtributosPage() {
  return (
    <div className="py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Atributos do Personagem</h1>

      {/* Introdução */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Introdução</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Atributos são, em síntese, a forma que os dados vão ditar o seu
            jogo. Primeiramente vamos entender quais são e quais suas aplicações
            (item 1), e em seguida veremos os atributos secundários (item 2). A
            forma e regras necessárias para calcular todos esses atributos do
            personagem estarão no final deste capítulo (item 3).
          </p>
        </CardContent>
      </Card>

      {/* Atributos Primários */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Atributos Primários</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Os atributos primários definem a matemática do seu personagem e suas
            capacidades de interação com o mundo. Também podem ser chamados de{" "}
            <strong>Pontos de Domínio</strong> quando relacionados à classe.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            {Object.entries(AttributosPrimarios).map(
              ([nome, { abreviação, descrição }]) => (
                <li key={nome}>
                  <strong>
                    {nome} ({abreviação})
                  </strong>
                  {descrição && `: ${descrição}`}
                </li>
              )
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Atributos Secundários */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Atributos Secundários</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            {Object.entries(AtributosSecundarios).map(
              ([nome, { abreviação, descrição }]) => (
                <li key={nome}>
                  <strong>
                    {nome} {abreviação ? `(${abreviação})` : ""}
                  </strong>
                  {typeof descrição === "string" ? (
                    `: ${descrição}`
                  ) : (
                    <ul className="list-disc pl-6 mt-1">
                      {Object.entries(descrição).map(([subNome, subDesc]) => (
                        <li key={subNome}>
                          <strong>{subNome}</strong>: {subDesc}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Como Montar Ficha */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">
            Como montar uma ficha de atributo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Todos os atributos primários começam com valor 1.</li>
            <li>
              O jogador recebe 6 pontos para distribuir entre os atributos
              iniciais.
            </li>
            <li>O valor máximo de atributo no nível zero (inicial) é 4.</li>
            <li>É possível ter no máximo 1 atributo em 4.</li>
            <li>É possível ter no máximo 2 atributos em 3.</li>
            <li>
              É possível zerar no máximo 1 atributo para ganhar ponto extra,
              contanto que não quebre as regras acima.
              <ol className="list-disc pl-6 mt-1">
                <li>
                  Punição para atributo zerado: rolar 2 dados e considerar o
                  menor resultado.
                </li>
              </ol>
            </li>
            <li>
              A cada 2 níveis é possível aumentar 1 ponto de atributo inicial à
              sua escolha.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
