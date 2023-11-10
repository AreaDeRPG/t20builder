import { Atributos } from "@/entities/atributos";
import Buff from "@/entities/buff/model/Buff";
import { BuffStack } from "@/entities/buff/model/BuffStack";
import { BuffType } from "@/entities/buff/model/BuffType";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderDestino from "../model/PoderDestino";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const cura = treinamentoPericias.filter((el) =>
  PericiaNome.CURA.includes(el.nome as PericiaNome)
)[0];
const adestramento = treinamentoPericias.filter((el) =>
  PericiaNome.ADESTRAMENTO.includes(el.nome as PericiaNome)
)[0];
const diplomacia = treinamentoPericias.filter((el) =>
  PericiaNome.DIPLOMACIA.includes(el.nome as PericiaNome)
)[0];
const percepcao = treinamentoPericias.filter((el) =>
  PericiaNome.PERCEPCAO.includes(el.nome as PericiaNome)
)[0];

export const poderesDestino: Poder[] = [
  new PoderDestino(
    "Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 2))]
  ),
  new PoderDestino(
    "Ao Sabor do Destino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(6)]
  ),
  new PoderDestino(
    "Aparência Inofensiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderDestino(
    "Atlético",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ATLETISMO, 2, BuffType.BASE),
      new Buff(Caracteristica.VELOCIDADE, 3, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 2))]
  ),
  new PoderDestino(
    "Atraente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderDestino(
    "Comandar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderDestino(
    "Costas Largas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1)),
      new PreRequisito(new RequisitoAtributo(Atributos.CONSTITUICAO, 1)),
    ]
  ),
  new PoderDestino(
    "Foco em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Inventário Organizado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  new PoderDestino(
    "Investigador",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INVESTIGACAO, 2, BuffType.BASE),
      new Buff(
        Caracteristica.INTUICAO,
        Atributos.INTELIGENCIA,
        BuffType.BASE,
        BuffStack.ATRIBUTO_INTELIGENCIA
      ),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  new PoderDestino(
    "Lobo Solitário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Medicina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
      new PreRequisito(cura),
    ]
  ),
  new PoderDestino(
    "Parceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(diplomacia, adestramento), new PreRequisito(5)]
  ),
  new PoderDestino(
    "Sentidos Aguçados",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
      new PreRequisito(percepcao),
    ]
  ),
  new PoderDestino(
    "Sortudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Surto Heroico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Torcida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1))]
  ),
  new PoderDestino(
    "Treinamento em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Venefício",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Vontade de Ferro",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVEL),
      new Buff(Caracteristica.VONTADE, 2, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino,
    [new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1))]
  ),
];
