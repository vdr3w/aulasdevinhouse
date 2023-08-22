<template>
  <form @submit.prevent="handleCreateAccount" class="form-login">
    <h2>Criar Conta</h2>

    <div class="form-field">
      <label for="name">Nome Completo:</label>
      <span class="message-error"> {{ this.errors.name }}</span>
      <input class="form-input" id="name" v-model="name" />
    </div>

    <div class="form-field">
      <label for="email">E-mail:</label>
      <span class="message-error"> {{ this.errors.email }}</span>
      <input id="email" v-model="email" />
    </div>

    <div class="form-field">
      <label for="phone">Telefone:</label>
      <span class="message-error"> {{ this.errors.phone }}</span>
      <input id="phone" v-model="phone" />
    </div>

    <div class="form-field">
      <label for="password">Senha:</label>
      <span class="message-error"> {{ this.errors.password }}</span>
      <input type="password" id="password" v-model="password" />
    </div>

    <div class="form-field">
      <label for="verifyPassword">Confirmar Senha:</label>
      <span class="message-error"> {{ this.errors.verifyPassword }}</span>
      <input type="Password" id="verifyPassword" v-model="verifyPassword" />
    </div>

    <div class="form-field">
      <label for="sponsor">Patrocinador</label>
      <select id="sponsor" v-model="sponsor">
        <option value="">Sem Patrocinador</option>
        <option value="DevInHouse">DevInHouse</option>
        <option value="Lab">LAB365</option>
        <option value="Zucchetti">Zucchetti</option>
      </select>
    </div>

    <div class="form-field">
      <label for="bio">Bio</label>
      <textarea id="bio" v-model="bio" cols="30" rows="7"></textarea>
    </div>

    <div class="radio-group">
      <p>Selecione um Plano</p>
      <div class="radio-option">
        <input id="bronze" type="radio" value="1" v-model="planType" />
        <label for="bronze">Bronze</label>
      </div>
      <div class="radio-option">
        <input id="prata" type="radio" value="2" v-model="planType" />
        <label for="prata">Prata</label>
      </div>
      <div class="radio-option">
        <input id="ouro" type="radio" value="3" v-model="planType" />
        <label for="ouro">Ouro</label>
      </div>
    </div>

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
      <span class="message-error"> {{ this.errors.terms }}</span>
    </div>

    <v-btn type="submit" prepend-icon="mdi-check-circle"> Criar Conta </v-btn>
  </form>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "../../../src/utils/captureErrorYup";
import axios from "axios";

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

      errors: {},
    };
  },
  methods: {
    handleCreateAccount() {
      try {
        const schema = yup.object().shape({
          name: yup.string().required("Digite um nome válido."),
          email: yup
            .string()
            .email("Digite um email válido.")
            .required("Email é obrigatório."),
          phone: yup
            .string()
            .required("Telefone é obrigatório")
            .min(8, "Telefone precisa ter 8 numeros"),
          password: yup
            .string()
            .required("A senha é obrigatória")
            .min(8, "Senha deve ser maior que 8 caracteres")
            .max(20, "Senha deve ser menor que 20 caracteres"),
          verifyPassword: yup
            .string()
            .required("A confirmação da senha é obrigatória")
            .oneOf([yup.ref("password")], "As senhas devem coincidir"),
          terms: yup.boolean().isTrue("Você deve aceitar os termos."),
        });

        schema.validateSync(
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password,
            verifyPassword: this.verifyPassword,
            terms: this.terms,
          },
          { abortEarly: false }
        );

        // cadastro

        axios({
          url: "http://localhost:3000/api/register",
          method: "POST",
          data: {
            name: this.name,
            email: this.email,
            contact: this.phone,
            password: this.password,
            sponsor: this.sponsor,
            bio: this.bio,
            confirmTerms: this.terms,
            planType: this.planType,
          },
        })
          .then(() => {
            alert("cadastrado com sucesso");
            this.$router.push("/");
          })
          .catch((error) => {
            if (error.response?.data?.message) {
              alert(error.response.data.message);
            }
            alert("Falha ao tentar cadastrar.");
          });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          console.log(error);
          // capturar os errors do yup
          this.errors = captureErrorYup(error);
        }
      }
    },
  },
};
</script>

<style scoped>
.form-login {
  min-width: 300px;
  width: 60%;
  margin: 50px auto;
  padding: 30px;
  background-color: #f7f7f7;
  border-radius: 10px;
  font-family: "Arial", sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
  font-weight: 600;
}

h3 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
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
}

input:focus,
select:focus,
textarea:focus {
  border-color: #007bff;
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
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

.radio-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  font-family: "Arial", sans-serif;
}

.radio-group p {
  text-align: center;
  color: #333;
  font-weight: 600;
  margin-bottom: 10px;
}

.radio-option {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.radio-option label {
  margin-left: 5px;
  color: #555;
  cursor: pointer;
}

.message-error {
  color: red;
}

.terms-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
}

.terms-content {
  height: 150px;
  overflow-y: scroll;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.5;
}

#termsLabel {
  display: block;
  text-align: center;
  margin-top: 10px;
}

#termsLabel input[type="checkbox"] {
  display: block;
  margin: 5px auto 0;
}
</style>
