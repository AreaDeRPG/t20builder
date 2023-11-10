import Buff from "@/entities/buff/model/Buff";
import { BuffType } from "@/entities/buff/model/BuffType";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { Atributos } from "@/entities/atributos";
import { BuffStack } from "@/entities/buff/model/BuffStack";
import Habilidade from "@/entities/habilidades/model/Habilidades";

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

export const poderesArcanista: Poder[] = [
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
