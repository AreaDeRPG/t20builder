import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderMagia from "../model/PoderMagia";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";
import { treinamentoPericias } from "@/entities/pericias";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";
import Habilidade from "@/entities/habilidades/model/Habilidades";

const misticismo = treinamentoPericias.filter((el) =>
  [PericiaNome.MISTICISMO].includes(el.nome as PericiaNome)
)[0];

const religiao = treinamentoPericias.filter((el) =>
  [PericiaNome.RELIGIAO].includes(el.nome as PericiaNome)
)[0];

export const circuloMagia = [
  new Habilidade("Magias (1º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (2º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (3º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (4º Circulo)", Fonte.BASICO, []),
  new Habilidade("Magias (5º Circulo)", Fonte.BASICO, []),
];

export const poderesMagia: Poder[] = [
  new PoderMagia(
    "Celebrar Ritual",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia,
    [new PreRequisito(misticismo, religiao), new PreRequisito(8)]
  ),
  new PoderMagia(
    "Escrever Pergaminho",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia,
    [new PreRequisito(circuloMagia[1])]
  ),
  new PoderMagia(
    "Foco em Magia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Acelerada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia,
    [new PreRequisito(circuloMagia[1])]
  ),
  new PoderMagia(
    "Magia Ampliada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Discreta",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Magia Ilimitada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Preparar Poção",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia,
    [new PreRequisito(circuloMagia[0])]
  ),
];
