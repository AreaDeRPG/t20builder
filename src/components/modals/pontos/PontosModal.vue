<template>
  <b-modal id="pointbuy" title="Compra de Pontos" centered>
    <b-row class="d-flex justify-content-center align-items-center">
      <div id="menuRacas">
        <div>
          <div id="contagemDePontos">
            <span class="tituloPontos">PONTOS</span>
            <span class="valorPontos">{{ pontos }}</span>
          </div>
        </div>
      </div>
      <table class="tabela">
        <tbody>
          <tr>
            <td>
              <div id="containerDicaRaca">
                <div id="dicaRaca">
                  <span></span>
                </div>
              </div>
            </td>
            <th class="thHabilidades">Valor</th>
            <th class="thRaca">Raça</th>
            <th class="thBonus">Bonus</th>
            <th class="thTotal">TOTAL</th>
            <th class="thCusto">Custo</th>
          </tr>
          <tr v-for="(mod, index) in ficha.modificadores" :key="index">
            <th>
              <span class="thMaior">{{ mod.abreviacao }}</span>
              <span class="thMenor">{{ mod.atributo }}</span>
            </th>
            <td>
              <input
                type="text"
                min="-1"
                pattern="\d*"
                inputmode="numeric"
                class="campoTabela"
                v-model.number="mod.base"
                @input="updateValues(mod, index)"
              />
            </td>
            <td>
              <input
                type="text"
                :disabled="ficha?.isLivre(mod.nome)"
                min="-1"
                pattern="\d*"
                inputmode="numeric"
                class="campoTabela"
                v-model.number="mod.raca"
                @input="updateTotalCusto"
              />
            </td>
            <td>
              <input
                type="text"
                min="-1"
                pattern="\d*"
                inputmode="numeric"
                class="campoTabela"
                v-model.number="mod.bonus"
                @input="updateTotalCusto"
              />
            </td>
            <td>
              <input
                type="text"
                class="campoTabela"
                disabled
                :value="mod.getTotal()"
              />
            </td>
            <td>
              <input
                type="text"
                class="campoTabela custo"
                disabled
                :value="calcularCusto(mod.base)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </b-row>
  </b-modal>
</template>

<script lang="ts">
import Ficha from "@/entities/ficha/model/Ficha";
import Modificador from "@/entities/modificadores/model/Modificador";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    ficha: {
      type: Object as PropType<Ficha>,
      required: true,
    },
  },
  data() {
    return {
      pontos: 0,
    };
  },
  computed: {
    totalCusto(): number {
      return this.ficha.modificadores.reduce(
        (total, mod) => total + this.calcularCusto(mod.base),
        0
      );
    },
  },
  methods: {
    updateValues(mod: Modificador, index: number): void {
      this.updateTotalCusto();
    },
    updateTotalCusto(): void {
      this.pontos = this.totalCusto;
    },
    calcularCusto(valor: number): number {
      let custo: number;

      switch (valor) {
        case -1:
          custo = -1;
          break;
        case 0:
          custo = 0;
          break;
        case 1:
          custo = 1;
          break;
        case 2:
          custo = 2;
          break;
        case 3:
          custo = 4;
          break;
        case 4:
          custo = 7;
          break;
        default:
          custo = 0;
          break;
      }

      return custo;
    },
  },
});
</script>

