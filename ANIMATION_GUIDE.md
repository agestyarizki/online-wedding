# 🎨 Wedding Invitation - Animation Guide

## 📚 Overview
Proyek ini menggunakan kombinasi **WOW.js** dan **Animate.css** untuk membuat animasi scroll-based yang elegan dan smooth pada setiap komponen undangan.

---

## 🎯 Components Animation Summary

### 1. CoverMobile.vue
**Tipe:** Vue Native Animations (onMounted)
- ❌ Tidak menggunakan WOW.js (karena fixed layout, tidak scroll)
- ✅ Custom CSS keyframes + Vue reactive state

**Animasi:**
- Text masuk bertahap (fadeInDown, fadeIn, fadeInUp)
- Logo zoom in dari kecil
- Dekorasi masuk dari samping (fadeInLeft/Right)
- Looping: bunga & daun bergerak smooth (float, sway)

---

### 2. MainLanding.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Foto couple: `zoomIn` dengan delay 0.3s
- Background decorations: looping animations (float, bounce-rotate)

---

### 3. QuoteSection.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Batik background: `fadeIn`
- Title: `fadeInDown` (0.2s)
- Ayat Arab: `fadeIn` (0.4s)
- Terjemahan: `fadeInUp` (0.6s)
- Sumber ayat: `fadeInUp` (0.8s)

---

### 4. CoupleSection.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Title "The Wedding Of": `fadeInDown`
- Frame dekor: `zoomIn` (0.3s)
- Foto couple: `fadeIn` (0.4s)
- Bunga kanan: `fadeInRight` (0.4s-0.5s)
- Bunga kiri: `fadeInLeft` (0.5s-0.7s)
- Info pengantin: `fadeInUp` (0.6s)
- Simbol "&": `heartBeat` ❤️ (0.3s)

---

### 5. CountdownSection.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Title "Save the Date": `fadeInDown`
- Countdown boxes (4 boxes): `zoomIn` staggered (0.2s-0.5s)
- Date text: `fadeInUp` (0.6s)
- Bottom decorations: `fadeInLeft/Right` + looping float

---

### 6. StorySection.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Title "Our Love Story": `fadeInDown`
- Swiper gallery: `fadeInUp` (0.3s)

---

### 7. GallerySlider.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Frame Gebyok: `fadeIn`
- "Precious Moment": `fadeInDown`
- Quote text: `fadeInUp` (0.3s)
- Gallery swiper: `zoomIn` (0.2s)
- Batik motif: `fadeIn`

---

### 8. MarriageContract.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Top decoration: `fadeIn`
- Marriage Contract card: `fadeInUp` (0.2s)
- Reception card: `fadeInUp` (0.4s)
- Bottom flowers: `fadeInLeft/Right` + looping

---

### 9. SendGift.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Title "Send Gift": `fadeInDown`
- Description: `fadeInUp` (0.2s)
- Button: `zoomIn` (0.4s)

---

### 10. LocationMap.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Google Maps: `zoomIn`
- Address: `fadeInUp` (0.2s)
- Button: `fadeInUp` (0.4s)
- Flowers: `fadeInLeft/Right` + looping

---

### 11. FooterGreeting.vue
**Tipe:** WOW.js Scroll Animation

**Animasi:**
- Top decorations: `fadeInLeft/Right` + looping
- "Thank You" text: `fadeIn` (0.3s)
- Bottom flowers: `fadeInLeft/Right` (0.5s) + looping
- Batik pattern: `fadeIn`

---

## 🎨 Animation Types

### Entrance Animations (One-time)
| Animation | Description | Use Case |
|-----------|-------------|----------|
| `fadeIn` | Fade dari transparan | Text, backgrounds |
| `fadeInDown` | Masuk dari atas + fade | Titles, headers |
| `fadeInUp` | Masuk dari bawah + fade | Descriptions, buttons |
| `fadeInLeft` | Masuk dari kiri + fade | Left decorations |
| `fadeInRight` | Masuk dari kanan + fade | Right decorations |
| `zoomIn` | Zoom dari kecil | Logos, photos, cards |
| `heartBeat` | Pulse/detak jantung | Special symbols |

