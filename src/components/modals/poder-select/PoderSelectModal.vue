<template>
  <b-modal id="poderselect" size="xl" centered scrollable>
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
            v-for="(habilidade, index) in habilidades?.habilidades"
            :key="index"
            :active="habilidade == active"
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
      active: undefined as unknown as Habilidade,
    };
  },
  components: {},
  props: {
    habilidades: {
      type: Object as PropType<Habilidade>,
    },
  },
  methods: {
    activate(newActive: string): void {
      this.activeBook = newActive;
      console.log(this.habilidades);
    },
    setHabilidade(habilidade: Habilidade) {
      if (this.habilidades) {
        this.active = habilidade;
        // eslint-disable-next-line
        this.habilidades.habilidadeSelect = habilidade;
      }
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
