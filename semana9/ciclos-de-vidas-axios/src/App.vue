<template>
  <div>
    <h1>Formulario Cadastro User</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Digite o Nome" v-model="cliente.nome" />
      <input
        type="email"
        placeholder="Digite o Email"
        v-model="cliente.email" />
      <button type="submit">Cadastrar</button>
    </form>
    <hr />
    <h2>Lista de Usuarios</h2>
    {{ listaUsuarios }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cliente: {
        nome: "",
        email: "",
      },
      listaUsuarios: [],
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("http://localhost:50001/clientes", this.cliente)
        .then((res) => alert("Cliente cadastrado com sucesso!"))
        .catch((erro) => console.log(erro));

      this.getDados();
    },
    getDados() {
      axios
        .get("http://localhost:50001/clientes")
        .then((res) => (this.listaUsuarios = res.data))
        .catch((erro) => console.log(erro));
    },
  },
  mounted() {
    this.getDados();
  },
};
</script>

<style></style>
