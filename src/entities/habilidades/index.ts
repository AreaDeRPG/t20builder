import { Acao } from "../acao/model/Acao";
import { Atributos } from "../atributos";
import { treinamentoPericias } from "../biografia";
import Buff from "../buff/model/Buff";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import { magias } from "../magia";
import Magia from "../magia/model/Magia";
import { poderes } from "../poderes";
import Utils from "../util";
import Habilidade from "./model/Habilidades";

interface ListaHabilidadesRaca {
  [key: string]: Habilidade[];
}

interface ListaHabilidadesClasse {
  [key: string]: Habilidade[][];
}

const habilidadesComum = [
  new Habilidade(1, "Magias (1º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (2º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (3º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (4º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (5º Circulo)", Fonte.BASICO, []),
];

const habilidadesHumano: Habilidade[] = [
  new Habilidade(
    1,
    "Versátil",
    Fonte.BASICO,
    treinamentoPericias,
    undefined,
    Categoria.habilidadesHumano
  ),
  new Habilidade(
    1,
    "Versátil",
    Fonte.BASICO,
    treinamentoPericias.concat(poderes.poderesCombate),
    undefined,
    Categoria.habilidadesHumano
  ),
];

const habilidadesAnao: Habilidade[] = [
  new Habilidade(
    1,
    "Conhecimento das Rochas",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    1,
    "Devagar e Sempre",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VELOCIDADE, -3, BuffType.BASE)],
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    1,
    "Duro como Pedra",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PV, 2, BuffType.BYLEVEL)],
    Categoria.habilidadesAnao
  ),
  new Habilidade(
    1,
    "Tradição de Heredrimm",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesAnao
  ),
];

const controlarPlantas = magias.primeiroCirculo.filter(
  (el) => el.nome == "Controlar Plantas"
)[0];

function setAtributo(magia: Magia, atributo: Atributos) {
  magia.atributoChave = atributo;
  return magia;
}

const habilidadesDahllan: Habilidade[] = [
  new Habilidade(
    1,
    "Amiga das Plantas",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan
  ),
  new Habilidade(
    1,
    "Armadura de Allihanna",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan,
    Acao.Movimento
  ),
  new Habilidade(
    1,
    "Empatia Selvagem",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesDahllan,
    Acao.Padrão,
    setAtributo(
      magias.primeiroCirculo.filter((el) => el.nome == "Controlar Plantas")[0],
      Atributos.SABEDORIA
    )
  ),
];

const habilidadesElfo: Habilidade[] = [
  new Habilidade(
    1,
    "Graça de Glórienn",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VELOCIDADE, 3, BuffType.BASE)],
    Categoria.habilidadesElfo
  ),
  new Habilidade(
    1,
    "Sangue Mágico",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PM, 0, BuffType.BYLEVEL)],
    Categoria.habilidadesElfo
  ),
  new Habilidade(
    1,
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
    1,
    "Engenhoso",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    1,
    "Espelunqueiro",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.VISAONOESCURO, 0, BuffType.BASE)],
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    1,
    "Peste Esguia",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesGoblin
  ),
  new Habilidade(
    1,
    "Rato das Ruas",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.FORTITUDE, 2, BuffType.BASE)],
    Categoria.habilidadesGoblin
  ),
];

const habilidadesLefou: Habilidade[] = [
  new Habilidade(
    1,
    "Cria da Tormenta",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesLefou
  ),
  new Habilidade(
    1,
    "Deformidade",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesLefou
  ),
];

const habilidadesMinotauro: Habilidade[] = [
  new Habilidade(
    1,
    "Chifres",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMinotauro
  ),
  new Habilidade(
    1,
    "Couro Rígido",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)],
    Categoria.habilidadesMinotauro
  ),
  new Habilidade(
    1,
    "Faro",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMinotauro
  ),
];

