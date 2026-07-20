<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisibleImage = ref(false)
const canvasRef = ref<HTMLCanvasElement | null>(null)

// Typewriter state
const fullText = 'D&D Associates is a studio that designs how digital products feel to use.'
const typedText = ref('')
const splitIndex = 'D&D Associates'.length  // where grey→black split happens
const isTypingDone = ref(false)
const showCursor = ref(true)

let animFrame: number | null = null
let typeInterval: ReturnType<typeof setInterval> | null = null
let cursorInterval: ReturnType<typeof setInterval> | null = null

const canvasVisible = ref(false)

onMounted(() => {
  // Blinking cursor
  cursorInterval = setInterval(() => { showCursor.value = !showCursor.value }, 530)
  // Start typing right away
  setTimeout(() => startTyping(), 100)
  // Start glitch shortly after mount — independently of typing
  setTimeout(() => initGlitch(), 100)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
  if (typeInterval) clearInterval(typeInterval)
  if (cursorInterval) clearInterval(cursorInterval)
})

function startTyping() {
  let i = 0
  typeInterval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value = fullText.slice(0, ++i)
    } else {
      clearInterval(typeInterval!)
      isTypingDone.value = true
    }
  }, 38) // ms per character
}

function initGlitch() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const logoImg = new Image()
  logoImg.onload = () => {
    const resize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    // Fade in the canvas once the logo is ready
    setTimeout(() => { canvasVisible.value = true }, 100)
    runGlitch(ctx, canvas, logoImg)
  }
  logoImg.src = '/images/header-hero/hero-logo.svg'
}

