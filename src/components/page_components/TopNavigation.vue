<script setup>
import Menubar from "primevue/menubar";
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";
import { useCurrentTab } from "../../store/useCurrentTab";
const currentTab = ref(useCurrentTab((state) => state.currentOptionTab));
const props = defineProps(["items"]);
</script>

<template>
  <div>
    <Menubar :model="props.items">
      <template #start> </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link
         @click="$emit('click-handler', item.name)"
          v-bind="props.action"
          :to="item.path"
          :class="currentTab === item.name ? 'item highlighted' : 'item'"
        >
          <span class="ml-2">{{ item.name }}</span>
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
