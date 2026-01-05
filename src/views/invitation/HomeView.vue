<template>
  <div class="relative">

    <!-- ========== MOBILE COVER (Hanya tampil di mobile) ========== -->
    <transition name="fade">
      <cover-mobile v-if="!invitationOpened && isMobile" @open="openInvitation"/>
    </transition>

    <!-- ========== MAIN LAYOUT ========== -->
    <div
        v-show="invitationOpened || !isMobile"
        class="flex flex-col md:flex-row h-screen"
    >
      <!-- LEFT PANEL (Desktop only) -->
      <div class="hidden md:flex flex-1 bg-[url('/trad-couple.jpg')] bg-cover bg-center relative">
        <div class="absolute inset-0 bg-black/40"></div>
        <h1 class="absolute bottom-12 left-12 text-white text-4xl font-[Playfair_Display]">
          Adelia & Hafizh
        </h1>
      </div>

      <!-- RIGHT PANEL -->
      <div id="main-scroll-container" class="flex-1 overflow-y-auto bg-[url('/cover.jpg')] bg-cover bg-center scroll-smooth">
        <!-- COVER -->
        <!-- COVER -->
        <CoverDesktop v-if="!isMobile" @scroll-down="scrollToSection('quote')"/>

        <div v-show="invitationOpened || !isMobile" class="flex flex-col h-auto">
          <MainLanding/>
          <QuoteSection/>
          <div id="couple">
             <CoupleSection/>
          </div>
          <StorySec/>
          <div id="gallery">
            <GallerySliderSection/>
          </div>
          <CountdownSection/>
          <div id="date">
            <MarriageContract/>
          </div>
          <div id="rsvp">
            <SendGift/>
          </div>
          <div id="location">
            <LocationMap/>
          </div>
          <FooterGreeting/>
        </div>
      </div>

      <!-- NAVIGATION PANEL -->
      <NavPanel v-if="invitationOpened || !isMobile"/>
    </div>

    <!-- MUSIC PANEL SELALU ADA -->
    <MusicPanel :shouldPlay="musicShouldPlay"/>

  </div>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue'
import { waitForWOW, disableWowHiding } from '@/lib/wow'
import NavPanel from '@/components/invitation/NavPanel.vue'
import CoverMobile from "@/components/invitation/CoverMobile.vue";
import CoverDesktop from "@/components/invitation/CoverDesktop.vue";
import MusicPanel from '@/components/invitation/MusicPanel.vue';
import StorySec from '@/components/invitation/StorySection.vue';
import MainLanding from '@/components/invitation/MainLanding.vue'
import QuoteSection from '@/components/invitation/QuoteSection.vue'
import CoupleSection from '@/components/invitation/CoupleSection.vue'
import GallerySliderSection from '@/components/invitation/GallerySlider.vue'
import CountdownSection from '@/components/invitation/CountdownSection.vue'
import MarriageContract from '@/components/invitation/MarriageContract.vue'
import LocationMap from '@/components/invitation/LocationMap.vue'
import SendGift from '@/components/invitation/SendGift.vue'
import FooterGreeting from '@/components/invitation/FooterGreeting.vue'

const invitationOpened = ref(false)
const isMobile = ref(false)
const musicShouldPlay = ref(false)

const DEBUG_WOW = true

let wowInstance = null

const initWow = () => {
  nextTick(() => {
    setTimeout(async () => {
      const container = document.querySelector('#main-scroll-container')
      const wowEls = document.querySelectorAll('.wow')

      if (DEBUG_WOW) {
        console.group('[WOW DEBUG] initWow')
        console.log('container exists:', !!container)
        console.log('wow elements count:', wowEls.length)
        console.log('invitationOpened:', invitationOpened.value, 'isMobile:', isMobile.value)
        console.groupEnd()
      }

      if (!container) {
        disableWowHiding()
        if (DEBUG_WOW) console.warn('[WOW DEBUG] No #main-scroll-container. Disabling wow hiding.')
        return
      }

      const WOW = await waitForWOW({ timeoutMs: 2000, intervalMs: 50 })
      if (!WOW) {
        disableWowHiding()
        if (DEBUG_WOW) console.warn('[WOW DEBUG] window.WOW not available. Disabling wow hiding.')
        return
      }

      // expose for DevTools inspection
      if (DEBUG_WOW) {
        window.__WOW__ = WOW
      }

      wowInstance = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: true,
        live: true,
        scrollContainer: '#main-scroll-container'
      })

      if (DEBUG_WOW) {
        window.__wowInstance__ = wowInstance
        console.log('[WOW DEBUG] Creating WOW instance with scrollContainer #main-scroll-container')
      }

      wowInstance.init()

      if (typeof wowInstance.sync === 'function') {
        wowInstance.sync()
      }

      // extra debug: log once on scroll whether any elements got animated class
      if (DEBUG_WOW) {
        let printed = false
        container.addEventListener(
          'scroll',
          () => {
            if (printed) return
            printed = true
            const animatedCount = document.querySelectorAll('.wow.animate__animated').length
            console.log('[WOW DEBUG] first scroll: animated elements count =', animatedCount)
          },
          { passive: true }
        )
      }
    }, 50)
  })
}

onMounted(() => {
  isMobile.value = window.innerWidth < 768

  // Only init WOW immediately on desktop (where content is visible)
  if (!isMobile.value) {
    initWow()
  }
})

function openInvitation() {
  invitationOpened.value = true
  musicShouldPlay.value = true

  // Init WOW on mobile when invitation is opened
  initWow()
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
