import Utils from "@/entities/util";
import { Treinamento } from "./Treinamento";
import Modificador from "@/entities/modificadores/model/Modificador";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";

export default class Pericia {
  public readonly id: number;
  private _nome: string;
  private _modificador: Modificador;
  private _treino: Treinamento;
  private _bonus: number[];
  private _caracteristica: Caracteristica;

  constructor(
    id: number,
    nome: string,
    modificador: Modificador,
    caracteristica: Caracteristica
  ) {
    this.id = id;
    this._nome = nome;
    this._modificador = modificador;
    this._treino = Treinamento.Destreinado;
    this._bonus = [];
    
    this._caracteristica = caracteristica;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get modificador(): Modificador {
    return this._modificador;
  }

  public set modificador(value: Modificador) {
    this._modificador = value;
  }

  public get treino(): Treinamento {
    return this._treino;
  }

  public set treino(value: Treinamento) {
    this._treino = value;
  }

  public get bonus(): number[] {
    return this._bonus;
  }

  public set bonus(value: number[]) {
    this._bonus = value;
  }

  public get caracteristica(): Caracteristica {
    return this._caracteristica;
  }

  public getBonusTreinamento(nivel: number): number {
    if (this._treino === Treinamento.Destreinado) return 0;
    if (nivel < 7) {
      return 2;
    } else if (nivel < 15) {
      return 4;
    } else {
      return 6;
    }
  }

  public sumBonus(buffs: Buff[]): number {
    return (
      this._bonus.reduce((sum, el) => sum + el, 0) +
      buffs.reduce((sum, el) => sum + el.bonus, 0)
    );
  }

  public getBonus(nivel: number, buffs: Buff[]): number {
    const mod =
      this.getBonusTreinamento(nivel) +
      Utils.meioNivel(nivel) +
      this._modificador.getTotal() +
      this.sumBonus(buffs);
    return mod;
  }
}
