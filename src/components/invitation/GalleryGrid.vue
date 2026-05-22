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
        <img :src="img.thumb" :alt="`Gallery ${i+1}`" loading="lazy" />
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
  {
    thumb: '/images/galery/IMG_6108.webp', full: '/images/galery/IMG_6108.webp'
  },
  {
    thumb: '/images/galery/IMG_6110.webp', full: '/images/galery/IMG_6110.webp'
  },
  {
    thumb: '/images/galery/IMG_6115.webp', full: '/images/galery/IMG_6115.webp'
  },
  {
    thumb: '/images/galery/IMG_6121.webp', full: '/images/galery/IMG_6121.webp'
  },
  {
    thumb: '/images/galery/IMG_6124.webp', full: '/images/galery/IMG_6124.webp'
  },
  {
    thumb: '/images/galery/IMG_6142.webp', full: '/images/galery/IMG_6142.webp'
  },
  {
    thumb: '/images/galery/IMG_6146.webp', full: '/images/galery/IMG_6146.webp'
  },
  {
    thumb: '/images/galery/IMG_6149.webp', full: '/images/galery/IMG_6149.webp'
  },
  {
    thumb: '/images/galery/IMG_6153.webp', full: '/images/galery/IMG_6153.webp'
  },
  {
    thumb: '/images/galery/IMG_6154.webp', full: '/images/galery/IMG_6154.webp'
  },
  {
    thumb: '/images/galery/IMG_6176.webp', full: '/images/galery/IMG_6176.webp'
  },
  {
    thumb: '/images/galery/IMG_6177.webp', full: '/images/galery/IMG_6177.webp'
  }
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
