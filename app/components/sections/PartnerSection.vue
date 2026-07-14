<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const isVisibleTitle = ref(false)
const isVisibleLogos = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisibleTitle.value = true
        setTimeout(() => { isVisibleLogos.value = true }, 200)
        if (sectionRef.value && observer) {
          observer.unobserve(sectionRef.value)
        }
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="flex flex-col items-stretch gap-5 w-full max-w-8xl mx-auto px-4 md:px-[60px] py-10 lg:py-20">

    <!-- Title Area -->
    <div 
      class="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 transition-all duration-1000 ease-out"
      :class="isVisibleTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >

      <!-- Heading -->
      <h2 class="font-basis font-medium text-[40px] leading-[48px] tracking-[-0.005em] text-hero-heading m-0">
        <span class="text-muted-text">D&D Associates </span>is a design<br class="hidden lg:block">
        and development studio<br class="hidden lg:block">
        based in Indonesia
      </h2>

      <!-- Description -->
      <p class="font-basis font-normal text-[18px] leading-[28px] text-[#3A4345]/80 m-0 max-w-[648px]">
        We work across Mobile App Design, Web Design, Web App/Dashboard Design, Website Development, and Logo & Brand
        Identity. Our team is full-time, dedicated, and hands-on from first sketch to final deployment.
      </p>

    </div>

    <!-- Partners Logo Area -->
    <div 
      class="flex flex-col p-8 items-stretch gap-4 bg-white rounded-lg w-full mt-4 shadow-sm overflow-hidden relative transition-all duration-1000 ease-out"
      :class="isVisibleLogos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="flex flex-row py-5 group">
        <!-- Primary Marquee -->
        <div class="flex animate-marquee gap-12 shrink-0 items-center pr-12">
          <img src="/images/partner-section/Logo.svg" alt="Partner 1" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-1.svg" alt="Partner 2" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-2.svg" alt="Partner 3" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-3.svg" alt="Partner 4" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-4.svg" alt="Partner 5" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-5.svg" alt="Partner 6" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
        </div>
        <!-- Duplicated Marquee for Infinite Scroll -->
        <div aria-hidden="true" class="flex animate-marquee gap-12 shrink-0 items-center pr-12">
          <img src="/images/partner-section/Logo.svg" alt="Partner 1" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-1.svg" alt="Partner 2" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-2.svg" alt="Partner 3" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-3.svg" alt="Partner 4" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-4.svg" alt="Partner 5" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/images/partner-section/Logo-5.svg" alt="Partner 6" class="h-8 lg:h-12 w-auto max-w-none opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}
</style>
