# 🎨 Animation Quick Reference

## Common Animation Patterns

### 1. Fade In Animations
```html
<!-- Simple fade in -->
<div class="wow animate__fadeIn" data-wow-duration="1s">Content</div>

<!-- Fade in from top -->
<div class="wow animate__fadeInDown" data-wow-duration="1s">Title</div>

<!-- Fade in from bottom -->
<div class="wow animate__fadeInUp" data-wow-duration="1s">Description</div>

<!-- Fade in from left -->
<div class="wow animate__fadeInLeft" data-wow-duration="1s">Left Item</div>

<!-- Fade in from right -->
<div class="wow animate__fadeInRight" data-wow-duration="1s">Right Item</div>
```

### 2. Zoom Animations
```html
<!-- Zoom in -->
<div class="wow animate__zoomIn" data-wow-duration="1.2s">Photo/Logo</div>

<!-- Zoom in with delay -->
<div class="wow animate__zoomIn" data-wow-duration="1s" data-wow-delay="0.3s">Card</div>
```

### 3. Special Animations
```html
<!-- Heart beat (for love symbols) -->
<div class="wow animate__heartBeat" data-wow-duration="1.5s">❤️</div>

<!-- Bounce -->
<div class="wow animate__bounce" data-wow-duration="1s">!</div>

<!-- Pulse -->
<div class="wow animate__pulse" data-wow-duration="1s">Button</div>

<!-- Shake -->
<div class="wow animate__shake" data-wow-duration="1s">Alert</div>
```

### 4. Staggered Animations (Sequential)
```html
<!-- Item 1 -->
<div class="wow animate__fadeInUp" data-wow-delay="0.1s">Item 1</div>

<!-- Item 2 -->
<div class="wow animate__fadeInUp" data-wow-delay="0.2s">Item 2</div>

<!-- Item 3 -->
<div class="wow animate__fadeInUp" data-wow-delay="0.3s">Item 3</div>

<!-- Item 4 -->
<div class="wow animate__fadeInUp" data-wow-delay="0.4s">Item 4</div>
```

### 5. Image Galleries
```html
<div class="grid grid-cols-3 gap-4">
  <img class="wow animate__zoomIn" data-wow-delay="0.1s" src="..." />
  <img class="wow animate__zoomIn" data-wow-delay="0.2s" src="..." />
  <img class="wow animate__zoomIn" data-wow-delay="0.3s" src="..." />
  <img class="wow animate__zoomIn" data-wow-delay="0.4s" src="..." />
  <img class="wow animate__zoomIn" data-wow-delay="0.5s" src="..." />
  <img class="wow animate__zoomIn" data-wow-delay="0.6s" src="..." />
</div>
```

### 6. Cards Animation
```html
<!-- Card 1 -->
<div class="card wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
  <h3>Title</h3>
  <p>Description</p>
</div>

<!-- Card 2 -->
<div class="card wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### 7. Background Decorations (with Looping)
```html
<!-- Left decoration -->
<img 
  src="/decoration-left.png" 
  class="absolute left-0 top-0 animate-float-slow wow animate__fadeInLeft"
  data-wow-duration="1.5s"
/>

<!-- Right decoration -->
<img 
  src="/decoration-right.png" 
  class="absolute right-0 top-0 animate-float-slow wow animate__fadeInRight"
  data-wow-duration="1.5s"
/>
```

## Looping Animations CSS

```css
/* Float animation (up and down) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Float slow */
@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

/* Sway animation (left and right) */
@keyframes sway {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg); }
}

.animate-sway {
  animation: sway 5s ease-in-out infinite;
  transform-origin: top center;
}

/* Pulse scale */
@keyframes pulse-scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse-scale {
  animation: pulse-scale 3s ease-in-out infinite;
}
```

## Duration Guidelines

| Speed | Duration | Use For |
|-------|----------|---------|
| Very Fast | 0.3s-0.5s | Small icons, buttons on hover |
| Fast | 0.6s-0.8s | Small elements, tooltips |
| Normal | 1s-1.2s | Most content, cards, images |
| Slow | 1.5s-2s | Large sections, hero images |
| Very Slow | 2s-3s | Background decorations |

## Delay Guidelines

| Delay | Use For |
|-------|---------|
| 0s-0.2s | First element in sequence |
| 0.2s-0.4s | Second element |
| 0.4s-0.6s | Third element |
| 0.6s-0.8s | Fourth element |
| 0.8s-1s | Fifth element and beyond |

**Tip:** Increment delay by 0.1s-0.2s for sequential items

## Complete Example: Section with Multiple Elements

```vue
<template>
  <section class="py-20">
    <!-- Title -->
    <h2 class="wow animate__fadeInDown" data-wow-duration="1s">
      Section Title
    </h2>
    
    <!-- Subtitle -->
    <p class="wow animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
      Section description text
    </p>
    
    <!-- Cards Grid -->
    <div class="grid grid-cols-3 gap-6">
      <div class="card wow animate__zoomIn" data-wow-delay="0.3s">Card 1</div>
      <div class="card wow animate__zoomIn" data-wow-delay="0.4s">Card 2</div>
      <div class="card wow animate__zoomIn" data-wow-delay="0.5s">Card 3</div>
    </div>
    
    <!-- Button -->
    <button class="wow animate__fadeInUp" data-wow-delay="0.7s">
      Call to Action
    </button>
    
    <!-- Decorations -->
    <img 
      src="/flower-left.png"
      class="absolute left-0 animate-float-slow wow animate__fadeInLeft"
      data-wow-duration="1.5s"
    />
    <img 
      src="/flower-right.png"
      class="absolute right-0 animate-float-slow wow animate__fadeInRight"
      data-wow-duration="1.5s"
    />
  </section>
</template>

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

## Available Animate.css Animations

### Attention Seekers
- `bounce`, `flash`, `pulse`, `rubberBand`, `shakeX`, `shakeY`, `headShake`, `swing`, `tada`, `wobble`, `jello`, `heartBeat`

### Back Entrances
- `backInDown`, `backInLeft`, `backInRight`, `backInUp`

### Bouncing Entrances
- `bounceIn`, `bounceInDown`, `bounceInLeft`, `bounceInRight`, `bounceInUp`

### Fading Entrances
- `fadeIn`, `fadeInDown`, `fadeInDownBig`, `fadeInLeft`, `fadeInLeftBig`, `fadeInRight`, `fadeInRightBig`, `fadeInUp`, `fadeInUpBig`, `fadeInTopLeft`, `fadeInTopRight`, `fadeInBottomLeft`, `fadeInBottomRight`

### Flippers
- `flip`, `flipInX`, `flipInY`

### Lightspeed
- `lightSpeedInRight`, `lightSpeedInLeft`

### Rotating Entrances
- `rotateIn`, `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight`

### Zooming Entrances
- `zoomIn`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInUp`

### Sliding Entrances
- `slideInDown`, `slideInLeft`, `slideInRight`, `slideInUp`

### Specials
- `hinge`, `jackInTheBox`, `rollIn`

---

**Pro Tips:**
1. Don't overuse animations - less is more
2. Keep durations consistent across similar elements
3. Use staggered delays for visual hierarchy
4. Test on mobile devices
5. Combine entrance animations with looping for decorations

