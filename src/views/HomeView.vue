<script setup>
import { useCurrentTab } from "../store/useCurrentTab.js";
const update = useCurrentTab(state => state.updateOptionTab)
update("Home")
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">Home view</h1>
    </div>
  </div>
</template>

<style scoped>

</style>
