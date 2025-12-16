<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    
    <RouterView />
    
    <Footer />
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
