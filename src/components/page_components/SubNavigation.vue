<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useCurrentTab } from "../../store/useCurrentTab";

const test = ref(useCurrentTab((state) => state.currentOptionTab));
const { updateOptionTab } = useCurrentTab();

const sideNavItems = ref([
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
]);
</script>

<template>
  <div class="title-container">
    <div>
      <img src="/Rhodes_Island.webp" alt="icon" class="icon" />
    </div>
  </div>
  <hr />
  <nav class="nav-container">
    <router-link
      @click="updateOptionTab(items.name)"
      class="pushable tooltip"
      :to="items.path"
      v-for="items in sideNavItems"
    >
      <div :class="test === items.name ? 'front highlighted' : 'front'">
        <v-icon :name="items.icon" scale="2" />
        <span class="tooltiptext">{{ items.tooltip }}</span>
      </div>
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
.highlighted {
  color: white !important;
  background-color: rgb(6, 60, 92) !important;
}
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: lighter;
}

.side-nav-links:hover {
  color: white;
}
.pushable {
  color: rgba(255, 255, 255, 0.87);
  background: hsl(212, 31%, 11%);
  border-radius: 12px;
  margin: 1em 0;
  cursor: pointer;
}

.front {
  display: block;
  padding: 1em;
  border-radius: 12px;
  background: #192535;
  border: 0.5px solid #25354b;
  color: rgb(119, 116, 116);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
  transform: translateY(-2px);
}
</style>
