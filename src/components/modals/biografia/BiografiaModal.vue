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
import { defineComponent, type PropType } from "vue";
import type Ficha from "@/entities/ficha/model/Ficha";
import { biografias } from "@/entities/biografia";
import Biografia from "@/entities/biografia/model/Biografia";
import Utils from "@/entities/util";
export default defineComponent({
  name: "BiografiaModal",
  data: () => {
    return {
      activeBook: "Todos",
    };
  },
  components: {},
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
  },
  methods: {
    activate(newActive: string) {
      this.activeBook = newActive;
    },
    find(id: number): Biografia {
      var biografia: Biografia = biografias[0];
      biografias.forEach((el: Biografia) => {
        if (el.id == id) {
          biografia = el;
        }
      });
      return biografia;
    },
    escolherBiografia(biografia: Biografia): void {
      // eslint-disable-next-line
      this.ficha.biografia = biografia;
    },
    biografiaId(): number {
      return this.ficha.biografia.id;
    },
    filter(): Biografia[] {
      return biografias.filter(
        (el) => el.fonte == this.activeBook || this.activeBook == "Todos"
      );
    },
  },
});
</script>

<style scoped></style>
