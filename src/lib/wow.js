import WOW from './vendor/wow.js'

// debug: mark that wowjs module has been loaded
if (typeof window !== 'undefined') {
  window.__WOWJS_LOADED__ = true
}

export function getWOW() {
  return WOW
}

/**
 * Wait for WOW constructor to be available.
 * Resolves with WOW class immediately since we are importing it directly.
 * Kept for API compatibility with existing code.
 */
export function waitForWOW({ timeoutMs = 1000, intervalMs = 50 } = {}) {
  return Promise.resolve(WOW)
}

/**
 * If WOW can't be initialized, call this to show all `.wow` elements.
 */
export function disableWowHiding() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.add('wow-disabled')
}
