<template>
  <section id="precious" class="relative  bg-[#f8f8f6]">
    <!-- Background -->
    <div class="sticky top-0 flex justify-center z-20 overflow-hidden">
      <img
          src="/images/decoration/framegebyok.png"
          class="w-[110%] scale-[1.1] z-20 wow animate__fadeIn"
          alt="Frame Gebyok"
          data-wow-duration="1.5s"
      />
    </div>

    <div
        class="absolute inset-0 bg-[url('/images/bg-pattern1.png')] opacity-30 bg-repeat z-0"
    ></div>

    <!-- SCROLLING CONTENT BELOW (buat trigger perubahan isi frame) -->
    <div class="relative z-10 -mt-[25rem] text-center">
      <!-- Intro (visible first) -->
      <div
          ref="introSection"
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
          ref="gallerySection"
          class="h-[75vh] flex flex-col items-center justify-center"
      >
        <swiper
            :modules="[Autoplay, EffectFade]"
            effect="fade"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            class="w-[100%] aspect-[3/4] bottom-0 overflow-hidden shadow-lg wow animate__zoomIn"
            data-wow-duration="1.2s"
            data-wow-delay="0.2s"
        >
          <swiper-slide v-for="(image, i) in images" :key="i">
            <img :src="image" class="object-cover w-full h-full"/>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Motif Batik Top -->
      <img
          src="/images/decoration/batik.png"
          class="absolute -mt-[23rem] w-full object-cover wow animate__fadeIn"
          alt="batik motif"
          data-wow-duration="1.5s"
      />
    </div>
  </section>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// refs buat deteksi scroll area
const introSection = ref(null);
const gallerySection = ref(null);

const currentSection = ref("intro");

onMounted(() => {

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === introSection.value) currentSection.value = "intro";
            if (entry.target === gallerySection.value)
              currentSection.value = "gallery";
          }
        });
      },
      {threshold: 0.5}
  );

  observer.observe(introSection.value);
  observer.observe(gallerySection.value);
});

// Dynamic component switch
const currentComponent = computed(() => {
  return currentSection.value === "intro" ? "IntroFrame" : "GalleryFrame";
});

const images = [
  "/images/couple/couple1.jpg",
  "/images/couple/wanita.jpg",
  "/images/couple/couple1.jpg",
];
</script>

<!-- Components to display inside the frame -->
<script>
export default {
  components: {
    GalleryFrame: {
      template: `
        <swiper
            :modules="[Autoplay, EffectFade]"
            effect="fade"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            class="w-full h-full"
        >
          <swiper-slide
              v-for="(image, i) in ['/images/couple/couple1.jpg','/images/couple/couple2.jpg','/images/couple/couple3.jpg']"
              :key="i">
            <img :src="image" class="object-cover w-full h-full"/>
          </swiper-slide>
        </swiper>
      `,
      components: {Swiper, SwiperSlide},
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
