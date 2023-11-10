import { Acao } from "../acao/model/Acao";
import { Atributos } from "../atributos";
import Buff from "../buff/model/Buff";
import { BuffStack } from "../buff/model/BuffStack";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import { magias } from "../magia";
import Magia from "../magia/model/Magia";
import { treinamentoPericias } from "../pericias";
import { poderes } from "../poderes";
import { caminhoArcanista } from "../poderes/data/poderesArcanista";
import { caminhoCavaleiro } from "../poderes/data/poderesCavaleiro";
import { circuloMagia } from "../poderes/data/poderesMagia";
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

export const habilidadesComum = [
  ...circuloMagia,
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
      .concat(poderes.poderesMagia)
      .concat(poderes.poderesConcedidos)
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

const habilidadesOsteon: Habilidade[] = [
  new Habilidade("Armadurra Óssea", Fonte.BASICO, []),
  new Habilidade("Memória Póstuma", Fonte.BASICO, memoriasPostumas()),
  new Habilidade("Natureza Esquelética", Fonte.BASICO, []),
  new Habilidade("Preço da Não-Vida", Fonte.BASICO, []),
];

const habilidadesArcanista: Habilidade[][] = [
  //Nivel 1
  [caminhoArcanista, habilidadesComum[0]],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
    habilidadesComum[1],
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
    habilidadesComum[2],
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
    habilidadesComum[3],
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
    habilidadesComum[4],
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Arcanista",
      Fonte.BASICO,
      poderes.poderesArcanista,
      undefined,
      Categoria.habilidadesArcanista
    ),
    new Habilidade("Alta Arcana", Fonte.BASICO, []),
  ],
];

const habilidadesBarbaro: Habilidade[][] = [
  //Nivel 1
  [new Habilidade("Furia +2", Fonte.BASICO, [])],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Instinto Selvagem +1",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DANO, 1, BuffType.BASE),
        new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Redução de Dano 2",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.RD, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade("Fúria +3", Fonte.BASICO, []),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Redução de Dano 4",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.RD, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Instinto Selvagem +2",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DANO, 1, BuffType.BASE),
        new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade("Fúria +4", Fonte.BASICO, []),
    new Habilidade(
      "Redução de Dano 6",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.RD, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Redução de Dano 8",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.RD, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Instinto Selvagem +3",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DANO, 1, BuffType.BASE),
        new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade("Fúria +5", Fonte.BASICO, []),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade(
      "Redução de Dano 10",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.RD, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Barbaro",
      Fonte.BASICO,
      poderes.poderesBarbaro,
      undefined,
      Categoria.habilidadesBarbaro
    ),
    new Habilidade("Fúria Titânica", Fonte.BASICO, []),
  ],
];

const habilidadesBardo: Habilidade[][] = [
  //Nivel 1
  [new Habilidade("Inspiracao +1", Fonte.BASICO, []), habilidadesComum[0]],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Eclético", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Inspiracao +2", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    habilidadesComum[1],
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Inspiracao +3", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    habilidadesComum[2],
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Inspiracao +4", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    habilidadesComum[3],
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Fúria +5", Fonte.BASICO, []),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Inspiracao +5", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Bardo",
      Fonte.BASICO,
      poderes.poderesBardo,
      undefined,
      Categoria.habilidadesBardo
    ),
    new Habilidade("Artista Completo", Fonte.BASICO, []),
  ],
];

