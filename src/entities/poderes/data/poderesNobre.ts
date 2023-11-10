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
import { autoridadeFeudal, titulo } from "./PoderesComuns";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";

const guerra = treinamentoPericias.filter((el) =>
  [PericiaNome.GUERRA].includes(el.nome as PericiaNome)
)[0];

const estrategista = new PoderClasse(
  "Nobre",
  "Estrategista",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(guerra),
    new PreRequisito(6),
    new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1)),
  ]
);

const inspirarConfianca = new PoderClasse(
  "Nobre",
  "Inspirar Confiança",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const linguaPrata = new PoderClasse(
  "Nobre",
  "Língua de Prata",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const poderesNobre: Poder[] = [
  new PoderClasse(
    "Nobre",
    "Armadura Brilhante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(8)]
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
  autoridadeFeudal,
  new PoderClasse(
    "Nobre",
    "Educação Privilegiada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  estrategista,
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
    Categoria.PoderClasse,
    [new PreRequisito(estrategista), new PreRequisito(12)]
  ),
  new PoderClasse(
    "Nobre",
    "Grito Tirânico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(8)]
  ),
  inspirarConfianca,
  new PoderClasse(
    "Nobre",
    "Inspirar Glória",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(inspirarConfianca), new PreRequisito(8)]
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
    Categoria.PoderClasse,
    [new PreRequisito(6)]
  ),
  new PoderClasse(
    "Nobre",
    "Língua de Ouro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(linguaPrata), new PreRequisito(8)]
  ),
  linguaPrata,
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
    Categoria.PoderClasse,
    [new PreRequisito(16)]
  ),
  titulo,
  new PoderClasse(
    "Nobre",
    "Voz Poderosa",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DIPLOMACIA, 2),
      new Buff(Caracteristica.INTIMIDACAO, 2),
    ],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
