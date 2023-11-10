import Buff from "@/entities/buff/model/Buff";
import { BuffType } from "@/entities/buff/model/BuffType";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import { PoderTipo } from "../model/PoderTipo";
import PoderTormenta from "../model/PoderTormenta";
import { PreRequisito } from "../model/PreRequisito";

const dentesAfiados = new PoderTormenta(
  "Dentes Afiados",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderTormenta,
  Categoria.PoderTormenta
);

const anatomiaInsana = new PoderTormenta(
  "Anatomia Insana",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderTormenta,
  Categoria.PoderTormenta
);

export const poderesTormenta: Poder[] = [
  anatomiaInsana,
  new PoderTormenta(
    "Antenas",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INICIATIVA, 1, BuffType.BASE),
      new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
      new Buff(Caracteristica.VONTADE, 1, BuffType.BASE),
    ],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Armamento Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Articulações Flexíveis",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Asas Insetoides",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Carapaça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Corpo Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Cuspir Enxame",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  dentesAfiados,
  new PoderTormenta(
    "Desprezar a Realidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Empunhadura Rubra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Fome de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Larva Explosiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta,
    [new PreRequisito(dentesAfiados)]
  ),
  new PoderTormenta(
    "Legião Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta,
    [new PreRequisito(anatomiaInsana)]
  ),
  new PoderTormenta(
    "Mãos Membranosas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Estendidos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Extras",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Mente Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Olhos Vermelhos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Pele Corrompida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Sangue Ácido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Visco Rubro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
];
