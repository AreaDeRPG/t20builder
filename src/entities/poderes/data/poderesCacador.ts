import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { ambidestria, arqueiro, impeto } from "./PoderesComuns";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "@/entities/buff/model/BuffType";
import { BuffStack } from "@/entities/buff/model/BuffStack";

const escaramuca = new PoderClasse(
  "Caçador",
  "Escaramuça",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 2)),
    new PreRequisito(6),
  ]
);

export const poderesCacador: Poder[] = [
  ambidestria,
  new PoderClasse(
    "Caçador",
    "Armadilha: Arataca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Espinhos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Laço",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Rede",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilheiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(5)]
  ),
  arqueiro,
  new PoderClasse(
    "Caçador",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Bote",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(ambidestria), new PreRequisito(6)]
  ),
  new PoderClasse(
    "Caçador",
    "Camuflagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Chuva de Lâminas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 4)),
      new PreRequisito(ambidestria),
      new PreRequisito(12),
    ]
  ),
  new PoderClasse(
    "Caçador",
    "Companheiro Animal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderClasse(
    "Caçador",
    "Elo com a Natureza",
    Fonte.BASICO,
    [],
    [
      new Buff(
        Caracteristica.PM,
        Atributos.SABEDORIA,
        BuffType.BASE,
        BuffStack.ATRIBUTO_SABEDORIA
      ),
    ],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
      new PreRequisito(3),
    ]
  ),
  new PoderClasse(
    "Caçador",
    "Emboscar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Empatia Selvagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  escaramuca,
  new PoderClasse(
    "Caçador",
    "Escaramuça Superior",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(escaramuca), new PreRequisito(12)]
  ),
  new PoderClasse(
    "Caçador",
    "Espreitar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Ervas Curativas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  impeto,
  new PoderClasse(
    "Caçador",
    "Inimigo de (Criatura)",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Olho do Falcão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Ponto Fraco",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
