/* eslint-disable */
import { Atributos } from "./atributos";
const _ = require("lodash");
export default class Utils {
  static getAbreviacao(atributo: Atributos): string {
    switch (atributo) {
      case Atributos.FORCA:
        return "For";
      case Atributos.DESTREZA:
        return "Des";
      case Atributos.CONSTITUICAO:
        return "Con";
      case Atributos.INTELIGENCIA:
        return "Int";
      case Atributos.SABEDORIA:
        return "Sab";
      case Atributos.CARISMA:
        return "Car";
      case Atributos.LIVRE:
        return "Livre";
      default:
        return "";
    }
  }
  static rangeAtributoBase(value: number): number {
    if (value > 4) {
      value = 4;
    } else if (value < -1) {
      value = -1;
    } else if (isNaN(value)) {
      value = 0;
    }
    return value;
  }

  static meioNivel(value: number): number {
    return Math.floor(value / 2);
  }

  static deepClone(obj: any): any {
    _.cloneDeep(obj);
  }
}
