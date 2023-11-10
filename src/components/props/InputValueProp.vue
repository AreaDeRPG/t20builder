<template>
  <b-input-group style="min-width: 6em" :append="append">
    <template #prepend>
      <b-input-group-text style="min-width: 3em">
        {{ text }}
      </b-input-group-text>
    </template>
    <b-form-input
      style="min-width: 3em"
      :value="total + desc"
      :disabled="disabled"
    ></b-form-input>
  </b-input-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tamanho } from "@/entities/Tamanho/model/Tamanho";

export default defineComponent({
  name: "InputValueProp",
  data: () => {
    return {
      tamanhos: Object.values(Tamanho),
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    total: {
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    append: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
