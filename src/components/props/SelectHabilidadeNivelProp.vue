<template>
  <div>
    <div
      v-for="habilidade in filterHabilidades(i)"
      :key="habilidade.id"
      class="row d-flex justify-content-left align-items-center"
    >
      <div style="width: 100%">
        <div>
          {{ habilidade.nome }}
        </div>
        <div v-if="hasArray(habilidade)">
          <b-button
            variant="primary"
            v-b-modal.poderselect
            @click="setHabilidade(habilidade)"
          >
            {{ getHabilidadeNome(habilidade) }}
          </b-button>
        </div>
      </div>
      <div>
        <div
          v-for="child in getChildHabilities(habilidade)"
          :key="child.id"
          style="width: 100%"
        >
          <div>
            {{ child.nome }}
          </div>
          <div v-if="hasArray(child)">
            <b-button
              variant="primary"
              v-b-modal.poderselect
              @click="setHabilidade(child)"
            >
              {{ getHabilidadeNome(child) }}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha, currentLevel } from "@/entities/ficha";
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
    nivel(): Ref<number> {
      return currentLevel;
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

    getChildHabilities(habilidade: Habilidade): Habilidade[] {
      if (!habilidade.select) return [];
      return habilidade.select.habilidades;
    },

    setHabilidade(child: Habilidade) {
      this.nivel.value = this.i;
      this.set(this.PoderActiveChild, child, child.habilidades);
    },
  },
});
</script>
