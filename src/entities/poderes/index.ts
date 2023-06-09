import { Fonte } from "../fonte/fonte";
import Poder from "./model/Poder";
import { PoderTipo } from "./model/PoderTipo";

interface ListaPoderes {
  [key: string]: Poder[];
}

const poderesCombate: Poder[] = [
  new Poder(
    1,
    "Acuidade com Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate
  ),
  new Poder(
    1,
    "Arma Secundaria Grande",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate
  ),
  new Poder(
    1,
    "Arremesso Multiplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate
  ),
  new Poder(
    1,
    "Ataque com Escudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate
  ),
  new Poder(1, "Ataque Pesado", Fonte.BASICO, [], [], PoderTipo.PoderCombate),
  new Poder(1, "Ataque Poderoso", Fonte.BASICO, [], [], PoderTipo.PoderCombate),
];

const poderesDestino: Poder[] = [
  new Poder(
    1,
    "Treino em Pericia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino
  ),
];

export const poderes: ListaPoderes = {
  poderesCombate: poderesCombate,
  poderesDestino: poderesDestino,
};
