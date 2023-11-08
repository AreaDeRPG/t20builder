import Buff from "@/entities/buff/model/Buff";
import Modificador from "@/entities/modificadores/model/Modificador";
import Raca from "@/entities/racas/model/Racas";
import Classe from "@/entities/classes/model/Classe";
import { Tamanho } from "@/entities/Tamanho/model/Tamanho";
import { Atributos } from "@/entities/atributos";
import Pericia from "@/entities/pericias/model/Pericia";
import Origem from "@/entities/origem/model/Origem";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import Magia from "@/entities/magia/model/Magia";
import { BuffStack } from "@/entities/buff/model/BuffStack";

export default class Ficha {
  public readonly id: number;
  private _raca: Raca;
  private _origem: Origem;
  private _modificadores: Modificador[];
  private _classes: Classe[];
  private _nivel: number;
  private _defesa: number;
  private _velocidade: number;
  private _xp: number;
  private _nome: string;
  private _tamanho: Tamanho;
  private _pericias: Pericia[];
  private _periciasInt: Habilidade[];

  constructor(
    id: number,
    nivel: number,
    raca: Raca,
    origem: Origem,
    modificadores: Modificador[],
    pericias: Pericia[]
  ) {
    this.id = id;
    this._nivel = nivel;
    this._raca = raca;
    this._origem = origem;
    this._modificadores = modificadores;
    this._classes = [];
    this._defesa = 10;
    this._velocidade = 9;
    this._xp = 0;
    this._nome = "";
    this._tamanho = Tamanho.MEDIO;
    this._pericias = pericias;
    this._periciasInt = [];
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
    if (i == 0) {
      const periciasFixas: Habilidade[] = value.periciasFixas;
      if (
        this.origem.habilidadeSelect1 &&
        periciasFixas.includes(this.origem.habilidadeSelect1)
      )
        this.origem.habilidadeSelect1 = undefined;
      if (
        this.origem.habilidadeSelect2 &&
        periciasFixas.includes(this.origem.habilidadeSelect2)
      )
        this.origem.habilidadeSelect2 = undefined;
      this.raca.habilidades.forEach((el) => {
        if (el.select && periciasFixas.includes(el.select))
          el.select = undefined;
      });
    }
  }

  public get nivel(): number {
    return this._nivel;
  }
  public set nivel(value: number) {
    this._nivel = value;
  }

  public get defesa(): number {
    const mod = this._modificadores.find(
      (el) => el.atributo === this.getAtributoDefesa()
    );
    const modValue: number = mod ? mod.getTotal() : 0;
    return (
      this._defesa +
      modValue +
      this.getBuffs()
        .filter((el) => el.caracteristica == Caracteristica.DEFESA)
        .reduce((sum, el) => sum + el.getBonus(this.nivel), 0)
    );
  }

  public get pv(): number {
    let pv_ = 0;
    const modcon = this.modificadores[2].getTotal();
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
    const uniqueElements: Map<BuffStack, number> = new Map<BuffStack, number>();

    buffs.forEach((item) => {
      if (
        !uniqueElements.has(item.buffStack) ||
        item.bonus > (uniqueElements.get(item.buffStack) ?? 0)
      ) {
        item.buffStack === BuffStack.HABILIDADE
          ? uniqueElements.set(
              item.buffStack,
              (uniqueElements.get(item.buffStack) ?? 0) +
                item.getBonus(this._nivel)
            )
          : uniqueElements.set(item.buffStack, item.getBonus(this._nivel));
      }
    });
    const sum: number = Array.from(uniqueElements.values()).reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
    return pv_ + sum;
  }

