<script setup>
import { ref, onBeforeMount } from "vue";
import OperatorPortraitCard from "../components/operatorPortraitCard.vue";
import { Capitalize } from "../utilities/formatting.js";
import { useCurrentTab } from "../store/useCurrentTab.js";

const OPERATOR_ARR = ref(null);
const UPDATE_OPTION_TAB = useCurrentTab((state) => state.updateOptionTab);

const FetchOperators = async () => {
  const RESPONSE = await fetch("http://localhost:3000/operators");
  const DATA = await RESPONSE.json();
  OPERATOR_ARR.value = DATA;
};

onBeforeMount(() => {
  UPDATE_OPTION_TAB("Gallery");
})
FetchOperators();
</script>

<template>
    <div class="main-container">
      <div v-for="item in OPERATOR_ARR">
        <header>
          <h1>{{ Capitalize(item.name) }}</h1>
        </header>
        <section>
          <OperatorPortraitCard :op="item" />
        </section>
      </div>
    </div>
</template>

<style scoped>
.main-container {
  overflow: auto;
  min-height: 80vh;
  max-height: 80vh;
  padding:0 15em;
  border-left: 1px solid;
  text-align: center;
}
</style>
