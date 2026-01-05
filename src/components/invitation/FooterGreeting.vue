<template>
  <section
      class="relative overflow-hidden text-center py-20 px-6 bg-[#f9f8f4] text-[#4a5b34] font-[Playfair_Display]"
  >
    <!-- Dekorasi atas -->
    <img
        src="/images/decoration/pohon-kelapa.png"
        alt="top decoration"
        class="absolute top-0 left-0 w-1/3 opacity-70 animate-float-slow wow animate__fadeInLeft"
        data-wow-duration="1.5s"
    />
    <img
        src="/images/decoration/bunga-putih.png"
        alt="top decoration right"
        class="absolute top-0 right-0 w-1/3 opacity-70 animate-float-slow-rev wow animate__fadeInRight"
        data-wow-duration="1.5s"
    />

    <!-- Ucapan -->
    <h2
        class="text-5xl md:text-6xl font-photograph italic leading-tight mb-4 wow animate__fadeIn"
        data-wow-duration="1.5s"
        data-wow-delay="0.3s"
    >
      Terima Kasih
    </h2>

    <!-- Dekorasi bawah -->
    <div class="relative">
      <img
          src="/images/decoration/bunga-putih2.png"
          alt="bottom decoration"
          class="absolute bottom-0 left-[-40px] w-1/3 animate-float-slow wow animate__fadeInLeft"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
      />
      <img
          src="/images/decoration/daun-rosella.png"
          alt="bottom decoration right"
          class="absolute bottom-0 right-[-40px] w-1/3 animate-float-slow-rev wow animate__fadeInRight"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
      />
    </div>

    <!-- Motif batik bawah -->
    <div class="absolute bottom-0 left-0 w-full">
      <img
          src="/images/bg-pattern1.png"
          alt="batik pattern"
          class="w-full opacity-80 wow animate__fadeIn"
          data-wow-duration="2s"
      />
    </div>
  </section>
</template>

<script setup>
// WOW is initialized globally in HomeView (with scrollContainer).
</script>

<style scoped>
@keyframes float-slow {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(10px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
@keyframes float-slow-rev {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}
.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}
.animate-float-slow-rev {
  animation: float-slow-rev 7s ease-in-out infinite;
}
</style>
