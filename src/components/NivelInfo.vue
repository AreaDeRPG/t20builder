<template>
  <div>
    <div v-for="i in 20" :key="i">
      <div class="d-flex justify-content-center">
        <h4>Nível {{ i }}:</h4>
        <b-button variant="primary" v-b-modal.classes @click="nivel = i">
          {{ ficha.classes[i]?.nome ?? "Classe" }}
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
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
  },
  components: { ClassesModal },
});
</script>
<style scoped></style>
