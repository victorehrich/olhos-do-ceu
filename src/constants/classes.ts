import { ClassesInterface, ClassesNomes } from "@/types/classes";

export const Classes: Record<ClassesNomes, ClassesInterface> = {
  "Bardo Lunar": {
    dominio: "Carisma",
    descrição:
      "Inspirado nos bardos tradicionais, este personagem utiliza canções e histórias para influenciar o ambiente e as emoções das pessoas ao seu redor. Em um mundo onde a religião lunar é dominante, o Bardo Lunar pode ser um propagador da fé ou um questionador sutil da ordem estabelecida.",
    habilidades: [
      {
        nome: "Canção das Marés",
        custo: "1 Ação, 2 PM para iniciar. Requer Concentração para manter.",
        duração: "Até 5 turnos (enquanto se concentrar).",
        alcance: "Pessoal (aura de 9m de raio ao seu redor).",
        efeito: {
          descrição: "Escolha um dos dois efeitos ao iniciar a canção.",
          escolhas: {
            "Maré Alta (Inspiradora)":
              "Aliados dentro da aura ganham +1 em rolagens de ataque até o próximo turno.",
            "Maré Baixa (Desmoralizante)":
              "Inimigos devem passar em Teste de Resistência de SAB (DT 10 + Mod. CAR) ou recebem -1 em rolagens de ataque.",
          },
        },
      },
      {
        nome: "Lamento da Luz Perdida",
        custo: "1 Ação, 1 PM",
        alcance: "9 metros",
        duração: "1 rodada",
        efeito:
          "Escolha alvos visíveis igual ao seu Mod. CAR. Cada alvo faz Teste de Resistência de SAB (DT 10 + Mod. CAR). Se falharem, ficam cegos por memórias de contos antigos. “De quem são essas memórias? Quem as escreveu?”",
      },
      {
        nome: "Narrativa Envolvente",
        custo: "Passivo",
        efeito:
          "Você tem Vantagem em todos os testes de CAR quando tenta convencer alguém contando uma história.",
      },
    ],
  },
  "Clérigo da Luz Proibida": {
    dominio: "Sabedoria",
    descrição:
      "Seguidor da religião proibida que venera Solair, este clérigo busca trazer de volta a luz ao mundo. Opera no oculto, realizando rituais secretos e auxiliando aqueles que compartilham de sua fé.",
    habilidades: [
      {
        nome: "Chama Purificadora",
        custo: "1 Ação, 2 PM",
        alcance: "Toque",
        duração: "Instantâneo",
        efeito: {
          descrição: "Estende a mão com uma chama sagrada.",
          escolhas: {
            Curar:
              "Você toca um aliado, que recupera 1d8 + SAB em Pontos de Vida.",
            Queimar:
              "Você faz um ataque de toque mágico (1d20 + SAB) contra um inimigo. Se acertar, ele sofre 1d8 + SAB de dano de fogo.",
          },
        },
      },
      {
        nome: "Luz Reveladora",
        custo: "1 Ação, 1 PM",
        alcance: "Toque (objeto)",
        duração: "Fim da cena",
        efeito:
          "Você toca um objeto e ele passa a emitir luz brilhante em um raio de 6 metros, e penumbra por mais 6 metros. “A luz proibida torna vulneráveis a peste intocável”.",
      },
      {
        nome: "Fé Inabalável",
        custo: "Passivo",
        efeito:
          "Você tem Vantagem em todos os Testes de Resistência contra efeitos de Medo e Corrupção Mental.",
      },
    ],
  },
  "Caçador de Sombras": {
    dominio: "Sabedoria",
    descrição:
      "Guerreiro treinado especificamente para enfrentar as bestas que assolam o mundo durante a noite eterna. Utiliza táticas furtivas e conhecimento sobre monstros para proteger os inocentes.",
    habilidades: [
      {
        nome: "Presa Favorita",
        custo: "1 Ação, 1 Ponto de Domínio de SAB",
        alcance: "Cenário",
        duração: "5 rodadas",
        efeito:
          "Você marca uma criatura que pode ver como sua presa . Pela duração, você ganha +2 em suas rolagens de dano contra essa criatura.",
      },
      {
        nome: "Rastreamento",
        custo: "Passivo",
        efeito:
          "Você tem vantagem (2d20 + SAB) em testes de Sabedoria para rastrear alvos.",
      },
      {
        nome: "Armadilhas",
        custo: "1 Ponto de Domínio de DES",
        efeito: {
          descrição:
            " Você monta uma pequena armadilha. A DT para um inimigo perceber a armadilha é 10 + SAB. A primeira criatura que entrar no espaço deve fazer um Teste de Resistência de Destreza (DT = 10 + DES).",
          sucesso: "A criatura sofre metade do dano e não fica presa.",
          falha:
            "A criatura sofre 2d6 de dano perfurante e sua velocidade é reduzida a 0 até que use uma Ação para se libertar (Teste de Força, DT 10).",
        },
      },
    ],
  },
  Artesão: {
    dominio: "Inteligência",
    descrição:
      "Um estudioso da própria essência da matéria. Um bom artesão utiliza (órgão de feras, folha de planta ou fragmento de pedras), decompõe e recombina tudo em algo novo. Eles são os mestres da mudança, transformando os horrores do mundo em ferramentas de sobrevivência para seus aliados. “A antipatia pela estagnação costuma render aos artesãos um alvo em suas costas”.",
    habilidades: [
      {
        nome: "Oficina Improvisada",
        efeito:
          "Durante um descanso, você pode manipular os ingredientes que coletou para criar itens úteis (Número de fórmulas igual a sabedoria, fórmulas podem ser trocadas).",
      },
      {
        nome: "Análise de Essência",
        custo: "Passivo",
        efeito:
          "Você tem vantagem (2d20 + INT) em testes de Inteligência para identificar a natureza, as propriedades ou as fraquezas de criaturas, plantas e substâncias. Ao coletar materiais de uma fonte, um sucesso no teste pode te conceder um material superior, necessário para fórmulas mais poderosas.",
      },
      {
        nome: "Transmutação Mentor",
        custo: "1 PM, Ação completa",
        efeito:
          "Você realiza uma pequena e rápida alteração na matéria não-viva. Você pode purificar pequenos volumes de água, enferrujar uma pequena fivela de metal, tornar um pedaço de pão mofado, cegar uma lâmina, ou criar um odor forte. ",
      },
    ],
  },
  "Astrólogo Iniciante": {
    dominio: "Sabedoria",
    descrição:
      "Indivíduos fascinados pelos corpos celestes, os Astrólogos Amadores utilizam fragmentos de meteoritos para canalizar magias únicas. Sua observação constante da lua lhes concede direcionamentos valiosos.",
    habilidades: [
      {
        nome: "Leitura Lunar",
        custo: "1 ponto de domínio",
        efeito: {
          descrição:
            "Você medita sobre a lua e o brilho das estrelas para buscar orientação. Faça um teste de Sabedoria (DT 15).",
          sucesso:
            "Você recebe uma visão ou um pressentimento enigmático do Mestre sobre o seu objetivo atual",
          falha:
            "A vastidão do cosmos é demais para sua mente. Você sofre 1d4 de Dano de Corrupção Mental.",
        },
      },
      {
        nome: "Falange Cristalina",
        custo: "1 Ação, 3 PM",
        duração: "5 rodadas, ou até serem descarregadas.",
        efeito:
          "Você invoca um número de lâminas de cristal flutuantes igual ao seu Modificador de Sabedoria (SAB). Elas orbitam sua cabeça. Quando uma criatura termina seu movimento a 3 metros de você, uma das lâminas dispara automaticamente contra ela, causando 1d6 de dano mágico. Apenas uma lâmina pode disparar por turno.",
      },
      {
        nome: "Lasca Brilhante",
        custo: "1 Ação, 1 PM",
        alcance: "9 metros",
        efeito:
          "Você dispara um projétil de pura magia cristalizada em um alvo. Faça um ataque de magia (1d20 + SAB). Se acertar, o alvo sofre 1d10 de dano mágico. Esta é sua magia de ataque principal, confiável e eficiente.",
      },
    ],
  },
  "Combatente Ágil": {
    dominio: "Destreza",
    descrição:
      "Especialistas em velocidade e precisão, os Combatentes Ágeis confiam em sua destreza para desferir ataques rápidos e evitar danos. São mestres em explorar as fraquezas dos inimigos.",
    habilidades: [
      {
        nome: "Ataque Rápido",
        custo: "1 ponto de domínio",
        efeito:
          "Sempre que você usar sua Ação para atacar, você pode usar seu ponto de domínio para fazer um ataque adicional surpresa com uma arma leve que esteja empunhando. Você não adiciona seu modificador de atributo ao dano deste ataque extra.",
      },
      {
        nome: "Ripostar",
        custo: "1 Reação, 1 Ponto de Domínio de DES.",
        efeito:
          "Quando um inimigo te ataca com um golpe corpo a corpo e erra, você pode usar sua Reação para gastar um Ponto de Domínio e fazer imediatamente um ataque corpo a corpo contra ele.",
      },
      {
        nome: "Dança das Lâminas",
        custo: "Turno completo",
        alcance: "3 metros",
        efeito:
          "Você gasta seu turno completo para se mover de forma imprevisível. Você se move até o alvo para fazer um único ataque com arma corpo a corpo, retornando para o local original, sem sofrer ataques de oportunidade ou contrataques, não é possível ter a vantagem do crítico.",
      },
    ],
  },
  Protetor: {
    dominio: { tipo: "Maior entre", atributos: ["Força", "Constituição"] },
    descrição:
      "Defensores incansáveis, os Protetores são guardiões que se colocam entre os aliados e o perigo. Sua resistência excepcional e habilidades de proteção os tornam pilares em qualquer grupo.",
    habilidades: [
      {
        nome: "Resistência Aprimorada",
        custo: "1 Reação, 1 Ponto de Domínio de CON",
        efeito:
          "Quando você ou um aliado a até 1,5 metro de você está prestes a sofrer dano de um ataque, você pode usar sua Reação para erguer sua defesa e absorver parte do impacto. O dano recebido é reduzido em 1d10 + CONS.",
      },
      {
        nome: "Postura Inabalável",
        custo: "Turno",
        efeito:
          "Você usa sua arma ou escudo para controlar a posição do inimigo. Faça uma rolagem de ataque (1d20 + FOR). Se acertar, o alvo sofre 1d4 + FOR de dano e deve fazer um Teste de Resistência de Força (DT = 10 + FOR). Se falhar, será empurrado em 1,5 metros.",
      },
      {
        nome: "A Todo Custo",
        custo: "1 Reação. (Só pode ser usada uma vez por Descanso Longo).",
        "pre-requisito":
          "Um aliado a até 3 metros de você deve cair a 0 Pontos de Vida.",
        efeito: {
          descrição: "O instinto guardião toma conta de você. Imediatamente:",
          efeitos: [
            "Você ganha Pontos de Vida Temporários igual ao dobro do seu nível.",
            "Você pode se mover até seu deslocamento máximo em direção ao aliado caído, sem provocar ataques de oportunidade.",
            "Até o final do seu próximo turno, qualquer ataque direcionado ao seu aliado caído automaticamente atinge você em vez dele.",
          ],
        },
      },
    ],
  },
};
