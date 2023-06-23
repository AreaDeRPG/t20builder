<template>
  <b-modal id="niveis" title="Selecionar Nivel" size="sm" centered>
    <b-row>
      <div v-for="i in 20" :key="i" class="col-2-4">
        <b-button variant="primary" @click="setNivel(i)">
          {{ i }}
        </b-button>
      </div>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { activeFicha as ficha } from "@/entities/ficha";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "SelectNivelModal",
  props: {},
  methods: {
    setNivel(i: number): void {
      // eslint-disable-next-line
      ficha.nivel = i;
      this.$bvModal.hide("niveis");
    },
  },
});
</script>

<style scoped>
.col-2-4 {
  flex: 0 0 auto;
  width: 20%;
}
.col-2-4 > button {
  width: 95%;
  margin-top: 1em;
}
</style>
