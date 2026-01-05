<template>
  <div class="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/cover2.jpg')"></div>

    <!-- Overlay putih transparan di atas background -->
    <div class="absolute inset-0 bg-white/60"></div>

    <!-- Frame Gebyok di atas overlay -->
    <img
        src="/images/decoration/framegebyok.png"
        alt="frame"
        class="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 -mt-14"
    />

    <!-- Dekorasi Anggrek Atas Kiri -->
    <div
        class="absolute top-[80px] left-[-10px] w-[100px] z-20"
        :class="[{ 'animate-fade-in-left': animateElements }]"
        style="animation-delay: 0.3s"
    >
      <div class="rotate-45">
        <div class="animate-sway-slow" style="animation-delay: 0.3s">
          <img
              src="/images/decoration/anggrek-putih.png"
              alt="orchid top left"
              class="w-full scale-x-[-1] opacity-90"
          />
        </div>
      </div>
    </div>

    <!-- Dekorasi Anggrek Atas Kanan -->
    <div
        class="absolute top-[80px] right-[-20px] w-[100px] z-20"
        :class="[{ 'animate-fade-in-right': animateElements }]"
        style="animation-delay: 0.6s"
    >
      <div class="rotate-[-30deg]">
        <div class="animate-sway-slow" style="animation-delay:1s">
          <img
              src="/images/decoration/anggrek-putih.png"
              alt="orchid top right"
              class="w-full opacity-90"
          />
        </div>
      </div>
    </div>


    <!-- Bunga-bunga tambahan tersebar di layar -->
    <img
        src="/images/decoration/bunga-putih3.png"
        alt="flower top left"
        :class="[
          'absolute top-[160px] left-[30px] w-[60px] z-15 opacity-60',
          'animate-float-slow'
        ]"
    />
    <img
        src="/images/decoration/bunga-putih3.png"
        alt="flower top right"
        :class="[
          'absolute top-[160px] right-[30px] w-[60px] z-15 opacity-60',
          'animate-sway-slow'
        ]"
    />

    <!-- Lower area flowers -->
    <img
        src="/images/decoration/anggrek.png"
        alt="flower lower left"
        :class="[
          'absolute bottom-[100px] left-[25px] w-[180px] z-15 opacity-80',
          'animate-sway-slow'
        ]"
    />
    <img
        src="/images/decoration/daun-rosella.png"
        alt="flower lower right"
        :class="[
          'absolute bottom-[0px] right-[-5px] w-[170px] z-15 opacity-80',
          'animate-sway-medium'
        ]"
    />

    <img
        src="/images/decoration/bunga-putih.png"
        alt="flower lower right"
        :class="[
          'absolute bottom-[30px] right-[-80px] w-[170px] z-15 opacity-80',
          'animate-sway-slow'
        ]"
    />


    <!-- Konten tengah -->
    <div class="relative z-30 px-6 flex flex-col items-center">
      <p
          :class="[
          'uppercase tracking-[0.3em] text-[12px] text-[#2d5016] font-light mb-4',
          { 'animate-fade-in-down': animateElements }
        ]"
          style="animation-delay: 0.2s"
      >
        THE WEDDING OF
      </p>

      <!-- Logo Wedding -->
      <div
          :class="[
          'relative my-6',
          { 'animate-zoom-in': animateElements }
        ]"
          style="animation-delay: 0.5s"
      >
        <img
            src="/images/decoration/logo-wedding.png"
            alt="Wedding Logo"
            class="w-[160px] h-auto mx-auto"
        />
      </div>

      <h1
          :class="[
          'text-5xl font-photograph font-light text-[#2d5016] mt-2 mb-1',
          { 'animate-fade-in': animateElements }
        ]"
          style="animation-delay: 0.8s"
      >
        Adelia & Hafizh
      </h1>

      <p
          :class="[
          'mt-4 text-[#2d5016] text-base tracking-wide',
          { 'animate-fade-in-up': animateElements }
        ]"
          style="animation-delay: 1s"
      >
        Kamis, 4 Juni, 2026
      </p>

      <button
          @click="$emit('scroll-down')"
          :class="[
            'mt-10 border-2 border-[#2d5016] px-10 py-3 rounded-full bg-white/10 backdrop-blur-sm text-[#2d5016] tracking-[0.2em] text-xs hover:bg-white hover:text-[#2d5016] transition-all duration-300',
            { 'animate-fade-in-up': animateElements }
          ]"
          style="animation-delay: 1.3s"
      >
        SCROLL DOWN
      </button>
    </div>

    <!-- Dekorasi bawah -->
    <div class="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden flex justify-center items-end pointer-events-none z-20">

      <!-- Wayang Background Left -->
      <img
          src="/images/decoration/wayang.png"
          alt="wayang left"
          :class="[
            'absolute bottom-5 left-[-30px] w-[160px] opacity-70 z-0'
          ]"
      />

      <!-- Wayang Background Right -->
      <img
          src="/images/decoration/wayang.png"
          alt="wayang right"
          :class="[
            'absolute bottom-5 right-[-30px] w-[160px] opacity-70 z-0 scale-x-[-1]'
          ]"
      />

      <!-- Rumput/Tanaman Kiri -->
      <img
          src="/images/decoration/gelombang-cinta.png"
          alt="plant left"
          class="absolute bottom-0 left-[-40px] w-[180px] animate-sway-slow opacity-80"
      />

      <!-- Rumput/Tanaman Kanan -->
      <img
          src="/images/decoration/daun-kayu-putih.png"
          alt="plant right"
          class="absolute bottom-0 right-[-60px] w-[200px] animate-sway-medium opacity-80"
      />

      <!-- Bunga Putih Kiri Bawah -->
      <img
          src="/images/decoration/mawar-putih.png"
          alt="white flower left"
          :class="[
            'absolute bottom-[40px] left-[60px] w-[100px] opacity-90 animate-sway-medium'
          ]"
      />

      <!-- Bunga Putih Kanan Bawah -->
      <img
          src="/images/decoration/anggrek.png"
          alt="white flower right"
          :class="[
            'absolute bottom-[50px] right-[-50px] w-[110px] opacity-90 animate-sway-medium'
          ]"
      />

      <img
          src="/images/decoration/rumput.png"
          alt="peacocks"
          :class="[
            'absolute bottom-[20px] left-[50%] transform -translate-x-1/2 w-[150px] z-10 opacity-95 animate-sway-slow',
            { 'animate-fade-in-up': animateElements }
          ]"
          style="animation-delay: 0.8s"
      />

      <!-- Batik Pattern bawah -->
      <div class="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#2d5016]/40 to-transparent"></div>
    </div>

    <!-- Batik Decoration Bottom (memanjang dari kiri ke kanan) -->
    <img
        src="/images/decoration/batik.png"
        alt="batik decoration"
        class="absolute bottom-0 left-0 w-full h-[50px] object-cover object-bottom z-[100] opacity-75"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const animateElements = ref(false)

onMounted(() => {
  // Trigger animations after a short delay
  setTimeout(() => {
    animateElements.value = true
  }, 100)
})
</script>
