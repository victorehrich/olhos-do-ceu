// Tipo para a Dificuldade (DT)
export type Dificuldade = "Fácil" | "Moderado" | "Variável";

// Interface principal
export interface Condicao {
  nome: string;
  tipo: "narrativo" | "mecânico" | "outro" | "não especificado"; // ajustável
  descricao: string;
  efeito: string;
  dt: Dificuldade;
  acumuloMaximo?: number | "-" | "consultar ficha"; // pode ser número ou vazio
}

export type DificuldadeVeneno = "Muito Fácil" | "Fácil" | "Médio" | "Épico";

// Interface para venenos
export interface TipoVeneno {
  nome: string;
  dt: DificuldadeVeneno;
  danoPorRodada: number | "Total"; // alguns são valor fixo, outros absolutos
}

export interface Trauma {
  resultado: number; // valor do dado (1d20)
  nome: string;
  descricao: string;
}

export interface Aversao {
  resultado: number; // valor do dado (1d6)
  nome: string;
  descricao: string;
}
