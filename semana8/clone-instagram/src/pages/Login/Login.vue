<template>
  <div>
    <form @submit.prevent="handleLogin" class="form-login">
      <div class="error-box">
        <ul>
          <li v-if="errorInputEmail">{{ errorInputEmail }}</li>
          <li v-if="errorInputPassword">{{ errorInputPassword }}</li>
        </ul>
      </div>

      <input placeholder="Digite o Email" v-model="email" />
      <input type="password" placeholder="Digite a Senha" v-model="password" />

      <button type="submit">Entrar</button>

      <p><router-link to="/cadastro">Cadastrar</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",

      errorInputEmail: "",
      errorInputPassword: "",
    };
  },
  methods: {
    handleLogin() {
      this.errorInputEmail = "";
      this.errorInputPassword = "";
      if (this.email === "") this.errorInputEmail = "Digite o Email";
      if (this.password === "") this.errorInputPassword = "Digite a Senha";

      this.$router.push("/home");
    },
    outroMetodo() {},
  },
};
</script>

<style scoped>
.error-box {
  background-color: tomato;
  width: 80%;
  color: #fff;
}
.form-login {
  margin: 40px auto;
  width: 40%;

  border-radius: 4px;
  border: 1px solid #383737;

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  padding: 10px;
}

.input-area {
  width: 80%;

  display: flex;
  flex-direction: column;
}

.input-area input {
  width: 100%;
}

.texto-erro {
  color: red;
  margin: 4px;
}

input {
  height: 54px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #756767;
  outline: none;
}

form input {
  width: 100%;
  height: 32px;
  margin-bottom: 5px;
}

button {
  width: 80%;
  height: 54px;
  background-color: #3578e5;

  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
}

button:hover {
  background-color: #286ee0;
}

.input-error {
  border-color: red;
}
</style>
