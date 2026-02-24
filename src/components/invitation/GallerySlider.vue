<template>
  <section id="precious" class="relative  bg-[#f8f8f6]">
    <!-- Background -->
    <div class="sticky top-0 flex justify-center z-20 overflow-hidden pointer-events-none">
      <img
          src="/images/decoration/framegebyok.png"
          class="w-[110%] scale-[1.1] z-20 wow animate__fadeIn"
          alt="Frame Gebyok"
          data-wow-duration="1.5s"
      />
    </div>

    <div
        class="absolute inset-0 bg-[url('/images/bg-pattern1.png')] bg-repeat bg-[length:440px_800px] opacity-50 bg-repeat z-0"
    ></div>

    <!-- SCROLLING CONTENT BELOW (buat trigger perubahan isi frame) -->
    <div class="relative z-10 -mt-[5rem] text-center">
      <!-- Intro (visible first) -->
      <div
          class="flex flex-col items-center justify-center text-center mb-44"
      >

        <p class="text-[#4a5b34] text-4xl mb-3 font-script font-extralight wow animate__fadeInDown" data-wow-duration="1s">
          Momen Berharga
        </p>
        <p class="text-[#3b422c] italic max-w-xs leading-relaxed wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          "Menciptakan kenangan adalah hadiah yang tak ternilai.
          <br/>Kenangan bertahan seumur hidup; benda hanya bertahan sebentar."
        </p>
      </div>

      <!-- Gallery -->
      <div
          class="flex flex-col items-center justify-center pb-16"
      >
        <div
            class="w-full max-w-5xl px-4 gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 wow animate__zoomIn"
            data-wow-duration="1.2s"
            data-wow-delay="0.2s"
        >
          <a
              v-for="(image, i) in images"
              :key="i"
              :href="image"
              class="block w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg wow animate__fadeInUp"
              :data-wow-delay="`${i * 0.05}s`"
          >
            <img :src="image" :alt="`Gallery photo ${i + 1}`" class="object-cover w-full h-full" loading="lazy"/>
          </a>
        </div>
      </div>

      <!-- Motif Batik Bottom -->
      <div
        class="relative mt-6 w-full h-16 md:h-24 bg-[url('/images/decoration/batik.png')] bg-repeat bg-[length:300px_300px] pointer-events-none wow animate__fadeIn"
        data-wow-duration="1.5s"
        aria-label="batik motif repeat"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import baguetteBox from "baguettebox.js";

const images = [
  "/images/galery/STR09555.JPG",
  "/images/galery/STR09596.JPG",
  "/images/galery/STR09654.JPG",
  "/images/galery/STR09680.JPG",
  "/images/galery/STR09583.JPG",
  "/images/galery/STR09643.JPG",
  "/images/galery/STR09629.JPG",
  "/images/galery/STR09695.JPG",
  "/images/galery/STR09635.JPG",
  "/images/galery/STR09617.JPG",
  "/images/galery/STR09689.JPG",
  "/images/galery/STR09645.JPG",
];

onMounted(() => {
  baguetteBox.run(".gallery-grid", { animation: "fadeIn" });
});
</script>

<style scoped>
</style>
