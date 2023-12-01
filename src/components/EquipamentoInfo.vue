<template>
  <b-row>
    <b-row>
      <h3 class="text-center">Arma</h3>
      <div>
        <b-button-toolbar
          aria-label="Toolbar with button groups and input groups"
        >
          <b-input-group size="sm">
            <b-form-input class="text-left"></b-form-input>
            <b-form-input class="text-left" disabled></b-form-input>
          </b-input-group>
          <b-button-group size="sm" class="mr-1">
            <b-button>Save</b-button>
            <b-button>Cancel</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div>
    </b-row>
    <b-row>
      <h3 class="text-center">Armadura</h3>
    </b-row>
    <b-row>
      <h3 class="text-center">Acessórios</h3>
    </b-row>
    <b-row>
      <h3 class="text-center">Equipamentos</h3>
    </b-row>
  </b-row>
</template>

<script lang="ts">
import { activeFicha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EquipamentoInfo",
  data: () => {
    return {};
  },
  methods: {},
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
  },
});
</script>

<style scoped></style>
