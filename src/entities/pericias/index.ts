import Pericia from "./model/Pericia";
import { modificadores } from "../modificadores";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import Habilidade from "../habilidades/model/Habilidades";
import { Fonte } from "../fonte/fonte";
import Buff from "../buff/model/Buff";
import { Categoria } from "../categoria/model/Categoria";
import { BuffType } from "../buff/model/BuffType";

export const treinamentoPericias = [
  new Habilidade(
    "Acrobacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ACROBACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Adestramento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ADESTRAMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Atletismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Atuação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATUACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Cavalgar",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CAVALGAR, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Conhecimento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CONHECIMENTO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Cura",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CURA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Diplomacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Enganação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ENGANACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Fortitude",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Furtividade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Guerra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.GUERRA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Iniciativa",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Intimidação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Intuição",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTUICAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Investigação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Jogatina",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.JOGATINA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Ladinagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LADINAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Luta",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LUTA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Misticismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.MISTICISMO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Nobreza",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.NOBREZA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Ofício",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.OFICIO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Percepção",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Pilotagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PILOTAGEM, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Pontaria",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PONTARIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Reflexos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.REFLEXOS, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Religião",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.RELIGIAO, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Sobrevivência",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Vontade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VONTADE, 0, BuffType.PROFICIENCY)],
    Categoria.Pericia
  ),
];

export const pericias = [
  new Pericia(1, "Acrobacia", modificadores[1], Caracteristica.ACROBACIA),
  new Pericia(2, "Adestramento", modificadores[5], Caracteristica.ADESTRAMENTO),
  new Pericia(3, "Atletismo", modificadores[0], Caracteristica.ATLETISMO),
  new Pericia(4, "Atuação", modificadores[5], Caracteristica.ATUACAO),
  new Pericia(5, "Cavalgar", modificadores[1], Caracteristica.CAVALGAR),
  new Pericia(6, "Conhecimento", modificadores[3], Caracteristica.CONHECIMENTO),
  new Pericia(7, "Cura", modificadores[4], Caracteristica.CURA),
  new Pericia(8, "Diplomacia", modificadores[5], Caracteristica.DIPLOMACIA),
  new Pericia(9, "Enganação", modificadores[5], Caracteristica.ENGANACAO),
  new Pericia(10, "Fortitude", modificadores[2], Caracteristica.FORTITUDE),
  new Pericia(11, "Furtividade", modificadores[1], Caracteristica.FURTIVIDADE),
  new Pericia(12, "Guerra", modificadores[3], Caracteristica.GUERRA),
  new Pericia(13, "Iniciativa", modificadores[1], Caracteristica.INICIATIVA),
  new Pericia(14, "Intimidação", modificadores[5], Caracteristica.INTIMIDACAO),
  new Pericia(15, "Intuição", modificadores[4], Caracteristica.INTUICAO),
  new Pericia(
    16,
    "Investigação",
    modificadores[3],
    Caracteristica.INVESTIGACAO
  ),
  new Pericia(17, "Jogatina", modificadores[5], Caracteristica.JOGATINA),
  new Pericia(18, "Ladinagem", modificadores[1], Caracteristica.LADINAGEM),
  new Pericia(19, "Luta", modificadores[0], Caracteristica.LUTA),
  new Pericia(20, "Misticismo", modificadores[3], Caracteristica.MISTICISMO),
  new Pericia(21, "Nobreza", modificadores[3], Caracteristica.NOBREZA),
  new Pericia(22, "Oficio", modificadores[3], Caracteristica.OFICIO),
  new Pericia(23, "Percepção", modificadores[4], Caracteristica.PERCEPCAO),
  new Pericia(24, "Pilotagem", modificadores[1], Caracteristica.PILOTAGEM),
  new Pericia(25, "Pontaria", modificadores[1], Caracteristica.PONTARIA),
  new Pericia(26, "Reflexos", modificadores[1], Caracteristica.REFLEXOS),
  new Pericia(27, "Religião", modificadores[4], Caracteristica.RELIGIAO),
  new Pericia(
    28,
    "Sobrevivencia",
    modificadores[4],
    Caracteristica.SOBREVIVENCIA
  ),
  new Pericia(29, "Vontade", modificadores[4], Caracteristica.VONTADE),
];
