import Buff from "@/entities/buff/model/Buff";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";

export default class Habilidade {
  public readonly id: number;
  private _nome: string;
  private _fonte: Fonte;
  private _habilidades: Habilidade[];
  private _habilidadeSelect?: Habilidade;
  private _buffs?: Buff[];
  private _categoria: Categoria;
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs: Buff[] | undefined,
    categoria?: Categoria
  ) {
    this.id = id;
    this._nome = nome;
    this._fonte = fonte;
    this._habilidades = habilidades;
    this._buffs = buffs;
    this._categoria = categoria ?? Categoria.Outro;
  }

  public get nome(): string {
    return this._nome;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public get habilidades(): Habilidade[] {
    return this._habilidades ?? [];
  }

  public get habilidadeSelect(): Habilidade | undefined {
    return this._habilidadeSelect;
  }

  public set habilidadeSelect(value: Habilidade | undefined) {
    this._habilidadeSelect = value;
  }

  public get buffs(): Buff[] {
    return this._buffs ?? [];
  }

  public get categoria(): Categoria {
    return this._categoria;
  }
}
