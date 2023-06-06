import { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";

export default class Classe {
  public readonly id: number;
  private _nome: string;
  private _pvInicial: number;
  private _pvNivel: number;
  private _pmNivel: number;
  private _pericias: string[];
  private _habilidades: Habilidade[][];
  private _fonte: Fonte;

  constructor(
    id: number,
    nome: string,
    pvInicial: number,
    pvNivel: number,
    pmNivel: number,
    pericias: string[],
    habilidades: Habilidade[][],
    fonte: Fonte
  ) {
    this.id = id;
    this._nome = nome;
    this._pvInicial = pvInicial;
    this._pvNivel = pvNivel;
    this._pmNivel = pmNivel;
    this._pericias = pericias;
    this._habilidades = habilidades;
    this._fonte = fonte;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get pvInicial(): number {
    return this._pvInicial;
  }

  public set pvInicial(value: number) {
    this._pvInicial = value;
  }

  public get pvNivel(): number {
    return this._pvNivel;
  }

  public set pvNivel(value: number) {
    this._pvNivel = value;
  }

  public get pmNivel(): number {
    return this._pmNivel;
  }

  public set pmNivel(value: number) {
    this._pmNivel = value;
  }

  public get pericias(): string[] {
    return this._pericias;
  }

  public set pericias(value: string[]) {
    this.pericias = value;
  }

  public get habilidades(): Habilidade[][] {
    return this._habilidades;
  }

  public set habilidades(value: Habilidade[][]) {
    this._habilidades = value;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public set fonte(value: Fonte) {
    this.fonte = value;
  }
}
