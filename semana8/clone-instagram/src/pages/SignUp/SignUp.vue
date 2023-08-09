<template>
  <form class="form-login">
    <h2>Criar Conta</h2>
    <label for="name">Nome Completo:</label>
    <input id="name" v-model="name" />

    <label for="email">E-mail:</label>
    <input id="email" v-model="email" />

    <label for="phone">Telefone:</label>
    <input id="phone" v-model="phone" />

    <label for="password">Senha:</label>
    <input type="password" id="password" v-model="password" />

    <label for="password">Confirmar Senha:</label>
    <input type="password" id="verifyPassword" v-model="verifyPassword" />

    <label for="sponsor">Patrocinador</label>
    <select id="sponsor" v-model="sponsor">
      <option value="">Sem Patrocinador</option>
      <option value="DevInHouse">DevInHouse</option>
      <option value="Lab">LAB365</option>
      <option value="Zucchetti">Zucchetti</option>
    </select>

    <label for="bio">Bio</label>
    <textarea id="bio" v-model="bio" cols="30" rows="7"></textarea>

    <div class="terms-container">
      <h3>Termos e Condições</h3>
      <div class="terms-content">
        Lorem 😊 ipsum dolor sit, amet consectetur 😜 adipisicing elit. Quod
        neque 🚀 nulla omnis. Quis, quia? Eaque aspernatur nemo 🌟 dolorum,
        debitis nostrum mollitia 😎 tempore? Voluptates tempora repellendus
        cumque 😂, officiis laboriosam. Ut, magnam. Repudiandae 😅 perspiciatis
        ipsam architecto. Praesentium, quas 😍. Veniam, voluptas! Adipisci,
        corrupti 😢. Ullam reiciendis officia dolor 😆 sequi laudantium
        accusamus?
      </div>

      <label id="termsLabel">
        Aceito os termos e condições
        <input type="checkbox" id="terms" v-model="terms" />
      </label>
    </div>

    <input id="bronze" type="radio" value="1" v-model="planType" />
    <label>Bronze</label>
    <input id="prata" type="radio" value="2" v-model="planType" />
    <label>Prata</label>
    <input id="ouro" type="radio" value="3" v-model="planType" />
    <label>Ouro</label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      verifyPassword: "",
      sponsor: "",
      bio: "",
      terms: true,
      planType: "2",
    };
  },
};
</script>

<style scoped>
.form-login {
  width: 350px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
}

input[type="radio"] {
  width: auto;
  margin-right: 5px;
  margin-bottom: 0;
}

input[type="submit"] {
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

#termsLabel {
  display: block;
  text-align: center;
  margin-top: 10px;
}

#termsLabel input[type="checkbox"] {
  display: block;
  margin: 5px auto 0; /* alinha a caixa de seleção ao centro abaixo do texto */
}

.terms-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
}

.terms-content {
  height: 150px; /* Defina a altura conforme necessário */
  overflow-y: scroll;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.5;
}

h3 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
}
</style>
