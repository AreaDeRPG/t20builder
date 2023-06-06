<template>
  <!--
      <div
        class="offcanvas offcanvas-start text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Dark offcanvas
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  -->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="d-flex justify-content-center">
        <b-button variant="dark" v-b-toggle.sidebar>
          <b-icon-list></b-icon-list>
        </b-button>
        <a class="navbar-brand" style="margin-left: 1rem">Menu</a>
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
        <li class="text-center">
          <b-button
            variant="outline-light"
            v-b-modal.patchnotes
            style="width: 10em"
          >
            Patch Notes
          </b-button>
        </li>
        <!--
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        -->
      </ul>
    </b-sidebar>
    <PatchNotesModal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PatchNotesModal from "./modals/patchnotes/PatchNotesModal.vue";
import { patches } from "@/entities/patchnotes";
export default defineComponent({
  name: "nav-bar",
  data: () => {
    return {
      patchversion: patches[0].versao as string,
    };
  },
  components: { PatchNotesModal },
});
</script>

<style scoped>
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
