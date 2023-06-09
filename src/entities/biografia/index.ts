import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Fonte } from "../fonte/fonte";
import Habilidade from "../habilidades/model/Habilidades";
import Biografia from "./model/Biografia";

export const treinamentoPericias = [
  new Habilidade(
    1,
    "Acrobacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ACROBACIA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Adestramento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ADESTRAMENTO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Atletismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Atuação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATUACAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Cavalgar",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CAVALGAR, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Conhecimento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CONHECIMENTO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Cura",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CURA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Diplomacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Enganacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ENGANACAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Fortitude",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Furtividade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Guerra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.GUERRA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Iniciativa",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Intimidacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Intuicao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTUICAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Investigacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Jogatina",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.JOGATINA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Ladinagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LADINAGEM, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Luta",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LUTA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Misticismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.MISTICISMO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Nobreza",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.NOBREZA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Oficio",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.OFICIO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Percepcao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Pilotagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PILOTAGEM, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Pontaria",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PONTARIA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Reflexos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Religião",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.RELIGIAO, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Sobrevivencia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 0, BuffType.PROFICIENCY)]
  ),
  new Habilidade(
    1,
    "Vontade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VONTADE, 0, BuffType.PROFICIENCY)]
  ),
];

export const biografias = [
  new Biografia(1, "Acólito", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CURA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.RELIGIAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade(1, "Medicina", Fonte.BASICO, [], []),
    new Habilidade(1, "Membro da Igreja", Fonte.BASICO, [], []),
    new Habilidade(
      1,
      "Vontade de Ferro",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.VONTADE, 2, BuffType.BASE),
        new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVEL),
      ]
    ),
  ]),
  new Biografia(2, "Amigo dos Animais", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    new Habilidade(1, "Amigo Especial", Fonte.BASICO, [], []),
  ]),
  new Biografia(3, "Amnésico", Fonte.BASICO, [
    new Habilidade(1, "Pericia Livre", Fonte.BASICO, [], []),
    new Habilidade(1, "Poder Geral Livre", Fonte.BASICO, [], []),
    new Habilidade(1, "Lembranças Graduais", Fonte.BASICO, [], []),
  ]),
  new Biografia(4, "Aristocrata", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.NOBREZA
    )[0],
    new Habilidade(1, "Comandar", Fonte.BASICO, [], []),
    new Habilidade(1, "Sangue Azul", Fonte.BASICO, [], []),
  ]),
  new Biografia(6, "Artesão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade(1, "Frutos do Trabalho", Fonte.BASICO, [], []),
    new Habilidade(1, "Sortudo", Fonte.BASICO, [], []),
  ]),
  new Biografia(7, "Artista", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    new Habilidade(1, "Atraente", Fonte.BASICO, [], []),
    new Habilidade(1, "Dom Artístico", Fonte.BASICO, [], []),
    new Habilidade(1, "Sortudo", Fonte.BASICO, [], []),
    new Habilidade(1, "Torcida", Fonte.BASICO, [], []),
  ]),
  new Biografia(8, "Assistente de Laboratório", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    new Habilidade(
      1,
      "Esse Cheiro...",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE)]
    ),

    new Habilidade(1, "Venefício", Fonte.BASICO, [], []),
    new Habilidade(1, "Um poder da Tormenta", Fonte.BASICO, [], []),
  ]),
  new Biografia(9, "Batedor", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "À Prova de Tudo", Fonte.BASICO, [], []),
    new Habilidade(1, "Estilo de Disparo", Fonte.BASICO, [], []),
    new Habilidade(1, "Sentidos Aguçados", Fonte.BASICO, [], []),
  ]),
  new Biografia(10, "Capanga", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INTIMIDACAO
    )[0],
    new Habilidade(1, "Intimidação", Fonte.BASICO, [], []),
    new Habilidade(1, "Confissão", Fonte.BASICO, [], []),
    new Habilidade(1, "Um Poder de Combate", Fonte.BASICO, [], []),
  ]),
  new Biografia(11, "Charlatão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    new Habilidade(1, "Alpinista Social", Fonte.BASICO, [], []),
    new Habilidade(1, "Aparência Inofensiva", Fonte.BASICO, [], []),
    new Habilidade(1, "Sortudo", Fonte.BASICO, [], []),
  ]),
  new Biografia(12, "Circense", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ACROBACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    new Habilidade(1, "Acrobático", Fonte.BASICO, [], []),
    new Habilidade(1, "Torcida", Fonte.BASICO, [], []),
    new Habilidade(1, "Truque de Mágica", Fonte.BASICO, [], []),
  ]),
  new Biografia(13, "Criminoso", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LADINAGEM
    )[0],
    new Habilidade(1, "Punguista", Fonte.BASICO, [], []),
    new Habilidade(1, "Venefício", Fonte.BASICO, [], []),
  ]),
  new Biografia(14, "Curandeiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CURA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade(1, "Medicina", Fonte.BASICO, [], []),
    new Habilidade(1, "Medico de Campo", Fonte.BASICO, [], []),
    new Habilidade(1, "Venefício", Fonte.BASICO, [], []),
  ]),
  new Biografia(15, "Eremita", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.RELIGIAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Busca Interior", Fonte.BASICO, [], []),
    new Habilidade(1, "Lobo Solitário", Fonte.BASICO, [], []),
  ]),
  new Biografia(16, "Escravo", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    new Habilidade(1, "Desejo de Liberdade", Fonte.BASICO, [], []),
    new Habilidade(1, "Vitalidade", Fonte.BASICO, [], []),
  ]),
  new Biografia(17, "Estudioso", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CONHECIMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.GUERRA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    new Habilidade(1, "Aparencia Inofensiva", Fonte.BASICO, [], []),
    new Habilidade(1, "Palpite Fundamentado", Fonte.BASICO, [], []),
  ]),
  new Biografia(18, "Fazendeiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Água no Feijão", Fonte.BASICO, [], []),
    new Habilidade(1, "Ginete", Fonte.BASICO, [], []),
  ]),
  new Biografia(19, "Forasteiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Cultura Exótica", Fonte.BASICO, [], []),
    new Habilidade(1, "Lobo Solitário", Fonte.BASICO, [], []),
  ]),
  new Biografia(20, "Gladiador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    new Habilidade(1, "Atraente", Fonte.BASICO, [], []),
    new Habilidade(1, "Pão e Circo", Fonte.BASICO, [], []),
    new Habilidade(1, "Torcida", Fonte.BASICO, [], []),
    new Habilidade(1, "Um poder de combate", Fonte.BASICO, [], []),
  ]),
  new Biografia(21, "Guarda", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INVESTIGACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    new Habilidade(1, "Detetive", Fonte.BASICO, [], []),
    new Habilidade(1, "Um poder de combate", Fonte.BASICO, [], []),
  ]),
  new Biografia(22, "Herdeiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.NOBREZA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Comandar", Fonte.BASICO, [], []),
    new Habilidade(1, "Herança", Fonte.BASICO, [], []),
  ]),
  new Biografia(23, "Herói Camponês", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Coração Heroico", Fonte.BASICO, [], []),
    new Habilidade(1, "Sortudo", Fonte.BASICO, [], []),
    new Habilidade(1, "Surto Heroico", Fonte.BASICO, [], []),
    new Habilidade(1, "Torcida", Fonte.BASICO, [], []),
  ]),
  new Biografia(24, "Marujo", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    new Habilidade(1, "Acrobático", Fonte.BASICO, [], []),
    new Habilidade(1, "Passagem de Navio", Fonte.BASICO, [], []),
  ]),
  new Biografia(25, "Mateiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Lobo Solitário", Fonte.BASICO, [], []),
    new Habilidade(1, "Sentidos Aguçados", Fonte.BASICO, [], []),
    new Habilidade(1, "Vendedor de Carcaças", Fonte.BASICO, [], []),
  ]),
  new Biografia(26, "Membro de Guilda", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Foco em Perícia", Fonte.BASICO, [], []),
    new Habilidade(1, "Rede de Contatos", Fonte.BASICO, [], []),
  ]),
  new Biografia(27, "Mercador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INTUICAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Negocio", Fonte.BASICO, [], []),
    new Habilidade(1, "Proficiência", Fonte.BASICO, [], []),
    new Habilidade(1, "Sortudo", Fonte.BASICO, [], []),
  ]),
  new Biografia(28, "Minerador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Ataque Poderoso", Fonte.BASICO, [], []),
    new Habilidade(1, "Escavador", Fonte.BASICO, [], []),
    new Habilidade(1, "Sentidos Aguçados", Fonte.BASICO, [], []),
  ]),
  new Biografia(29, "Nômade", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Lobo Solitário", Fonte.BASICO, [], []),
    new Habilidade(1, "Mochileiro", Fonte.BASICO, [], []),
    new Habilidade(1, "Sentidos Aguçados", Fonte.BASICO, [], []),
  ]),
  new Biografia(30, "Pivete", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INICIATIVA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LADINAGEM
    )[0],
    new Habilidade(1, "Acrobático", Fonte.BASICO, [], []),
    new Habilidade(1, "Aparência Inofensiva", Fonte.BASICO, [], []),
    new Habilidade(1, "Quebra-Galho", Fonte.BASICO, [], []),
  ]),
  new Biografia(31, "Refugiado", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade(1, "Estoico", Fonte.BASICO, [], []),
    new Habilidade(1, "Vontade de Ferro", Fonte.BASICO, [], []),
  ]),
  new Biografia(32, "Seguidor", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Antigo Mestre", Fonte.BASICO, [], []),
    new Habilidade(1, "Proficiência", Fonte.BASICO, [], []),
    new Habilidade(1, "Surto Heroico", Fonte.BASICO, [], []),
  ]),
  new Biografia(33, "Selvagem", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade(1, "Lobo Solitário", Fonte.BASICO, [], []),
    new Habilidade(1, "Vida Rústica", Fonte.BASICO, [], []),
    new Habilidade(1, "Vitalidade", Fonte.BASICO, [], []),
  ]),
  new Biografia(34, "Soldado", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.GUERRA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PONTARIA
    )[0],
    new Habilidade(1, "Influência Militar", Fonte.BASICO, [], []),
    new Habilidade(1, "Um poder de combate", Fonte.BASICO, [], []),
  ]),
  new Biografia(35, "Taverneiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Gororoba", Fonte.BASICO, [], []),
    new Habilidade(1, "Proficiência", Fonte.BASICO, [], []),
    new Habilidade(1, "Vitalidade", Fonte.BASICO, [], []),
  ]),
  new Biografia(36, "Trabalhador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    new Habilidade(1, "Atlético", Fonte.BASICO, [], []),
    new Habilidade(1, "Esforçado", Fonte.BASICO, [], []),
  ]),
];
