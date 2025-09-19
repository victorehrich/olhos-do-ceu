interface HabilidadeBase {
  nome: string;
  custo?: string;
  "pre-requisito"?: string;
  duração?: string;
  alcance?: string;
}

interface HabilidadeTexto extends HabilidadeBase {
  efeito: string;
}

interface HabilidadeComEfeitos extends HabilidadeBase {
  efeito: {
    descrição: string;
    sucesso: string;
    falha: string;
  };
}

interface HabilidadeComMultiplasEscolhas extends HabilidadeBase {
  efeito: {
    descrição: string;
    escolhas: Record<string, string>;
  };
}

interface HanilidateComMultiplosEfeitos extends HabilidadeBase {
  efeito: {
    descrição: string;
    efeitos: Array<
      | string
      | HabilidadeTexto
      | HabilidadeComEfeitos
      | HabilidadeComMultiplasEscolhas
    >;
  };
}

export type Habilidade =
  | HabilidadeTexto
  | HabilidadeComEfeitos
  | HabilidadeComMultiplasEscolhas
  | HanilidateComMultiplosEfeitos;
