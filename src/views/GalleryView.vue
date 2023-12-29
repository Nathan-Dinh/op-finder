<script setup>
import OperatorPortraitCard from "../components/operatorPortraitCard.vue";
import { ref } from "vue";
let listOfOp = ref(null);

const FetchOperators = async () => {
  const response = await fetch(
    "https://arknights-api-nathan-dinh.onrender.com/operators"
  );
  const data = await response.json();
  listOfOp.value = data;
};
FetchOperators();
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">Gallery view</h1>
    </div>
    <div class="main-container">
      <div v-for="op in listOfOp">
        <OperatorPortraitCard :opImage="op.imgUrl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1em;
}
</style>
