<template>
  <div>
    <div></div>
    <Card>
      <template #header>
        <h1>Gatinho</h1>
      </template>
      <template #imagem>
        <img
          width="200"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAhU2DDM5zmgh8bYZEWyELz6kCjK3dyVOnpr-7ypO&s"
          alt="Dog2"
          srcset="" />
      </template>
      <template #footer>
        <h6>Doguinho Patinha</h6>
      </template>
    </Card>
    <Card></Card>
    <Card></Card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  components: {
    Card: Card,
  },
};
</script>

<style></style>