  public get pm(): number {
    let pm_ = 0;
    const buffs: Buff[] = this.getBuffs().filter(
      (el: Buff) => el.caracteristica == Caracteristica.PM
    );
    for (let i = 0; i < this._nivel; i++) {
      const classe = this.classes[i];
      if (classe) {
        pm_ += classe.pmNivel;
      }
    }

    const uniqueElements: Map<BuffStack, number> = new Map<BuffStack, number>();

    buffs.forEach((item) => {
      if (
        !uniqueElements.has(item.buffStack) ||
        item.bonus > (uniqueElements.get(item.buffStack) ?? 0)
      ) {
        item.buffStack === BuffStack.HABILIDADE
          ? uniqueElements.set(
              item.buffStack,
              (uniqueElements.get(item.buffStack) ?? 0) +
                item.getBonus(this._nivel)
            )
          : uniqueElements.set(item.buffStack, item.getBonus(this._nivel));
      }
    });
    const sum: number = Array.from(uniqueElements.values()).reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );
    return pm_ + sum;
  }

  public get velocidade(): number {
    const buffs = this.getBuffs()
      .filter((el) => el.caracteristica == Caracteristica.VELOCIDADE)
      .reduce((sum, el) => sum + el.getBonus(this.nivel), 0);
    return this._velocidade + buffs;
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

  public get pericias(): Pericia[] {
    return this._pericias;
  }

  public get origem(): Origem {
    return this._origem;
  }
  public set origem(origem: Origem) {
    this._origem.habilidadeSelect1 = undefined;
    this._origem.habilidadeSelect2 = undefined;
    this._origem = origem;
  }

  public get periciasInt(): Habilidade[] {
    return this._periciasInt;
  }

  public setPericiaInt(i: number, habilidade: Habilidade) {
    if (i < this._modificadores[3].getTotal()) {
      this.periciasInt[i] = habilidade;
    }
  }

  public getMeioNivel(): number {
    return Math.floor(this.nivel / 2);
  }

  public getTotalBonus(atributo: Atributos): number {
    const modificador = this.modificadores.find(
      (el: Modificador) => el.atributo === atributo
    );

    if (!modificador) return 0;
    return modificador.getTotal();
  }

  private getAtributoDefesa(): Atributos {
    const buff: Buff | undefined = this.getBuffs().find(
      (el) => el.caracteristica === Caracteristica.ATRIBUTODEFESA
    );
    if (!buff) return Atributos.DESTREZA;
    const atributo = buff.atributo;
    if (!atributo) return Atributos.DESTREZA;
    return atributo;
  }

  public parseModificicadoresValues(): void {
    for (const modificador of this.modificadores) {
      modificador.base = +modificador.base;
      modificador.raca = +modificador.raca;
      modificador.bonus = +modificador.bonus;
    }
  }

  public updateModificadorValue(valname: string, value: number): void {
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

  public validateValues(valname: string, value: number): void {
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

  public isLivre(atributo: string): boolean {
    return (
      !this.raca.modificadores.some((el) => el.atributo === Atributos.LIVRE) ||
      this.raca.modificadores.some((el) => el.atributo === atributo)
    );
  }

  private includeSelect(habilidades: Habilidade[]): Habilidade[] {
    habilidades.forEach((el) => {
      if (el.select) habilidades.push(el.select);
    });
    return habilidades;
  }

  public getHabilidades(): Habilidade[] {
    let habilidades: Habilidade[] = [];
    habilidades = habilidades.concat(this.raca.habilidades);
    habilidades.forEach((el) => {
      if (el.select) habilidades.push(el.select);
    });
    if (!this.raca.barrarOrigem && this.origem.habilidadeSelect1)
      habilidades.push(this.origem.habilidadeSelect1);
    if (!this.raca.barrarOrigem && this.origem.habilidadeSelect2)
      habilidades.push(this.origem.habilidadeSelect2);
    if (this.classes[0]) {
      habilidades.push(...this.classes[0].periciasFixas);
      habilidades.push(...this.classes[0].periciasExtrasTreinadas);
      if (this.classes[0].periciaFixaEscolhida)
        habilidades.push(this.classes[0].periciaFixaEscolhida);
    }
    habilidades.push(...this.periciasInt);
    console.log(habilidades);
    this.classes.forEach((el) => {
      const niveis = this.classes.filter((el_) => el_ == el).length;
      habilidades.push(
        ...this.includeSelect(el.habilidades.slice(0, niveis).flat())
      );
    });
    console.log(habilidades);
    return Array.from(
      new Set(this.includeSelect(habilidades.filter((el) => el !== undefined)))
    );
  }

  public getMagias(): Magia[] {
    const habilidades = this.getHabilidades();
    // eslint-disable-next-line
    const magias = habilidades.filter(
      (el) => el !== undefined && el instanceof Magia
    );
    return [] as Magia[];
  }

  public getBuffs(): Buff[] {
    const habilidades = this.getHabilidades();
    const buffs: Buff[] = [];
    habilidades.forEach((el) => {
      buffs.push(...el.buffs);
    });
    return buffs.filter((el) => el !== undefined);
  }
}
