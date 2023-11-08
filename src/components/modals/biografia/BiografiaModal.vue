<template>
  <b-modal id="biografias" title="Origens" size="xl" centered scrollable>
    <b-row>
      <b-nav tabs>
        <b-nav-item :active="activeBook == 'Todos'" @click="activate('Todos')">
          Todos
        </b-nav-item>
        <b-nav-item
          :active="activeBook == 'Basico'"
          @click="activate('Basico')"
        >
          Livro Básico
        </b-nav-item>
        <b-nav-item :active="activeBook == 'DB'" @click="activate('DB')">
          Dragão Brasil
        </b-nav-item>
        <b-nav-item disabled>???</b-nav-item>
      </b-nav>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-nav vertical justified pills>
          <b-nav-item
            v-for="biografia_ in filter()"
            :key="biografia_.id"
            :active="biografiaId() === biografia_.id"
            @click="escolherBiografia(biografia_)"
            class="text-center"
          >
            {{ biografia_.nome }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { origens } from "@/entities/origem";
import Origem from "@/entities/origem/model/Origem";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";

export default defineComponent({
  name: "BiografiaModal",
  data: () => {
    return {
      activeBook: "Todos",
    };
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
  methods: {
    activate(newActive: string) {
      this.activeBook = newActive;
    },
    find(id: number): Origem {
      var biografia: Origem = origens[0];
      origens.forEach((el: Origem) => {
        if (el.id == id) {
          biografia = el;
        }
      });
      return biografia;
    },
    escolherBiografia(biografia: Origem): void {
      // eslint-disable-next-line
      this.ficha.origem = biografia;
      this.$set(this.ficha.origem, 1, biografia);
    },
    biografiaId(): number {
      return this.ficha.origem.id;
    },
    filter(): Origem[] {
      return origens.filter(
        (el) => el.fonte == this.activeBook || this.activeBook == "Todos"
      );
    },
  },
});
</script>

<style scoped></style>