<style scoped>
#menuRacas {
  width: 26.7em;
}
.styled-dropdown {
  border: solid 2px #171511;
  background-color: #ffffff;
  color: #000000;
  height: 2.5rem;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 2.5rem;
  position: relative;
  width: 12rem !important;
}
.styled-dropdown p {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 0 0 3px;
  width: 12rem;
  margin: 0;
}
ul.dropdown-lista {
  border: solid 2px #171511;
  background-color: #ffffff;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  float: left;
  left: -0.1rem;
  line-height: 2rem;
  list-style: none outside none;
  margin: 0;
  height: 25rem;
  font-size: 0.8rem;
  padding: 0;
  position: absolute;
  overflow: auto;
  width: 12rem;
  z-index: 10;
}
ul.dropdown-lista li {
  background-color: #ffffff;
  padding: 0 0 0 3px;
  box-sizing: border-box;
  border-bottom: solid 1px #171511;
}
ul.dropdown-lista li:last-child {
  background-color: #6a0015;
  color: #ffffff;
  border: 0px;
}
ul.dropdown-lista li:last-child:hover {
  background-color: #47000e;
  color: #ffffff;
  border: 0px;
}
ul.dropdown-lista li:hover {
  background: #2b2720;
  color: #ffffff;
}
ul.dropdown-lista::-webkit-scrollbar {
  width: 0.6rem;
}
ul.dropdown-lista::-webkit-scrollbar-track {
  background-color: #ffffff;
  border-left: 1px solid #171511;
  box-sizing: border-box;
}
ul.dropdown-lista::-webkit-scrollbar-thumb {
  background-color: #2b2720;
}
.tituloRacas {
  background-color: #171511 !important;
  color: #ffffff !important;
  line-height: 1.5rem;
  font-size: 0.8rem;
  height: 1.5rem;
  width: 12rem;
}
footer {
  min-height: 20vh;
}
th {
  font-weight: 700;
  text-transform: uppercase;
  background-color: #2b2720;
  min-height: 2.5rem;
  width: 5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  min-width: 4rem;
}
th span {
  display: block;
}
.tabela {
  border-spacing: 0.4rem;
  border-collapse: separate;
  margin-top: 0.2rem;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
  width: 20em;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
}
.thMenor {
  font-size: 0.5rem;
  line-height: 0.5rem;
  color: #ffffff;
}
tr {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  display: table-row;
}
td {
  display: table-cell;
  vertical-align: inherit;
  max-height: 2.5rem;
  max-width: 4rem;
  margin: 0;
  padding: 0;
}
th {
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #2b2720;
  min-height: 2.5rem;
  width: auto;
  min-width: 4rem;
  padding-top: 0;
  padding-bottom: 0;
  text-align: center !important;
}
.thHabilidades {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-size: 0.8rem;
}
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="text"] {
  -moz-appearance: textfield;
}
input {
  writing-mode: horizontal-tb !important;
  margin: 0;
  padding: 0;
}
.campoTabela {
  width: 4rem;
  height: 2.5rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  color: #2b2720;
  border: 2px solid #2b2720;
  text-align: center;
  line-height: 2.4rem;
  font-size: 1rem;
  font-weight: bold;
}
#contagemDePontos {
  float: right;
  margin-right: 0.4rem;
  width: 4rem;
}
.tituloPontos {
  background-color: #6a0015 !important;
  display: block;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  line-height: 1.5rem;
  font-size: 0.8rem;
  height: 1.5rem;
  width: 4rem;
}
.valorPontos {
  display: block;
  box-sizing: border-box;
  height: 2.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 2.3rem;
  font-size: 1.6rem;
  color: #6a0015;
  border: 2px solid #6a0015;
}
.thHabilidades,
.thRaca,
.thBonus,
.thNivel,
.thTotal,
.thModificadores {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-size: 0.8rem;
}
.thTotal {
  background-color: #171511;
}
.thCusto {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-size: 0.8rem;
  color: #ffffff !important;
  font-weight: 100;
  box-sizing: border-box;
  background-color: #6a0015 !important;
  font-weight: bold;
}
.custo {
  border-top: 0px solid transparent !important;
  border-right: 0px solid transparent !important;
  border-left: 0px solid transparent !important;
  border-bottom: 2px solid #6a0015;
  color: #6a0015;
  font-weight: 100 !important;
  box-sizing: border-box;
  background-color: transparent !important;
  height: 2.3rem;
  font-weight: bold;
}
</style>
