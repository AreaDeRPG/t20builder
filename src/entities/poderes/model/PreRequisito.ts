import Habilidade from "@/entities/habilidades/model/Habilidades";
import { RequisitoAtributo } from "./RequisitoAtributo";
import Modificador from "@/entities/modificadores/model/Modificador";

export class PreRequisito {
  prerequisito: RequisitoAtributo | Habilidade | number;
  or?: RequisitoAtributo | Habilidade;
  constructor(
    prerequisito: RequisitoAtributo | Habilidade | number,
    or?: RequisitoAtributo | Habilidade
  ) {
    this.prerequisito = prerequisito;
    this.or = or;
  }

  cumprePrerequisito(
    habilidades: Habilidade[],
    modificadores: Modificador[],
    nivel?: number
  ) {
    console.log(habilidades);
    if (typeof this.prerequisito === "number") {
      if (nivel) {
        const n: number = this.prerequisito;
        return nivel >= n;
      }
    } else if (this.prerequisito instanceof RequisitoAtributo) {
      const requisitoAtributo: RequisitoAtributo = this.prerequisito;
      const mod1 = modificadores.find(
        (el) => el.atributo === requisitoAtributo.atributo
      );
      if (this.or && this.or instanceof RequisitoAtributo) {
        const orRequisitoAtributo: RequisitoAtributo = this.or;
        const mod2 = modificadores.find(
          (el) => el.atributo === orRequisitoAtributo?.atributo
        );
        if (
          !(
            (mod1?.getTotal() ?? 0) >= requisitoAtributo.valor ||
            (mod2?.getTotal() ?? 0) >= requisitoAtributo.valor
          )
        ) {
          return false;
        }
      } else {
        if (!((mod1?.getTotal() ?? 0) >= requisitoAtributo.valor)) {
          return false;
        }
      }
    } else {
      const habilidade1: Habilidade = this.prerequisito;
      if (this.or && !(this.or instanceof RequisitoAtributo)) {
        const habilidade2: Habilidade = this.or;
        if (
          !habilidades.some(
            (hab: Habilidade) => hab === habilidade1 || hab === habilidade2
          )
        )
          return false;
      } else {
        if (!habilidades.some((hab: Habilidade) => hab === habilidade1))
          return false;
      }
    }
    return true;
  }
}
