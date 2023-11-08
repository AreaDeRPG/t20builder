import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Fonte } from "../fonte/fonte";
import Habilidade from "../habilidades/model/Habilidades";
import { treinamentoPericias } from "../pericias";
import { poderes } from "../poderes";
import Origem from "./model/Origem";

const poderCombate = new Habilidade(
  "Um poder de combate",
  Fonte.BASICO,
  poderes.poderesCombate
);

export const origens = [
  new Origem(1, "Acólito", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CURA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.RELIGIAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    poderes.poderesDestino.filter((el) => ["Medicina"].includes(el.nome))[0],
    new Habilidade("Membro da Igreja", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Vontade de Ferro"].includes(el.nome)
    )[0],
  ]),
  new Origem(2, "Amigo dos Animais", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    new Habilidade("Amigo Especial", Fonte.BASICO, [], []),
  ]),
  new Origem(3, "Amnésico", Fonte.BASICO, [
    new Habilidade("Pericia Livre", Fonte.BASICO, treinamentoPericias),
    new Habilidade(
      "Poder Geral Livre",
      Fonte.BASICO,
      poderes.poderesCombate
        .concat(poderes.poderesDestino)
        .concat(poderes.poderesTormenta)
    ),
    new Habilidade("Lembranças Graduais", Fonte.BASICO, []),
  ]),
  new Origem(4, "Aristocrata", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.NOBREZA
    )[0],
    poderes.poderesDestino.filter((el) => ["Comandar"].includes(el.nome))[0],
    new Habilidade("Sangue Azul", Fonte.BASICO, [], []),
  ]),
  new Origem(6, "Artesão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade("Frutos do Trabalho", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
  ]),
  new Origem(7, "Artista", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    poderes.poderesDestino.filter((el) => ["Atraente"].includes(el.nome))[0],
    new Habilidade(
      "Dom Artístico",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.ATUACAO, 2, BuffType.BASE)]
    ),
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
    poderes.poderesDestino.filter((el) => ["Torcida"].includes(el.nome))[0],
  ]),
  new Origem(8, "Assistente de Laboratório", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    new Habilidade(
      "Esse Cheiro...",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE)]
    ),
    poderes.poderesDestino.filter((el) => ["Venefício"].includes(el.nome))[0],
    poderCombate,
  ]),
  new Origem(9, "Batedor", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade("À Prova de Tudo", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) =>
      ["Estilo de Disparo"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Sentidos Aguçados"].includes(el.nome)
    )[0],
  ]),
  new Origem(10, "Capanga", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INTIMIDACAO
    )[0],
    new Habilidade("Confissão", Fonte.BASICO, [], []),
    poderCombate,
  ]),
  new Origem(11, "Charlatão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    new Habilidade("Alpinista Social", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Aparência Inofensiva"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
  ]),
  new Origem(12, "Circense", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ACROBACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    poderes.poderesDestino.filter((el) => ["Acrobático"].includes(el.nome))[0],
    poderes.poderesDestino.filter((el) => ["Torcida"].includes(el.nome))[0],
    new Habilidade("Truque de Mágica", Fonte.BASICO, [], []),
  ]),
  new Origem(13, "Criminoso", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LADINAGEM
    )[0],
    new Habilidade("Punguista", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) => ["Venefício"].includes(el.nome))[0],
  ]),
  new Origem(14, "Curandeiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CURA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],

    poderes.poderesDestino.filter((el) => ["Medicina"].includes(el.nome))[0],
    new Habilidade("Medico de Campo", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) => ["Venefício"].includes(el.nome))[0],
  ]),
  new Origem(15, "Eremita", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.RELIGIAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade("Busca Interior", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) =>
      ["Lobo Solitário"].includes(el.nome)
    )[0],
  ]),
  new Origem(16, "Escravo", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    new Habilidade("Desejo de Liberdade", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) => ["Vitalidade"].includes(el.nome))[0],
  ]),
  new Origem(17, "Estudioso", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CONHECIMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.GUERRA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Aparência Inofensiva"].includes(el.nome)
    )[0],
    new Habilidade("Palpite Fundamentado", Fonte.BASICO, [], []),
  ]),
  new Origem(18, "Fazendeiro", Fonte.BASICO, [
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
    new Habilidade("Água no Feijão", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) => ["Ginete"].includes(el.nome))[0],
  ]),
  new Origem(19, "Forasteiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    new Habilidade("Cultura Exótica", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Lobo Solitário"].includes(el.nome)
    )[0],
  ]),
  new Origem(20, "Gladiador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    poderes.poderesDestino.filter((el) => ["Atraente"].includes(el.nome))[0],
    new Habilidade("Pão e Circo", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) => ["Torcida"].includes(el.nome))[0],
    poderCombate,
  ]),
  new Origem(21, "Guarda", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INVESTIGACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LUTA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    new Habilidade("Detetive", Fonte.BASICO, [], []),
    poderCombate,
  ]),
  new Origem(22, "Herdeiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.MISTICISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.NOBREZA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    poderes.poderesDestino.filter((el) => ["Comandar"].includes(el.nome))[0],
    new Habilidade("Herança", Fonte.BASICO, [], []),
  ]),
  new Origem(23, "Herói Camponês", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(
      "Coração Heroico",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.PM, 3, BuffType.BYRANK)]
    ),
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
    poderes.poderesDestino.filter((el) =>
      ["Surto Heroico"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) => ["Torcida"].includes(el.nome))[0],
  ]),
  new Origem(24, "Marujo", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    poderes.poderesDestino.filter((el) => ["Acrobático"].includes(el.nome))[0],
    new Habilidade("Passagem de Navio", Fonte.BASICO, [], []),
  ]),
  new Origem(25, "Mateiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Lobo Solitário"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Sentidos Aguçados"].includes(el.nome)
    )[0],
    new Habilidade("Vendedor de Carcaças", Fonte.BASICO, [], []),
  ]),
  new Origem(26, "Membro de Guilda", Fonte.BASICO, [
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
    poderes.poderesDestino.filter((el) =>
      ["Foco em Perícia"].includes(el.nome)
    )[0],
    new Habilidade("Rede de Contatos", Fonte.BASICO, [], []),
  ]),
  new Origem(27, "Mercador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INTUICAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade("Negocio", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) =>
      ["Proficiência"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
  ]),
  new Origem(28, "Minerador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    poderes.poderesCombate.filter((el) =>
      ["Ataque Poderoso"].includes(el.nome)
    )[0],
    new Habilidade("Escavador", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Sentidos Aguçados"].includes(el.nome)
    )[0],
  ]),
  new Origem(29, "Nômade", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.CAVALGAR
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PILOTAGEM
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Lobo Solitário"].includes(el.nome)
    )[0],
    new Habilidade("Mochileiro", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Sentidos Aguçados"].includes(el.nome)
    )[0],
  ]),
  new Origem(30, "Pivete", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FURTIVIDADE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.INICIATIVA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.LADINAGEM
    )[0],
    poderes.poderesDestino.filter((el) => ["Acrobático"].includes(el.nome))[0],
    poderes.poderesDestino.filter((el) =>
      ["Aparência Inofensiva"].includes(el.nome)
    )[0],
    new Habilidade("Quebra-Galho", Fonte.BASICO, [], []),
  ]),
  new Origem(31, "Refugiado", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade("Estoico", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Vontade de Ferro"].includes(el.nome)
    )[0],
  ]),
  new Origem(32, "Seguidor", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade("Antigo Mestre", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) =>
      ["Proficiência"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Surto Heroico"].includes(el.nome)
    )[0],
  ]),
  new Origem(33, "Selvagem", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.PERCEPCAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.REFLEXOS
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.SOBREVIVENCIA
    )[0],
    poderes.poderesDestino.filter((el) =>
      ["Lobo Solitário"].includes(el.nome)
    )[0],
    new Habilidade("Vida Rústica", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) => ["Vitalidade"].includes(el.nome))[0],
  ]),
  new Origem(34, "Soldado", Fonte.BASICO, [
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
    new Habilidade("Influência Militar", Fonte.BASICO, [], []),
    poderCombate,
  ]),
  new Origem(35, "Taverneiro", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.DIPLOMACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade("Gororoba", Fonte.BASICO, [], []),
    poderes.poderesCombate.filter((el) =>
      ["Proficiência"].includes(el.nome)
    )[0],
    poderes.poderesCombate.filter((el) => ["Vitalidade"].includes(el.nome))[0],
  ]),
  new Origem(36, "Trabalhador", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ATLETISMO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.FORTITUDE
    )[0],
    poderes.poderesDestino.filter((el) => ["Atlético"].includes(el.nome))[0],
    new Habilidade("Esforçado", Fonte.BASICO, [], []),
  ]),
];
