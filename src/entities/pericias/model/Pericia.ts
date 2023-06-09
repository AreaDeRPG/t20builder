import Utils from "@/entities/util";
import { Treinamento } from "./Treinamento";
import Modificador from "@/entities/modificadores/model/Modificador";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "@/entities/buff/model/BuffType";

export default class Pericia {
  public readonly id: number;
  private _nome: string;
  private _modificador: Modificador;
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

  public get bonus(): number[] {
    return this._bonus;
  }

  public set bonus(value: number[]) {
    this._bonus = value;
  }

  public get caracteristica(): Caracteristica {
    return this._caracteristica;
  }

  public getBonusTreinamento(nivel: number, buff?: Buff[]): number {
    if (!buff) return 0;
    if (!this.isTreinado(buff)) return 0;
    if (nivel < 7) {
      return 2;
    } else if (nivel < 15) {
      return 4;
    } else {
      return 6;
    }
  }

  isTreinado(buffs: Buff[]): boolean {
    const buff = buffs.filter(
      (el) =>
        el.caracteristica == this.caracteristica &&
        el.buffType == BuffType.PROFICIENCY
    )[0];
    if (
      buff &&
      buff.caracteristica == this.caracteristica &&
      buff.buffType == BuffType.PROFICIENCY
    )
      return true;
    return false;
  }

  public sumBonus(buffs: Buff[]): number {
    return (
      this._bonus.reduce((sum, el) => sum + el, 0) +
      buffs.reduce((sum, el) => sum + el.bonus, 0)
    );
  }

  public getBonus(nivel: number, buffs: Buff[]): number {
    const bonusTreino = this.getBonusTreinamento(nivel, buffs);
    const mod =
      bonusTreino +
      Utils.meioNivel(nivel) +
      this._modificador.getTotal() +
      this.sumBonus(buffs);
    return mod;
  }
}
