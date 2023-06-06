<template>
  <b-nav vertical justified pills>
    <b-nav-item
      v-for="classe_ in filter()"
      :key="classe_.id"
      :active="classeId === classe_.id"
      @click="escolherClasse(classe_)"
      class="text-center"
    >
      {{ classe_.nome }}
    </b-nav-item>
  </b-nav>
</template>

<script lang="ts">
import { classes } from "@/entities/classes";
import Classe from "@/entities/classes/model/Classe";
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent, type PropType } from "vue";
export default defineComponent({
  name: "ClassSelect",
  data: () => {
    return {};
  },
  props: {
    activeBook: {
      type: String,
      required: true,
    },
    ficha: {
      type: Ficha,
      required: true,
    },
    nivel: {
      type: Number,
      required: true,
    },
    classeId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    filter(): Classe[] {
      return classes.filter(
        (el) => el.fonte == this.activeBook || this.activeBook == "Todos"
      );
    },
    escolherClasse(classe: Classe): void {
      this.ficha.setClasse(this.nivel - 1, classe);
    },
  },
});
</script>

<style scoped></style>
