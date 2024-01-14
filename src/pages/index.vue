<script setup>
import { onBeforeMount } from "vue";
import { useCurrentTab } from "../store/useCurrentTab.js";
import GetOperators from "../components/api_documentation/GetOperators.vue";
import GetOperatorByPosition from "@/components/api_documentation/GetOperatorByPosition.vue";
import GetOperatorByProfession from "@/components/api_documentation/GetOperatorByProfession.vue";
import GetOperatorByName from "@/components/api_documentation/GetOperatorByName.vue";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

onBeforeMount(() => {
  const update = useCurrentTab((state) => state.updateOptionTab);
  update("Home");
});
</script>

<template>
  <div class="container">
    <header>
      <h1 class="title">Arknights API Documentation</h1>
    </header>
    <hr />
    <div>
      <Accordion class="nested-container">
        <div class="sub-container">
          <AccordionTab header="Get Operators">
            <GetOperators />
          </AccordionTab>
          <AccordionTab header="Get Operators By Name">
            <GetOperatorByName />
          </AccordionTab>
          <AccordionTab header="Get Operators By Position">
            <GetOperatorByPosition />
          </AccordionTab>
          <AccordionTab header="Get Operators By Profession">
            <GetOperatorByProfession />
          </AccordionTab>
        </div>
      </Accordion>
    </div>
  </div>
</template>

<style scoped>
hr {
  margin: 0 0 0.5em 0;
}

.nested-container {
  padding: 1em 6em;
}

:deep(.p-accordion-tab) {
  margin-bottom: 1em;
  border-radius: 5px !important;
}
:deep(.p-accordion-content) {
  padding: 1em;
}

:deep(.p-accordion-header-link) {
  padding: 1em;
}

:deep(.p-accordion-content) {
  background-color: rgb(24, 29, 39);
}

@media only screen and (max-width: 700px) {
  .nested-container {
    padding: 1em 0;
  }
}
</style>
