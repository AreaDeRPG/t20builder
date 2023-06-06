import { Atributos } from "@/entities/atributos";
import Utils from "@/entities/util";

export default class Modificador {
  atributo: Atributos;
  abreviacao: string;
  base: number;
  raca: number;
  bonus: number;
  outros: number[];

  constructor(atributo: Atributos, base: number, raca: number, bonus: number) {
    this.atributo = atributo;
    this.base = base;
    this.raca = raca;
    this.bonus = bonus;
    this.outros = [];
    this.abreviacao = Utils.getAbreviacao(atributo);
  }

  getTotal(): number {
    const total: number =
      this.base +
      this.raca +
      this.bonus +
      this.outros.reduce((acc, value) => acc + value, 0);
    return total;
  }

  validateBaseValue(value: number): void {
    this.base = Utils.rangeAtributoBase(value);
  }
}