### Looping Animations (Continuous)
| Animation | Description | Duration |
|-----------|-------------|----------|
| `float` | Naik-turun smooth | 4-5s |
| `float-slow` | Naik-turun lebih lambat | 6-7s |
| `sway-slow` | Bergoyang seperti angin | 6s |
| `sway-medium` | Bergoyang medium | 5s |
| `bounce-rotate` | Bouncing dengan rotasi ringan | varies |

---

## ⚙️ WOW.js Configuration

```javascript
import { WOW } from 'wowjs'

onMounted(() => {
  const wow = new WOW({
    boxClass: 'wow',              // Class untuk trigger
    animateClass: 'animate__animated', // Class dari animate.css
    offset: 100,                  // Trigger 100px before viewport
    mobile: true,                 // Enable di mobile
    live: true                    // Detect dynamic elements
  })
  wow.init()
})
```

---

## 📝 How to Use WOW.js

### 1. Import di component:
```vue
<script setup>
import { onMounted } from 'vue'
import { WOW } from 'wowjs'

onMounted(() => {
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 100,
    mobile: true,
    live: true
  })
  wow.init()
})
</script>
```

### 2. Tambahkan class di HTML:
```html
<div 
  class="wow animate__fadeInUp" 
  data-wow-duration="1s" 
  data-wow-delay="0.3s"
>
  Your Content
</div>
```

### 3. Attributes:
- `class="wow animate__[animationName]"` - Required
- `data-wow-duration="1s"` - Animation duration (optional)
- `data-wow-delay="0.5s"` - Delay before animation starts (optional)
- `data-wow-offset="200"` - Custom offset for this element (optional)
- `data-wow-iteration="2"` - Repeat animation N times (optional)

---

## 🎯 Best Practices

### 1. **Staggered Delays**
Gunakan delay berbeda untuk elemen yang berurutan:
```html
<div class="wow animate__fadeInUp" data-wow-delay="0.2s">First</div>
<div class="wow animate__fadeInUp" data-wow-delay="0.4s">Second</div>
<div class="wow animate__fadeInUp" data-wow-delay="0.6s">Third</div>
```

### 2. **Duration Control**
- Fast animations: `0.5s-0.8s`
- Normal animations: `1s-1.2s`
- Slow animations: `1.5s-2s`

### 3. **Offset Optimization**
- Default: `100px` (good for most cases)
- Early trigger: `200px-300px`
- Late trigger: `50px` or less

### 4. **Mobile Consideration**
- Pastikan `mobile: true` di config
- Test di mobile device
- Hindari animasi terlalu kompleks di mobile

### 5. **Performance**
- Gunakan CSS transforms (translateX, translateY, scale, rotate)
- Avoid animating width, height, top, left
- Use `will-change` untuk animasi kompleks (hati-hati)

---

## 🔧 Troubleshooting

### Animasi tidak muncul?
1. ✅ Check apakah `wow.init()` dipanggil di `onMounted()`
2. ✅ Check apakah class `wow` dan `animate__[name]` ada
3. ✅ Check apakah `animate.css` sudah diimport di `main.js`
4. ✅ Check browser console untuk errors
5. ✅ Check apakah element visible di viewport

### Animasi terlalu cepat/lambat?
- Adjust `data-wow-duration`
- Adjust `data-wow-delay`

### Animasi trigger terlalu cepat/lambat?
- Adjust `offset` di WOW config
- Atau gunakan `data-wow-offset` per element

---

## 📦 Dependencies

```json
{
  "wowjs": "^1.1.3",
  "animate.css": "^4.1.1"
}
```

Install with:
```bash
npm install wowjs animate.css
```

---

## 🎉 Result

Dengan implementasi ini, undangan wedding memiliki:
- ✨ Professional entrance animations
- 🌺 Living decorations dengan looping animations
- 📱 Mobile-friendly & responsive
- 🎯 Smooth scroll experience
- 💫 Clear visual hierarchy dengan staggered timing
- 🚀 Optimized performance

---

## 📖 References

- [WOW.js Documentation](https://wowjs.uk/)
- [Animate.css Documentation](https://animate.style/)
- [Vue.js Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)

---

**Last Updated:** January 3, 2026
**Version:** 1.0.0

