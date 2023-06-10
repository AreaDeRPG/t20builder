import { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";

export default class Biografia {
  public readonly id: number;
  private _nome: string;
  private _fonte: Fonte;
  private _habilidades: Habilidade[];
  private _habilidadeSelect1: Habilidade;
  private _habilidadeSelect2: Habilidade;
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[]
  ) {
    this.id = id;
    this._nome = nome;
    this._fonte = fonte;
    this._habilidades = habilidades;
    this._habilidadeSelect1 = undefined as unknown as Habilidade;
    this._habilidadeSelect2 = undefined as unknown as Habilidade;
  }

  public get nome(): string {
    return this._nome;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public get habilidades(): Habilidade[] {
    return this._habilidades;
  }

  public get habilidadeSelect1(): Habilidade {
    return this._habilidadeSelect1;
  }
  public set habilidadeSelect1(value: Habilidade) {
    this._habilidadeSelect1 = value;
  }

  public get habilidadeSelect2(): Habilidade {
    return this._habilidadeSelect2;
  }
  public set habilidadeSelect2(value: Habilidade) {
    this._habilidadeSelect2 = value;
  }
}
