import PatchNote from "./model/PatchNotes";

export const patches: PatchNote[] = [
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
