import { Atributos } from "../atributos";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Fonte } from "../fonte/fonte";
import { habilidadesRaca } from "../habilidades";
import Modificador from "../modificadores/model/Modificador";
import Raca from "./model/Racas";

export const racas: Raca[] = [
  new Raca(
    1,
    "Humano",
    [
      new Modificador(Atributos.LIVRE, 0, 0, 0),
      new Modificador(Atributos.LIVRE, 0, 0, 0),
      new Modificador(Atributos.LIVRE, 0, 0, 0),
    ],
    habilidadesRaca.humano,
    Fonte.BASICO
  ),
  new Raca(
    2,
    "Anao",
    [
      new Modificador(Atributos.CONSTITUICAO, 0, 2, 0),
      new Modificador(Atributos.SABEDORIA, 0, 1, 0),
      new Modificador(Atributos.DESTREZA, 0, -1, 0),
    ],
    habilidadesRaca.anao,
    Fonte.BASICO
  ),
  new Raca(
    3,
    "Dahllan",
    [
      new Modificador(Atributos.SABEDORIA, 0, 2, 0),
      new Modificador(Atributos.DESTREZA, 0, 1, 0),
      new Modificador(Atributos.INTELIGENCIA, 0, -1, 0),
    ],
    habilidadesRaca.dahllan,
    Fonte.BASICO
  ),
  new Raca(
    4,
    "Elfo",
    [
      new Modificador(Atributos.INTELIGENCIA, 0, 2, 0),
      new Modificador(Atributos.DESTREZA, 0, 1, 0),
      new Modificador(Atributos.CONSTITUICAO, 0, -1, 0),
    ],
    habilidadesRaca.elfo,
    Fonte.BASICO
  ),
  new Raca(
    5,
    "Goblin",
    [
      new Modificador(Atributos.DESTREZA, 0, 2, 0),
      new Modificador(Atributos.INTELIGENCIA, 0, 1, 0),
      new Modificador(Atributos.CARISMA, 0, -1, 0),
    ],
    habilidadesRaca.goblin,
    Fonte.BASICO
  ),
  new Raca(
    6,
    "Lefou",
    [
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.CARISMA, 0, -1, 0),
    ],
    habilidadesRaca.lefou,
    Fonte.BASICO,
    Caracteristica.MONSTRO
  ),
  new Raca(
    7,
    "Minotauro",
    [
      new Modificador(Atributos.FORCA, 0, 2, 0),
      new Modificador(Atributos.CONSTITUICAO, 0, 1, 0),
      new Modificador(Atributos.SABEDORIA, 0, -1, 0),
    ],
    habilidadesRaca.minotauro,
    Fonte.BASICO
  ),
  new Raca(
    8,
    "Qareen",
    [
      new Modificador(Atributos.CARISMA, 0, 2, 0),
      new Modificador(Atributos.INTELIGENCIA, 0, 1, 0),
      new Modificador(Atributos.SABEDORIA, 0, -1, 0),
    ],
    habilidadesRaca.qareen,
    Fonte.BASICO
  ),
  new Raca(
    9,
    "Hynne",
    [
      new Modificador(Atributos.DESTREZA, 0, 2, 0),
      new Modificador(Atributos.CARISMA, 0, 1, 0),
      new Modificador(Atributos.FORCA, 0, -1, 0),
    ],
    habilidadesRaca.hynne,
    Fonte.BASICO
  ),
  new Raca(
    10,
    "Golem",
    [
      new Modificador(Atributos.FORCA, 0, 2, 0),
      new Modificador(Atributos.CONSTITUICAO, 0, 1, 0),
      new Modificador(Atributos.CARISMA, 0, -1, 0),
    ],
    habilidadesRaca.golem,
    Fonte.BASICO,
    Caracteristica.CONSTRUTO,
    true
  ),
  new Raca(
    11,
    "Kliren",
    [
      new Modificador(Atributos.INTELIGENCIA, 0, 2, 0),
      new Modificador(Atributos.CARISMA, 0, 1, 0),
      new Modificador(Atributos.FORCA, 0, -1, 0),
    ],
    habilidadesRaca.kliren,
    Fonte.BASICO
  ),
  new Raca(
    12,
    "Medusa",
    [
      new Modificador(Atributos.DESTREZA, 0, 2, 0),
      new Modificador(Atributos.CARISMA, 0, 1, 0),
    ],
    habilidadesRaca.medusa,
    Fonte.BASICO,
    Caracteristica.MONSTRO
  ),
  new Raca(
    13,
    "Osteon",
    [
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.CONSTITUICAO, 0, -1, 0),
    ],
    habilidadesRaca.osteon,
    Fonte.BASICO,
    Caracteristica.MORTOVIVO
  ),
  new Raca(
    14,
    "Sereia/Tritao",
    [
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
      new Modificador(Atributos.LIVRE, 0, 1, 0),
    ],
    habilidadesRaca.sereiatritao,
    Fonte.BASICO
  ),
  new Raca(
    15,
    "Silfide",
    [
      new Modificador(Atributos.CARISMA, 0, 2, 0),
      new Modificador(Atributos.DESTREZA, 0, 1, 0),
      new Modificador(Atributos.FORCA, 0, -2, 0),
    ],
    habilidadesRaca.silfide,
    Fonte.BASICO,
    Caracteristica.ESPIRITO
  ),
  new Raca(
    16,
    "Suraggel (Aggelus)",
    [
      new Modificador(Atributos.SABEDORIA, 0, 2, 0),
      new Modificador(Atributos.CARISMA, 0, 1, 0),
    ],
    habilidadesRaca.suraggelaggelus,
    Fonte.BASICO,
    Caracteristica.ESPIRITO
  ),
  new Raca(
    17,
    "Suraggel (Sulfure)",
    [
      new Modificador(Atributos.DESTREZA, 0, 2, 0),
      new Modificador(Atributos.INTELIGENCIA, 0, 1, 0),
    ],
    habilidadesRaca.suraggelsulfure,
    Fonte.BASICO,
    Caracteristica.ESPIRITO
  ),
  new Raca(
    18,
    "Trog",
    [
      new Modificador(Atributos.CONSTITUICAO, 0, 2, 0),
      new Modificador(Atributos.FORCA, 0, 1, 0),
      new Modificador(Atributos.INTELIGENCIA, 0, -1, 0),
    ],
    habilidadesRaca.trog,
    Fonte.BASICO,
    Caracteristica.MONSTRO
  ),
];
