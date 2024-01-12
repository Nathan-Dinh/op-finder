<script setup>
import { defineProps } from "vue";
import Panel from "primevue/panel";
const props = defineProps(["items"]);
</script>

<template>
  <Panel toggleable class="sub-container">
    <template #header>
      <div class="header-container">
        <div>
          <h4>GET</h4>
        </div>
      </div>
    </template>
    <div v-for="item in props.items" class="prop-container">
      <div>
        <h4>{{ item.name }}</h4>
        <span>{{ item.type }}</span>
      </div>
      <p>{{ item.description }}</p>
      <div >
        <code class="code">{{ item.example }}</code>
      </div>
    </div>
  </Panel>
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
.sub-container {
  margin: 1em 0 1em 0;
}
.sub-container .header-container {
  display: flex;
}
.sub-container .header-container div {
  display: flex;
  padding-left: 0.5em;
}

:deep(.header-container) {
  padding: 1em 0;
}
</style>
