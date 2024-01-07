<script setup>
import Header from "./components/page_components/Header.vue";
import Footer from "./components/page_components/Footer.vue";
import SideNavigation from "./components/page_components/SideNavigation.vue";
import TopNavigation from "@/components/page_components/TopNavigation.vue";
import { useCurrentTab } from "./store/useCurrentTab";

import { RouterView } from "vue-router";
import { KeepAlive } from "vue";

const updateOptionTab = useCurrentTab((state) => state.updateOptionTab);

const UpdateCurrentTab = (tab) => {
  updateOptionTab(tab);
};

const sideNavItems = [
  { name: "Home", icon: "md-home-outlined", path: "/", tooltip: "Home" },
  {
    name: "Search",
    icon: "md-personsearch-twotone",
    path: "/search",
    tooltip: "Search",
  },
  {
    name: "Gallery",
    icon: "md-viewlist-outlined",
    path: "/gallery",
    tooltip: "Gallery",
  },
];
</script>

<template>
  <TopNavigation
    :items="sideNavItems"
    @click-handler="UpdateCurrentTab"
    class="secondary-nav"
  />
  <Header class="head" />
  <div class="main-content-container">
    <SideNavigation
      :items="sideNavItems"
      @click-handler="UpdateCurrentTab"
      class="primary-nav"
    />
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
  padding: 1em 0.5em 0.5em;
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
  padding: 0 1em;
}

.secondary-nav{
  display: none;
}

@media only screen and (max-width: 700px) {
  .primary-nav {
    display: none;
  }

  
.secondary-nav{
  display: block;
}
}
</style>
