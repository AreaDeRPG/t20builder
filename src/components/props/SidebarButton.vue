<template>
  <li class="text-center">
    <b-button :variant="variant" v-b-modal="modal"> {{ text }} </b-button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    modal: {
      type: String,
    },
    variant: {
      type: String,
      default: "Primary",
    },
  },
});
</script>

<style scoped>
b-button {
  width: 10em;
}

button {
  border: 0;
  background-color: none;
}
.close {
  border-radius: 0;
}
.row {
  --bs-gutter-x: 0;
}
</style>
