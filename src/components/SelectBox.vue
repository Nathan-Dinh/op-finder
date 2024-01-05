<script setup>
import { ref,defineProps } from "vue";
import Dropdown from "primevue/dropdown";
const selectedRoute = ref("Name");
const props = defineProps(["selectedRoute"])

const OPTION_LIST_ITEM = [
  { value: "Name" },
  { value: "Position" },
  { value: "Profession" },
];
</script>

<template>
  <div>
    <Dropdown
      v-model="selectedRoute"
      :options="OPTION_LIST_ITEM"
      optionLabel="value"
      class="dropdown-menu"
    />
  </div>
</template>

<style scoped>
.dropdown-menu {
  width: 10em;
}
</style>
