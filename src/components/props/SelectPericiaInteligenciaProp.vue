<template>
  <div>
    <div v-for="k in Math.max(ficha.modificadores[3]?.getTotal(), 0)" :key="k">
      <b-button
        variant="primary"
        v-b-modal.poderselect
        @click="setPericiaInt(treinamentoPericias, k)"
      >
        {{ ficha.periciasInt[k]?.nome ?? "Pericia de Inteligencia" }}
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";

import { treinamentoPericias } from "@/entities/pericias";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { activeFicha } from "@/entities/ficha";
export default defineComponent({
  name: "SelectPericiaInteligenciaProp",
  props: {
    setPericiaInt: {
      type: Function,
      required: true,
    },
  },
  computed: {
    treinamentoPericias(): Habilidade[] {
      return treinamentoPericias;
    },
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>