const habilidadesQareen: Habilidade[] = [
  new Habilidade(
    1,
    "Desejos",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesQareen
  ),
  new Habilidade(
    1,
    "Resistencia Elemental",
    Fonte.BASICO,
    [
      new Habilidade(1, "Qareen da Agua", Fonte.BASICO, []),
      new Habilidade(1, "Qareen do Ar", Fonte.BASICO, []),
      new Habilidade(1, "Qareen do Fogo", Fonte.BASICO, []),
      new Habilidade(1, "Qareen da Terra", Fonte.BASICO, []),
      new Habilidade(1, "Qareen da Luz", Fonte.BASICO, []),
      new Habilidade(1, "Qareen da Trevas", Fonte.BASICO, []),
    ],
    undefined,
    Categoria.habilidadesQareen
  ),
  new Habilidade(
    1,
    "Tatuagem Mágica",
    Fonte.BASICO,
    magias.primeiroCirculo,
    undefined,
    Categoria.habilidadesQareen
  ),
];

const habilidadesGolem: Habilidade[] = [
  new Habilidade(
    1,
    "Chassi",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DEFESA, 2, BuffType.BASE),
      new Buff(Caracteristica.PENALIDADEARMADURA, 2, BuffType.BASE),
    ],
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    1,
    "Criatura Artificial",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    1,
    "Propósito de Criação",
    Fonte.BASICO,
    poderes.poderesCombate,
    undefined,
    Categoria.habilidadesGolem
  ),
  new Habilidade(
    1,
    "Fonte Elemental",
    Fonte.BASICO,
    [
      new Habilidade(1, "Fonte Elemental (Agua)", Fonte.BASICO, []),
      new Habilidade(1, "Fonte Elemental (Ar)", Fonte.BASICO, []),
      new Habilidade(1, "Fonte Elemental (Fogo)", Fonte.BASICO, []),
      new Habilidade(1, "Fonte Elemental (Terra)", Fonte.BASICO, []),
    ],
    undefined,
    Categoria.habilidadesGolem
  ),
];

const habilidadesHynne: Habilidade[] = [
  new Habilidade(
    1,
    "Arremessador",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesHynne
  ),
  new Habilidade(
    1,
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
    1,
    "Sorte Salvadora",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesHynne
  ),
];

