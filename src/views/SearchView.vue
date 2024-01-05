<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import operatorPortraitCard from "@/components/operatorPortraitCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import SubNavigation from "@/components/search_components/SubNavigation.vue";
import { useCurrentTab } from "../store/useCurrentTab.js";
const currentTab = ref(useCurrentTab((state) => state.currentSearchTab));
const update = useCurrentTab((state) => state.updateOptionTab);
update("Search");

let returnInformation = ref(null);

const SearchEventHandler = async (op) => {
  const str = op.toLowerCase();
  let urlString = "";
  if (typeof str === "string" && str.trim().length !== 0 && isNaN(str)) {
    switch (currentTab.value) {
      case "Name":
        urlString = `http://localhost:3000/operators/${str}`;
        break;
      case "Profession":
        urlString = `http://localhost:3000/operators/profession/${str}`;
        break;
      case "Position":
        urlString = `http://localhost:3000/operators/position/${str}`;
        break;
    }
    try {
      const response = await fetch(urlString);
      const context = await response.json();
      returnInformation.value = context;
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Invalid input");
  }
};
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">Search</h1>
    </div>
    <div>
      <SubNavigation />
    </div>
    <div id="main-container">
      <SearchBar @event-click-handler="SearchEventHandler" />
      <div class="sub-container">
        <RouterLink v-for="item in returnInformation" :to="item.name">
          <operatorPortraitCard :op="item"/>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
}

.sub-container{
  display: grid;
  grid-template-columns:repeat(3,auto) ;

}
</style>
