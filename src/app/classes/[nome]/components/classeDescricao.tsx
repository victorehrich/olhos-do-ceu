import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ClassesInterface } from "@/types/classes";
export function ClasseDescricao({
  classeNome,
  classe,
}: Readonly<{ classeNome: string; classe: ClassesInterface }>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{classeNome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h2 className="font-semibold">Domínio</h2>
          {typeof classe.dominio === "string" ? (
            <Badge>{classe.dominio}</Badge>
          ) : (
            <p>
              {classe.dominio.tipo}: {classe.dominio.atributos.join(" / ")}
            </p>
          )}
        </div>
        <Separator />
        <p className="text-muted-foreground">{classe.descrição}</p>
      </CardContent>
    </Card>
  );
}
