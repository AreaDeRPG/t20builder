import { Acao } from "@/entities/acao/model/Acao";
import Buff from "@/entities/buff/model/Buff";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";

export default class Habilidade {
  public readonly id: number;
  private _nome: string;
  private _fonte: Fonte;
  private _habilidades: Habilidade[];
  private _select?: Habilidade;
  private _buffs?: Buff[];
  private _categoria: Categoria;
  private _acao: Acao;
  constructor(
    id: number,
    nome: string,
    fonte: Fonte,
    habilidades: Habilidade[],
    buffs?: Buff[],
    categoria?: Categoria,
    acao?: Acao,
    select?: Habilidade
  ) {
    this.id = id;
    this._nome = nome;
    this._fonte = fonte;
    this._habilidades = habilidades;
    this._buffs = buffs;
    this._categoria = categoria ?? Categoria.Outro;
    this._acao = acao ?? Acao.Livre;
    this._select = select;
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

  public get select(): Habilidade | undefined {
    return this._select instanceof Habilidade ? this._select : undefined;
  }

  public set select(value: Habilidade | undefined) {
    this._select = value;
  }

  public get buffs(): Buff[] {
    return this._buffs ?? [];
  }

  public get categoria(): Categoria {
    return this._categoria;
  }

  public get acao(): Acao {
    return this._acao;
  }
}
