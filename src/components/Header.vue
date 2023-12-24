<script setup>
import { ref } from "vue";
const navItems = ref(["Github", "LinkedIn"]);
</script>

<template>
  <header app dark height="80">
    <div href="#" class="m-5" v-for="item in navItems">
        <a href="#">
            {{ item }}
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
