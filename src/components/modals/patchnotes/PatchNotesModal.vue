<template>
  <b-modal
    id="patchnotes"
    title="Patch Notes"
    size="xl"
    centered
    scrollable
    no-footer
  >
    <b-row>
      <b-col cols="12">
        <div v-for="patch in patchnotes" :key="patch.id">
          <h3>
            {{ patch.versao }}
          </h3>
          <ul>
            <li v-for="(descricao, index) in patch.descricao" :key="index">
              {{ descricao }}
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { patches } from "@/entities/patchnotes";
import PatchNote from "@/entities/patchnotes/model/PatchNotes";
export default defineComponent({
  name: "PatchNotesModal",
  computed: {
    patchnotes(): PatchNote[] {
      return patches;
    },
  },
});
</script>

<style scoped></style>
