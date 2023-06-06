import type { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import Modificador from "@/entities/modificadores/model/Modificador";

export default class Raca {
  public readonly id: number;
  private _nome: string;
  private _modificadores: Modificador[];
  private _fonte: Fonte;
  private _habilidades: Habilidade[];

  constructor(
    id: number,
    nome: string,
    modificadores: Modificador[],
    habilidades: Habilidade[],
    fonte: Fonte
  ) {
    this.id = id;
    this._nome = nome;
    this._modificadores = modificadores;
    this._habilidades = habilidades;
    this._fonte = fonte;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get modificadores(): Modificador[] {
    return this._modificadores;
  }

  public set modificadores(value: Modificador[]) {
    this._modificadores = value;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public set fonte(value: Fonte) {
    this._fonte = value;
  }

  public get habilidades(): Habilidade[] {
    return this._habilidades;
  }

  public set habilidades(value: Habilidade[]) {
    this._habilidades = value;
  }
}