const habilidadesBucaneiro: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Audácia", Fonte.BASICO, []),
    new Habilidade("Insolência", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade("Evasão", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade(
      "Esquiva Sagaz +1",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DEFESA, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade("Panache", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade(
      "Esquiva Sagaz +2",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DEFESA, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade("Evasão Aprimorada", Fonte.BASICO, []),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade(
      "Esquiva Sagaz +3",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DEFESA, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade(
      "Esquiva Sagaz +4",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DEFESA, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade(
      "Esquiva Sagaz +5",
      Fonte.BASICO,
      [],
      [
        new Buff(Caracteristica.DEFESA, 1, BuffType.BASE),
        new Buff(Caracteristica.REFLEXOS, 1, BuffType.BASE),
      ]
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Bucaneiro",
      Fonte.BASICO,
      poderes.poderesBucaneiro,
      undefined,
      Categoria.habilidadesBucaneiro
    ),
    new Habilidade("Sorte de Nimb", Fonte.BASICO, []),
  ],
];

const habilidadesCacador: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Marca da Presa +1d4", Fonte.BASICO, []),
    new Habilidade(
      "Rastreador",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.SOBREVIVENCIA, 2, BuffType.BASE)]
    ),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Explorador", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Caminho do Explorador", Fonte.BASICO, []),
    new Habilidade("Marca da Presa +1d8", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Explorador", Fonte.BASICO, []),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Marca da Presa +1d12", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Explorador", Fonte.BASICO, []),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Marca da Presa +2d8", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Explorador", Fonte.BASICO, []),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Marca da Presa +2d10", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Explorador", Fonte.BASICO, []),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Caçador",
      Fonte.BASICO,
      poderes.poderesCacador,
      undefined,
      Categoria.habilidadesCacador
    ),
    new Habilidade("Mestre Caçador", Fonte.BASICO, []),
  ],
];

const habilidadesCavaleiro: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Baluarte +2", Fonte.BASICO, []),
    new Habilidade("Codigo de Honra", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Duelo +2", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    caminhoCavaleiro,
    new Habilidade("Baluarte +4", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Baluarte (Aliados Adjacentes)", Fonte.BASICO, []),
    new Habilidade("Duelo +3", Fonte.BASICO, []),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Baluarte +6", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Resoluto", Fonte.BASICO, []),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Duelo +4", Fonte.BASICO, []),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Baluarte +8", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Baluarte (Aliados em Alcance Curto)", Fonte.BASICO, []),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Baluarte +10", Fonte.BASICO, []),
    new Habilidade("Duelo +5", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Cavaleiro",
      Fonte.BASICO,
      poderes.poderesCavaleiro,
      undefined,
      Categoria.habilidadesCavaleiro
    ),
    new Habilidade("Bravura Final", Fonte.BASICO, []),
  ],
];

const habilidadesClerigo: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade(
      "Devoto",
      Fonte.BASICO,
      [],
      [
        new Buff(
          Caracteristica.PM,
          Atributos.SABEDORIA,
          BuffType.BASE,
          BuffStack.ATRIBUTO_SABEDORIA
        ),
      ]
    ),
    habilidadesComum[0],
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
    habilidadesComum[1],
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
    habilidadesComum[2],
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
    habilidadesComum[3],
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
    habilidadesComum[4],
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Clérigo",
      Fonte.BASICO,
      poderes.poderesClerigo,
      undefined,
      Categoria.habilidadesClerigo
    ),
    new Habilidade("Mão da Divindade", Fonte.BASICO, []),
  ],
];

const habilidadesDruida: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Devoto", Fonte.BASICO, []),
    new Habilidade("Empatia Selvagem", Fonte.BASICO, []),
    habilidadesComum[0],
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
    new Habilidade("Caminho dos Ermos", Fonte.BASICO, []),
    habilidadesComum[0],
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
    habilidadesComum[1],
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
    habilidadesComum[2],
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
    habilidadesComum[3],
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Druida",
      Fonte.BASICO,
      poderes.poderesDruida,
      undefined,
      Categoria.habilidadesDruida
    ),
    new Habilidade("Força da Natureza", Fonte.BASICO, []),
  ],
];

