import Buff from "@/entities/buff/model/Buff";
import { BuffType } from "@/entities/buff/model/BuffType";
import { Caracteristica } from "@/entities/caracteristica/model/Caracteristica";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { Fonte } from "@/entities/fonte/fonte";
import { magias } from "@/entities/magia";
import Poder from "../model/Poder";
import PoderConcedido from "../model/PoderConcedido";
import { PoderTipo } from "../model/PoderTipo";

export const poderesConcedidos: Poder[] = [
  new PoderConcedido(
    "Afinidade com a Tormenta",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Almejar o Impossível",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Anfíbio",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Apostar com o Trapaceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Armas da Ambição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Arsenal das profundezas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Astúcia da Serpente",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2),
      new Buff(Caracteristica.FURTIVIDADE, 2),
      new Buff(Caracteristica.INTUICAO, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Ataque Piedoso",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura de Medo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura de Paz",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Aura Restauradora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Bênção do Mana",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVELCEIL)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Carícia Sombria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Centelha Mágica",
    Fonte.BASICO,
    magias.primeiroCirculo,
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Compreender os Ermos",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.SOBREVIVENCIA, 2)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Conhecimento Enciclopédico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Conjurar Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Coragem Total",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Cura Gentil",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Curandeira Perfeita",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dedo Verde",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Descanso Natural",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Esperança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Imortalidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Profecia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Ressurreição",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Dom da Verdade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Escamas Dracônicas",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.DEFESA, 2), new Buff(Caracteristica.FORTITUDE, 2)],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Escudo Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Espada Justiceira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Espada Solar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Êxtase da Loucura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Familiar Ofídico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Farsa do Fingidor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fé Guerreira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Forma de Macaco",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fulgor Solar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Fúria Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Golpista Divino",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ENGANACAO, 2),
      new Buff(Caracteristica.JOGATINA, 2),
      new Buff(Caracteristica.LADINAGEM, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Habitante do Deserto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Inimigo de Tenebra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Kiai Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Liberdade Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Manto da Penumbra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mente Analítica",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INTUICAO, 2),
      new Buff(Caracteristica.INVESTIGACAO, 2),
      new Buff(Caracteristica.VONTADE, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mente Vazia",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INICIATIVA, 2),
      new Buff(Caracteristica.PERCEPCAO, 2),
      new Buff(Caracteristica.VONTADE, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Mestre dos Mares",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Olhar Amedrontador",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Palavras de Bondade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Percepção Temporal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Pesquisa Abençoada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Poder Oculto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Presas Primordiais",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Presas Venenosas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Rejeição Divina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Reparar Injustiça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sangue de Ferro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sangue Ofídico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Servos do Dragão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sopro do Mar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Sorte dos Loucos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Talento Artístico",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ACROBACIA, 2),
      new Buff(Caracteristica.ATUACAO, 2),
      new Buff(Caracteristica.DIPLOMACIA, 2),
    ],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Teurgista Místico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Tradição de Lin-Wu",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Transmissão da Loucura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Tropas Duyshidakk",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Urro Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Visão nas Trevas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz da Civilização",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz da Natureza",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Voz dos Monstros",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
  new PoderConcedido(
    "Zumbificar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderConcedido,
    Categoria.PoderConcedido
  ),
];
