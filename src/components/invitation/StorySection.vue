<template>
  <section
      id="love-story"
      class="relative py-16 bg-[#4a5b34] bg-opacity-95 bg-cover bg-center text-white"
      style="background-image: url('/images/bg-pattern2.png');"
  >
    <!-- Overlay agar teks tetap jelas -->
    <div class="absolute inset-0 bg-[#4a5b34]/70"></div>

    <div class="relative z-10 text-center mb-10">
      <h2 class="font-photograph text-5xl mb-5 text-[#abab80] drop-shadow-md wow animate__fadeInRight" data-wow-duration="1s">
        Kisah Cinta Kami
      </h2>
    </div>

    <!-- Swiper container -->
    <swiper
        :modules="[EffectFade, Pagination, Autoplay]"
        :slides-per-view="1.2"
        :space-between="20"
        :centered-slides="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        class="mySwiper px-4 wow animate__fadeInUp"
        data-wow-duration="1.2s"
        data-wow-delay="0.3s"
    >
      <swiper-slide
          v-for="(story, index) in stories"
          :key="index"
          class="bg-white text-[#3b422c] rounded-2xl overflow-hidden shadow-lg max-w-sm h-96 mx-auto"
      >
        <!-- Gambar -->
        <div class="relative">
          <img
              :src="story.image"
              :alt="story.title"
              class="w-full h-80 object-cover"
          />

          <!-- Overlay gradient transparan ke atas -->
          <div
              class="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent"
          ></div>
        </div>

        <!-- Cerita -->
        <div class="absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10">
          <h3 class="font-heading text-2xl mb-2 text-[#3b422c]">{{ story.title }}</h3>
          <p class="text-[#4f4f4f] italic text-sm leading-relaxed">
            {{ story.quote }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/effect-fade';
import {EffectFade} from 'swiper/modules';

const stories = [
  {
    title: 'Pertemuan Pertama',
    image: '/images/stories/1.png',
    quote:
        'Bertemu tanpa rencana di sebuah kesempatan sederhana. Hanya saling sapa dan obrolan singkat, tapi ada kesan yang tertinggal.',
  },
  {
    title: 'Mulai Saling Mengenal',
    image: '/images/stories/2.png',
    quote:
        'Percakapan semakin sering. Bukan hanya tentang hal umum, tapi mulai berbagi cerita hidup, nilai, dan rencana masa depan. Di sini rasa nyaman mulai tumbuh.',
  },
  {
    title: 'Momen Kesadaran',
    image: '/images/stories/4.png',
    quote:
        'Ada satu titik ketika keduanya sadar: ini bukan sekadar hubungan biasa. Ada keseriusan dan keinginan untuk berjalan lebih jauh bersama.',
  },
  {
    title: 'Melewati Ujian',
    image: '/images/stories/3.png',
    quote:
        'Perbedaan dan kesalahpahaman muncul, tetapi diselesaikan dengan komunikasi dan komitmen. Dari sini keyakinan semakin kuat.',
  },
  {
    title: 'Keputusan untuk Menikah',
    image: '/images/stories/5.JPG',
    quote:
        'Dengan niat yang jelas dan tujuan yang sama, keduanya sepakat melangkah ke jenjang pernikahan - bukan hanya karena cinta, tetapi karena kesiapan dan pilihan sadar untuk hidup bersama.',
  }
];
</script>

<style scoped>
.mySwiper {
  width: 100%;
  padding-bottom: 3rem;
}

.swiper-pagination-bullet {
  background: #f8f8f6 !important;
  opacity: 0.7;
}

.swiper-pagination-bullet-active {
  background: #d6c9a5 !important;
  opacity: 1;
}
</style>
