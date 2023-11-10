import { Atributos } from "../atributos";
import Buff from "../buff/model/Buff";
import { BuffStack } from "../buff/model/BuffStack";
import { BuffType } from "../buff/model/BuffType";
import { Caracteristica } from "../caracteristica/model/Caracteristica";
import { Categoria } from "../categoria/model/Categoria";
import { Fonte } from "../fonte/fonte";
import { magias } from "../magia";
import { poderesArcanista } from "./data/poderesArcanista";
import { poderesBarbaro } from "./data/poderesBarbaro";
import { poderesBardo } from "./data/poderesBardo";
import { poderesBucaneiro } from "./data/poderesBucaneiro";
import { poderesCacador } from "./data/poderesCacador";
import { poderesCavaleiro } from "./data/poderesCavaleiro";
import { poderesClerigo } from "./data/poderesClerigo";
import { poderesCombate } from "./data/poderesCombate";
import { poderesDruida } from "./data/poderesDruida";
import Poder from "./model/Poder";
import PoderClasse from "./model/PoderClasse";
import PoderConcedido from "./model/PoderConcedido";
import PoderDestino from "./model/PoderDestino";
import PoderMagia from "./model/PoderMagia";
import { PoderTipo } from "./model/PoderTipo";
import PoderTormenta from "./model/PoderTormenta";

interface ListaPoderes {
  [key: string]: Poder[];
}

const poderesDestino: Poder[] = [
  new PoderDestino(
    "Acrobático",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Ao Sabor do Destino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Aparência Inofensiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Atlético",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.ATLETISMO, 2, BuffType.BASE),
      new Buff(Caracteristica.VELOCIDADE, 3, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Atraente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Comandar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Costas Largas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Foco em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Inventário Organizado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Investigador",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INVESTIGACAO, 2, BuffType.BASE),
      new Buff(
        Caracteristica.INTUICAO,
        Atributos.INTELIGENCIA,
        BuffType.BASE,
        BuffStack.ATRIBUTO_INTELIGENCIA
      ),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Lobo Solitário",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Medicina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Parceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Sentidos Aguçados",
    Fonte.BASICO,
    [],
    [new Buff(Caracteristica.PERCEPCAO, 2, BuffType.BASE)],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Sortudo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Surto Heroico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Torcida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Treinamento em Perícia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Venefício",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
  new PoderDestino(
    "Vontade de Ferro",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.PM, 0, BuffType.BYHALFLEVEL),
      new Buff(Caracteristica.VONTADE, 2, BuffType.BASE),
    ],
    PoderTipo.PoderDestino,
    Categoria.PoderDestino
  ),
];

