<script setup>
import {defineProps} from "vue"
const props = defineProps(["opImage"])
console.log(props)
</script>

<template>
  <div class="portrait-container">
    <img :src="props.opImage" class="image-size" alt="#">
  </div>
</template>

<style scoped>
.portrait-container{
  display: flex;
  justify-content: center;
  padding: 1em;
}
.image-size{
  width: 100%;
  height: auto;
}
</style>
