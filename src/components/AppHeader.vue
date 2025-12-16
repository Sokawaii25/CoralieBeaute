<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isHeaderVisible = ref(true)
let lastScrollY = 0
let ticking = false

const handleNavigation = (sectionId) => {
  // If not on home page, navigate to home first
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => scrollToSection(sectionId), 100)
    })
  } else {
    scrollToSection(sectionId)
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      
      // Only hide header if scrolled more than 100px
      if (currentScrollY < 100) {
        isHeaderVisible.value = true
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        isHeaderVisible.value = false
      } else {
        // Scrolling up
        isHeaderVisible.value = true
      }
      
      lastScrollY = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  lastScrollY = window.scrollY
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="bg-white shadow-md sticky top-0 z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': !isHeaderVisible }"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="navbar">
        <!-- Logo and Contact Info -->
        <div class="navbar-start">
          <div class="flex flex-col items-start">
            <div class="flex items-center space-x-2">
              <svg
                class="w-5 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">40100 Dax</span>
            </div>
            <div class="hidden md:flex items-center space-x-2">
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="text-sm">07.61.58.18.12</span>
            </div>
          </div>
        </div>
        
        <!-- Logo Center -->
        <div class="navbar-center">
          <router-link
            to="/"
            class="text-center"
          >
            <img
              src="/assets/images/logo.svg"
              alt="Coralie Beauté Logo"
              class="mx-auto h-12 w-auto mb-1"
            >
            <div class="text-xl font-semibold">
              Coralie Beauté
            </div>
            <div class="text-xs text-gray-600">
              Esthéticienne à domicile
            </div>
          </router-link>
        </div>

        <!-- Menu Button -->
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label
              tabindex="0"
              class="btn btn-ghost"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span class="ml-2">MENU</span>
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 bg-pink-soft shadow rounded-box w-52 mt-4"
            >
              <li>
                <a
                  class="transition-shadow hover:shadow-lg"
                  @click="handleNavigation('services')"
                >Prestations de services</a>
              </li>
              <li>
                <a
                  class="transition-shadow hover:shadow-lg"
                  @click="handleNavigation('presentation')"
                >Présentation personnelle</a>
              </li>
              <li>
                <a
                  class="transition-shadow hover:shadow-lg"
                  @click="handleNavigation('tarifs')"
                >Tarifs prestations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>