<script setup>
import { ref, onActivated,onDeactivated } from "vue";
import operatorTemplate from "@/components/operatorTemplate.vue";
import { useRoute } from "vue-router";

const ROUTE = useRoute();
let operatorInformation = ref(null)

const operator = async (op) => {
  const RESPONSE = await fetch(`https://www.arknightsapi.com/v1/operators/${op}`);
  const DATA = await RESPONSE.json();
  operatorInformation.value = DATA.operators
};

onActivated(() => {
  operator(ROUTE.params.operator);
})

onDeactivated(() =>{
  operatorInformation.value = null
})
</script>

<template>
    <div v-for="info in operatorInformation">
        <operatorTemplate :opInfo="info" />
    </div>
</template>

<style></style>
