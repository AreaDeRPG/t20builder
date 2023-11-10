import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";

export const ambidestria = new PoderClasse(
  "Caçador",
  "Ambidestria",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 2))]
);

export const impeto = new PoderClasse(
  "Barbaro",
  "Ímpeto",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const arqueiro = new PoderClasse(
  "Caçador",
  "Arqueiro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1))]
);

export const esgrimista = new PoderClasse(
  "Guerreiro",
  "Esgrimista",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const autoridadeFeudal = new PoderClasse(
  "Nobre",
  "Autoridade Feudal",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(6)]
);

export const titulo = new PoderClasse(
  "Cavaleiro",
  "Título",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(autoridadeFeudal), new PreRequisito(10)]
);

export const solidez = new PoderClasse(
  "Guerreiro",
  "Solidez",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);
