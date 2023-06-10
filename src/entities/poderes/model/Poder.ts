import Habilidade from "@/entities/habilidades/model/Habilidades";
import { PoderTipo } from "./PoderTipo";
import { Fonte } from "@/entities/fonte/fonte";
import Buff from "@/entities/buff/model/Buff";
import { Categoria } from "@/entities/categoria/model/Categoria";

export default class Poder extends Habilidade {
  tipo: PoderTipo;
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs: Buff[] | undefined,
    tipo: PoderTipo,
    categoria?: Categoria
  ) {
    super(id, nome, fonte, habilidades, buffs, categoria);
    this.tipo = tipo;
  }
}
