<template>
  <b-row>
    <b-table-simple hover short :fields="fields" responsive>
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Pericia</b-th>
          <b-th>Atividade</b-th>
          <b-th>Bonus</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="(atividades, index) in getData" :key="index">
        <b-tr>
          <b-th :rowspan="atividades.length + 1">{{
            getAtividadePericia(atividades[0])
          }}</b-th>
          <b-th>{{ atividades[0].atividade.atividade }}</b-th>
          <b-td>{{ atividades[0].bonus }}</b-td>
        </b-tr>
        <b-tr v-for="(atividade, index) in atividades" :key="index">
          <b-th v-if="index != 0">{{ atividade.atividade.atividade }}</b-th>
          <b-td v-if="index != 0">{{ atividade.bonus }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-row>
</template>

<script lang="ts">
import { activeFicha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent } from "vue";
import { AtividadeData, getAtividadesData } from "@/entities/atividades/index";
import Pericia from "@/entities/pericias/model/Pericia";
import { PericiaNome } from "@/entities/pericias/model/PericiaNome";

export default defineComponent({
  name: "AtividadesInfo",
  data: () => {
    return {
      fields: ["pericia", "atividade", "bonus"],
    };
  },
  methods: {
    getAtividadePericia(atividade: AtividadeData): PericiaNome {
      //console.log(atividade);
      //console.log(atividade.atividade);
      return atividade.atividade.pericia;
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    getData(): AtividadeData[][] {
      var pericias: Pericia[] = this.ficha.pericias;
      var buffs = this.ficha.getBuffs(this.ficha.nivel);
      const atividades = getAtividadesData(this.ficha.nivel, pericias, buffs);
      return atividades;
    },
  },
});
</script>

<style scoped></style>
