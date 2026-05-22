<template>
  <section class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#f6f5ee]">
    <!-- BACKGROUND LANSKAP -->
    <img src="/images/cover2.webp" class="absolute inset-0 w-full h-full object-cover opacity-70"
         alt="background"/>

    <!-- POHON & DEKOR TENGAH -->
    <img
        src="/images/decoration/pohon-kelapa.webp"
        class="absolute top-24 left-[-80px] z-4 w-1/2 md:w-2/5 lg:w-1/3 inclined-x animate-bounce-rotate"
        alt="top left flower"
    />

    <!-- pohon kanan: flip di wrapper, animasi di child -->
    <span class="absolute top-24 right-[-80px] scale-x-[-1]">
      <img
          src="/images/decoration/pohon-kelapa.webp"
          class="animate-sway-slow-rev md:w-2/5 lg:w-1/3"
          alt="pohon kanan"
      />
    </span>

    <!-- bunga kiri atas: flip di wrapper, animasi di child -->
    <span class="absolute top-5 left-[-23px] z-5 w-1/2 md:w-5/12 lg:w-1/3 scale-x-[-1]">
      <img
          src="/images/decoration/anggrek-putih2.webp"
          class="w-full animate-sway-medium"
          alt="top left flower"
      />
    </span>

    <!-- bunga kanan atas: flip di wrapper, animasi di child -->
    <span class="absolute top-6 right-[-20px] z-5 w-1/2 md:w-5/12 lg:w-1/3">
      <img
          src="/images/decoration/anggrek-putih2.webp"
          class="w-full animate-sway-medium"
          alt="top right flower"
      />
    </span>


    <!-- POHON KELAPA KIRI / KANAN -->
    <img
      src="/images/decoration/pohon-kelapa.webp"
      class="absolute left-0 bottom-20 w-1/3 md:w-1/4 lg:w-1/5 animate-sway-slow"
      alt="left palm"
    />

    <!-- palm kanan: flip di wrapper, animasi di child -->
    <span class="absolute right-0 bottom-0 w-1/3 md:w-1/4 lg:w-1/5 scale-x-[-1]">
      <img
        src="/images/decoration/pohon-kelapa.webp"
        class="animate-sway-slow-rev"
        alt="right palm"
      />
    </span>

    <!-- Wayang decoration - bottom left -->
    <img src="/images/decoration/wayang.webp"
         class="absolute bottom-[150px] left-[-10px] w-[43%] md:w-[34%] lg:w-[30%] z-10 animate-breathe-slow"
         alt="wayang decoration"/>

    <!-- FOTO COUPLE -->
    <div
        class="relative z-3 w-[78%] sm:w-[70%] md:w-[60%] lg:w-[45%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] md:aspect-[3/4] overflow-hidden oval-vertical border-4 border-[#cfc8b8]/50 shadow-xl wow animate__zoomIn"
        data-wow-duration="1.2s"
        data-wow-delay="0.3s"
    >
      <transition name="fade" mode="out-in">
        <img :key="currentPhoto" :src="currentPhoto" alt="Foto couple"
             class="absolute inset-0 w-full h-full object-cover object-[50%_160%] md:object-center transition-all duration-1000 ease-in-out scale-125"/>
      </transition>

    </div>

    <img src="/images/decoration/anggrek-putih.webp"
         class="absolute bottom-0 left-[-2rem] w-[30%] md:w-[24%] lg:w-[20%] z-10 animate-sway-medium"
         alt="peacock left"/>
    <img src="/images/decoration/anggrek.webp" class="absolute bottom-0 left-[2rem] w-[30%] md:w-[24%] lg:w-[20%] animate-sway-medium"
         data-wow-delay="0.6s"
         alt="peacock left"/>
    <img src="/images/decoration/gelombang-cinta.webp" class="absolute bottom-[-10px] left-[-1rem] w-[35%] md:w-[28%] lg:w-[24%] z-10"
         alt="peacock left"/>
    <img src="/images/decoration/mawar-putih.webp"
         class="absolute bottom-[0px] right-[-4rem] w-[45%] md:w-[34%] lg:w-[30%] scale-x-[-1] animate-sway-medium"/>
    <img src="/images/decoration/bunga-putih.webp"
         class="absolute bottom-[-50px] right-[-1rem] w-[45%] md:w-[34%] lg:w-[30%] scale-x-[-1] animate-sway-slow"/>

    <!-- DEKOR RUMPUT BAWAH -->
    <img src="/images/decoration/rumput.webp" class="absolute bottom-[-50px] w-[45%] md:w-[34%] lg:w-[30%] animate-wave" alt="grass"/>
  </section>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const photos = [
  '/images/couple/STR09663.webp'
]

const currentIndex = ref(0)
const currentPhoto = ref(photos[currentIndex.value])
let interval

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % photos.length
    currentPhoto.value = photos[currentIndex.value]
  }, 4000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>

.oval-vertical {
  /* elliptical border-radius: vertical oval (taller than wide) */
  border-radius: 40% / 60%;
}

.inclined-x {
  transform: translateY(-6px) rotate(20deg);
}

/* Animasi lembut */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-6px) rotate(1deg);
  }
}

@keyframes float-slow-rev {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(4px) rotate(-1deg);
  }
}

@keyframes sway-slow {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(2deg);
  }
}

@keyframes sway-slow-rev {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-2deg);
  }
}

@keyframes breathe-slow {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

@keyframes breathe-slow-rev {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.97);
  }
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes bounce-rotate {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3.5deg);
  }
  75% {
    transform: rotate(-1.5deg);
  }
}

.animate-bounce-rotate {
  animation: bounce-rotate 6s ease-in-out infinite;
  transform-origin: center bottom; /* supaya goyang dari bawah (alas) */
}

@keyframes bounce-rotate-left {
  0%, 100% {
    transform: scaleX(-1) rotate(0deg);
  }
  25% {
    transform: scaleX(-1) rotate(3.5deg);
  }
  75% {
    transform: scaleX(-1) rotate(-1.5deg);
  }
}

.animate-bounce-rotate-left {
  animation: bounce-rotate-left 6s ease-in-out infinite;
  transform-origin: center bottom; /* supaya goyang dari bawah (alas) */
}


.animate-sway-slow {
  animation: sway-slow 7s ease-in-out infinite;
  transform-origin: bottom center;
}

.animate-sway-slow-rev {
  animation: sway-slow-rev 8s ease-in-out infinite;
  transform-origin: bottom center;
}

.animate-breathe-slow {
  animation: breathe-slow 6s ease-in-out infinite;
}

.animate-breathe-slow-rev {
  animation: breathe-slow-rev 6s ease-in-out infinite;
}

.animate-wave {
  animation: wave 4s ease-in-out infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
