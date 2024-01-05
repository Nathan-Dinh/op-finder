<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';

  const op = ref('')
</script>

<template>
  <div>
    <form @submit.prevent  method="get" class="search-box">
      <div class="user-box">
        <label for="operatorName"></label>
        <InputText v-model="op" type="text" name="operatorName" />
      </div>
      <div>
        <Button @click="$emit('event-click-handler', op)" class="button-31" label="search"/>
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
  margin: 1em;
  width: 100%;
  font-size: 32px;
  color: #fff;
}
.button-31 {

  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 1.2em;
  line-height: 1.5;
  margin: 0 2em;
  cursor: pointer;
  padding: 5px 20px 5px;
}
.button-31:hover,
.button-31:focus {
  opacity: .75  ;
}
</style>
