<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="navbar">
          <!-- Logo and Contact Info -->
          <div class="navbar-start">
            <div class="flex flex-col items-center space-x-4">
              <div class="flex items-center space-x-2">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">40100 Dax</span>
              </div>
              <div class="hidden md:flex items-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-sm">07.61.58.18.12</span>
              </div>
            </div>
          </div>
          
          <!-- Logo Center -->
          <div class="navbar-center">
            <div class="text-center">
              <img src="/assets/images/logo.svg" alt="Coralie Beauté Logo" class="mx-auto h-12 w-auto mb-1" />
              <div class="text-xl font-semibold">Coralie Beauté</div>
              <div class="text-xs text-gray-600">Esthéticienne à domicile</div>
            </div>
          </div>

          <!-- Menu Button -->
          <div class="navbar-end">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                <span class="ml-2">MENU</span>
              </label>
              <ul tabindex="0" class="dropdown-content menu p-2 bg-pink-soft shadow rounded-box w-52 mt-4">
                <li><a @click="scrollToSection('services')" class="transition-shadow hover:shadow-lg">Prestations de services</a></li>
                <li><a @click="scrollToSection('presentation')" class="transition-shadow hover:shadow-lg">Présentation personnelle</a></li>
                <li><a @click="scrollToSection('tarifs')" class="transition-shadow hover:shadow-lg">Tarifs prestations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">

      <!-- Services Section -->
      <section id="services" class="mb-20">
        <h2 class="section-title">Mes services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.title" class="service-card">
            <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover">
            <div class="p-4 text-center">
              <h3 class="font-semibold text-lg">{{ service.title }}</h3>
              <p v-if="service.subtitle" class="text-sm text-gray-600">{{ service.subtitle }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Presentation Section -->
      <section id="presentation" class="mb-20 bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="text-center mb-6">
              <img src="/assets/images/logo.svg" alt="Coralie Beauté Logo" class="mx-auto h-16 w-auto mb-1" />
              <h2 class="text-3xl font-bold">Coralie Beauté</h2>
              <p class="text-lg text-gray-600">Esthéticienne à domicile</p>
            </div>
            
            <div class="space-y-4 text-left">
              <p class="text-center italic">
                Bonjour et bienvenue à toutes, chez :<br>
                Coralie Beauté, "La beauté vient à vous !"<br>
                Je me présente, BRIBET Coralie.
              </p>

              <p>
                J'ai toujours eu le goût pour le bien-être et l'esthétique. Par conséquent, j'aimerais vous 
                partager ma passion, ma créativité, ma minutie et mes capacités à réaliser les prestations 
                que je vous propose. Chacune de celles-ci seront personnalisées selon vos envies, vos 
                attentes et également vos besoins.
              </p>
              
              <p>
                En travaillant en institut, j'ai compris à quel point chaque cliente venait chercher plus qu'un 
                soin : celle-ci venait juste chercher un moment pour elle, une pause dans sa journée, un 
                regard bienveillant.
              </p>
              
              <p>
                Mais beaucoup me disait : "J'aimerais tant que quelqu'un vienne chez moi, je n'ai jamais le 
                temps de prendre du temps pour moi et de me déplacer."
              </p>
              
              <p class="font-semibold">C'est là que l'idée est née :</p>
              
              <p>
                Et si je portais le bien-être directement aux domiciles des clientes ?<br>
                Je travaille avec des produits qui ont une odeur agréablement parfumée et qui sont efficaces, 
                ainsi que de qualités.
              </p>
              
              <p>
                Une parenthèse de douceur et de tendresse dans votre petit espace cocooning.<br>
                Mon objectif étant de prendre soin de vous, tout en étant à votre entière écoute !
              </p>
              
              <p>
                Ma table et tout mon petit matériel professionnel prendront leurs places dans la pièce de 
                votre maison où vous vous sentirez le mieux, afin que les prestations se passent dans un 
                environnement sain, agréable et serein.
              </p>
              
              <p class="font-semibold">
                Je me situe à Dax même et vient à votre domicile jusqu'à 30km maximum !<br>
                N'hésitez pas à me contacter et à consulter mes réseaux !
              </p>
            </div>
          </div>
          
          <div class="flex justify-center">
            <div class="w-full max-w-md">
              <img src="/assets/images/presentation.jpg" 
                   alt="Coralie BRIBET" 
                   class="rounded-lg shadow-xl w-full">
            </div>
          </div>
        </div>
      </section>

      <!-- Prices Section -->
      <section id="tarifs" class="mb-20">
        <h2 class="section-title">Tarifs prestations</h2>
        
        <div class="mb-8 text-center bg-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-bold mb-4">Horaires</h3>
          <p class="text-lg">Du lundi au vendredi : <span class="font-semibold">9h - 18h</span></p>
          <p class="text-lg">Samedi : <span class="font-semibold">9h - 16h</span></p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Column 1 -->
          <div class="space-y-8">
            <!-- Epilations visage -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Épilations visage</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Création ligne sourcils (20min)</span><span class="font-semibold">11€</span></li>
                <li class="flex justify-between"><span>• Sourcils entretien (15min)</span><span class="font-semibold">9€</span></li>
                <li class="flex justify-between"><span>• Lèvres (15min)</span><span class="font-semibold">7€</span></li>
                <li class="flex justify-between"><span>• Menton (15min)</span><span class="font-semibold">8€</span></li>
              </ul>
            </div>

            <!-- Forfaits epilations visage -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Forfaits épilations visage</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Sourcils + lèvres (25min)</span><span class="font-semibold">15€</span></li>
                <li class="flex justify-between"><span>• Visage complet (30min)</span><span class="font-semibold">22€</span></li>
              </ul>
            </div>

            <!-- Epilations zone unique corps -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Épilations zone unique corps</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Demi-bras (20min)</span><span class="font-semibold">14€</span></li>
                <li class="flex justify-between"><span>• Bras entiers (30min)</span><span class="font-semibold">17€</span></li>
                <li class="flex justify-between"><span>• Aisselles (15min)</span><span class="font-semibold">10€</span></li>
                <li class="flex justify-between"><span>• Demi-jambes (20min)</span><span class="font-semibold">17€</span></li>
                <li class="flex justify-between"><span>• Jambes (35min)</span><span class="font-semibold">21€</span></li>
                <li class="flex justify-between"><span>• Jambe complètes (30min)</span><span class="font-semibold">25€</span></li>
                <li class="flex justify-between"><span>• Cuisses (30min)</span><span class="font-semibold">19€</span></li>
                <li class="flex justify-between"><span>• Maillot classique (15min)</span><span class="font-semibold">10€</span></li>
                <li class="flex justify-between"><span>• Maillot brésilien/échancré (20min)</span><span class="font-semibold">15€</span></li>
                <li class="flex justify-between"><span>• Maillot semi-intégral (25min)</span><span class="font-semibold">23€</span></li>
                <li class="flex justify-between"><span>• Maillot intégral (30min)</span><span class="font-semibold">25€</span></li>
                <li class="flex justify-between"><span>• Interfessier (10min)</span><span class="font-semibold">7€</span></li>
                <li class="flex justify-between"><span>• Fesses (20min)</span><span class="font-semibold">12€</span></li>
              </ul>
            </div>

            <!-- Forfaits epilations corps -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Forfaits épilations corps</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• ½ jambes + maillot classique ou aisselles (30min)</span><span class="font-semibold">22€</span></li>
                <li class="flex justify-between"><span>• ½ jambes + maillot classique + aisselles (45min)</span><span class="font-semibold">31€</span></li>
                <li class="flex justify-between"><span>• ½ jambes + maillot brésilien/échancré + aisselles (45min)</span><span class="font-semibold">39€</span></li>
                <li class="flex justify-between"><span>• ½ jambes + maillot semi-intégral + aisselles (1h)</span><span class="font-semibold">44€</span></li>
                <li class="flex justify-between"><span>• ½ jambes + maillot intégral + aisselles (1h)</span><span class="font-semibold">46€</span></li>
                <li class="flex justify-between"><span>• Jambes complètes + maillot classique ou aisselles (45min)</span><span class="font-semibold">31€</span></li>
                <li class="flex justify-between"><span>• Jambes complètes + maillot classique + aisselles (1h)</span><span class="font-semibold">37€</span></li>
                <li class="flex justify-between"><span>• Jambes complètes + maillot brésilien/échancré + aisselles (1h)</span><span class="font-semibold">46€</span></li>
                <li class="flex justify-between"><span>• Jambes complètes + maillot semi-intégral + aisselles (1h15)</span><span class="font-semibold">51€</span></li>
                <li class="flex justify-between"><span>• Jambes complètes + maillot intégral + aisselles (1h15)</span><span class="font-semibold">55€</span></li>
              </ul>
            </div>

            <!-- Massages corps -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Massages corps</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Modelage ciblé 1 zone (30min)</span><span class="font-semibold">30€</span></li>
                <li class="flex justify-between"><span>• Modelage ciblé 2 zones ou corps complet (1h)</span><span class="font-semibold">50€</span></li>
                <li class="flex justify-between"><span>• Modelage corps complet + cuir chevelu (1h30)</span><span class="font-semibold">65€</span></li>
              </ul>
            </div>

            <!-- Soins du visage -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Soins du visage</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Hydratation (45min)</span><span class="font-semibold">40€</span></li>
                <li class="flex justify-between"><span>• Nettoyage en profondeur (1h)</span><span class="font-semibold">58€</span></li>
                <li class="flex justify-between"><span>• Traitement anti-âge (1h15)</span><span class="font-semibold">62€</span></li>
              </ul>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-8">
            <!-- Beaute du regard -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Beauté du regard</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Rehaussement de cils (45min)</span><span class="font-semibold">41€</span></li>
                <li class="flex justify-between"><span>• Teinture cils (20min)</span><span class="font-semibold">12€</span></li>
                <li class="flex justify-between"><span>• Teinture sourcils (20min)</span><span class="font-semibold">12€</span></li>
              </ul>
            </div>

            <!-- Maquillages -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Maquillages</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Maquillage flash (20min)</span><span class="font-semibold">15€</span></li>
                <li class="flex justify-between"><span>• Maquillage jour (30min)</span><span class="font-semibold">25€</span></li>
                <li class="flex justify-between"><span>• Maquillage soir (45min/1h)</span><span class="font-semibold">35€</span></li>
                <li class="flex justify-between"><span>• Maquillage mariée (1h)</span><span class="font-semibold">45€</span></li>
              </ul>
            </div>

            <!-- Beaute mains/pieds -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Beauté mains / pieds</h3>
              <ul class="space-y-2">
                <li class="flex justify-between">
                  <span>• Manucure / Pédicure express (30min)<br>
                  <small class="text-gray-600">Préparation d'ongles, gommage, crème</small></span>
                  <span class="font-semibold">30€</span>
                </li>
                <li class="flex justify-between">
                  <span>• Manucure / Pédicure complète (1h)<br>
                  <small class="text-gray-600">Préparation d'ongles, gommage, modelage, masque hydratant</small></span>
                  <span class="font-semibold">43€</span>
                </li>
                <li class="flex justify-between"><span>• Pose de vernis classique seule (15min)</span><span class="font-semibold">10€</span></li>
                <li class="flex justify-between"><span>• Préparation d'ongles + pose de vernis classique (30min)</span><span class="font-semibold">15€</span></li>
              </ul>
            </div>

            <!-- Semi-permanent -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Semi-permanent</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Semi-permanent mains (1h)</span><span class="font-semibold">30€</span></li>
                <li class="flex justify-between"><span>• Semi-permanent pieds (45min)</span><span class="font-semibold">25€</span></li>
                <li class="flex justify-between"><span>• Semi-permanent mains et pieds (2h)</span><span class="font-semibold">50€</span></li>
                <li class="flex justify-between"><span>• Dépose semi-permanent (20min)</span><span class="font-semibold">15€</span></li>
              </ul>
            </div>

            <!-- Pose gel -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Pose gel</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• Chablon + gel couleur (2h)</span><span class="font-semibold">50€</span></li>
                <li class="flex justify-between"><span>• Capsules américaines avec gel couleur (1h30)</span><span class="font-semibold">45€</span></li>
                <li class="flex justify-between"><span>• Remplissage gel chablon (1h15)</span><span class="font-semibold">32€</span></li>
                <li class="flex justify-between"><span>• Dépose gel (45min)</span><span class="font-semibold">17€</span></li>
                <li class="flex justify-between"><span>• Dépose capsules américaines (30min)</span><span class="font-semibold">13€</span></li>
              </ul>
            </div>

            <!-- Nail art -->
            <div class="price-table">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">Nail art</h3>
              <ul class="space-y-2">
                <li class="flex justify-between"><span>• French 10 ongles</span><span class="font-semibold">+10€</span></li>
                <li class="flex justify-between"><span>• French / ongle</span><span class="font-semibold">+1€</span></li>
                <li class="flex justify-between"><span>• Baby-boomer 10 ongles</span><span class="font-semibold">+10€</span></li>
                <li class="flex justify-between"><span>• Baby-boomer / ongle</span><span class="font-semibold">+1€</span></li>
                <li class="flex justify-between"><span>• Paillettes & strass</span><span class="font-semibold">Sur devis</span></li>
                <li class="flex justify-between"><span>• Nail art simple</span><span class="font-semibold">+2€/doigt</span></li>
                <li class="flex justify-between"><span>• Nail art complexe</span><span class="font-semibold">Sur devis</span></li>
                <li class="flex justify-between"><span>• Ongle cassé < 1 semaine</span><span class="font-semibold">Gratuit</span></li>
                <li class="flex justify-between"><span>• Ongle cassé > 1 semaine</span><span class="font-semibold">+2€/doigt</span></li>
              </ul>
              <p class="text-sm text-center italic mt-4">Nail art sur devis, envoyer en photo pour définir le prix</p>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div class="mt-12 bg-pink-soft rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-center">Prenez rendez-vous dès maintenant !</h3>
          <ul class="space-y-2">
            <li>1. Prix fixes sans frais de déplacement pour Dax et ses 5km aux alentours</li>
            <li>2. Supplément de 5€ au-delà de 5km de déplacement</li>
            <li>3. Prestation de 50€ minimum, sans frais de déplacement supplémentaires (30km max)</li>
          </ul>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-neutral text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 class="text-xl font-bold mb-4">Coralie Beauté</h3>
            <p class="text-gray-300">Esthéticienne à domicile</p>
            <p class="text-gray-300">40100 Dax</p>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">Contact</h3>
            <p class="text-gray-300 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              07.61.58.18.12
            </p>
            <p class="text-gray-300 mb-2">
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:coraliebribet@icloud.com" class="underline hover:text-pink-medium transition-colors">
                coraliebribet@icloud.com
              </a>
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-bold mb-4">Suivez-moi</h3>
            <div class="flex justify-center md:justify-start space-x-4">
              <a href="https://www.tiktok.com/@coraliebeaute_" target="_blank" class="hover:text-pink-medium transition-colors">
                <span class="text-2xl">📱</span> TikTok
              </a>
              <a href="https://www.instagram.com/coraliebeaute_" target="_blank" class="hover:text-pink-medium transition-colors">
                <span class="text-2xl">📷</span> Instagram
              </a>
              <a href="https://www.facebook.com/people/Coraliebribet_/100068964812601/" target="_blank" class="hover:text-pink-medium transition-colors">
                <span class="text-2xl">👥</span> Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-8 pt-8 border-t border-gray-700">
          <p class="text-gray-400">&copy; 2025 Coralie Beauté. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Épilations visages/corps',
    image: '/assets/images/services/epilation.jpg',
  },
  {
    title: 'Maquillages',
    image: '/assets/images/services/maquillage.jpg',
  },
  {
    title: 'Beauté du regard',
    subtitle: '(rehaussements, teintures)',
    image: '/assets/images/services/beaute_regard.jpg',
  },
  {
    title: 'Soins visages',
    image: '/assets/images/services/soins_visage.jpg',
  },
  {
    title: 'Massages corps',
    image: '/assets/images/services/massages_corps.jpg',
  },
  {
    title: 'Beauté mains/pieds',
    image: '/assets/images/services/beaute_mains_pieds.jpg',
  },
  {
    title: 'Onglerie',
    image: '/assets/images/services/onglerie.jpg',
  },
])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
