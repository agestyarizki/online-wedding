<template>
  <section class="bg-[url(/images/bg-pattern1.png)] bg-repeat bg-[length:440px_800px] py-20 px-6 text-center relative overflow-hidden">
    <!-- LAYER 1: BATIK BACKGROUND -->
    <div class="mt-16">
      <p class="font-photograph text-5xl text-[#3f6a13] wow animate__fadeInDown" data-wow-duration="1s">Pernikahan
        Kami</p>
    </div>
    <div class="mt-32">
      <span
          class="wow animate__fadeIn absolute w-full h-[300px] left-0 mt-[2rem] object-cover inline-block"
          data-wow-duration="1.5s"
      >
        <span
            class="block w-full h-[300px] bg-[url('/images/decoration/batik.png')] bg-repeat bg-[length:300px_300px] md:bg-[length:240px_240px]"
        ></span>
      </span>
      <div class="relative max-w-sm mx-auto flex flex-col items-center">

        <!-- LAYER 3: FRAME DEKOR -->
        <span
            class="absolute inset-0 w-[19rem] top-[-5rem] ml-auto mr-auto h-full object-contain z-20 pointer-events-none wow animate__zoomIn inline-block"
            data-wow-duration="1.2s"
            data-wow-delay="0.3s"
        >
          <img
              src="/images/decoration/frame-couple.png"
              alt="frame border"
              class="w-[19rem] h-full object-contain"
          />
        </span>

        <!-- Dekor bunga kanan -->
        <span
            class="absolute top-[-10px] right-[-10px] w-[8rem] z-30 rotate-180 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
        >
          <img
              src="/images/decoration/bunga-putih.png"
              alt="flower decor right"
              class="w-[8rem] wow animate__fadeInUp"
          />
        </span>
        <span
            class="absolute top-[-80px] right-[-3rem] w-[12rem] z-30 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
        >
          <img
              src="/images/decoration/daun-kayu-putih.png"
              alt="flower decor right"
              class="w-[12rem] wow animate__fadeInRight"
          />
        </span>

        <!-- Dekor bunga kiri -->
        <span
            class="absolute top-[18rem] left-[-4rem] w-[8rem] z-0 rotate-180 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.7s"
        >
          <img
              src="/images/decoration/gelombang-cinta.png"
              alt="flower decor righ"
              class="w-[8rem] wow animate__fadeInDown"
          />
        </span>
        <span
            class="absolute top-[9rem] left-[5px] w-[6rem] z-30 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
        >
          <img
              src="/images/decoration/anggrek-putih.png"
              alt="flower decor right"
              class="w-[6rem] wow animate__fadeInLeft"
          />
        </span>


        <!-- FRAME WRAPPER -->
        <div class="relative w-72 h-96 rounded-[2rem] overflow-hidden wow animate__fadeIn" data-wow-duration="1.2s"
             data-wow-delay="0.4s">
          <!-- LAYER 2: FOTO (sedikit zoom biar fit frame) -->
          <img
              :src="`${publicBase}images/couple/STR09701.JPG`"
              alt="Photo Adelia"
              class="absolute inset-0 w-[250px] mr-auto ml-auto h-full object-cover z-10"
          />
        </div>

        <!-- Nama & Detail -->
        <div class="mt-12 wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          <h2 class="font-script text-4xl text-[#3b422c] mb-1">Adelia Salsabila Putri</h2>
          <p class="font-body italic text-[#6d7056] text-sm">
            Putri dari Bapak Ahmad Supriyadi & Ibu Erwis Wirdiyanti
          </p>
          <p
              class="mt-4 flex items-center justify-center text-[#3b422c] font-body gap-2"
          >
            <i class="fa-brands fa-instagram text-[#3b422c]"></i> @AdeliaSalsabila
          </p>
        </div>
      </div>
    </div>
    <div class="mt-32">
      <p class="font-script text-6xl text-lime-900 wow animate__heartBeat" data-wow-duration="1.5s"
         data-wow-delay="0.3s">&</p>
    </div>
    <div class="mt-32">
      <span
          class="wow animate__fadeIn absolute w-full h-[300px] left-0 mt-[2rem] object-cover inline-block"
          data-wow-duration="1.5s"
      >
        <span
            class="block w-full h-[300px] bg-[url('/images/decoration/batik.png')] bg-repeat bg-[length:300px_300px] md:bg-[length:240px_240px]"
        ></span>
      </span>
      <div class="relative max-w-sm mx-auto flex flex-col items-center">

        <!-- LAYER 3: FRAME DEKOR -->
        <span
            class="absolute inset-0 w-[19rem] top-[-5rem] ml-auto mr-auto h-full object-contain z-20 pointer-events-none wow animate__zoomIn inline-block"
            data-wow-duration="1.2s"
            data-wow-delay="0.3s"
        >
          <img
              src="/images/decoration/frame-couple.png"
              alt="frame border"
              class="w-[19rem] h-full object-contain"
          />
        </span>

        <!-- Dekor bunga kanan -->
        <span
            class="absolute top-[-10px] right-[-10px] w-[8rem] z-30 rotate-180 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
        >
          <img
              src="/images/decoration/bunga-putih.png"
              alt="flower decor right"
              class="w-[8rem] wow animate__fadeInLeft"
          />
        </span>
        <span
            class="absolute top-[-80px] right-[-3rem] w-[12rem] z-30 wow animate__fadeInUp inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
        >
          <img
              src="/images/decoration/daun-kayu-putih.png"
              alt="flower decor right"
              class="w-[12rem]"
          />
        </span>

        <!-- Dekor bunga kiri -->
        <span
            class="absolute top-[18rem] left-[-4rem] w-[8rem] z-0 rotate-180 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.7s"
        >
          <img
              src="/images/decoration/gelombang-cinta.png"
              alt="flower decor right"
              class="w-[8rem] wow animate__fadeInRight"
          />
        </span>
        <span
            class="absolute top-[9rem] left-[5px] w-[6rem] z-30 inline-block"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
        >
          <img
              src="/images/decoration/anggrek-putih.png"
              alt="flower decor righ"
              class="w-[6rem] wow animate__fadeInUp"
          />
        </span>

        <!-- FRAME WRAPPER -->
        <div class="relative w-72 h-96 rounded-[2rem] overflow-hidden wow animate__fadeIn" data-wow-duration="1.2s"
             data-wow-delay="0.4s">
          <!-- LAYER 2: FOTO (sedikit zoom biar fit frame) -->
          <img
              :src="`${publicBase}images/couple/STR09756.JPG`"
              alt="Hafiz photo"
              :style="{ transform: 'scaleX(-1) scale(1.7) translateY(-1.2rem) translateX(-0.1rem)' }"
              class="absolute inset-0 w-[150px] mr-auto ml-auto h-full object-cover z-10"
          />
        </div>

        <!-- Nama & Detail -->
        <div class="mt-12 wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
          <h2 class="font-script text-4xl text-[#3b422c] mb-1">Muhammad Hafizh</h2>
          <p class="font-body italic text-[#6d7056] text-sm">
            Putra dari Bapak Ismail & Ibu Sri susilowatiandayani
          </p>
          <p
              class="mt-4 flex items-center justify-center text-[#3b422c] font-body gap-2"
          >
            <i class="fa-brands fa-instagram text-[#3b422c]"></i> @mhafizh_1
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

</style>
<script setup>
const publicBase = import.meta.env.BASE_URL;
</script>