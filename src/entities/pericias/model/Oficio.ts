import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import Modificador from "@/entities/modificadores/model/Modificador";
import Pericia from "./Pericia";
import { PericiaNome } from "./PericiaNome";

export default class Oficio extends Pericia {
  private _oficio: string;
  constructor(
    id: number,
    nome: PericiaNome,
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
