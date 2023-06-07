<template>
  <b-modal id="poderselect" title="Escolher Habilidade" size="xl" centered scrollable>
    <!--
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
    -->
    <b-row>
      <b-col cols="3">
        <b-nav vertical justified pills>
          <b-nav-item
            v-for="(habilidade, index) in habilidades"
            :key="index"
            :active="habilidade === activeLocal"
            @click="setHabilidade(habilidade)"
            class="text-center"
          >
            {{ habilidade.nome }}
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Habilidade from "@/entities/habilidades/model/Habilidades";
export default defineComponent({
  name: "PoderSelectModal",
  data: () => {
    return {
      activeBook: "Todos",
      activeLocal: undefined as unknown as Habilidade | undefined,
    };
  },
  components: {},
  props: {
    habilidades: {
      type: Array as PropType<Habilidade[]>,
    },
    active: {
      type: Object as PropType<Habilidade>,
    },
    update: {
      type: Function,
    },
  },
  watch: {
    active(value: Habilidade | undefined) {
      this.activeLocal = value;
    },
  },
  methods: {
    activate(newActive: string): void {
      this.activeBook = newActive;
    },
    setHabilidade(habilidade: Habilidade): void {
      this.activeLocal = habilidade;
      if (this.update) this.update(habilidade);
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
