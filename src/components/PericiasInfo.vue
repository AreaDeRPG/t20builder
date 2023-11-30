<template>
  <b-row>
    <b-table striped hover fixed small :items="getData" :fields="fields">
    </b-table>
  </b-row>
</template>

<script lang="ts">
import { activeFicha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
import Pericia from "@/entities/pericias/model/Pericia";
import { defineComponent } from "vue";

interface PericiasData {
  treinamento: string;
  pericia: string;
  bonus_total: number;
  meio_nivel: number;
  atributo: number;
  treino: number;
  outros: number;
}

export default defineComponent({
  name: "PericiasInfo",
  data: () => {
    return {
      fields: [
        "treinamento",
        "pericia",
        "bonus_total",
        "meio_nivel",
        "atributo",
        "treino",
        "outros",
      ],
    };
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    getData(): PericiasData[] {
      var res: PericiasData[] = [];
      var nivel: number = this.ficha.nivel;
      var meioNivel: number = this.ficha.getMeioNivel();
      var pericias: Pericia[] = this.ficha.pericias;
      var buffs = this.ficha.getBuffs(this.ficha.nivel);
      pericias.forEach((el) => {
        const buffsCaracteristica = buffs.filter(
          (el_) => el_.caracteristica == el.caracteristica
        );
        const bonus = el.getBonus(nivel, buffsCaracteristica);
        res.push({
          treinamento: el.treinado(buffs).charAt(0),
          pericia: el.nome,
          bonus_total: bonus,
          meio_nivel: meioNivel,
          atributo: el.modificador.getTotal(),
          treino: el.getBonusTreinamento(nivel, buffs),
          outros: el.sumBonus(buffsCaracteristica, this.ficha.nivel),
        });
      });
      return res;
    },
  },
});
</script>

<style scoped></style>
