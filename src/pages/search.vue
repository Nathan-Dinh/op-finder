<script setup>
import { ref, onBeforeMount, onBeforeUpdate } from "vue";
import { RouterLink } from "vue-router";
import operatorPortraitCard from "@/components/operatorPortraitCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import TabBar from "@/components/TabBar.vue";
import DropDown from "@/components/Dropdown.vue";
import { useCurrentTab } from "@/store/useCurrentTab.js";

const updateSearchTab = useCurrentTab((state) => state.updateSearchTab);
let returnInformation = ref(null);
let currentTab = useCurrentTab((state) => state.currentSearchTab);
const update = useCurrentTab((state) => state.updateOptionTab);

const IS_LOADING = ref(false);

const OPTION_LIST_ITEM = [
  {
    label: "Name",
    path: "/search",
  },
  {
    label: "Profession",
    path: "/search",
  },
  {
    label: "Position",
    path: "/search",
  },
];

const SearchEventHandler = async (op) => {
  const str = op.toLowerCase();
  let urlString = "";
  if (typeof str === "string" && str.trim().length !== 0 && isNaN(str)) {
    switch (currentTab.value) {
      case "Name":
        urlString = `https://www.arknightsapi.com/v1/operators/${str}`;
        break;
      case "Profession":
        urlString = `https://www.arknightsapi.com/v1/operators/profession/${str}`;
        break;
      case "Position":
        urlString = `https://www.arknightsapi.com/v1/operators/position/${str}`;
        break;
    }
    try {
      IS_LOADING.value = true
      const response = await fetch(urlString);
      const context = await response.json();
      returnInformation.value = context.operators;
      IS_LOADING.value = false
    } catch (error) {
      IS_LOADING.value = false
      console.log(error);
    }
  } else {
    alert("Invalid input");
  }
};

const UpdateCurrentTab = (tab) => {
  console.log(tab);
  updateSearchTab(tab);
};

onBeforeMount(() => {
  update("Search");
});
</script>

<template>
  <div v-if="IS_LOADING"></div>
  <div>
    <aside>
      <TabBar
        @click-handler="UpdateCurrentTab"
        :items="OPTION_LIST_ITEM"
        class="primary-nav"
      />
      <DropDown
        @change-handler="UpdateCurrentTab"
        :items="OPTION_LIST_ITEM"
        class="secondary-nav"
      />
    </aside>
    <div id="main-container">
      <SearchBar @event-click-handler="SearchEventHandler" />
      <div v-if="IS_LOADING" class="loader-container">
        <span class="loader"></span>
      </div>
      <div v-else="!IS_LOADING">
        <section v-if="returnInformation != null" class="sub-container">
            <operatorPortraitCard v-for="item in returnInformation" :op="item" />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sub-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: 65vh;
}

.secondary-nav {
  display: flex;
  flex: 1;
  display: none;
  width: 100%;
}

@media only screen and (max-width: 700px) {
  .primary-nav {
    display: none;
  }

  .secondary-nav {
    display: block;
  }

  .sub-container {
    grid-template-columns: repeat(1, auto);
  }
}

@media only screen and (min-width: 700px) {
  .sub-container {
    overflow: auto;
  }
}
</style>
