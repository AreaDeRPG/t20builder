<template>
  <b-modal id="racas" title="Raças" size="xl" centered scrollable>
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
            v-for="raca_ in filter"
            :key="raca_.id"
            :active="racaId === raca_.id"
            @click="escolherRaca(raca_)"
            class="text-center"
          >
            {{ raca_.nome }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type Raca from "@/entities/racas/model/Racas";
import { racas } from "@/entities/racas";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";

export default defineComponent({
  name: "RacasModal",
  data: () => {
    return {
      activeBook: "Todos",
    };
  },
  methods: {
    activate(newActive: string) {
      this.activeBook = newActive;
    },
    fill(): void {
      this.ficha.modificadores.forEach((el) => {
        el.raca = 0;
      });
      this.ficha.raca.modificadores.forEach((el1) => {
        this.ficha.modificadores.forEach((el2) => {
          if (el1.atributo == el2.atributo) {
            el2.raca = el1.getTotal();
          }
        });
      });
    },
    find(id: number): Raca {
      var raca: Raca = racas[0];
      racas.forEach((el: Raca) => {
        if (el.id == id) {
          raca = el;
        }
      });
      return raca;
    },
    escolherRaca(raca: Raca): void {
      // eslint-disable-next-line
      this.ficha.raca = raca;
      this.fill();
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    racaId(): number {
      return this.ficha.raca.id;
    },
    filter(): Raca[] {
      return racas.filter(
        (el) => el.fonte == this.activeBook || this.activeBook == "Todos"
      );
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
