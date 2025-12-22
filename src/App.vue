<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import ConsentBanner from './components/ConsentBanner.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    
    <RouterView />
    
    <Footer />
    
    <ConsentBanner />
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
