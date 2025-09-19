import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AttributosPrimarios } from "@/constants/atributos";
import { AtributosPrimariosNomes } from "@/types/atributos";
import { PericiasPorAtributo } from "./components/pericias-por-atributo";
export default function PericiasPage() {
  return (
    <div className="py-10 px-4 space-y-6">
      <h1 className="text-4xl font-bold mb-4">Perícias</h1>

      <p className="mb-4">
        As perícias são, em essência, a forma direta que o personagem tem de
        interagir com o mundo, sendo elas modificadas pelo valor de seu atributo
        principal quando o personagem realiza um teste de perícia.
      </p>
      <p className="mb-4">
        Todo personagem começa com proficiências iniciais em algumas perícias,
        indicando maior habilidade ao utilizá-las. No entanto, qualquer
        personagem pode tentar usar qualquer perícia, mesmo sem proficiência —
        apenas não recebe os benefícios associados. Com o uso frequente e
        criativo das perícias, é possível aprimorá-las e conquistar proficiência
        ao longo do tempo.
      </p>
      <p className="mb-4">
        Toda vez que o personagem alcança um crítico (20 natural no d20) ou
        utiliza a perícia de forma criativa ganhará uma marca. O acúmulo dessas
        marcas dá ao jogador a possibilidade de melhorar a proficiência do seu
        personagem nessas habilidades, como uma forma de “subir de nível”..
      </p>

      {/* Atributos */}
      {Object.keys(AttributosPrimarios).map((atributo) => (
        <PericiasPorAtributo
          key={atributo}
          atributo={atributo as AtributosPrimariosNomes}
        />
      ))}

      {/* Mecânica */}
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Mecânica de Perícias</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Teste de Perícia:</strong> 1d20 + Modificador do Atributo
            correspondente.
          </p>
          <p>
            <strong>Proficiência:</strong> Escolha 2 + INT de perícias para ser
            "treinado".
          </p>
          <p>
            <strong>Bônus de Proficiência:</strong> Se você for proficiente em
            uma perícia, você adiciona seu{" "}
            <strong>bônus de proficiência</strong> à rolagem. Este bônus aumenta
            com o uso das perícias, uma marca é dada ao jogador após um crítico,
            ou uso criativo da mecânica.
          </p>

          <table className="w-full border-collapse border border-gray-300 mt-4 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Nível de proficiência
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Marcas Necessárias
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Bônus de proficiência
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Inexperiente
                </td>
                <td className="border border-gray-300 px-2 py-1">0</td>
                <td className="border border-gray-300 px-2 py-1">+0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Treinado</td>
                <td className="border border-gray-300 px-2 py-1">2</td>
                <td className="border border-gray-300 px-2 py-1">+2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Proficiente
                </td>
                <td className="border border-gray-300 px-2 py-1">3</td>
                <td className="border border-gray-300 px-2 py-1">+3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Experiente</td>
                <td className="border border-gray-300 px-2 py-1">4</td>
                <td className="border border-gray-300 px-2 py-1">+4</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
