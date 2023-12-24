<script setup>
import { ref } from "vue";
const navItems = ref([
  { name: "Github", href: "https://github.com/Nathan-Dinh" },
  { name: "Linkedin", href:"https://www.linkedin.com/in/nathan-dinh-8782a6215/" },
]);
</script>

<template>
  <header app dark height="80">
    <div class="m-5" v-for="item in navItems">
      <a :href="item.href" target="_blank" rel=" nofollow">
        {{ item.name }}
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5em;
}

a {
  font-size: 1.7em;
  font-weight: 600;
  color: black;
  padding-right: 2em;
}

a:hover {
  color: white;
  font-weight: 600;
  padding-right: 2em;
}
</style>
