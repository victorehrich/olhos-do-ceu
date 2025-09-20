import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Arma } from "@/types/arma";

export function ArmasTable({ armas }: Readonly<{ armas: Arma[] }>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {armas.map((arma) => (
        <Card key={arma.nome}>
          <CardHeader>
            <CardTitle>{arma.nome}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <p>
              <strong>Dano 1 mão:</strong> {arma.dano1m}
            </p>
            <p>
              <strong>Dano 2 mãos:</strong> {arma.dano2m}
            </p>
            <p>
              <strong>Sangramento:</strong> {arma.sangramento}
            </p>
            <p>
              <strong>Postura (2 mãos):</strong> {arma.postura2m}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
