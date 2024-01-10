<script setup>
import { ref, onBeforeMount } from "vue";
import OperatorPortraitCard from "@/components/operatorPortraitCard.vue";
import { Capitalize } from "../utilities/formatting.js";
import { useCurrentTab } from "../store/useCurrentTab.js";

const OPERATOR_ARR = ref(null);
const UPDATE_OPTION_TAB = useCurrentTab((state) => state.updateOptionTab);

const FetchOperators = async () => {
  const RESPONSE = await fetch("https://www.arknightsapi.com/v1/operators");
  const DATA = await RESPONSE.json();
  OPERATOR_ARR.value = DATA.operators;
};

onBeforeMount(() => {
  UPDATE_OPTION_TAB("Gallery");
});
FetchOperators();
</script>

<template>
  <div class="main-container">
    <div v-for="item in OPERATOR_ARR">
      <header class="header">
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
  min-height: 80vh;
  max-height: 80vh;
  padding: 0 15em;
  text-align: center;
}
.header {
  font-size: 1em;
}

@media only screen and (max-width: 900px) {
  .main-container {
    padding: 0;
    max-height: 105vh;
  }

  .header {
    font-size: 0.5em;
  }
}

@media only screen and (min-width: 700px) {
  .main-container {
    overflow: auto;
  }
}
</style>
