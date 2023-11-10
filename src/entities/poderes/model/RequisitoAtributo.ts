import { Atributos } from "@/entities/atributos";

export class RequisitoAtributo {
  atributo: Atributos;
  valor: number;
  constructor(atributo: Atributos, valor: number) {
    this.atributo = atributo;
    this.valor = valor;
  }
}
