<script setup>
import { ref, onBeforeMount } from "vue";
import OperatorPortraitCard from "@/components/operatorPortraitCard.vue";
import { useCurrentTab } from "../store/useCurrentTab.js";

const OPERATOR_ARR = ref(null);
const UPDATE_OPTION_TAB = useCurrentTab((state) => state.updateOptionTab);

const IS_LOADING = ref(false);

const FetchOperators = async () => {
  IS_LOADING.value = true;
  const RESPONSE = await fetch("https://www.arknightsapi.com/v1/operators");
  const DATA = await RESPONSE.json();
  OPERATOR_ARR.value = DATA.operators;
  IS_LOADING.value = false;
};

onBeforeMount(() => {
  UPDATE_OPTION_TAB("Gallery");
  FetchOperators();
  console.log("trigger")
});
</script>

<template>
  <div v-if="IS_LOADING" class="loader-container">
    <span class="loader"></span>
  </div>
  <div v-else="!IS_LOADING" class="main-container">
    <div v-for="item in OPERATOR_ARR">
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
