import { ARMAS } from "@/constants/arma";
import { ArmasTable } from "./components/table";

export default function ArmasPage() {
  const ARMAS_FORCA = ARMAS.filter((arma) => arma.atributo === "Força");
  const ARMAS_DESTREZA = ARMAS.filter((arma) => arma.atributo === "Destreza");

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Armas</h1>
      <p>
        Cada personagem inicia o jogo com 1 arma à escolha do jogador. Todas as
        armas iniciais estão disponíveis para qualquer classe ou nível de
        atributo. Durante o jogo, você poderá encontrar equipamentos melhores e
        adaptar esteticamente as armas.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Força (FOR)</h2>
        <ArmasTable armas={ARMAS_FORCA} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Destreza (DES)</h2>
        <ArmasTable armas={ARMAS_DESTREZA} />
      </div>
    </div>
  );
}
