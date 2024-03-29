<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">openLayer-线</RouterLink>
        <RouterLink to="/openLayer">openLayer-轨迹</RouterLink>
      </nav>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
