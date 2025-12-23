<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)

onMounted(() => {
  // Check if user has already made a consent decision
  const consentGiven = localStorage.getItem('matomo-consent')
  if (consentGiven === null) {
    showBanner.value = true
  } else if (consentGiven === 'true') {
    // User previously accepted, apply consent
    if (window._paq) {
      window._paq.push(['setConsentGiven'])
      window._paq.push(['setCookieConsentGiven'])
      window._paq.push(['rememberConsentGiven', 8760]) // Remember for 1 year (365 * 24 hours)
      window._paq.push(['rememberCookieConsentGiven', 8760])
    }
  }
})

const acceptTracking = () => {
  // Give consent to Matomo
  if (window._paq) {
    window._paq.push(['setConsentGiven'])
    window._paq.push(['setCookieConsentGiven'])
    window._paq.push(['rememberConsentGiven', 8760]) // Remember for 1 year
    window._paq.push(['rememberCookieConsentGiven', 8760])
  }
  
  // Store decision in localStorage
  localStorage.setItem('matomo-consent', 'true')
  showBanner.value = false
}

const declineTracking = () => {
  // Store decline decision in localStorage
  localStorage.setItem('matomo-consent', 'false')
  showBanner.value = false
}
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-pink-medium z-50"
    >
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-lg font-bold mb-2">
              🍪 Respect de votre vie privée
            </h3>
            <p class="text-gray-700">
              Nous utilisons Matomo pour analyser l'utilisation de notre site et améliorer votre expérience. 
              Vos données restent anonymes et ne sont jamais partagées avec des tiers.
            </p>
          </div>
          <div class="flex gap-3 flex-shrink-0">
            <button
              class="btn btn-outline btn-sm"
              @click="declineTracking"
            >
              Refuser
            </button>
            <button
              class="btn bg-pink-medium hover:bg-pink-dark text-white btn-sm"
              @click="acceptTracking"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
