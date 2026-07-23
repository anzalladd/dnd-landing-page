<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ── Refs ──────────────────────────────────────────────────────────────────────
const headlineRef = ref<HTMLElement | null>(null)
const subheadRef = ref<HTMLElement | null>(null)
const arrowGroupRef = ref<HTMLElement | null>(null)

const leftBgCloudRef = ref<HTMLElement | null>(null)
const rightBgCloudRef = ref<HTMLElement | null>(null)
const leftCloudRef = ref<HTMLElement | null>(null)
const rightCloudRef = ref<HTMLElement | null>(null)
const leftAngelRef = ref<HTMLElement | null>(null)
const rightAngelRef = ref<HTMLElement | null>(null)
const leftPillarRef = ref<HTMLElement | null>(null)
const rightPillarRef = ref<HTMLElement | null>(null)

// ── GSAP entrance ─────────────────────────────────────────────────────────────
onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })


  // 1. BG Cloud spreads fade in first, then infinitely drift left/right
  tl.fromTo(leftBgCloudRef.value, { opacity: 0, x: -30 }, {
    opacity: 1,
    x: 0,
    duration: 1.0,
    onComplete: () => {
      gsap.to(leftBgCloudRef.value, {
        x: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })
    }
  }, 0)

  tl.fromTo(rightBgCloudRef.value, { opacity: 0, x: 30 }, {
    opacity: 1,
    x: 0,
    duration: 1.0,
    onComplete: () => {
      gsap.to(rightBgCloudRef.value, {
        x: 15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      })
    }
  }, 0)

  // 2. Main Cloud spreads drift in
  tl.fromTo(leftCloudRef.value, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1.0 }, 0.05)
  tl.fromTo(rightCloudRef.value, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.0 }, 0.05)

  // 3. Pillar groups slide in alongside the clouds
  tl.fromTo(leftPillarRef.value, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1.0 }, 0.1)
  tl.fromTo(rightPillarRef.value, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1.0 }, 0.1)

  // 4. Angel characters ZOOM IN from small scale after clouds settle
  tl.fromTo(leftAngelRef.value,
    { opacity: 0, scale: 0.7, transformOrigin: 'bottom left' },
    { opacity: 1, scale: 1, duration: 1.0, ease: 'back.out(1.4)' },
    0.75,
  )
  tl.fromTo(rightAngelRef.value,
    { opacity: 0, scale: 0.7, transformOrigin: 'bottom right' },
    { opacity: 1, scale: 1, duration: 1.0, ease: 'back.out(1.4)' },
    0.85,
  )

  // 5. Headline fades up after characters appear
  tl.fromTo(headlineRef.value, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9 }, 1.0)

  // 6. Subhead follows
  tl.fromTo(subheadRef.value, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, 1.2)

  // 7. Arrow fades in last then loops with a gentle float
  tl.fromTo(
    arrowGroupRef.value,
    { opacity: 0, y: 10 },
    {
      opacity: 1, y: 0, duration: 0.7,
      onComplete: () => {
        gsap.to(arrowGroupRef.value, {
          y: 10,
          duration: 1.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      },
    },
    1.4,
  )

  // 8. Add Parallax effects tied to scroll
  const section = document.querySelector('.hero-section')

  // Background clouds (deepest layer) move slowest (stay on screen longer)
  gsap.to([leftBgCloudRef.value, rightBgCloudRef.value], {
    y: 150,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Main clouds (mid layer)
  gsap.to([leftCloudRef.value, rightCloudRef.value], {
    y: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Angels (foreground layer)
  gsap.to([leftAngelRef.value, rightAngelRef.value], {
    y: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })

  // Pillars (closest foreground layer)
  gsap.to([leftPillarRef.value, rightPillarRef.value], {
    y: -50, // move up faster
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<template>
  <section class="hero-section relative w-full overflow-hidden bg-white" style="height: calc(100svh - 82px);">

    <!--
      Layer order (bottom → top):
      z-0  background clouds
      z-5  main clouds
      z-10 angel figures
      z-20 pillars
      z-30 text content
    -->

    <!-- ── Left BG Cloud ───────────────────── -->
    <img ref="leftBgCloudRef" src="/images/hero/left_bg_cloud.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-[-2%] left-0 z-10
             w-[70vw] md:w-[55vw] lg:w-[45vw] 2xl:w-[40vw] max-w-[600px] h-auto
             object-contain object-bottom-left" style="opacity: 0;" />

    <!-- ── Right BG Cloud ──────────────────── -->
    <img ref="rightBgCloudRef" src="/images/hero/right_bg_cloud.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-[-2%] right-0 z-10
             w-[70vw] md:w-[55vw] lg:w-[45vw] 2xl:w-[40vw] max-w-[600px] h-auto
             object-contain object-bottom-right" style="opacity: 0;" />

    <!-- ── Left Main Cloud ───────────────────── -->
    <img ref="leftCloudRef" src="/images/hero/left_cloud.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 left-0 z-5
             w-[90vw] md:w-[75vw] lg:w-[65vw] 2xl:w-[60vw] max-w-[955px] h-auto
             object-contain object-bottom-left" style="opacity: 0;" />

    <!-- ── Right Main Cloud ──────────────────── -->
    <img ref="rightCloudRef" src="/images/hero/right_cloud.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 right-0 z-5
             w-[90vw] md:w-[75vw] lg:w-[65vw] 2xl:w-[60vw] max-w-[955px] h-auto
             object-contain object-bottom-right" style="opacity: 0;" />

    <!-- ── Left angel figure ─────────────────────────────────────────────── -->
    <img ref="leftAngelRef" src="/images/hero/left_char.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 left-[-5%] md:left-[0%] 2xl:left-[4%] z-10
             h-[35vh] md:h-[45vh] lg:h-[50vh] 2xl:h-[60vh] max-h-[650px] w-auto
             object-contain object-bottom" style="opacity: 0;" />

    <!-- ── Right angel figure ────────────────────────────────────────────── -->
    <img ref="rightAngelRef" src="/images/hero/right_char.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 right-[-5%] md:right-[0%] 2xl:right-[4%] z-10
             h-[35vh] md:h-[45vh] lg:h-[50vh] 2xl:h-[60vh] max-h-[650px] w-auto
             object-contain object-bottom" style="opacity: 0;" />

    <!-- ── Left column/pillar group ───────────────────────── -->
    <img ref="leftPillarRef" src="/images/hero/left_pillar.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 left-[-10%] md:left-[-5%] 2xl:left-0 z-20
             h-[45vh] md:h-[55vh] lg:h-[60vh] 2xl:h-[70vh] max-h-[1000px] w-auto
             object-contain object-bottom" style="opacity: 0;" />

    <!-- ── Right column/pillar group ─────────────────────── -->
    <img ref="rightPillarRef" src="/images/hero/right_pillar.webp" alt="" aria-hidden="true" class="pointer-events-none select-none
             absolute bottom-0 right-[-10%] md:right-[-5%] 2xl:right-0 z-20
             h-[45vh] md:h-[55vh] lg:h-[60vh] 2xl:h-[70vh] max-h-[1000px] w-auto
             object-contain object-bottom" style="opacity: 0;" />

    <!-- ── Text content (centred, above all imagery) ─────────────────────── -->
    <div class="relative z-30 flex flex-col items-center text-center
             px-4
             pt-[20px] md:pt-[140px] lg:pt-[156px]
             pb-[280px] md:pb-[360px] lg:pb-[420px]">

      <!-- Headline -->
      <h1 ref="headlineRef" class="font-alegreya font-medium tracking-[-0.015em]
               text-[40px]  leading-[48px]
               md:text-[60px] md:leading-[68px]
               lg:text-[72px] lg:leading-[80px]
               max-w-[920px] mx-auto" style="opacity: 0;">
        <span class="text-[#A8A8A8]">Research</span>
        <span class="text-[#121212]"> before pixels.</span><br />
        <span class="text-[#121212]">Strategy before scale.</span>
      </h1>

      <!-- Subheadline -->
      <p ref="subheadRef" class="font-sans font-medium text-[#121212]/80
               text-[15px] leading-[24px]
               md:text-[16px] md:leading-[26px]
               max-w-[580px] mx-auto mt-6 md:mt-8" style="opacity: 0;">
        D&amp;D Associates helps startups and growing businesses research,
        design, and build digital products that stay relevant, solve real
        problems, and scale with confidence.
      </p>

      <!-- Scroll indicator -->
      <div ref="arrowGroupRef" class="flex flex-col items-center gap-[10px] mt-[64px] md:mt-[80px] lg:mt-[96px]"
        style="opacity: 0;">
        <span class="font-sans text-[11px] tracking-[0.08em] uppercase text-[#A8A8A8] select-none">
          please scroll down
        </span>
        <img src="/images/hero/arrow.webp" alt="Scroll down" class="w-[30px] h-auto object-contain" draggable="false" />
      </div>

    </div>

  </section>
</template>
