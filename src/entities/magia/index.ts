import { Fonte } from "../fonte/fonte";
import { Circulo } from "./model/Circulo";
import { Escola } from "./model/Escola";
import Magia from "./model/Magia";
import { Tradicao } from "./model/Tradicao";

interface ListaMagias {
  [key: string]: Magia[];
}

const magiasPrimeiroCirculo: Magia[] = [
  new Magia(
    "Alarme",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Armadura Arcana",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Resistência a Energia",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ABJURACAO
  ),
  new Magia(
    "Tranca Arcana",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,

    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Aviso",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Concentração de Combate",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Área Escorregadia",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Conjurar Monstro",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Névoa",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Teia",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Adaga Mental",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Enfeitiçar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Hipnotismo",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Sono",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Explosão de Chamas",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Luz",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.EVOCACAO
  ),
  new Magia(
    "Seta Infalível",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Toque Chocante",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Criar Ilusão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    "Disfarce Ilusório",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    "Imagem Espelhada",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    "Leque Cromático",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    "Amedrontar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Escuridão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Raio do Enfraquecimento",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Vitalidade Fantasma",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Arma Mágica",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    "Primor Atlético",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    "Queda Suave",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    "Transmutar Objetos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),

  new Magia(
    "Escudo da Fé",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Proteção Divina",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Santuário",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Suporte Ambiental",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    "Compreensão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Detectar Ameaças",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Orientação",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Visão Mística",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    "Arma Espiritual",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Caminhos da Natureza",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Criar Elementos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    "Acalmar Animal",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Bênção",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Comando",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Tranquilidade",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    "Consagrar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Curar Ferimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Despedaçar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    "Infligir Ferimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Perdição",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Profanar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    "Abençoar Alimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    "Armamento da Natureza",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    "Controlar Plantas",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.TRANSMUTACAO
  ),
].sort((a, b) => {
  if (a.nome === b.nome) return 0;
  return a.nome.localeCompare(b.nome);
});

const magiasSegundoCirculo: Magia[] = [
  new Magia(
    "Círculo da Justiça",
    Fonte.BASICO,
    [],
    Circulo.SEGUNDO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
];

export const magias: ListaMagias = {
  primeiroCirculo: magiasPrimeiroCirculo,
  segundoCirculo: magiasSegundoCirculo,
  terceiroCirculo: [],
  quartoCirculo: [],
  quintoCirculo: [],
};
