import { Atributos } from "../atributos";
import Buff from "../buff/model/Buff";
import { BuffStack } from "../buff/model/BuffStack";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import Habilidade from "../habilidades/model/Habilidades";
import { magias } from "../magia";
import Poder from "./model/Poder";
import PoderClasse from "./model/PoderClasse";
import PoderCombate from "./model/PoderCombate";
import PoderConcedido from "./model/PoderConcedido";
import PoderDestino from "./model/PoderDestino";
import PoderMagia from "./model/PoderMagia";
import { PoderTipo } from "./model/PoderTipo";
import PoderTormenta from "./model/PoderTormenta";
import { PreRequisito } from "./model/PreRequisito";
import { RequisitoAtributo } from "./model/RequisitoAtributo";

interface ListaPoderes {
  [key: string]: Poder[];
}

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

const poderesCombate: Poder[] = [
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

const poderesDestino: Poder[] = [
  new PoderDestino(
    "Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Ao Sabor do Destino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Aparência Inofensiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
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
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Atraente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Comandar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Costas Largas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
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
    Categoria.PoderDestino
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
    Categoria.PoderDestino
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
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Parceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Sentidos Aguçados",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
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
    Categoria.PoderDestino
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
    Categoria.PoderDestino
  ),
];

const poderesTormenta: Poder[] = [
  new PoderTormenta(
    "Anatomia Insana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Antenas",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INICIATIVA, 1, BuffType.BASE),
      new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
      new Buff(Caracteristica.VONTADE, 1, BuffType.BASE),
    ],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Armamento Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Articulações Flexíveis",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Asas Insetoides",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Carapaça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Corpo Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Cuspir Enxame",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Dentes Afiados",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Desprezar a Realidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Empunhadura Rubra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Fome de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Larva Explosiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Legião Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Mãos Membranosas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Estendidos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Extras",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Mente Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Olhos Vermelhos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Pele Corrompida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Sangue Ácido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Visco Rubro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
];

