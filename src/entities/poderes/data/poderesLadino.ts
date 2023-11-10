import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { BuffType } from "@/entities/buff/model/BuffType";
import { BuffStack } from "@/entities/buff/model/BuffStack";

const furtividade = treinamentoPericias.filter((el) =>
  PericiaNome.FURTIVIDADE.includes(el.nome as PericiaNome)
)[0];

const luta = treinamentoPericias.filter((el) =>
  PericiaNome.LUTA.includes(el.nome as PericiaNome)
)[0];

const ladinagem = treinamentoPericias.filter((el) =>
  PericiaNome.LADINAGEM.includes(el.nome as PericiaNome)
)[0];

const reflexos = treinamentoPericias.filter((el) =>
  PericiaNome.REFLEXOS.includes(el.nome as PericiaNome)
)[0];

const iniciativa = treinamentoPericias.filter((el) =>
  PericiaNome.INICIATIVA.includes(el.nome as PericiaNome)
)[0];

const truqueMagico = new PoderClasse(
  "Ladino",
  "Truque Mágico",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
);

const rouboMana = new PoderClasse(
  "Ladino",
  "Roubo de Mana",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(truqueMagico), new PreRequisito(7)]
);

const venenoPotente = new PoderClasse(
  "Ladino",
  "Veneno Potente",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const poderesLadino: Poder[] = [
  new PoderClasse(
    "Ladino",
    "Assassinar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(5)]
  ),
  new PoderClasse(
    "Ladino",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Contatos no Submundo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Emboscar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(furtividade)]
  ),
  new PoderClasse(
    "Ladino",
    "Escapista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Fuga Formidável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  new PoderClasse(
    "Ladino",
    "Gatuno",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 2)],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Ladrão Arcano",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(13), new PreRequisito(rouboMana)]
  ),
  new PoderClasse(
    "Ladino",
    "Mão na Boca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(luta)]
  ),
  new PoderClasse(
    "Ladino",
    "Mãos Rápidas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 2)),
      new PreRequisito(ladinagem),
    ]
  ),
  new PoderClasse(
    "Ladino",
    "Mente Criminosa",
    Fonte.BASICO,
    [],
    [
      new Buff(
        Caracteristica.LADINAGEM,
        Atributos.INTELIGENCIA,
        BuffType.BASE,
        BuffStack.ATRIBUTO_INTELIGENCIA
      ),
      new Buff(
        Caracteristica.FURTIVIDADE,
        Atributos.INTELIGENCIA,
        BuffType.BASE,
        BuffStack.ATRIBUTO_INTELIGENCIA
      ),
    ],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  new PoderClasse(
    "Ladino",
    "Oportunismo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  new PoderClasse(
    "Ladino",
    "Rolamento Defensivo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(reflexos)]
  ),
  rouboMana,
  new PoderClasse(
    "Ladino",
    "Saqueador de Tumbas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Sombra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 2)],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(furtividade)]
  ),
  truqueMagico,
  new PoderClasse(
    "Ladino",
    "Velocidade Ladina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 2)),
      new PreRequisito(iniciativa),
    ]
  ),
  new PoderClasse(
    "Ladino",
    "Veneno Persistente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(venenoPotente), new PreRequisito(8)]
  ),
  venenoPotente,
];
