import { Atributos } from "@/entities/atributos";
import { Circulo } from "./Circulo";
import { Tradicao } from "./Tradicao";
import { Escola } from "./Escola";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { Fonte } from "@/entities/fonte/fonte";
import { Categoria } from "@/entities/categoria/model/Categoria";

export default class Magia extends Habilidade {
  private _circulo: Circulo;
  private _tradicao: Tradicao;
  private _escola: Escola;
  private _atributoChave: Atributos;

  constructor(
    nome: string,
    fonte: Fonte,
    magias: Magia[],
    circulo: Circulo,
    tradicao: Tradicao,
    escola: Escola,
    atributoChave?: Atributos
  ) {
    super(nome, fonte, magias, undefined, Categoria.Magia);
    this._circulo = circulo;
    this._tradicao = tradicao;
    this._escola = escola;
    this._atributoChave = atributoChave ?? Atributos.CARISMA;
  }

  public get circulo(): Circulo {
    return this._circulo;
  }

  public get escola(): Escola {
    return this._escola;
  }

  public get tradicao(): Tradicao {
    return this._tradicao;
  }

  public get atributoChave(): Atributos {
    return this._atributoChave;
  }
  public set atributoChave(atributo: Atributos) {
    this._atributoChave = atributo;
  }
}
