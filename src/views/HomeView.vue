<script setup>
import { ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import operatorTemplate from "@/components/operatorTemplate.vue";
let opInfoObject = ref(null);

const findOperator = async (op) => {
  const opName = op.toLowerCase();
  try {
    const response = await fetch(
      `https://arknights-api-nathan-dinh.onrender.com/operator/${opName}`
    );
    const context = await response.json();
    opInfoObject.value = context;
  } catch (error) {
    console.log(error);
  }
  console.log(opInfoObject);
};
</script>

<template>
  <section id="container">
    <SearchBar @op-name-tracker="findOperator" />
    <operatorTemplate :opInfo="opInfoObject" />
  </section>
</template>

<style scoped>
#container {
  padding: 4em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}


</style>
