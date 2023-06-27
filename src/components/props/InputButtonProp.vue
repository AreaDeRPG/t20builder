<template>
  <b-input-group>
    <template #prepend>
      <b-input-group-text>{{ text }}</b-input-group-text>
    </template>
    <b-button variant="primary" v-b-modal="modal">
      {{ nivel }}
    </b-button>
  </b-input-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputButtonProp",
  data: () => {
    return {};
  },
  props: {
    modal: {
      type: String,
    },
    nivel: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
  methods: {},
});
</script>

<style scoped></style>
