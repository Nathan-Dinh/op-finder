<script setup>
import operatorTemplate from "@/components/operatorTemplate.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let opInfo = ref(null)

const operator = async (op) => {
  const response = await fetch(`http://localhost:3000/operators/${op}`);
  const data = await response.json();
  console.log(data)
  opInfo.value = data
};

operator(route.params.operator);
</script>

<template>
    <div v-for="info in opInfo">
        <operatorTemplate :opInfo="info" />
    </div>
</template>

<style></style>
