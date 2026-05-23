<template>
  <section
      id="wedding-date"
      class="relative bg-[url('/images/bg-pattern1.webp')] bg-repeat bg-[length:440px_800px] bg-[#f9f8f4] text-[#4a5b34] text-center py-16 px-6"
  >
    <!-- Top Decoration -->
    <div class="absolute top-0 left-0 w-full -translate-y-[130px] pointer-events-none z-30">
      <div
          class="absolute top-0 left-[-90px] w-1/2 md:w-1/5"
      >
        <div class="animate-sway-medium" style="animation-delay: 0.3ms">
          <img
              src="/images/decoration/mawar-putih3.webp"
              class="w-full"
              alt="flower left"
          />
        </div>
      </div>
      <div
          class="absolute top-16 left-[-60px] w-1/2 md:w-1/6"
      >
        <div class="animate-sway-slow">
          <img
              src="/images/decoration/daun-kayu-putih.webp"
              class="w-full -rotate-[25deg]"
              alt="flower left"
          />
        </div>
      </div>
      <div
          class="absolute top-[-6px] right-[-20px] w-80 md:w-1/5"
      >
        <div class="animate-sway-slow" style="animation-delay: 0.3ms">
          <img
              src="/images/decoration/anggrek-putih2.webp"
              class="w-full -rotate-[25deg] -translate-x-[6px] translate-y-[6px]"
              alt="flower right"
          />
        </div>
      </div>
      <div
          class="absolute top-28 right-[-20px] w-40 md:w-1/6"
      >
        <div class="animate-sway-medium" style="animation-delay: 0.5ms">
          <img
              src="/images/decoration/gelombang-cinta.webp"
              class="w-full -rotate-[180deg] -translate-x-[6px] translate-y-[6px]"
              alt="flower right"
          />
        </div>
      </div>
      <div
          class="absolute top-0 right-[-70px] w-36 md:w-1/6"
      >
        <div class="animate-sway-slow">
          <img
              src="/images/decoration/bunga-putih.webp"
              class="w-full -translate-x-[6px] translate-y-[6px]"
              alt="flower right"
          />
        </div>
      </div>
    </div>


    <!-- Isi Utama -->
    <div ref="fadeSection" :class="['relative z-10 flex flex-col items-center space-y-20 pb-32 fade-in-section', { visible: isVisible }]">
      <div class="w-full flex justify-center md:justify-end">
        <img
            src="/images/decoration/tree.webp"
            class="w-10/12 md:w-[60%] md:max-w-[800px] max-w-full -rotate-[90deg] mt-[-350px] md:mt-[-520px] mb-[-100px] translate-y-2 scale-x-[-1] translate-x-[80px] z-10"
            alt="flower right"
        />
      </div>
      <!-- Marriage Contract -->
      <div class="max-w-sm">
        <!-- Use existing project script fonts -->
        <h2 class="font-script mb-6">
          <span class="mc-word mc-word--first">Akad</span>
          <span class="mc-word mc-word--second">Nikah</span>
        </h2>

        <p class="text-lg font-medium">Kamis, 4 Juni 2026</p>

        <div class="flex justify-center items-center gap-2 mt-2 text-base">
          <span>07:00 WIB – 09.00 WIB</span>
        </div>

        <div class="flex justify-center items-start gap-2 mt-4 text-base leading-relaxed">
          <p>
            Venue Gedung UPT Rehabilitasi Tunanetra, Jl. Beringin No.13, Bandungrejosari, Kec. Sukun, Kota Malang
          </p>
        </div>

        <a
            href="https://maps.app.goo.gl/ajM6Cea64gP5i1gW8"
            target="_blank"
            class="inline-block border border-[#4a5b34] rounded-full px-6 py-2 mt-6 text-lg hover:bg-[#4a5b34] hover:text-[#f9f8f4] transition-all duration-300"
        >
          lihat lokasi
        </a>
      </div>

      <!-- Reception -->
      <div class="max-w-sm">
        <!-- Use existing project script fonts -->
        <h2 class="font-script mb-6">
          <span class="mc-word mc-word--first">Resepsi</span>
        </h2>

        <p class="text-lg font-medium">Kamis, 4 Juni 2026</p>

        <div class="flex justify-center items-center gap-2 mt-2 text-base">
          <span>12:00 WIB – 16.00 WIB</span>
        </div>

        <div class="flex justify-center items-start gap-2 mt-4 text-base leading-relaxed">
          <p>
            Venue Gedung UPT Rehabilitasi Tunanetra, Jl. Beringin No.13, Bandungrejosari, Kec. Sukun, Kota Malang
          </p>
        </div>

        <a
            href="https://maps.app.goo.gl/ajM6Cea64gP5i1gW8"
            target="_blank"
            class="inline-block border border-[#4a5b34] rounded-full px-6 py-2 mt-6 text-lg hover:bg-[#4a5b34] hover:text-[#f9f8f4] transition-all duration-300"
        >
          lihat lokasi
        </a>
      </div>

      <!-- Reception Download -->
      <div class="max-w-sm">
        <!-- Use existing project script fonts -->
        <h2 class="font-script mb-6">
          <span class="mc-word mc-word--first">Ngunduh Mantu</span>
        </h2>

        <p class="text-lg font-medium">Jumat, 5 Juni 2026</p>

        <div class="flex justify-center items-center gap-2 mt-2 text-base">
          <span>13:00 WIB – Selesai</span>
        </div>

        <div class="flex justify-center items-start gap-2 mt-4 text-base leading-relaxed">
          <p>
            JL. Tebo Selatan No.105 RT08 RW02, Kel Mulyorejo, Kec. Sukun, Kota Malang
          </p>
        </div>

        <a
            href="https://maps.app.goo.gl/dycd8Tj4MMZYsWaRA"
            target="_blank"
            class="inline-block border border-[#4a5b34] rounded-full px-6 py-2 mt-6 text-lg hover:bg-[#4a5b34] hover:text-[#f9f8f4] transition-all duration-300"
        >
          lihat lokasi
        </a>
      </div>
    </div>
  </section>

  <!-- Motif Batik Bottom -->
  <div
      class="relative w-full h-16 md:h-24 bg-[url('/images/decoration/batik.webp')] bg-repeat bg-[length:300px_300px] pointer-events-none wow animate__fadeIn"
      data-wow-duration="1.5s"
      aria-label="batik motif repeat"
  ></div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const fadeSection = ref(null)
