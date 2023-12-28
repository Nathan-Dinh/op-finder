<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const sideNavItems = ref([
  { name: "", path: "/", icon: "md-home-outlined" , tooltip: "Home"},
  { name: "", path: "/search", icon: "md-personsearch-twotone", tooltip: "Search"},
  { name: "", path: "/gallery", icon: "md-viewlist-outlined", tooltip: "Gallery"},
]);
</script>

<template>
  <div class="title-container">
    <div>
      <img src="/Rhodes_Island.webp" alt="icon" class="icon" />
    </div>
    <div class="title-name">
      <h1></h1>
    </div>
  </div>
  <hr />
  <nav class="nav-container">
      <router-link
        class="side-nav-links tooltip"
        :to="items.path"
        v-for="items in sideNavItems"
      >
        <v-icon :name="items.icon" scale="2" />
        {{ items.name }}
        <span class="tooltiptext">{{items.tooltip}}</span>
      </router-link>
  </nav>
</template>

<style scoped>
.icon {
  width: 3.2em;
}
.title-container {
  display: flex;
  justify-content: center;
  padding: 1em;
  font-weight: bold;
}
.nav-container {
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  font-weight: lighter;
}
.side-nav-links {
  padding: 0.7em 1em;
  margin: 0.2em 0;
  border-radius: 5px;
  color: lightgray;
}
.side-nav-links:hover {
  background-color: rgb(80, 79, 79);
}
</style>
