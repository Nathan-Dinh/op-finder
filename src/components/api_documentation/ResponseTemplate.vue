<script setup>
import { defineProps } from "vue";
import PropWithoutCode from "./PropWithoutCode.vue";
import Panel from "primevue/panel";
const props = defineProps(["items"]);

const OPERATOR_PROP = {
  name: "operators",
  type: "Array of operators",
  description: ""
}
</script>

<template>
  <Panel toggleable class="sub-container">
    <template #header>
      <div class="header-container">
        <PropWithoutCode :item="OPERATOR_PROP"/>
      </div>
    </template>
    <PropWithoutCode
      v-for="item in props.items"
      :item="item"
    />
  </Panel>
</template>

<style setup>
.sub-container .header-container {
  display: flex;
}
.sub-container .header-container div {
  display: flex;
  padding-left: 0.5em;
}

:deep(.p-toggleable-content) {
  padding: 3em;
}
</style>
