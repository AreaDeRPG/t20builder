import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "./BuffType";

export default class Buff {
  caracteristica: Caracteristica;
  bonus?: number;
  buffType?: BuffType;

  constructor(
    caracteristica: Caracteristica,
    bonus?: number,
    buffType?: BuffType
  ) {
    this.caracteristica = caracteristica;
    this.bonus = bonus;
    this.buffType = buffType;
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

  private getBonusPlusRank(level: number): number {
    return 1 - level / level;
  }
}
