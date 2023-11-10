import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { autoridadeFeudal, solidez, titulo } from "./PoderesComuns";
import Buff from "@/entities/buff/model/Buff";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";

export const caminhoCavaleiro = new Habilidade(
  "Caminho do Cavaleiro",
  Fonte.BASICO,
  [
    new Habilidade("Bastião", Fonte.BASICO, []),
    new Habilidade("Montaria", Fonte.BASICO, []),
  ]
);

export const poderesCavaleiro: Poder[] = [
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
  autoridadeFeudal,
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
    Categoria.PoderClasse,
    [new PreRequisito(12)]
  ),
  new PoderClasse(
    "Cavaleiro",
    "Estandarte",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(titulo), new PreRequisito(14)]
  ),
  new PoderClasse(
    "Cavaleiro",
    "Etiqueta",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.DIPLOMACIA, 2),
      new Buff(Caracteristica.NOBREZA, 2),
    ],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(titulo), new PreRequisito(14)]
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
    Categoria.PoderClasse,
    [new PreRequisito(caminhoCavaleiro.habilidades[1])]
  ),
  new PoderClasse(
    "Cavaleiro",
    "Pajem",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DIPLOMACIA, 2)],
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
  solidez,
  titulo,
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
