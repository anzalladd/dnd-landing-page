<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true
        if (sectionRef.value && observer) observer.unobserve(sectionRef.value)
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

// Partner logos from Figma node 1:1543 — all rendered grayscale via CSS filter
const logos = [
  { src: '/images/partner-section/logo-1-6a59ca.png', alt: 'Partner 1', h: 'h-[36px]' },
  { src: '/images/partner-section/logo-2.png', alt: 'Partner 2', h: 'h-[32px]' },
  { src: '/images/partner-section/logo-3.png', alt: 'Partner 3', h: 'h-[30px]' },
  { src: '/images/partner-section/logo-4-icon.png', alt: 'Partner 4', h: 'h-[35px]' },
  { src: '/images/partner-section/logo-6-2d5d0c.png', alt: 'Partner 5', h: 'h-[27px]' },
  { src: '/images/partner-section/logo-7-icon.png', alt: 'Partner 6', h: 'h-[35px]' },
]
</script>

<template>
  <section ref="sectionRef" class="w-full flex flex-col items-stretch px-4 md:px-8 lg:px-[60px] max-w-8xl mx-auto bg-white py-[16px] overflow-hidden transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100' : 'opacity-0'">
    <!-- Marquee wrapper with edge fade masks -->
    <div class="relative overflow-hidden">
      <!-- Left fade -->
      <div class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
        style="background: linear-gradient(to right, white, transparent);" />
      <!-- Right fade -->
      <div class="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
        style="background: linear-gradient(to left, white, transparent);" />

      <div class="flex py-[12px]">
        <!-- 4 copies to ensure it fills ultra-wide screens even with only 6 logos -->
        <div v-for="n in 4" :key="n" class="flex w-max shrink-0 items-center gap-[64px] pr-[64px] animate-marquee" :aria-hidden="n > 1 ? 'true' : 'false'">
          <img v-for="(logo, i) in logos" :key="`${n}-${i}`" :src="logo.src" :alt="logo.alt"
            :class="[logo.h, 'w-auto max-w-none']" style="filter: grayscale(1) opacity(0.55); transition: filter 0.3s;"
            @mouseenter="(e) => (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) opacity(1)'"
            @mouseleave="(e) => (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) opacity(0.55)'" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
