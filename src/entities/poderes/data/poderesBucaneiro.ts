import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const jogatina = treinamentoPericias.filter((el) =>
  [PericiaNome.JOGATINA].includes(el.nome as PericiaNome)
)[0];

const intimidacao = treinamentoPericias.filter((el) =>
  [PericiaNome.INTIMIDACAO].includes(el.nome as PericiaNome)
)[0];

const luta = treinamentoPericias.filter((el) =>
  [PericiaNome.INTIMIDACAO].includes(el.nome as PericiaNome)
)[0];

const flageloMares = new PoderClasse(
  "Bucaneiro",
  "Flagelo dos Mares",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(intimidacao)]
);

const esgremista = new PoderClasse(
  "Bucaneiro",
  "Esgrimista",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
);

const pistoleiro = new PoderClasse(
  "Bucaneiro",
  "Pistoleiro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const aparar = new PoderClasse(
  "Bucaneiro",
  "Aparar",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(esgremista)]
);

export const poderesBucaneiro: Poder[] = [
  new PoderClasse(
    "Bucaneiro",
    "Abusar dos Fracos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(flageloMares)]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Amigos no Porto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
      new PreRequisito(6),
    ]
  ),
  aparar,
  new PoderClasse(
    "Bucaneiro",
    "Apostador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(jogatina)]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Ataque Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Aventureiro Ávido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Bravata Audaz",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Bravata Imprudente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "En Garde",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(esgremista)]
  ),
  esgremista,
  flageloMares,
  new PoderClasse(
    "Bucaneiro",
    "Folião",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Grudar o Cano",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(pistoleiro), new PreRequisito(luta)]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Pernas do Mar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  pistoleiro,
  new PoderClasse(
    "Bucaneiro",
    "Presença Paralisante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
      new PreRequisito(4),
    ]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Ripostar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(aparar), new PreRequisito(12)]
  ),
  new PoderClasse(
    "Bucaneiro",
    "Touché",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(aparar), new PreRequisito(10)]
  ),
];
