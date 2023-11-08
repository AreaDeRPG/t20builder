import { ref } from "vue";
import { modificadores } from "../modificadores";
import { origens } from "../origem";
import { pericias } from "../pericias";
import { racas } from "../racas";
import Ficha from "./model/Ficha";

export const fichas = ref([
  new Ficha(1, 1, racas[0], origens[0], modificadores, pericias),
]);

export const currentLevel = ref(0);

export const activeFicha = fichas.value[0];
