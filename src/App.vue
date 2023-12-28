<script setup>
import Header from "./components/page_components/Header.vue";
import Footer from "./components/page_components/Footer.vue";
import SubNavigation from "./components/page_components/SubNavigation.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <section class="main-content-container">
    <div id="content-one">
      <SubNavigation />
    </div>
    <div id="content-two">
      <RouterView />
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.main-content-container {
  display: flex;
  padding: 2em;
}

#content-one {
  max-height: 80vh;
  height: 80vh;
  padding: 1em;
  background-color: rgb(34, 34, 34);
  color: lightgray;
  border-radius: 5px;
}

#content-two {
  max-width: 100%;
  width: 100%;
}
</style>
