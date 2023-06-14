import { Fonte } from "@/entities/fonte/fonte";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import Pericia from "@/entities/pericias/model/Pericia";

export default class Classe {
  public readonly id: number;
  private _nome: string;
  private _pvInicial: number;
  private _pvNivel: number;
  private _pmNivel: number;
  private _periciasFixas: Habilidade[];
  private _periciasExtras: Habilidade[];
  private _periciasExtrasTreinadas: Habilidade[];
  private _periciasTreinadas: number;
  private _habilidades: Habilidade[][];
  private _fonte: Fonte;

  constructor(
    id: number,
    nome: string,
    pvInicial: number,
    pvNivel: number,
    pmNivel: number,
    periciasFixas: Habilidade[],
    periciasExtras: Habilidade[],
    periciasTreinadas: number,
    habilidades: Habilidade[][],
    fonte: Fonte
  ) {
    this.id = id;
    this._nome = nome;
    this._pvInicial = pvInicial;
    this._pvNivel = pvNivel;
    this._pmNivel = pmNivel;
    this._periciasFixas = periciasFixas;
    this._periciasTreinadas = periciasTreinadas;
    this._periciasExtras = periciasExtras;
    this._periciasExtrasTreinadas = [];
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

  public get pvNivel(): number {
    return this._pvNivel;
  }

  public get pmNivel(): number {
    return this._pmNivel;
  }

  public get pericias(): Pericia[] {
    return this.pericias;
  }

  public get habilidades(): Habilidade[][] {
    return this._habilidades;
  }

  public get fonte(): Fonte {
    return this._fonte;
  }

  public get periciasTreinadas(): number {
    return this._periciasTreinadas;
  }

  public get periciasFixas(): Habilidade[] {
    return this._periciasFixas;
  }

  public get periciasExtras(): Habilidade[] {
    return this._periciasExtras ?? [];
  }

  public get periciasExtrasTreinadas(): Habilidade[] {
    return this._periciasExtrasTreinadas;
  }
}
