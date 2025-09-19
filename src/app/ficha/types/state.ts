import { AtributosPrimariosNomes } from "@/types/atributos";
import { ClassesNomes } from "@/types/classes";

export type FichaHeaderState = {
  nomePersonagem: string;
  classe: ClassesNomes | "";
  nivel: number;
  nomeJogador: string;
  fotobase64?: string;
};
export type AtributosState = Record<AtributosPrimariosNomes, number>;

export type CombateState = {
  combate: {
    pontosVida: number;
    defesaFisica: number;
    defesaMagica: number;
  };
};

export type CondicoesState = {
  condicoes: string[]; // nomes das condições aplicadas
  venenos: string[]; // nomes dos venenos aplicados
  traumas: string[]; // nomes dos traumas aplicados
  aversoes: string[]; // nomes das aversões aplicadas
};

export type FichaState = FichaHeaderState & {
  atributos: AtributosState;
} & CombateState &
  CondicoesState;
