import Pericia from "./model/Pericia";
import { modificadores } from "../modificadores";
import { Caracteristica } from "../caracteristica/model/Caracteristica";

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
