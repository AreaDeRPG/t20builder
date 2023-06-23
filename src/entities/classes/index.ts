import { Fonte } from "../fonte/fonte";
import { habilidadesClasse } from "../habilidades";
import Habilidade from "../habilidades/model/Habilidades";
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
    habilidadesClasse.arcanista,
    Fonte.BASICO
  ),
  new Classe(
    2,
    "Bárbaro",
    24,
    6,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Iniciativa",
        "Intimidação",
        "Percepção",
        "Pontaria",
        "Sobrevivência",
        "Vontade",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.barbaro,
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
    treinamentoPericias.filter((el) =>
      [
        "Acrobacia",
        "Cavalgar",
        "Conhecimento",
        "Diplomacia",
        "Enganação",
        "Iniciativa",
        "Intuição",
        "Investigação",
        "Jogatina",
        "Ladinagem",
        "Luta",
        "Misticismo",
        "Nobreza",
        "Percepção",
        "Pontaria",
        "Vontade",
      ].includes(el.nome)
    ),
    6,
    habilidadesClasse.bardo,
    Fonte.BASICO
  ),
  new Classe(
    4,
    "Bucaneiro",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Reflexos"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Acrobacia",
        "Atletismo",
        "Atuação",
        "Enganação",
        "Fortitude",
        "Furtividade",
        "Iniciativa",
        "Intimidação",
        "Jogatina",
        "Luta",
        "Oficio",
        "Percepção",
        "Pilotagem",
        "Pontaria",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.bucaneiro,
    Fonte.BASICO,
    treinamentoPericias.filter((el) => ["Luta", "Pontaria"].includes(el.nome))
  ),
  new Classe(
    5,
    "Caçador",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Sobrevivência"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Cura",
        "Fortitude",
        "Furtividade",
        "Iniciativa",
        "Iniciativa",
        "Investigação",
        "Luta",
        "Oficio",
        "Percepção",
        "Pontaria",
        "Reflexos",
      ].includes(el.nome)
    ),
    6,
    habilidadesClasse.cacador,
    Fonte.BASICO,
    treinamentoPericias.filter((el) => ["Luta", "Pontaria"].includes(el.nome))
  ),
  new Classe(
    6,
    "Cavaleiro",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Diplomacia",
        "Guerra",
        "Iniciativa",
        "Intimidação",
        "Nobreza",
        "Percepção",
        "Vontade",
      ].includes(el.nome)
    ),
    2,
    habilidadesClasse.cavaleiro,
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
    treinamentoPericias.filter((el) =>
      [
        "Conhecimento",
        "Cura",
        "Diplomacia",
        "Fortitude",
        "Iniciativa",
        "Intuição",
        "Luta",
        "Misticismo",
        "Nobreza",
        "Oficio",
        "Percepção",
      ].includes(el.nome)
    ),
    2,
    habilidadesClasse.clerigo,
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
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Conhecimento",
        "Cura",
        "Fortitude",
        "Iniciativa",
        "Intuição",
        "Luta",
        "Misticismo",
        "Oficio",
        "Percepção",
        "Religião",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.druida,
    Fonte.BASICO
  ),
  new Classe(
    9,
    "Guerreiro",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Guerra",
        "Iniciativa",
        "Intimidação",
        "Luta",
        "Oficio",
        "Percepção",
        "Pontaria",
        "Reflexos",
      ].includes(el.nome)
    ),
    2,
    habilidadesClasse.guerreiro,
    Fonte.BASICO,
    treinamentoPericias.filter((el) => ["Luta", "Pontaria"].includes(el.nome))
  ),
  new Classe(
    10,
    "Inventor",
    12,
    3,
    4,
    treinamentoPericias.filter((el) => ["Vontade"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Conhecimento",
        "Cura",
        "Diplomacia",
        "Fortitude",
        "Iniciativa",
        "Investigação",
        "Luta",
        "Misticismo",
        "Oficio",
        "Pilotagem",
        "Percepção",
        "Pontaria",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.inventor,
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
    treinamentoPericias.filter((el) =>
      [
        "Acrobacia",
        "Atletismo",
        "Atuação",
        "Cavalgar",
        "Conhecimento",
        "Diplomacia",
        "Enganação",
        "Furtividade",
        "Iniciativa",
        "Intimidação",
        "Intuição",
        "Investigação",
        "Jogatina",
        "Luta",
        "Oficio",
        "Percepção",
        "Pilotagem",
        "Pontaria",
      ].includes(el.nome)
    ),
    8,
    habilidadesClasse.ladino,
    Fonte.BASICO
  ),
  new Classe(
    12,
    "Lutador",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Fortitude", "Luta"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Acrobacia",
        "Adestramento",
        "Atletismo",
        "Enganação",
        "Furtividade",
        "Iniciativa",
        "Intimidação",
        "Oficio",
        "Percepção",
        "Pontaria",
        "Reflexos",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.lutador,
    Fonte.BASICO
  ),
  new Classe(
    13,
    "Nobre",
    16,
    4,
    4,
    treinamentoPericias.filter((el) => ["Vontade"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atuação",
        "Cavalgar",
        "Conhecimento",
        "Diplomacia",
        "Enganação",
        "Fortitude",
        "Guerra",
        "Iniciativa",
        "Intimidação",
        "Intuição",
        "Investigação",
        "Jogatina",
        "Luta",
        "Nobreza",
        "Oficio",
        "Percepção",
        "Pontaria",
      ].includes(el.nome)
    ),
    4,
    habilidadesClasse.nobre,
    Fonte.BASICO,
    treinamentoPericias.filter((el) =>
      ["Diplomacia", "Intimidação"].includes(el.nome)
    )
  ),
  new Classe(
    14,
    "Paladino",
    20,
    5,
    3,
    treinamentoPericias.filter((el) => ["Luta", "Vontade"].includes(el.nome)),
    treinamentoPericias.filter((el) =>
      [
        "Adestramento",
        "Atletismo",
        "Cavalgar",
        "Cura",
        "Diplomacia",
        "Fortitude",
        "Guerra",
        "Iniciativa",
        "Intuição",
        "Nobreza",
        "Percepção",
        "Religião",
      ].includes(el.nome)
    ),
    2,
    habilidadesClasse.paladino,
    Fonte.BASICO
  ),
];
