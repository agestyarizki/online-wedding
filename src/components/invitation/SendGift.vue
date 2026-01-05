<template>
  <section class="relative bg-[#f9f8f4] text-center py-16 px-6 text-[#4a5b34]">
    <h2 class="font-script text-3xl tracking-widest mb-6 wow animate__fadeInDown" data-wow-duration="1s">Kirim Hadiah</h2>
    <p class="max-w-md mx-auto mb-8 wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
      Kehadiran Anda adalah hadiah terindah bagi kami, namun jika ingin mengirimkan hadiah,
      Anda dapat mengirimkannya melalui rekening berikut.
    </p>

    <button
        @click="openModal = true"
        class="bg-[#4a5b34] text-white px-8 py-3 rounded-full text-lg hover:bg-[#3b482a] transition-all duration-300 wow animate__zoomIn"
        data-wow-duration="1s"
        data-wow-delay="0.4s"
    >
      Kirim Hadiah
    </button>

    <!-- Modal -->
    <div
        v-if="openModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
          class="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative animate-fadeIn"
      >
        <button
            @click="openModal = false"
            class="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <h3 class="text-2xl font-script tracking-widest mb-4 text-[#4a5b34]">
          Pilih Rekening
        </h3>

        <div class="space-y-4">
          <!-- BCA Card -->
          <div
              class="bg-gradient-to-r from-[#032f59] to-[#0055A4] text-white rounded-xl p-5 shadow-md flex flex-col gap-3"
          >
            <div class="flex justify-between">
              <span class="text-lg font-semibold">BCA</span>
              <span class="text-sm opacity-80">VISA</span>
            </div>
            <p class="tracking-widest text-lg font-mono">**** **** **** 6789</p>
            <div class="flex justify-between items-center text-sm">
              <div>
                <p class="opacity-70">Pemilik Rekening</p>
                <p class="font-semibold">Adelia Salsabila</p>
              </div>
              <div class="flex items-center gap-2">
                <div>
                  <p class="opacity-70">No. Rekening</p>
                  <p class="font-semibold">1234567890
                    <button
                        @click="copyToClipboard('1234567890')"
                        class="hover:text-white transition"
                        title="Salin Nomor Rekening"
                    >
                      <i class="fa-regular fa-copy"></i>
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>

          <!-- Mandiri Card -->
          <div
              class="bg-gradient-to-r from-[#c9a82c] to-[#9c7b03] text-white rounded-xl p-5 shadow-md flex flex-col gap-3"
          >
            <div class="flex justify-between">
              <span class="text-lg font-semibold">Mandiri</span>
              <span class="text-sm opacity-80">VISA</span>
            </div>
            <p class="tracking-widest text-lg font-mono">**** **** **** 2345</p>
            <div class="flex justify-between items-center text-sm">
              <div>
                <p class="opacity-70">Account Holder</p>
                <p class="font-semibold">Muhammad Hafizh</p>
              </div>
              <div class="flex items-center gap-2">
                <div>
                  <p class="opacity-70">No. Rekening</p>
                  <p class="font-semibold">0000000000
                    <button
                        @click="copyToClipboard('0000000000')"
                        class="hover:text-white transition"
                        title="Copy Account Number"
                    >
                      <i class="fa-regular fa-copy"></i>
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <transition name="fade">
          <p
              v-if="copied"
              class="mt-4 text-green-600 font-semibold text-sm animate-pulse"
          >
            Copied!
          </p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const openModal = ref(false);
const copied = ref(false);

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  copied.value = true;
  setTimeout(() => (copied.value = false), 1500);
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
