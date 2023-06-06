<template>
  <b-row>
    <b-table striped hover :items="getData()" :fields="fields"> </b-table>
  </b-row>
</template>

<script lang="ts">
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent, type PropType } from "vue";

class PericiasData {
  treinamento: string;
  pericia: string;
  bônus_total: number;
  meio_nivel: number;
  atributo: number;
  treino: number;
  outros: number;
  constructor(
    treinamento: string,
    pericia: string,
    bonus_total: number,
    meio_nivel: number,
    atributo: number,
    treino: number,
    outros: number
  ) {
    this.treinamento = treinamento;
    this.pericia = pericia;
    this.bônus_total = bonus_total;
    this.meio_nivel = meio_nivel;
    this.atributo = atributo;
    this.treino = treino;
    this.outros = outros;
  }
}

export default defineComponent({
  name: "PericiasInfo",
  props: {
    ficha: Object as PropType<Ficha>,
  },
  data: () => {
    return {
      fields: [
        "treinamento",
        "pericia",
        "bônus_total",
        "meio_nivel",
        "atributo",
        "treino",
        "outros",
      ],
    };
  },
  methods: {
    getData() {
      var res: PericiasData[] = [];
      if (this.ficha) {
        var nivel: number = this.ficha.nivel;
        var meioNivel: number = this.ficha.getMeioNivel();
        this.ficha.pericias.forEach((el) =>
          res.push(
            new PericiasData(
              el.treino.charAt(0),
              el.nome,
              el.getBonus(nivel),
              meioNivel,
              el.modificador.getTotal(),
              el.getBonusTreinamento(nivel),
              el.sumBonus()
            )
          )
        );
      }
      return res;
    },
  },
});
</script>

<style scoped></style>
