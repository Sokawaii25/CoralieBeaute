<script setup>
import { ref, computed } from 'vue'
import GoToTopButton from '@/components/GoToTopButton.vue'
import { useMatomoTracking } from '@/composables/useMatomo'

const { trackContact } = useMatomoTracking()

const handleEmailClick = () => {
  trackContact('Email', 'coraliebribet@icloud.com')
}

const services = ref([
  {
    title: 'Épilations visages/corps',
    image: new URL('../assets/images/services/epilation.jpg', import.meta.url).href,
    pricesAnchor: 'epilation-visage-corps',
  },
  {
    title: 'Maquillages',
    pricesAnchor: 'maquillage',
    image: new URL('../assets/images/services/maquillage.jpg', import.meta.url).href,
  },
  {
    title: 'Beauté du regard',
    subtitle: '(réhaussements, teintures)',
    pricesAnchor: 'beaute-regard',
    image: new URL('../assets/images/services/beaute_regard.jpg', import.meta.url).href,
  },
  {
    title: 'Soins visages',
    pricesAnchor: 'soin-visage',
    image: new URL('../assets/images/services/soins_visage.jpg', import.meta.url).href,
  },
  {
    title: 'Massages corps',
    pricesAnchor: 'massage-corps',
    image: new URL('../assets/images/services/massages_corps.jpg', import.meta.url).href,
  },
  {
    title: 'Beauté mains/pieds',
    pricesAnchor: 'beaute-mains-pieds',
    image: new URL('../assets/images/services/beaute_mains_pieds.jpg', import.meta.url).href,
  },
  {
    title: 'Onglerie',
    pricesAnchor: 'onglerie',
    image: new URL('../assets/images/services/onglerie.jpg', import.meta.url).href,
  },
])

