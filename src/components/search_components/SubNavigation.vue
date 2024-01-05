<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Menubar from "primevue/menubar";
import { useCurrentTab } from "../../store/useCurrentTab.js";
const test = ref(useCurrentTab((state) => state.currentSearchTab));
const { updateSearchTab } = useCurrentTab();

const OPTION_LIST_ITEM = [
  {
    label: "Name",
    path: "/search",
  },
  {
    label: "Profession",
    path: "/search",
  },
  {
    label: "Position",
    path: "/search",
  },
];
</script>

<template>
  <div>
    <Menubar :model="OPTION_LIST_ITEM">
      <template #start> </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link
          @click="updateSearchTab(item.label)"
          v-ripple
          v-bind="props.action"
          :to="item.path"
          :class="test === item.label ? 'item highlighted' : 'item'"
        >
          <span class="ml-2">{{ item.label }}</span>
        </router-link>
      </template>
      <template #end> </template>
    </Menubar>
  </div>
</template>

<style scoped>
.item {
  padding: 0.5em;
  margin: 0.5em;
  color: rgb(122, 115, 115);
}

.highlighted {
  color: white;
}
</style>
