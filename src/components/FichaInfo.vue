<template>
  <div>
    <b-row>
      <b-col cols="2">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>Nivel</b-input-group-text>
          </template>
          <b-button variant="primary" v-b-modal.niveis>
            {{ ficha?.nivel }}
          </b-button>
        </b-input-group>
      </b-col>
      <b-col cols="2">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>XP</b-input-group-text>
          </template>
          <b-form-input :value="ficha?.xp"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="1"></b-col>
      <b-col cols="6">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>Nome</b-input-group-text>
          </template>
          <b-form-input :value="ficha?.nome"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="1"></b-col>
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>Tamanho</b-input-group-text>
          </template>
          <template #append>
            <b-dropdown :text="ficha?.tamanho" variant="success">
              <b-dropdown-item
                v-for="tamanho in tamanhos"
                :key="tamanho"
                @click="updateTamanho(tamanho)"
                >{{ tamanho }}</b-dropdown-item
              >
            </b-dropdown>
          </template>
        </b-input-group>
      </b-col>
      <b-col cols="2">
        <b-input-group append="Metros">
          <template #prepend>
            <b-input-group-text>Velocidade</b-input-group-text>
          </template>
          <b-form-input :value="ficha?.velocidade" disabled></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="1"></b-col>
      <b-col
        cols="1"
        v-for="modificador in ficha?.modificadores"
        :key="modificador.atributo"
      >
        <b-input-group style="min-width: 6em; width: 6em">
          <template #prepend>
            <b-input-group-text style="min-width: 3em; width: 3em">{{
              modificador.abreviacao
            }}</b-input-group-text>
          </template>
          <b-form-input :value="modificador.getTotal()" disabled></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>Defesa</b-input-group-text>
          </template>
          <b-form-input :value="ficha?.defesa" disabled></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="3">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>PV</b-input-group-text>
          </template>
          <b-form-input :value="ficha.pv" disabled></b-form-input>
        </b-input-group>
      </b-col>
      <b-col cols="3">
        <b-input-group>
          <template #prepend>
            <b-input-group-text>PM</b-input-group-text>
          </template>
          <b-form-input :value="ficha.pm" disabled></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Tamanho } from "@/entities/Tamanho/model/Tamanho";
import type Ficha from "@/entities/ficha/model/Ficha";
import { defineComponent, type PropType } from "vue";
export default defineComponent({
  name: "FichaInfo",
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
  },
  data: () => {
    return {
      tamanhos: Object.values(Tamanho),
    };
  },
  methods: {
    updateTamanho(tamanho: Tamanho): void {
      // eslint-disable-next-line
      this.ficha.tamanho = tamanho;
    },
  },
});
</script>

<style scoped>
.input-group-prepend > div {
}
</style>
