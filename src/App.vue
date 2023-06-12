<template>
  <div id="app">
    <Navbar />
    <b-row>
      <b-col cols="3">
        <b-card class="d-flex justify-content-center" style="margin: 1em">
          <div class="d-flex justify-content-center">
            <b-row>
              <b-col
                cols="12"
                class="d-flex justify-content-center"
                style="margin: 0.5em"
              >
                <b-button variant="primary" v-b-modal.racas style="width: 10em">
                  {{ ficha.raca.nome }}
                </b-button>
              </b-col>
              <b-col
                cols="12"
                class="d-flex justify-content-center"
                style="margin: 0.5em"
                v-if="!ficha.raca.barrarOrigem"
              >
                <b-button
                  variant="primary"
                  v-b-modal.biografias
                  style="width: 10em"
                >
                  {{ ficha.origem.nome }}
                </b-button>
              </b-col>
              <b-col
                cols="12"
                class="d-flex justify-content-center"
                style="margin: 0.5em"
              >
                <b-button
                  variant="primary"
                  v-b-modal.pointbuy
                  style="width: 10em"
                >
                  Definir Atributos
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-card>
        <NivelSelect
          :ficha="ficha"
          :setNivel="setNivel"
          :habilidades="habilidades"
        />
      </b-col>

      <FichaInfoTab :ficha="ficha" />
    </b-row>

    <ClassesModal :ficha="ficha" :nivel="nivel" />
    <RacasModal :ficha="ficha" />
    <PontosModal :ficha="ficha" />
    <SelectNivelModal :ficha="ficha" />
    <BiografiaModal :ficha="ficha" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "./entities/ficha/model/Ficha";
import Navbar from "./components/Navbar.vue";
import { racas } from "@/entities/racas/index";
import { modificadores } from "./entities/modificadores/index";
import { pericias } from "./entities/pericias";
import { biografias } from "./entities/origem";
import ClassesModal from "./components/modals/classes/ClassesModal.vue";
import RacasModal from "./components/modals/racas/RacasModal.vue";
import PontosModal from "./components/modals/pontos/PontosModal.vue";
import SelectNivelModal from "./components/modals/nivel/SelectNivelModal.vue";
import BiografiaModal from "./components/modals/biografia/BiografiaModal.vue";
import FichaInfoTab from "./components/FichaInfoTab.vue";
import NivelSelect from "./components/NivelSelect.vue";
import Habilidade from "./entities/habilidades/model/Habilidades";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      ficha: new Ficha(1, racas[0], biografias[0], modificadores, pericias),
      nivel: 0,
      habilidades: [] as Habilidade[],
    };
  },
  components: {
    Navbar,
    RacasModal,
    PontosModal,
    SelectNivelModal,
    ClassesModal,
    FichaInfoTab,
    BiografiaModal,
    NivelSelect,
  },
  methods: {
    getClasseButtonLabel(nome: string | undefined): string {
      return nome ?? "Classe";
    },
    setNivel(i: number): void {
      this.nivel = i;
    },
  },
});
</script>

<style>
div,
nav,
button,
a,
span {
  margin: 0;
  padding: 0;
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
}
</style>

<style scoped>
#app {
  height: 100vh;
  background-attachment: fixed;
  background-position: top center;
  background-repeat: no-repeat;
  background-color: white;
  background-size: cover;
  color: black;
}
.row {
  margin: 0;
}
p {
  margin: 0;
}
.italic {
  font-style: italic;
}

.options {
  border-radius: 5px;
  border-color: blue;
  width: 100%;
}
</style>
