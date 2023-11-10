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
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "@/entities/buff/model/BuffType";
import { BuffStack } from "@/entities/buff/model/BuffStack";

const intimidacao = treinamentoPericias.filter((el) =>
  PericiaNome.INTIMIDACAO.includes(el.nome as PericiaNome)
)[0];

const lutadorChao = new PoderClasse(
  "Lutador",
  "Lutador de Chão",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const chave = new PoderClasse(
  "Lutador",
  "Chave",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(lutadorChao),
    new PreRequisito(4),
    new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1)),
  ]
);

const trocacao = new PoderClasse(
  "Lutador",
  "Trocação",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(6)]
);

const sarado = new PoderClasse(
  "Lutador",
  "Sarado",
  Fonte.BASICO,
  [],
  [
    new Buff(
      Caracteristica.PV,
      Atributos.FORCA,
      BuffType.BASE,
      BuffStack.ATRIBUTO_FORCA
    ),
    new Buff(
      Caracteristica.FORTITUDE,
      Atributos.FORCA,
      BuffType.BASE,
      BuffStack.ATRIBUTO_FORCA
    ),
  ],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 3))]
);
export const poderesLutador: Poder[] = [
  new PoderClasse(
    "Lutador",
    "Arma Improvisada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Até Acertar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Braços Calejados",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Cabeçada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  chave,
  new PoderClasse(
    "Lutador",
    "Confiança dos Ringues",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(8)]
  ),
  new PoderClasse(
    "Lutador",
    "Convencido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Baixo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Imprudente.",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Imobilização",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(chave), new PreRequisito(8)]
  ),
  new PoderClasse(
    "Lutador",
    "Língua dos Becos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1)),
      new PreRequisito(intimidacao),
    ]
  ),
  lutadorChao,
  new PoderClasse(
    "Lutador",
    "Nome na Arena",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(11)]
  ),
  new PoderClasse(
    "Lutador",
    "Punhos de Adamante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(8)]
  ),
  new PoderClasse(
    "Lutador",
    "Rasteira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  sarado,
  new PoderClasse(
    "Lutador",
    "Sequência Destruidora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(trocacao), new PreRequisito(12)]
  ),
  new PoderClasse(
    "Lutador",
    "Trincado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(10),
      new PreRequisito(sarado),
      new PreRequisito(new RequisitoAtributo(Atributos.CONSTITUICAO, 3)),
    ]
  ),
  trocacao,
  new PoderClasse(
    "Lutador",
    "Trocação Tumultuosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(trocacao), new PreRequisito(8)]
  ),
  new PoderClasse(
    "Lutador",
    "Valentão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Voadora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
