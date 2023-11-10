import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import {
  ambidestria,
  arqueiro,
  esgrimista,
  impeto,
  solidez,
} from "./PoderesComuns";
import { PreRequisito } from "../model/PreRequisito";
import { RequisitoAtributo } from "../model/RequisitoAtributo";
import { Atributos } from "@/entities/atributos";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

const especializacaoArma = new PoderClasse(
  "Guerreiro",
  "Especialização em Arma",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

const guerra = treinamentoPericias.filter((el) =>
  [PericiaNome.GUERRA].includes(el.nome as PericiaNome)
)[0];

export const poderesGuerreiro: Poder[] = [
  ambidestria,
  arqueiro,
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
    Categoria.PoderClasse,
    [new PreRequisito(new RequisitoAtributo(Atributos.FORCA, 1))]
  ),
  esgrimista,
  especializacaoArma,
  new PoderClasse(
    "Guerreiro",
    "Especialização em Armadura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(12)]
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
    Categoria.PoderClasse,
    [new PreRequisito(5)]
  ),
  impeto,
  new PoderClasse(
    "Guerreiro",
    "Mestre em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(especializacaoArma), new PreRequisito(12)]
  ),
  new PoderClasse(
    "Guerreiro",
    "Planejamento Marcial",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(10), new PreRequisito(guerra)]
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
  solidez,
  new PoderClasse(
    "Guerreiro",
    "Tornado de Dor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(6)]
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
