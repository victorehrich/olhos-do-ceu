import { Aversao, Condicao, TipoVeneno, Trauma } from "@/types/condicoes";

// Constante com as condições
export const CONDICOES: Condicao[] = [
  {
    nome: "Chama de Solaris",
    tipo: "narrativo",
    descricao:
      "A chamada blasfema dissolve, limpa, corroi e reinicia tudo que seu brilho alcança",
    efeito: "Os olhos encandecem, a mente se esvazia, o corpo decai",
    dt: "Fácil",
    acumuloMaximo: 10,
  },
  {
    nome: "Infestação Lunar",
    tipo: "narrativo",
    descricao:
      "A luz da lua invade, infesta e domina, o mundo reflete a gestação da lua",
    efeito:
      "Os olhos se apagam, a mente se torna fértil, ao corpo, só resta obedecer",
    dt: "Moderado",
    acumuloMaximo: 10,
  },
  {
    nome: "Aflição Sombria",
    tipo: "narrativo",
    descricao:
      "O que vive nas sombras nunca deveria ter existido, ao menos é o que dizem os que encaram as chamas",
    efeito:
      "Até a imitação de luz da lua é forte demais para os que habitam na escuridão, que segredos seus corpos escondem?",
    dt: "Moderado",
    acumuloMaximo: 5,
  },
  {
    nome: "Envenenamento",
    tipo: "não especificado",
    descricao:
      "Certos corpos resistem a venenos poderoso, mas descobrir seu grau de tolerância é algo que ninguém deseja testar",
    efeito:
      "A deterioração causada por venenos é variável, mas uma coisa é certa, ser afetado várias vezes torna o progressivamente mais frágil. Consultar tabela de Envenenamento",
    dt: "Variável",
    acumuloMaximo: 6,
  },
  {
    nome: "Intoxicação",
    tipo: "não especificado",
    descricao:
      "De acordo com a situação, a intoxicação pode ser um problema, desde manter o equilíbrio, até manter-se são em batalha… as vezes é o que permite ordens serem cumpridas",
    efeito:
      "Aumento da DT em testes de acordo com o grau de intoxicação. A critério do mestre, varia entre 5 a 15 pontos.",
    dt: "Variável",
    acumuloMaximo: "-",
  },
  {
    nome: "Confusão",
    tipo: "não especificado",
    descricao:
      "Muitos podem se aproveitar da fraqueza da mente, engana-se aquele que pensa que apenas a mente humana é manipulável.",
    efeito:
      "O afetado fica sugestivo a comandos de inimigos por 1 turno. Chegar ao acúmulo máximo significa perder o senso de si mesmo, causando a morte.",
    dt: "Fácil",
    acumuloMaximo: 15,
  },
  {
    nome: "Corrupção Mental",
    tipo: "não especificado",
    descricao:
      "A corrupção não é sinônimo apenas de loucura e morte, dizem que corromper também é uma forma de renascimento e mudança, a estagnação também pode ser uma forma de loucura",
    efeito:
      "O afetado, ao chegar na metade dos pontos ganha um efeito negativo (Ex: trauma ou rejeição a algo). Ao zerar os pontos, será afetado pela Visão do Firmamento Interno, perdendo permanentemente o personagem.",
    dt: "Fácil",
    acumuloMaximo: "consultar ficha",
  },
];

export const VENENOS: TipoVeneno[] = [
  {
    nome: "Fraco",
    dt: "Muito Fácil",
    danoPorRodada: 5,
  },
  {
    nome: "Médio",
    dt: "Fácil",
    danoPorRodada: 10,
  },
  {
    nome: "Forte",
    dt: "Médio",
    danoPorRodada: 20,
  },
  {
    nome: "Fatal",
    dt: "Épico",
    danoPorRodada: "Total",
  },
];

