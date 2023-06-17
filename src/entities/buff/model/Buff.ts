import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "./BuffType";
import { BuffStack } from "./BuffStack";

export default class Buff {
  private _caracteristica: Caracteristica;
  private _bonus: number;
  private _buffType: BuffType;
  private _buffStack: BuffStack;
  constructor(
    caracteristica: Caracteristica,
    bonus?: number,
    buffType?: BuffType,
    buffStack?: BuffStack
  ) {
    this._caracteristica = caracteristica;
    this._bonus = bonus ?? 0;
    this._buffType = buffType ?? BuffType.BASE;
    this._buffStack = buffStack ?? BuffStack.HABILIDADE;
  }

  public get caracteristica(): Caracteristica {
    return this._caracteristica;
  }

  public get bonus(): number {
    return this._bonus;
  }

  public get buffType(): BuffType {
    return this._buffType;
  }

  public get buffStack(): BuffStack {
    return this._buffStack;
  }

  public getBonus(level: number): number {
    switch (this.buffType) {
      case BuffType.BASE:
        return this.getBonusBase();
      case BuffType.BYLEVEL:
        return this.getBonusPlusLevel(level);
      case BuffType.BYHALFLEVEL:
        return this.getBonusPlusHalfLevel(level);
      case BuffType.BYRANK:
        return this.getBonusPlusRank(level);
      default:
        return 0;
    }
  }

  private getBonusBase(): number {
    return this.bonus ?? 0;
  }

  private getBonusPlusLevel(level: number): number {
    return (this.bonus ?? 0) + level;
  }

  private getBonusPlusHalfLevel(level: number): number {
    return (this.bonus ?? 0) + Math.floor(level / 2);
  }

  private getRank(level: number): number {
    if (level < 5) return 1;
    else if (level < 11) return 2;
    else if (level < 17) return 3;
    else return 4;
  }

  private getBonusPlusRank(level: number): number {
    return (this.bonus ?? 0) * this.getRank(level);
  }
}
