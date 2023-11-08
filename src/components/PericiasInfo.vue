<template>
  <b-row>
    <b-table striped hover :items="getData()" :fields="fields"> </b-table>
  </b-row>
</template>

<script lang="ts">
import { activeFicha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
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
      var nivel: number = this.ficha.nivel;
      var meioNivel: number = this.ficha.getMeioNivel();
      var pericias: Pericia[] = this.ficha.pericias;
      var buffs = this.ficha.getBuffs();
      pericias.forEach((el) => {
        res.push(
          new PericiasData(
            el.treinado.charAt(0),
            el.nome,
            el.getBonus(
              nivel,
              this.ficha
                .getBuffs()
                .filter((el_) => el_.caracteristica == el.caracteristica)
            ),
            meioNivel,
            el.modificador.getTotal(),
            el.getBonusTreinamento(nivel, buffs),
            el.sumBonus(
              this.ficha
                .getBuffs()
                .filter((el_) => el_.caracteristica == el.caracteristica),
              this.ficha.nivel
            )
          )
        );
      });
      return res;
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>

<style scoped></style>
