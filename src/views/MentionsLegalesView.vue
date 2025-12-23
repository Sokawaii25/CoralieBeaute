<script setup>
import { ref } from 'vue'
import GoToTopButton from '@/components/GoToTopButton.vue'

const currentConsent = ref(localStorage.getItem('matomo-consent'))
const showMessage = ref(false)

const updateConsent = (consent) => {
  if (consent) {
    if (window._paq) {
      window._paq.push(['setConsentGiven'])
      window._paq.push(['setCookieConsentGiven'])
      window._paq.push(['rememberConsentGiven', 8760]) // 365 * 24 hours
      window._paq.push(['rememberCookieConsentGiven', 8760])
    }
    localStorage.setItem('matomo-consent', 'true')
    currentConsent.value = 'true'
  } else {
    if (window._paq) {
      window._paq.push(['forgetConsentGiven'])
      window._paq.push(['forgetCookieConsentGiven'])
    }
    localStorage.setItem('matomo-consent', 'false')
    currentConsent.value = 'false'
  }
  showMessage.value = true
  setTimeout(() => showMessage.value = false, 3000)
}
</script>

<template>
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">
        Mentions Légales
      </h1>

      <!-- Editor Information -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Éditeur du site
        </h2>
        <div class="space-y-2">
          <p><strong>Nom de l'entreprise :</strong> Coralie Beauté</p>
          <p><strong>Responsable :</strong> Coralie BRIBET</p>
          <p><strong>Adresse :</strong> 40100 Dax, France</p>
          <p><strong>Téléphone :</strong> 07.61.58.18.12</p>
          <p>
            <strong>Email :</strong> <a
              href="mailto:coraliebribet@icloud.com"
              class="text-pink-medium hover:underline"
            >coraliebribet@icloud.com</a>
          </p>
        </div>
      </section>

      <!-- Host Information -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Hébergement
        </h2>
        <div class="space-y-2">
          <p><strong>Hébergeur :</strong> Informagic'Landes</p>
          <p><strong>Adresse :</strong> 40180 Saint Pandelon, France</p>
          <p><strong>Téléphone :</strong> 06.95.96.28.42</p>
          <p>
            <strong>Site web :</strong> <a
              href="https://informagic-landes.fr"
              class="text-pink-medium hover:underline"
            >https://informagic-landes.fr</a>
          </p>
        </div>
      </section>

      <!-- Intellectual Property -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Propriété intellectuelle
        </h2>
        <p class="mb-4">
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
          et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
          les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
        <p>
          La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il 
          soit, est formellement interdite sauf autorisation expresse du directeur de la publication.
        </p>
      </section>

      <!-- Personal Data -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Protection des données personnelles
        </h2>
        <p class="mb-4">
          Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
          Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
          de rectification, de suppression et d'opposition aux données personnelles vous concernant.
        </p>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse : 
          <a
            href="mailto:coraliebribet@icloud.com"
            class="text-pink-medium hover:underline"
          >coraliebribet@icloud.com</a> 
          ou par courrier postal à l'adresse indiquée ci-dessus.
        </p>
      </section>

      <!-- Cookies -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Cookies et statistiques
        </h2>
        <p class="mb-4">
          Ce site utilise Matomo, une solution d'analyse web respectueuse de la vie privée, pour 
          comprendre comment les visiteurs utilisent notre site et améliorer votre expérience.
        </p>
        
        <h3 class="text-lg font-semibold mb-2">
          Données collectées
        </h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Pages visitées et temps passé sur chaque page</li>
          <li>Provenance des visiteurs (moteur de recherche, lien direct, etc.)</li>
          <li>Type d'appareil et navigateur utilisé</li>
          <li>Interactions avec les liens et boutons</li>
        </ul>

        <h3 class="text-lg font-semibold mb-2">
          Protection de vos données
        </h3>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Vos données sont hébergées en France par Informagic'Landes</li>
          <li>Votre adresse IP est anonymisée</li>
          <li>Aucune donnée n'est partagée avec des tiers</li>
          <li>Les données sont conservées pendant 13 mois maximum</li>
        </ul>

        <div class="bg-pink-soft p-4 rounded-lg">
          <h3 class="text-lg font-semibold mb-3">
            Gérer vos préférences
          </h3>
          <p class="mb-3">
            <strong>Statut actuel :</strong> 
            <span v-if="currentConsent === 'true'" class="text-green-600 font-semibold">✓ Accepté</span>
            <span v-else-if="currentConsent === 'false'" class="text-red-600 font-semibold">✗ Refusé</span>
            <span v-else class="text-gray-600 font-semibold">Pas encore défini</span>
          </p>
          
          <div class="flex gap-3">
            <button
              class="btn bg-pink-medium hover:bg-pink-dark text-white btn-sm"
              @click="updateConsent(true)"
            >
              Accepter le suivi
            </button>
            <button
              class="btn btn-outline btn-sm"
              @click="updateConsent(false)"
            >
              Refuser le suivi
            </button>
          </div>

          <Transition name="fade">
            <div
              v-if="showMessage"
              class="mt-3 p-2 bg-green-100 text-green-800 rounded"
            >
              ✓ Vos préférences ont été enregistrées
            </div>
          </Transition>
        </div>
      </section>

      <!-- Credits -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Crédits
        </h2>
        <div class="space-y-2">
          <p><strong>Conception et réalisation :</strong> Coralie Beauté</p>
          <p><strong>Photographies :</strong> © Coralie Beauté</p>
        </div>
      </section>

      <!-- Limitation of Liability -->
      <section class="mb-8 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">
          Limitation de responsabilité
        </h2>
        <p class="mb-4">
          Coralie Beauté s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour 
          des informations diffusées sur ce site. Toutefois, Coralie Beauté ne peut garantir l'exactitude, 
          la précision ou l'exhaustivité des informations mises à disposition sur ce site.
        </p>
        <p>
          En conséquence, Coralie Beauté décline toute responsabilité pour toute imprécision, inexactitude 
          ou omission portant sur des informations disponibles sur ce site.
        </p>
      </section>

      <!-- Back to Home -->
      <div class="text-center mt-12">
        <router-link
          to="/"
          class="inline-block bg-gradient-to-br from-pink-dark to-pink-medium text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
        >
          Retour à l'accueil
        </router-link>
      </div>
    </div>
  </main>

  <GoToTopButton />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>