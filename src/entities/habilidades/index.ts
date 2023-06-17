import { Acao } from "../acao/model/Acao";
import { Atributos } from "../atributos";
import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import { magias } from "../magia";
import Magia from "../magia/model/Magia";
import { treinamentoPericias } from "../pericias";
import { poderes } from "../poderes";
import Habilidade from "./model/Habilidades";

interface ListaHabilidadesRaca {
  [key: string]: Habilidade[];
}

interface ListaHabilidadesClasse {
  [key: string]: Habilidade[][];
}

function filterMagiaPrimeiroCirculo(...magias_: string[]): Magia[] {
  return magias.primeiroCirculo.filter((el) => magias_.includes(el.nome));
}

function setAtributo(magia: Magia, atributo: Atributos) {
  magia.atributoChave = atributo;
  return magia;
}

function memoriasPostumas(): Habilidade[] {
  const habilidades: Habilidade[] = treinamentoPericias
    .concat(habilidadesAnao)
    .concat(habilidadesDahllan)
    .concat(habilidadesElfo)
    .concat(habilidadesGoblin)
    .concat(habilidadesMinotauro)
    .concat(habilidadesQareen)
    .concat(habilidadesHynne)
    .concat(habilidadesKliren)
    .concat(habilidadesSereiaTritao)
    .concat(habilidadesTrog);
  return habilidades;
}

const habilidadesComum = [
  new Habilidade("Magias (1º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (2º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (3º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (4º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (5º Circulo)", Fonte.BASICO, []),
  new Habilidade(
    "Herança Divina",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VISAONOESCURO, 0, BuffType.BASE)],
    Categoria.habilidadesSuraggel
  ),
];

const habilidadesHumano: Habilidade[] = [
  new Habilidade(
    "Versátil",
    Fonte.BASICO,
    treinamentoPericias,
    undefined,
    Categoria.habilidadesHumano
  ),
  new Habilidade(
    "Versátil",
    Fonte.BASICO,
    treinamentoPericias
      .concat(poderes.poderesCombate)
      .concat(poderes.poderesDestino)
      .concat(poderes.poderesTormenta),
    undefined,
    Categoria.habilidadesHumano
  ),
];

const habilidadesAnao: Habilidade[] = [
  new Habilidade(
    "Conhecimento das Rochas",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    "Devagar e Sempre",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VELOCIDADE, -3, BuffType.BASE)],
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    "Duro como Pedra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PV, 2, BuffType.BYLEVEL)],
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    "Tradição de Heredrimm",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesAnao
  ),
];

const habilidadesDahllan: Habilidade[] = [
  new Habilidade(
    "Amiga das Plantas",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan
  ),
  new Habilidade(
    "Armadura de Allihanna",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan,
    Acao.Movimento
  ),
  new Habilidade(
    "Empatia Selvagem",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan,
    Acao.Padrão,
    filterMagiaPrimeiroCirculo("Controlar Plantas")[0]
  ),
];

const habilidadesElfo: Habilidade[] = [
  new Habilidade(
    "Graça de Glórienn",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VELOCIDADE, 3, BuffType.BASE)],
    Categoria.habilidadesElfo
  ),
  new Habilidade(
    "Sangue Mágico",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PM, 0, BuffType.BYLEVEL)],
    Categoria.habilidadesElfo
  ),
  new Habilidade(
    "Sentidos Élficos",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE),
      new Buff(Caracteristica.MISTICISMO, 2, BuffType.BASE),
      new Buff(Caracteristica.VISAONAPENUMBRA, 0, BuffType.BASE),
    ],
    Categoria.habilidadesElfo
  ),
];

const habilidadesGoblin: Habilidade[] = [
  new Habilidade(
    "Engenhoso",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    "Espelunqueiro",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VISAONOESCURO, 0, BuffType.BASE)],
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    "Peste Esguia",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    "Rato das Ruas",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE)],
    Categoria.habilidadesGoblin
  ),
];

const deformidade: Habilidade[] = [
  new Habilidade(
    "Acrobacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ACROBACIA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Adestramento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ADESTRAMENTO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Atletismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATLETISMO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Atuação",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ATUACAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Cavalgar",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CAVALGAR, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Conhecimento",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CONHECIMENTO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Cura",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.CURA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Diplomacia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Enganacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.ENGANACAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Fortitude",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Furtividade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FURTIVIDADE, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Guerra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.GUERRA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Iniciativa",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INICIATIVA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Intimidacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Intuicao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTUICAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Investigacao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INVESTIGACAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Jogatina",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.JOGATINA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Ladinagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LADINAGEM, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Luta",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.LUTA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Misticismo",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.MISTICISMO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Nobreza",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.NOBREZA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Oficio",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.OFICIO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Percepcao",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Pilotagem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PILOTAGEM, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Pontaria",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PONTARIA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Reflexos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.INTIMIDACAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Religião",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.RELIGIAO, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Sobrevivencia",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
  new Habilidade(
    "Vontade",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VONTADE, 2, BuffType.BASE)],
    Categoria.Pericia
  ),
];

