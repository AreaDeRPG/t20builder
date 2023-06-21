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
            {{ ficha.classes[i - 1]?.nome ?? "Classe" }}
          </b-button>
          <b-row v-if="i == 1">
            <div
              v-for="(habilidade, index) in ficha.raca.habilidades"
              :key="index"
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
            >
              <div v-if="habilidade.habilidades.length > 0">
                <b-button
                  v-b-modal.poderselect
                  @click="set(3, habilidade, habilidade.habilidades)"
                >
                  {{ habilidade.select?.nome ?? habilidade.nome }}
                </b-button>
                <div v-if="habilidade.select?.habilidades.length ?? 0 > 0">
                  <b-button
                    v-b-modal.poderselect
                    @click="
                      set(
                        3,
                        habilidade.select,
                        habilidade.select?.habilidades ?? []
                      )
                    "
                  >
                    {{
                      habilidade.select?.select?.nome ?? habilidade.select?.nome
                    }}
                  </b-button>
                </div>
              </div>
              <div v-else>
                {{ habilidade.nome }}
              </div>
            </div>
            <div
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
              v-if="!ficha.raca.barrarOrigem"
            >
              <b-button
                v-b-modal.poderselect
                @click="
                  set(
                    1,
                    ficha.origem.habilidadeSelect1,
                    ficha.origem.habilidades
                  )
                "
              >
                {{
                  ficha.origem.habilidadeSelect1?.nome ??
                  "Habilidade de Biografia 1"
                }}
              </b-button>
              <div
                v-if="
                  ficha.origem.habilidadeSelect1 &&
                  ficha.origem.habilidadeSelect1.habilidades.length > 0
                "
              >
                <b-button
                  v-b-modal.poderselect
                  @click="
                    set(
                      4,
                      ficha.origem.habilidadeSelect1.select,
                      ficha.origem.habilidadeSelect1.habilidades
                    )
                  "
                >
                  {{
                    ficha.origem.habilidadeSelect1?.select?.nome ??
                    ficha.origem.habilidadeSelect1.nome
                  }}
                </b-button>
              </div>
            </div>
            <div
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
              v-if="!ficha.raca.barrarOrigem"
            >
              <b-button
                v-b-modal.poderselect
                @click="
                  set(
                    2,
                    ficha.origem.habilidadeSelect2,
                    ficha.origem.habilidades
                  )
                "
              >
                {{
                  ficha.origem.habilidadeSelect2?.nome ??
                  "Habilidade de Biografia 2"
                }}
              </b-button>
              <div
                v-if="
                  ficha.origem.habilidadeSelect2 &&
                  ficha.origem.habilidadeSelect2.habilidades.length > 0
                "
              >
                <b-button
                  v-b-modal.poderselect
                  @click="
                    set(
                      5,
                      ficha.origem.habilidadeSelect2.select,
                      ficha.origem.habilidadeSelect2.habilidades
                    )
                  "
                >
                  {{
                    ficha.origem.habilidadeSelect2?.select?.nome ??
                    ficha.origem.habilidadeSelect2.nome
                  }}
                </b-button>
              </div>
            </div>
            <div
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
              v-if="ficha.classes[0]?.periciasFixasEscolhida?.length > 0"
            >
              <b-button
                v-b-modal.poderselect
                @click="
                  set(
                    7,
                    ficha.classes[0].periciaFixaEscolhida,
                    ficha.classes[0].periciasFixasEscolhida
                  )
                "
              >
                {{
                  ficha.classes[0].periciaFixaEscolhida?.nome ??
                  "Pericia de Classe"
                }}
              </b-button>
            </div>
            <div
              v-for="k in ficha.classes[0]?.periciasTreinadas"
              :key="ficha.classes[0].periciasExtrasTreinadas[k - 1]?.nome"
            >
              <b-button
                variant="primary"
                v-b-modal.poderselect
                @click="setPericiaClasse(ficha.classes[0].periciasExtras, k)"
              >
                {{
                  ficha.classes[0]?.periciasExtrasTreinadas[k - 1]?.nome ??
                  "Pericia de Classe"
                }}
              </b-button>
            </div>
            <div
              v-for="k in ficha.modificadores[3].getTotal()"
              :key="ficha.periciasInt[k]?.nome"
            >
              <b-button
                variant="primary"
                v-b-modal.poderselect
                @click="setPericiaInt(getTreinamentoPericias(), k)"
              >
                {{ ficha.periciasInt[k]?.nome ?? "Pericia de Inteligencia" }}
              </b-button>
            </div>
          </b-row>
          <b-row>
            <div
              v-for="(habilidades, index) in filterHabilidades(i)"
              :key="index"
              class="d-flex justify-content-left align-items-center"
              style="width: 100%"
            >
              <div>
                {{ habilidades.nome }}
              </div>
              <div v-if="hasArray(habilidades)">
                <b-button
                  variant="primary"
                  v-b-modal.poderselect
                  @click="setSelect(habilidades.habilidades)"
                >
                  {{ getHabilidadeNome(habilidades) }}
                </b-button>
              </div>
            </div>
          </b-row>
        </b-card>
      </div>
    </div>
    <PoderSelectModal
      :habilidades="select"
      :active="activeChild"
      :update="update"
      :tabs="tabs"
      :ficha="ficha"
      :i="k"
    />
  </div>
