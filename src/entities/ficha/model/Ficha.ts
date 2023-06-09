import Modificador from "@/entities/modificadores/model/Modificador";
import Raca from "@/entities/racas/model/Racas";
import Classe from "@/entities/classes/model/Classe";
import { Tamanho } from "@/entities/Tamanho/model/Tamanho";
import { Atributos } from "@/entities/atributos";
import Pericia from "@/entities/pericias/model/Pericia";
import Biografia from "@/entities/biografia/model/Biografia";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "@/entities/buff/model/BuffType";
import { Treinamento } from "@/entities/pericias/model/Treinamento";
import Utils from "@/entities/util";

export default class Ficha {
  public readonly id: number;
  private _raca: Raca;
  private _biografia: Biografia;
  private _modificadores: Modificador[];
  private _classes: Classe[];
  private _nivel: number;
  private _defesa: number;
  private _velocidade: number;
  private _xp: number;
  private _nome: string;
  private _tamanho: Tamanho;
  private _pericias: Pericia[];

  constructor(
    id: number,
    raca: Raca,
    biografia: Biografia,
    modificadores: Modificador[],
    pericias: Pericia[]
  ) {
    this.id = id;
    this._raca = raca;
    this._biografia = biografia;
    this._modificadores = modificadores;
    this._classes = [];
    this._nivel = 1;
    this._defesa = 10;
    this._velocidade = 9;
    this._xp = 0;
    this._nome = "";
    this._tamanho = Tamanho.MEDIO;
    this._pericias = pericias;
  }

  public get raca(): Raca {
    return this._raca;
  }
  public set raca(value: Raca) {
    this._raca = value;
  }

  public get modificadores(): Modificador[] {
    return this._modificadores;
  }
  public set modificadores(value: Modificador[]) {
    this._modificadores = value;
  }

  public get classes(): Classe[] {
    return this._classes;
  }
  public setClasse(i: number, value: Classe) {
    this._classes[i] = value;
  }

  public get nivel(): number {
    return this._nivel;
  }
  public set nivel(value: number) {
    this._nivel = value;
  }

  public get defesa(): number {
    return (
      this._defesa +
      this.getBuffs()
        .filter((el) => el.caracteristica == Caracteristica.DEFESA)
        .reduce((sum, el) => sum + el.bonus, 0)
    );
  }

  public get pv(): number {
    let pv_ = 0;
    const modcon = this.modificadores[2]?.getTotal() ?? 0;
    if (this.classes[0]) {
      pv_ = this.classes[0].pvInicial + modcon;
    }
    for (let i = 1; i < this.nivel; i++) {
      const classe = this.classes[i];
      if (classe) {
        const pvNivel = Math.max(classe.pvNivel + modcon, 1);
        pv_ += pvNivel;
      }
    }
    const buffs: Buff[] = this.getBuffs().filter(
      (el: Buff) => el.caracteristica == Caracteristica.PV
    );
    const sum = buffs.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.getBonus(this.nivel),
      0
    );
    return pv_ + sum;
  }

  public get pm(): number {
    let pm_ = 0;
    const buffs: Buff[] = this.getBuffs().filter(
      (el: Buff) => el.caracteristica == Caracteristica.PM
    );
    for (let i = 0; i < this.nivel; i++) {
      const classe = this.classes[i];
      if (classe) {
        pm_ += classe.pmNivel;
      }
    }
    const sum = buffs.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.getBonus(this.nivel),
      0
    );
    return pm_ + sum;
  }

  public get velocidade(): number {
    return this._velocidade;
  }
  public set velocidade(value: number) {
    this._velocidade = value;
  }

  public get xp(): number {
    return this._xp;
  }
  public set xp(value: number) {
    this._xp = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get tamanho(): Tamanho {
    return this._tamanho;
  }
  public set tamanho(value: Tamanho) {
    this._tamanho = value;
  }

  public get pericias(): Pericia[] {
    return this._pericias;
  }

  public get biografia(): Biografia {
    return this._biografia;
  }
  public set biografia(biografia: Biografia) {
    this._biografia = biografia;
  }

  getMeioNivel(): number {
    return Math.floor(this.nivel / 2);
  }

  getTotalBonus(atributo: Atributos): number {
    const modificador = this.modificadores?.find(
      (el: Modificador) => el.atributo === atributo
    );
    return modificador?.getTotal() ?? 0;
  }

  parseModificicadoresValues(): void {
    for (const modificador of this.modificadores) {
      modificador.base = +modificador.base;
      modificador.raca = +modificador.raca;
      modificador.bonus = +modificador.bonus;
    }
  }

  updateModificadorValue(valname: string, value: number): void {
    const indexMap: { [key: string]: number } = {
      for: 0,
      des: 1,
      con: 2,
      int: 3,
      sab: 4,
      car: 5,
    };

    const index: number = indexMap[valname];
    if (index !== undefined) {
      this.modificadores[index].base = +value;
    }
  }

  validateValues(valname: string, value: number): void {
    switch (valname) {
      case "for":
        this.modificadores[0].validateBaseValue(value);
        break;
      case "des":
        this.modificadores[1].validateBaseValue(value);
        break;
      case "con":
        this.modificadores[2].validateBaseValue(value);
        break;
      case "int":
        this.modificadores[3].validateBaseValue(value);
        break;
      case "sab":
        this.modificadores[4].validateBaseValue(value);
        break;
      case "car":
        this.modificadores[5].validateBaseValue(value);
        break;
    }
  }

  isLivre(atributo: string): boolean {
    return (
      !this.raca.modificadores.some((el) => el.atributo === Atributos.LIVRE) ||
      this.raca.modificadores.some((el) => el.atributo === atributo)
    );
  }

  getHabilidades() {
    let habilidades: Habilidade[] = [];
    habilidades = habilidades.concat(this.raca.habilidades);
    habilidades.push(this.biografia.habilidadeSelect1);
    habilidades.push(this.biografia.habilidadeSelect2);
    return habilidades.filter((el) => el !== undefined);
  }

  getBuffs() {
    const habilidades = this.getHabilidades();
    const buffs: Buff[] = [];
    habilidades.forEach((el) => {
      buffs.push(...el.buffs);
      if (el.habilidadeSelect) {
        buffs.push(...el.habilidadeSelect.buffs);
      }
    });
    return buffs.filter((el) => el !== undefined);
  }
}
