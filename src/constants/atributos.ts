import {
  AtributosPrimariosNomes,
  AtributosSecundariosNomes,
} from "@/types/atributos";

export const AttributosPrimarios: Record<
  AtributosPrimariosNomes,
  { abreviação: string; descrição?: string }
> = {
  Força: {
    abreviação: "FOR",
    descrição:
      "Relacionado a: Poder físico, dano corpo a corpo, testes de esforço físico.",
  },
  Destreza: {
    abreviação: "DES",
    descrição:
      "Relacionado a: Reflexos, esquiva, furtividade, ataque à distância.",
  },
  Constituição: {
    abreviação: "CON",
    descrição:
      "Relacionado a: Resistência física, fadiga, doenças, base dos PV.",
  },
  Inteligência: {
    abreviação: "INT",
    descrição:
      "Relacionado a: Lógica, memória, magia, investigação. (Fortemente ligado ao que pode ser racionalizado e manipulado por mãos humanas).",
  },
  Sabedoria: {
    abreviação: "SAB",
    descrição:
      "Relacionado a: Intuição, percepção, resistência mental, leitura da realidade. (Fortemente ligado ao oculto e ao que está além do compreensível).",
  },
  Carisma: {
    abreviação: "CAR",
    descrição: "Relacionado a: Persuasão, liderança, manipulação social.",
  },
};

export const AtributosSecundarios: Record<
  AtributosSecundariosNomes,
  { abreviação?: string; descrição: string | Record<string, string> }
> = {
  "Pontos de Vida": {
    abreviação: "PV",
    descrição: {
      "Pontos Iniciais": `Calculado por (20 + (${AttributosPrimarios["Constituição"].abreviação} × 2))`,
      "Ganhos por Nível": `+4 PV por nível`,
    },
  },
  "Pontos de Magia": {
    abreviação: "PM",
    descrição: {
      "Pontos Iniciais": `Calculado por (${AttributosPrimarios["Inteligência"].abreviação} + ${AttributosPrimarios["Sabedoria"].abreviação}) × 2)`,
      "Ganhos por Nível": `+2 PM por nível`,
    },
  },
  Iniciativa: {
    descrição: `Calculado por: 1d20 + ${AttributosPrimarios["Destreza"].abreviação}. Calculado antes do combate.`,
  },
  Ataque: {
    descrição:
      "Calculado por 1d20 + atributo base da arma + modificador da arma. Calculado durante o combate.",
  },
  Defesa: {
    descrição: {
      "Defesa Física": `Calculado por 10 + ${AttributosPrimarios["Constituição"].abreviação} + Modificadores (ex.: armaduras).`,
      "Defesa Mágica": `Calculado por 10 + ${AttributosPrimarios["Sabedoria"].abreviação} + Modificadores (ex.: artefatos mágicos de proteção).`,
      Esquiva: `Calculado por 1d20 + ${AttributosPrimarios["Destreza"].abreviação}. Calculado durante o combate.`,
      "Defesa Contra Corrupção Mental": `Calculado por 10 + ${AttributosPrimarios["Sabedoria"].abreviação}.`,
    },
  },
};
