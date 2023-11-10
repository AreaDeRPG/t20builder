import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";

const titulo = new PoderClasse(
  "Cavaleiro",
  "Título",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
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
  new PoderClasse(
    "Cavaleiro",
    "Autoridade Feudal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Cavaleiro",
    "Etiqueta",
    Fonte.BASICO,
    [],
    [],
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
