<template>
  <section class="relative flex flex-col items-center justify-center text-center text-white py-20 px-6 overflow-hidden bg-[#3a4928]">
    <!-- Batik utama -->
    <img
        src="/images/decoration/batik.png"
        alt="background batik"
        class="absolute inset-0 w-full h-20 object-cover z-0 wow animate__fadeIn"
        data-wow-duration="1.5s"
    />

    <!-- Konten utama -->
    <div class="relative z-10 max-w-xl mx-auto m-10">
      <p class="italic text-gray-200 font-body mb-8 wow animate__fadeInDown" data-wow-duration="1s" data-wow-delay="0.2s">

      </p>

      <h2 class="font-arabic text-base mt-20 mb-6 leading-relaxed wow animate__fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </h2>

      <p class="italic text-sm font-body text-[#f2f1ec] leading-relaxed wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
        agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
        Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
      </p>

      <p class="mt-6 font-heading italic text-sm text-[#e6e3d6] wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
        (QS. Ar-Rum: 21)
      </p>
    </div>
  </section>
</template>

<script setup>
// WOW.js diinisialisasi di HomeView.vue (parent component)
</script>
