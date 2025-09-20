import { AtributosPrimariosNomes } from "./atributos";

export type PericiaNome =
  | "Atletismo"
  | "Acrobacia"
  | "Furtividade"
  | "Prestidigitação"
  | "Percepção"
  | "Investigação"
  | "História"
  | "Arcanismo"
  | "Sobrevivência"
  | "Intuição"
  | "Enganação"
  | "Intimidação"
  | "Persuasão";

export type Pericia = {
  atributo: AtributosPrimariosNomes;
  descricao: string;
};

export type ProeficienciaNivel = 0 | 1 | 2 | 3;
