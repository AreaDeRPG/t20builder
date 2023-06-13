import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import Habilidade from "../habilidades/model/Habilidades";
import { poderes } from "../poderes";
import Origem from "./model/Origem";

export const treinamentoPericias = [
  new Habilidade(
    1,
    "Acrobacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ACROBACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Adestramento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ADESTRAMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Atletismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Atuação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATUACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Cavalgar",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CAVALGAR, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Conhecimento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CONHECIMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Cura",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CURA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Diplomacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Enganacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ENGANACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Fortitude",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Furtividade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Guerra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.GUERRA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Iniciativa",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Intimidacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Intuicao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTUICAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Investigacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Jogatina",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.JOGATINA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Ladinagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LADINAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Luta",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LUTA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Misticismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.MISTICISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Nobreza",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.NOBREZA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Oficio",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.OFICIO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Percepcao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Pilotagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PILOTAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Pontaria",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PONTARIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Reflexos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.REFLEXOS, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Religião",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.RELIGIAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Sobrevivencia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    1,
    "Vontade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VONTADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
];

const poderCombate = new Habilidade(
  1,
  "Um poder de combate",
  Fonte.BASICO,
  poderes.poderCombate
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
    new Habilidade(1, "Membro da Igreja", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Amigo Especial", Fonte.BASICO, [], []),
  ]),
  new Origem(3, "Amnésico", Fonte.BASICO, [
    new Habilidade(1, "Pericia Livre", Fonte.BASICO, treinamentoPericias, []),
    new Habilidade(1, "Poder Geral Livre", Fonte.BASICO, [], []),
    new Habilidade(1, "Lembranças Graduais", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Sangue Azul", Fonte.BASICO, [], []),
  ]),
  new Origem(6, "Artesão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.VONTADE
    )[0],
    new Habilidade(1, "Frutos do Trabalho", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Dom Artístico", Fonte.BASICO, [], []),
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
      1,
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
    new Habilidade(1, "À Prova de Tudo", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Confissão", Fonte.BASICO, [], []),
    poderCombate,
  ]),
  new Origem(11, "Charlatão", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ENGANACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.JOGATINA
    )[0],
    new Habilidade(1, "Alpinista Social", Fonte.BASICO, [], []),
    poderes.poderesDestino.filter((el) =>
      ["Aparência Inofensiva"].includes(el.nome)
    )[0],
    poderes.poderesDestino.filter((el) => ["Sortudo"].includes(el.nome))[0],
  ]),
  new Origem(12, "Circense", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0]?.caracteristica == Caracteristica.ACROBACIA
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0]?.caracteristica == Caracteristica.ATUACAO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0]?.caracteristica == Caracteristica.REFLEXOS
    )[0],
    poderes.poderesDestino.filter((el) => ["Acrobático"].includes(el.nome))[0],
    poderes.poderesDestino.filter((el) => ["Torcida"].includes(el.nome))[0],
    new Habilidade(1, "Truque de Mágica", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Punguista", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Medico de Campo", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Busca Interior", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Desejo de Liberdade", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Palpite Fundamentado", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Água no Feijão", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Cultura Exótica", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Pão e Circo", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Detetive", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Herança", Fonte.BASICO, [], []),
  ]),
  new Origem(23, "Herói Camponês", Fonte.BASICO, [
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.ADESTRAMENTO
    )[0],
    treinamentoPericias.filter(
      (el) => el.buffs[0].caracteristica == Caracteristica.OFICIO
    )[0],
    new Habilidade(1, "Coração Heroico", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Passagem de Navio", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Vendedor de Carcaças", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Rede de Contatos", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Negocio", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Escavador", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Mochileiro", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Quebra-Galho", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Estoico", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Antigo Mestre", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Vida Rústica", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Influência Militar", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Gororoba", Fonte.BASICO, [], []),
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
    new Habilidade(1, "Esforçado", Fonte.BASICO, [], []),
  ]),
];