const prices = ref({
  column_1: [
    {
      category: 'Épilations visage',
      priceAnchor: 'epilation-visage-corps',
      items: [
        { name: 'Création ligne sourcils (20min)', price: 11, reduced_price: 8 },
        { name: 'Sourcils entretien (15min)', price: 9, reduced_price: 'Gratuit !' },
        { name: 'Lèvres (15min)', price: 8, reduced_price: 0 },
        { name: 'Menton (15min)', price: 8, reduced_price: 0 },
      ],
    },
    {
      category: 'Forfaits épilations visage',
      items: [
        { name: 'Sourcils + lèvres (25min)', price: 15, reduced_price: 0 },
        { name: 'Visage complet (30min)', price: 22, reduced_price: 0 },
      ],
    },
    {
      category: 'Épilations zone unique corps',
      items: [
        { name: 'Demi-bras (20min)', price: 14, reduced_price: 0 },
        { name: 'Bras entiers (30min)', price: 17, reduced_price: 0 },
        { name: 'Aisselles (15min)', price: 10, reduced_price: 0 },
        { name: 'Demi-jambes (20min)', price: 17, reduced_price: 0 },
        { name: 'Jambes (35min)', price: 21, reduced_price: 0 },
        { name: 'Jambe complètes (30min)', price: 25, reduced_price: 0 },
        { name: 'Cuisses (30min)', price: 19, reduced_price: 0 },
        { name: 'Maillot classique (15min)', price: 10, reduced_price: 0 },
        { name: 'Maillot brésilien/échancré (20min)', price: 15, reduced_price: 0 },
        { name: 'Maillot semi-intégral (25min)', price: 23, reduced_price: 0 },
        { name: 'Maillot intégral (30min)', price: 25, reduced_price: 0 },
        { name: 'Interfessier (10min)', price: 7, reduced_price: 0 },
        { name: 'Fesses (20min)', price: 12, reduced_price: 0 },
      ],
    },
    {
      category: 'Forfaits épilations corps',
      items: [
        { name: '½ jambes + maillot classique ou aisselles (30min)', price: 22, reduced_price: 0 },
        { name: '½ jambes + maillot classique + aisselles (45min)', price: 31, reduced_price: 0 },
        { name: '½ jambes + maillot brésilien/échancré + aisselles (45min)', price: 39, reduced_price: 0 },
        { name: '½ jambes + maillot semi-intégral + aisselles (1h)', price: 44, reduced_price: 0 },
        { name: '½ jambes + maillot intégral + aisselles (1h)', price: 46, reduced_price: 0 },
        { name: 'Jambes complètes + maillot classique ou aisselles (45min)', price: 31, reduced_price: 0 },
        { name: 'Jambes complètes + maillot classique + aisselles (1h)', price: 37, reduced_price: 0 },
        { name: 'Jambes complètes + maillot brésilien/échancré + aisselles (1h)', price: 46, reduced_price: 0 },
        { name: 'Jambes complètes + maillot semi-intégral + aisselles (1h15)', price: 51, reduced_price: 0 },
        { name: 'Jambes complètes + maillot intégral + aisselles (1h15)', price: 55, reduced_price: 0 },
      ],
    },
    {
      category: 'Massages corps',
      priceAnchor: 'massage-corps',
      items: [
        { name: 'Modelage ciblé 1 zone (30min)', price: 30, reduced_price: 0 },
        { name: 'Modelage ciblé 2 zones ou corps complet (1h)', price: 50, reduced_price: 0 },
        { name: 'Modelage corps complet + cuir chevelu (1h30)', price: 65, reduced_price: 0 },
      ],
    },
    {
      category: 'Soins du visage',
      priceAnchor: 'soin-visage',
      items: [
        { name: 'Hydratation (45min)', price: 40, reduced_price: 0 },
        { name: 'Nettoyage en profondeur (1h)', price: 58, reduced_price: 0 },
        { name: 'Traitement anti-âge (1h15)', price: 62, reduced_price: 0 },
      ],
    }
    // ... other categories for column 1
  ],
  column_2: [
    {
      category: 'Beauté du regard',
      priceAnchor: 'beaute-regard',
      items: [
        { name: 'Rehaussement de cils (45min)', price: 41, reduced_price: 0 },
        { name: 'Teinture cils (20min)', price: 12, reduced_price: 0 },
        { name: 'Teinture sourcils (20min)', price: 12, reduced_price: 0 },
      ],
    },
    {
      category: 'Maquillages',
      priceAnchor: 'maquillage',
      items: [
        { name: 'Maquillage flash (20min)', price: 15, reduced_price: 0 },
        { name: 'Maquillage jour (30min)', price: 25, reduced_price: 0 },
        { name: 'Maquillage soir (45min/1h)', price: 35, reduced_price: 0 },
        { name: 'Maquillage mariée (1h)', price: 45, reduced_price: 0 },
      ],
    },
    {
      category: 'Beauté mains / pieds',
      priceAnchor: 'beaute-mains-pieds',
      items: [
        { name: 'Manucure / Pédicure express (30min)\nPréparation d\'ongles, gommage, crème', price: 30, reduced_price: 0 },
        { name: 'Manucure / Pédicure complète (1h)\nPréparation d\'ongles, gommage, modelage, masque hydratant', price: 43, reduced_price: 0 },
        { name: 'Pose de vernis classique seule (15min)', price: 10, reduced_price: 0 },
        { name: 'Préparation d\'ongles + pose de vernis classique (30min)', price: 15, reduced_price: 0 },
      ],
    },
    {
      category: 'Semi-permanent',
      priceAnchor: 'onglerie',
      items: [
        { name: 'Semi-permanent mains (1h)', price: 30, reduced_price: 0 },
        { name: 'Semi-permanent pieds (45min)', price: 25, reduced_price: 0 },
        { name: 'Semi-permanent mains et pieds (2h)', price: 50, reduced_price: 0 },
        { name: 'Dépose semi-permanent (20min)', price: 15, reduced_price: 0 },
      ],
    },
    {
      category: 'Pose gel',
      items: [
        { name: 'Chablon + gel couleur (2h)', price: 50, reduced_price: 0 },
        { name: 'Capsules américaines avec gel couleur (1h30)', price: 45, reduced_price: 0 },
        { name: 'Remplissage gel chablon (1h15)', price: 32, reduced_price: 0 },
        { name: 'Dépose gel (45min)', price: 17, reduced_price: 0 },
        { name: 'Dépose capsules américaines (30min)', price: 13, reduced_price: 0 },
      ],
    },
    {
      category: 'Nail art',
      items: [
        { name: 'French 10 ongles', price: '+10€', reduced_price: 0 },
        { name: 'French / ongle', price: '+1€', reduced_price: 0 },
        { name: 'Baby-boomer 10 ongles', price: '+10€', reduced_price: 0 },
        { name: 'Baby-boomer / ongle', price: '+1€', reduced_price: 0 },
        { name: 'Paillettes & strass', price: 'Sur devis', reduced_price: 0 },
        { name: 'Nail art simple', price: '+2€/doigt', reduced_price: 0 },
        { name: 'Nail art complexe', price: 'Sur devis', reduced_price: 0 },
        { name: 'Ongle cassé < 1 semaine', price: 'Gratuit', reduced_price: 0 },
        { name: 'Ongle cassé > 1 semaine', price: '+2€/doigt', reduced_price: '+1€/doigt' },
      ],
    }
    // ... other categories for column 2
  ],
})