const isVisible = ref(false)
let observer
onMounted(() => {
  observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (fadeSection.value) observer.observe(fadeSection.value)
})
onUnmounted(() => observer && observer.disconnect())
</script>

<style scoped>
@keyframes float-slow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes float-slow-rev {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-float-slow {
  animation: float-slow 5s ease-in-out infinite;
}

.animate-float-slow-rev {
  animation: float-slow-rev 5s ease-in-out infinite;
}

/* Local Photograph fonts - place fonts files at src/assets/fonts/Photograph-Regular.woff2 (and optional .woff) */
@font-face {
  font-family: 'Photograph';
  /* use relative path from this component to src/assets/fonts */
  src: url('../../assets/fonts/Photograph-Regular.woff2') format('woff2'),
  url('../../assets/fonts/Photograph-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Note: .fonts-photograph style removed (not used here). The @fonts-face is kept for global/project use. */

/* per-word tweaks so the two words sit on slightly different baselines like the image */
.mc-word {
  display: inline-block;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mc-word--first {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.08em; /* slightly more spacing */
  font-style: italic;
  margin-right: 0.25rem;
}

.mc-word--second {
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  transform: translateY(0px) rotate(-1.5deg);
  font-style: italic;
}

/* responsive adjustments */
@media (min-width: 768px) {
  .mc-word--first {
    font-size: 4.2rem;
    transform: none;
  }

  .mc-word--second {
    font-size: 3.6rem;
  }
}

.fade-in-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1s cubic-bezier(.4,0,.2,1), transform 1s cubic-bezier(.4,0,.2,1);
}
.fade-in-section.visible {
  opacity: 1;
  transform: none;
}
</style>
