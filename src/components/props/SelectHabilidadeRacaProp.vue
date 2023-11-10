<template>
  <div>
    <div
      v-for="(habilidade, index) in ficha.raca.habilidades"
      :key="index"
      class="d-flex justify-content-left align-items-center"
      style="width: 100%"
    >
      <div v-if="(habilidade.habilidades?.length ?? 0) > 0">
        <b-button
          v-b-modal.poderselect
          @click="set(PoderActiveChild, habilidade, habilidade.habilidades)"
        >
          {{ habilidade.select?.nome ?? habilidade.nome }}
        </b-button>
        <div v-if="(habilidade.select?.habilidades?.length ?? 0) > 0">
          <b-button
            v-b-modal.poderselect
            @click="
              set(
                PoderActiveChild,
                habilidade.select,
                habilidade.select?.habilidades ?? []
              )
            "
          >
            {{ habilidade.select?.select?.nome ?? habilidade.select?.nome }}
          </b-button>
        </div>
      </div>
      <div v-else>
        {{ habilidade.nome }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PoderSelect } from "@/entities/PoderSelect";
import { activeFicha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectHabilidadeRacaProp",
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
    PoderActiveChild(): PoderSelect {
      return PoderSelect.ACTIVE_CHILD;
    },
  },
});
</script>
