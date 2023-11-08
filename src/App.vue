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
        <NivelSelect />
      </b-col>

      <FichaInfoTab />
    </b-row>
    <ClassesModal />
    <RacasModal />
    <PontosModal />
    <SelectNivelModal />
    <BiografiaModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import ClassesModal from "./components/modals/classes/ClassesModal.vue";
import RacasModal from "./components/modals/racas/RacasModal.vue";
import PontosModal from "./components/modals/pontos/PontosModal.vue";
import SelectNivelModal from "./components/modals/nivel/SelectNivelModal.vue";
import BiografiaModal from "./components/modals/biografia/BiografiaModal.vue";
import FichaInfoTab from "./components/FichaInfoTab.vue";
import NivelSelect from "./components/NivelSelect.vue";
import { activeFicha } from "./entities/ficha";
import Ficha from "./entities/ficha/model/Ficha";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      nivel: 0 as number,
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
    getClasseButtonLabel(nome?: string): string {
      return nome ?? "Classe";
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
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
