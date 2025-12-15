<script setup>
import GoToTopButton from '@/components/GoToTopButton.vue';
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
          Cookies
        </h2>
        <p>
          Ce site n'utilise pas de cookies de traçage. Seuls des cookies techniques nécessaires au 
          bon fonctionnement du site peuvent être utilisés. Ces cookies ne collectent aucune donnée 
          personnelle et ne nécessitent pas de consentement préalable.
        </p>
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
/*  */
</style>