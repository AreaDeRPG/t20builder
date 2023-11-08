import Buff from "@/entities/buff/model/Buff";
import { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { PoderTipo } from "./PoderTipo";
import { Categoria } from "@/entities/categoria/model/Categoria";
import Poder from "./Poder";

export default class PoderClasse extends Poder {
  classe: string;
  constructor(
    classe: string,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs: Buff[] | undefined,
    tipo: PoderTipo,
    categoria?: Categoria
  ) {
    super(nome, fonte, habilidades, buffs, tipo, categoria);
    this.classe = classe;
  }
}
