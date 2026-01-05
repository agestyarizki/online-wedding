<template>
  <section class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#f6f5ee]">
    <!-- BACKGROUND LANSKAP -->
    <img src="/images/cover2.jpg" class="absolute inset-0 w-full h-full object-cover opacity-70"
         alt="background"/>

    <!-- POHON & DEKOR TENGAH -->
    <img
        src="/images/decoration/pohon-kelapa.png"
        class="absolute top-24 left-[-80px] z-4 w-1/2 inclined-x animate-bounce-rotate"
        alt="top left flower"
    />

    <img
        src="/images/decoration/pohon-kelapa.png"
        class="absolute top-24 right-[-80px] z-4 w-1/2 flip-x animate-bounce-rotate-left"
        alt="pohon kanan"
    />

    <!-- BUNGA & DEKOR ATAS -->
    <img
        src="/images/decoration/anggrek-putih2.png"
        class="absolute top-5 left-[-23px] z-5 w-1/2 inclined-x animate-bounce-rotate-left"
        alt="top left flower"
    />

    <img
        src="/images/decoration/anggrek-putih2.png"
        class="absolute top-6 right-[-20px] z-5 w-1/2 flip-x animate-bounce-rotate"
        alt="pohon kanan"
    />



    <!-- POHON KELAPA KIRI / KANAN -->
    <img src="/images/decoration/pohon-kelapa.png" class="absolute left-0 bottom-20 w-1/3 animate-sway-slow"
         alt="left palm"/>
    <img src="/images/decoration/pohon-kelapa.png"
         class="absolute right-0 bottom-0 w-1/3 scale-x-[-1] animate-sway-slow-rev" alt="right palm"/>

    <!-- Wayang decoration - bottom left -->
    <img src="/images/decoration/wayang.png"
         class="absolute bottom-[150px] left-[-10px] w-[43%] z-10 animate-breathe-slow"
         alt="wayang decoration"/>

    <!-- FOTO COUPLE -->
    <div
        class="relative z-3 w-[85%] max-w-md aspect-[3/4] overflow-hidden oval-vertical border-4 border-[#cfc8b8]/50 shadow-xl wow animate__zoomIn"
        data-wow-duration="1.2s"
        data-wow-delay="0.3s"
    >
      <transition name="fade" mode="out-in">
        <img :key="currentPhoto" :src="currentPhoto" alt="Foto couple"
             class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"/>
      </transition>

    </div>

    <img src="/images/decoration/anggrek-putih.png" class="absolute bottom-0 left-[-2rem] w-[30%] animate-bounce-rotate"
         alt="peacock left"/>
    <img src="/images/decoration/anggrek.png" class="absolute bottom-0 left-[2rem] w-[30%] animate-breathe-slow"
         alt="peacock left"/>
    <img src="/images/decoration/gelombang-cinta.png" class="absolute bottom-[-10px] left-[-1rem] w-[35%]"
         alt="peacock left"/>
    <img src="/images/decoration/mawar-putih.png"
         class="absolute bottom-[0px] right-[-4rem] w-[45%] scale-x-[-1] animate-bounce-rotate" alt="peacock right"/>
    <img src="/images/decoration/bunga-putih.png"
         class="absolute bottom-[-50px] right-[-1rem] w-[45%] scale-x-[-1]" alt="peacock right"/>

    <!-- DEKOR RUMPUT BAWAH -->
    <img src="/images/decoration/rumput.png" class="absolute bottom-[-50px] w-[45%] animate-wave" alt="grass"/>
  </section>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const photos = [
  '/images/couple/couple1.jpg'
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
