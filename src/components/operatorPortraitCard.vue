<script setup>
import { Capitalize } from "../utilities/formatting.js";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps(["op"]);
</script>

<template>
  <RouterLink :to="props.op.name">
  <div class="portrait-container">
    <header class="header">
      <h1>{{ Capitalize(props.op.name) }}</h1>
    </header>
    <img
      role="presentation"
      loading="lazy"
      :src="props.op.imgUrl"
      class="image-size"
      :alt="props.op.name"
    />
  </div>
</RouterLink>
</template>

<style scoped>
.portrait-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}
.image-size {
  width: 55%;
  height: auto;
}
</style>
