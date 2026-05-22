<template>
  <section
      id="couple"
      class="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-[#f7f5f1]"
  >
    <!-- Foto slideshow -->
    <div
        class="relative z-0 w-[85%] max-w-md aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg border border-[#d4c7b5]/50">
      <transition-group name="fade" tag="div">
        <img
            v-for="(img, i) in images"
            :key="i"
            v-show="currentIndex === i"
            :src="img"
            alt="Couple photo"
            class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            loading="lazy"
        />
      </transition-group>
    </div>

    <!-- Frame dekorasi overlay -->
    <img
        src="/images/decoration/frame.webp"
        alt="ornament frame"
        class="absolute z-10 w-[95%] max-w-[480px] pointer-events-none select-none"
    />

    <!-- Burung bawah (opsional tambahan) -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-between items-end px-6">
      <img
          src="/images/decoration/plant2.webp"
          alt="left peacock"
          class="w-[130px] md:w-[180px] animate-sway-slow opacity-95"
      />
      <img
          src="/images/decoration/plant1.webp"
          alt="right peacock"
          class="w-[130px] md:w-[180px] animate-sway-medium opacity-95"
      />
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

// Ambil semua foto dari galeri utama (otomatis, urut acak)
const galleryFilenames = [
  'IMG_6108.webp',
  'IMG_6110.webp',
  'IMG_6115.webp',
  'IMG_6121.webp',
  'IMG_6124.webp',
  'IMG_6142.webp',
  'IMG_6146.webp',
  'IMG_6149.webp',
  'IMG_6153.webp',
  'IMG_6154.webp',
  'IMG_6176.webp',
  'IMG_6177.webp'
]
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
const images = shuffle(galleryFilenames.map(name => `/images/galery/${name}`))

const currentIndex = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 4000) // ganti tiap 4 detik
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
/* Fade effect antar foto */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animasi goyangan */
@keyframes sway-slow {
  0%, 100% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(1.2deg) translateY(-2px);
  }
}

@keyframes sway-medium {
  0%, 100% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(-1.2deg) translateY(-2px);
  }
}

.animate-sway-slow {
  animation: sway-slow 7s ease-in-out infinite;
}

.animate-sway-medium {
  animation: sway-medium 6s ease-in-out infinite alternate;
}
</style>
