import Habilidade from "@/entities/habilidades/model/Habilidades";
import { PoderTipo } from "./PoderTipo";
import { Fonte } from "@/entities/fonte/fonte";
import Buff from "@/entities/buff/model/Buff";

export default class Poder extends Habilidade {
  tipo: PoderTipo;
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs: Buff[] | undefined,
    tipo: PoderTipo
  ) {
    super(id, nome, fonte, habilidades, buffs);
    this.tipo = tipo;
  }
}
