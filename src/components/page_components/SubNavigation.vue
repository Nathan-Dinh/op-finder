<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const sideNavItems = ref([
  { name: "Home", path: "/" },
  { name: "Search", path: "/search" },
  { name: "Gallery", path: "/gallery" },
]);
</script>

<template>
  <div class="title-container">
    <h1>Op Finder</h1>
  </div>
  <hr />
  <nav class="nav-container">
    <router-link
      class="side-nav-links"
      :to="items.path"
      v-for="items in sideNavItems"
    >
      {{ items.name }}
    </router-link>
  </nav>
</template>

<style scoped>
hr {
}
.title-container {
  text-align: center;
  padding: 1em;
  font-weight: bold;
}
.nav-container {
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-size: 1.5em;
  font-weight: lighter;
}

.side-nav-links {
  padding: 1em;
  border-radius: 5px;
  color: lightgray;
}

.side-nav-links:hover {
    background-color: rgb(80, 79, 79);
}
</style>