const scrollToPrice = (pricesAnchor) => {
  const element = document.getElementById(pricesAnchor)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    })
    
    // Add pulse animation after scrolling
    setTimeout(() => {
      element.classList.add('pulse-highlight')
      setTimeout(() => {
        element.classList.remove('pulse-highlight')
      }, 2000)
    }, 500)
  }
}

// Helper functions for processing price data
const formatPrice = (price) => {
  return typeof price === 'number' ? `${price}€` : price
}

const calculateDiscountPercentage = (originalPrice, reducedPrice) => {
  if (typeof originalPrice !== 'number' || typeof reducedPrice !== 'number') return 0
  if (reducedPrice <= 0 || reducedPrice >= originalPrice) return 0
  return Math.round(((originalPrice - reducedPrice) / originalPrice) * 100)
}

const processItem = (item) => {
  const hasDiscount = item.reduced_price &&
                      (
                        typeof item.reduced_price === 'number' &&
                        item.reduced_price > 0 &&
                        item.reduced_price < item.price
                      ) ||
                      typeof item.reduced_price === 'string'
                      

  return {
    ...item,
    hasDiscount,
    displayPrice: hasDiscount ? formatPrice(item.reduced_price) : formatPrice(item.price),
    originalPriceFormatted: formatPrice(item.price),
    discountPercentage: hasDiscount ? calculateDiscountPercentage(item.price, item.reduced_price) : 0
  }
}

// Computed property that processes all prices once
const processedPrices = computed(() => ({
  column_1: prices.value.column_1.map(category => ({
    ...category,
    items: category.items.map(processItem)
  })),
  column_2: prices.value.column_2.map(category => ({
    ...category,
    items: category.items.map(processItem)
  }))
}))
</script>

