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
  console.log(currentTab.value);
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

const UpdateCurrentTab = (tab) => {
  console.log(tab);
  updateSearchTab(tab);
};

onBeforeMount(() => {
  update("Search");
});
</script>

<template>
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
      <section v-if="returnInformation != null" class="sub-container">
        <RouterLink v-for="item in returnInformation" :to="item.name">
          <operatorPortraitCard :op="item" />
        </RouterLink>
      </section>
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
