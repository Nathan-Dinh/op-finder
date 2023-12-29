<script setup>
import OperatorPotraitCard from "../components/operatorPotraitCard.vue"
</script>

<template>
  <div class="container">
    <div >
      <h1 class="title">Gallery view</h1>
    </div>
    <div class="main-container">
      <OperatorPotraitCard/>
      <OperatorPotraitCard/>
      <OperatorPotraitCard/>
      <OperatorPotraitCard/>
      <OperatorPotraitCard/>
      <OperatorPotraitCard/>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-gap: 1em;
}
</style>
