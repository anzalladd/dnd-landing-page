<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const workSectionRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Simple fade-up for header
  gsap.fromTo(
    headerRef.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.value,
        start: 'top 80%',
      },
    }
  )

  // Stagger fade-up for cards
  if (workSectionRef.value) {
    const cards = workSectionRef.value.querySelectorAll('.work-card')
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })
  }
})
</script>

<template>
  <section id="work" ref="workSectionRef" class="w-full relative pb-24 flex flex-col items-center overflow-hidden">
    <!-- Header Banner -->
    <div ref="headerRef"
      class="relative w-full min-h-[40vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden">

      <!-- Cloud/Angel Background Image -->
      <div
        class="absolute inset-0 top-0 left-0 w-full h-full pointer-events-none select-none z-0 flex justify-center items-center overflow-hidden">
        <img src="/images/work/works_bg.webp" alt="" class="w-full h-full object-cover object-center opacity-90" />
      </div>

      <!-- Text Content -->
      <div class="relative z-10 flex flex-col items-center text-center max-w-[700px] mx-auto">
        <h2
          class="font-serif mt-10 md:mt-0 text-[#A8A8A8] text-[26px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em]">
          Our work.
        </h2>
        <h2
          class="font-serif w-[70%] md:w-full text-[#121212] text-[26px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em] mt-1 md:mt-2">
          Recent case studies, plus a few things we built just because we wanted to.
        </h2>
      </div>
    </div>

    <!-- Case Studies Grid -->
    <div
      class="relative z-10 w-full max-w-[1320px] px-6 md:px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">

      <!-- Card 1 (RMA) -->
      <div class="work-card flex flex-col gap-5 cursor-pointer group">
        <div class="w-full overflow-hidden aspect-[4/3] md:aspect-[1.2]">
          <img src="/images/work/kv-rma.webp" alt="RMA - EZY HRMS"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div class="flex flex-col gap-4 px-1">
          <h3 class="font-serif text-[#121212] text-[24px] md:text-[26px] leading-tight">RMA - EZY HRMS</h3>
          <div class="flex items-center gap-3">
            <span class="font-sans text-[14px] text-[#121212] opacity-80">Product Design & UX Audit</span>
          </div>
        </div>
      </div>

      <!-- Card 2 (Tam Jiak) -->
      <div class="work-card flex flex-col gap-5 cursor-pointer group mt-0 md:mt-24">
        <div class="w-full overflow-hidden aspect-[4/3] md:aspect-[1.2]">
          <img src="/images/work/kv-tamjiak.webp" alt="Tam Jiak"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div class="flex flex-col gap-4 px-1">
          <h3 class="font-serif text-[#121212] text-[24px] md:text-[26px] leading-tight">Tam Jiak - Asian Restaurant by
            Ho Jiak Group</h3>
          <div class="flex items-center gap-3">
            <span class="font-sans text-[14px] text-[#121212] opacity-80">Web Design</span>
          </div>
        </div>
      </div>

      <!-- Card 3 (Get.Ai) -->
      <div class="work-card flex flex-col gap-5 cursor-pointer group">
        <div class="w-full overflow-hidden aspect-[4/3] md:aspect-[1.2]">
          <img src="/images/work/kv-get.webp" alt="Get.Ai"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div class="flex flex-col gap-4 px-1">
          <h3 class="font-serif text-[#121212] text-[24px] md:text-[26px] leading-tight">Get.Ai - Nigerian Financial &
            Payment App</h3>
          <div class="flex items-center gap-3">
            <span class="font-sans text-[14px] text-[#121212] opacity-80">Product Design & Brand Identity</span>
          </div>
        </div>
      </div>

      <!-- Card 4 (Trovant) -->
      <div class="work-card flex flex-col gap-5 cursor-pointer group mt-0 md:mt-24">
        <div class="w-full overflow-hidden aspect-[4/3] md:aspect-[1.2]">
          <img src="/images/work/kv-trovant.webp" alt="Trovant"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
        </div>
        <div class="flex flex-col gap-4 px-1">
          <h3 class="font-serif text-[#121212] text-[24px] md:text-[26px] leading-tight">Trovant - Healthcare
            Distributor Website</h3>
          <div class="flex items-center gap-3">
            <span class="font-sans text-[14px] text-[#121212] opacity-80">Full Cycle Rebrand</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
