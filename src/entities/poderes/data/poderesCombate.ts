import { Fonte } from "@/entities/fonte/fonte";
import PoderCombate from "../model/PoderCombate";
import { PoderTipo } from "../model/PoderTipo";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Atributos } from "@/entities/atributos";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import Buff from "@/entities/buff/model/Buff";
import { BuffType } from "@/entities/buff/model/BuffType";
import Poder from "../model/Poder";

const estiloDuasArmas = new PoderCombate(
  "Estilo de Duas Armas",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const estiloArremesso = new PoderCombate(
  "Estilo de Arremesso",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const estiloArmaEscudo = new PoderCombate(
  "Estilo de Arma e Escudo",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const estiloDuasMaos = new PoderCombate(
  "Estilo de Duas Mãos",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate,
  [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 2))]
);

const estiloUmaArma = new PoderCombate(
  "Estilo de Uma Arma",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const ginete = new PoderCombate(
  "Ginete",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const combateDefensivo = new PoderCombate(
  "Combate Defensivo",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate,
  [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
);

const estiloDisparo = new PoderCombate(
  "Estilo de Disparo",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const estiloArmaLonga = new PoderCombate(
  "Estilo de Arma Longa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate,
  [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1))]
);

const encouracado = new PoderCombate(
  "Encouraçado",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate
);

const disparoPreciso = new PoderCombate(
  "Disparo Preciso",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate,
  [new PreRequisito(estiloDisparo, estiloArremesso)]
);

const ataquePoderoso = new PoderCombate(
  "Ataque Poderoso",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderCombate,
  Categoria.PoderCombate,
  [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1))]
);

export const poderesCombate: Poder[] = [
  new PoderCombate(
    "Acuidade com Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 1))]
  ),
  new PoderCombate(
    "Arma Secundária grande",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloDuasArmas)]
  ),
  new PoderCombate(
    "Arremesso Potente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [
      new PreRequisito(estiloArremesso),
      new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1)),
    ]
  ),
  new PoderCombate(
    "Arremesso Múltiplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [
      new PreRequisito(estiloArremesso),
      new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 1)),
    ]
  ),
  new PoderCombate(
    "Ataque com Escudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloArmaEscudo)]
  ),
  new PoderCombate(
    "Ataque Pesado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloDuasMaos)]
  ),
  ataquePoderoso,
  new PoderCombate(
    "Ataque Preciso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloUmaArma)]
  ),
  new PoderCombate(
    "Bloqueio com Escudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloUmaArma)]
  ),
  new PoderCombate(
    "Carga de Cavalaria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(ginete)]
  ),
  combateDefensivo,
  new PoderCombate(
    "Derrubar Aprimorado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(combateDefensivo)]
  ),
  new PoderCombate(
    "Desarmar Aprimorado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(combateDefensivo)]
  ),
  disparoPreciso,
  new PoderCombate(
    "Disparo Rápido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [
      new PreRequisito(estiloDisparo),
      new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 1)),
    ]
  ),
  new PoderCombate(
    "Empunhadura Poderosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 3))]
  ),
  estiloDisparo,
  encouracado,
  new PoderCombate(
    "Esquiva",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 2), new Buff(Caracteristica.REFLEXOS, 2)],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 1))]
  ),
  estiloArmaEscudo,
  estiloArmaLonga,
  estiloArremesso,
  estiloDuasArmas,
  estiloDuasMaos,
  estiloUmaArma,
  new PoderCombate(
    "Estilo Desarmado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Fanático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(encouracado)]
  ),
  new PoderCombate(
    "Finta Aprimorada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Foco em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  ginete,
  new PoderCombate(
    "Inexpugnável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(encouracado)]
  ),
  new PoderCombate(
    "Mira Apurada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [
      new PreRequisito(disparoPreciso),
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
    ]
  ),
  new PoderCombate(
    "Piqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(estiloArmaLonga)]
  ),
  new PoderCombate(
    "Presença Aterradora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Proficiência",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Proficiência",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Quebrar Aprimorado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(ataquePoderoso)]
  ),
  new PoderCombate(
    "Reflexos de Combate",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(new RequisitoAtributo(Atributos.DESTREZA, 1))]
  ),
  new PoderCombate(
    "Saque Rápido",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 2)],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate
  ),
  new PoderCombate(
    "Trespassar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(ataquePoderoso)]
  ),
  new PoderCombate(
    "Vitalidade",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PV, 0, BuffType.BYLEVEL),
      new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE),
    ],
    PoderTipo.PoderCombate,
    Categoria.PoderCombate,
    [new PreRequisito(new RequisitoAtributo(Atributos.CONSTITUICAO, 1))]
  ),
];
