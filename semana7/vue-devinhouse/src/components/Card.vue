<template>
  <header>
    <slot name="header">
      <h1>Cachorro Fofinho</h1>
    </slot>
  </header>
  <slot name="imagem">
    <img
      width="200"
      src="https://www.revistaveterinaria.com.br/wp-content/uploads/2017/10/triste-cachorro.jpg"
      alt="Doguinho"
      srcset="" />
  </slot>

  <slot></slot>

  <footer>
    <slot name="footer">
      <h6>Doguinho fofinho branquinho</h6>
    </slot>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
