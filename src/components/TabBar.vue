<script setup>
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";
import Menubar from "primevue/menubar";
import { useCurrentTab } from "../store/useCurrentTab.js";
const currentTab = ref(useCurrentTab((state) => state.currentSearchTab));

const props = defineProps(["items"]);
</script>

<template>
    <Menubar :model="props.items">
      <template #start> </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link
          @click="$emit('click-handler', item.label)"
          v-bind="props.action"
          :to="item.path"
          :class="currentTab === item.label ? 'item highlighted' : 'item'"
        >
          <span class="ml-2">{{ item.label }}</span>
        </router-link>
      </template>
      <template #end> </template>
    </Menubar>
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
