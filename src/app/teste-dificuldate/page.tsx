import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TESTES_DIFICULDADE } from "@/constants/teste-dificuldate";

export default function TestesDificuldadePage() {
  return (
    <div className="py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Testes de Dificuldade (DT)</h1>
      <p className="mb-6">
        Esta tabela serve como referência para determinar a dificuldade dos
        testes realizados pelos personagens. O Mestre deve adaptar os desafios
        de acordo com a situação narrativa e o contexto da aventura.
      </p>

      <Card className="overflow-x-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            Tabela de Referência para Testes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Grau</th>
                <th className="px-4 py-2 border">CD</th>
                <th className="px-4 py-2 border">Exemplo de Desafio</th>
              </tr>
            </thead>
            <tbody>
              {TESTES_DIFICULDADE.map((t) => (
                <tr key={t.grau} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{t.grau}</td>
                  <td className="px-4 py-2 border">{t.cd}</td>
                  <td className="px-4 py-2 border">{t.exemplo ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
