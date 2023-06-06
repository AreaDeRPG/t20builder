<template>
  <div>
    <div v-for="i in 20" :key="i">
      <div class="d-flex justify-content-center">
        <h4>Nível {{ i }}:</h4>
        <b-button variant="primary" v-b-modal.classes @click="setNivel(i)">
          {{ getClasseNome(i) }}
        </b-button>
      </div>
    </div>
    <ClassesModal :nivel="nivel" :ficha="ficha" />
  </div>
</template>

<script lang="ts">
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent } from "vue";
import { PropType } from "vue/types/v3-component-props";
import ClassesModal from "./modals/classes/ClassesModal.vue";

export default defineComponent({
  name: "NivelInfo",
  data: () => {
    return {
      nivel: 0,
    };
  },
  props: {
    ficha: Object as PropType<Ficha>,
  },
  methods: {
    setNivel(i: number): void {
      this.nivel = i;
    },
    getClasseNome(i: number) {
      var res = "Classe";
      if (this.ficha && this.ficha.classes[i]) res = this.ficha.classes[i].nome;
      return res;
    },
  },
  components: { ClassesModal },
});
</script>
<style scoped></style>