const habilidadesLefou: Habilidade[] = [
  new Habilidade(
    "Cria da Tormenta",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesLefou
  ),
  new Habilidade(
    "Deformidade",
    Fonte.BASICO,
    deformidade,
    undefined,
    Categoria.habilidadesLefou
  ),
  new Habilidade(
    "Deformidade",
    Fonte.BASICO,
    deformidade.concat(poderes.poderesTormenta),
    undefined,
    Categoria.habilidadesLefou
  ),
];

const habilidadesMinotauro: Habilidade[] = [
  new Habilidade(
    "Chifres",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMinotauro
  ),
  new Habilidade(
    "Couro Rígido",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)],
    Categoria.habilidadesMinotauro
  ),
  new Habilidade(
    "Faro",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMinotauro
  ),
];

const habilidadesQareen: Habilidade[] = [
  new Habilidade(
    "Desejos",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesQareen
  ),
  new Habilidade(
    "Resistencia Elemental",
    Fonte.BASICO,
    [
      new Habilidade("Qareen da Agua", Fonte.BASICO, []),
      new Habilidade("Qareen do Ar", Fonte.BASICO, []),
      new Habilidade("Qareen do Fogo", Fonte.BASICO, []),
      new Habilidade("Qareen da Terra", Fonte.BASICO, []),
      new Habilidade("Qareen da Luz", Fonte.BASICO, []),
      new Habilidade("Qareen da Trevas", Fonte.BASICO, []),
    ],
    undefined,
    Categoria.habilidadesQareen
  ),
  new Habilidade(
    "Tatuagem Mágica",
    Fonte.BASICO,
    magias.primeiroCirculo,
    undefined,
    Categoria.habilidadesQareen
  ),
];

const habilidadesGolem: Habilidade[] = [
  new Habilidade(
    "Chassi",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DEFESA, 2, BuffType.BASE),
      new Buff(Caracteristica.PENALIDADEARMADURA, 2, BuffType.BASE),
      new Buff(Caracteristica.VELOCIDADE, -3, BuffType.BASE),
    ],
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    "Criatura Artificial",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.VISAONOESCURO),
      new Buff(Caracteristica.VISAONOESCURO),
    ],
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    "Propósito de Criação",
    Fonte.BASICO,
    poderes.poderesCombate,
    undefined,
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    "Fonte Elemental",
    Fonte.BASICO,
    [
      new Habilidade("Fonte Elemental (Agua)", Fonte.BASICO, []),
      new Habilidade("Fonte Elemental (Ar)", Fonte.BASICO, []),
      new Habilidade("Fonte Elemental (Fogo)", Fonte.BASICO, []),
      new Habilidade("Fonte Elemental (Terra)", Fonte.BASICO, []),
    ],
    undefined,
    Categoria.habilidadesGolem
  ),
];

const habilidadesHynne: Habilidade[] = [
  new Habilidade(
    "Arremessador",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesHynne
  ),
  new Habilidade(
    "Pequeno e Rechonchudo",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2, BuffType.BASE),
      new Buff(Caracteristica.VELOCIDADE, -3, BuffType.BASE),
    ],
    Categoria.habilidadesHynne
  ),
  new Habilidade(
    "Sorte Salvadora",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesHynne
  ),
];

