<template>
  <div>
    <div
      v-for="habilidade in filterHabilidades(i)"
      :key="habilidade.id"
      class="d-flex justify-content-left align-items-center"
      style="width: 100%"
    >
      <div>
        {{ habilidade.nome }}
      </div>
      <div v-if="hasArray(habilidade)">
        <b-button
          variant="primary"
          v-b-modal.poderselect
          @click="set(PoderActiveChild, habilidade, habilidade.habilidades)"
        >
          {{ getHabilidadeNome(habilidade) }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";
import Classe from "@/entities/classes/model/Classe";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { PoderSelect } from "@/entities/PoderSelect";

export default defineComponent({
  name: "SelectHabilidadeNivelProp",
  props: {
    set: {
      type: Function,
      required: true,
    },
    i: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    PoderActiveChild(): PoderSelect {
      return PoderSelect.ACTIVE_CHILD;
    },
  },
  methods: {
    filterHabilidades(i: number): Habilidade[] {
      const classe = this.ficha.classes[i - 1];
      if (!classe) return [];
      if (!classe.habilidades) return [];
      const count = this.ficha.classes
        .slice(0, i)
        .reduce((accumulator: number, current: Classe) => {
          if (current === classe) {
            return accumulator + 1;
          }
          return accumulator;
        }, 0);
      return classe.habilidades[count - 1];
    },

    hasArray(habilidades: Habilidade): boolean {
      return (habilidades.habilidades.length ?? 0) != 0;
    },

    getHabilidadeNome(habilidade: Habilidade): string {
      return habilidade.select?.nome ?? `Escolher`;
    },
  },
});
</script>
