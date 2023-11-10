import Pericia from "./model/Pericia";
import { modificadores } from "../modificadores";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import Habilidade from "../habilidades/model/Habilidades";
import { Fonte } from "../fonte/fonte";
import Buff from "../buff/model/Buff";
import { Categoria } from "../categoria/model/Categoria";
import { BuffType } from "../buff/model/BuffType";
import { PericiaNome } from "./model/PericiaNome";

export const treinamentoPericias = [
  new Habilidade(
    PericiaNome.ACROBACIA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ACROBACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.ADESTRAMENTO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ADESTRAMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.ATLETISMO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.ATUACAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATUACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.CAVALGAR,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CAVALGAR, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.CONHECIMENTO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CONHECIMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.CURA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CURA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.DIPLOMACIA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.ENGANACAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ENGANACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.FORTITUDE,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.FURTIVIDADE,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.GUERRA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.GUERRA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.INICIATIVA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.INTIMIDACAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.INTUICAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTUICAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.INVESTIGACAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.JOGATINA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.JOGATINA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.LADINAGEM,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LADINAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.LUTA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LUTA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.MISTICISMO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.MISTICISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.NOBREZA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.NOBREZA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.OFICIO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.OFICIO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.PERCEPCAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.PILOTAGEM,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PILOTAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.PONTARIA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PONTARIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.REFLEXOS,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.REFLEXOS, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.RELIGIAO,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.RELIGIAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.SOBREVIVENCIA,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    PericiaNome.VONTADE,
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VONTADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
];

export const pericias = [
  new Pericia(
    1,
    PericiaNome.ACROBACIA,
    modificadores[1],
    Caracteristica.ACROBACIA
  ),
  new Pericia(
    2,
    PericiaNome.ADESTRAMENTO,
    modificadores[5],
    Caracteristica.ADESTRAMENTO
  ),
  new Pericia(
    3,
    PericiaNome.ATLETISMO,
    modificadores[0],
    Caracteristica.ATLETISMO
  ),
  new Pericia(4, PericiaNome.ATUACAO, modificadores[5], Caracteristica.ATUACAO),
  new Pericia(
    5,
    PericiaNome.CAVALGAR,
    modificadores[1],
    Caracteristica.CAVALGAR
  ),
  new Pericia(
    6,
    PericiaNome.CONHECIMENTO,
    modificadores[3],
    Caracteristica.CONHECIMENTO
  ),
  new Pericia(7, PericiaNome.CURA, modificadores[4], Caracteristica.CURA),
  new Pericia(
    8,
    PericiaNome.DIPLOMACIA,
    modificadores[5],
    Caracteristica.DIPLOMACIA
  ),
  new Pericia(
    9,
    PericiaNome.ENGANACAO,
    modificadores[5],
    Caracteristica.ENGANACAO
  ),
  new Pericia(
    10,
    PericiaNome.FORTITUDE,
    modificadores[2],
    Caracteristica.FORTITUDE
  ),
  new Pericia(
    11,
    PericiaNome.FURTIVIDADE,
    modificadores[1],
    Caracteristica.FURTIVIDADE
  ),
  new Pericia(12, PericiaNome.GUERRA, modificadores[3], Caracteristica.GUERRA),
  new Pericia(
    13,
    PericiaNome.INICIATIVA,
    modificadores[1],
    Caracteristica.INICIATIVA
  ),
  new Pericia(
    14,
    PericiaNome.INTIMIDACAO,
    modificadores[5],
    Caracteristica.INTIMIDACAO
  ),
  new Pericia(
    15,
    PericiaNome.INTUICAO,
    modificadores[4],
    Caracteristica.INTUICAO
  ),
  new Pericia(
    16,
    PericiaNome.INVESTIGACAO,
    modificadores[3],
    Caracteristica.INVESTIGACAO
  ),
  new Pericia(
    17,
    PericiaNome.JOGATINA,
    modificadores[5],
    Caracteristica.JOGATINA
  ),
  new Pericia(
    18,
    PericiaNome.LADINAGEM,
    modificadores[1],
    Caracteristica.LADINAGEM
  ),
  new Pericia(19, PericiaNome.LUTA, modificadores[0], Caracteristica.LUTA),
  new Pericia(
    20,
    PericiaNome.MISTICISMO,
    modificadores[3],
    Caracteristica.MISTICISMO
  ),
  new Pericia(
    21,
    PericiaNome.NOBREZA,
    modificadores[3],
    Caracteristica.NOBREZA
  ),
  new Pericia(22, PericiaNome.OFICIO, modificadores[3], Caracteristica.OFICIO),
  new Pericia(
    23,
    PericiaNome.PERCEPCAO,
    modificadores[4],
    Caracteristica.PERCEPCAO
  ),
  new Pericia(
    24,
    PericiaNome.PILOTAGEM,
    modificadores[1],
    Caracteristica.PILOTAGEM
  ),
  new Pericia(
    25,
    PericiaNome.PONTARIA,
    modificadores[1],
    Caracteristica.PONTARIA
  ),
  new Pericia(
    26,
    PericiaNome.REFLEXOS,
    modificadores[1],
    Caracteristica.REFLEXOS
  ),
  new Pericia(
    27,
    PericiaNome.RELIGIAO,
    modificadores[4],
    Caracteristica.RELIGIAO
  ),
  new Pericia(
    28,
    PericiaNome.SOBREVIVENCIA,
    modificadores[4],
    Caracteristica.SOBREVIVENCIA
  ),
  new Pericia(
    29,
    PericiaNome.VONTADE,
    modificadores[4],
    Caracteristica.VONTADE
  ),
];
