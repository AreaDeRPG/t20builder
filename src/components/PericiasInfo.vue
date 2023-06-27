<template>
  <b-row>
    <b-table striped hover :items="getData()" :fields="fields"> </b-table>
  </b-row>
</template>

<script lang="ts">
import { activeFicha as ficha } from "@/entities/ficha";
import Pericia from "@/entities/pericias/model/Pericia";
import { defineComponent } from "vue";

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
  props: {},
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
      var nivel: number = ficha.nivel;
      var meioNivel: number = ficha.getMeioNivel();
      var pericias: Pericia[] = ficha.pericias;
      var buffs = ficha.getBuffs();
      pericias.forEach((el) => {
        res.push(
          new PericiasData(
            el.treinado.charAt(0),
            el.nome,
            el.getBonus(
              nivel,
              ficha!
                .getBuffs()
                .filter((el_) => el_.caracteristica == el.caracteristica)
            ),
            meioNivel,
            el.modificador.getTotal(),
            el.getBonusTreinamento(nivel, buffs),
            el.sumBonus(
              ficha
                .getBuffs()
                .filter((el_) => el_.caracteristica == el.caracteristica),
              ficha.nivel
            )
          )
        );
      });
      return res;
    },
  },
});
</script>

<style scoped></style>
