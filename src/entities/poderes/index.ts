import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import Poder from "./model/Poder";
import { PoderTipo } from "./model/PoderTipo";

interface ListaPoderes {
  [key: string]: Poder[];
}

const poderesCombate: Poder[] = [
  new Poder(
    "Ataque Poderoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new Poder(
    "Estilo de Disparo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new Poder(
    "Proficiência",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),

  new Poder(
    "Vitalidade",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PV, 0, BuffType.BYLEVEL),
      new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE),
    ],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),

  new Poder(
    "Ginete",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
];

const poderesDestino: Poder[] = [
  new Poder(
    "Medicina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Vontade de Ferro",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVEL),
      new Buff(Caracteristica.VONTADE, 2, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Comandar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Sortudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Atraente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Torcida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Venefício",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Sentidos Aguçados",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Aparência Inofensiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Lobo Solitário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Investigador",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Surto Heroico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Foco em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    "Atlético",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ATLETISMO, 2, BuffType.BASE),
      new Buff(Caracteristica.VELOCIDADE, 3, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
];

const poderesTormenta: Poder[] = [
  new Poder(
    "Anatomia Insana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new Poder(
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
];

export const poderes: ListaPoderes = {
  poderesCombate: poderesCombate,
  poderesDestino: poderesDestino,
  poderesTormenta: poderesTormenta,
};
