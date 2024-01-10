<script setup>
import Panel from "primevue/panel";

const GET_PROPS = [
  {
    name: "limit",
    type: "int",
    description: "A query that returns set amount of operators",
    example: "operators?limit=4",
  },
  {
    name: "offset",
    type: "int",
    description: "A query that offsets the operators returned",
    example: "operators?offset=2",
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
      <header>
        <h2>Get Operators</h2>
      </header>
      <div>
        <p>Get information on arknights operators characters</p>
      </div>
      <div>
        <h3>Endpoint</h3>
        <div class="code">
            <code>https://www.arknightsapi.com/v1/operators</code>
        </div>
      </div>
      <h3>Request</h3>
      <hr />
      <Panel toggleable class="sub-container">
        <template #header>
          <div class="header-container">
            <div>
              <h4>GET</h4>
            </div>
            <div>
              <span>/operators</span>
            </div>
          </div>
        </template>
        <div v-for="item in GET_PROPS" class="prop-container">
          <div>
            <h4>{{ item.name }}</h4>
            <span>{{ item.type }}</span>
          </div>
          <p>{{ item.description }}</p>
          <div class="code">
            <code>{{ item.example }}</code>
          </div>
        </div>
      </Panel>
      <h3>Response</h3>
      <hr />
      <p>A set of operators</p>
      <Panel toggleable class="sub-container">
        <template #header>
          <div class="header-container">
            <div>
              <h4>operators</h4>
            </div>
            <div>
              <span>/Operators</span>
            </div>
          </div>
        </template>
        <div v-for="item in OP_OBJECT_PROP" class="prop-container">
          <div>
            <h4>{{ item.name }}</h4>
            <span>{{ item.type }} </span>
          </div>
          <p>{{ item.description }}</p>
        </div>
      </Panel>
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
</style>
