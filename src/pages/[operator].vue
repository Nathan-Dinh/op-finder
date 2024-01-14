<script setup>
import { ref, onActivated, onDeactivated } from "vue";
import operatorTemplate from "@/components/operatorTemplate.vue";
import { useRoute } from "vue-router";

const ROUTE = useRoute();
let operatorInformation = ref(null);

const IS_LOADING = ref(false);

const GetOperator = async (op) => {
  IS_LOADING.value = true
  const RESPONSE = await fetch(
    `https://www.arknightsapi.com/v1/operators/${op}`
  );
  const DATA = await RESPONSE.json();
  IS_LOADING.value = false
  operatorInformation.value = DATA.operators;
};

onActivated(() => {
  GetOperator(ROUTE.params.operator);
});

onDeactivated(() => {
  operatorInformation.value = null;
});
</script>

<template>
  <div v-if="IS_LOADING" class="loader-container">
    <span class="loader"></span>
  </div>
  <div v-else="!IS_LOADING"  v-for="info in operatorInformation">
    <operatorTemplate :opInfo="info" />
  </div>
</template>

<style scoped>

</style>
