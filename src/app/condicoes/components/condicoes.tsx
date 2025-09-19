import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONDICOES } from "@/constants/condicoes";

export function Condicoes() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Condições</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="list-disc pl-6 space-y-4">
          {CONDICOES.map(({ nome, descricao, efeito, dt, acumuloMaximo }) => (
            <li key={nome}>
              <strong>{nome}</strong>{" "}
              {dt &&
                `(DT: ${dt}${
                  acumuloMaximo ? ` | Acúmulo Máximo: ${acumuloMaximo}` : ""
                })`}
              <div className="ml-4 mt-1">
                <p>
                  <em>Descrição:</em> {descricao}
                </p>
                <p>
                  <em>Efeito:</em> {efeito}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
