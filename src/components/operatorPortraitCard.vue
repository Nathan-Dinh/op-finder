<script setup>
import { defineProps } from "vue";
const props = defineProps(["op"]);
</script>

<template>
  <div class="portrait-container">
    <img :src="props.op.imgUrl" class="image-size" alt="#" />
  </div>
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
