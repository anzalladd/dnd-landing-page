<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Add animation to the text and button
  gsap.fromTo(
    ".cta-content > *",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaRef.value,
        start: 'top 80%',
      }
    }
  )
})
</script>

<template>
  <section ref="ctaRef"
    class="w-full relative min-h-[50vh] flex flex-col items-center justify-center pb-0 md:pb-24 overflow-hidden bg-white">
    <!-- Cloud Background -->
    <div class="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      <!-- Left Cloud -->
      <img src="/images/cta/left_cloud.webp" alt=""
        class="absolute right-1/2 md:right-auto md:left-[-10%] bottom-0 w-[85%] sm:w-[70%] md:w-[45%] max-w-[600px] h-auto max-h-[80%] md:max-h-full object-contain object-right-bottom md:object-left-bottom opacity-90" />

      <!-- Right Cloud -->
      <img src="/images/cta/right_cloud.webp" alt=""
        class="absolute left-1/2 md:left-auto md:right-[-10%] bottom-0 w-[85%] sm:w-[70%] md:w-[45%] max-w-[600px] h-auto max-h-[80%] md:max-h-full object-contain object-left-bottom md:object-right-bottom opacity-90" />
    </div>

    <!-- Text Content -->
    <div
      class="cta-content relative z-10 flex flex-col items-center text-center max-w-[600px] pt-12 md:pt-20 mx-auto px-4 pb-12">
      <h2
        class="font-alegreya font-medium text-[26px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em]">
        <span class="text-[#A8A8A8]">Interested</span>
        <span class="text-[#121212]"> in working with us?</span>
      </h2>

      <p class="font-sans text-[#545454] text-[16px] md:text-[18px] leading-[26px] mt-4 md:mt-6 max-w-[500px]">
        One relaxed conversation could be the start of something big. Grab a coffee, pick your slot, and tell us your
        idea.
      </p>

      <img src="/images/hero/arrow.webp" alt="Arrow" class="h-24 md:h-24 w-auto -rotate-90 object-contain opacity-80" />

      <button
        class="bg-[#121212] text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-sans font-medium text-[16px] flex items-center justify-center gap-3 hover:bg-[#2a2a2a] transition-colors shadow-lg group">
        Book a call
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped></style>
