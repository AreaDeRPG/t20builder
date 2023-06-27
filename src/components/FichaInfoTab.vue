<template>
  <b-col cols="9">
    <FichaInfo :ficha="ficha" />
    <div>
      <b-tabs>
        <b-tab title="Pericias" active>
          <PericiasInfo :ficha="ficha" />
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
import { activeFicha as ficha } from "@/entities/ficha";

export default defineComponent({
  name: "FichaInfoTab",
  props: {},
  components: {
    FichaInfo,
    PericiasInfo,
  },
  computed: {
    ficha(): Ficha {
      return ficha;
    },
  },
});
</script>

<style scoped></style>
