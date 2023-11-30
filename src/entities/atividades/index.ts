import Buff from "../buff/model/Buff";
import Pericia from "../pericias/model/Pericia";
import { PericiaNome } from "../pericias/model/PericiaNome";
import { AtividadeNome } from "./model/AtividadeNome";

export interface Atividade {
  pericia: PericiaNome;
  atividade: AtividadeNome;
}

export interface AtividadeData {
  atividade: Atividade;
  bonus: number;
}

const base = [
  //[0]
  [
    {
      atividade: AtividadeNome.EQUILIBRIO,
      pericia: PericiaNome.ACROBACIA,
    },
    {
      atividade: AtividadeNome.ESCAPAR,
      pericia: PericiaNome.ACROBACIA,
    },
    {
      atividade: AtividadeNome.PASSAR_POR_INIMIGO,
      pericia: PericiaNome.ACROBACIA,
    },
  ] as Atividade[],
  //[1]
  [
    {
      atividade: AtividadeNome.CORRIDA,
      pericia: PericiaNome.ATLETISMO,
    },
    {
      atividade: AtividadeNome.ESCALAR,
      pericia: PericiaNome.ATLETISMO,
    },
    {
      atividade: AtividadeNome.NATACAO,
      pericia: PericiaNome.ATLETISMO,
    },
    {
      atividade: AtividadeNome.SALTAR,
      pericia: PericiaNome.ATLETISMO,
    },
  ] as Atividade[],
  //[2]
  [
    {
      atividade: AtividadeNome.CONDUZIR,
      pericia: PericiaNome.CAVALGAR,
    },
    {
      atividade: AtividadeNome.GALOPAR,
      pericia: PericiaNome.CAVALGAR,
    },
    {
      atividade: AtividadeNome.MONTAR_RAPIDAMENTE,
      pericia: PericiaNome.CAVALGAR,
    },
  ] as Atividade[],
  //[3]
  [
    {
      atividade: AtividadeNome.PRIMEIROS_SOCORROS,
      pericia: PericiaNome.CURA,
    },
  ] as Atividade[],
  //[4]
  [
    {
      atividade: AtividadeNome.BARGANHA,
      pericia: PericiaNome.DIPLOMACIA,
    },
    {
      atividade: AtividadeNome.MUDAR_ATITUDE,
      pericia: PericiaNome.DIPLOMACIA,
    },
    {
      atividade: AtividadeNome.PERSUACAO,
      pericia: PericiaNome.DIPLOMACIA,
    },
  ] as Atividade[],
  //[5]
  [
    {
      atividade: AtividadeNome.DISFARCE,
      pericia: PericiaNome.ENGANACAO,
    },
    {
      atividade: AtividadeNome.FALSIFICACAO,
      pericia: PericiaNome.ENGANACAO,
    },
    {
      atividade: AtividadeNome.FINTAR,
      pericia: PericiaNome.ENGANACAO,
    },
    {
      atividade: AtividadeNome.INSINUACAO,
      pericia: PericiaNome.ENGANACAO,
    },
    {
      atividade: AtividadeNome.INTRIGA,
      pericia: PericiaNome.ENGANACAO,
    },
    {
      atividade: AtividadeNome.MENTIR,
      pericia: PericiaNome.ENGANACAO,
    },
  ] as Atividade[],
  //[6]
  [
    {
      atividade: AtividadeNome.ESCONDER_SE,
      pericia: PericiaNome.FURTIVIDADE,
    },
    {
      atividade: AtividadeNome.SEGUIR,
      pericia: PericiaNome.FURTIVIDADE,
    },
  ] as Atividade[],
  //[7]
  [
    {
      atividade: AtividadeNome.ASSUSTAR,
      pericia: PericiaNome.INTIMIDACAO,
    },
    {
      atividade: AtividadeNome.COAGIR,
      pericia: PericiaNome.INTIMIDACAO,
    },
  ] as Atividade[],
  //[8]
  [
    {
      atividade: AtividadeNome.PERCEBER_MENTIRA,
      pericia: PericiaNome.INTUICAO,
    },
  ] as Atividade[],
  //[9]
  [
    {
      atividade: AtividadeNome.INTERROGAR,
      pericia: PericiaNome.INVESTIGACAO,
    },
    {
      atividade: AtividadeNome.PROCURAR,
      pericia: PericiaNome.INVESTIGACAO,
    },
  ] as Atividade[],
  //[10]
  [
    {
      atividade: AtividadeNome.OBSERVAR,
      pericia: PericiaNome.PERCEPCAO,
    },
    {
      atividade: AtividadeNome.OUVIR,
      pericia: PericiaNome.PERCEPCAO,
    },
  ] as Atividade[],
  //[11]
  [
    {
      atividade: AtividadeNome.ACAMPAMENTO,
      pericia: PericiaNome.SOBREVIVENCIA,
    },
    {
      atividade: AtividadeNome.IDENTIFICAR_CRIATURA,
      pericia: PericiaNome.SOBREVIVENCIA,
    },
    {
      atividade: AtividadeNome.ORIENTAR_SE,
      pericia: PericiaNome.SOBREVIVENCIA,
    },
  ] as Atividade[],
] as Atividade[][];

