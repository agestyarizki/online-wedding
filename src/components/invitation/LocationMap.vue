<template>
  <section
      id="wedding-location"
      class="relative bg-[#4a5b34] text-[#f9f8f4] text-center py-16 px-6 overflow-hidden"
  >
    <!-- Embed Map -->
    <div class="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg mb-8 wow animate__zoomIn" data-wow-duration="1.2s">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d606.4225527115935!2d112.62582601778355!3d-8.000504607740917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1767501038517!5m2!1sen!2sid"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Location Info -->
    <p class="max-w-md mx-auto leading-relaxed mb-6 wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
      Venue Gedung UPT Rehabilitasi Tunanetra, Jl. Beringin No.13, Bandungrejosari, Kec. Sukun, Kota Malang
    </p>

    <a
        href="https://maps.app.goo.gl/qBjQhzVL5swCMnT8A"
        target="_blank"
        class="inline-block border border-[#f9f8f4] rounded-full px-8 py-2 text-lg hover:bg-[#f9f8f4] hover:text-[#4a5b34] transition-all duration-300 wow animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
    >
      Lihat Lokasi
    </a>

    <!-- Dekorasi bawah -->
    <div class="absolute bottom-0 left-0 w-full pointer-events-none">
      <img
          src="/images/decoration/bunga-putih.png"
          class="absolute bottom-[-20px] left-[-40px] w-1/3 animate-float-slow wow animate__fadeInLeft"
          alt="flower left"
          data-wow-duration="1.5s"
      />
      <img
          src="/images/decoration/daun-rosella.png"
          class="absolute bottom-[-20px] right-[-40px] w-1/4 animate-float-slow-rev wow animate__fadeInRight"
          alt="flower right"
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
</style>
