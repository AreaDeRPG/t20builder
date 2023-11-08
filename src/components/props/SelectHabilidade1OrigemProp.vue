<template>
  <div>
    <div
      class="d-flex justify-content-left align-items-center"
      style="width: 100%"
      v-if="!ficha.raca.barrarOrigem"
    >
      <b-button
        v-b-modal.poderselect
        @click="
          set(
            PoderSelectHabilidadeOrigem1,
            ficha.origem.habilidadeSelect1,
            ficha.origem.habilidades
          )
        "
      >
        {{
          ficha.origem.habilidadeSelect1?.nome ?? "Habilidade de Biografia 1"
        }}
      </b-button>
      <div
        v-if="
          ficha.origem.habilidadeSelect1 &&
          ficha.origem.habilidadeSelect1.habilidades.length > 0
        "
      >
        <b-button
          v-b-modal.poderselect
          @click="
            set(
              PoderSelectHabilidadeOrigem1Select,
              ficha.origem.habilidadeSelect1.select,
              ficha.origem.habilidadeSelect1.habilidades
            )
          "
        >
          {{
            ficha.origem.habilidadeSelect1?.select?.nome ??
            ficha.origem.habilidadeSelect1.nome
          }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ficha from "@/entities/ficha/model/Ficha";
import { activeFicha } from "@/entities/ficha";
import { PoderSelect } from "@/entities/PoderSelect";

export default defineComponent({
  name: "SelectHabilidade1OrigemProp",
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
    PoderSelectHabilidadeOrigem1(): PoderSelect {
      return PoderSelect.HABILIDADE_ORIGEM_1;
    },
    PoderSelectHabilidadeOrigem1Select(): PoderSelect {
      return PoderSelect.HABILIDADE_ORIGEM_1_SELECT;
    },
  },
});
</script>