export const getAtividades = (): Atividade[][] => {
  return base;
};

const atividadeToAtividadeNome = (atividades: Atividade[]): AtividadeNome[] => {
  const res = [] as AtividadeNome[];
  atividades.forEach((el) => res.push(el.atividade));
  return res;
};

const criarAtividade = (
  atividadeNome: AtividadeNome,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): AtividadeData => {
  return {
    atividade: {
      atividade: atividadeNome,
      pericia: pericia.nome,
    },
    bonus: pericia.getBonus(
      nivel,
      buff.filter((el) => el.caracteristica == pericia.caracteristica)
    ),
  };
};

const atividadesAcrobacia = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  const baseAtividades = [
    AtividadeNome.AMORTECER_QUEDA,
    AtividadeNome.PASSAR_ESPACO_APERTADO,
  ];

  const atividades_ = treinado
    ? [...baseAtividades, ...atividadeToAtividadeNome(base[0])]
    : atividadeToAtividadeNome(base[0]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesAdestramento = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.MANEJAR_ANIMAL,
    AtividadeNome.ACALMAR_ANIMAL,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesAtletismo = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[1]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesAtuacao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [AtividadeNome.APRESENTACAO, AtividadeNome.IMPRESSIONAR];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesCavalgar = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[2]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesConhecimento = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [AtividadeNome.IDIOMAS, AtividadeNome.INFORMACAO];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesCura = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  const baseAtividades = [
    AtividadeNome.CUIDADOS_PROLONGADOS,
    AtividadeNome.NECROPSIA,
    AtividadeNome.TRATAMENTO,
  ];

  const atividades_ = treinado
    ? [...baseAtividades, ...atividadeToAtividadeNome(base[3])]
    : atividadeToAtividadeNome(base[3]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesDiplomacia = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[4]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesEnganacao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[5]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesFurtividade = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[6]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesGuerra = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.ANALISAR_TERRENO,
    AtividadeNome.PLANO_ACAO,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesIntimidacao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[7]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesIntuicao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  const baseAtividades = [AtividadeNome.PRESSENTIMENTO];

  const atividades_ = treinado
    ? [...baseAtividades, ...atividadeToAtividadeNome(base[8])]
    : atividadeToAtividadeNome(base[8]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesInvestigacao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[9]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesJogatina = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [AtividadeNome.APOSTAR];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesLadinagem = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.ABRIR_FECHADURA,
    AtividadeNome.OCULTAR,
    AtividadeNome.PUNGA,
    AtividadeNome.SABOTAR,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesMisticismo = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.DETECTAR_MAGIA,
    AtividadeNome.IDENTIFICAR_CRIATURA,
    AtividadeNome.IDENTIFICAR_ITEM_MAGICO,
    AtividadeNome.IDENTIFICAR_MAGIA,
    AtividadeNome.INFORMACAO,
    AtividadeNome.LANCAR_MAGIA_ARMADURA,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesOficio = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.CONSERTAR,
    AtividadeNome.FABRICAR,
    AtividadeNome.IDENTIFICAR,
    AtividadeNome.SUSTENTO,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};
const atividadesNobreza = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [AtividadeNome.ETIQUETA, AtividadeNome.INFORMACAO];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesPercepcao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  nivel: number,
  buff: Buff[]
): void => {
  const atividades_ = atividadeToAtividadeNome(base[10]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesReligiao = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  if (!treinado) return;
  const atividades_ = [
    AtividadeNome.IDENTIFICAR_CRIATURA,
    AtividadeNome.IDENTIFICAR_ITEM_MAGICO,
    AtividadeNome.INFORMACAO,
    AtividadeNome.RITO,
  ];

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

const atividadesSobrevivencia = (
  atividades: AtividadeData[][],
  index: () => number,
  pericia: Pericia,
  treinado: boolean,
  nivel: number,
  buff: Buff[]
): void => {
  const baseAtividades = [AtividadeNome.RASTREAR];

  const atividades_ = treinado
    ? [...baseAtividades, ...atividadeToAtividadeNome(base[11])]
    : atividadeToAtividadeNome(base[11]);

  atividades[index()] = atividades_
    .sort((a, b) => a.localeCompare(b))
    .map((atividade: AtividadeNome) =>
      criarAtividade(atividade, pericia, nivel, buff)
    );
};

export const getAtividadesData = (
  nivel: number,
  pericias: Pericia[],
  buffs: Buff[]
): AtividadeData[][] => {
  const atividades: AtividadeData[][] = [];
  let index = 0;
  const getIndex = () => {
    return index++;
  };
  atividadesAcrobacia(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.ACROBACIA)!,
    pericias
      .find((el) => el.nome === PericiaNome.ACROBACIA)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesAdestramento(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.ADESTRAMENTO)!,
    pericias
      .find((el) => el.nome === PericiaNome.ADESTRAMENTO)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesAtletismo(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.ATLETISMO)!,
    nivel,
    buffs
  );
  atividadesAtuacao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.ATUACAO)!,
    pericias.find((el) => el.nome === PericiaNome.ATUACAO)?.isTreinado(buffs) ??
      false,
    nivel,
    buffs
  );
  atividadesCavalgar(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.CAVALGAR)!,
    nivel,
    buffs
  );
  atividadesConhecimento(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.CONHECIMENTO)!,
    pericias
      .find((el) => el.nome === PericiaNome.CONHECIMENTO)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesCura(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.CURA)!,
    pericias.find((el) => el.nome === PericiaNome.CURA)?.isTreinado(buffs) ??
      false,
    nivel,
    buffs
  );
  atividadesDiplomacia(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.DIPLOMACIA)!,
    nivel,
    buffs
  );
  atividadesEnganacao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.ENGANACAO)!,
    nivel,
    buffs
  );
  atividadesFurtividade(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.FURTIVIDADE)!,
    nivel,
    buffs
  );
  atividadesGuerra(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.GUERRA)!,
    pericias.find((el) => el.nome === PericiaNome.GUERRA)?.isTreinado(buffs) ??
      false,
    nivel,
    buffs
  );
  atividadesIntimidacao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.INTIMIDACAO)!,
    nivel,
    buffs
  );
  atividadesIntuicao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.INTUICAO)!,
    pericias
      .find((el) => el.nome === PericiaNome.INTUICAO)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesInvestigacao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.INVESTIGACAO)!,
    nivel,
    buffs
  );
  atividadesJogatina(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.JOGATINA)!,
    pericias
      .find((el) => el.nome === PericiaNome.JOGATINA)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesLadinagem(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.LADINAGEM)!,
    pericias
      .find((el) => el.nome === PericiaNome.LADINAGEM)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesMisticismo(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.MISTICISMO)!,
    pericias
      .find((el) => el.nome === PericiaNome.MISTICISMO)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesNobreza(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.NOBREZA)!,
    pericias.find((el) => el.nome === PericiaNome.NOBREZA)?.isTreinado(buffs) ??
      false,
    nivel,
    buffs
  );
  atividadesOficio(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.OFICIO)!,
    pericias.find((el) => el.nome === PericiaNome.OFICIO)?.isTreinado(buffs) ??
      false,
    nivel,
    buffs
  );
  atividadesPercepcao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.PERCEPCAO)!,
    nivel,
    buffs
  );
  atividadesReligiao(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.RELIGIAO)!,
    pericias
      .find((el) => el.nome === PericiaNome.RELIGIAO)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  atividadesSobrevivencia(
    atividades,
    getIndex,
    pericias.find((el) => el.nome === PericiaNome.SOBREVIVENCIA)!,
    pericias
      .find((el) => el.nome === PericiaNome.SOBREVIVENCIA)
      ?.isTreinado(buffs) ?? false,
    nivel,
    buffs
  );
  return atividades;
};
