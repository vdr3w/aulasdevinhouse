<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
