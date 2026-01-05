import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import 'animate.css'

// iOS Safari fallback: prevent pinch-zoom gestures.
// Note: disabling zoom can reduce accessibility.
if (typeof window !== 'undefined') {
  const preventGesture = (e) => {
    e.preventDefault()
  }

  // iOS pinch zoom
  document.addEventListener('gesturestart', preventGesture, { passive: false })
  document.addEventListener('gesturechange', preventGesture, { passive: false })
  document.addEventListener('gestureend', preventGesture, { passive: false })

  // Prevent double-tap to zoom (keep taps/clicks working)
  let lastTouchEnd = 0
  document.addEventListener(
    'touchend',
    (e) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    },
    { passive: false }
  )
}

const app = createApp(App)
app.use(router)
app.mount('#app')
