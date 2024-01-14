<script setup>
import ResponseTemplate from "./ResponseTemplate.vue";
import RequestTemplate from "./RequestTemplate.vue";
import PreCodeExample from "./PreCodeExample.vue";
import PropWithCode from "./PropWithCode.vue";

const COUNT_PROP = {
  name: "count",
  type: "int",
  description: "returns the total number of operators",
  codeSnippet: '"count": 5',
};

const GET_PROPS = [
  {
    name: "limit",
    type: "int",
    description: "A query that returns set amount of operators",
    example: "operators/profession/:profession?limit=4",
  },
  {
    name: "offset",
    type: "int",
    description: "A query that offsets the operators returned",
    example: "operators/profession/:profession?offset=2",
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
    <section>
      <div>
        <div>
          <p>
            Get information on arknights operators characters by the operators
            profession
          </p>
        </div>
        <div>
          <h3>Endpoint</h3>
          <div class="code">
            <code
              >https://www.arknightsapi.com/v1/operators/profession/:profession</code
            >
          </div>
        </div>
      </div>
      <div>
        <h3>Request</h3>
        <hr />
        <RequestTemplate :items="GET_PROPS" />
      </div>
      <div>
        <h3>Response</h3>
        <hr />
        <p>A set of operators that contain searched profession</p>
        <PreCodeExample />
        <PropWithCode :item="COUNT_PROP" />
        <ResponseTemplate :items="OP_OBJECT_PROP" />
      </div>
    </section>
</template>

<style scoped>
p {
  font-size: large;
  margin-bottom: 1em;
}

hr {
  margin-bottom: 1em;
}

:deep(.header-container) {
  padding: 1em 0;
}
</style>
