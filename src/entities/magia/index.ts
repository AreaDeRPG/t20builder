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
    1,
    "Alarme",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Armadura Arcana",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Resistência a Energia",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Tranca Arcana",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,

    Tradicao.ARCANA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Aviso",

    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Concentração de Combate",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Área Escorregadia",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Conjurar Monstro",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Névoa",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Teia",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Adaga Mental",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Enfeitiçar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Hipnotismo",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Sono",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Explosão de Chamas",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Luz",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Seta Infalível",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Toque Chocante",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Criar Ilusão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    1,
    "Disfarce Ilusório",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    1,
    "Imagem Espelhada",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    1,
    "Leque Cromático",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.ILUSAO
  ),
  new Magia(
    1,
    "Amedrontar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Escuridão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Raio do Enfraquecimento",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Vitalidade Fantasma",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Arma Mágica",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    1,
    "Primor Atlético",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    1,
    "Queda Suave",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    1,
    "Transmutar Objetos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.ARCANA,
    Escola.TRANSMUTACAO
  ),

  new Magia(
    1,
    "Escudo da Fé",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Proteção Divina",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Santuário",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Suporte Ambiental",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ABJURACAO
  ),
  new Magia(
    1,
    "Compreensão",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Detectar Ameaças",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Orientação",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Visão Mística",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.UNIVERSAL,
    Escola.ADIVINHACAO
  ),
  new Magia(
    1,
    "Arma Espiritual",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Caminhos da Natureza",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Criar Elementos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.CONVOCACAO
  ),
  new Magia(
    1,
    "Acalmar Animal",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Bênção",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Comando",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Tranquilidade",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.ENCANTAMENTO
  ),
  new Magia(
    1,
    "Consagrar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Curar Ferimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Despedaçar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.EVOCACAO
  ),
  new Magia(
    1,
    "Infligir Ferimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Perdição",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Profanar",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.NECROMANCIA
  ),
  new Magia(
    1,
    "Abençoar Alimentos",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    1,
    "Armamento da Natureza",
    Fonte.BASICO,
    [],
    Circulo.PRIMEIRO_CIRCULO,
    Tradicao.DIVINA,
    Escola.TRANSMUTACAO
  ),
  new Magia(
    1,
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
    1,
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
