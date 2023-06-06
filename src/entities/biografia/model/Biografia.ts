import { Fonte } from "@/entities/fonte/fonte";

export default class Biografia {
  id: number;
  nome: string;
  fonte: Fonte;
  constructor(id: number, nome: string, fonte: Fonte) {
    this.id = id;
    this.nome = nome;
    this.fonte = fonte;
  }
}
