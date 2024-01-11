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
      <Accordion  class="nested-container">
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

      <!-- <div>
        <h2>Get Operator By Name</h2>
        <p>Get information on arknights operators characters by name</p>
        <h3>Request</h3>
        <hr />
        <Panel toggleable class="sub-container">
          <template #header>
            <div>
              <h4>GET</h4>
              <span>/Operators</span>
            </div>
          </template>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
            doloribus nemo voluptatem, qui fuga debitis sit molestias cum. orem
            ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti a
            et ex natus. Quos dolor odio id temporibus sed, nostrum doloribus
            nemo voluptatem, qui fuga debitis sit molestias cum. orem ipsum
            dolor sit amet consectetur adipisicing elit. Itaque corrupti a et ex
            natus. Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum.
          </p>
        </Panel>
        <h3>Response</h3>
        <hr />
        <Panel toggleable class="sub-container">
          <template #header>
            <div>
              <h4>GET</h4>
              <span>/Operators</span>
            </div>
          </template>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
            doloribus nemo voluptatem, qui fuga debitis sit molestias cum. orem
            ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti a
            et ex natus. Quos dolor odio id temporibus sed, nostrum doloribus
            nemo voluptatem, qui fuga debitis sit molestias cum. orem ipsum
            dolor sit amet consectetur adipisicing elit. Itaque corrupti a et ex
            natus. Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum. orem ipsum dolor sit
            amet consectetur adipisicing elit. Itaque corrupti a et ex natus.
            Quos dolor odio id temporibus sed, nostrum doloribus nemo
            voluptatem, qui fuga debitis sit molestias cum.
          </p>
        </Panel>
      </div>
      <div>
        <h2>Get Operators By Position</h2>
        <p>Get information on arknights operators characters by position</p>
        <h3>Request</h3>
        <hr />
        <Panel toggleable class="sub-container">
            <template #header>
              <div>
                <h4>GET</h4>
                <span>/Operators</span>
              </div>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
            </p>
          </Panel>
        <h3>Response</h3>
        <hr />
        <Panel toggleable class="sub-container">
            <template #header>
              <div>
                <h4>GET</h4>
                <span>/Operators</span>
              </div>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
            </p>
          </Panel>
      </div>
      <div>
        <h2>Get Profession</h2>
        <p>Get information on arknights operators characters by position</p>
        <h3>Request</h3>
        <hr />
        <Panel toggleable class="sub-container">
            <template #header>
              <div>
                <h4>GET</h4>
                <span>/Operators</span>
              </div>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
            </p>
          </Panel>
        <h3>Response</h3>
        <hr />
        <Panel toggleable class="sub-container">
            <template #header>
              <div>
                <h4>GET</h4>
                <span>/Operators</span>
              </div>
            </template>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
              orem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti a et ex natus. Quos dolor odio id temporibus sed, nostrum
              doloribus nemo voluptatem, qui fuga debitis sit molestias cum.
            </p>
          </Panel>
      </div> -->
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

@media only screen and (max-width: 700px) {
  .nested-container {
    padding: 1em 0;
  }
}
</style>
