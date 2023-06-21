<template>
  <div class="d-flex justify-content-center">
    <b-button variant="dark" v-b-toggle.sidebar>
      <b-icon-list></b-icon-list>
    </b-button>
    <a class="navbar-brand">Menu</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
});
</script>

<style scoped></style>
