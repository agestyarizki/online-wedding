<template>
  <section
      id="save-the-date"
      class="relative flex flex-col items-center justify-center text-center pt-20 pb-40 px-0 bg-[#4a5b34] text-[#f8f8f6] overflow-hidden"
  >
    <!-- Title -->
    <h2
        class="font-photograph   italic text-4xl md:text-5xl mb-8 mt-8 text-[#f8f8f6] wow animate__fadeInDown"
        data-wow-duration="1s"
    >
      Simpan Tanggalnya
    </h2>

    <!-- Countdown Timer -->
    <div class="grid grid-cols-4 gap-3 mb-6 z-10">
      <div
          v-for="(unit, index) in timeUnits"
          :key="index"
          class="bg-[#f8f8f6] text-[#4a5b34] px-4 py-3 rounded-sm shadow-sm wow animate__zoomIn"
          :data-wow-duration="'1s'"
          :data-wow-delay="`${0.2 + index * 0.1}s`"
      >
        <p class="text-3xl font-bold">{{ unit.value }}</p>
        <p class="text-sm font-extralight uppercase tracking-wide">
          {{ unit.label }}
        </p>
      </div>
    </div>

    <!-- Date Text -->
    <p class="text-lg font-light tracking-wide wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
      {{ formattedDate }}
    </p>

    <!-- Bottom Decoration -->
    <div class="absolute bottom-0 left-0 w-full">
      <img
          src="/images/decoration/bunga-putih.png"
          class="absolute bottom-0 left-[-40px] w-1/3 animate-float-slow wow animate__fadeInLeft"
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
import {ref, onMounted, onUnmounted, computed} from "vue";

// target wedding date
const targetDate = new Date("2026-06-04T08:00:00");

// state
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let interval;

// update timer every second
const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(interval);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
};

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(interval));

// formatted time units for display
const timeUnits = computed(() => [
  {label: "Hari", value: days.value},
  {label: "Jam", value: hours.value},
  {label: "Menit", value: minutes.value},
  {label: "Detik", value: seconds.value},
]);

const formattedDate = computed(() =>
    targetDate.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
);
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
