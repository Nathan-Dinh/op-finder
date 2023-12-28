<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const sideNavItems = ref([
  { name: "Home", path: "/", icon: "md-home-outlined" },
  { name: "Search", path: "/search", icon: "md-personsearch-twotone" },
  { name: "Gallery", path: "/gallery", icon: "md-viewlist-outlined" },
]);
</script>

<template>
  <div class="title-container">
    <div>
      <img src="/Rhodes_Island.webp" alt="icon" class="icon" />
    </div>
    <div class="title-name">
      <h1>OpFinder</h1>
    </div>
  </div>
  <hr />
  <nav class="nav-container">
    <router-link
      class="side-nav-links"
      :to="items.path"
      v-for="items in sideNavItems"
    >
      <v-icon :name="items.icon" scale="2" />
      {{ items.name }}
    </router-link>
  </nav>
</template>

<style scoped>
.icon {
  width: 3.2em;
}
.title-name {
  padding: 0 1em;
  font-size: 1.2em;
}
.title-container {
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
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
  padding: 0.7em 0.5em;
  margin: 0.5em 0;
  border-radius: 5px;
  color: lightgray;
}
.side-nav-links:hover {
  background-color: rgb(80, 79, 79);
}
</style>
