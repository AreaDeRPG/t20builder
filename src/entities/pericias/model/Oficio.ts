import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import Modificador from "@/entities/modificadores/model/Modificador";
import Pericia from "./Pericia";

export default class Oficio extends Pericia {
  private _oficio: string;
  constructor(
    id: number,
    nome: string,
    modificador: Modificador,
    caracteristica: Caracteristica,
    oficio: string
  ) {
    super(id, nome, modificador, caracteristica);
    this._oficio = oficio;
  }

  public get oficio(): string {
    return this._oficio;
  }
}
