import Buff from "@/entities/buff/model/Buff";
import { Fonte } from "@/entities/fonte/fonte";

export default class Habilidade {
  public readonly id: number;
  private _nome: string;
  private _fonte: Fonte;
  private _habilidades: Habilidade[];
  private _habilidadeSelect?: Habilidade | Habilidade[];
  private _buffs?: Buff[];
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs: Buff[] | undefined
  ) {
    this.id = id;
    this._nome = nome;
    this._fonte = fonte;
    this._habilidades = habilidades;
    this._buffs = buffs;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public set fonte(fonte: Fonte) {
    this._fonte = fonte;
  }

  public get habilidades(): Habilidade[] {
    return this._habilidades ?? [];
  }

  public set habilidades(habilidades: Habilidade[]) {
    this._habilidades = habilidades;
  }

  public get habilidadeSelect(): Habilidade | Habilidade[] | undefined {
    return this._habilidadeSelect;
  }

  public set habilidadeSelect(value: Habilidade | Habilidade[] | undefined) {
    this._habilidadeSelect = value;
  }

  public get buffs(): Buff[] {
    return this._buffs ?? [];
  }
}
