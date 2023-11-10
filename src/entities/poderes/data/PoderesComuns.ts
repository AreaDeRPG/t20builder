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
