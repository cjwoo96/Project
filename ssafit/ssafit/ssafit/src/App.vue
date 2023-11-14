<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "./views/HeaderView.vue";
</script>

<template>
  <HeaderView />
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
