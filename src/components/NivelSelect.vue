<template>
  <div>
    <div v-for="i in 20" :key="i" class="d-flex justify-content-center">
      <div style="width: 100%">
        <b-card
          :header="getHeaderTitle(i)"
          style="margin: 1em"
          body-class="text-center"
        >
          <b-button variant="primary" v-b-modal.classes @click="setNivel(i)">
            {{
              i - 1 < ficha.classes.length
                ? ficha.classes[i - 1]?.nome ?? "Classe"
                : "Classe"
            }}
          </b-button>
          <b-row v-if="i == 1">
            <SelectHabilidadeRacaProp :set="set" />
            <SelectHabilidade1OrigemProp :set="set" />
            <SelectHabilidade2OrigemProp :set="set" />
            <SelectPericiaFixaClasseProp :set="set" />
            <SelectPericiaClasseProp :set-pericia-classe="setPericiaClasse" />
            <SelectPericiaInteligenciaProp :set-pericia-int="setPericiaInt" />
          </b-row>
          <b-row>
            <SelectHabilidadeNivelProp :set="set" :i="i" />
          </b-row>
        </b-card>
      </div>
    </div>
    <PoderSelectModal
      :habilidades="select"
      :active="activeChild"
      :update="update"
      :tabs="tabs"
      :i="k"
    />
  </div>
</template>

<script lang="ts">
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { Ref, defineComponent } from "vue";
import { Categoria } from "@/entities/categoria/model/Categoria";
import Ficha from "@/entities/ficha/model/Ficha";
import PoderSelectModal from "./modals/poder-select/PoderSelectModal.vue";
import SelectHabilidadeRacaProp from "./props/SelectHabilidadeRacaProp.vue";
import SelectHabilidade1OrigemProp from "./props/SelectHabilidade1OrigemProp.vue";
import SelectHabilidade2OrigemProp from "./props/SelectHabilidade2OrigemProp.vue";
import SelectPericiaFixaClasseProp from "./props/SelectPericiaFixaClasseProp.vue";
import SelectPericiaClasseProp from "./props/SelectPericiaClasseProp.vue";
import { activeFicha, currentLevel as nivel } from "@/entities/ficha";
import SelectPericiaInteligenciaProp from "./props/SelectPericiaInteligenciaProp.vue";
import SelectHabilidadeNivelProp from "./props/SelectHabilidadeNivelProp.vue";
import { PoderSelect } from "@/entities/PoderSelect";
export default defineComponent({
  name: "NivelSelect",
  data() {
    return {
      select: [] as Habilidade[],
      activeChild: undefined as Habilidade | undefined,
      poderselect: PoderSelect.NENHUM,
      habilidadeSelect: null as unknown as Habilidade,
      tabs: [] as Categoria[],
      k: undefined as unknown as number,
    };
  },
  methods: {
    getHeaderTitle(i: number): string {
      return `Nível ` + i;
    },

    selectHabilidade(habilidades: Habilidade, habilidade: Habilidade): void {
      habilidades.select = habilidade;
    },
    set(
      code: PoderSelect,
      habilidade: Habilidade | undefined,
      habilidades: Habilidade[]
    ): void {
      this.poderselect = code;
      this.activeChild = habilidade;
      this.select = habilidades;
    },
    update(habilidade: Habilidade): void {
      switch (this.poderselect) {
        case PoderSelect.HABILIDADE_ORIGEM_1:
          // eslint-disable-next-line
          this.ficha.origem.habilidadeSelect1 = habilidade;
          this.$set(this.ficha, PoderSelect.HABILIDADE_ORIGEM_1, habilidade);
          break;
        case PoderSelect.HABILIDADE_ORIGEM_2:
          // eslint-disable-next-line
          this.ficha.origem.habilidadeSelect2 = habilidade;
          this.$set(this.ficha, PoderSelect.HABILIDADE_ORIGEM_2, habilidade);
          break;
        case PoderSelect.ACTIVE_CHILD:
          if (this.activeChild instanceof Habilidade)
            this.activeChild.select = habilidade;
          this.$set(this.ficha, PoderSelect.ACTIVE_CHILD, habilidade);
          break;
        case PoderSelect.HABILIDADE_ORIGEM_1_SELECT:
          if (this.ficha.origem.habilidadeSelect1) {
            // eslint-disable-next-line
            this.ficha.origem.habilidadeSelect1.select = habilidade;
            this.$set(
              this.ficha,
              PoderSelect.HABILIDADE_ORIGEM_1_SELECT,
              habilidade
            );
          }
          break;
        case PoderSelect.HABILIDADE_ORIGEM_2_SELECT:
          if (this.ficha.origem.habilidadeSelect2) {
            // eslint-disable-next-line
            this.ficha.origem.habilidadeSelect2.select = habilidade;
            this.$set(
              this.ficha,
              PoderSelect.HABILIDADE_ORIGEM_2_SELECT,
              habilidade
            );
          }
          break;
        case PoderSelect.PERICIA_CLASSE:
          if (this.ficha.classes[0] && this.k)
            // eslint-disable-next-line
            this.ficha.classes[0].periciasExtrasTreinadas[this.k - 1] = habilidade;
          this.$set(this.ficha.classes, PoderSelect.PERICIA_CLASSE, habilidade);
          break;
        case PoderSelect.PERICIA_FIXA_CLASSE:
          if (this.ficha.classes[0])
            // eslint-disable-next-line
          this.ficha.classes[0].periciaFixaEscolhida = habilidade
          this.$set(
            this.ficha.classes,
            PoderSelect.PERICIA_FIXA_CLASSE,
            habilidade
          );
          break;
        case PoderSelect.PERICIA_INTELIGENCIA:
          // eslint-disable-next-line
          this.ficha.periciasInt[this.k] = habilidade;
          this.$set(
            this.ficha.periciasInt,
            PoderSelect.PERICIA_INTELIGENCIA,
            habilidade
          );
      }
    },
    setSelect(habilidade: Habilidade[]): void {
      this.select = habilidade;
    },
    sortHabilidadesByNome(habilidades: Habilidade[]): Habilidade[] {
      return habilidades.sort((a, b) => a.nome.localeCompare(b.nome));
    },
    getHabilidadeBiografia(habilidade?: Habilidade): boolean {
      if (habilidade) {
        return habilidade.habilidades.length > 0;
      }
      return false;
    },
    setPericiaClasse(habilidades: Habilidade[], k: number): void {
      this.select = habilidades;
      this.activeChild = this.ficha.classes[0].periciasExtrasTreinadas[k - 1];
      this.poderselect = PoderSelect.PERICIA_CLASSE;
      this.k = k;
    },
    setPericiaInt(habilidades: Habilidade[], k: number): void {
      this.select = habilidades;
      this.activeChild = this.ficha.periciasInt[k];
      this.poderselect = PoderSelect.PERICIA_INTELIGENCIA;
      this.k = k;
    },
    setNivel(level: number): void {
      this.nivel.value = level;
    },
  },
  components: {
    PoderSelectModal,
    SelectHabilidadeRacaProp,
    SelectHabilidade1OrigemProp,
    SelectHabilidade2OrigemProp,
    SelectPericiaFixaClasseProp,
    SelectPericiaClasseProp,
    SelectPericiaInteligenciaProp,
    SelectHabilidadeNivelProp,
  },
  computed: {
    ficha(): Ficha {
      return activeFicha as Ficha;
    },
    nivel(): Ref<number> {
      return nivel;
    },
  },
});
</script>

<style scoped></style>
