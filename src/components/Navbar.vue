<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="d-flex justify-content-center">
        <MenuButton />
        <span style="border-right: 1px solid white"></span>

        <a class="navbar-brand" style="margin-left: 1rem">
          T20Builder / Discord
          <a href="https://discord.gg/areaderpg">Area de RPG</a></a
        >
      </div>
    </b-navbar>
    <b-sidebar
      id="sidebar"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      no-header
      backdrop
      shadow
    >
      <template #footer>
        <div></div>
        <div class="d-flex justify-content-center">
          <b-row>
            <b-col cols="12" class="text-center">
              Desenvolvido por Lucas Correia (Discord: Noctus#3529) para a
              comunidade de jogadores de Tormenta20 do servidor do Discord
              <a href="https://discord.gg/areaderpg"> Área de RPG. </a>
            </b-col>
            <b-col cols="12" class="text-center">
              Tormenta20 é propriedade da
              <a href="https://jamboeditora.com.br"> Jambo Editora. </a>
            </b-col>
            <b-col cols="12" class="text-center">{{ patchversion }}</b-col>
          </b-row>
        </div>
      </template>
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <SidebarButton
          modal="patchnotes"
          text="Patch Notes"
          variant="outline-light"
        />
      </ul>
    </b-sidebar>
    <PatchNotesModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PatchNotesModal from "./modals/patchnotes/PatchNotesModal.vue";
import { patches } from "@/entities/patchnotes";
import MenuButton from "./props/MenuButton.vue";
import SidebarButton from "./props/SidebarButton.vue";
export default defineComponent({
  name: "nav-bar",
  data: () => {
    return {
      patchversion: patches[0].versao as string,
    };
  },
  components: { PatchNotesModal, MenuButton, SidebarButton },
  methods: {},
});
</script>

<style scoped></style>
