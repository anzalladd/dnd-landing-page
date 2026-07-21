<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const footerRef = ref(null)
const h2Ref = ref(null)
const pRef = ref(null)
const navRef = ref(null)

onMounted(() => {
  gsap.fromTo(
    [h2Ref.value, pRef.value, navRef.value],
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.value,
        start: 'top 80%',
      }
    }
  )
})
</script>

<template>
  <footer ref="footerRef"
    class="w-full relative min-h-[50vh] md:min-h-[100vh] flex flex-col items-center justify-start pt-24 pb-12 px-4 overflow-hidden bg-[#121212]">
    <!-- Background Image -->
    <div class="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      <img src="/images/footer/footer_bg.webp" alt=""
        class="absolute bottom-[-120px] left-0 w-full min-h-[50vh] object-cover" />
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center text-center w-full max-w-[1000px] mx-auto px-4">
      <h2 ref="h2Ref" class="font-serif text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] text-white">
        <span class="text-[#A8A8A8]">Creativity</span> is the last bastion<br class="hidden md:block" /> of human
        exceptionalism.
      </h2>

      <p ref="pRef"
        class="font-sans text-[#A8A8A8] text-[15px] md:text-[18px] leading-[24px] md:leading-[26px] mt-6 md:mt-8 max-w-[500px]">
        Because when you can build anything...How it feels,<br class="hidden md:block" /> well, that's everything.
      </p>

      <!-- Navigation / Links -->
      <div ref="navRef"
        class="flex flex-col md:flex-row items-center justify-between w-full mt-8 md:mt-12 gap-8 md:gap-0">
        <!-- Logo -->
        <div class="flex items-center justify-center md:justify-start w-full md:w-32">
          <img src="/images/logo_white.svg" alt="D&D Logo" class="h-6 md:h-8 object-contain" />
        </div>

        <!-- Links -->
        <div
          class="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-sans text-[13px] md:text-[14px] text-[#A8A8A8]">
          <a href="#" class="hover:text-white transition-colors">Info</a>
          <a href="#" class="hover:text-white transition-colors">Works</a>
          <a href="#" class="hover:text-white transition-colors">Dribbble</a>
          <a href="#" class="hover:text-white transition-colors">Instagram</a>
          <a href="#" class="hover:text-white transition-colors">Email</a>
        </div>

        <!-- Copyright -->
        <div
          class="font-sans text-[13px] md:text-[14px] text-[#A8A8A8] flex justify-center md:justify-end w-full md:w-32">
          ©2026 D&D
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
