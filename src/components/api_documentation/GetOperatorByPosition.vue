<script setup>
import Panel from "primevue/panel";
import ResponseTemplate from "./ResponseTemplate.vue";
import RequestTemplate from "./RequestTemplate.vue";
import PreCodeExample from "./PreCodeExample.vue";

const GET_PROPS = [
  {
    name: "limit",
    type: "int",
    description: "A query that returns set amount of operators",
    example: "operators/position/:position?limit=4",
  },
  {
    name: "offset",
    type: "int",
    description: "A query that offsets the operators returned",
    example: "operators/position/:position?offset=2",
  },
];

const OP_OBJECT_PROP = [
  { name: "imgUrl", type: "string", description: "The operator image url" },
  { name: "name", type: "string", description: "The name of the operator" },
  {
    name: "profession",
    type: "string",
    description:
      "The operator profession Example: Guard, Caster, Support, Specialist, Medic, and ect",
  },
  { name: "archetype", type: "string", description: "The operators archetype" },
  {
    name: "position",
    type: "string",
    description: "The position the operator uses",
  },
  {
    name: "attackType",
    type: "string",
    description: "The operators attack type",
  },
  {
    name: "recruitmentTag",
    type: "array",
    description: "The operators recruitment tags",
  },
  {
    name: "profile",
    type: "string",
    description: "The profile of the operators",
  },
];
</script>

<template>
  <div>
    <section>
      <div>
        <p>Get information on arknights operators characters by the operators position</p>
      </div>
      <div>
        <h3>Endpoint</h3>
        <div class="code">
            <code>https://www.arknightsapi.com/v1/operators/position/:position</code>
        </div>
      </div>
      <h3>Request</h3>
      <hr />
      <RequestTemplate :items="GET_PROPS" />
      <h3>Response</h3>
      <hr />
      <p>A set of operators that contain searched position</p>
      <PreCodeExample/>
      <div class="prop-container">
        <div>
          <h4>count</h4>
          <span>int</span>
        </div>
        <p>returns the total number of operators</p>
        <div class="code">
          <code>"count": 5</code>
        </div>
      </div>
      <ResponseTemplate :items="OP_OBJECT_PROP" />
    </section>
  </div>
</template>

<style scoped>
.code {
  height: auto; /* Allow the height to adjust based on the content */
  border: 1px solid #000; /* Add a border for the box */
  border-radius: 3px;
  background:rgb(78, 78, 78);
  padding: 10px; /* Add padding inside the box */
  word-wrap: break-word;
}
.prop-container {
  padding: 1em;
}
.prop-container div {
  display: flex;
  align-items: center;
}
.prop-container div h4 {
  padding: 0.2em 0.5em 0.2em 0.5em;
  background: rgb(142, 156, 165);
  border-radius: 5px;
  margin-right: 0.5em;
}
.sub-container {
  margin: 1em 0 1em 0;
}
.sub-container .header-container {
  display: flex;
}
.sub-container .header-container div {
  display: flex;
  padding-left: 0.5em;
}

:deep(.header-container){
    padding:1em 0;

}
</style>
