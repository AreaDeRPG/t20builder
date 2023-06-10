<template>
  <b-row>
    <b-table striped hover :items="getData()" :fields="fields"> </b-table>
  </b-row>
</template>

<script lang="ts">
import Buff from "@/entities/buff/model/Buff";
import { BuffType } from "@/entities/buff/model/BuffType";
import Ficha from "@/entities/ficha/model/Ficha";
import Pericia from "@/entities/pericias/model/Pericia";
import { Treinamento } from "@/entities/pericias/model/Treinamento";
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
        var pericias: Pericia[] = this.ficha.pericias;
        var buffs = this.ficha.getBuffs();
        pericias.forEach((el) => {
          res.push(
            new PericiasData(
              el.treinado.charAt(0),
              el.nome,
              el.getBonus(
                nivel,
                this.ficha!.getBuffs().filter(
                  (el_) => el_.caracteristica == el.caracteristica
                )
              ),
              meioNivel,
              el.modificador.getTotal(),
              el.getBonusTreinamento(nivel, buffs),
              el.sumBonus(
                this.ficha!.getBuffs().filter(
                  (el_) => el_.caracteristica == el.caracteristica
                )
              )
            )
          );
        });
      }
      return res;
    },
  },
});
</script>

<style scoped></style>
