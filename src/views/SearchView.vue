<script setup>
import { ref } from "vue";

import SearchBar from "@/components/SearchBar.vue";
import operatorTemplate from "@/components/operatorTemplate.vue";

let opInfoObject = ref(null);

const FindOperator = async (op) => {
  const opName = op.toLowerCase();
  if (
    typeof opName === "string" &&
    opName.trim().length !== 0 &&
    isNaN(opName)
  ) {
    try {
      const response = await fetch(
        `https://arknights-api-nathan-dinh.onrender.com/operator/${opName}`
      );
      const context = await response.json();
      opInfoObject.value = context;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Invalid input");
  }
};
</script>

<template>
  <div id="container">
    <SearchBar @op-name-tracker="FindOperator" />
    <operatorTemplate :opInfo="opInfoObject" />
  </div>
</template>

<style scoped>
#container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
