import { Atributos } from "@/entities/atributos";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const enganacao = treinamentoPericias.filter((el) =>
  [PericiaNome.ENGANACAO].includes(el.nome as PericiaNome)
)[0];

const investigacao = treinamentoPericias.filter((el) =>
  [PericiaNome.INVESTIGACAO].includes(el.nome as PericiaNome)
)[0];

const esgrimaMagica = new PoderClasse(
  "Bardo",
  "Esgrima Mágica",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const golpeMagico = new PoderClasse(
  "Bardo",
  "Golpe Mágico",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(esgrimaMagica)]
);

const baladaFascinante = new PoderClasse(
  "Bardo",
  "Música: Balada Fascinante",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const fascinarMassa = new PoderClasse(
  "Bardo",
  "Fascinar em Massa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(baladaFascinante)]
);

const manipular = new PoderClasse(
  "Bardo",
  "Manipular",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(baladaFascinante)]
);

const melodiaCurativa = new PoderClasse(
  "Bardo",
  "Música: Melodia Curativa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const poderesBardo: Poder[] = [
  new PoderClasse(
    "Bardo",
    "Arte Mágica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Aumentar Repertório",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Dança das Lâminas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(esgrimaMagica), new PreRequisito(10)]
  ),
  esgrimaMagica,
  new PoderClasse(
    "Bardo",
    "Estrelato",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  fascinarMassa,
  new PoderClasse(
    "Bardo",
    "Golpe Elemental",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(golpeMagico)]
  ),
  golpeMagico,
  new PoderClasse(
    "Bardo",
    "Inspiração Marcial",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Lendas e Histórias",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  manipular,
  new PoderClasse(
    "Bardo",
    "Manipular em Massa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(fascinarMassa),
      new PreRequisito(manipular),
      new PreRequisito(10),
    ]
  ),
  baladaFascinante,
  new PoderClasse(
    "Bardo",
    "Música: Canção Assustadora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  melodiaCurativa,
  new PoderClasse(
    "Bardo",
    "Melodia Restauradora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(melodiaCurativa),
      new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
    ]
  ),
  new PoderClasse(
    "Bardo",
    "Mestre dos Sussurros",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
      new PreRequisito(enganacao),
      new PreRequisito(investigacao),
    ]
  ),
  new PoderClasse(
    "Bardo",
    "Paródia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Prestidigitação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
];
