<template>
  <b-col cols="9">
    <FichaInfo />
    <div>
      <b-tabs>
        <b-tab title="Pericias" active>
          <PericiasInfo />
        </b-tab>
        <b-tab title="Atividades">
          <AtividadesInfo />
        </b-tab>
        <b-tab title="Equipamento">
          <EquipamentoInfo />
        </b-tab>
        <b-tab title="Magia" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
        <b-tab title="Aliados" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
        <b-tab title="Detalhes" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </div>
  </b-col>
</template>

<script lang="ts">
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent } from "vue";
import FichaInfo from "./FichaInfo.vue";
import PericiasInfo from "./PericiasInfo.vue";
import { activeFicha } from "@/entities/ficha";
import AtividadesInfo from "./AtividadesInfo.vue";
import EquipamentoInfo from "./EquipamentoInfo.vue";

export default defineComponent({
  name: "FichaInfoTab",
  components: {
    FichaInfo,
    PericiasInfo,
    AtividadesInfo,
    EquipamentoInfo,
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>

<style scoped></style>
