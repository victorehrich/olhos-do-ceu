import { AtributosPrimariosNomes } from "./atributos";
import { Habilidade } from "./habilidades";

export type ClassesNomes =
  | "Bardo Lunar"
  | "Clérigo da Luz Proibida"
  | "Caçador de Sombras"
  | "Artesão"
  | "Astrólogo Iniciante"
  | "Combatente Ágil"
  | "Protetor";

export interface ClassesInterface {
  dominio:
    | AtributosPrimariosNomes
    | {
        tipo: "Maior entre";
        atributos: [AtributosPrimariosNomes, AtributosPrimariosNomes];
      };
  descrição: string;
  habilidades: Habilidade[];
}