</template>

<script lang="ts">
import Classe from "@/entities/classes/model/Classe";
import Ficha from "@/entities/ficha/model/Ficha";
import Habilidade from "@/entities/habilidades/model/Habilidades";
import { defineComponent } from "vue";
import { PropType } from "vue/types/v3-component-props";
import PoderSelectModal from "./modals/poder-select/PoderSelectModal.vue";
import { Categoria } from "@/entities/categoria/model/Categoria";
import { treinamentoPericias } from "@/entities/pericias";
export default defineComponent({
  name: "NivelSelect",
  data() {
    return {
      select: undefined as unknown as Habilidade[],
      activeChild: undefined as unknown as Habilidade | undefined,
      poderselect: 0 as number,
      habilidadeSelect: undefined as unknown as Habilidade,
      tabs: [] as Categoria[],
      k: undefined as unknown as number,
    };
  },
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
    setNivel: {
      type: Function,
      required: true,
    },
  },
  methods: {
    getHeaderTitle(i: number): string {
      return `Nível ` + i;
    },
    filterHabilidades(i: number): Habilidade[] {
      const classe = this.ficha.classes[i - 1];
      if (classe && classe.habilidades) {
        const count = this.ficha.classes
          .slice(0, i)
          .reduce((accumulator: number, current: Classe) => {
            if (current === classe) {
              return accumulator + 1;
            }
            return accumulator;
          }, 0);
        return classe.habilidades[count - 1];
      }
      return [];
    },
    selectHabilidade(habilidades: Habilidade, habilidade: Habilidade): void {
      habilidades.select = habilidade;
    },
    set(
      code: number,
      habilidade: Habilidade | undefined,
      habilidades: Habilidade[]
    ): void {
      this.poderselect = code;
      this.activeChild = habilidade;
      this.select = habilidades;
    },
    update(habilidade: Habilidade): void {
      switch (this.poderselect) {
        case 1:
          // eslint-disable-next-line
          this.ficha.origem.habilidadeSelect1 = habilidade;
          this.$set(this.ficha, 1, habilidade);
          break;
        case 2:
          // eslint-disable-next-line
          this.ficha.origem.habilidadeSelect2 = habilidade;
          this.$set(this.ficha, 2, habilidade);
          break;
        case 3:
          if (this.activeChild instanceof Habilidade)
            this.activeChild.select = habilidade;
          this.$set(this.ficha, 3, habilidade);
          break;
        case 4:
          if (this.ficha.origem.habilidadeSelect1) {
            // eslint-disable-next-line
            this.ficha.origem.habilidadeSelect1.select = habilidade;
            this.$set(this.ficha, 4, habilidade);
          }
          break;
        case 5:
          if (this.ficha.origem.habilidadeSelect2) {
            // eslint-disable-next-line
            this.ficha.origem.habilidadeSelect2.select = habilidade;
            this.$set(this.ficha, 5, habilidade);
          }
          break;
        case 6:
          if (this.ficha.classes[0] && this.k)
            // eslint-disable-next-line
            this.ficha.classes[0].periciasExtrasTreinadas[this.k - 1] = habilidade;
          this.$set(this.ficha.classes, 6, habilidade);
          break;
        case 7:
          if (this.ficha.classes[0])
            // eslint-disable-next-line
          this.ficha.classes[0].periciaFixaEscolhida = habilidade
          this.$set(this.ficha.classes, 7, habilidade);
          break;
        case 8:
          // eslint-disable-next-line
          this.ficha.periciasInt[this.k] = habilidade;
          this.$set(this.ficha.periciasInt, 8, habilidade);
      }
    },
    getHabilidadeNome(habilidade: Habilidade): string {
      return habilidade.select?.nome ?? `Escolher`;
    },
    hasArray(habilidades: Habilidade): boolean {
      return habilidades.habilidades?.length != 0;
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
      this.poderselect = 6;
      this.k = k;
    },
    setPericiaInt(habilidades: Habilidade[], k: number): void {
      this.select = habilidades;
      this.activeChild = this.ficha.periciasInt[k];
      this.poderselect = 8;
      this.k = k;
    },
    getTreinamentoPericias(): Habilidade[] {
      return treinamentoPericias;
    },
  },
  components: { PoderSelectModal },
});
</script>

<style scoped></style>
