<script setup>
import { ref } from "vue";
const navItems = ref([
  {
    name: "Github",
    href: "https://github.com/Nathan-Dinh",
    icon: "ri-github-line",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nathan-dinh-8782a6215/",
    icon: "ri-linkedin-box-line",
  },
]);
</script>

<template>
  <header height="80">
    <div class="m-5" v-for="item in navItems">
      <a :href="item.href" target="_blank" rel="noopener noreferrer">
        <v-icon
          :name="item.icon"
          scale="2"
        />
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1em;
}

a {
  color: rgb(121, 121, 121);
  padding-right: 2em;
}

a:hover {
  color: white;
  font-weight: 600;
  padding-right: 2em;
}
</style>