const poderesConcedidos: Poder[] = [
  new PoderConcedido(
    "Afinidade com a Tormenta",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Almejar o Impossível",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Anfíbio",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Apostar com o Trapaceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Armas da Ambição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Arsenal das profundezas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Astúcia da Serpente",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2),
      new Buff(Caracteristica.FURTIVIDADE, 2),
      new Buff(Caracteristica.INTUICAO, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Ataque Piedoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura de Medo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura de Paz",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura Restauradora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Bênção do Mana",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVELCEIL)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Carícia Sombria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Centelha Mágica",
    Fonte.BASICO,
    magias.primeiroCirculo,
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Compreender os Ermos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 2)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Conhecimento Enciclopédico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Conjurar Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Coragem Total",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Cura Gentil",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Curandeira Perfeita",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dedo Verde",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Descanso Natural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Esperança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Imortalidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Profecia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Ressurreição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Verdade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Escamas Dracônicas",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 2), new Buff(Caracteristica.FORTITUDE, 2)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Escudo Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Espada Justiceira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Espada Solar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Êxtase da Loucura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Familiar Ofídico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Farsa do Fingidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fé Guerreira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Forma de Macaco",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fulgor Solar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fúria Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Golpista Divino",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2),
      new Buff(Caracteristica.JOGATINA, 2),
      new Buff(Caracteristica.LADINAGEM, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Habitante do Deserto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Inimigo de Tenebra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Kiai Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Liberdade Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Manto da Penumbra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mente Analítica",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INTUICAO, 2),
      new Buff(Caracteristica.INVESTIGACAO, 2),
      new Buff(Caracteristica.VONTADE, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mente Vazia",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INICIATIVA, 2),
      new Buff(Caracteristica.PERCEPCAO, 2),
      new Buff(Caracteristica.VONTADE, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mestre dos Mares",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Olhar Amedrontador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Palavras de Bondade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Percepção Temporal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Pesquisa Abençoada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Poder Oculto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Presas Primordiais",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Presas Venenosas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Rejeição Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Reparar Injustiça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sangue de Ferro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sangue Ofídico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Servos do Dragão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sopro do Mar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sorte dos Loucos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Talento Artístico",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ACROBACIA, 2),
      new Buff(Caracteristica.ATUACAO, 2),
      new Buff(Caracteristica.DIPLOMACIA, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Teurgista Místico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Tradição de Lin-Wu",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Transmissão da Loucura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Tropas Duyshidakk",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Urro Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Visão nas Trevas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz da Civilização",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz da Natureza",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz dos Monstros",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Zumbificar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
];

const poderesMagia: Poder[] = [
  new PoderMagia(
    "Celebrar Ritual",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Escrever Pergaminho",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Foco em Magia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Acelerada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Ampliada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Discreta",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Ilimitada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Preparar Poção",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
];

export const caminhoArcanista: Habilidade = new Habilidade(
  "Caminho do Arcanista",
  Fonte.BASICO,
  [
    new Habilidade(
      "Mago",
      Fonte.BASICO,
      [],
      [
        new Buff(
          Caracteristica.PM,
          Atributos.INTELIGENCIA,
          BuffType.BASE,
          BuffStack.ATRIBUTO_INTELIGENCIA
        ),
      ]
    ),
    new Habilidade(
      "Bruxo",
      Fonte.BASICO,
      [],
      [
        new Buff(
          Caracteristica.PM,
          Atributos.INTELIGENCIA,
          BuffType.BASE,
          BuffStack.ATRIBUTO_INTELIGENCIA
        ),
      ]
    ),
    new Habilidade(
      "Feiticeiro",
      Fonte.BASICO,
      [
        new Habilidade("Linhagem", Fonte.BASICO, [
          new Habilidade(
            "Dracônica",
            Fonte.BASICO,
            [],
            [
              new Buff(
                Caracteristica.PV,
                Atributos.CARISMA,
                BuffType.BASE,
                BuffStack.ATRIBUTO_CARISMA
              ),
            ]
          ),
          new Habilidade("Feérica", Fonte.BASICO, []),
          new Habilidade("Rubra", Fonte.BASICO, []),
        ]),
      ],
      [
        new Buff(
          Caracteristica.PM,
          Atributos.CARISMA,
          BuffType.BASE,
          BuffStack.ATRIBUTO_CARISMA
        ),
      ]
    ),
  ],
  []
);

const raioArcano = new PoderClasse(
  "Arcanista",
  "Raio Arcano",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const especialistaEscola = new PoderClasse(
  "Arcanista",
  "Especialista em Escola",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(
      caminhoArcanista.habilidades[0],
      caminhoArcanista.habilidades[1]
    ),
  ]
);

const poderesArcanista: Poder[] = [
  new PoderClasse(
    "Arcanista",
    "Arcano de Batalha",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Caldeirão do Bruxo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[1])]
  ),
  new PoderClasse(
    "Arcanista",
    "Conhecimento Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Contramágica Aprimorada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Envolto em Mistério",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Escriba Arcano",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[0])]
  ),
  especialistaEscola,
  new PoderClasse(
    "Arcanista",
    "Familiar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Fluxo de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(10)]
  ),
  new PoderClasse(
    "Arcanista",
    "Foco Vital",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[1])]
  ),
  new PoderClasse(
    "Arcanista",
    "Fortalecimento Arcano",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CDMAGIA, 1)],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(5)]
  ),
  new PoderClasse(
    "Arcanista",
    "Herança Aprimorada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[2]), new PreRequisito(6)]
  ),
  new PoderClasse(
    "Arcanista",
    "Herança Superior",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[2]), new PreRequisito(11)]
  ),
  new PoderClasse(
    "Arcanista",
    "Magia Pungente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Arcanista",
    "Mestre em Escola",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(especialistaEscola), new PreRequisito(8)]
  ),
  new PoderClasse(
    "Arcanista",
    "Poder Mágico",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PM, 0, BuffType.BYLEVEL)],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  raioArcano,
  new PoderClasse(
    "Arcanista",
    "Raio Elemental",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(raioArcano)]
  ),
  new PoderClasse(
    "Arcanista",
    "Raio Poderoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(raioArcano)]
  ),
  new PoderClasse(
    "Arcanista",
    "Tinta do Mago",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(caminhoArcanista.habilidades[0])]
  ),
];

