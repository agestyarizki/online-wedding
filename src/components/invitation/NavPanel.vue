<template>
  <!-- DESKTOP PANEL -->
  <div
      v-if="!isMobile"
      class="fixed left-16 top-1/2 -translate-y-1/2 flex flex-col bg-[#f7f5f1]/95 backdrop-blur-md rounded-[2rem] shadow-[0_6px_18px_rgba(0,0,0,0.1)] p-3 z-50 gap-2"
  >
    <button
        v-for="item in navItems"
        :key="item.id"
        @click="scrollToSection(item.id)"
        class="relative flex items-center justify-center w-10 h-10 rounded-full text-[#4a3f35] transition-all duration-300 hover:bg-[#bfa980]/20"
        :class="activeSection === item.id ? 'bg-[#1c5418] text-white' : ''"
    >
      <i :class="['fa-regular', item.icon, 'text-[1rem]']"></i>

      <!-- Label muncul hanya saat aktif -->
      <transition name="slide-fade">
        <span
            v-if="activeSection === item.id"
            class="absolute left-full ml-3 bg-[#1c5418] text-white rounded-full px-3 py-[2px] text-sm font-[Open_Sans] whitespace-nowrap"
        >
          {{ item.label }}
        </span>
      </transition>
    </button>
  </div>

  <!-- MOBILE PANEL -->
  <div
      v-else
      class="fixed bottom-4 left-1/2 -translate-x-1/2 flex bg-[#f7f5f1]/95 backdrop-blur-md rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.1)] px-4 py-2 gap-3 z-50"
  >
    <button
        v-for="item in navItems"
        :key="item.id"
        @click="scrollToSection(item.id)"
        class="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
        :class="activeSection === item.id ? 'relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-white bg-[#1c5418]' : 'relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 text-green-950'"
    >
      <i :class="['fa-reguler', item.icon, 'text-[1rem]']"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)
const activeSection = ref('couple')

const navItems = [
  { id: 'couple', label: 'Couple', icon: 'fa-regular fa-heart' },
  { id: 'gallery', label: 'Gallery', icon: 'fa-regular fa-address-book' },
  { id: 'date', label: 'Date', icon: 'fa-regular fa-calendar' },
  { id: 'location', label: 'Location', icon: 'fa-regular fa-bookmark' },
  { id: 'rsvp', label: 'RSVP', icon: 'fa-regular fa-note-sticky' },
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  activeSection.value = id
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })

  // Intersection observer untuk auto-highlight
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        threshold: 0, // Trigger immediately when element touches the center area
        rootMargin: '-45% 0px -45% 0px' // Narrow check to the center line (10% height)
      }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
/* Animasi label */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}
</style>
