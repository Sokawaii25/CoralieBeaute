<script setup>
</script>

<template>
  <main class="container mx-auto px-4 py-12">
    <div class="text-center px-4">
      <h1 class="text-9xl font-bold text-pink-300">
        404
      </h1>
      <h2 class="text-4xl font-semibold text-pink-400 mt-4">
        Page introuvable
      </h2>
      <p class="text-lg text-base-content/70 mt-6 max-w-md mx-auto">
        Désolée, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <router-link 
        to="/" 
        class="btn btn-primary mt-8 bg-pink-300 hover:bg-pink-400 border-0 text-white"
      >
        Retour à l'accueil
      </router-link>
    </div>
  </main>
</template>

<style scoped>
</style>