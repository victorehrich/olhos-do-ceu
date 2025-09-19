import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VENENOS } from "@/constants/condicoes";

export function Venenos() {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-2xl">Venenos</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 py-1 text-left">
                Tipo de Veneno
              </th>
              <th className="border border-gray-300 px-2 py-1 text-left">DT</th>
              <th className="border border-gray-300 px-2 py-1 text-left">
                Dano por Rodada
              </th>
            </tr>
          </thead>
          <tbody>
            {VENENOS.map((v) => (
              <tr key={v.nome}>
                <td className="border border-gray-300 px-2 py-1">{v.nome}</td>
                <td className="border border-gray-300 px-2 py-1">{v.dt}</td>
                <td className="border border-gray-300 px-2 py-1">
                  {v.danoPorRodada}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
