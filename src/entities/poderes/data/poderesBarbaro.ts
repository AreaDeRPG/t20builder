import { Atributos } from "@/entities/atributos";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { treinamentoPericias } from "@/entities/pericias";
import { impeto } from "./PoderesComuns";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const intimidacao = treinamentoPericias.filter((el) =>
  [PericiaNome.INTIMIDACAO].includes(el.nome as PericiaNome)
)[0];

const almaBronze = new PoderClasse(
  "Barbaro",
  "Alma de Bronze",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const peleFerro = new PoderClasse(
  "Barbaro",
  "Pele de Ferro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const poderesBarbaro: Poder[] = [
  almaBronze,
  new PoderClasse(
    "Barbaro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Brado Assustador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(intimidacao)]
  ),
  new PoderClasse(
    "Barbaro",
    "Crítico Brutal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  new PoderClasse(
    "Barbaro",
    "Destruidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1))]
  ),
  new PoderClasse(
    "Barbaro",
    "Espírito Inquebrável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(almaBronze)]
  ),
  new PoderClasse(
    "Barbaro",
    "Esquiva Sobrenatural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Força Indomável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Frenesi",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Fúria da Savana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Fúria Raivosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Golpe Poderoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  impeto,
  new PoderClasse(
    "Barbaro",
    "Investida Imprudente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Pele de Aço",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(peleFerro), new PreRequisito(8)]
  ),
  peleFerro,
  new PoderClasse(
    "Barbaro",
    "Sangue dos Inimigos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Superstição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Totem Espiritual",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
      new PreRequisito(4),
    ]
  ),
  new PoderClasse(
    "Barbaro",
    "Vigor Primal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
