import Lenis from 'lenis'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    lerp: 0.1,          // inertia — lower = smoother/slower
    smoothWheel: true,
  })

  // Sync Lenis with GSAP's RAF so ScrollTrigger stays accurate
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Expose globally so components can access it if needed
  return {
    provide: { lenis },
  }
})
