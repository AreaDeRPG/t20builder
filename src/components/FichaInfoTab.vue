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
import { PropType, defineComponent } from "vue";
import FichaInfo from "./FichaInfo.vue";
import PericiasInfo from "./PericiasInfo.vue";

export default defineComponent({
  name: "FichaInfoTab",
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
  },
  components: {
    FichaInfo,
    PericiasInfo,
  },
});
</script>

<style scoped></style>