function runGlitch(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, logo: HTMLImageElement) {
  const chars = 'D&DASSOCIATESdesignstudio0110!@#$[]{}|/\\'
  const fontSize = 13

  // Off-screen trail buffer
  const trail = document.createElement('canvas')
  const trailCtx = trail.getContext('2d')!

  function loop() {
    // Keep trail canvas in sync with main canvas size
    if (trail.width !== canvas.width || trail.height !== canvas.height) {
      trail.width = canvas.width
      trail.height = canvas.height
    }

    const cols = Math.floor(canvas.width / fontSize)
    if (!('_drops' in canvas)) {
      ; (canvas as any)._drops = Array.from({ length: cols }, () => Math.random() * -30)
        ; (canvas as any)._speeds = Array.from({ length: cols }, () => 0.25 + Math.random() * 0.55)
    }
    const drops: number[] = (canvas as any)._drops
    const speeds: number[] = (canvas as any)._speeds

    // ── Step 1: accumulate trail on off-screen canvas ──────────────
    // Fade previous frame to create a trailing effect without adding a solid background
    trailCtx.globalCompositeOperation = 'destination-out'
    trailCtx.fillStyle = 'rgba(0,0,0,0.08)' // Restore slower fade out for trail effect
    trailCtx.fillRect(0, 0, trail.width, trail.height)
    trailCtx.globalCompositeOperation = 'source-over'

    trailCtx.font = `bold ${fontSize}px monospace`
    for (let i = 0; i < Math.min(cols, drops.length); i++) {
      const char = chars[Math.floor(Math.random() * chars.length)]!
      const x = i * fontSize
      const y = drops[i]! * fontSize
      // Draw much more opaque white text
      trailCtx.fillStyle = `rgba(255, 255, 255, ${0.9 + Math.random() * 1})`
      trailCtx.fillText(char, x, y)

      // Horizontal glitch slice
      if (Math.random() < 0.012) {
        const sy = Math.random() * trail.height
        const sh = Math.max(1, Math.floor(2 + Math.random() * 8))
        try {
          const slice = trailCtx.getImageData(0, sy, trail.width, sh)
          trailCtx.putImageData(slice, (Math.random() - 0.5) * 16, sy)
        } catch (_) { }
      }

      drops[i]! += speeds[i]!
      if (drops[i]! * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
    }

    // ── Step 2: clip trail to logo silhouette ─────────────────────
    // Save raw trail pixels so next frame can accumulate properly
    const rawTrail = trailCtx.getImageData(0, 0, trail.width, trail.height)

    trailCtx.save()
    trailCtx.globalCompositeOperation = 'destination-in'
    trailCtx.drawImage(logo, 0, 0, trail.width, trail.height)
    trailCtx.restore()

    // ── Step 3: compose final frame ───────────────────────────────
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Base: fully solid white logo
    ctx.save()
    ctx.globalAlpha = 1
    ctx.drawImage(logo, 0, 0, canvas.width, canvas.height)
    ctx.restore()

    // Overlay: glitch punches transparent holes into the white logo
    // This leaves the text looking like white with 50% opacity!
    ctx.save()
    ctx.globalCompositeOperation = 'destination-out'
    ctx.globalAlpha = 0.5
    ctx.drawImage(trail, 0, 0)
    ctx.restore()

    // ── Step 4: restore raw trail for next frame ──────────────────
    trailCtx.putImageData(rawTrail, 0, 0)

    animFrame = requestAnimationFrame(loop)
  }

  animFrame = requestAnimationFrame(loop)
}
</script>

<template>
  <section
    class="w-full flex flex-col items-stretch pt-8 pb-0 px-4 md:pt-10 md:px-8 lg:pt-[40px] lg:px-[60px] gap-6 lg:gap-[40px] max-w-8xl mx-auto">
    <div class="flex flex-col self-stretch gap-6 lg:gap-[40px]">

      <!-- Headline with typewriter animation -->
      <h1
        class="font-alegreya font-normal text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px] tracking-[-0.01em] text-[#121212] max-w-[972px] min-h-[112px]">
        <!-- Grey prefix portion -->
        <span v-if="typedText.length > 0" class="text-[#A8A8A8]">
          {{ typedText.slice(0, Math.min(typedText.length, splitIndex)) }}
        </span>
        <!-- Black suffix portion -->
        <span v-if="typedText.length > splitIndex">
          {{ typedText.slice(splitIndex) }}
        </span>
        <!-- Blinking cursor -->
        <span v-if="!isTypingDone || showCursor"
          class="inline-block w-[2px] h-[1em] bg-[#121212] align-middle ml-[2px] -mt-[3px]"
          :style="{ opacity: showCursor ? 1 : 0 }" />
      </h1>

      <!-- KV Container: visible immediately on load -->
      <div class="relative w-full h-[400px] md:h-[529px] rounded-[12px] overflow-hidden">
        <!-- Figma background photo with slow zoom animation -->
        <img src="/images/header-hero/hero-bg.png" alt="Hero background"
          class="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
          style="object-position: center -82px;" />

        <!-- Fluted Glassmorphism Overlay -->
        <div class="absolute inset-0 z-0 pointer-events-none fluted-glass"></div>

        <!-- Centred canvas: fades in when glitch starts -->
        <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <canvas ref="canvasRef" class="block transition-opacity duration-1000 ease-out" :style="{
            opacity: canvasVisible ? 1 : 0,
            filter: 'drop-shadow(0px 4px 16px rgba(0,0,0,0.85))'
          }" style="width: clamp(220px, 43%, 568px); height: auto; aspect-ratio: 568 / 271;" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes hero-fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hero-zoom {

  0%,
  100% {
    transform: scale(1.03);
  }

  50% {
    transform: scale(1);
  }
}

.animate-hero-zoom {
  animation:
    hero-fade-in 1.5s ease-out forwards,
    hero-zoom 10s ease-in-out infinite;
}

.fluted-glass {
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  background-image:
    repeating-linear-gradient(to left,
      rgba(255, 255, 255, 0.01) 0px,
      rgba(40, 40, 40, 0.06) 41.8px,
      rgba(255, 255, 255, 0.01) 55px),
    url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E');
}
</style>
