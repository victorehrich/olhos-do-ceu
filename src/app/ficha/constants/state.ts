import { FichaState } from "../types/state";

export const initialState: FichaState = {
  nomePersonagem: "",
  classe: "",
  nivel: 0,
  nomeJogador: "",
  atributos: {
    Força: 1,
    Destreza: 1,
    Constituição: 1,
    Inteligência: 1,
    Sabedoria: 1,
    Carisma: 1,
  },
  combate: {
    pontosVida: 0,
    defesaFisica: 0,
    defesaMagica: 0,
  },
  condicoes: [],
  venenos: [],
  traumas: [],
  aversoes: [],
};
