<template>
  <section
      class="relative overflow-hidden text-center h-96 py-20 px-6 bg-[#f9f8f4] text-[#4a5b34] font-[Playfair_Display]"
  >

    <!-- Ucapan -->
    <h2
        class="text-5xl md:text-6xl font-photograph italic leading-tight mt-8 mb-4 wow animate__fadeIn"
        data-wow-duration="1.5s"
        data-wow-delay="0.3s"
    >
      Terima Kasih
    </h2>

    <!-- Dekorasi bawah -->
    <div class="absolute bottom-0 left-0 w-full z-0">
      <div class="absolute bottom-0 left-[-2rem] w-[30%] md:w-[18%] z-10">
        <img
            src="/images/decoration/anggrek-putih.webp"
            class="w-full animate-sway-medium"
            alt="peacock left"
        />
      </div>
      <div class="absolute bottom-0 left-[2rem] w-[30%] md:w-[18%]" data-wow-delay="0.6s">
        <img
            src="/images/decoration/anggrek.webp"
            class="w-full animate-sway-medium"
            alt="peacock left"
        />
      </div>
      <div class="absolute bottom-[-10px] left-[-1rem] w-[35%] md:w-[22%] z-10">
        <img
            src="/images/decoration/gelombang-cinta.webp"
            class="w-full"
            alt="peacock left"
        />
      </div>
      <div class="absolute bottom-[0px] right-[-4rem] w-[45%] md:w-[28%] scale-x-[-1]" style="animation-delay: 0.4ms">
        <img
            src="/images/decoration/mawar-putih.webp"
            class="w-full animate-sway-medium"
            alt="peacock right"
        />
      </div>
      <div class="absolute bottom-[-50px] right-[-1rem] w-[45%] md:w-[28%] scale-x-[-1]">
        <img
            src="/images/decoration/bunga-putih.webp"
            class="w-full animate-sway-slow"
            alt="peacock right"
        />
      </div>
    </div>

    <!-- Motif batik bawah -->
    <span
        class="absolute h-[50px] w-full bottom-0 left-0 object-cover inline-block z-50"
    >
        <span
            class="block w-full h-[300px] bg-[url('/images/decoration/batik.webp')] bg-repeat bg-[length:300px_300px] md:bg-[length:240px_240px]"
        ></span>
      </span>
  </section>
</template>
<script setup lang="ts">
</script>