// Constante da tabela de traumas
export const TRAUMAS: Trauma[] = [
  {
    resultado: 1,
    nome: "Medo da Escuridão",
    descricao:
      "Pavor de ambientes sem luz, sente-se completamente desamparado.",
  },
  {
    resultado: 2,
    nome: "Fobia de Água",
    descricao:
      "Terror de águas escuras e fundo desconhecido, evita rios, lagos e oceanos.",
  },
  {
    resultado: 3,
    nome: "Medo de Altura",
    descricao:
      "Vertigem intensa ao olhar para baixo de lugares elevados, como penhascos ou torres.",
  },
  {
    resultado: 4,
    nome: "Claustrofobia",
    descricao:
      "Angústia em espaços confinados (túneis, porões, celas), sente falta de ar rapidamente.",
  },
  {
    resultado: 5,
    nome: "Trauma de Sangramento",
    descricao:
      "Desmaia ou entra em choque ao ver sangue fluindo, mesmo em ferimentos leves.",
  },
  {
    resultado: 6,
    nome: "Ansiedade de Ruídos Agudos",
    descricao:
      "Qualquer som estridente (vidro estilhaçando, gritos altos) causa paralisia momentânea.",
  },
  {
    resultado: 7,
    nome: "Horror a Fogo",
    descricao:
      "Medo irracional de chamas, evita totalmente qualquer fonte de fogo (tochas, fogueiras).",
  },
  {
    resultado: 8,
    nome: "Pavor de Insetos ou Vermes",
    descricao:
      "Desespero ao ver insetos rastejantes ou criaturas rastejantes semelhantes a vermes.",
  },
  {
    resultado: 9,
    nome: "Rejeição a Toques",
    descricao: "Dificuldade extrema em permitir contato físico.",
  },
  {
    resultado: 10,
    nome: "Fobia de Espelhos",
    descricao:
      "Acha terrível ver reflexos próprios, acredita ver algo 'além' de si.",
  },
  {
    resultado: 11,
    nome: "Ansiedade por Silêncio Total",
    descricao:
      "Quando o ambiente fica completamente silencioso, sente que algo está escondido e entra em pânico.",
  },
  {
    resultado: 12,
    nome: "Trauma de Explosões",
    descricao: "Perturbado por luzes fortes ou explosões repentinas.",
  },
  {
    resultado: 13,
    nome: "Pesadelos Recorrentes",
    descricao:
      "Pesadelos recorrentes sobre o que está acima, nas estrelas, entre nós, com as sombras, ou abaixo, respondendo ao chamado das piras.",
  },
  {
    resultado: 14,
    nome: "Sagrado Terrível",
    descricao:
      "Terror de estruturas religiosas, acredita que será o realizador de um presságio.",
  },
  {
    resultado: 15,
    nome: "Choque ao Ver Pessoas Feridas",
    descricao:
      "Entra em estado de choque quando presencia feridos gravemente, tendo dificuldade em ajudar.",
  },
  {
    resultado: 16,
    nome: "Vítimas Silenciosas",
    descricao:
      "Carrega culpa por não ter conseguido salvar alguém que pedia ajuda silenciosamente.",
  },
  {
    resultado: 17,
    nome: "Fobia de Objetos Antigos ou Quebrados",
    descricao:
      "Acha objetos antigos, enferrujados ou fragmentados (como cerâmicas quebradas) profundamente perturbadores.",
  },
  {
    resultado: 18,
    nome: "Ansiedade Social em Reuniões Grandes",
    descricao:
      "Ao estar em meio a multidão, sente-se sufocado, agitado e incapaz de interagir.",
  },
  {
    resultado: 19,
    nome: "Olhos para todos os lados",
    descricao: "Medo de olhar nos olhos, facilmente intimidado.",
  },
  {
    resultado: 20,
    nome: "Terror dos passos sombrios",
    descricao:
      "Teme a todo momento que esteja sendo perseguido, todos em segredo devem estar tramando pelas suas costas.",
  },
];

// Constante da tabela de Aversões
export const AVERSOES: Aversao[] = [
  {
    resultado: 1,
    nome: "Chamas à Vista",
    descricao:
      "Sempre desvia o olhar ao ver fogo, evita fogueiras e tochas mesmo quando necessário.",
  },
  {
    resultado: 2,
    nome: "Gotas de Sangue",
    descricao:
      "Rejeita qualquer mancha ou gota de sangue, sente náusea e desorientação.",
  },
  {
    resultado: 3,
    nome: "Água Parada",
    descricao:
      "Não se aproxima de poças, lagos calmos ou qualquer superfície de água, considera como 'espiãs'.",
  },
  {
    resultado: 4,
    nome: "Vozes Encantadoras",
    descricao:
      "Cânticos, cânticos religiosos ou murmúrios longe fazem seu estômago revirar.",
  },
  {
    resultado: 5,
    nome: "Brilho dos Olhos",
    descricao:
      "Evita superfícies reflexivas (espelhos, metais polidos), pois teme ver aquilo que pode o encarar de volta.",
  },
  {
    resultado: 6,
    nome: "Sombras Densas",
    descricao:
      "Não pisa sob sombras muito escuras ou densas, tem certeza de que algo se esconde nelas.",
  },
];
