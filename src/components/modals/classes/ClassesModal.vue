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
            :key="classe?.id"
            :active="ficha.classes[nivel - 1]?.id === classe.id"
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
import { defineComponent } from "vue";
import Classe from "@/entities/classes/model/Classe";
import { classes } from "@/entities/classes";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha, currentLevel as nivel } from "@/entities/ficha";

export default defineComponent({
  name: "ClasseModal",
  data() {
    return {
      activeBook: "Todos" as string,
    };
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    nivel(): number {
      return nivel.value;
    },
  },
  methods: {
    filter(): Classe[] {
      if (this.activeBook === "Todos") {
        return classes;
      } else {
        return classes.filter((el) => el.fonte === this.activeBook);
      }
    },
    activate(newActive: string): void {
      this.activeBook = newActive;
    },
    escolherClasse(classe: Classe): void {
      this.ficha.setClasse(this.nivel - 1, classe);
      this.$set(this.ficha.classes, this.nivel - 1, classe);
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
