<template>
  <h1>Listagem de posts</h1>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">Código</th>
        <th class="text-left">Título</th>
        <th class="text-left">Descrição</th>
        <th class="text-left">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td><img :src="post.url" width="50" /></td>
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
        <v-btn @click="() => deletarPost(post.id)">Deletar</v-btn>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      const token = localStorage.getItem("instagram_token");

      axios({
        url: "http://localhost:3000/api/posts",
        method: "GET",
        headers: {
          Authorization: `Bearen ${token}`,
        },
      })
        .then((response) => {
          this.posts = response.data.posts;
          console.log("deu certo");
        })
        .catch(() => {
          console.log("deu ruim");
        });
    },
    deletarPost(id) {
      console.log("deletarPost");
      const token = localStorage.getItem("instagram_token");

      axios({
        url: "http://localhost:3000/api/posts/" + id,
        method: "DELETE",
        headers: {
          Authorization: `Bearen ${token}`,
        },
      })
        .then(() => {
          this.loadPosts();
        })
        .catch(() => {
          console.log("erro ao deletar");
        });
    },
  },
};
</script>
