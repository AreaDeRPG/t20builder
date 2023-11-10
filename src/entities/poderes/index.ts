import { poderesArcanista } from "./data/poderesArcanista";
import { poderesBarbaro } from "./data/poderesBarbaro";
import { poderesBardo } from "./data/poderesBardo";
import { poderesBucaneiro } from "./data/poderesBucaneiro";
import { poderesCacador } from "./data/poderesCacador";
import { poderesCavaleiro } from "./data/poderesCavaleiro";
import { poderesClerigo } from "./data/poderesClerigo";
import { poderesCombate } from "./data/poderesCombate";
import { poderesConcedidos } from "./data/poderesConcedidos";
import { poderesDestino } from "./data/poderesDestino";
import { poderesDruida } from "./data/poderesDruida";
import { poderesGuerreiro } from "./data/poderesGuerreiro";
import { poderesInventor } from "./data/poderesInventor";
import { poderesLadino } from "./data/poderesLadino";
import { poderesLutador } from "./data/poderesLutador";
import { poderesMagia } from "./data/poderesMagia";
import { poderesNobre } from "./data/poderesNobre";
import { poderesPaladino } from "./data/poderesPaladino";
import { poderesTormenta } from "./data/poderesTormenta";
import Poder from "./model/Poder";

interface ListaPoderes {
  [key: string]: Poder[];
}

export const poderes: ListaPoderes = {
  poderesCombate: poderesCombate,
  poderesDestino: poderesDestino,
  poderesTormenta: poderesTormenta,
  poderesMagia: poderesMagia,
  poderesConcedidos: poderesConcedidos,
  poderesArcanista: poderesArcanista.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta,
    poderesMagia
  ),
  poderesBarbaro: poderesBarbaro.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesBardo: poderesBardo.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta,
    poderesMagia
  ),
  poderesBucaneiro: poderesBucaneiro.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesCacador: poderesCacador.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesCavaleiro: poderesCavaleiro.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesClerigo: poderesClerigo.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta,
    poderesMagia
  ),
  poderesDruida: poderesDruida.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta,
    poderesMagia
  ),
  poderesGuerreiro: poderesGuerreiro.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesInventor: poderesInventor.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesLadino: poderesLadino.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesLutador: poderesLutador.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesNobre: poderesNobre.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
  poderesPaladino: poderesPaladino.concat(
    poderesCombate,
    poderesDestino,
    poderesTormenta
  ),
};
