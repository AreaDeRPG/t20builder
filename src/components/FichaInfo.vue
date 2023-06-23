<template>
  <div>
    <b-row>
      <b-col cols="2">
        <InputButtonProp modal="niveis" :nivel="ficha?.nivel" text="Nivel" />
      </b-col>
      <b-col cols="2">
        <InputValueProp text="XP" :total="ficha?.xp" />
      </b-col>
      <b-col cols="1"></b-col>
      <b-col cols="6">
        <InputValueProp text="Nome" :total="ficha?.nome" :disabled="false" />
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <InputValueProp text="Tamanho" :total="ficha?.tamanho" />
      </b-col>
      <b-col cols="2">
        <InputValueProp
          text="Velocidade"
          :total="ficha?.velocidade"
          desc=" Metros"
        />
      </b-col>
      <b-col cols="1"></b-col>
      <b-col
        cols="1"
        v-for="modificador in ficha?.modificadores"
        :key="modificador.atributo"
      >
        <InputValueProp
          :text="modificador.abreviacao"
          :total="modificador.getTotal()"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <InputValueProp text="Defesa" :total="ficha?.defesa" />
      </b-col>
      <b-col cols="3">
        <InputValueProp text="PV" :total="ficha?.pv" />
      </b-col>
      <b-col cols="3">
        <InputValueProp text="PM" :total="ficha?.pm" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Tamanho } from "@/entities/Tamanho/model/Tamanho";
import InputValueProp from "./props/InputValueProp.vue";
import InputButtonProp from "./props/InputButtonProp.vue";
import { defineComponent } from "vue";
import { activeFicha as ficha } from "@/entities/ficha";
import Ficha from "@/entities/ficha/model/Ficha";
export default defineComponent({
  name: "FichaInfo",
  components: {
    InputValueProp,
    InputButtonProp,
  },
  props: {},
  data: () => {
    return {
      tamanhos: Object.values(Tamanho),
    };
  },
  computed: {
    ficha(): Ficha {
      return ficha;
    },
  },
});
</script>

<style scoped></style>
