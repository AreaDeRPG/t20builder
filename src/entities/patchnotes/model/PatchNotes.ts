export default class PatchNote {
  public readonly id: number;
  private _versao: string;
  private _descricao: string[];

  constructor(id: number, versao: string, descricao: string[]) {
    this.id = id;
    this._versao = versao;
    this._descricao = descricao;
  }

  public get versao(): string {
    return this._versao;
  }

  public get descricao(): string[] {
    return this._descricao;
  }
}
