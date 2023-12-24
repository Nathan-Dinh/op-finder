<script setup>
import { ref } from 'vue'
const op = ref('')
</script>

<template>
  <div>
    <form @submit.prevent  method="get" class="search-box">
      <div class="user-box">
        <label for="operatorName"></label>
        <input v-model="op" type="text" name="operatorName" />
      </div>
      <div>
        <button @click="$emit('op-name-tracker', op)" class="button-31">search</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search-box{
  display: flex;
  align-items: center;
}
.search-box .user-box input {
  margin: 0.8em;
  width: 100%;
  font-size: 42px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.button-31 {
  background-color: #222;
  border-radius: 5px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 24px;
  line-height: 1.5;
  margin: 0 2em;
  cursor: pointer;
  padding: 9px 20px 8px;
}
.button-31:hover,
.button-31:focus {
  opacity: .75;
}
</style>
