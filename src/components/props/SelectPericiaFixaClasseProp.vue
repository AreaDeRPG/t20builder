<template>
  <div>
    <div
      class="d-flex justify-content-left align-items-center"
      style="width: 100%"
      v-if="
        ficha.classes[0] && ficha.classes[0]?.periciasFixasEscolhida.length > 0
      "
    >
      <b-button
        v-b-modal.poderselect
        @click="
          set(
            PoderPericiaFixaClasse,
            ficha.classes[0].periciaFixaEscolhida,
            ficha.classes[0].periciasFixasEscolhida
          )
        "
      >
        {{ ficha.classes[0].periciaFixaEscolhida?.nome ?? "Pericia de Classe" }}
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";
import { PoderSelect } from "@/entities/PoderSelect";

export default defineComponent({
  name: "SelectPericiaFixaClasseProp",
  props: {
    set: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    PoderPericiaFixaClasse(): PoderSelect {
      return PoderSelect.PERICIA_FIXA_CLASSE;
    },
  },
});
</script>
