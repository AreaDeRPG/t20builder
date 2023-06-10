import PatchNote from "./model/PatchNotes";

export const patches: PatchNote[] = [
  new PatchNote(4, "v0.7.4", [
    "Adicionado selecao de pericias treinadas pela biografia (selecao de poderes de biografia disponivel, mas apenas algumas estao implementadas para teste)",
    "Adicionado selecao de pericias treinadas pela raca (Humano, Kliren e Osteon)",
    "Adicionado selecao de Resistencia Elemental do Qareen (bonus de resistencia ainda nao implementados",
    "Adicionado bonus de pericia fixos de raca (bonus como +2 em fortitude de goblin estao implementados, mas o +5 do lefou contra efeitos da tormenta nao) (bonus fixos escolhidos ainda nao implementados, como a deformidade do lefou)",
    "Adicionado bonus na defesa pelo Minotauro e Golem e Trog",
    "Adicionado selecao de poder pela habilidade Versatil de Humano e Proposito de Criacao do golem, mas ainda nao implementado, a selecao eh apenas para testes visuais",
    "Memoria Postuma de Osteon apenas seleciona pericia, poderes virao mais a frente",
  ]),
  new PatchNote(3, "v0.7.3", [
    "Adicionada lista de habilidades das biografias (bônus ainda não implementados)",
    "Adicionada seleção das habilidades das biografias",
  ]),
  new PatchNote(2, "v0.7.2", [
    "mudança na UI para adicionar link para o servidor Área de RPG (modelo atual sujeito a alterações quando iniciar a versão de update de UI)",
    "adicionado nome das habilidades de raça das raças do livro básico",
    "remoção temporária das habilidades de classe de nível 1 de arcanista e bárbaro (virão em breve)",
    "adicionado patch notes para usuários acompanharem evolução",
  ]),
  new PatchNote(1, "v0.7.1", [
    "calculo de PV pelas classes e pelos atributos",
    "calculo de PM pelas classes",
    "seleção de classes por nível",
    "seleção de raça",
    "seleção de origem",
    "seleção do nível do personagem",
    "calculo de pericias considerando metade do nível e atributo chave",
    "outros campos de personagem ainda não estão funcionais (como nome, XP e velocidade) [talvez considerar avisar quando o XP atingir um marco quando subir de nível?]",
    "importado compra de pontos",
  ]),
];
