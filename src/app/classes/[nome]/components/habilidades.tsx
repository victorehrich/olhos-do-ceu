import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Habilidade } from "@/types/habilidades";
export function Habilidades({
  habilidades,
}: Readonly<{ habilidades: Habilidade[] }>) {
  const renderEfeito = (efeito: any) => {
    if (typeof efeito === "string") {
      return <p>{efeito}</p>;
    }

    if ("escolhas" in efeito) {
      return (
        <div>
          <p className="font-medium">{efeito.descrição}</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {Object.entries(efeito.escolhas).map(([k, v]) => (
              <li key={k}>
                <span className="font-semibold">{k}: </span>
                {String(v)}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if ("efeitos" in efeito) {
      return (
        <div>
          <p className="font-medium">{efeito.descrição}</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {efeito.efeitos.map((ef: any, i: number) => (
              <li key={i}>
                {typeof ef === "string" ? ef : JSON.stringify(ef)}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if ("sucesso" in efeito && "falha" in efeito) {
      return (
        <div>
          <p className="font-medium">{efeito.descrição}</p>
          <p>
            <span className="font-semibold">Sucesso:</span> {efeito.sucesso}
          </p>
          <p>
            <span className="font-semibold">Falha:</span> {efeito.falha}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <Tabs defaultValue={habilidades[0]?.nome}>
      <TabsList className="flex flex-wrap gap-2">
        {habilidades.map((h) => (
          <TabsTrigger key={h.nome} value={h.nome} className="cursor-pointer">
            {h.nome}
          </TabsTrigger>
        ))}
      </TabsList>

      {habilidades.map((h) => (
        <TabsContent key={h.nome} value={h.nome}>
          <Card>
            <CardHeader>
              <CardTitle>{h.nome}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {h.custo && (
                <p>
                  <span className="font-semibold">Custo: </span>
                  {h.custo}
                </p>
              )}
              {h["pre-requisito"] && (
                <p>
                  <span className="font-semibold">Pré-requisito: </span>
                  {h["pre-requisito"]}
                </p>
              )}
              {h.duração && (
                <p>
                  <span className="font-semibold">Duração: </span>
                  {h.duração}
                </p>
              )}
              {h.alcance && (
                <p>
                  <span className="font-semibold">Alcance: </span>
                  {h.alcance}
                </p>
              )}
              <Separator />
              {renderEfeito(h.efeito)}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