const habilidadesKliren: Habilidade[] = [
  new Habilidade(
    "Híbrido",
    Fonte.BASICO,
    treinamentoPericias,
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    "Engenhosidade",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    "Ossos Frágeis",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    "Vanguardista",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
];

const habilidadesMedusa: Habilidade[] = [
  new Habilidade(
    "Cria de Megalokk",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
  new Habilidade(
    "Natureza Venenosa",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
  new Habilidade(
    "Olhar Atordoante",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
];

const habilidadesSereiaTritao: Habilidade[] = [
  new Habilidade(
    "Canção dos Mares",
    Fonte.BASICO,
    filterMagiaPrimeiroCirculo(
      "Amedrontar",
      "Comando",
      "Despedaçar",
      "Enfeitiçar",
      "Hipnotismo",
      "Sono"
    ),
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    "Canção dos Mares",
    Fonte.BASICO,
    filterMagiaPrimeiroCirculo(
      "Amedrontar",
      "Comando",
      "Despedaçar",
      "Enfeitiçar",
      "Hipnotismo",
      "Sono"
    ),
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    "Mestre dos Tridentes",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    "Transformação Anfíbia",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
];

const habilidadesSilfide: Habilidade[] = [
  new Habilidade(
    "Asas de Borboleta",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    "Espírito da Natureza",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    "Magia das Fadas",
    Fonte.BASICO,
    filterMagiaPrimeiroCirculo("Criar Ilusão", "Enfeitiçar", "Luz", "Sono"),
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    "Magia das Fadas",
    Fonte.BASICO,
    filterMagiaPrimeiroCirculo("Criar Ilusão", "Enfeitiçar", "Luz", "Sono"),
    undefined,
    Categoria.habilidadesSilfide
  ),
];

const habilidadesAggelus: Habilidade[] = [
  habilidadesComum.filter((el) => ["Herança Divina"].includes(el.nome))[0],
  new Habilidade(
    "Luz Sagrada",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DIPLOMACIA, 2, BuffType.BASE),
      new Buff(Caracteristica.INTUICAO, 2, BuffType.BASE),
    ],
    Categoria.habilidadesAggelus,
    Acao.Padrão,
    magias.primeiroCirculo.find((el) => ["Luz"].includes(el.nome))
  ),
];

const habilidadesSulfure: Habilidade[] = [
  habilidadesComum.filter((el) => ["Herança Divina"].includes(el.nome))[0],
  new Habilidade(
    "Sombras Profanas",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2, BuffType.BASE),
      new Buff(Caracteristica.FURTIVIDADE, 2, BuffType.BASE),
    ],
    Categoria.habilidadesSulfure,
    Acao.Padrão,
    magias.primeiroCirculo.find((el) => ["Escuridão"].includes(el.nome))
  ),
];

const habilidadesTrog: Habilidade[] = [
  new Habilidade(
    "Mau Cheiro",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    "Mordida",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    "Reptiliano",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)],
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    "Sangue Frio",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesTrog
  ),
];

const habilidadesArcanista: Habilidade[][] = [
  [
    new Habilidade(
      "Caminho do Arcanista",
      Fonte.BASICO,
      [
        new Habilidade("Caminho do Mago", Fonte.BASICO, []),
        new Habilidade("Caminho do Bruxo", Fonte.BASICO, []),
        new Habilidade("Caminho do Feiticeiro", Fonte.BASICO, []),
      ],
      []
    ),
    habilidadesComum[0],
  ],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, []), habilidadesComum[1]],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, []), habilidadesComum[2]],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, []), habilidadesComum[3]],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, []), habilidadesComum[4]],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade("Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade("Poder de Arcanista", Fonte.BASICO, []),
    new Habilidade("Alta Arcana", Fonte.BASICO, []),
  ],
];

const habilidadesBarbaro: Habilidade[][] = [
  [new Habilidade("Furia +2", Fonte.BASICO, [])],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Instinto Selvagem +1", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Redução de Dano 2", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade("Fúria +3", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Redução de Dano 4", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade("Instinto Selvagem +2", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Fúria +4", Fonte.BASICO, []),
    new Habilidade("Redução de Dano 6", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Redução de Dano 8", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade("Instinto Selvagem +3", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade("Fúria +5", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade("Redução de Dano 10", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [new Habilidade("Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade("Fúria Titânica", Fonte.BASICO, []),
    new Habilidade("Poder de Bárbaro", Fonte.BASICO, []),
  ],
];

const habilidadesOsteon: Habilidade[] = [
  new Habilidade("Armadurra Óssea", Fonte.BASICO, []),
  new Habilidade("Memória Póstuma", Fonte.BASICO, memoriasPostumas()),
  new Habilidade("Natureza Esquelética", Fonte.BASICO, []),
  new Habilidade("Preço da Não-Vida", Fonte.BASICO, []),
];

export const habilidadesRaca: ListaHabilidadesRaca = {
  humano: habilidadesHumano,
  anao: habilidadesAnao,
  dahllan: habilidadesDahllan,
  elfo: habilidadesElfo,
  goblin: habilidadesGoblin,
  lefou: habilidadesLefou,
  minotauro: habilidadesMinotauro,
  qareen: habilidadesQareen,
  golem: habilidadesGolem,
  hynne: habilidadesHynne,
  kliren: habilidadesKliren,
  medusa: habilidadesMedusa,
  osteon: habilidadesOsteon,
  sereiatritao: habilidadesSereiaTritao,
  silfide: habilidadesSilfide,
  suraggelaggelus: habilidadesAggelus,
  suraggelsulfure: habilidadesSulfure,
  trog: habilidadesTrog,
};

export const habilidadesClasse: ListaHabilidadesClasse = {
  arcanista: [],
  barbaro: [],
  bardo: [],
  bucaneiro: [],
  cacador: [],
  cavaleiro: [],
  clerigo: [],
  druida: [],
  guerreiro: [],
  inventor: [],
  ladino: [],
  lutador: [],
  nobre: [],
  paladino: [],
};
