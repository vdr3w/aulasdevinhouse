<template>
  <v-card class="mx-auto" width="400" prepend-icon="mdi-instagram">
    <template v-slot:title> NOVO POST </template>
    {{ this.errors.title }}
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="title"
          clearable
          label="Titulo do Post"
          variant="outlined"></v-text-field>
        <v-textarea
          v-model="description"
          label="Descrição do Post"
          variant="solo-filled"></v-textarea>
        <v-text-field
          v-model="url"
          clearable
          label="URL da Imagem"
          variant="outlined"></v-text-field>
        <v-btn type="submit" class="btnPost" color="#d6249f">POST</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import * as yup from "yup";
import { captureErrorYup } from "../../../utils/captureErrorYup";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      description: "",
      url: "",
    };
  },
  methods: {
    handleSubmit() {
      try {
        const schema = yup.object().shape({
          title: yup.string().required("Titulo é Obrigatório!"),
          url: yup.string().required("URL obrigatoria"),
          description: yup
            .string()
            .required("Descrição é Obrigatória!")
            .min(5, "Mínimo de 5 caracteres")
            .max(100, "Máximo de 100 caracteres"),
        });

        schema.validateSync(
          {
            title: this.title,
            description: this.description,
            url: this.url,
          },
          { abortEarly: false }
        );
        axios({
          url: "http://localhost:3000/api/posts",
          methos: "post",
          data: {
            title: this.title,
            description: this.description,
            url: this.url,
          },
        });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.errors = captureErrorYup(error);
        }
      }
    },
  },
};
</script>

<style>
.v-btn__content {
  color: white;
}
</style>
