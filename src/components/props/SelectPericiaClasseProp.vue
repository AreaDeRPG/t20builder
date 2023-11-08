<template>
  <div v-if="ficha.classes.length > 0">
    <div
      v-for="k in ficha.classes[0].periciasTreinadas"
      :key="ficha.classes[0].periciasExtrasTreinadas[k - 1]?.nome"
    >
      <b-button
        variant="primary"
        v-b-modal.poderselect
        @click="setPericiaClasse(ficha.classes[0].periciasExtras, k)"
      >
        {{
          ficha.classes[0].periciasExtrasTreinadas[k - 1]?.nome ??
          "Pericia de Classe"
        }}
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";

export default defineComponent({
  name: "SelectPericiaClasseProp",
  props: {
    setPericiaClasse: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>