const poderesTormenta: Poder[] = [
  new PoderTormenta(
    "Anatomia Insana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Antenas",
    Fonte.BASICO,
    [],
    [
      new Buff(Caracteristica.INICIATIVA, 1, BuffType.BASE),
      new Buff(Caracteristica.PERCEPCAO, 1, BuffType.BASE),
      new Buff(Caracteristica.VONTADE, 1, BuffType.BASE),
    ],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Armamento Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Articulações Flexíveis",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Asas Insetoides",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Carapaça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Corpo Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Cuspir Enxame",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Dentes Afiados",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Desprezar a Realidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Empunhadura Rubra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Fome de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Larva Explosiva",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Legião Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Mãos Membranosas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Estendidos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Membros Extras",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Mente Aberrante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Olhos Vermelhos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Pele Corrompida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Sangue Ácido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
  new PoderTormenta(
    "Visco Rubro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderTormenta,
    Categoria.PoderTormenta
  ),
];

const poderesConcedidos: Poder[] = [
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

const poderesMagia: Poder[] = [
  new PoderMagia(
    "Celebrar Ritual",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
  ),
  new PoderMagia(
    "Escrever Pergaminho",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderMagia,
    Categoria.PoderMagia
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
    Categoria.PoderMagia
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
    Categoria.PoderMagia
  ),
];

const poderesGuerreiro: Poder[] = [
  new PoderClasse(
    "Guerreiro",
    "Ambidestria",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Arqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Esgrimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Especialização em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Especialização em Armadura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Ímpeto",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Mestre em Arma",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Planejamento Marcial",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
  new PoderClasse(
    "Guerreiro",
    "Solidez",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Guerreiro",
    "Tornado de Dor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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

const poderesInventor: Poder[] = [
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Alquimista de Batalha",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Alquimista Iniciado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Armeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Ativação Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
  new PoderClasse(
    "Inventor",
    "Autômato",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Autômato Prototipado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Balística",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Blindagem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Cano Raiado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Catalisador Instável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Chutes e Palavrões",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Conhecimento de Fórmulas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Couraceiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Engenhoqueiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Farmacêutico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Ferreiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Granadeiro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Homúnculo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Mestre Alquimista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
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
    Categoria.PoderClasse
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
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Inventor",
    "Síntese Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesLadino: Poder[] = [
  new PoderClasse(
    "Ladino",
    "Assassinar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Alquimista de Batalha",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Contatos no Submundo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Emboscar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Escapista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Fuga Formidável",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Gatuno",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Ladrão Arcano",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mão na Boca",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mãos Rápidas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Mente Criminosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Oportunismo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Rolamento Defensivo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Roubo de Mana",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Saqueador de Tumbas",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Sombra",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Truque Mágico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Velocidade Ladina",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Veneno Persistente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Ladino",
    "Veneno Potente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesLutador: Poder[] = [
  new PoderClasse(
    "Lutador",
    "Arma Improvisada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Até Acertar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Braços Calejados",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Cabeçada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Chave",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Confiança dos Ringues",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Convencido",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Baixo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Golpe Imprudente.",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Imobilização",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Língua dos Becos",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Lutador de Chão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Nome na Arena",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Punhos de Adamante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Rasteira",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Sarado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Sequência Destruidora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trincado",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trocação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Trocação Tumultuosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Valentão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Lutador",
    "Voadora",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesNobre: Poder[] = [
  new PoderClasse(
    "Nobre",
    "Armadura Brilhante",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Autoridade Feudal",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Educação Privilegiada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Estrategista",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Favor",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "General",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Grito Tirânico",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Inspirar Confiança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Inspirar Glória",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Jogo da Corte",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Liderar pelo Exemplo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua de Ouro",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua de Prata",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Língua Rápida",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Presença Majestosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Título",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Nobre",
    "Voz Poderosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

const poderesPaladino: Poder[] = [
  new PoderClasse(
    "Paladino",
    "Arma Sagrada",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aumento de Atributo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Antimagia",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Ardente",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura de Cura",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura de Invencibilidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Aura Poderosa",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Fulgor Divino",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Arrependimento",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Coragem",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Iluminação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Justiça",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Libertação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Salvação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Vindicação",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Julgamento Divino: Zelo",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Orar",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Caridade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Castidade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Compaixão",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Humildade",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
  new PoderClasse(
    "Paladino",
    "Virtude Paladinesca: Temperança",
    Fonte.BASICO,
    [],
    [],
    PoderTipo.PoderClasse,
    Categoria.PoderClasse
  ),
];

export const poderes: ListaPoderes = {
  poderesCombate: poderesCombate,
  poderesDestino: poderesDestino,
  poderesTormenta: poderesTormenta,
  poderesMagia: poderesMagia,
  poderesConcedidos: poderesConcedidos,
  poderesArcanista: poderesArcanista,
  poderesBarbaro: poderesBarbaro,
  poderesBardo: poderesBardo,
  poderesBucaneiro: poderesBucaneiro,
  poderesCacador: poderesCacador,
  poderesCavaleiro: poderesCavaleiro,
  poderesClerigo: poderesClerigo,
  poderesDruida: poderesDruida,
  poderesGuerreiro: poderesGuerreiro,
  poderesInventor: poderesInventor,
  poderesLadino: poderesLadino,
  poderesLutador: poderesLutador,
  poderesNobre: poderesNobre,
  poderesPaladino: poderesPaladino,
};
