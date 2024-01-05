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
  min-height: 80vh;
  padding: 2em;
}

#content-one {
  height: 80vh;
  padding: 0.3em;
  background: #1f2d40;
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid #304562;
  border-radius: 5px;
}
#content-two {
  width: 100%;
  max-width: 100%;
  max-height: 80vh;
  padding: 0 2em;
}
</style>
