<template>
  <b-col cols="9">
    <FichaInfo />
    <div>
      <b-tabs>
        <b-tab title="Pericias" active>
          <PericiasInfo />
        </b-tab>
        <b-tab title="Equipamento" disabled>
          <p>I'm the second tab</p>
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

export default defineComponent({
  name: "FichaInfoTab",
  components: {
    FichaInfo,
    PericiasInfo,
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>

<style scoped></style>
