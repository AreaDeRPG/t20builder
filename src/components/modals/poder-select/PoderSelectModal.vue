<template>
  <b-modal
    id="poderselect"
    title="Escolher Habilidade"
    size="xl"
    centered
    scrollable
    @show="reset"
  >
    <b-row>
      <b-nav tabs v-if="getTabs().length > 1">
        <b-nav-item :active="activeBook === 'Todos'" @click="activate('Todos')"
          >Todos</b-nav-item
        >
        <b-nav-item
          v-for="el in getTabs()"
          :key="el"
          :active="activeBook === el"
          @click="activate(el)"
          class="text-center"
          >{{ el }}</b-nav-item
        >
      </b-nav>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-nav vertical justified pills>
          <b-nav-item
            v-for="habilidade in habilidadesFilter()"
            :key="habilidade.id"
            :active="habilidade === activeLocal"
            @click="setHabilidade(habilidade)"
            class="text-center"
            :disabled="isTreinado(habilidade)"
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
import { Categoria } from "@/entities/categoria/model/Categoria";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";

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
      required: true,
    },
    tabs: {
      type: Array as PropType<Categoria[]>,
      default: [] as string[],
    },
    i: {
      type: Number,
    },
  },
  watch: {
    active(value?: Habilidade) {
      this.activeLocal = value;
    },
  },
  methods: {
    isTreinado(habilidade: Habilidade): boolean {
      const habilidades = this.ficha.getHabilidades();
      return habilidades.some(
        (hab: Habilidade) =>
          hab === habilidade && this.active?.select !== habilidade
      );
    },
    reset() {
      this.activeBook = "Todos";
      this.activeLocal = this.active?.select ?? this.active;
    },
    activate(newActive: string): void {
      this.activeBook = newActive;
    },
    setHabilidade(habilidade: Habilidade): void {
      this.activeLocal = habilidade;
      this.update(habilidade, this.i);
    },
    getTabs(): Categoria[] {
      if (this.habilidades) {
        var categorias: Categoria[] = this.habilidades.map(
          (el) => el.categoria
        );
        return [...new Set(categorias)];
      }
      return [] as Categoria[];
    },
    habilidadesFilter(): Habilidade[] {
      if (!this.habilidades) return [];

      if (this.activeBook === "Todos") return this.habilidades;

      return this.habilidades.filter((el) => el.categoria === this.activeBook);
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
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
