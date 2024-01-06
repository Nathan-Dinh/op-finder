<script setup>
import Header from "./components/page_components/Header.vue";
import Footer from "./components/page_components/Footer.vue";
import SubNavigation from "./components/page_components/SubNavigation.vue";
import { useCurrentTab } from "./store/useCurrentTab";

import { RouterView } from "vue-router";
import { KeepAlive } from "vue";

const updateOptionTab = useCurrentTab((state) => state.updateOptionTab);

const UpdateCurrentTab = (tab) =>{
  updateOptionTab(tab)
}

const sideNavItems = [
  { name: "Home", path: "/", icon: "md-home-outlined", tooltip: "Home" },
  {
    name: "Search",
    path: "/search",
    icon: "md-personsearch-twotone",
    tooltip: "Search",
  },
  {
    name: "Gallery",
    path: "/gallery",
    icon: "md-viewlist-outlined",
    tooltip: "Gallery",
  },
];

</script>

<template>
  <Header />
  <div class="main-content-container">
    <SubNavigation :items="sideNavItems" @click-handler="UpdateCurrentTab"/>
    <div id="content-two">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
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