const habilidadesGuerreiro: Habilidade[][] = [
  //Nivel 1
  [new Habilidade("Ataque Especial +4", Fonte.BASICO, [])],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Durão", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Ataque Especial +8", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Ataque Extra", Fonte.BASICO, []),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Ataque Especial +12", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Ataque Especial +16", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Ataque Especial +20", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Guerreiro",
      Fonte.BASICO,
      poderes.poderesGuerreiro,
      undefined,
      Categoria.habilidadesGuerreiro
    ),
    new Habilidade("Campeão", Fonte.BASICO, []),
  ],
];

const habilidadesInventor: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Engenhosidade", Fonte.BASICO, []),
    new Habilidade("Protótipo", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Superior (1 Melhoria)", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Comerciante", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Superior (2 Melhorias)", Fonte.BASICO, []),
  ],
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Encontrar Fraqueza", Fonte.BASICO, []),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Superior (3 Melhorias)", Fonte.BASICO, []),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Mágico (Menor)", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Olho do Dragão", Fonte.BASICO, []),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Superior (4 Melhorias)", Fonte.BASICO, []),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Mágico (Médio)", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Fabricar Item Mágico (Maior)", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Inventor",
      Fonte.BASICO,
      poderes.poderesInventor,
      undefined,
      Categoria.habilidadesInventor
    ),
    new Habilidade("Obra-Prima", Fonte.BASICO, []),
  ],
];

const habilidadesLadino: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Ataque Furtivo +1d6", Fonte.BASICO, []),
    new Habilidade("Especialista", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Evasão", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +2d6", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Esquiva Sobrenatural", Fonte.BASICO, []),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +3d6", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +4d6", Fonte.BASICO, []),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Olho nas Costas", Fonte.BASICO, []),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +5d6", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Evasão Aprimorada", Fonte.BASICO, []),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +6d6", Fonte.BASICO, []),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +7d6", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +8d6", Fonte.BASICO, []),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +9d6", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("Ataque Furtivo +10d6", Fonte.BASICO, []),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Ladino",
      Fonte.BASICO,
      poderes.poderesLadino,
      undefined,
      Categoria.habilidadesLadino
    ),
    new Habilidade("A Pessoa Certa Para o Trabalho", Fonte.BASICO, []),
  ],
];

const habilidadesLutador: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade("Briga (1d6)", Fonte.BASICO, []),
    new Habilidade("Golpe Relâmpago", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade(
      "Casca Grossa (Con)",
      Fonte.BASICO,
      [],
      [
        new Buff(
          Caracteristica.DEFESA,
          Atributos.CONSTITUICAO,
          BuffType.BASE,
          BuffStack.ATRIBUTO_CONSTITUICAO
        ),
      ]
    ),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade("Briga (1d8)", Fonte.BASICO, []),
    new Habilidade("Golpe Cruel", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade(
      "Casca Grossa (Con + 1)",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)]
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade("Briga (1d10)", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade(
      "Casca Grossa (Con + 2)",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)]
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade("Briga (2d6)", Fonte.BASICO, []),
  ],
  //Nivel 14
  [],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade(
      "Casca Grossa (Con + 3)",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)]
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade("Briga (2d8)", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade(
      "Casga Grossa (Con + 4)",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.DEFESA, 1, BuffType.BASE)]
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Lutador",
      Fonte.BASICO,
      poderes.poderesLutador,
      undefined,
      Categoria.habilidadesLutador
    ),
    new Habilidade("Briga (2d10)", Fonte.BASICO, []),
  ],
];

const habilidadesNobre: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade(
      "Autoconfiança",
      Fonte.BASICO,
      [],
      [new Buff(Caracteristica.ATRIBUTODEFESA, Atributos.CARISMA)]
    ),
    new Habilidade("Espólio", Fonte.BASICO, []),
    new Habilidade("Orgulho", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Palavras Afiadas (2d6)", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Riqueza", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Gritar Ordens", Fonte.BASICO, []),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Presença Aristocrática", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Palavras Afiadas (4d6)", Fonte.BASICO, []),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Palavras Afiadas (6d6)", Fonte.BASICO, []),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Palavras Afiadas (8d6)", Fonte.BASICO, []),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Palavras Afiadas (10d6)", Fonte.BASICO, []),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Nobre",
      Fonte.BASICO,
      poderes.poderesNobre,
      undefined,
      Categoria.habilidadesNobre
    ),
    new Habilidade("Realeza", Fonte.BASICO, []),
  ],
];

