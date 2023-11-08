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
            PoderSelectHabilidadeOrigem2,
            ficha.origem.habilidadeSelect2,
            ficha.origem.habilidades
          )
        "
      >
        {{
          ficha.origem.habilidadeSelect2?.nome ?? "Habilidade de Biografia 2"
        }}
      </b-button>
      <div
        v-if="
          ficha.origem.habilidadeSelect2 &&
          ficha.origem.habilidadeSelect2.habilidades.length > 0
        "
      >
        <b-button
          v-b-modal.poderselect
          @click="
            set(
              PoderSelectHabilidadeOrigem2Select,
              ficha.origem.habilidadeSelect2.select,
              ficha.origem.habilidadeSelect2.habilidades
            )
          "
        >
          {{
            ficha.origem.habilidadeSelect2?.select?.nome ??
            ficha.origem.habilidadeSelect2.nome
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
  name: "SelectHabilidade2OrigemProp",
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
    PoderSelectHabilidadeOrigem2(): PoderSelect {
      return PoderSelect.HABILIDADE_ORIGEM_2;
    },
    PoderSelectHabilidadeOrigem2Select(): PoderSelect {
      return PoderSelect.HABILIDADE_ORIGEM_2_SELECT;
    },
  },
});
</script>
