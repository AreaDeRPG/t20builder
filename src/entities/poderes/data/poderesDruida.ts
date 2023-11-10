import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";
import { treinamentoPericias } from "@/entities/pericias";

const adestramento = treinamentoPericias.filter((el) =>
  [PericiaNome.ADESTRAMENTO].includes(el.nome as PericiaNome)
)[0];

const companheiroAnimal = new PoderClasse(
  "Druida",
  "Companheiro Animal",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
    new PreRequisito(adestramento),
  ]
);

const aspectoInverno = new PoderClasse(
  "Druida",
  "Aspecto do Inverno",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const aspectoOutono = new PoderClasse(
  "Druida",
  "Aspecto do Outono",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const aspectoPrimavera = new PoderClasse(
  "Druida",
  "Aspecto da Primavera",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const aspectoVerao = new PoderClasse(
  "Druida",
  "Aspecto do Verão",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const formaSelvagem = new PoderClasse(
  "Druida",
  "Forma Selvagem",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const formaSelvagemAprimorada = new PoderClasse(
  "Druida",
  "Forma Selvagem Aprimorada",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(formaSelvagem), new PreRequisito(6)]
);

export const poderesDruida: Poder[] = [
  aspectoInverno,
  aspectoOutono,
  aspectoPrimavera,
  aspectoVerao,
  new PoderClasse(
    "Druida",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  companheiroAnimal,
  new PoderClasse(
    "Druida",
    "Companheiro Animal Aprimorado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(companheiroAnimal), new PreRequisito(6)]
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal Lendário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(companheiroAnimal), new PreRequisito(18)]
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(companheiroAnimal), new PreRequisito(8)]
  ),
  new PoderClasse(
    "Druida",
    "Coração da Selva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Espírito dos Equinócios",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(aspectoPrimavera),
      new PreRequisito(aspectoOutono),
      new PreRequisito(10),
    ]
  ),
  new PoderClasse(
    "Druida",
    "Espírito dos Solstícios",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(aspectoVerao),
      new PreRequisito(aspectoInverno),
      new PreRequisito(10),
    ]
  ),
  new PoderClasse(
    "Druida",
    "Força dos Penhascos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(4)]
  ),
  new PoderClasse(
    "Druida",
    "Forma Primal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(18)]
  ),
  formaSelvagem,
  formaSelvagemAprimorada,
  new PoderClasse(
    "Druida",
    "Forma Selvagem Superior",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(formaSelvagemAprimorada), new PreRequisito(12)]
  ),

  new PoderClasse(
    "Druida",
    "Liberdade da Pradaria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Magia Natural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(formaSelvagem)]
  ),
  new PoderClasse(
    "Druida",
    "Presas Afiadas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Segredos da Natureza",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Tranquilidade dos Lagos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
