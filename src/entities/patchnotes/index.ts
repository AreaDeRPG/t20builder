import PatchNote from "./model/PatchNotes";

export const patches: PatchNote[] = [
  new PatchNote(4, "v0.7.4", [
    "Adicionada seleção de perícias treinadas pela biografia (a seleção de poderes de biografia está disponível, mas apenas algumas estão implementadas para teste)",
    "Adicionada seleção de perícias treinadas pela raça (Humano, Kliren e Osteon)",
    "Adicionada seleção de Resistência Elemental do Qareen (bônus de resistência ainda não implementados)",
    "Adicionados bônus de perícia fixos de raça (bônus como +2 em Fortitude de Goblin estão implementados, mas o +5 do Lefou contra efeitos da Tormenta não está). Os bônus fixos escolhidos ainda não foram implementados, como a deformidade do Lefou",
    "Adicionado bônus na defesa para Minotauro, Golem e Trog",
    "Adicionada seleção de poder pela habilidade Versátil do Humano e Propósito de Criação do Golem, mas ainda não está implementada. A seleção é apenas para testes visuais",
    "Memória Póstuma de Osteon apenas seleciona perícia, poderes virão mais adiante",
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
