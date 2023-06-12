import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import type { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import Magia from "@/entities/magia/model/Magia";
import Modificador from "@/entities/modificadores/model/Modificador";

export default class Raca {
  public readonly id: number;
  private _nome: string;
  private _modificadores: Modificador[];
  private _fonte: Fonte;
  private _habilidades: Habilidade[];
  private _criatura?: Caracteristica;
  private _barrarBiografia: boolean;

  constructor(
    id: number,
    nome: string,
    modificadores: Modificador[],
    habilidades: Habilidade[],
    fonte: Fonte,
    criatura?: Caracteristica,
    barrarBiografia?: boolean
  ) {
    this.id = id;
    this._nome = nome;
    this._modificadores = modificadores;
    this._habilidades = habilidades;
    this._fonte = fonte;
    this._criatura = criatura ?? Caracteristica.HUMANOIDE;
    this._barrarBiografia = barrarBiografia ?? false;
  }

  public get nome(): string {
    return this._nome;
  }

  public get modificadores(): Modificador[] {
    return this._modificadores;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public get habilidades(): Habilidade[] {
    return this._habilidades;
  }

  public get barrarBiografia(): boolean {
    return this._barrarBiografia;
  }
}