const habilidadesKliren: Habilidade[] = [
  new Habilidade(
    1,
    "Híbrido",
    Fonte.BASICO,
    treinamentoPericias,
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    1,
    "Engenhosidade",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    1,
    "Ossos Frágeis",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
  new Habilidade(
    1,
    "Vanguardista",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesKliren
  ),
];

const habilidadesMedusa: Habilidade[] = [
  new Habilidade(
    1,
    "Cria de Megalokk",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
  new Habilidade(
    1,
    "Natureza Venenosa",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
  new Habilidade(
    1,
    "Olhar Atordoante",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesMedusa
  ),
];

const cancaoMares: Magia[] = magias.primeiroCirculo.filter((el) =>
  [
    "Amedrontar",
    "Comando",
    "Despedaçar",
    "Enfeitiçar",
    "Hipnotismo",
    "Sono",
  ].includes(el.nome)
);

const habilidadesSereiaTritao: Habilidade[] = [
  new Habilidade(
    1,
    "Canção dos Mares",
    Fonte.BASICO,
    cancaoMares,
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    1,
    "Canção dos Mares",
    Fonte.BASICO,
    cancaoMares,
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    1,
    "Mestre dos Tridentes",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
  new Habilidade(
    1,
    "Transformação Anfíbia",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSereiaTritao
  ),
];

const magiaFadas: Magia[] = magias.primeiroCirculo.filter((el) =>
  ["Criar Ilusão", "Enfeitiçar", "Luz", "Sono"].includes(el.nome)
);

const habilidadesSilfide: Habilidade[] = [
  new Habilidade(
    1,
    "Asas de Borboleta",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    1,
    "Espírito da Natureza",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    1,
    "Magia das Fadas",
    Fonte.BASICO,
    magiaFadas,
    undefined,
    Categoria.habilidadesSilfide
  ),
  new Habilidade(
    1,
    "Magia das Fadas",
    Fonte.BASICO,
    magiaFadas,
    undefined,
    Categoria.habilidadesSilfide
  ),
];

const habilidadesAggelus: Habilidade[] = [
  new Habilidade(
    1,
    "Herança Divina",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DIPLOMACIA, 2, BuffType.BASE),
      new Buff(Caracteristica.INTUICAO, 2, BuffType.BASE),
    ],
    Categoria.habilidadesAggelus
  ),
  new Habilidade(
    1,
    "Luz Sagrada",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesAggelus,
    Acao.Padrão,
    magias.primeiroCirculo.find((el) => ["Luz"].includes(el.nome))
  ),
];

const habilidadesSulfure: Habilidade[] = [
  new Habilidade(
    1,
    "Herança Divina",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesSulfure
  ),
  new Habilidade(
    1,
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
    1,
    "Mau Cheiro",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    1,
    "Mordida",
    Fonte.BASICO,
    [],
    undefined,
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    1,
    "Reptiliano",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)],
    Categoria.habilidadesTrog
  ),
  new Habilidade(
    1,
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
      1,
      "Caminho do Arcanista",
      Fonte.BASICO,
      [
        new Habilidade(1, "Caminho do Mago", Fonte.BASICO, []),
        new Habilidade(1, "Caminho do Bruxo", Fonte.BASICO, []),
        new Habilidade(1, "Caminho do Feiticeiro", Fonte.BASICO, []),
      ],
      []
    ),
    habilidadesComum[0],
  ],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, []),
    habilidadesComum[1],
  ],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, []),
    habilidadesComum[2],
  ],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, []),
    habilidadesComum[3],
  ],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, []),
    habilidadesComum[4],
  ],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, [])],
  [
    new Habilidade(3, "Poder de Arcanista", Fonte.BASICO, []),
    new Habilidade(3, "Alta Arcana", Fonte.BASICO, []),
  ],
];

const habilidadesBarbaro: Habilidade[][] = [
  [new Habilidade(2, "Furia +2", Fonte.BASICO, [])],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Instinto Selvagem +1", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Redução de Dano 2", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade(2, "Fúria +3", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Redução de Dano 4", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade(2, "Instinto Selvagem +2", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Fúria +4", Fonte.BASICO, []),
    new Habilidade(2, "Redução de Dano 6", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Redução de Dano 8", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade(2, "Instinto Selvagem +3", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade(2, "Fúria +5", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [
    new Habilidade(2, "Redução de Dano 10", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, [])],
  [
    new Habilidade(2, "Fúria Titânica", Fonte.BASICO, []),
    new Habilidade(2, "Poder de Bárbaro", Fonte.BASICO, []),
  ],
];

const habilidadesOsteon: Habilidade[] = [
  new Habilidade(1, "Armadurra Óssea", Fonte.BASICO, []),
  new Habilidade(1, "Memória Póstuma", Fonte.BASICO, memoriasPostumas()),
  new Habilidade(1, "Natureza Esquelética", Fonte.BASICO, []),
  new Habilidade(1, "Preço da Não-Vida", Fonte.BASICO, []),
];

function memoriasPostumas(): Habilidade[] {
  const habilidades: Habilidade[] = treinamentoPericias
    .concat(habilidadesAnao)
    .concat(habilidadesDahllan)
    .concat(habilidadesElfo)
    .concat(habilidadesGoblin)
    .concat(habilidadesLefou)
    .concat(habilidadesMinotauro)
    .concat(habilidadesQareen)
    .concat(habilidadesGolem)
    .concat(habilidadesHynne)
    .concat(habilidadesKliren)
    .concat(habilidadesMedusa)
    .concat(habilidadesSereiaTritao)
    .concat(habilidadesSilfide)
    .concat(habilidadesAggelus)
    .concat(habilidadesSulfure)
    .concat(habilidadesTrog);
  return habilidades;
}

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
  arcanista: habilidadesArcanista,
  barbaro: habilidadesBarbaro,
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
