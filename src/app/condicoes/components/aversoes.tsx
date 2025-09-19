import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AVERSOES } from "@/constants/condicoes";

export function Aversoes() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Tabela de Aversões</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Rolar <strong>1d6</strong>. O resultado será equivalente à aversão
          obtida. As implicações devem ser discutidas de acordo com a gravidade
          da cena narrada. Necessário sempre consultar o mestre para garantir
          boa fluidez da mesa.
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          {AVERSOES.map((a) => (
            <li key={a.resultado}>
              <strong>{a.nome}</strong>: {a.descricao}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
