import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TRAUMAS } from "@/constants/condicoes";

export function Traumas() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Tabela de Traumas</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Rolar <strong>1d20</strong>. O resultado será equivalente ao trauma
          obtido. As implicações devem ser discutidas de acordo com a gravidade
          da cena narrada. Necessário sempre consultar o mestre para garantir
          boa fluidez da mesa.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {TRAUMAS.map((t) => (
            <li key={t.resultado}>
              <strong>{t.nome}</strong>: {t.descricao}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
