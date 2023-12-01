<template>
  <b-modal id="downloadpdf" title="Download PDF" size="xl" centered scrollable>
    <b-button @click="downloadPdf">teste</b-button>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DownloadPDFModal",
  data: () => {
    return {
      dont_care: 0,
    };
  },
  methods: {
    async downloadPdf() {},
  },
});
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}
.mt-1 {
  margin-top: 1em;
}
</style>
