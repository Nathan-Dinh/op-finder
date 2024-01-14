<script setup>
import { defineProps } from "vue";
const props = defineProps(["item"]);
</script>

<template>
  <div class="prop-container">
    <div>
      <h4>{{ props.item.name }}</h4>
      <span>{{ props.item.type }}</span>
    </div>
    <p>{{ props.item.description }}</p>
    <div v-if="props.item.codeSnippet" class="code">
      <code>{{ props.item.codeSnippet }}</code>
    </div>
  </div>
</template>

<style scoped>
.prop-container {
  padding: 1em;
}
.prop-container div {
  display: flex;
  align-items: center;
}
.prop-container div h4 {
  padding: 0.2em 0.5em 0.2em 0.5em;
  background: rgb(142, 156, 165);
  border-radius: 5px;
  margin-right: 0.5em;
}
</style>
