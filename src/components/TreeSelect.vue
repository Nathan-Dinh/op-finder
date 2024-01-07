<script setup>
import { ref,defineProps } from "vue";
import Dropdown from 'primevue/dropdown';
import { useCurrentTab } from "@/store/useCurrentTab";

const currentTab = ref("")
const props = defineProps(['items'])
</script>

<template>
    <div class="container">
        <Dropdown @change="$emit('change-handler',currentTab.label)" v-model="currentTab" :options="props.items" optionLabel="label" placeholder="Name" class="stretch-select"/>
    </div>
</template>

<style scoped>
.container {
  display: flex;
}

.stretch-select {
  width: 100%;
}</style>