<template>
  <main class="container mx-auto px-4 py-12">
    <!-- Services Section -->
    <section
      id="services"
      class="mb-20"
    >
      <h2 class="section-title">
        Mes services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card cursor-pointer hover:scale-105 transition-transform duration-300"
          @click="scrollToPrice(service.pricesAnchor)"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-48 object-cover"
          >
          <div class="p-4 text-center">
            <h3 class="font-semibold text-lg">
              {{ service.title }}
            </h3>
            <p
              v-if="service.subtitle"
              class="text-sm text-gray-600"
            >
              {{ service.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Presentation Section -->
    <section
      id="presentation"
      class="mb-20 bg-white rounded-lg shadow-lg p-8 md:p-12"
    >
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div class="text-center mb-6">
            <img
              src="@/assets/images/logo.svg"
              alt="Coralie Beauté Logo"
              class="mx-auto h-16 w-auto mb-1"
            >
            <h2 class="text-3xl font-bold">
              Coralie Beauté
            </h2>
            <p class="text-lg text-gray-600">
              Esthéticienne à domicile
            </p>
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
            
            <p class="font-semibold">
              C'est là que l'idée est née :
            </p>
            
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
            <img
              src="@/assets/images/presentation.jpg" 
              alt="Coralie BRIBET" 
              class="rounded-lg shadow-xl w-full"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Prices Section -->
    <section
      id="tarifs"
      class="mb-20"
    >
      <h2 class="section-title">
        Tarifs prestations
      </h2>
      
      <div class="mb-8 text-center bg-white rounded-lg shadow-md p-6">
        <h3 class="text-2xl font-bold mb-4">
          Horaires
        </h3>
        <p class="text-lg">
          Du lundi au vendredi : <span class="font-semibold">9h - 18h</span>
        </p>
        <p class="text-lg">
          Samedi : <span class="font-semibold">9h - 16h</span>
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Column 1 -->
        <div class="space-y-8">
          <div
            v-for="column in processedPrices.column_1"
            :id="column.priceAnchor || null"
            :key="column.category"
            class="price-table"
          >
            <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">
              {{ column.category }}
            </h3>
            <ul class="space-y-1.5">
              <li
                v-for="item in column.items"
                :key="item.name"
                class="flex justify-between items-center gap-3 min-h-[32px]"
              >
                <span class="flex-1 leading-snug">• {{ item.name }}</span>
                <span class="flex-shrink-0 flex items-center gap-2">
                  <template v-if="item.hasDiscount">
                    <div
                      v-if="item.discountPercentage > 0"
                      class="badge badge-xs badge-error gap-1 font-semibold"
                    >
                      -{{ item.discountPercentage }}%
                    </div>
                    <span class="text-xs line-through text-gray-400">{{ item.originalPriceFormatted }}</span>
                    <span class="text-base font-bold text-pink-600 min-w-[50px] text-right">{{ item.displayPrice }}</span>
                  </template>
                  <template v-else>
                    <span class="text-base font-semibold text-gray-700 min-w-[50px] inline-block text-right">{{ item.displayPrice }}</span>
                  </template>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="space-y-8">
          <div
            v-for="column in processedPrices.column_2"
            :id="column.priceAnchor || null"
            :key="column.category"
            class="price-table"
          >
            <h3 class="text-xl font-bold mb-4 border-b-2 border-pink-medium pb-2">
              {{ column.category }}
            </h3>
            <ul class="space-y-1.5">
              <li
                v-for="item in column.items"
                :key="item.name"
                class="flex justify-between items-center gap-3 min-h-[32px]"
              >
                <span class="flex-1 leading-snug">• {{ item.name }}</span>
                <span class="flex-shrink-0 flex items-center gap-2">
                  <template v-if="item.hasDiscount">
                    <div
                      v-if="item.discountPercentage > 0"
                      class="badge badge-xs badge-error gap-1 font-semibold"
                    >
                      -{{ item.discountPercentage }}%
                    </div>
                    <span class="text-xs line-through text-gray-400">{{ item.originalPriceFormatted }}</span>
                    <span class="text-base font-bold text-pink-600 min-w-[50px] text-right">{{ item.displayPrice }}</span>
                  </template>
                  <template v-else>
                    <span class="text-base font-semibold text-gray-700 min-w-[50px] inline-block text-right">{{ item.displayPrice }}</span>
                  </template>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="mt-12 bg-pink-soft rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold mb-4 text-center">
          Prenez rendez-vous dès maintenant !
        </h3>
        <div class="flex flex-row justify-center mb-4">
          <span class="text-lg font-semibold">
            Par téléphone :
            <svg
              class="w-4 h-4 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            07.61.58.18.12
          </span>
          <span class="mx-4">|</span>
          <span class="text-lg font-semibold">
            Par email :
            <svg
              class="w-4 h-4 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a
              href="mailto:coraliebribet@icloud.com"
              class="underline hover:text-pink-medium transition-colors"
              @click="handleEmailClick"
            >coraliebribet@icloud.com</a>
          </span>
        </div>
        <ul class="space-y-2">
          <li>1. Prix fixes sans frais de déplacement pour Dax et ses 5km aux alentours</li>
          <li>2. Supplément de 5€ au-delà de 5km de déplacement</li>
          <li>3. Prestation de 50€ minimum, sans frais de déplacement supplémentaires (30km max)</li>
        </ul>
      </div>
    </section>
  </main>

  <GoToTopButton />
</template>

<style scoped>
@keyframes pulse-highlight {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 20px 10px rgba(236, 72, 153, 0.3);
  }
}

.pulse-highlight {
  animation: pulse-highlight 1s ease-in-out 2;
}

.price-table {
  @apply bg-white rounded-lg shadow-md p-6 transition-shadow duration-300;
}

.price-table:hover {
  @apply shadow-lg;
}

.price-table ul li {
  @apply transition-colors duration-200 rounded-md p-2 -mx-2;
}

.price-table ul li:hover {
  @apply bg-pink-50;
}
</style>