const almaBronze = new PoderClasse(
  "Barbaro",
  "Alma de Bronze",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const peleFerro = new PoderClasse(
  "Barbaro",
  "Pele de Ferro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const poderesBarbaro: Poder[] = [
  almaBronze,
  new PoderClasse(
    "Barbaro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Brado Assustador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Crítico Brutal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  new PoderClasse(
    "Barbaro",
    "Destruidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1))]
  ),
  new PoderClasse(
    "Barbaro",
    "Espírito Inquebrável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(almaBronze)]
  ),
  new PoderClasse(
    "Barbaro",
    "Esquiva Sobrenatural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Força Indomável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Frenesi",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Fúria da Savana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Fúria Raivosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Golpe Poderoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Ímpeto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Investida Imprudente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Pele de Aço",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(peleFerro), new PreRequisito(8)]
  ),
  peleFerro,
  new PoderClasse(
    "Barbaro",
    "Sangue dos Inimigos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Superstição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Barbaro",
    "Totem Espiritual",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
      new PreRequisito(4),
    ]
  ),
  new PoderClasse(
    "Barbaro",
    "Vigor Primal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const esgrimaMagica = new PoderClasse(
  "Bardo",
  "Esgrima Mágica",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const golpeMagico = new PoderClasse(
  "Bardo",
  "Golpe Mágico",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(esgrimaMagica)]
);

const baladaFascinante = new PoderClasse(
  "Bardo",
  "Música: Balada Fascinante",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const fascinarMassa = new PoderClasse(
  "Bardo",
  "Fascinar em Massa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(baladaFascinante)]
);

const manipular = new PoderClasse(
  "Bardo",
  "Manipular",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(baladaFascinante)]
);

const melodiaCurativa = new PoderClasse(
  "Bardo",
  "Música: Melodia Curativa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const poderesBardo: Poder[] = [
  new PoderClasse(
    "Bardo",
    "Arte Mágica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Aumentar Repertório",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Dança das Lâminas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(esgrimaMagica), new PreRequisito(10)]
  ),
  esgrimaMagica,
  new PoderClasse(
    "Bardo",
    "Estrelato",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  fascinarMassa,
  new PoderClasse(
    "Bardo",
    "Golpe Elemental",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(golpeMagico)]
  ),
  golpeMagico,
  new PoderClasse(
    "Bardo",
    "Inspiração Marcial",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Lendas e Histórias",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1))]
  ),
  manipular,
  new PoderClasse(
    "Bardo",
    "Manipular em Massa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(fascinarMassa),
      new PreRequisito(manipular),
      new PreRequisito(10),
    ]
  ),
  baladaFascinante,
  new PoderClasse(
    "Bardo",
    "Música: Canção Assustadora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  melodiaCurativa,
  new PoderClasse(
    "Bardo",
    "Melodia Restauradora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(melodiaCurativa),
      new PreRequisito(new RequisitoAtributo(Atributos.CARISMA, 1)),
    ]
  ),
  new PoderClasse(
    "Bardo",
    "Mestre dos Sussurros",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Paródia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bardo",
    "Prestidigitação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
];

