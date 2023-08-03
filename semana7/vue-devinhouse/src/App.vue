<template>
  <div>
    <h1>Calculadora IMC.vue</h1>
    {{ peso }}
    <input type="number" placeholder="Peso" v-model="peso" />

    {{ altura }}
    <input type="number" placeholder="Altura" v-model="altura" />
    <button @click="calcularImc()">Calcular</button>
    <span>{{ resultado }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
      resultado: "",
    };
  },
  methods: {
    calcularImc() {
      if (this.peso == 0 || this.altura == 0) {
        alert("Dados precisam ser diferentes de 0");
        return;
      }

      this.resultado = (this.peso / this.altura ** 2).toFixed(2);
    },
  },
};
</script>

<style></style>
