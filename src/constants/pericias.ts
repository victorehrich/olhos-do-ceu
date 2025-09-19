import { AtributosPrimariosNomes } from "@/types/atributos";
import { PericiaNome } from "@/types/pericias";

export type Pericia = {
  atributo: AtributosPrimariosNomes;
  descricao: string;
};

// Objeto de perícias
export const PERICIAS: Record<PericiaNome, Pericia> = {
  // FORÇA
  Atletismo: {
    atributo: "Força",
    descricao: "Para ações de força bruta.",
  },

  // DESTREZA
  Acrobacia: {
    atributo: "Destreza",
    descricao: "Para agilidade e equilíbrio.",
  },
  Furtividade: {
    atributo: "Destreza",
    descricao: "Para se mover em silêncio e se esconder.",
  },
  Prestidigitação: {
    atributo: "Destreza",
    descricao: "Para truques de mão, bater carteira, sabotar mecanismos.",
  },

  // INTELIGÊNCIA
  Percepção: {
    atributo: "Inteligência",
    descricao:
      "Para notar detalhes escondidos, ver emboscadas e ouvir sussurros.",
  },
  Investigação: {
    atributo: "Inteligência",
    descricao:
      "Para encontrar pistas, deduzir informações e analisar cenas de crime.",
  },
  História: {
    atributo: "Inteligência",
    descricao:
      "Para conhecimento sobre o passado, lendas e figuras importantes.",
  },

  // SABEDORIA
  Arcanismo: {
    atributo: "Sabedoria",
    descricao: "Para conhecimento sobre magia, criaturas mágicas e planos.",
  },
  Sobrevivência: {
    atributo: "Sabedoria",
    descricao:
      "Para rastrear, encontrar comida/água e resistir aos perigos da natureza.",
  },
  Intuição: {
    atributo: "Sabedoria",
    descricao:
      "Para sentir as intenções de alguém, detectar mentiras e pressentir perigos.",
  },

  // CARISMA
  Enganação: {
    atributo: "Carisma",
    descricao: "Para mentir e criar disfarces.",
  },
  Intimidação: {
    atributo: "Carisma",
    descricao: "Para coagir e ameaçar (pode usar Força em certas situações).",
  },
  Persuasão: {
    atributo: "Carisma",
    descricao:
      "Para convencer outros de forma honesta, negociar e fazer amigos.",
  },
};