const poderesBucaneiro: Poder[] = [
  new PoderClasse(
    "Bucaneiro",
    "Abusar dos Fracos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Amigos no Porto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Aparar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Apostador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Ataque Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Aventureiro Ávido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Bravata Audaz",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Bravata Imprudente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "En Garde",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Esgrimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Flagelo dos Mares",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Grudar o Cano",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Pernas do Mar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Pistoleiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Presença Paralisante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Ripostar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Bucaneiro",
    "Touché",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesCacador: Poder[] = [
  new PoderClasse(
    "Caçador",
    "Ambidestria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Arataca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Espinhos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Laço",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilha: Rede",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Armadilheiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Arqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Bote",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Camuflagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Chuva de Lâminas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Companheiro Animal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Elo com a Natureza",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Emboscar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Empatia Selvagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Escaramuça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Escaramuça Superior",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Espreitar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Ervas Curativas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Ímpeto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Inimigo de (Criatura)",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Olho do Falcão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Caçador",
    "Ponto Fraco",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesCavaleiro: Poder[] = [
  new PoderClasse(
    "Cavaleiro",
    "Armadura da Honra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Autoridade Feudal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Desprezar os Covardes",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Escudeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Especialização em Armadura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Estandarte",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Etiqueta",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Investida Destruidora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Montaria Corajosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Pajem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Aríete Implacável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Castigo de Ferro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Foco de Batalha",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Muralha Intransponível",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Provocação Petulante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Postura de Combate: Torre Inabalável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Solidez",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Título",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Torre Armada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesClerigo: Poder[] = [
  new PoderClasse(
    "Clérigo",
    "Abençoar Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Autoridade Eclesiástica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Canalizar Energia Positiva/Negativa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Canalizar Amplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Comunhão Vital",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Conhecimento Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Expulsar/Comandar Mortos-Vivos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Liturgia Mágica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Magia Sagrada/Profana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Mestre Celebrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Bênção da Vida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Chamado às Armas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Elevação do Espírito",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Escudo Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Superar as Limitações",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Prece de Combate",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Símbolo Sagrado Energizado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesDruida: Poder[] = [
  new PoderClasse(
    "Druida",
    "Aspecto do Inverno",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Aspecto do Outono",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Aspecto da Primavera",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Aspecto do Verão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal Aprimorado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal Lendário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Companheiro Animal Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Coração da Selva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Espírito dos Equinócios",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Espírito dos Solstícios",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Força dos Penhascos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Forma Primal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Forma Selvagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Forma Selvagem Aprimorada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Forma Selvagem Superior",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Liberdade da Pradaria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Magia Natural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Presas Afiadas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Segredos da Natureza",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Druida",
    "Tranquilidade dos Lagos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesGuerreiro: Poder[] = [
  new PoderClasse(
    "Guerreiro",
    "Ambidestria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Arqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Ataque Reflexo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Bater e Correr",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Destruidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Esgrimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Especialização em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Especialização em Armadura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Golpe de Raspão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Golpe Demolidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Golpe Pessoal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Ímpeto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Mestre em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Planejamento Marcial",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Romper Resistências",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Solidez",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Tornado de Dor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Valentão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesInventor: Poder[] = [
  new PoderClasse(
    "Inventor",
    "Agite Antes de Usar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Ajuste de Mira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Alquimista de Batalha",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Alquimista Iniciado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Armeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Ativação Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Autômato",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Autômato Prototipado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Balística",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Blindagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Cano Raiado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Catalisador Instável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Chutes e Palavrões",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Conhecimento de Fórmulas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Couraceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Engenhoqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Farmacêutico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Ferreiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Granadeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Homúnculo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Invenção Potente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Maestria em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Manutenção Eficiente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Mestre Alquimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Mestre Cuca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Mistura Fervilhante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Oficina de Campo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Pedra de Amolar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Síntese Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesLadino: Poder[] = [
  new PoderClasse(
    "Ladino",
    "Assassinar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
    "Alquimista de Batalha",
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
    Categoria.PoderClasse
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Gatuno",
    Fonte.BASICO,
    [],
    [],
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mão na Boca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mãos Rápidas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mente Criminosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Oportunismo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Rolamento Defensivo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Roubo de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
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
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Truque Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Velocidade Ladina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Veneno Persistente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Veneno Potente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesLutador: Poder[] = [
  new PoderClasse(
    "Lutador",
    "Arma Improvisada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Até Acertar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Braços Calejados",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Cabeçada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Chave",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Confiança dos Ringues",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Convencido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Baixo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Imprudente.",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Imobilização",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Língua dos Becos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Lutador de Chão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Nome na Arena",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Punhos de Adamante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Rasteira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Sarado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Sequência Destruidora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trincado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trocação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trocação Tumultuosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Valentão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Voadora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesNobre: Poder[] = [
  new PoderClasse(
    "Nobre",
    "Armadura Brilhante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Autoridade Feudal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Educação Privilegiada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Estrategista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Favor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "General",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Grito Tirânico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Inspirar Confiança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Inspirar Glória",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Jogo da Corte",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Liderar pelo Exemplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua de Ouro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua de Prata",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Presença Majestosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Título",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Voz Poderosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesPaladino: Poder[] = [
  new PoderClasse(
    "Paladino",
    "Arma Sagrada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Antimagia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Ardente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura de Cura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura de Invencibilidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Poderosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Fulgor Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Arrependimento",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Coragem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Iluminação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Justiça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Libertação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Salvação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Vindicação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Zelo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Orar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Caridade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Castidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Compaixão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Humildade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Temperança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
export const poderes: ListaPoderes = {
  poderesCombate: poderesCombate,
  poderesDestino: poderesDestino,
  poderesTormenta: poderesTormenta,
  poderesMagia: poderesMagia,
  poderesConcedidos: poderesConcedidos,
  poderesArcanista: poderesArcanista,
  poderesBarbaro: poderesBarbaro,
  poderesBardo: poderesBardo,
  poderesBucaneiro: poderesBucaneiro,
  poderesCacador: poderesCacador,
  poderesCavaleiro: poderesCavaleiro,
  poderesClerigo: poderesClerigo,
  poderesDruida: poderesDruida,
  poderesGuerreiro: poderesGuerreiro,
  poderesInventor: poderesInventor,
  poderesLadino: poderesLadino,
  poderesLutador: poderesLutador,
  poderesNobre: poderesNobre,
  poderesPaladino: poderesPaladino,
};
