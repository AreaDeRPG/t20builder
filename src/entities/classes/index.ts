import { Fonte } from "../fonte/fonte";
import { treinamentoPericias } from "../pericias";
import Classe from "./model/Classe";

export const classes: Classe[] = [
  new Classe(
    1,
    "Arcanista",
    8,
    2,
    6,
    treinamentoPericias.filter((el) =>
      ["Misticismo", "Vontade"].includes(el.nome)
    ),
    treinamentoPericias.filter((el) =>
      [
        "Conhecimento",
        "Diplomacia",
        "Enganação",
        "Guerra",
        "Iniciativa",
        "Intimidação",
        "Intuição",
        "Investigação",
        "Nobreza",
        "Percepção",
      ].includes(el.nome)
    ),
    2,
    [],
    Fonte.BASICO
  ),
  new Classe(
    2,
    "Bárbaro",
    24,
    6,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    3,
    "Bardo",
    12,
    3,
    4,
    treinamentoPericias.filter((el) =>
      ["Atuação", "Reflexos"].includes(el.nome)
    ),
    [],
    6,
    [],
    Fonte.BASICO
  ),
  new Classe(
    4,
    "Bucaneiro",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Reflexos"].includes(el.nome)),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    5,
    "Caçador",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Sobrevivência"].includes(el.nome)),
    [],
    6,
    [],
    Fonte.BASICO
  ),
  new Classe(
    6,
    "Cavaleiro",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    [],
    2,
    [],
    Fonte.BASICO
  ),
  new Classe(
    7,
    "Clérigo",
    16,
    5,
    5,
    treinamentoPericias.filter((el) =>
      ["Religião", "Vontade"].includes(el.nome)
    ),
    [],
    2,
    [],
    Fonte.BASICO
  ),
  new Classe(
    8,
    "Druida",
    16,
    4,
    4,
    treinamentoPericias.filter((el) =>
      ["Sobrevivência", "Vontade"].includes(el.nome)
    ),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    9,
    "Guerreiro",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude"].includes(el.nome)),
    [],
    2,
    [],
    Fonte.BASICO
  ),
  new Classe(
    10,
    "Inventor",
    12,
    3,
    4,
    treinamentoPericias.filter((el) => ["Vontade"].includes(el.nome)),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    11,
    "Ladino",
    12,
    3,
    4,
    treinamentoPericias.filter((el) =>
      ["Ladinagem", "Reflexos"].includes(el.nome)
    ),
    [],
    8,
    [],
    Fonte.BASICO
  ),
  new Classe(
    12,
    "Lutador",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    13,
    "Nobre",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Vontade"].includes(el.nome)),
    [],
    4,
    [],
    Fonte.BASICO
  ),
  new Classe(
    14,
    "Paladino",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Luta", "Vontade"].includes(el.nome)),
    [],
    2,
    [],
    Fonte.BASICO
  ),
];
