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
    1,
    "Ataque Poderoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new Poder(
    1,
    "Estilo de Disparo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new Poder(
    1,
    "Proficiência",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),

  new Poder(
    1,
    "Vitalidade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PV, 0, BuffType.BYLEVEL)],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),

  new Poder(
    1,
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
    1,
    "Medicina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
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
    1,
    "Comandar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Sortudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Atraente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Torcida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Venefício",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Sentidos Aguçados",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Aparência Inofensiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Lobo Solitário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Investigador",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Surto Heroico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
    "Foco em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new Poder(
    1,
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
    1,
    "Anatomia Insana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new Poder(
    1,
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
