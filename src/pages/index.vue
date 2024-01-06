<script setup>
import {onBeforeMount} from "vue"
import { useCurrentTab } from "../store/useCurrentTab.js";

onBeforeMount(() => {
  const update = useCurrentTab(state => state.updateOptionTab)
  update("Home")
});
</script>

<template>
  <div class="container">
    <header>
      <h1 class="title">Home view</h1>
    </header>
  </div>
</template>

<style scoped>

</style>
