<template>
  <section
      id="wedding-date"
      class="relative bg-[#f9f8f4] text-[#4a5b34] text-center py-16 px-6 overflow-hidden"
  >
    <!-- Dekorasi Atas -->
    <img
        src="/images/bg-pattern1.png"
        class="absolute top-0 left-0 w-full object-cover z-0 wow animate__fadeIn"
        alt="top floral decoration"
        data-wow-duration="1.5s"
    />

    <!-- Isi Utama -->
    <div class="relative z-10 flex flex-col items-center space-y-20">

      <!-- Marriage Contract -->
      <div class="max-w-sm wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
        <!-- Use existing project script fonts -->
         <h2 class="font-script mb-6">
          <span class="mc-word mc-word--first">Akad</span>
          <span class="mc-word mc-word--second">Nikah</span>
        </h2>

        <p class="text-lg font-medium">Rabu, 4 Juni 2026</p>

        <div class="flex justify-center items-center gap-2 mt-2 text-base">
          <span>08:00 WIB – 10.00 WIB</span>
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
      <div class="max-w-sm wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
        <!-- Use existing project script fonts -->
        <h2 class="font-script mb-6">
          <span class="mc-word mc-word--first">Resepsi</span>
        </h2>

        <p class="text-lg font-medium">Rabu, 4 Juni 2026</p>

        <div class="flex justify-center items-center gap-2 mt-2 text-base">
          <span>10:00 WIB – Selesai</span>
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
    </div>

    <!-- Dekorasi Bawah -->
    <div class="absolute bottom-0 left-0 w-full pointer-events-none">
      <img
          src="/images/decoration/bunga-putih.png"
          class="absolute bottom-[-10px] left-[-40px] w-1/3 animate-float-slow wow animate__fadeInLeft"
          alt="bottom floral left"
          data-wow-duration="1.5s"
      />
      <img
          src="/images/decoration/daun-rosella.png"
          class="absolute bottom-[-10px] right-[-40px] w-1/4 animate-float-slow-rev wow animate__fadeInRight"
          alt="bottom floral right"
          data-wow-duration="1.5s"
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
  .mc-word--first { font-size: 4.2rem; transform: none; }
  .mc-word--second { font-size: 3.6rem; }
}
</style>
