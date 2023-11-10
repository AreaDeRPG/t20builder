import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const luta = treinamentoPericias.filter((el) =>
  PericiaNome.LUTA.includes(el.nome as PericiaNome)
)[0];

const pontaria = treinamentoPericias.filter((el) =>
  PericiaNome.PONTARIA.includes(el.nome as PericiaNome)
)[0];

const balistica = new PoderClasse(
  "Inventor",
  "Balística",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(pontaria)]
);

const alquimistaIniciado = new PoderClasse(
  "Inventor",
  "Alquimista Iniciado",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [
    new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 1)),
    new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1)),
  ]
);

const engenhoqueiro = new PoderClasse(
  "Inventor",
  "Engenhoqueiro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 3))]
);

const automato = new PoderClasse(
  "Inventor",
  "Autômato",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(engenhoqueiro)]
);

const couraceiro = new PoderClasse(
  "Inventor",
  "Couraceiro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);
const armeiro = new PoderClasse(
  "Inventor",
  "Armeiro",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(luta)]
);

const alquimistaBatalha = new PoderClasse(
  "Inventor",
  "Alquimista de Batalha",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse,
  [new PreRequisito(alquimistaIniciado)]
);

export const poderesInventor: Poder[] = [
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
    Categoria.PoderClasse,
    [new PreRequisito(balistica)]
  ),
  alquimistaBatalha,
  alquimistaIniciado,
  armeiro,
  new PoderClasse(
    "Inventor",
    "Ativação Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(engenhoqueiro), new PreRequisito(7)]
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
  automato,
  new PoderClasse(
    "Inventor",
    "Autômato Prototipado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(automato)]
  ),
  balistica,
  new PoderClasse(
    "Inventor",
    "Blindagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(couraceiro), new PreRequisito(8)]
  ),
  new PoderClasse(
    "Inventor",
    "Cano Raiado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(balistica), new PreRequisito(5)]
  ),
  new PoderClasse(
    "Inventor",
    "Catalisador Instável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(alquimistaIniciado)]
  ),
  new PoderClasse(
    "Inventor",
    "Chutes e Palavrões",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(engenhoqueiro)]
  ),
  new PoderClasse(
    "Inventor",
    "Conhecimento de Fórmulas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(alquimistaIniciado)]
  ),
  couraceiro,
  engenhoqueiro,
  new PoderClasse(
    "Inventor",
    "Farmacêutico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 1))]
  ),
  new PoderClasse(
    "Inventor",
    "Ferreiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(armeiro), new PreRequisito(5)]
  ),
  new PoderClasse(
    "Inventor",
    "Granadeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(alquimistaBatalha)]
  ),
  new PoderClasse(
    "Inventor",
    "Homúnculo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(alquimistaIniciado)]
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
    Categoria.PoderClasse,
    [new PreRequisito(engenhoqueiro), new PreRequisito(5)]
  ),
  new PoderClasse(
    "Inventor",
    "Mestre Alquimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [
      new PreRequisito(new RequisitoAtributo(Atributos.INTELIGENCIA, 3)),
      new PreRequisito(new RequisitoAtributo(Atributos.SABEDORIA, 3)),
      new PreRequisito(alquimistaIniciado),
      new PreRequisito(10),
    ]
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
    Categoria.PoderClasse,
    [new PreRequisito(5), new PreRequisito(alquimistaIniciado)]
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
    Categoria.PoderClasse,
    [new PreRequisito(armeiro)]
  ),
  new PoderClasse(
    "Inventor",
    "Síntese Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(alquimistaIniciado)]
  ),
];