const habilidadesPaladino: Habilidade[][] = [
  //Nivel 1
  [
    new Habilidade(
      "Abençoado",
      Fonte.BASICO,
      [],
      [
        new Buff(
          Caracteristica.PM,
          Atributos.CARISMA,
          BuffType.BASE,
          BuffStack.ATRIBUTO_CARISMA
        ),
      ]
    ),
    new Habilidade("Código do Herói", Fonte.BASICO, []),
    new Habilidade("Golpe Divino (+1d8)", Fonte.BASICO, []),
  ],
  //Nivel 2
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Cura pelas Mãos (1d8+1 PV)", Fonte.BASICO, []),
  ],
  //Nivel 3
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Aura Sagrada", Fonte.BASICO, []),
  ],
  //Nivel 4
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 5
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Benção da Justiça", Fonte.BASICO, []),
    new Habilidade("Golpe Divino (+2d8)", Fonte.BASICO, []),
  ],
  //Nivel 6
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Cura pelas Mãos (2d8+2 PV)", Fonte.BASICO, []),
  ],
  //Nivel 7
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 8
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 9
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Golpe Divino (+3d8)", Fonte.BASICO, []),
  ],
  //Nivel 10
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Cura pelas Mãos (3d8+3 PV)", Fonte.BASICO, []),
  ],
  //Nivel 11
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 12
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 13
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Golpe Divino (+4d8)", Fonte.BASICO, []),
  ],
  //Nivel 14
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Cura pelas Mãos (4d8+4 PV)", Fonte.BASICO, []),
  ],
  //Nivel 15
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 16
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 17
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Golpe Divino (+5d8)", Fonte.BASICO, []),
  ],
  //Nivel 18
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Cura pelas Mãos (5d8+5 PV)", Fonte.BASICO, []),
  ],
  //Nivel 19
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
  ],
  //Nivel 20
  [
    new Habilidade(
      "Poder de Paladino",
      Fonte.BASICO,
      poderes.poderesPaladino,
      undefined,
      Categoria.habilidadesPaladino
    ),
    new Habilidade("Vingador Sagrado", Fonte.BASICO, []),
  ],
];

// eslint-disable-next-line
const habilidadesTemplate: Habilidade[][] = [
  //Nivel 1
  [],
  //Nivel 2
  [],
  //Nivel 3
  [],
  //Nivel 4
  [],
  //Nivel 5
  [],
  //Nivel 6
  [],
  //Nivel 7
  [],
  //Nivel 8
  [],
  //Nivel 9
  [],
  //Nivel 10
  [],
  //Nivel 11
  [],
  //Nivel 12
  [],
  //Nivel 13
  [],
  //Nivel 14
  [],
  //Nivel 15
  [],
  //Nivel 16
  [],
  //Nivel 17
  [],
  //Nivel 18
  [],
  //Nivel 19
  [],
  //Nivel 20
  [],
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
  arcanista: habilidadesArcanista,
  barbaro: habilidadesBarbaro,
  bardo: habilidadesBardo,
  bucaneiro: habilidadesBucaneiro,
  cacador: habilidadesCacador,
  cavaleiro: habilidadesCavaleiro,
  clerigo: habilidadesClerigo,
  druida: habilidadesDruida,
  guerreiro: habilidadesGuerreiro,
  inventor: habilidadesInventor,
  ladino: habilidadesLadino,
  lutador: habilidadesLutador,
  nobre: habilidadesNobre,
  paladino: habilidadesPaladino,
};
