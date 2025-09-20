import { Arma } from "@/types/arma";
import { AtributosPrimariosNomes } from "@/types/atributos";
import { ClassesNomes } from "@/types/classes";
import { PericiaNome, ProeficienciaNivel } from "@/types/pericias";

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

export type PericiaState = {
  marcas: number; // total de marcas acumuladas
  nivel: ProeficienciaNivel; // calculado a partir das marcas
};

export type PericiasState = {
  pericias: Record<PericiaNome, PericiaState>;
};

export type ArmasState = {
  armas: Arma[];
};

export type MagiasState = {
  magias: string;
};

export type InventariosState = {
  inventario: string;
};

export type HabilidadesState = {
  habilidades: string;
};

export type HistoriasState = {
  historia: string;
};

export type AnotacoesState = {
  anotacoes: string;
};

// ----- FICHA COMPLETA -----
export type FichaState = FichaHeaderState & {
  atributos: AtributosState;
} & CombateState &
  CondicoesState &
  PericiasState &
  ArmasState &
  MagiasState &
  InventariosState &
  HabilidadesState &
  HistoriasState &
  AnotacoesState;
