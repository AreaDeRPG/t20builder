import { modificadores } from "../modificadores";
import { origens } from "../origem";
import { pericias } from "../pericias";
import { racas } from "../racas";
import Ficha from "./model/Ficha";

export const fichas: Ficha[] = [
  new Ficha(1, racas[0], origens[0], modificadores, pericias),
];

export const activeFicha: Ficha = fichas[0];
