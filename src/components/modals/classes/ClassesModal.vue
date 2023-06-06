<template>
  <b-modal id="classes" title="Classes" size="xl" centered scrollable>
    <b-row>
      <b-nav tabs>
        <b-nav-item :active="activeBook === 'Todos'" @click="activate('Todos')">
          Todos
        </b-nav-item>
        <b-nav-item
          :active="activeBook === 'Basico'"
          @click="activate('Basico')"
        >
          Livro Básico
        </b-nav-item>
        <b-nav-item :active="activeBook === 'DB'" @click="activate('DB')">
          Dragão Brasil
        </b-nav-item>
        <b-nav-item disabled>???</b-nav-item>
      </b-nav>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-nav vertical justified pills>
          <b-nav-item
            v-for="classe in filter()"
            :key="classe.id"
            :active="(ficha.classes[nivel - 1]?.id ?? -1) === classe.id"
            @click="escolherClasse(classe)"
            class="text-center"
          >
            {{ classe.nome }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import Classe from "@/entities/classes/model/Classe";
import { classes } from "@/entities/classes";

export default defineComponent({
  name: "ClasseModal",
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
    nivel: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      activeBook: "Todos" as string,
    };
  },
  methods: {
    activate(newActive: string): void {
      this.activeBook = newActive;
    },
    escolherClasse(classe: Classe): void {
      // eslint-disable-next-line
      this.ficha.classes[this.nivel - 1] = classe;
      this.$set(this.ficha.classes, this.nivel - 1, classe);
      this.ficha.render();
    },
    filter(): Classe[] {
      if (this.activeBook === "Todos") {
        return classes;
      } else {
        return classes.filter((el) => el.fonte === this.activeBook);
      }
    },
    isActive(classe: Classe): boolean {
      return (this.ficha.classes[this.nivel - 1]?.id ?? -1) === classe.id;
    },
  },
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
.mt-1 {
  margin-top: 1em;
}
</style>
