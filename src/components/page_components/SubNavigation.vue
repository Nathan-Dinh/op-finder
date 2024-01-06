<script setup>
import { ref, defineProps } from "vue";
import { RouterLink } from "vue-router";
import { useCurrentTab } from "../../store/useCurrentTab";

const props = defineProps(['items'])
const currentOptionTab = ref(useCurrentTab((state) => state.currentOptionTab));
</script>

<template>
  <aside class="container">
    <header class="title-container">
      <div>
        <img src="/Rhodes_Island.webp" alt="icon" class="icon" />
      </div>
    </header>
    <hr />
    <nav class="nav-container">
      <router-link
        @click="$emit('click-handler',items.name)"
        class="pushable tooltip"
        :to="items.path"
        v-for="items in props.items"
      >
        <div
          :class="currentOptionTab === items.name ? 'front highlighted' : 'front'"
        >
          <v-icon :name="items.icon" scale="2" />
          <span class="tooltiptext">{{ items.tooltip }}</span>
        </div>
      </router-link>
    </nav>
  </aside>
</template>

<style scoped>
.icon {
  width: 3.2em;
}

.container{
  height: 80vh;
  padding: 0.3em;
  background: #1f2d40;
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid #304562;
  border-radius: 5px;
}
.title-container {
  display: flex;
  justify-content: center;
  padding: 1em;
  font-weight: bold;
}
.highlighted {
  color: white !important;
  background-color: rgb(6, 60, 92) !important;
}
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: lighter;
}

.side-nav-links:hover {
  color: white;
}
.pushable {
  color: rgba(255, 255, 255, 0.87);
  background: hsl(212, 31%, 11%);
  border-radius: 12px;
  margin: 1em 0;
  cursor: pointer;
}

.front {
  display: block;
  padding: 1em;
  border-radius: 12px;
  background: #192535;
  border: 0.5px solid #25354b;
  color: rgb(119, 116, 116);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  color: white;
}

.pushable:active .front {
  transform: translateY(-2px);
}

</style>
