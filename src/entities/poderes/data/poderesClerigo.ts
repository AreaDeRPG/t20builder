import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import Poder from "../model/Poder";
import PoderClasse from "../model/PoderClasse";
import { PoderTipo } from "../model/PoderTipo";
import { PreRequisito } from "../model/PreRequisito";

const canalizarEnergia = new PoderClasse(
  "Clérigo",
  "Canalizar Energia Positiva/Negativa",
  Fonte.BASICO,
  [],
  [],
  PoderTipo.PoderClasse,
  Categoria.PoderClasse
);

export const poderesClerigo: Poder[] = [
  new PoderClasse(
    "Clérigo",
    "Abençoar Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Autoridade Eclesiástica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(5)]
  ),
  canalizarEnergia,
  new PoderClasse(
    "Clérigo",
    "Canalizar Amplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(canalizarEnergia)]
  ),
  new PoderClasse(
    "Clérigo",
    "Comunhão Vital",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Conhecimento Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Expulsar/Comandar Mortos-Vivos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(canalizarEnergia)]
  ),
  new PoderClasse(
    "Clérigo",
    "Liturgia Mágica",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Magia Sagrada/Profana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Mestre Celebrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse,
    [new PreRequisito(12)]
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Bênção da Vida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Chamado às Armas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Elevação do Espírito",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Escudo Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Missa: Superar as Limitações",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Prece de Combate",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Clérigo",
    "Símbolo Sagrado Energizado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];
