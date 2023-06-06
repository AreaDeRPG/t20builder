import { Fonte } from "../fonte/fonte";
import Habilidade from "./model/Habilidades";

interface ListaHabilidadesRaca {
  humano: Habilidade[];
  anao: Habilidade[];
  dahllan: Habilidade[];
  elfo: Habilidade[];
  goblin: Habilidade[];
  lefou: Habilidade[];
  minotauro: Habilidade[];
  qareen: Habilidade[];
  golem: Habilidade[];
  hynne: Habilidade[];
  kliren: Habilidade[];
  medusa: Habilidade[];
  osteon: Habilidade[];
  sereiatritao: Habilidade[];
  silfide: Habilidade[];
  suraggelaggelus: Habilidade[];
  suraggelsulfure: Habilidade[];
  trog: Habilidade[];
}
interface ListaHabilidadesClasse {
  arcanista: Habilidade[][];
  barbaro: Habilidade[][];
  bardo: Habilidade[][];
  bucaneiro: Habilidade[][];
  cacador: Habilidade[][];
  cavaleiro: Habilidade[][];
  clerigo: Habilidade[][];
  druida: Habilidade[][];
  guerreiro: Habilidade[][];
  inventor: Habilidade[][];
  ladino: Habilidade[][];
  lutador: Habilidade[][];
  nobre: Habilidade[][];
  paladino: Habilidade[][];
}

const habilidadesHumano = [new Habilidade(1, "Versatil", Fonte.BASICO, [])];

const habilidadesAnao = [
  new Habilidade(1, "Conhecimento das Rochas", Fonte.BASICO, []),
  new Habilidade(1, "Devagar e Sempre", Fonte.BASICO, []),
  new Habilidade(1, "Duro como Pedra", Fonte.BASICO, []),
  new Habilidade(1, "Tradição de Heredrimm", Fonte.BASICO, []),
];

const habilidadesDahllan = [
  new Habilidade(1, "Amiga das Plantas", Fonte.BASICO, []),
  new Habilidade(1, "Armadura de Allihanna", Fonte.BASICO, []),
  new Habilidade(1, "Empatia Selvagem", Fonte.BASICO, []),
];

const habilidadesElfo = [
  new Habilidade(1, "Graça de Glórienn", Fonte.BASICO, []),
  new Habilidade(1, "Sangue Mágico", Fonte.BASICO, []),
  new Habilidade(1, "Sentidos Élficos", Fonte.BASICO, []),
];

const habilidadesGoblin = [
  new Habilidade(1, "Engenhoso", Fonte.BASICO, []),
  new Habilidade(1, "Espelunqueiro", Fonte.BASICO, []),
  new Habilidade(1, "Peste Esguia", Fonte.BASICO, []),
  new Habilidade(1, "Rato das Ruas", Fonte.BASICO, []),
];

const habilidadesLefou = [
  new Habilidade(1, "Cria da Tormenta", Fonte.BASICO, []),
  new Habilidade(1, "Deformidade", Fonte.BASICO, []),
];

const habilidadesMinotauro = [
  new Habilidade(1, "Chifres", Fonte.BASICO, []),
  new Habilidade(1, "Couro Rígido", Fonte.BASICO, []),
  new Habilidade(1, "Faro", Fonte.BASICO, []),
];

const habilidadesQareen = [
  new Habilidade(1, "Desejos", Fonte.BASICO, []),
  new Habilidade(1, "Resistencia Elemental", Fonte.BASICO, []),
  new Habilidade(1, "Tatuagem Mágica", Fonte.BASICO, []),
];

const habilidadesGolem = [
  new Habilidade(1, "Chassi", Fonte.BASICO, []),
  new Habilidade(1, "Criatura Artificial", Fonte.BASICO, []),
  new Habilidade(1, "Propósito de Criação", Fonte.BASICO, []),
  new Habilidade(1, "Fonte Elemental", Fonte.BASICO, []),
];

const habilidadesHynne = [
  new Habilidade(1, "Arremessador", Fonte.BASICO, []),
  new Habilidade(1, "Pequeno e Rechonchudo", Fonte.BASICO, []),
  new Habilidade(1, "Sorte Salvadora", Fonte.BASICO, []),
];

const habilidadesKliren = [
  new Habilidade(1, "Híbrido", Fonte.BASICO, []),
  new Habilidade(1, "Engenhosidade", Fonte.BASICO, []),
  new Habilidade(1, "Ossos Frágeis", Fonte.BASICO, []),
  new Habilidade(1, "Vanguardista", Fonte.BASICO, []),
];

const habilidadesMedusa = [
  new Habilidade(1, "Cria de Megalokk", Fonte.BASICO, []),
  new Habilidade(1, "Natureza Venenosa", Fonte.BASICO, []),
  new Habilidade(1, "Olhar Atordoante", Fonte.BASICO, []),
];

const habilidadesOsteon = [
  new Habilidade(1, "Armadurra Óssea", Fonte.BASICO, []),
  new Habilidade(1, "Memória Póstuma", Fonte.BASICO, []),
  new Habilidade(1, "Tatuagem Natureza Esquelética", Fonte.BASICO, []),
  new Habilidade(1, "Preço da Não-Vida", Fonte.BASICO, []),
];

const habilidadesSereiaTritão = [
  new Habilidade(1, "Canção dos Mares", Fonte.BASICO, []),
  new Habilidade(1, "Mestre dos Tridentes", Fonte.BASICO, []),
  new Habilidade(1, "Transformação Anfíbia", Fonte.BASICO, []),
];

const habilidadesSilfide = [
  new Habilidade(1, "Asas de Borboleta", Fonte.BASICO, []),
  new Habilidade(1, "Espírito da Natureza", Fonte.BASICO, []),
  new Habilidade(1, "Magia das Fadas", Fonte.BASICO, []),
];

const habilidadesSuraggelAggelus = [
  new Habilidade(1, "Herança Divina", Fonte.BASICO, []),
  new Habilidade(1, "Luz Sagrada", Fonte.BASICO, []),
];

const habilidadesSuraggelSulfure = [
  new Habilidade(1, "Herança Divina", Fonte.BASICO, []),
  new Habilidade(1, "Sombras Profanas", Fonte.BASICO, []),
];

const habilidadesTrog = [
  new Habilidade(1, "Mau Cheiro", Fonte.BASICO, []),
  new Habilidade(1, "Mordida", Fonte.BASICO, []),
  new Habilidade(1, "Reptiliano", Fonte.BASICO, []),
  new Habilidade(1, "Sangue Frio", Fonte.BASICO, []),
];

const habilidadesComum = [
  new Habilidade(1, "Magias (1º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (2º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (3º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (4º Circulo)", Fonte.BASICO, []),
  new Habilidade(1, "Magias (5º Circulo)", Fonte.BASICO, []),
];

const habilidadesArcanista: Habilidade[][] = [
  [
    new Habilidade(1, "Caminho do Arcanista", Fonte.BASICO, [
      new Habilidade(1, "Caminho do Mago", Fonte.BASICO, []),
      new Habilidade(1, "Caminho do Bruxo", Fonte.BASICO, []),
      new Habilidade(1, "Caminho do Feiticeiro", Fonte.BASICO, []),
    ]),
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
  sereiatritao: habilidadesSereiaTritão,
  silfide: habilidadesSilfide,
  suraggelaggelus: habilidadesSuraggelAggelus,
  suraggelsulfure: habilidadesSuraggelSulfure,
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
