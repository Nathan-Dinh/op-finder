<script setup>
import { ref } from "vue";
import OperatorPortraitCard from "../components/operatorPortraitCard.vue";
import { useCurrentTab } from "../store/useCurrentTab.js";
import {Capitalize} from '../utilities/formatting.js'

const update = useCurrentTab((state) => state.updateOptionTab);
let listOfOp = ref(null);

const FetchOperators = async () => {
  const response = await fetch(
    "http://localhost:3000/operators"
  );
  const data = await response.json();
  listOfOp.value = data;
};

update("Gallery");
FetchOperators();
</script>

<template>
  <div class="container">
    <div class="main-container">
        <div v-for="item in listOfOp">
          <div>
            <h1>{{Capitalize(item.name)}}</h1>
          </div>
          <OperatorPortraitCard :op="item" />
        </div>
    </div>
  </div>
</template>

<style scoped>
.main-container{
  overflow: auto;
  min-height: 80vh;
  max-height: 80vh;
  padding: 1em;
  border-left: 1px solid ;
  text-align: center;
}
</style>
