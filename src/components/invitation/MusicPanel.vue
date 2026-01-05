<template>
  <div class="fixed top-4 right-4 z-[0]">
    <button
        @click="toggleMusic"
        class="w-10 h-10 rounded-full bg-[#2f2a26]/70 text-white flex items-center justify-center shadow-md hover:scale-105 hover:bg-[#2f2a26]/90 transition-all duration-300 backdrop-blur-sm"
    >
      <i
          :class="[
          'fa-regular ',
          'fa-circle-play',
          isPlaying ? 'text-[#bfa980]' : 'text-white'
        ]"
      ></i>
    </button>

    <audio ref="audioRef" loop>
      <source src="/musics/wedding-theme.mp3" type="audio/mpeg"/>
    </audio>
  </div>
</template>

<script setup>
import {ref, watch, onMounted} from 'vue'

const props = defineProps({
  shouldPlay: {type: Boolean, default: false} // dikontrol dari parent
})

const isPlaying = ref(false)
const audioRef = ref(null)

function toggleMusic() {
  if (!audioRef.value) return
  if (isPlaying.value) audioRef.value.pause()
  else audioRef.value.play()
  isPlaying.value = !isPlaying.value
}

// kalau prop berubah jadi true → auto play musik
watch(() => props.shouldPlay, (val) => {
  if (val && audioRef.value && !isPlaying.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      console.warn('Autoplay blocked by browser — user interaction required.')
    })
  }
})

// desktop autoplay
onMounted(() => {
  if (window.innerWidth >= 768 && audioRef.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(() => {
      console.warn('Desktop autoplay blocked.')
    })
  }
})
</script>