<template>
  <section id="gallery">
    <h2>Our Gallery</h2>
    <p>Memories captured beautifully to share with you.</p>
    <div class="gallery-grid" ref="grid">
      <div class="gallery-sizer" aria-hidden="true"></div>
      <a
          v-for="(img, i) in images"
          :key="i"
          class="gallery-item"
          :href="img.full"
      >
        <img :src="img.thumb" :alt="`Gallery ${i+1}`" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import baguetteBox from 'baguettebox.js'

const grid = ref(null)
const images = [
  { thumb: 'https://picsum.photos/id/1015/600/800', full: 'https://picsum.photos/id/1015/1200/1600' },
  { thumb: 'https://picsum.photos/id/1016/600/450', full: 'https://picsum.photos/id/1016/1200/900' },
  { thumb: 'https://picsum.photos/id/1021/600/800', full: 'https://picsum.photos/id/1021/1200/1600' },
  { thumb: 'https://picsum.photos/id/1025/600/500', full: 'https://picsum.photos/id/1025/1200/1000' },
  { thumb: 'https://picsum.photos/id/1035/600/700', full: 'https://picsum.photos/id/1035/1200/1400' },
  { thumb: 'https://picsum.photos/id/1041/600/450', full: 'https://picsum.photos/id/1041/1200/900' }
]

onMounted(() => {
  imagesLoaded(grid.value, () => {
    new Masonry(grid.value, {
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-sizer',
      gutter: 12,
      percentPosition: true
    })
  })
  baguetteBox.run('.gallery-grid', { animation: 'fadeIn' })
})
</script>
