<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'

import { RouterView } from 'vue-router'
</script>

<template>
   <Header/>   
   <RouterView/>
   <Footer/>
</template>

<style scoped>

</style>

