<template>
  <div>
    <div v-for="i in 20" :key="i" class="d-flex justify-content-center">
      <div style="width: 100%">
        <b-card
          :header="getHeaderTitle(i)"
          style="margin: 1em"
          body-class="text-center"
        >
          <b-button variant="primary" v-b-modal.classes @click="setNivel(i)">
            {{ ficha.classes[i - 1]?.nome ?? "Classe" }}
          </b-button>
          <b-row v-if="i == 1">
            <div
              v-for="(habilidade, index) in ficha.raca.habilidades"
              :key="index"
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
            >
              {{ habilidade.nome }}
            </div>
          </b-row>
          <b-row>
            <div
              v-for="(habilidades, index) in filterHabilidades(i)"
              :key="index"
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
            >
              <div>
                {{ habilidades.nome }}
              </div>
              <div v-if="habilidades.habilidades.length != 0">
                <b-button
                  variant="primary"
                  v-b-modal.poderselect
                  @click="select = habilidades"
                >
                  {{ habilidades.habilidadeSelect?.nome ?? `Escolher` }}
                </b-button>
              </div>
            </div>
          </b-row>
        </b-card>
      </div>
    </div>
    <PoderSelectModal :habilidades="select" />
  </div>
</template>

<script lang="ts">
import Classe from "@/entities/classes/model/Classe";
import Ficha from "@/entities/ficha/model/Ficha";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { defineComponent } from "vue";
import { PropType } from "vue/types/v3-component-props";
import PoderSelectModal from "./modals/poder-select/PoderSelectModal.vue";
export default defineComponent({
  name: "NivelSelect",
  data() {
    return {
      select: undefined as unknown as Habilidade,
    };
  },
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
    setNivel: {
      type: Function,
      required: true,
    },
  },
  methods: {
    getHeaderTitle(i: number) {
      return `Nível ` + i;
    },
    filterHabilidades(i: number) {
      const classe = this.ficha.classes[i - 1];
      if (classe && classe.habilidades) {
        const count = this.ficha.classes
          .slice(0, i)
          .reduce((accumulator: number, current: Classe) => {
            if (current === classe) {
              return accumulator + 1;
            }
            return accumulator;
          }, 0);
        return classe.habilidades[count - 1];
      }
      return null;
    },
    selectHabilidade(habilidades: Habilidade, habilidade: Habilidade) {
      habilidades.habilidadeSelect = habilidade;
    },
  },
  components: { PoderSelectModal },
});
</script>

<style scoped></style>
